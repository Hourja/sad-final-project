<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactUsEmail;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    public function sendMessage(Request $request){


        
       $this->validate($request, [
            'fullName' => 'required',
            'email' => 'required|email:rfc,dns',
            'subject' => 'required'
        ]);

        Mail::to('amandabcarneiro9@gmail.com')
            ->send(new ContactUsEmail(
                $request->input('fullName'),
                 $request->input('email'),
                $request->input('subject')
            ));

        return [
            'success' => true
        ];
    }
}
