<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use Illuminate\Support\Facades\Validator;

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

    public function getproduct($id)
    {
        $products = product::find($id);
        if ($products) {
            return response()->json([
                'status' => 200,
                "product" => $products
            ]);
        } else {
            return response()->json([
                'status' => 404,
                "message" => 'No product found'
            ]);
        }
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
            "petType" => 'required',
            "productCategory" => 'required',
            "productType" => 'required',
            "productBrand" => 'required',
            "productName" => 'required',
            "price" => 'required|regex:/^\d+(\.\d{1,2})?$/',
            "suitability" => 'required',
            "productImage" => "mimes:jpeg,png,jpg"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $products = new product();

            $products->petType = $request->input('petType');
            $products->productCategory = $request->input('productCategory');
            $products->productType = $request->input('productType');
            $products->productBrand = $request->input('productBrand');
            $products->productName = $request->input('productName');
            $products->price = $request->input('price');
            $products->description = $request->input('description');
            $products->suitability = $request->input('suitability');
            $products->madeIn = $request->input('madeIn');


            $product_name = time() . '.' . $request->productImage->extension();
            $request->productImage->move(public_path('/images/product'), $product_name);

            $products->productImage = $product_name;

            $products->save();
            return response()->json([
                'status' => 200,
                'message' => 'Product Added Successfully',
            ]);
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
    public function update(Request $request, $id)
    {
        $validator  = Validator::make($request->all(), [
            "petType" => 'required',
            "productCategory" => 'required',
            "productType" => 'required',
            "productBrand" => 'required',
            "productName" => 'required',
            "price" => 'required|regex:/^\d+(\.\d{1,2})?$/',
            "suitability" => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $products = product::find($id);

            if ($products) {
                $products->petType = $request->input('petType');
                $products->productCategory = $request->input('productCategory');
                $products->productType = $request->input('productType');
                $products->productBrand = $request->input('productBrand');
                $products->productName = $request->input('productName');
                $products->price = $request->input('price');
                $products->description = $request->input('description');
                $products->suitability = $request->input('suitability');
                $products->madeIn = $request->input('madeIn');


                if ($product_name = $request->file('productImage')) {
                    $product_name = time() . '.' . $request->productImage->extension();
                    $request->productImage->move(public_path('/images/product'), $product_name);

                    $products->productImage = $product_name;
                } else {
                    unset($products['productImage']);
                }

                $products->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Product Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 422,
                    'message' => 'Product Not Found',
                ]);
            }
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
        $products = product::find($id);

        if ($products) {
            $products->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Product Deleted Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Product Not Found',
            ]);
        }
    }
}
