@extends('layouts/default')

@section('meta')
@parent

<meta name="title" content="Order F18KRS FixedFloat">
<meta property="og:title" content="Order F18KRS FixedFloat">
<meta property="og:site_name" content="FixedFloat">
<meta property="og:url" content="https://fixedfloat.com/order/ID">
<meta property="twitter:site" content="@FixedFloat">
<meta property="twitter:creator" content="@FixedFloat">
<meta property="twitter:domain" content="fixedfloat.com">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta property="og:image" content="https://fixedfloat.com/assets/images/public/ogimage.jpg">
<meta name="title" content="Order F18KRS FixedFloat">
<meta property="og:title" content="Order F18KRS FixedFloat">
<meta property="og:description" content="">

<link rel="stylesheet" type="text/css" href="../assets/css/order.min.css">
<script type="text/javascript" src="{{ asset('assets/js/order.min.js') }}"></script>

@endsection


@section('content')

<main>
  <section id="index_main" class="main-section withheader darkbg">
    <style id="highlighting_style"></style>
    <header id="header">
      <div class="wrapper">
        <div class="left-menu-wrap" id="left_menu_wrap">
          <div id="left_menu_btn">
            <div><span></span><span></span><span></span></div>
          </div>
          <nav class="left-menu" id="left_menu">
            <section>
              <ul id="left_menu_content" class="menu linkhl">
                <li class="menu-head"><span>Account</span></li>
                <li><a href="/user/profile">Personal data</a></li>
                <li><a href="/user/orders">Orders history</a></li>
                <li><a href="/user/affiliate">Affiliate program</a></li>
                <li><a class="signout" href="/user/signout" data-confirm="Are you sure?">Sign out</a></li>
                <li class="menu-head"><span>FixedFloat</span></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </section>
          </nav>
        </div>
        <nav class="clrfix">
          <a href="/" id="logo" class="logo">
            <span class="logo-text-fixed" id="logo_text_from" data-value="btc"></span>
            <div class="ico"><span class="logo-arrow-from" id="logo_arrow_from" data-value="btc"></span><span class="logo-arrow-to" id="logo_arrow_to" data-value="eth"></span></div><span class="logo-text-float" id="logo_text_to" data-value="eth"></span>
          </a>
          <div class="nav userbar hoverhl">
            <a class="menu-focus-btn" tabindex="0">Account</a>
            <ul class="menu-focus-opened hoverhl">
              <li><a href="/user/orders">Orders history</a></li>
              <li><a href="/user/profile">Settings</a></li>
              <li><a class="signout" href="/user/signout" data-confirm="Are you sure?">Sign out</a></li>
            </ul>
          </div>
          <div class="loc hoverhl">
            <a class="menu-focus-btn" tabindex="0">
              <div class="ui-select-value"><span>English</span><i class="loc-img loc-en"></i></div>
            </a>
            <ul class="menu-focus-opened hoverhl">
              <li><a href="/en/order/F18KRS"><span>English</span><i class="loc-img loc-en"></i></a></li>
              <li><a href="/es/order/F18KRS"><span>Español</span><i class="loc-img loc-es"></i></a></li>
              <li><a href="/de/order/F18KRS"><span>Deutsch</span><i class="loc-img loc-de"></i></a></li>
              <li><a href="/fr/order/F18KRS"><span>Français</span><i class="loc-img loc-fr"></i></a></li>
              <li><a href="/pt/order/F18KRS"><span>Português</span><i class="loc-img loc-pt"></i></a></li>
              <li><a href="/ru/order/F18KRS"><span>Русский</span><i class="loc-img loc-ru"></i></a></li>
            </ul>
            <div class="shadow-body" tabindex="0"></div>
          </div>
          <ul class="nav menu hoverhl">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/api">API</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </nav>
        <div class="shadow-body"></div>
      </div>
    </header>
    <template id="auth">
      <div class="popup-auth">
        <nav class="auth-nav" id="auth_nav">
          <button type="button" id="nav_signin" class="auth-nav-btn" data-layout="signin">Sign in</button><button type="button" id="nav_signup" class="auth-nav-btn" data-layout="signup">Sign up</button><i class="bghl"></i>
        </nav>
        <div class="auth-outer" id="auth_layouts">
          <form class="auth-layout" id="layout_forgot">
            <h4>Forgot Password?</h4>
            <div class="input-dyn">
              <input name="email" required type="text" value="">
              <label for="email">Email</label>
              <sub class="error">Email entered is not a valid email</sub>
            </div>
            <div class="auth-geetest" id="auth_reset_captcha" data-loading="Loading CAPTCHA..."></div>
            <div class="auth-success" id="auth_reset_success">Reset request successfully sent. You will receive a confirmation e-mail if this account has been registered.</div>
            <div class="auth-error" id="auth_reset_captcha_error">Invalid CAPTCHA. Try again</div>
            <div class="auth-error" id="auth_reset_error">User with this email is not registered on the site.</div>
            <div class="auth-wrap-btn">
              <button class="btn submit bghl" id="auth_reset_btn" disabled>Reset password</button>
            </div>
            <div class="auth-wrap-btn">
              <button class="btn-text auth-nav-btn" type="button" data-layout="signin">Back to Sign in</button>
            </div>
          </form>
          <form class="auth-layout" id="layout_signin">
            <h4>Welcome to FixedFloat</h4>
            <div class="input-dyn">
              <input name="email" required type="text" value="">
              <label for="email">Email</label>
              <sub class="error">Email entered is not a valid email</sub>
            </div>
            <div class="input-dyn">
              <input name="pswd" required type="password" value="">
              <label for="pswd">Password</label>
              <sub class="error">Password is empty</sub>
            </div>
            <div class="auth-forgot-wrap">
              <button class="btn-text hl auth-nav-btn" type="button" id="nav_forgot" data-layout="forgot">Forgot password</button>
            </div>
            <div class="auth-geetest" id="signin_captcha" data-loading="Loading CAPTCHA..."></div>
            <div class="auth-error" id="signin_captcha_error">Invalid CAPTCHA. Try again</div>
            <div class="auth-error" id="auth_error">Invalid email or password</div>
            <div class="auth-wrap-btn">
              <button class="btn submit bghl" id="auth_signin" disabled>Sign in</button>
            </div>
          </form>
          <form class="auth-layout" id="layout_signup">
            <h4>Join to FixedFloat</h4>
            <div class="input-dyn">
              <input name="email" required type="text" value="">
              <label for="email">Email</label>
              <sub class="error">Email entered is not a valid email</sub>
            </div>
            <div class="input-dyn">
              <input name="pswd" required type="password" value="">
              <label for="pswd">Password</label>
              <sub class="error">Password must contain one uppercase, one lowercase, one number, one special character, and be at least 6 characters long.</sub>
            </div>
            <div class="input-dyn">
              <input name="repswd" required type="password" value="">
              <label for="repswd">Confirm Password</label>
              <sub class="error">Passwords do not match.</sub>
            </div>
            <div class="auth-geetest" id="signup_captcha" data-loading="Loading CAPTCHA..."></div>
            <div class="auth-error" id="signup_captcha_error">Invalid CAPTCHA. Try again</div>
            <!-- <div class="auth-captcha">
					<div id="auth_recaptcha" data-sitekey="6LfvYYUUAAAAAIyX9224ZI996PDDvrkUQtKb5WuY"></div>
				</div> -->
            <div class="auth-error" id="signup_captcha_error" data-loading="Invalid CAPTCHA. Try again"></div>
            <div class="auth-error" id="auth_signup_error">An account with this email already exists. <button class="btn-text auth-nav-btn" type="button" data-layout="forgot" style="color: inherit;">Forgot password?</button></div>
            <div class="auth-wrap-btn">
              <button class="btn submit bghl" id="auth_signup" disabled>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </template>
    <div class="wrapper">
      <section class="order-outer">
        <div class="order-body">
          <section class="order-direction clrfix">
            <div class="dir-from">
              <div class="dir-cont" data-value="{{ $fromCurrency }}">
                <div class="coin-ico svgcoin {{ $fromCurrency }}"></div>
                <div class="coin-head">You send</div>
                <div class="coin-value" id="order_send_value">{{ $fromQty }} {{ $fromCurrency }}</div>
                <div class="coin-address" title="{{ $serverAddress }}">{{ $serverAddress }}</div>
              </div>
            </div>
            <div class="dir-arrow">
              <div class="ico arrow"></div>
            </div>
            <div class="dir-to">
              <div class="dir-cont" data-value="{{ $toCurrency }}">
                <div class="coin-ico svgcoin {{ $toCurrency }}"></div>
                <div class="coin-head">You receive</div>
                <div class="coin-value" id="order_receive_value">{{ $toQty }} {{ $toCurrency }}</div>
                <div class="coin-address" title="{{ $address }}">{{ $address }}</div>
              </div>
            </div>
          </section>
          <div class="order-wrap-shadow">
            <section class="order-action new" id="order_action">
              <div class="order-action-body buttonhl">
                <div class="order-qr-wrap" id="order_qr">
                  <div class="order-qr">
                    <input type="radio" id="qr_type0" name="qr_switcher">
                    <div class="order-qrcode" href="#"><img src="https://chart.googleapis.com/chart?chs=400x400&amp;cht=qr&amp;chl={{ $fromCurrency }}:{{ $serverAddress }}&amp;choe=UTF-8" alt="QR code"></div>
                    <input type="radio" id="qr_type1" name="qr_switcher" checked>
                    <div class="order-qrcode" href="#"><img src="https://chart.googleapis.com/chart?chs=400x400&amp;cht=qr&amp;chl={{ $fromCurrency }}:{{ $serverAddress }}?amount={{ $fromQty }}&amp;choe=UTF-8" alt="QR code"></div>
                    <div class="qr-switcher" data-count="2">
                      <label for="qr_type0"><span>Address</span></label>
                      <label for="qr_type1"><span>With amount</span></label>
                    </div>
                  </div>
                </div>
                <section class="order-head-info" id="order_info">
                  <div class="order-head-info-inner" id="order_info_inner">
                    <div class="order-id-wrap">
                      <label>Order ID</label>
                      <div><span class="pseudo-hint-blue" data-copy="{{ $orderID }}" data-hint="Copied"><span class="order-id hl">{{ $data->orderId }}</span><i class="ico copy"></i></span>
                      </div>
                    </div>
                    <div class="order-time new">
                      <label data-remaining="Time remaining" data-status="Order status"></label>
                      <div><span id="order_time" class="hl" data-time="{{ $diff / 60 }}:{{ $diff % 60 }}" data-expired="Order expired" data-exchange="Received" data-done="Completed" data-emergency="User response" data-refund="Refunded"></span></div>
                    </div>
                    <div>
                      <label>Order type</label>
                      <div><span class="order-type">{{ $type }} rate</span></div>
                    </div>
                    <div>
                      <label>Creation Time</label>
                      <div><time id="order_time_creation" timestamp="{{ $date }}"></time></div>
                    </div>
                    <div class="none">
                      <label>Received Time</label>
                      <div><time id="order_time_tx" timestamp=""></time></div>
                    </div>
                    <div class="none">
                      <label>Completed Time</label>
                      <div><time id="order_time_competed" timestamp=""></time></div>
                    </div>
                  </div>
                </section>
                <div class="order-action-details" id="order_details">

                  <div class="order-data-details">
                    <div class="order-p-wrap">
                      <p class="order-p-amount">Send <b class="order-amount pseudo-hint-blue" data-hint="Copied" data-copy="{{ $fromQty }}" data-value="{{ $fromCurrency }}">{{ $fromQty }} {{ $fromCurrency }}</b> to the address:</p>
                      <p class="order-p-address"><span class="order-address-wrap"><b class="order-address order-address-from pseudo-hint-blue" data-copy="{{ $serverAddress }}" data-hint="Copied" title="{{ $serverAddress }}"><i>{{ $serverAddress }}</i><i class="ico copy"></i></b></span></p>
                    </div>
                    <p class="order-attention">
                      @if($type == 'fixed')
                        <b>Attention!</b> If the market rate changes by more than 1.2% before the appearance of your transaction on the blockchain network, you will be asked to make a refund or continue exchanging at the market rate.
                      @else
                        The exchange rate will be fixed after receiving 1 network confirmations.
                      @endif 
                    </p>
                  </div>
                  <div class="order-data-destination">
                    <p><label>Receiving address {{ $toCurrency }}</label><br><span class="order-address-destination">{{ $address }}</span></p>
                  </div>
                </div>
              </div>
              <div class="order-action-details more none" id="order_details_more">
              </div>
            </section>
            <section class="order-emergency clrfix" id="section_emergency"></section>
            <section class="order-timeline clrfix" id="section_timeline">
              <div class="timeline-container">
                <ol id="timeline_steps" class="clrfix" data-value="eth">
                  <li id="timeline_new" class="active">
                    <div><span class="ico deposit"></span><label>Awaiting deposit</label></div>
                  </li>
                  <li id="timeline_pending" class="">
                    <div><span class="ico pending"></span><label class="foremergency">Waiting for user response</label><label>Awaiting confirmations</label></div>
                  </li>
                  <li id="timeline_exchange">
                    <div><span class="ico exchange"></span><label>Perform exchange</label></div>
                  </li>
                  <li id="timeline_done" class="">
                    <div><span class="ico complete"></span><label class="forrefund">Refunded</label><label>Done</label></div>
                  </li>
                </ol>
              </div>
            </section>
            <section class="order-info">
              <section class="order-info-known">
                <h3>What do you need to know?</h3>
                <div class="order-note"><em class="ico speed">­</em>You only need <strong>1</strong> confirmation of the Bitcoin blockchain for the exchange</div>
                <div class="order-note"><em class="ico coin btc">­</em>Bitcoin transaction confirmation speed depends on the level of blockchain network congestion, more in our <a href="/blog/guides/why-bitcoin-is-not-confirmed">article</a></div>
                <div class="order-note"><em class="ico coin segwit">­</em>We use segwit Bitcoin addresses for faster and cheaper transactions, if your wallet does not support this type of address, contact technical support to change the address</div>
                <div class="order-note"><em class="ico coin eth">­</em>We do not support sending and receiving Ethereum using smart contracts</div>
                <div class="order-note"><em class="ico downrate">­</em>If the market rate changes by more than 1.2% before your transaction appears on the blockchain network, you will be prompted to make a refund or continue the exchange at the market rate.</div>
              </section>
              <section class="order-notyfy clrfix buttonhl">
                <div id="notyfy_tosubscribe">
                  <h3>Order status notifications</h3>
                  <p>Enter your email if you want to receive notifications about changes in the status of this order</p>
                  <div class="order-notyfy-input-wrap"><input id="notyfy_email_input" required type="text" placeholder="Type your email address" class="borderhl"><button id="notyfy_submit" class="btn bghl">Confirm</button><i id="notyfy_email_error"></i></div>
                  <span class="ico notyfy-0"><i class="ico hl notyfy-1"></i></span>
                </div>
                <div id="notyfy_subscribed" class="active">
                  <h3>Order status notifications</h3>
                  <p>You have subscribed to notifications of changes to this order; a notification has been sent to your email <b id="notyfy_email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="395756545057584d510908795e54585055175a5654">[email&#160;protected]</a></b></p>
                  <a href="#" class="order-notyfy-wrong hoverhl" id="notyfy_wrong">I want to change my email for receiving notifications</a>
                  <span class="ico notyfy-compl-0"><i class="ico hl notyfy-compl-1"></i></span>
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    </div>
  </section>
