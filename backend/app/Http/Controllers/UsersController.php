<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function register(Request $request)
    {

        $validator  = Validator::make($request->all(), [
            "username" => 'required|max:191',
            "email" => 'required|email|max:191|unique:users,email',
            "password" => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $user = User::create([
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'mobile' => $request->mobile,
                'profilePic' => $request->profilePic,
            ]);

            $token = $user->createToken($user->email . 'token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'username' => $user->username,
                'token' => $token,
                'message' => 'Registered Successfully'
            ]);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:191',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Invalid',
                ]);
            } else {
                $token = $user->createToken($user->email.'token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->username,
                    'token' => $token,
                    'roles' => $user->roles,
                    'message' => 'Logged in Successfully'
                ]);
            }
        }
    }

    public function logout(Request $request){

        $request->user()->tokens()->delete();
        
        return response()->json([
            "status"=>200,
            "message"=>"Logged out successfully",
        ]);
    }

    public function index()
    {
        return User::all();
    }
}
