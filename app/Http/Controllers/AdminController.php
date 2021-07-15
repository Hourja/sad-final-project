<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $input)
    {

        $this->validate($input, [
            'phrase' => 'required|string',
            'topic' => 'required'
        ]);
        return ['message' => 'success'];
    }
}