</main>

<template id="cookies_accept">
  <div class="cookie-table">
    <div class="cookie-cell">
      <p>We use cookies to provide the best experience on our website. By using FixedFloat.com you agree to <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.</p>
    </div>
    <div class="cookie-cell clrfix">
      <a class="btn submit bghl close" href="javascript:;">Accept &amp; Close</a>
    </div>
  </div>
</template>
<footer>
  <div class="wrapper">
    <div class="foot-outro">
      <a href="/" id="foot_logo" class="logo">
        <span class="logo-text-fixed"></span>
        <div class="ico"><span class="logo-arrow-from"></span><span class="logo-arrow-to hl"></span></div><span class="logo-text-float hl"></span>
      </a>
      <div class="foot-soc">
        <!-- <span>Follow us:</span> -->
        <a href="https://twitter.com/fixedfloat" title="Twitter" target="_blank" rel="noopener noreferrer" class="ico tw hoverhl"></a>
        <!-- <a href="https://www.facebook.com/fixedfloat" title="Facebook" target="_blank" rel="noopener noreferrer" class="ico fb hoverhl"></a> --><a href="https://t.me/FixedFloat" title="Telegram" target="_blank" rel="noopener noreferrer" class="ico tg hoverhl"></a><a href="https://medium.com/fixedfloat" title="medium.com" target="_blank" rel="noopener noreferrer" class="ico medium hoverhl"></a>
        <a href="https://www.instagram.com/fixedfloat/" title="instagram.com" target="_blank" rel="noopener noreferrer" class="ico instagram hoverhl"></a><a href="https://www.reddit.com/user/FixedFloat/" title="Reddit" target="_blank" rel="noopener noreferrer" class="ico reddit hoverhl"></a><a href="https://bitcointalk.org/index.php?topic=5107342.new#new" title="bitcointalk.org" target="_blank" rel="noopener noreferrer" class="ico bitcointalk hoverhl"></a><a href="https://www.trustpilot.com/review/fixedfloat.com" title="trustpilot.com" target="_blank" rel="noopener noreferrer" class="ico trustpilot hoverhl"></a>
      </div>
      <div class="copyright">©&nbsp;2018–2022&nbsp;<span>FixedFloat</span>.&nbsp;All rights reserved.</div>
    </div>
    <div class="foot-menu linkhl">
      <div class="col">
        <h4>FixedFloat</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/brand">Our brand</a></li>
          <li><a href="/affiliate">Affiliate program</a></li>
          <!-- <li><a href="/addcoin">Add your coin</a></li> -->
          <li><a href="/terms-of-service">Terms of service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="col">
        <h4>Popular</h4>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/exchange/xmr-to-btc">XMR to BTC</a></li>
          <li><a href="/exchange/eth-to-btc">ETH to BTC</a></li>
          <li><a href="/exchange/ltc-to-eth">LTC to ETH</a></li>
          <li><a href="/lightning-faucet">Lightning Faucet</a></li>
        </ul>
      </div>
      <div class="col">
        <h4>Support</h4>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/api">API</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
