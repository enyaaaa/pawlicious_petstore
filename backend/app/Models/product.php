<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = [
        'petType',
        'productCategory',
        'productType',
        'productBrand',
        'productName',
        'price',
        'description',
        'suitability',
        'madeIn',
    ];
}
