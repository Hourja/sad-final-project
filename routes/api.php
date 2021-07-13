<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\NewPasswordController;

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
Route::prefix('table')->group(

    function () {
        Route::get('/getPrevious', 'ApiController@getPrevious');
        Route::get('/getPhrases', 'ApiController@getPhrases');
        Route::get('/getLanguage', 'ApiController@getLanguage');
        Route::get('/translate', 'ApiController@translate');
        Route::get('/phraseWithTranslation', 'ApiController@getTranlations');
        Route::get('/{type}', 'ApiController@showType');
    }
);

//Categories + City
Route::get('/cities/{citySlug}', 'CityController@getCity');
Route::get('/testimonials', 'TestimonialsController@getTestimonials');
Route::get('/my-categories', 'ApiController@getUserCategories')->middleware('auth:sanctum');
Route::get('/categories/{categoryId}/my-phrases', 'ApiController@getUserPhrasesByCategory')->middleware('auth:sanctum');


// Send a message through contact form
Route::post('/sendMessage', 'MessageController@sendMessage');


// Login / Logout / Register

Route::post('token', 'UserController@token');
Route::post('/new-register', 'UserController@register');
Route::post('logout', 'UserController@logout')->middleware('auth:sanctum');

Route::post('/profile/update-password', 'UserController@updatePassword')->middleware('auth:sanctum');;


// Check if user Exists
Route::get('user', 'UserController@user')->middleware('auth:sanctum');
Route::get('checkLogged', 'UserController@check')->middleware('auth:sanctum');

//admin

// phrases admin
Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {

    Route::post('/phrase/new', 'PhraseController@store');


    Route::prefix('phrases')->group(function () {
        //Phrases Controller

        Route::get('/', 'PhraseController@listPhrases');
        Route::put('/{phraseId}', 'PhraseController@update');
        Route::delete('/delete/{phraseId}', 'PhraseController@destroy');
    });
});


//Add Favorite
Route::middleware(['auth:sanctum'])->group(function () {

    Route::prefix('phrase')->group(function () {

        Route::post('/addFavorite', 'FavoritePhraseController@addFavorite');
        Route::post('/removeFavorite', 'FavoritePhraseController@removeFavorite');
        Route::post('/checkFavorite', 'FavoritePhraseController@checkFavorite');
        Route::get('/getFavorite', 'FavoritePhraseController@show');
    });
});
