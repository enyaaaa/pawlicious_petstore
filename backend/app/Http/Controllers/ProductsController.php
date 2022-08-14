<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return product::all();
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
        $products = new product();

        $products->petType = $request->input('petType');
        $products->productCategory = $request->input('productCategory');
        $products->productType = $request->input('productType');
        $products->productBrand = $request->input('productBrand');
        $products->productName = $request->input('productName');
        $products->productImage = $request->input('productImage');
        $products->price = $request->input('price');
        $products->description = $request->input('description');
        $products->suitability = $request->input('suitability');
        $products->madeIn = $request->input('madeIn');

        if($products->save()){
            return $products;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($petType)
    {
        $products = product::where("petType", $petType)->get();
        return $products;
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
        $products = product::find($request->id);

        $products->petType = $request->input('petType');
        $products->productCategory = $request->input('productCategory');
        $products->productType = $request->input('productType');
        $products->productBrand = $request->input('productBrand');
        $products->productName = $request->input('productName');
        $products->productImage = $request->input('productImage');
        $products->price = $request->input('price');
        $products->description = $request->input('description');
        $products->suitability = $request->input('suitability');
        $products->madeIn = $request->input('madeIn');

        if($products->save()){
            return $products;
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
        $products = product::find($request->id);

        if($products->delete()){
            return $products;
        }
    }
}
