<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Order;
use App\Models\AddressByCurrency;

class OrderController extends Controller
{
    public function __contruct() {

    }

    public function index() {
        
    }

    public function page($id) {
        $data = Order::where('orderId', $id)->first();
        $now = date_create();
        $create_date = date_create($data->created_at);
        $diff = $now->getTimestamp() - $create_date->getTimestamp();
        $server_address = "";
        $rst = AddressByCurrency::where('currency', $data->fromCurrency)->first();
        $send = $data;
        $send->serverAddress = $rst->address;
        $send->diff = $diff;
        $send->date = $now->getTimestamp();
        return view('order')
            ->with('orderID', $id)
            ->with('fromCurrency', $data->fromCurrency)
            ->with('toCurrency', $data->toCurrency)
            ->with('fromQty', $data->fromQty)
            ->with('toQty', $data->toQty)
            ->with('type', $data->type)
            ->with('address', $data->toAddress)
            ->with('serverAddress', $rst->address)
            ->with('diff', $diff)
            ->with('date', $now->getTimestamp())
            ->with('data', $send);
    }

    public function exchangeMake(Request $request) {
        $data = $request->input();
        
        $client = new Client();
        $res = $client->request('POST', "https://fixedfloat.com/ajax/exchangeMake", [
            'form_params' => $data
        ]);
        $orderID = (array)json_decode($res->getBody());

        $order = new Order;
        $order->orderID = $orderID['data'];
        $order->fromCurrency = $data['fromCurrency'];
        $order->toCurrency = $data['toCurrency'];
        $order->fromQty = $data['fromQty'];
        $order->toQty = $data['toQty'];
        $order->type = $data['type'];
        $order->toAddress = $data['toAddress'];
        $order->save();

        echo json_encode($orderID);
    }
}
