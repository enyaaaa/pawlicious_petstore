<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addtocart(Request $request){
        if(auth('sanctum')->check()){

            $userId = auth('sanctum')->user()->id;
            $productId = $request -> productId;
            $productQty = $request -> productQty;

            $productCheck = product::where('id', $productId)-> first();

            if($productCheck){

                if(cart::where('productId', $productId)->where('userId', $userId)->exists()){
                    return response()->json([
                        'status' => 409,
                        'message' => 'product is already in your cart',
                    ]);
                } else{
                    $cartitem = new Cart;
                    $cartitem->userId = $userId;
                    $cartitem->productId = $productId;
                    $cartitem->productQty = $productQty;
                    $cartitem->save();

                    return response()->json([
                    'status' => 201,
                    'message' => 'Added to cart',
                ]);
                }
                
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => 'Product Not Found',
                ]);
            }

            return response()->json([
                'status' => 201,
                'message' => 'I am in cart',
            ]);
        } else{
            return response()->json([
                'status' => 401,
                'message' => 'Login to add to cart',
            ]);
        }
    }

    public function viewcart(){
        if(auth('sanctum')->check()){
            $userId = auth('sanctum')->user()->id;
            $cartitems = Cart::where('userId', $userId)->get();
            return response()->json([
                'status' => 200,
                'cart' => $cartitems,
            ]);
        } else{
            return response()->json([
                'status' => 401,
                'message' => 'Login to view cart',
            ]);
        }
    }

    public function updateQty($cartId, $scope){
        if(auth('sanctum')->check()){
            $userId = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cartId)->where('userId',$userId)->first();
            if($scope == 'inc'){
                $cartitem->productQty += 1;
            } else if($scope == 'dec') {
                $cartitem->productQty -= 1;
            }
            $cartitem->update();
            return response()->json([
                'status' => 200,
                'message' => 'Quantity Updated',
            ]);
        } else{
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue',
            ]);
        }
    }

    public function delete($cartId){
        if(auth('sanctum')->check()){
            $userId = auth('sanctum')->user()->id;
            $cartitem = Cart::where('id', $cartId)->where('userId',$userId)->first();
            if($cartitem){
                $cartitem->delete();
                return response()->json([
                    'status' => 200,
                    'message' => 'Cart Item remove successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Cart Item not found',
                ]);
            }
        } else{
            return response()->json([
                'status' => 401,
                'message' => 'Login to continue',
            ]);
        }
    }

    public function index()
    {
        return Cart::all();
    }
}
