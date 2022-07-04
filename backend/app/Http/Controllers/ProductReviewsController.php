<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\productReview;

class ProductReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return productReview::all();
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
        $productreview = new productReview();

        $productreview->productId = $request->input('productId');
        $productreview->userId = $request->input('userId');
        $productreview->review = $request->input('review');
        $productreview->uploadImage = $request->input('uploadImage');
        $productreview->rating = $request->input('rating');

        if($productreview->save()){
            return $productreview;
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
        $productreview = productReview::find($request->id);

        $productreview->review = $request->input('review');
        $productreview->uploadImage = $request->input('uploadImage');
        $productreview->rating = $request->input('rating');

        if($productreview->save()){
            return $productreview;
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
        $productreview = productReview::find($request->id);

        if($productreview->delete()){
            return $productreview;
        }
    }
}
