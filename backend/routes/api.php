<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\ProductReviewsController;
use App\Http\Controllers\RecipeReviewsController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\OrdersController;
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

Route::middleware(['auth:sanctum'])->group(function (){
    Route::post('logout', 'App\Http\Controllers\UsersController@logout');
});

Route::apiResource('products', ProductsController::class);
Route::put('products', 'App\Http\Controllers\ProductsController@update');
Route::delete('products', 'App\Http\Controllers\ProductsController@destroy');

Route::apiResource('recipes', RecipesController::class);
Route::put('recipes', 'App\Http\Controllers\RecipesController@update');
Route::delete('recipes', 'App\Http\Controllers\RecipesController@destroy');

Route::apiResource('product_reviews', ProductReviewsController::class);
Route::put('product_reviews', 'App\Http\Controllers\ProductReviewsController@update');
Route::delete('product_reviews', 'App\Http\Controllers\ProductReviewsController@destroy');

Route::apiResource('recipe_reviews', RecipeReviewsController::class);
Route::put('recipe_reviews', 'App\Http\Controllers\RecipeReviewsController@update');
Route::delete('recipe_reviews', 'App\Http\Controllers\RecipeReviewsController@destroy');

Route::apiResource('services', ServicesController::class);
Route::put('services', 'App\Http\Controllers\ServicesController@update');
Route::delete('services', 'App\Http\Controllers\ServicesController@destroy');

Route::apiResource('orders', OrdersController::class);
Route::delete('orders', 'App\Http\Controllers\OrdersController@destroy');

Route::apiResource('user', UsersController::class);

Route::post('register', 'App\Http\Controllers\UsersController@register');
Route::post('login', 'App\Http\Controllers\UsersController@login');
