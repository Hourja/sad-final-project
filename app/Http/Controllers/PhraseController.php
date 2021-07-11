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
    public function store(Request $request)
    {

        $this->validate($request, [
            'phrase' => 'required|string|max:255',
            'translations' => 'required|array|max:255',
            'translations.*' => 'required|array|max:255',
            'translations.*.translation' => 'required|string|max:255',
            'translations.*.language_id' => ['required', 'numeric', 'max:255', Rule::exists(Language::class, 'id')],
            'topic' => ['required', 'numeric', 'max:255', Rule::exists(Topic::class, 'id')]
        ]);

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

    public function listPhrases()
    {
        return Phrase::with('translations')->get();
    }
}
