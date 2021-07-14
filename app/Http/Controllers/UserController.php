<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\PasswordReset;
use App\Actions\Fortify\UpdateUserPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password as PasswordRule;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;
use Illuminate\Support\Str;


class UserController extends Controller
{

    public function register(Request $input)
    {
        $this->validate($input, [
            'name' => 'required|string',
            'email' => ['required', 'email', Rule::unique(User::class, 'email')],
            'password' => ['required', 'confirmed', 'string', PasswordRule::min(8)->numbers()->symbols()->mixedCase()],
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

    public function resetPassword(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();
        if($user){
            Password::sendResetLink($request->only('email'));
        }
        
        return ["message" => "success"];
    }

    public function updateProfile(Request $request,
    UpdatesUserProfileInformation $updater)
    {
        if ($updater->update($request->user(), $request->all()))
        {
        return "success";

        }
    }



    public function recoverPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', 'string', PasswordRule::min(8)->numbers()->symbols()->mixedCase()]
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return ['status' => $status];
    }


}
