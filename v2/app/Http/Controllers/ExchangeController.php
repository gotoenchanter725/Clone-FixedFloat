<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ExchangeController extends Controller
{
    public function __contruct() {

    }

    public function index() {
        return view('exchange');
    }

    public function exchangePrice(Request $request) {
        $data = $request->input();

        $client = new Client();
        $res = $client->request('POST', "https://fixedfloat.com/ajax/exchangePrice", [
            'form_params' => $data
        ]);

        echo $res->getBody();
    }

    public function exchangeAddressInfo(Request $request) {
        $data = $request->input();

        $client = new Client();
        $res = $client->request('POST', "https://fixedfloat.com/ajax/exchangeAddressInfo", [
            'form_params' => $data
        ]);

        echo $res->getBody();
    }

    public function exchangeMake(Request $request) {
        $data = $request->input();

        $client = new Client();
        $res = $client->request('POST', "https://fixedfloat.com/ajax/exchangeMake", [
            'form_params' => $data
        ]);

        echo $res->getBody();
    }

    public function api(Request $request, $type) {
        $data = $request->input();

        $client = new Client();
        $res = $client->request('POST', "https://fixedfloat.com/ajax/$type", [
            'form_params' => $data
        ]);

        echo $res->getBody();
    }
}