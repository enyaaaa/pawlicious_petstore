<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\ProductReviewsController;
use App\Http\Controllers\RecipeReviewsController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\CartController;
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

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', 'App\Http\Controllers\UsersController@logout');
    
});

Route::apiResource('users', UsersController::class);
Route::get('profile', 'App\Http\Controllers\UsersController@viewprofile');
Route::post('updateprofile', 'App\Http\Controllers\UsersController@editprofile');

Route::apiResource('products', ProductsController::class);
Route::get('products/{petType}', "App\Http\Controllers\ProductsController@show");
Route::get('product/{id}', "App\Http\Controllers\ProductsController@getproduct");
Route::post('updateproduct/{id}', 'App\Http\Controllers\ProductsController@update');
Route::delete('products/{id}', 'App\Http\Controllers\ProductsController@destroy');

Route::apiResource('recipes', RecipesController::class);
Route::post('updaterecipes', 'App\Http\Controllers\RecipesController@update');
Route::delete('recipes', 'App\Http\Controllers\RecipesController@destroy');

Route::apiResource('product_reviews', ProductReviewsController::class);
Route::post('updateproduct_reviews', 'App\Http\Controllers\ProductReviewsController@update');
Route::delete('product_reviews', 'App\Http\Controllers\ProductReviewsController@destroy');

Route::apiResource('recipe_reviews', RecipeReviewsController::class);
Route::post('updaterecipe_reviews', 'App\Http\Controllers\RecipeReviewsController@update');
Route::delete('recipe_reviews', 'App\Http\Controllers\RecipeReviewsController@destroy');

Route::apiResource('services', ServicesController::class);
Route::post('updateservices/{id}', 'App\Http\Controllers\ServicesController@update');
Route::delete('services', 'App\Http\Controllers\ServicesController@destroy');

Route::apiResource('addtocart', CartController::class);
Route::post('addtocart', 'App\Http\Controllers\CartController@addtocart');
Route::get('cart', 'App\Http\Controllers\CartController@viewcart');
Route::put('cartUpdateQty/{cardId}/{scope}','App\Http\Controllers\CartController@updateQty');
Route::delete('deletecartitem/{cardId}','App\Http\Controllers\CartController@delete');

Route::apiResource('orders', OrdersController::class);
Route::delete('orders', 'App\Http\Controllers\OrdersController@destroy');

Route::apiResource('user', UsersController::class);

Route::post('register', 'App\Http\Controllers\UsersController@register');
Route::post('login', 'App\Http\Controllers\UsersController@login');
