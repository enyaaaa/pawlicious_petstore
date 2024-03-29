<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\recipeReview;

class RecipeReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return recipeReview::all();
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
        $recipereview = new recipeReview();

        $recipereview->recipeId = $request->input('recipeId');
        $recipereview->userId = $request->input('userId');
        $recipereview->review = $request->input('review');
        $recipereview->uploadImage = $request->input('uploadImage');
        $recipereview->rating = $request->input('rating');

        if($recipereview->save()){
            return $recipereview;
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
        $recipereview = recipeReview::find($request->id);

        $recipereview->review = $request->input('review');
        $recipereview->uploadImage = $request->input('uploadImage');
        $recipereview->rating = $request->input('rating');

        if($recipereview->save()){
            return $recipereview;
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
        $recipereview = recipeReview::find($request->id);

        if($recipereview->delete()){
            return $recipereview;
        }
    }
}
