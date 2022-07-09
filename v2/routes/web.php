<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExchangeController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', [ExchangeController::class, 'index']);
Route::get('/order/{id}', [OrderController::class, 'page']);

Route::post("/exchangePrice", [ExchangeController::class, 'exchangePrice']);
Route::post("/exchangeAddressInfo", [ExchangeController::class, 'exchangeAddressInfo']);
Route::post("/exchangeMake", [ExchangeController::class, 'exchangeMake']);