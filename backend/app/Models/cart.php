<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    use HasFactory;

    protected $table = "carts";

    protected $fillable = [
        "userId",
        "productId",
        "productQty"
    ];

    protected $with = ['product'];
    public function product(){
        return $this->belongsTo(product::class, 'productId', 'id');
    }
}