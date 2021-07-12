<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Phrase;

class AddFavoritePhraseController extends Controller
{
    public function addFavorite(Request $request)
    {


        $user = User::findOrFail($request->userId);
        $phrase = Phrase::findOrFail($request->phraseId);


        if ($user && $phrase) {
            $user->phrases()->attach($phrase);

            return [
                'message' => 'success'
            ];
        }

        return [
            'message' => 'fail'
        ];
    }


    public function removeFavorite(Request $request)
    {

        $user = User::findOrFail($request->userId);
        $phrase = Phrase::findOrFail($request->phraseId);

        if ($user && $phrase) {
            $user->phrases()->detach($phrase);

            return [
                'message' => 'success'
            ];
        }

        return [
            'message' => 'fail'
        ];
    }


    public function checkFavorite(Request $request)
    {
        $phrase_id = $request->phraseId;
        $user = User::findOrFail($request->userId);

        $hasPhrase = $user->phrases()->where('phrase_id', $phrase_id)->exists();

        if ($hasPhrase) {

            return [
                'message' => $hasPhrase
            ];
        }

        return [
            'message' => $hasPhrase
        ];
    }
}
