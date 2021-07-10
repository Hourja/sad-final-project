<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\City;
use App\Models\Language;
use App\Models\Phrase;
use App\Models\Topic;
use Illuminate\Http\Request;
use App\Models\Translation;
use App\Models\Profile;

class ApiController extends Controller
{

    public function showType(Request $request, $type)
    {
        $my_type = null;

        switch ($type) {
            case 'categories':
                $my_type = Category::with('topics')
                    ->whereHas('cities', function ($query) use ($request) {
                        $query->where('cities.slug', $request->query('citySlug'));
                    })
                    //the whereHas is a way to search on the relationship table
                    ->get();
                break;
            case 'topics':
                $my_type = Topic::orderBy('name', 'asc')->get();
                break;
            case 'cities':
                $my_type = City::get();
                break;
            case 'languages':
                $my_type = Language::orderBy('id','asc')->with('translations')->get();
                break;
            case 'phrases':
                $my_type = Phrase::get();
                break;
            case 'translations':
                $my_type = Translation::get();
                break;
            case 'profiles':
                $my_type = Profile::get();
                break;
            default;
                echo "No such data found";
        }

        return $my_type;
    }

    public function getPhrases(Request $request)
    {

        $phrases = Phrase::where('topic_id', $request->query('topicId'))->get();

        return $phrases;
    }


    public function getLanguage(Request $request)
    {

        $phrases = City::with('language')->where('slug', $request->query('citySlug'))->first();

        return $phrases;
    }

    public function translate(Request $request)
    {

        $translation = Translation::where('phrase_id', $request->query('phraseId'))
            ->where('language_id', $request->query('languageId'))
            ->first();


        return $translation;
    }


    public function getTranlations(Request $request)
    {


        $phrases = Translation::whereHas('phrase', function ($query) use ($request) {
                $query->where('phrase_id', $request->query('phraseId'));
            })
            //the whereHas is a way to search on the relationship table
            ->get();

        // $languages = Language::get();
        return $phrases;



    }


    public function getPrevious(Request $request)

    {
       $phrase =  Phrase::findOrFail($request->query('phraseId'));
       $topic = Topic::findOrFail($phrase->topic_id);
       $translations = Translation::orderBy('language_id', 'asc')->whereHas('phrase', function ($query) use ($phrase) {
            $query->where('phrase_id', $phrase->id );
        })
            //the whereHas is a way to search on the relationship table
            ->get();

    // made my data look as useful as possible!

        $data=['id'=>$phrase->id,'name'=>$phrase->name,'topic_id'=>$topic->id,'topic_name'=>$topic->name,'translations'=>$translations];



    return $data ;

    }



}
