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



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// All-use API
Route::get('/table/getPrevious', 'ApiController@getPrevious');
Route::get('/table/getPhrases', 'ApiController@getPhrases');
Route::get('/table/getLanguage', 'ApiController@getLanguage');
Route::get('/table/translate', 'ApiController@translate');
Route::get('/table/phraseWithTranslation', 'ApiController@getTranlations');
Route::get('/table/{type}', 'ApiController@showType');


// Send a message through contact form
Route::post('/sendMessage', 'MessageController@sendMessage');



// Login / Logout / Register

Route::post('token', 'UserController@token');
Route::post('/new-register', 'UserController@register');
Route::post('logout', 'UserController@logout')->middleware('auth:sanctum');


// Check if user Exists
Route::get('user', 'UserController@user')->middleware('auth:sanctum');
Route::get('checkLogged', 'UserController@check')->middleware('auth:sanctum');

//admin

// phrases admin
Route::post('/phrase/new', 'PhraseController@store')->middleware(['auth:sanctum','isAdmin']);
Route::put('/phrases/{phraseId}', 'PhraseController@update')->middleware(['auth:sanctum','isAdmin']);
Route::get('/phrases', 'PhraseController@listPhrases')->middleware(['auth:sanctum','isAdmin']);
//Route::resource('/secret/admin', 'adminAPI');
// Paths to obtain Phrases/Language/Translation

//Add Favorite
Route::post('/phrase/addFavorite', 'AddFavoritePhraseController@addFavorite')->middleware('auth:sanctum');
Route::post('/phrase/removeFavorite', 'AddFavoritePhraseController@removeFavorite')->middleware('auth:sanctum');
Route::post('/phrase/checkFavorite', 'AddFavoritePhraseController@checkFavorite');
