<?php

namespace App\Http\Controllers;

use App\Models\recipes;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return recipes::all();
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
        $recipe = new recipes();

        $recipe->title = $request->input('title');
        $recipe->recipeImage = $request->input('recipeImage');
        $recipe->video = $request->input('video');
        $recipe->ingredients = $request->input('ingredients');
        $recipe->directions = $request->input('directions');
        $recipe->nutritionalValues = $request->input('nutritionalValues');

        if($recipe->save()){
            return $recipe;
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
        $recipe = recipes::find($request->id);

        $recipe->title = $request->input('title');
        $recipe->recipeImage = $request->input('recipeImage');
        $recipe->video = $request->input('video');
        $recipe->ingredients = $request->input('ingredients');
        $recipe->directions = $request->input('directions');
        $recipe->nutritionalValues = $request->input('nutritionalValues');


        if($recipe->save()){
            return $recipe;
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
        $recipe = recipes::find($request->id);

        if($recipe->delete()){
            return $recipe;
        }
    }
}
