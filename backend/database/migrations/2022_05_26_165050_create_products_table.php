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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->text('petType');
            $table->text('productCategory');
            $table->text('productType');
            $table->string('productName');
            $table->string('productImage') ->nullable();
            $table->decimal('price', 6,2);
            $table->text('description') -> nullable();
            $table->text('suitability') ->nullable();
            $table->text('madeIn') ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
