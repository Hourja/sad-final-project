<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\City;
use App\Models\Language;
use App\Models\Phrase;
use App\Models\Topic;
use Illuminate\Http\Request;
use App\Models\Translation;


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
                $my_type = Topic::with('phrases')->get();
                break;
            case 'cities':
                $my_type = City::get();
                break;
            case 'languages':
                $my_type = Language::get();
                break;
            case 'phrases':
                $my_type = Phrase::get();
                break;
            case 'translations':
                $my_type = Translation::get();
                break;

            default;
                echo "No such data found";
        }

        return $my_type;
    }

    public function getPhrases($topic_id)
    {

        $phrases = Phrase::where('topic_id', $topic_id)->get();

        return $phrases;
    }
}
