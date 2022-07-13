<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class QrCodeController extends Controller
{
    public function generateQrCode() 
    {
        // \QrCode::size(500)
        //         ->format('png')
        //         ->generate('codingdriver.com', public_path('images/qrcode.png'));
        
        return view('qr-code');
    }
}