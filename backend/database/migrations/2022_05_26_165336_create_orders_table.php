<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('productId');
            $table->foreign('productId')->references('id')->on('products');
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('products');
            $table->integer('quantity');
            $table->string('address');
            $table->decimal('amount', 6,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
