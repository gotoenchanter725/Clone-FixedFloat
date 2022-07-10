<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderTable extends Migration
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
            $table->text("orderId", 10);
            $table->text("fromCurrency", 10);
            $table->text("toCurrency", 10);
            $table->text("toAddress", 50);
            $table->text("type", 10);
            $table->double("fromQty", 20 , 8);
            $table->double("toQty", 20 , 8);
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
        Schema::dropIfExists('order');
    }
}
