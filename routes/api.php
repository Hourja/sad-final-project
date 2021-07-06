<?php

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

Route::get('/table/getPhrases/{topic_id}', 'ApiController@getPhrases');
Route::get('/table/getLanguage', 'ApiController@getLanguage');
Route::get('/table/translate', 'ApiController@translate');


Route::get('/table/{type}', 'ApiController@showType');

Route::post('/sendMessage', 'MessageController@sendMessage');

Route::post('/new-register', 'UserController@register');
Route::post('token', 'UserController@token');
Route::get('user', 'UserController@user')->middleware('auth:sanctum');
Route::get('checkLogged', 'UserController@check')->middleware('auth:sanctum');

Route::post('logout', 'UserController@logout')->middleware('auth:sanctum');
