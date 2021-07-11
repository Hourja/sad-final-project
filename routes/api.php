<?php

use App\Http\Controllers\adminAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('/secret/admin', 'adminAPI');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Paths to obtain Phrases/Language/Translation
Route::get('/table/getPrevious', 'ApiController@getPrevious');
Route::get('/table/getPhrases', 'ApiController@getPhrases');
Route::get('/table/getLanguage', 'ApiController@getLanguage');
Route::get('/table/translate', 'ApiController@translate');
Route::get('/table/phraseWithTranslation', 'ApiController@getTranlations');

// All-use API

Route::get('/table/{type}', 'ApiController@showType');


// Send a message through contact form
Route::post('/sendMessage', 'MessageController@sendMessage');



// Login / Logout / Register

Route::post('token', 'UserController@token');
Route::post('logout', 'UserController@logout')->middleware('auth:sanctum');
Route::post('/new-register', 'UserController@register');

// Check if user Exists
Route::get('user', 'UserController@user')->middleware('auth:sanctum');
Route::get('checkLogged', 'UserController@check')->middleware('auth:sanctum');


// Create new phrase
Route::post('/phrase/new', 'PhraseController@store')->middleware('auth:sanctum');;
Route::post('/edit/phrase', 'adminAPI@edit')->middleware('auth:sanctum');
