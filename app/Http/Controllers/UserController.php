<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password as ResetPassword;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UserController extends Controller
{

    public function register(Request $input)
    {
        $this->validate($input, [
            'name' => 'required|string',
            'email' => ['required', 'email', Rule::unique(User::class, 'email')],
            'password' => ['required', 'confirmed', 'string', Password::min(6)],
            //->numbers()->mixedCase()->symbols()s
        ]);

        User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        return $this->token($input);
    }


    public function token(Request $request)
    {
        // authentication attempt - using credentials from request
        if (Auth::attempt($request->all())) {

            // storing authenticated user into variable
            $user = Auth::user();

            // revoking all existing tokens
            $user->tokens()->delete();

            // create new auth token
            $token = $user->createToken('token-name');

            return [
                'message' => 'success',
                'user' => $user,
                'token' => $token->plainTextToken,
            ];
        }

        return [
            'message' => 'invalid'
        ];
    }

    public function user()
    {
        $user = Auth::user();

        return [
            'user' => $user
        ];
    }

    public function logout()
    {

        $user = Auth::user();

        $user->tokens()->delete();
    }

    public function check()
    {

        return "Valid";
    }


    public function updatePassword(Request $request,
    UpdateUserPassword $updater)
    {

    if ($updater->update($request->user(), $request->all()))
    {
      return "success";

    }
  }

    public function updateProfile(Request $request,
    UpdatesUserProfileInformation $updater)
    {

    if ($updater->update($request->user(), $request->all()))
    {
      return "success";

    }



    }


}
