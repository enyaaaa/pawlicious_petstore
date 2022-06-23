<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\ProductReviewsController;
use App\Http\Controllers\RecipeReviewController;
use App\Http\Controllers\UsersController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    
});

Route::apiResource('products', ProductsController::class);
Route::apiResource('recipes', RecipesController::class);
Route::apiResource('product_reviews', ProductReviewsController::class);
Route::apiResource('recipe_reviews', RecipeReviewController::class);
Route::apiResource('user', UsersController::class);

Route::post('register', 'App\Http\Controllers\UsersController@register');
Route::post('login', 'App\Http\Controllers\UsersController@login');