@endsection

@section('script')
@parent

<script type="text/javascript">
  function initFreshChat() {
    let restoreId = '';
    window.fcWidget.init({
      token: "15d5f180-cf0e-4bcc-8165-c25e4879bab4"
      , host: "https://wchat.freshchat.com"
      , locale: "en"
      , externalId: "user_47867"
      , restoreId: restoreId ? restoreId : null
      , config: {
        hideFAQ: true
        , agent: {
          hideName: true
          , hidePic: true
          , hideBio: false
        , }
      , },
      // tags: [],
    });

    window.fcWidget.user.get(function(resp) {
      window.fcWidget.user.setFirstName("Client #2315160");

      let status = resp && resp.status
        , data = resp && resp.data;
      if (status !== 200) {
        window.fcWidget.on('user:created', function(resp) {
          let status = resp && resp.status
            , data = resp && resp.data;
          if (status === 200 || !restoreId) {
            setRestoreId(data.restoreId)
          }
        });
      } else if (data.restoreId && !restoreId) {
        setRestoreId(data.restoreId)
      }
    });

    function setRestoreId(restoreId) {
      if (!restoreId) return;
      APP.api('userSetChatRestoreId', {
          restoreId: restoreId
        })
        .then(function(msg) {})
        .catch(function(msg) {})
    }

    document.dispatchEvent(new Event("freshchatStart"));
  }

  function initialize(i, t) {
    var e;
    i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
  }

  function initiateCall() {
    initialize(document, "freshchat-js-sdk")
  }
  window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);

