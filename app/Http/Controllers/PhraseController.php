<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Phrase;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Topic;
use App\Models\Translation;



class PhraseController extends Controller
{
    private $newPhraseValidations;

    public function __construct()
    {
        $this->newPhraseValidations = [
            'phrase' => 'required|string|max:255',
            'translations' => 'required|array|max:255',
            'translations.*' => 'required|array|max:255',
            'translations.*.translation' => 'required|string|max:255',
            'translations.*.language_id' => ['required', 'numeric', 'max:255', Rule::exists(Language::class, 'id')],
            'topic' => ['required', 'numeric', Rule::exists(Topic::class, 'id')]
        ];
    }

    public function listPhrases()
    {
        return Phrase::with('translations')->get();
    }

    public function store(Request $request)
    {
        if ($this->validate($request, $this->newPhraseValidations)){

          $phrase = new Phrase;
          $phrase->topic_id = $request->topic;
          $phrase->name = $request->phrase;
          $phrase->save();

          foreach ($request->translations as $translation) {

              $newTranslation = new Translation;
              $newTranslation->language_id = $translation['language_id'];
              $newTranslation->name = $translation['translation'];
              $newTranslation->phrase_id = $phrase->id;
              $newTranslation->save();
          };

          return ['message' => 'success'];
        }


        return ['errors' => 'Incorrect Input'];


    }

    public function update(Request $request, String $phraseId)
    {
        $request->merge(['phraseId' => $phraseId]);
        $this->validate($request, array_merge($this->newPhraseValidations, [
            'phraseId' => ['required', 'numeric', Rule::exists(Phrase::class, 'id')],
        ]));

        $phrase = Phrase::with('translations')->find($phraseId);


        $phrase->topic_id = $request->input('topic');
        $phrase->name = $request->input('phrase');
        foreach($request->input('translations') as $translation){
            $translation_in_db = Translation::where('phrase_id',$phraseId)
            ->where('language_id',$translation['language_id'])
            ->first();

            $translation_in_db->name = $translation['translation'];
            $translation_in_db->save();
        }

        $phrase->save();
        return ['message' => 'success'];
    }

    public function destroy(Request $request)
    {

        if (Phrase::destroy($request->phraseId)) {
            return ['message' => 'success'];
        };

        return ['message' => 'Failed to delete'];
    }
}
