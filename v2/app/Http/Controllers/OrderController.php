<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __contruct() {

    }

    public function index() {
        
    }

    public function page($id) {
        return view('order')
            ->with('orderID', $id)
            ->with('orderID', 'bc1q888zlmtx2qklsfclwdt5x8z6lxdzdqt42lrghg')
            ->with('fromCurrency', 'BTC')
            ->with('toCurrency', 'ETH')
            ->with('fromQuy', '0.002')
            ->with('toQuy', '0.0917045')
            ->with('type', 'Float rate')
            ->with('address', '0x0b0642Bc91Fa1C0F735fA549a2334187D548Ef3c');
    }
}
