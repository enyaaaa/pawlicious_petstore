<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsersController extends Controller
{
    public function register (Request $request){
        $user = User::find($request->input('username'));
    
        if($user){
            return response()->json (['error' => 'User already exists!']);
        }
    
        $user = new User;
    
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->mobile = $request->input('mobile');
        $user->profilePic = $request->input('profilePic');

        $user->token = '';
    
        $user->save();
    
        return $user;
    
        }
    
        public function login (Request $request){
            $user = User::where('username', $request->input('username'))->first();
    
            if ($user != null){
                if ($request -> password == $user->password){
                    $user->token = Str::random(60);
                    $user->save();
    
                    return response()->json([
                        'username' => $user->username,
                        'token' => $user->token,
                    ]);
                } else {
                    return response()->json(['message' => 'Invalid Password']);
                }
            } else {
                return response()->json(['message' => 'Username not found']);
            }
        }
}
