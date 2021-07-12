<?php

namespace App\Http\Controllers;
use App\Models\City;

class CityController extends Controller
{
    public function getCity(String $citySlug)
    {
       $city =  City::where('slug', $citySlug)->first();

       return $city;
    }
}
