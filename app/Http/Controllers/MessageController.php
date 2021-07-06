<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function sendMessage(Request $request){

        $this->validate($request, [
            'fullName' => 'required'
        ]);
        //sending email
        return [
            'success' => true
        ];
    }
}
