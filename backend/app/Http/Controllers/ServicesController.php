<?php

namespace App\Http\Controllers;

use App\Models\services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return services::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator  = Validator::make($request->all(), [
            "serviceType" => 'required',
            "email" => 'required|email|max:191',
            "mobile" => 'required|max:8',
            "appointmentDate" => 'required',
            "appointmentTime" => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {

            $service = new services();

            $service->userId = $request->input('userId');
            $service->serviceType = $request->input('serviceType');
            $service->furPetName = $request->input('furPetName');
            $service->email = $request->input('email');
            $service->mobile = $request->input('mobile');
            $service->appointmentDate = $request->input('appointmentDate');
            $service->appointmentTime = $request->input('appointmentTime');

            $service->save();
            return response()->json([
                'status' => 200,
                'message' => 'Appointment Booked Successfully',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator  = Validator::make($request->all(), [
            "serviceType" => 'required',
            "email" => 'required|email|max:191',
            "mobile" => 'required|max:8',
            "appointmentDate" => 'required',
            "appointmentTime" => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {

            $service = services::find($id);

            $service->serviceType = $request->input('serviceType');
            $service->furPetName = $request->input('furPetName');
            $service->email = $request->input('email');
            $service->mobile = $request->input('mobile');
            $service->appointmentDate = $request->input('appointmentDate');
            $service->appointmentTime = $request->input('appointmentTime');

            $service->save();
            return response()->json([
                'status' => 200,
                'message' => 'Appointment Updated Successfully',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = services::find($id);

        if ($service->delete()) {
            return response()->json([
                'status' => 200,
                'message' => 'Appointment Deleted Successfully',
            ]);
        }
    }
}
