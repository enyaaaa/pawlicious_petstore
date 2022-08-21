<?php

namespace App\Http\Controllers;

use App\Models\recipes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function getrecipe($id)
    {
        $recipe = recipes::find($id);
        if ($recipe) {
            return response()->json([
                'status' => 200,
                "product" => $recipe
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
            "title" => 'required',
            "ingredients" => 'required',
            "nutritionalValues" => 'required',
            "productImage" => "mimes:jpeg,png,jpg"
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $recipe = new recipes();

            $recipe->title = $request->input('title');
            $recipe->video = $request->input('video');
            $recipe->ingredients = $request->input('ingredients');
            $recipe->directions = $request->input('directions');
            $recipe->nutritionalValues = $request->input('nutritionalValues');


            $recipe_name = time() . '.' . $request->recipeImage->extension();
            $request->recipeImage->move(public_path('/images/recipe'), $recipe_name);

            $recipe->recipeImage = $recipe_name;

            $recipe->save();
            return response()->json([
                'status' => 200,
                'message' => 'Recipe Added Successfully',
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
            "title" => 'required',
            "ingredients" => 'required',
            "nutritionalValues" => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => 'Some fields are missing',
                'validation_errors' => $validator->errors(),
            ]);
        } else {
            $recipe = recipes::find($id);

            if ($recipe) {
                $recipe->title = $request->input('title');
                $recipe->video = $request->input('video');
                $recipe->ingredients = $request->input('ingredients');
                $recipe->directions = $request->input('directions');
                $recipe->nutritionalValues = $request->input('nutritionalValues');


                if ($recipe_name = $request->file('recipeImage')) {
                    $recipe_name = time() . '.' . $request->recipeImage->extension();
                    $request->recipeImage->move(public_path('/images/recipe'), $recipe_name);

                    $recipe->productImage = $recipe_name;
                } else {
                    unset($recipe['recipeImage']);
                }

                $recipe->update();
                return response()->json([
                    'status' => 200,
                    'message' => 'Recipe Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 422,
                    'message' => 'Recipe Not Found',
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
    public function destroy(Request $request)
    {
        $recipe = recipes::find($request->id);

        if ($recipe->delete()) {
            return $recipe;
        }
    }
}
