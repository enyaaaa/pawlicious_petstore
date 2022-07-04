<?php

namespace App\Http\Controllers;

use App\Models\services;
use Illuminate\Http\Request;

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
        $service = new services();

        $service->userId = $request->input('userId');
        $service->serviceType = $request->input('serviceType');
        $service->furPetName = $request->input('furPetName');
        $service->email = $request->input('email');
        $service->mobile = $request->input('mobile');
        $service->appointmentDate = $request->input('appointmentDate');
        $service->appointmentTime = $request->input('appointmentTime');

        if($service->save()){
            return $service;
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
    public function update(Request $request)
    {
        $service = services::find($request->id);

        $service->serviceType = $request->input('serviceType');
        $service->furPetName = $request->input('furPetName');
        $service->email = $request->input('email');
        $service->mobile = $request->input('mobile');
        $service->appointmentDate = $request->input('appointmentDate');
        $service->appointmentTime = $request->input('appointmentTime');

        if($service->save()){
            return $service;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $service = services::find($request->id);

        if($service->delete()){
            return $service;
        }
    }
}
