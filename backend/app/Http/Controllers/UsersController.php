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
            "username" => 'required|max:191|unique:users,username',
            "email" => 'required|email|max:191|unique:users,email',
            "mobile" => 'required|max:10|unique:users,mobile',
            "password" => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
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
                'mobile' => $user->mobile,
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
                    'status' => 404,
                    'message' => 'Invalid',
                ]);
            } else {
                $token = $user->createToken($user->email . 'token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->username,
                    'token' => $token,
                    'roles' => $user->roles,
                    'userid' => $user->id,
                    'email' => $user->email,
                    'mobile' => $user->mobile,
                    'message' => 'Logged in Successfully'
                ]);
            }
        }
    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();

        return response()->json([
            "status" => 200,
            "message" => "Logged out successfully",
        ]);
    }

    public function viewprofile()
    {
        if (auth('sanctum')->check()) {
            $userId = auth('sanctum')->user()->id;
            $profile = User::where('id', $userId)->get();
            return response()->json([
                'status' => 200,
                'profile' => $profile,
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to view profile',
            ]);
        }
    }

    public function editprofile(Request $request)
    {
        if (auth('sanctum')->check()) {
            $userId = auth('sanctum')->user()->id;
            $profile = User::where('id', $userId)->first();
            $validator  = Validator::make($request->all(), [
                "username" => 'required|max:191',
                "mobile" => 'required|max:10',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 404,
                    'message' => 'Some fields are missing',
                    'validation_errors' => $validator->errors(),
                ]);
            } else {

                $profile->username = $request->input('username');
                $profile->mobile = $request->input('mobile');

                if ($profileImage = $request->file('profilePic')) {
                    $profileImage = time() . '.' . $request->profilePic->extension();
                    $request->profilePic->move(public_path('/images/profilepic'), $profileImage);

                    $profile->profilePic = $profileImage;
                } else {
                    unset($profile['profileImage']);
                }

                $profile->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Profile Updated Successfully',
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue',
            ]);
        }
    }

    public function index()
    {
        return User::all();
    }
}
