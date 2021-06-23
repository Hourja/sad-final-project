<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\City;
use App\Models\Phrase;
use App\Models\Topic;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function dataALL()
    {

        $cities = City::with('category')->get();
        $categories = Category::with('topic')->get();
        $topics = Topic::with('phrase')->get();


        return [['cities' => $cities], ['categories' => $categories], ['topics' => $topics]];
    }
}