</script>

<script type="text/javascript">
  // ;(function() {
  // 	var WSClient = function (url) {
  // 		this.target = document.createElement('div');
  // 		this.tid = 0;
  // 		this.url = url;
  // 		this.attempts = 10;
  // 		this.ws = new WebSocket(this.url);
  // 	}
  // 	WSClient.prototype.init = function(func) {
  // 		self = this;
  // 		self.ws.onopen = function(event) {
  // 			self.attempts = 10;
  // 			if (typeof(func) == 'function') func.call(self);
  // 		};
  // 		self.ws.onmessage = function(event) {
  // 			let data = JSON.parse(event.data);
  // 			self.target.dispatchEvent(new CustomEvent("msg", {detail: data}));
  // 		}
  // 		self.ws.onerror = function(event) {
  // 			console.log(event);
  // 		}
  // 		self.ws.onclose = function(event) {
  // 			clearInterval(this.tid);
  // 			if (self.attempts > 0) {
  // 				self.attempts -= 1;
  // 				setTimeout(function() {
  // 					console.log('Client: reconnecting…');
  // 					self.ws = new WebSocket(self.url);
  // 					self.init(func);
  // 				}, 5000);
  // 			}
  // 		}
  // 	}

  // 	WSClient.prototype.send = function(method, params) {
  // 		let data = {method: method, params: params, id: Date.now()};
  // 		this.ws.send(JSON.stringify(data));
  // 	}

  // 	WSClient.prototype.subscribe = function(params) {
  // 		this.send('subscribe', params);
  // 	}

  // 	WSClient.prototype.message = function(params, func) {
  // 		self = this;
  // 		params = typeof(params) == 'string' ? [params] : params;
  // 		self.target.addEventListener("msg", function(event) {
  // 			let data = event.detail;
  // 			if (params.indexOf(data.event) >= 0) {
  // 				func.call(self, data.result);
  // 			}
  // 		});
  // 	}

  // 	APP.WSClient = WSClient;
  // })();

  document.addEventListener("DOMContentLoaded", function() {
    moment.locale('en');
    APP.highlightingColor('BTC', 'ETH');

    let diff = 30 * 60 - {{ $diff }};

    let F = UI.func;
    let orderData = {
      id: 'F18KRS'
      , timeLeft: diff < 1 ? 1 : diff
      , from: {
        amount: '0.00919963'
        , address: 'bc1q59macpkflxyrchktv9c6x8wmqf0kz6qrdpsvx4'
        , confirm: null
        , tx: null
        , timeBlock: null
      }
      , to: {
        amount: '0.1599397'
        , address: '0x02025569498206160C0c1F1d6DA705ae6bFbf080'
        , confirm: null
        , tx: null
        , timeBlock: null
      }
      , back: {
        address: ''
        , confirm: null
        , tx: null
        , timeBlock: null
      }
      , status: 'NEW'
      , refundonly: false
      , emergency: {
        status: []
        , choice: 'NONE'
        , repeat: '0'
        , tmpl: F.id('section_emergency').innerHTML
      }
    , };
    InitOrder(orderData);

    F.on(document, 'click', '.pseudo-hint-blue[data-copy]', function(e) {
      e = e || event;
      e.preventDefault();
      let obj = this;
      F.copy(obj.getAttribute('data-copy'));
      F.addClass(obj, 'copied');
      setTimeout(function() {
        F.remClass(obj, 'copied');
      }, 500);
    })
    F.on(document, 'click', '.copy[data-copy]', function(e) {
      e = e || event;
      e.preventDefault();
      let obj = this;
      F.copy(obj.getAttribute('data-copy'));
      F.addClass(obj, 'copied');
      setTimeout(function() {
        F.remClass(obj, 'copied');
      }, 500);
    })
    F.id('notyfy_wrong').onclick = function(e) {
      e = e || event;
      e.preventDefault();
      F.remClass('notyfy_subscribed', 'active');
      F.addClass('notyfy_tosubscribe', 'active');
      return false;
    };
    F.id('notyfy_email_input').onkeyup = function() {
      F.remClass(this.parentNode, 'error');
    }

    UI.button('notyfy_submit').click(function(btn) {
      let data = {
        id: 'F18KRS'
        , email: F.id('notyfy_email_input').value
      }
      if (!data.email) {
        F.addClass(F.id('notyfy_email_input').parentNode, 'error');
        btn.error();
        return;
      }
      APP.api('orderSetEmail', data)
        .then(function(msg) {
          btn.success();
          F.id('notyfy_email').innerHTML = data.email;
          F.remClass('notyfy_tosubscribe', 'active');
          F.addClass('notyfy_subscribed', 'active');
        })
        .catch(function(msg) {
          btn.error();
        });
    });
  })

</script>
@endsection
