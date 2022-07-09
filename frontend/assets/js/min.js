! function() {
    function l(t) {
        return "function" == typeof t || "[object Function]" === e.call(t)
    }

    function c(t) {
        return t = function(t) {
            t = Number(t);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t
        }(t), Math.min(Math.max(t, 0), n)
    }
    var e, n;
    Element.prototype.remove || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }), Element.prototype.closest || (Element.prototype.closest = function(t) {
        for (var e = this; e;) {
            if (e.matches(t)) return e;
            e = e.parentElement
        }
        return null
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), Array.from || (Array.from = (e = Object.prototype.toString, n = Math.pow(2, 53) - 1, function(t) {
        var e = Object(t);
        if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var n, o = 1 < arguments.length ? arguments[1] : void 0;
        if (void 0 !== o) {
            if (!l(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            2 < arguments.length && (n = arguments[2])
        }
        for (var i, r = c(e.length), a = l(this) ? Object(new this(r)) : new Array(r), s = 0; s < r;) i = e[s], a[s] = o ? void 0 === n ? o(i, s) : o.call(n, i, s) : i, s += 1;
        return a.length = r, a
    }))
}(),
function() {
    function n(t) {
        var e = 0;
        return function() {
            return e < t.length ? {
                done: !1,
                value: t[e++]
            } : {
                done: !0
            }
        }
    }
    var e = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
        },
        o = ("undefined" == typeof window || window !== this) && "undefined" != typeof global && null != global ? global : this;

    function i() {
        i = function() {}, o.Symbol || (o.Symbol = a)
    }
    var r, t, a = (r = 0, function(t) {
        return "jscomp_symbol_" + (t || "") + r++
    });

    function s() {
        i();
        var t = (t = o.Symbol.iterator) || (o.Symbol.iterator = o.Symbol("iterator"));
        "function" != typeof Array.prototype[t] && e(Array.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function() {
                return t = n(this), s(), (t = {
                    next: t
                })[o.Symbol.iterator] = function() {
                    return this
                }, t;
                var t
            }
        }), s = function() {}
    }

    function c(t) {
        var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
        return e ? e.call(t) : {
            next: n(t)
        }
    }
    if ("function" == typeof Object.setPrototypeOf) d = Object.setPrototypeOf;
    else {
        t: {
            var l = {};
            try {
                l.__proto__ = {
                    o: !0
                }, t = l.o;
                break t
            } catch (t) {}
            t = !1
        }
        d = t ? function(t, e) {
            if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
            return t
        } : null
    }
    var u, d, f = d;

    function p() {
        this.g = !1, this.c = null, this.m = void 0, this.b = 1, this.l = this.s = 0, this.f = null
    }

    function h(t) {
        if (t.g) throw new TypeError("Generator is already running");
        t.g = !0
    }

    function m(t, e, n) {
        return t.b = n, {
            value: e
        }
    }

    function y(t) {
        for (var e in this.w = t, this.j = [], t) this.j.push(e);
        this.j.reverse()
    }

    function g(t) {
        this.a = new p, this.A = t
    }

    function b(e, t, n, o) {
        try {
            var i = t.call(e.a.c, n);
            if (!(i instanceof Object)) throw new TypeError("Iterator result " + i + " is not an object");
            if (!i.done) return e.a.g = !1, i;
            var r = i.value
        } catch (t) {
            return e.a.c = null, e.a.i(t), v(e)
        }
        return e.a.c = null, o.call(e.a, r), v(e)
    }

    function v(e) {
        for (; e.a.b;) try {
            var t = e.A(e.a);
            if (t) return e.a.g = !1, {
                value: t.value,
                done: !1
            }
        } catch (t) {
            e.a.m = void 0, e.a.i(t)
        }
        if (e.a.g = !1, e.a.f) {
            if (t = e.a.f, e.a.f = null, t.v) throw t.u;
            return {
                value: t.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function w(e) {
        this.next = function(t) {
            return e.h(t)
        }, this.throw = function(t) {
            return e.i(t)
        }, this.return = function(t) {
            return function(t, e) {
                h(t.a);
                var n = t.a.c;
                return n ? b(t, "return" in n ? n.return : function(t) {
                    return {
                        value: t,
                        done: !0
                    }
                }, e, t.a.return) : (t.a.return(e), v(t))
            }(e, t)
        }, s(), this[Symbol.iterator] = function() {
            return this
        }
    }

    function x(t, e) {
        e = new w(new g(e));
        return f && f(e, t.prototype), e
    }
    if (p.prototype.h = function(t) {
            this.m = t
        }, p.prototype.i = function(t) {
            this.f = {
                u: t,
                v: !0
            }, this.b = this.s || this.l
        }, p.prototype.return = function(t) {
            this.f = {
                return: t
            }, this.b = this.l
        }, g.prototype.h = function(t) {
            return h(this.a), this.a.c ? b(this, this.a.c.next, t, this.a.h) : (this.a.h(t), v(this))
        }, g.prototype.i = function(t) {
            return h(this.a), this.a.c ? b(this, this.a.c.throw, t, this.a.h) : (this.a.i(t), v(this))
        }, "undefined" == typeof FormData || !FormData.prototype.keys) {
        function C(t, e) {
            for (var n = 0; n < t.length; n++) e(t[n])
        }

        function T(t) {
            var e = c(t);
            return t = e.next().value, e = e.next().value, t = t instanceof Blob ? new File([t], e, {
                type: t.type,
                lastModified: t.lastModified
            }) : t
        }
        var A = function(t, e, n) {
                if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present.");
                return e instanceof Blob ? [t + "", e, void 0 !== n ? n + "" : "string" == typeof e.name ? e.name : "blob"] : [t + "", e + ""]
            },
            E = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                return [t + ""]
            },
            S = "object" == typeof window ? window : "object" == typeof self ? self : this,
            _ = S.FormData,
            P = S.XMLHttpRequest && S.XMLHttpRequest.prototype.send,
            I = S.Request && S.fetch;
        i();
        var B = S.Symbol && Symbol.toStringTag,
            L = new WeakMap,
            j = Array.from || function(t) {
                return [].slice.call(t)
            };
        B && (Blob.prototype[B] || (Blob.prototype[B] = "Blob"), "File" in S && !File.prototype[B] && (File.prototype[B] = "File"));
        try {
            new File([], "")
        } catch (t) {
            S.File = function(t, e, n) {
                return t = new Blob(t, n), n = n && void 0 !== n.lastModified ? new Date(n.lastModified) : new Date, Object.defineProperties(t, {
                    name: {
                        value: e
                    },
                    lastModifiedDate: {
                        value: n
                    },
                    lastModified: {
                        value: +n
                    },
                    toString: {
                        value: function() {
                            return "[object File]"
                        }
                    }
                }), B && Object.defineProperty(t, B, {
                    value: "File"
                }), t
            }
        }
        i(), s();

        function O(t) {
            if (L.set(this, Object.create(null)), !t) return this;
            var n = this;
            C(t.elements, function(e) {
                var t;
                e.name && !e.disabled && "submit" !== e.type && "button" !== e.type && ("file" === e.type ? C(e.files || [], function(t) {
                    n.append(e.name, t)
                }) : "select-multiple" === e.type || "select-one" === e.type ? C(e.options, function(t) {
                    !t.disabled && t.selected && n.append(e.name, t.value)
                }) : "checkbox" === e.type || "radio" === e.type ? e.checked && n.append(e.name, e.value) : (t = "textarea" === e.type ? t = "string" == typeof(t = e.value) ? t.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : t : e.value, n.append(e.name, t)))
            })
        }(d = O.prototype).append = function(t, e, n) {
            var o = L.get(this);
            o[t] || (o[t] = []), o[t].push([e, n])
        }, d.delete = function(t) {
            delete L.get(this)[t]
        }, d.entries = function t() {
            var o, i, r, a, s, l = this;
            return x(t, function(t) {
                switch (t.b) {
                    case 1:
                        s = L.get(l), i = new y(s);
                    case 2:
                        var e;
                        t: {
                            for (e = i; 0 < e.j.length;) {
                                var n = e.j.pop();
                                if (n in e.w) {
                                    e = n;
                                    break t
                                }
                            }
                            e = null
                        }
                        if (null == (o = e)) {
                            t.b = 0;
                            break
                        }
                        r = c(s[o]), a = r.next();
                    case 5:
                        if (a.done) {
                            t.b = 2;
                            break
                        }
                        return s = a.value, m(t, [o, T(s)], 6);
                    case 6:
                        a = r.next(), t.b = 5
                }
            })
        }, d.forEach = function(t, e) {
            for (var n = c(this), o = n.next(); !o.done; o = n.next()) {
                var o = (i = c(o.value)).next().value,
                    i = i.next().value;
                t.call(e, i, o, this)
            }
        }, d.get = function(t) {
            var e = L.get(this);
            return e[t] ? T(e[t][0]) : null
        }, d.getAll = function(t) {
            return (L.get(this)[t] || []).map(T)
        }, d.has = function(t) {
            return t in L.get(this)
        }, d.keys = function t() {
            var e, n, o, i = this;
            return x(t, function(t) {
                return 1 == t.b && (e = c(i), n = e.next()), 3 != t.b ? n.done ? void(t.b = 0) : (o = n.value, o = c(o), m(t, o.next().value, 3)) : (n = e.next(), void(t.b = 2))
            })
        }, d.set = function(t, e, n) {
            L.get(this)[t] = [
                [e, n]
            ]
        }, d.values = function t() {
            var e, n, o, i = this;
            return x(t, function(t) {
                return 1 == t.b && (e = c(i), n = e.next()), 3 != t.b ? n.done ? void(t.b = 0) : (o = n.value, (o = c(o)).next(), m(t, o.next().value, 3)) : (n = e.next(), void(t.b = 2))
            })
        }, O.prototype._asNative = function() {
            for (var t = new _, e = c(this), n = e.next(); !n.done; n = e.next()) {
                var n = (o = c(n.value)).next().value,
                    o = o.next().value;
                t.append(n, o)
            }
            return t
        }, O.prototype._blob = function() {
            for (var t = "----formdata-polyfill-" + Math.random(), e = [], n = c(this), o = n.next(); !o.done; o = n.next()) {
                var o = (i = c(o.value)).next().value,
                    i = i.next().value;
                e.push("--" + t + "\r\n"), i instanceof Blob ? e.push('Content-Disposition: form-data; name="' + o + '"; filename="' + i.name + '"\r\n', "Content-Type: " + (i.type || "application/octet-stream") + "\r\n\r\n", i, "\r\n") : e.push('Content-Disposition: form-data; name="' + o + '"\r\n\r\n' + i + "\r\n")
            }
            return e.push("--" + t + "--"), new Blob(e, {
                type: "multipart/form-data; boundary=" + t
            })
        }, O.prototype[Symbol.iterator] = function() {
            return this.entries()
        }, O.prototype.toString = function() {
            return "[object FormData]"
        }, B && (O.prototype[B] = "FormData"), [
            ["append", A],
            ["delete", E],
            ["get", E],
            ["getAll", E],
            ["has", E],
            ["set", A]
        ].forEach(function(t) {
            var e = O.prototype[t[0]];
            O.prototype[t[0]] = function() {
                return e.apply(this, t[1].apply(this, j(arguments)))
            }
        }), P && (XMLHttpRequest.prototype.send = function(t) {
            t instanceof O && (t = t._blob(), this.setRequestHeader("Content-Type", t.type)), P.call(this, t)
        }), I && (u = S.fetch, S.fetch = function(t, e) {
            return e && e.body && e.body instanceof O && (e.body = e.body._blob()), u(t, e)
        }), S.FormData = O
    }
}(),
function(t) {
    "use strict";
    var e, n, a, o, i, r, s, l, c, u;

    function d(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function f(t) {
        return t = "string" != typeof t ? String(t) : t
    }

    function p(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return n && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function h(e) {
        this.map = {}, e instanceof h ? e.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function m(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function y(n) {
        return new Promise(function(t, e) {
            n.onload = function() {
                t(n.result)
            }, n.onerror = function() {
                e(n.error)
            }
        })
    }

    function g(t) {
        var e = new FileReader,
            n = y(e);
        return e.readAsArrayBuffer(t), n
    }

    function b(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function v() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            if (this._bodyInit = t)
                if ("string" == typeof t) this._bodyText = t;
                else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (o && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (i && a && s(t)) this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!i || !ArrayBuffer.prototype.isPrototypeOf(t) && !l(t)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = b(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, a && (this.blob = function() {
            var t = m(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
        }), this.text = function() {
            var t, e, n = m(this);
            if (n) return n;
            if (this._bodyBlob) return t = this._bodyBlob, n = y(e = new FileReader), e.readAsText(t), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, o && (this.formData = function() {
            return this.text().then(x)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }

    function w(t, e) {
        var n, o = (e = e || {}).body;
        if (t instanceof w) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new h(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new h(e.headers)), this.method = (t = (n = e.method || this.method || "GET").toUpperCase(), -1 < c.indexOf(t) ? t : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function x(t) {
        var n = new FormData;
        return t.trim().split("&").forEach(function(t) {
            var e;
            t && (t = (e = t.split("=")).shift().replace(/\+/g, " "), e = e.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(t), decodeURIComponent(e)))
        }), n
    }

    function C(t, e) {
        e = e || {}, this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new h(e.headers), this.url = e.url || "", this._initBody(t)
    }
    t.fetch || (e = "URLSearchParams" in t, n = "Symbol" in t && "iterator" in Symbol, a = "FileReader" in t && "Blob" in t && function() {
        try {
            return new Blob, !0
        } catch (t) {
            return !1
        }
    }(), o = "FormData" in t, (i = "ArrayBuffer" in t) && (r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], s = function(t) {
        return t && DataView.prototype.isPrototypeOf(t)
    }, l = ArrayBuffer.isView || function(t) {
        return t && -1 < r.indexOf(Object.prototype.toString.call(t))
    }), h.prototype.append = function(t, e) {
        t = d(t), e = f(e);
        var n = this.map[t];
        this.map[t] = n ? n + "," + e : e
    }, h.prototype.delete = function(t) {
        delete this.map[d(t)]
    }, h.prototype.get = function(t) {
        return t = d(t), this.has(t) ? this.map[t] : null
    }, h.prototype.has = function(t) {
        return this.map.hasOwnProperty(d(t))
    }, h.prototype.set = function(t, e) {
        this.map[d(t)] = f(e)
    }, h.prototype.forEach = function(t, e) {
        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }, h.prototype.keys = function() {
        var n = [];
        return this.forEach(function(t, e) {
            n.push(e)
        }), p(n)
    }, h.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), p(e)
    }, h.prototype.entries = function() {
        var n = [];
        return this.forEach(function(t, e) {
            n.push([e, t])
        }), p(n)
    }, n && (h.prototype[Symbol.iterator] = h.prototype.entries), c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"], w.prototype.clone = function() {
        return new w(this, {
            body: this._bodyInit
        })
    }, v.call(w.prototype), v.call(C.prototype), C.prototype.clone = function() {
        return new C(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
        })
    }, C.error = function() {
        var t = new C(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    }, u = [301, 302, 303, 307, 308], C.redirect = function(t, e) {
        if (-1 === u.indexOf(e)) throw new RangeError("Invalid status code");
        return new C(null, {
            status: e,
            headers: {
                location: t
            }
        })
    }, t.Headers = h, t.Request = w, t.Response = C, t.fetch = function(n, r) {
        return new Promise(function(o, t) {
            var e = new w(n, r),
                i = new XMLHttpRequest;
            i.onload = function() {
                var n, t = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: (e = i.getAllResponseHeaders() || "", n = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                        var e = t.split(":"),
                            t = e.shift().trim();
                        t && (e = e.join(":").trim(), n.append(t, e))
                    }), n)
                };
                t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in i ? i.response : i.responseText;
                o(new C(e, t))
            }, i.onerror = function() {
                t(new TypeError("Network request failed"))
            }, i.ontimeout = function() {
                t(new TypeError("Network request failed"))
            }, i.open(e.method, e.url, !0), "include" === e.credentials ? i.withCredentials = !0 : "omit" === e.credentials && (i.withCredentials = !1), "responseType" in i && a && (i.responseType = "blob"), e.headers.forEach(function(t, e) {
                i.setRequestHeader(e, t)
            }), i.send(void 0 === e._bodyInit ? null : e._bodyInit)
        })
    }, t.fetch.polyfill = !0)
}("undefined" != typeof self ? self : this),
function(t) {
    "use strict";
    var e, n, a, o, i, r, s, l, c, u;

    function d(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function f(t) {
        return t = "string" != typeof t ? String(t) : t
    }

    function p(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return n && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function h(e) {
        this.map = {}, e instanceof h ? e.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function m(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function y(n) {
        return new Promise(function(t, e) {
            n.onload = function() {
                t(n.result)
            }, n.onerror = function() {
                e(n.error)
            }
        })
    }

    function g(t) {
        var e = new FileReader,
            n = y(e);
        return e.readAsArrayBuffer(t), n
    }

    function b(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function v() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            if (this._bodyInit = t)
                if ("string" == typeof t) this._bodyText = t;
                else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (o && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
            else if (i && a && s(t)) this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
            else {
                if (!i || !ArrayBuffer.prototype.isPrototypeOf(t) && !l(t)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = b(t)
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, a && (this.blob = function() {
            var t = m(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
        }), this.text = function() {
            var t, e, n = m(this);
            if (n) return n;
            if (this._bodyBlob) return t = this._bodyBlob, n = y(e = new FileReader), e.readAsText(t), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, o && (this.formData = function() {
            return this.text().then(x)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }

    function w(t, e) {
        var n, o = (e = e || {}).body;
        if (t instanceof w) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new h(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new h(e.headers)), this.method = (t = (n = e.method || this.method || "GET").toUpperCase(), -1 < c.indexOf(t) ? t : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function x(t) {
        var n = new FormData;
        return t.trim().split("&").forEach(function(t) {
            var e;
            t && (t = (e = t.split("=")).shift().replace(/\+/g, " "), e = e.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(t), decodeURIComponent(e)))
        }), n
    }

    function C(t, e) {
        e = e || {}, this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new h(e.headers), this.url = e.url || "", this._initBody(t)
    }
    t.fetch || (e = "URLSearchParams" in t, n = "Symbol" in t && "iterator" in Symbol, a = "FileReader" in t && "Blob" in t && function() {
        try {
            return new Blob, !0
        } catch (t) {
            return !1
        }
    }(), o = "FormData" in t, (i = "ArrayBuffer" in t) && (r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], s = function(t) {
        return t && DataView.prototype.isPrototypeOf(t)
    }, l = ArrayBuffer.isView || function(t) {
        return t && -1 < r.indexOf(Object.prototype.toString.call(t))
    }), h.prototype.append = function(t, e) {
        t = d(t), e = f(e);
        var n = this.map[t];
        this.map[t] = n ? n + "," + e : e
    }, h.prototype.delete = function(t) {
        delete this.map[d(t)]
    }, h.prototype.get = function(t) {
        return t = d(t), this.has(t) ? this.map[t] : null
    }, h.prototype.has = function(t) {
        return this.map.hasOwnProperty(d(t))
    }, h.prototype.set = function(t, e) {
        this.map[d(t)] = f(e)
    }, h.prototype.forEach = function(t, e) {
        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }, h.prototype.keys = function() {
        var n = [];
        return this.forEach(function(t, e) {
            n.push(e)
        }), p(n)
    }, h.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), p(e)
    }, h.prototype.entries = function() {
        var n = [];
        return this.forEach(function(t, e) {
            n.push([e, t])
        }), p(n)
    }, n && (h.prototype[Symbol.iterator] = h.prototype.entries), c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"], w.prototype.clone = function() {
        return new w(this, {
            body: this._bodyInit
        })
    }, v.call(w.prototype), v.call(C.prototype), C.prototype.clone = function() {
        return new C(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
        })
    }, C.error = function() {
        var t = new C(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    }, u = [301, 302, 303, 307, 308], C.redirect = function(t, e) {
        if (-1 === u.indexOf(e)) throw new RangeError("Invalid status code");
        return new C(null, {
            status: e,
            headers: {
                location: t
            }
        })
    }, t.Headers = h, t.Request = w, t.Response = C, t.fetch = function(n, r) {
        return new Promise(function(o, t) {
            var e = new w(n, r),
                i = new XMLHttpRequest;
            i.onload = function() {
                var n, t = {
                    status: i.status,
                    statusText: i.statusText,
                    headers: (e = i.getAllResponseHeaders() || "", n = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                        var e = t.split(":"),
                            t = e.shift().trim();
                        t && (e = e.join(":").trim(), n.append(t, e))
                    }), n)
                };
                t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in i ? i.response : i.responseText;
                o(new C(e, t))
            }, i.onerror = function() {
                t(new TypeError("Network request failed"))
            }, i.ontimeout = function() {
                t(new TypeError("Network request failed"))
            }, i.open(e.method, e.url, !0), "include" === e.credentials ? i.withCredentials = !0 : "omit" === e.credentials && (i.withCredentials = !1), "responseType" in i && a && (i.responseType = "blob"), e.headers.forEach(function(t, e) {
                i.setRequestHeader(e, t)
            }), i.send(void 0 === e._bodyInit ? null : e._bodyInit)
        })
    }, t.fetch.polyfill = !0)
}("undefined" != typeof self ? self : this),
function() {
    function o() {
        return this
    }
    o.extend = function(t) {
        for (var e in t) this[e] = t[e]
    }, o.objects = {
        list: {},
        add: function(t, e, n) {
            this.list[e][t] = n
        },
        delete: function(t, e) {
            delete this.list[e][t]
        }
    }, o.func = {
        id: function(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        },
        getScrollWidth: function(t) {
            let e = 0;
            if (t) {
                if (!(t = "string" == typeof t ? document.getElementById(t) : t)) return !1;
                e = t.offsetWidth - t.clientWidth
            } else {
                let t = document.createElement("div");
                t.style.overflowY = "scroll", t.style.width = "50px", t.style.height = "50px", t.style.visibility = "hidden", document.body.appendChild(t), e = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e
        },
        fmt: function(t, e) {
            let r = "object" == typeof e ? e : arguments;

            function a(t, e) {
                let n = e;
                var o = t.split(".");
                for (let t = 0; t < o.length; t++) {
                    if ("object" != typeof n) {
                        n = void 0;
                        break
                    }
                    n = n[o[t]]
                }
                return n
            }
            return (t = function i(t) {
                return t = (t = (t = (t = t.replace(/{#([\w\d\.]+)!='([^]*?)'}([^]*?){\\\1}/g, function(t, e, n, o) {
                    return (e = a(e, r)) && e == n ? "" : i(o)
                })).replace(/{#([\w\d\.]+)='([^]*?)'}([^]*?){\\\1}/g, function(t, e, n, o) {
                    return (e = a(e, r)) && e == n ? i(o) : ""
                })).replace(/{#([\w\d\.]+)}([^]*?){\\\1}/g, function(t, e, n) {
                    return (e = a(e, r)) && "0" != e && "false" != e ? i(n) : ""
                })).replace(/{\^([\w\d\.]+)}([^]*?){\\\1}/g, function(t, e, n) {
                    return (e = a(e, r)) && "0" != e && "false" != e ? "" : i(n)
                })
            }(t)).replace(/{([\w\d\.]+)}/g, function(t, e) {
                e = a(e, r);
                return null != e ? e : ""
            })
        },
        localStorage: {
            check: function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (t) {
                    return !1
                }
            },
            get: function(t) {
                return this.check() ? localStorage.getItem(t) : null
            },
            set: function(t, e) {
                if (!this.check()) return null;
                localStorage.setItem(t, e)
            }
        },
        addClass: function(e, n) {
            if (e = "string" == typeof e ? document.getElementById(e) : e) {
                let t = new RegExp("(^|\\s)" + n + "(\\s|$)");
                if (e instanceof Node) {
                    if (t.test(e.className)) return e;
                    e.className = (e.className + " " + n).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
                } else if (e instanceof Object)
                    for (var o in e) e[o] instanceof Node && !t.test(e[o].className) && (e[o].className = (e[o].className + " " + n).replace(/\s+/g, " ").replace(/(^ | $)/g, ""));
                else if (e.length)
                    for (var i in e) e[i] instanceof Node && !t.test(e[i].className) && (e[i].className = (e[i].className + " " + n).replace(/\s+/g, " ").replace(/(^ | $)/g, ""));
                return e
            }
        },
        remClass: function(n, o) {
            if (n = "string" == typeof n ? document.getElementById(n) : n) {
                if (o) {
                    if (n instanceof Node) {
                        let t = new RegExp("(^|\\s)" + o + "(\\s|$)", "g");
                        t.test(n.className) && (n.className = n.className.replace(t, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, ""))
                    } else if (n instanceof Object) {
                        let t = new RegExp("(^|\\s)" + o + "(\\s|$)", "g"),
                            e = new RegExp("(^|\\s)" + o + "(\\s|$)");
                        for (var i in n) n[i] instanceof Node && e.test(n[i].className) && (n[i].className = n[i].className.replace(t, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, ""))
                    } else if (n.length) {
                        let t = new RegExp("(^|\\s)" + o + "(\\s|$)", "g"),
                            e = new RegExp("(^|\\s)" + o + "(\\s|$)");
                        for (var r in n) n[r] instanceof Node && e.test(n[r].className) && (n[r].className = n[r].className.replace(t, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, ""))
                    }
                } else n.className = "";
                return n
            }
        },
        togClass: function(t, e, n) {
            var o = this;
            return void 0 !== n ? 1 == n ? o.addClass(t, e) : o.remClass(t, e) : o.hasClass(t, e) ? o.remClass(t, e) : o.addClass(t, e), t
        },
        hasClass: function(t, e) {
            t = "string" == typeof t ? document.getElementById(t) : t;
            let n = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
            return n.test(t.className)
        },
        isChild: function(t, e, n) {
            if (n = n && ("string" == typeof n ? document.getElementById(n) : n), "string" == typeof e)
                if ("." == e.charAt(0))
                    for (e = e.split(".")[1]; t;) {
                        if (o.func.hasClass(t, e)) return t;
                        if (n && t == n) return !1;
                        t = t.parentNode
                    } else
                        for (; t;) {
                            if (t.tagName == e.toUpperCase()) return t;
                            if (n && t == n) return !1;
                            t = t.parentNode
                        } else
                            for (; t;) {
                                if (t == e) return t;
                                if (n && t == n) return !1;
                                t = t.parentNode
                            }
            return !1
        },
        css: function(t, e) {
            if (t = "string" == typeof t ? document.getElementById(t) : t)
                for (var n in e) t.style[n] = e[n]
        },
        bind: function(t, e, n) {
            if (t = "string" == typeof t ? document.getElementById(t) : t)
                if (t instanceof Node || t == window) t.addEventListener ? (t.addEventListener(e, n), "mousewheel" == e && t.addEventListener("DOMMouseScroll", n)) : t.attachEvent && t.attachEvent("on" + e, n);
                else
                    for (var o in t) node = "string" == typeof t[o] ? document.getElementById(t[o]) : t[o], node && (node.addEventListener ? (node.addEventListener(e, n), "mousewheel" == e && node.addEventListener("DOMMouseScroll", n)) : node.attachEvent && node.attachEvent("on" + e, n))
        },
        unbind: function(t, e, n) {
            if (t = "string" == typeof t ? document.getElementById(t) : t)
                if (t instanceof Node || t == window) t.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent && t.detachEvent("on" + e, n);
                else
                    for (var o in t) node = "string" == typeof t[o] ? document.getElementById(t[o]) : t[o], node.removeEventListener ? node.removeEventListener(e, n) : node.detachEvent && node.detachEvent("on" + e, n)
        },
        on: function(t, e, n, o) {
            if (t = "string" == typeof t ? document.getElementById(t) : t) {
                function i(t) {
                    t = t || event;
                    let e;
                    (e = t.target.closest(n)) && o.call(e, t)
                }
                return this.bind(t, e, i), i
            }
        },
        replaceWith: function(t, e) {
            let n = document.createElement("div");
            n.innerHTML = e, t.parentNode.replaceChild(n.firstChild, t)
        },
        insert: function(t, e, n) {
            t.insertAdjacentHTML(n, e)
        },
        before: function(t, e) {
            t = "string" == typeof t ? document.getElementById(t) : t, "string" == typeof e ? t.insertAdjacentHTML("beforebegin", e) : t.parentNode.insertBefore(e, t)
        },
        after: function(t, e) {
            t = "string" == typeof t ? document.getElementById(t) : t, "string" == typeof e ? t.insertAdjacentHTML("afterend", e) : t.parentNode.insertBefore(e, t.nextSibling)
        },
        blinkCl: function(t, e, n) {
            var o = this;
            t = "string" == typeof t ? document.getElementById(t) : t, e = e || "active", n = n || 2e3, o.addClass(t, e), setTimeout(function() {
                o.remClass(t, e)
            }, n)
        },
        toFormData: function(t, e, n) {
            var o, i = this;
            if (n = n || "", t instanceof HTMLFormElement) return new FormData(t);
            if (t instanceof FormData) return t;
            let r = e || new FormData;
            if (t instanceof Date) r.append(n, t.toISOString());
            else if (t instanceof Array) t.forEach(function(t, e) {
                e = n + "[" + e + "]";
                r = i.toFormData(t, r, e)
            });
            else if ("object" != typeof t || t instanceof File) r.append(n, t.toString());
            else
                for (var a in t) t.hasOwnProperty(a) && void 0 !== t[a] && (o = n ? n + "[" + a + "]" : a, r = i.toFormData(t[a], r, o));
            return r
        },
        carPos: function(e) {
            let n = 0;
            if (document.selection) {
                e.focus();
                let t = document.selection.createRange();
                t.moveStart("character", -e.value.length), n = t.text.length
            } else !e.selectionStart && "0" != e.selectionStart || (n = e.selectionStart);
            return n
        },
        setCarPos: function(e, n, o) {
            if (e.setSelectionRange) e.focus(), e.setSelectionRange(n, o);
            else if (e.createTextRange) {
                let t = e.createTextRange();
                t.collapse(!0), t.moveEnd("character", o), t.moveStart("character", n), t.select()
            }
        },
        round: function(t, e) {
            return Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        },
        zerosNum: function(t, e) {
            for (e = e || 2, t = String(t); t.length < e;) t = "0" + t;
            return t
        },
        getPrecision: function(e) {
            let n = 0;
            if ((e = String(e)).match(/^[-+]?(?:[1-9]\.)?[0-9]+e[-]?[1-9][0-9]*$/)) {
                let t = new Array;
                t = e.split("e");
                var o = Math.abs(t[1]);
                n = new Number(o), t = t[0].split("."), 2 == t.length && (n += t[1].length)
            } else {
                let t = e.split(".");
                2 == t.length && (n = t[1].replace(/0+$/, "").length)
            }
            return n
        },
        fixNumber: function(t, e) {
            var n = function(t) {
                    let e = String(t).split(/[eE]/);
                    if (1 == e.length) return e[0];
                    let n = "",
                        o = t < 0 ? "-" : "",
                        i = e[0].replace(".", ""),
                        r = Number(e[1]) + 1;
                    if (r < 0) {
                        for (n = o + "0."; r++;) n += "0";
                        return n + i.replace(/^\-/, "")
                    }
                    for (r -= i.length; r--;) n += "0";
                    return i + n
                }(t),
                t = this.getPrecision(n);
            return n = (+n).toFixed(e && e < t ? e : t)
        },
        maxCountNumbers: function(t, e) {
            let n = (t = String(this.fixNumber(t))).split(".");
            return 1 == n.length ? t : (n[1] = n[1].substr(0, e - n[0].length), this.fixNumber(n[0] + "." + n[1]))
        },
        minCountToFixed: function(t, e, n) {
            e = e || 4;
            let o = (t = String(this.maxCountNumbers(t, n))).split(".");
            1 == o.length && (o[1] = "");
            let i = e - o[0].length - 1;
            for (i = 0 < i ? i : 0; o[1].length < i;) o[1] += "0";
            let r = o[0] + "." + o[1];
            return "." == r.slice(-1) && (r = r.slice(0, -1)), r
        },
        minToFixed: function(t, e) {
            e = e || 2;
            let n = (t = String(this.fixNumber(t))).split(".");
            for (1 == n.length && (n[1] = ""); n[1].length < e;) n[1] += "0";
            return n[0] + "." + n[1]
        },
        scrollTop: function(t, e, n) {
            var o = 15 * ((e = (e = e > t.scrollHeight - t.offsetHeight ? t.scrollHeight - t.offsetHeight : e) < 0 ? 0 : e) - t.scrollTop) / n;
            let i = setInterval(function() {
                o < 0 && t.scrollTop > e || 0 < o && t.scrollTop < e ? t.scrollTop += o : clearInterval(i)
            }, 15);
            return i
        },
        upload: function(t) {
            let e = new XMLHttpRequest;
            e.id = e.upload.id = t.id, e.obj = e.upload.obj = t.obj, e.wrap = e.upload.wrap = t.wrap, !t.onProgress && "function" != typeof t.onProgress || (e.upload.onprogress = t.onProgress), !t.onLoad && "function" != typeof t.onLoad || (e.onload = t.onLoad), !t.onError && "function" != typeof t.onError || (e.onerror = t.onError), e.open("POST", t.url, !0);
            let n = new FormData;
            n.append("upload", t.file), e.send(n)
        },
        copy: function(t, e, n) {
            let o = n ? document.createElement("div") : document.createElement("textarea"),
                i = document.createRange();
            var r = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
            if (e = e && r ? e : document.body, o.style.position = "absolute", o.style.zIndex = "-999", o.style.opacity = "0", o.setAttribute("contenteditable", "true"), o.setAttribute("style", "position:absolute;opacity:0;z-index:-999;font-size:16px;left:0"), e.appendChild(o), n ? o.innerHTML = t : o.textContent = t, r || n) {
                i.selectNodeContents(o);
                let t = window.getSelection();
                t.removeAllRanges(), t.addRange(i), n || o.setSelectionRange(0, 999999)
            } else o.select();
            n = document.execCommand("copy");
            return e.removeChild(o), n
        },
        extend: function() {
            for (let t = 1; t < arguments.length; t++)
                for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
            return arguments[0]
        },
        isEmptyObject: function(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        },
        formatTime: function(t, e) {
            var n = ~~(t / 3600);
            return (n || e ? o.func.zerosNum(n) + ":" : "") + o.func.zerosNum(~~(t / 60) - 60 * n) + ":" + o.func.zerosNum(t % 60)
        },
        getDateObj: function(t, e) {
            var n = (e = e || "yyyy-mm-dd").indexOf("dd"),
                o = e.indexOf("mm"),
                e = e.indexOf("yyyy");
            if (0 <= n && 0 <= o && 0 <= e) {
                n = +t.substr(n, 2), o = +t.substr(o, 2), e = +t.substr(e, 4);
                return {
                    day: n || null,
                    month: o || null,
                    year: e || null,
                    dateTxt: e && o && n ? e + "-" + o + "-" + n : null
                }
            }
        },
        printDate: function(t, e) {
            let n = e = e || "yyyy-mm-dd";
            return n = n.replace(/dd/, this.zerosNum(t.day)), n = n.replace(/mm/, this.zerosNum(t.month)), n = n.replace(/yyyy/, this.zerosNum(t.year, 4)), n
        },
        compDates: function(t, e, n) {
            return !0 === n ? t.year == e.year && t.month == e.month && t.day == e.day : t.year > e.year ? -1 : t.year < e.year ? 1 : t.month > e.month ? -1 : t.month < e.month ? 1 : t.day > e.day ? -1 : t.day < e.day ? 1 : 0
        }
    }, window.UI = o
}(), window.UI.extend({
    selector: function(r, t) {
        function a() {
            return this
        }
        let s = UI.func;
        a.val = function(t) {}, a.select = function(t, e) {}, a.selectById = function(t, e) {}, a.attr = function(t, e) {}, a.selectedAttr = function(t) {}, a.open = function() {}, a.close = function() {}, a.optionHide = function(t) {}, a.optionShow = function(t) {}, a.optionShowAll = function(t) {}, a.onChange = function(t) {}, a.onInit = function(t) {}, a.onOpen = function(t) {}, a.onClose = function(t) {}, a.options = {};
        let i = "string" == typeof r ? document.getElementById(r) : r,
            e = "object" == typeof t && t.onInit ? t.onInit : function() {},
            o = "object" == typeof t && t.onChange ? t.onChange : function() {},
            n = "object" == typeof t && t.onOpen ? t.onOpen : function() {},
            l = "object" == typeof t && t.onClose ? t.onClose : function() {};
        var c = "object" == typeof t && t.arrow ? t.arrow : "right";
        let u = "object" == typeof t && t.dataToAttr ? t.dataToAttr : [];
        var d = "object" == typeof t && !0 === t.hidden;
        let f = "object" != typeof t || !1 !== t.hover,
            p = "object" == typeof t && t.searchByDataset ? t.searchByDataset : [];
        a.tmpl = "object" == typeof t && t.tmpl ? t.tmpl : "{label}", a.tmplSel = "object" == typeof t && t.tmplSel ? t.tmplSel : a.tmpl, a.search = !("object" != typeof t || !t.search) && t.search, a.emptyText = "object" == typeof t && t.emptyText ? t.emptyText : "No data";
        let h = [],
            m = [],
            y = [],
            g = {},
            b = [],
            v = ["label", "value"],
            w = "",
            x = "",
            C = 0,
            T = 0,
            A = !1,
            E = !1;
        let S = document.createElement("div"),
            _ = document.createElement("label"),
            P = document.createElement("div"),
            I = document.createElement("div"),
            B = document.createElement("div"),
            L = document.createElement("ul");
        document.createElement("div"), document.createElement("div");
        let j;
        t = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchstart" : "mousedown", "ontouchmove" in window || window.DocumentTouch && (document, DocumentTouch), "ontouchend" in window || window.DocumentTouch && (document, DocumentTouch);

        function O() {
            h = [];
            for (let n = 0; n < i.options.length; n++) {
                let e = {};
                if ("separate" == i.options[n].getAttribute("label")) e._type = "separate", e.label = i.options[n].innerHTML;
                else {
                    e._type = "option", e._search = "", e.label = i.options[n].label, e.value = i.options[n].value, e.index = i.options[n].index, e.disabled = i.options[n].disabled, e.hidden = !1;
                    var t, o = i.options[n].dataset;
                    for (t in o) e[t] = o[t];
                    for (let t = 0; t < v.length; t++) 0 != t && (e._search += "  "), e._search += i.options[n][v[t]] || "";
                    for (let t = 0; t < p.length; t++) e[p[t]] && (e._search += "   " + e[p[t]]);
                    e.newindex = m.push(e) - 1, a.options[i.options[n].value] = e, i.options[n].selected && (x = i.options[n].value, C = e.newindex)
                }
                h.push(e)
            }
        }
        O(), S.setAttribute("class", "ui-select-outer"), _.setAttribute("class", "ui-select"), P.setAttribute("class", "ui-select-value"), I.setAttribute("class", "ui-select-arrow"), B.setAttribute("class", "ui-select-list"), B.appendChild(L), "left" == c && _.appendChild(I), _.appendChild(P), "right" == c && _.appendChild(I), S.appendChild(_), S.appendChild(B), i.parentNode.insertBefore(S, i), i.setAttribute("class", "hidden");
        let U = UI.scroller(L, {
            scroll: "y",
            addParent: !1,
            classScrollWrapY: "ui-select-scroll-wrap",
            classScrollBarY: "ui-select-scroll",
            addClasses: !1
        });
        if (a.search) {
            c = void 0 !== a.search.placeholder ? a.search.placeholder : "Search";
            S.setAttribute("class", "ui-select-outer with-search");
            let t = document.createElement("div"),
                e = document.createElement("div");

            function R(t) {
                APP.api(a.search.api, {
                    search: t
                }, function(t) {
                    "function" == typeof a.search.apiHandler && (t.data = a.search.apiHandler(t.data)), console.log(t.data), i.innerHTML = "",
                        function(e) {
                            for (var n in e) {
                                let t = document.createElement("option");
                                t.setAttribute("value", e[n].value), t.innerHTML = e[n].label || e[n].value, i.appendChild(t)
                            }
                        }(t.data), O(), k(h)
                })
            }
            j = document.createElement("input"), t.setAttribute("class", "ui-select-search"), e.setAttribute("class", "ui-select-search-inner"), j.setAttribute("type", "text"), j.setAttribute("placeholder", c), t.innerHTML = '<span class="ui-select-search-ico ico"></span>', e.appendChild(j), t.appendChild(e), _.appendChild(t), j.onfocus = function() {
                a.search.api && R(this.value)
            }, j.oninput = function() {
                var t = this.value;
                let e = [];
                if (t != w) {
                    if (a.search.api) R(t);
                    else if (!t && E) E = !1, k(h);
                    else {
                        var n = new RegExp(t, "i");
                        for (let t = 0; t < m.length; t++) 0 <= m[t]._search.search(n) && !m[t].disabled && e.push(m[t]);
                        E = !0, k(e, !0)
                    }
                    U.update(), w = t
                }
            }
        }

        function k(n, o) {
            if (L.innerHTML = "", y = [], !n.length) {
                let t = document.createElement("li");
                return t.setAttribute("class", "ui-select-empty"), t.innerHTML = a.emptyText, void L.appendChild(t)
            }
            if (o && a.search && a.search.label) {
                let t = document.createElement("li");
                t.setAttribute("class", "ui-select-separate"), t.innerHTML = a.search.label, L.appendChild(t)
            }
            for (let e = 0; e < n.length; e++) {
                let t = document.createElement("li");
                if ("separate" != n[e]._type || o) {
                    for (var i in t.id = r + "_option_" + n[e].value, t.setAttribute("class", "ui-select-option"), t.setAttribute("data-value", n[e].value), t.setAttribute("data-num", y.length), u) {
                        i = u[i];
                        n[e][i] && t.setAttribute("data-" + i, n[e][i])
                    }
                    t.innerHTML = s.fmt(a.tmpl, n[e]), n[e].disabled && s.addClass(t, "disabled"), item_show = {
                        li: t,
                        option: n[e]
                    }, y.push(item_show)
                } else t.setAttribute("class", "ui-select-separate"), t.innerHTML = n[e].label;
                L.appendChild(t), g[n[e].value] = t
            }
            T = 0, y[T] && f && s.addClass(y[T].li, "hover")
        }

        function H(t, e, n) {
            a.options[t][e] = n
        }
        return d && s.addClass(S, "hidden-label"), _.onclick = function(t) {
            (t = t || event).preventDefault(), !A || j && s.isChild(t.target, j) ? a.open() : a.close()
        }, B.onclick = function(t) {
            t = t || event;
            let e = s.isChild(t.target, ".ui-select-option", this);
            e && a.select(e.getAttribute("data-value"))
        }, B.onmouseover = function(t) {
            if (t = t || event, !f) return !1;
            let e = s.isChild(t.target, ".ui-select-option", this);
            e && e != y[T].li && (s.remClass(y[T].li, "hover"), T = +e.getAttribute("data-num"), s.addClass(y[T].li, "hover"))
        }, a.val = function(t) {
            if (void 0 === t) return x;
            a.select(t)
        }, a.select = function(t, e) {
            var n = C;
            return x = t, i.selectedIndex = a.options[x].index, C = a.options[x].newindex, m.length && (P.innerHTML = s.fmt(a.tmplSel, m[C]), _.setAttribute("data-value", x), S.setAttribute("data-value", x), o.call(a, m[C], m[n], e)), a.close(), i.onchange && i.onchange(), a
        }, a.selectById = function(t, e) {
            var n = C;
            return m.length && (i.selectedIndex = m[t].index, x = i.options[i.selectedIndex].value, C = t, P.innerHTML = s.fmt(a.tmplSel, m[C]), _.setAttribute("data-value", x), S.setAttribute("data-value", x), o.call(a, m[C], m[n], e)), a.close(), a
        }, a.attr = function(t, e, n) {
            if (void 0 === n) return a.options[t][e];
            a.options[t] && (a.options[t][e] = n), g[t] && g[t].setAttribute("data-" + e, n)
        }, a.selectedAttr = function(t) {
            return a.options[x][t]
        }, a.open = function() {
            return A || (A = !0, f && y.length && s.addClass(y[T].li, "hover"), s.addClass(S, "active"), U.update(), a.search && j.focus(), n.call(a)), a
        }, a.close = function() {
            return A && (A = !1, s.remClass(S, "active"), a.search && (j.value = "", j.oninput(), j.blur()), l.call(a)), a
        }, a.optionHide = function(t) {
            return s.addClass(document.getElementById(r + "_option_" + t), "hidden"), H(t, "hidden", !0), b.indexOf(t) < 0 && b.push(t), a
        }, a.optionShow = function(t) {
            return s.remClass(document.getElementById(r + "_option_" + t), "hidden"), H(t, "hidden", !1), 0 <= b.indexOf(t) && b.splice(b.indexOf(t), 1), a
        }, a.optionShowAll = function(t) {
            var e = b;
            for (let t = 0; t < e.length; t++) a.optionShow(e[t]);
            return a
        }, a.onChange = function(t) {
            return o = t, a
        }, a.onInit = function(t) {
            return e = t, a
        }, a.onOpen = function(t) {
            return n = t, a
        }, a.onClose = function(t) {
            return l = t, a
        }, k(h), a.selectById(C), e.call(a, m[C]), s.bind(document, t, function(t) {
            t = t || event, s.isChild(t.target, S) || a.close()
        }), s.bind(document, "keydown", function(t) {
            if (t = t || event, A && f && (38 == t.keyCode || 40 == t.keyCode)) {
                if (t.preventDefault(), s.remClass(y[T].li, "hover"), 38 == t.keyCode)
                    for (T <= 0 || T--; s.hasClass(y[T].li, "disabled") && 0 < T;) T--;
                else if (40 == t.keyCode)
                    for (T >= y.length - 1 || T++; s.hasClass(y[T].li, "disabled") && T < y.length - 1;) T++;
                L.scrollTop > y[T].li.offsetTop ? L.scrollTop = y[T].li.offsetTop : L.scrollTop + L.offsetHeight < y[T].li.offsetTop + y[T].li.offsetHeight && (L.scrollTop = y[T].li.offsetTop + y[T].li.offsetHeight - L.offsetHeight - 1), s.addClass(y[T].li, "hover")
            } else A && f && 13 == t.keyCode ? y[T].li.click() : A && 27 == t.keyCode && a.close()
        }), a
    }
}), window.UI.extend({
    scroller: function(t, e) {
        function n() {
            return this
        }
        var o = UI.func,
            i = "string" == typeof t ? document.getElementById(t) : t;
        if (i) {
            var r = o.getScrollWidth(),
                a = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchstart" : "mousedown",
                s = "ontouchmove" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchmove" : "mousemove",
                l = "ontouchend" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchend" : "mouseup";
            n.scroll = "object" == typeof e && e.scroll ? e.scroll : "auto", n.update = function() {
                C()
            };
            var c, u, d, f, p, h = "object" != typeof e || !1 !== e.addParent || e.addParent,
                m = "object" != typeof e || !1 !== e.addClasses || e.addClasses,
                y = "object" == typeof e && e.classScrollWrapX ? e.classScrollWrapX : "scroller-wrap-x",
                g = "object" == typeof e && e.classScrollWrapY ? e.classScrollWrapY : "scroller-wrap-y",
                t = "object" == typeof e && e.classScrollBarX ? e.classScrollBarX : "scroller-sbar-x",
                e = "object" == typeof e && e.classScrollBarY ? e.classScrollBarY : "scroller-sbar-y",
                b = {
                    x: !1,
                    y: !1
                },
                v = {
                    x: {
                        volume: 100,
                        coef: 0,
                        position: 0
                    },
                    y: {
                        volume: 100,
                        coef: 0,
                        position: 0
                    }
                },
                w = {
                    move: 0,
                    pos: 0
                },
                x = -1;
            return h ? (c = document.createElement("div")).setAttribute("style", "overflow: hidden; padding: 0") : c = i.parentNode, "auto" != n.scroll && "x" != n.scroll || (u = document.createElement("div"), d = document.createElement("div"), u.setAttribute("class", y), d.setAttribute("class", t), u.appendChild(d), c.appendChild(u)), "auto" != n.scroll && "y" != n.scroll || (f = document.createElement("div"), p = document.createElement("div"), f.setAttribute("class", g), p.setAttribute("class", e), f.appendChild(p), c.appendChild(f)), "auto" != n.scroll && m && i.addClass("only-" + n.scroll), i.onscroll = function() {
                var t;
                "auto" != n.scroll && "y" != n.scroll || (100 != v.y.volume ? (t = this.scrollTop / (this.scrollHeight - this.offsetHeight), v.y.position = t * (f.offsetHeight - p.offsetHeight)) : v.y.position = 0, o.css(p, {
                    top: v.y.position + "px",
                    height: v.y.volume.toFixed(2) + "%"
                }))
            }, C(), d && o.bind(d, a, function(t) {
                t.preventDefault(), b.x = !0, o.addClass(this, "active"), w.move = t.clientX || t.originalEvent.touches[0].clientX, w.pos = v.x.position
            }), p && (o.bind(f, a, function(t) {
                var n, e;
                t.target != this || b.x || b.y || (t.preventDefault(), n = (t.clientY || t.originalEvent.touches[0].clientY) - this.getBoundingClientRect().top, (e = function(t) {
                    var e;
                    n < v.y.position ? (e = i.scrollTop - .95 * i.offsetHeight, o.scrollTop(i, e, t)) : n > p.offsetHeight + v.y.position ? (e = i.scrollTop + .95 * i.offsetHeight, o.scrollTop(i, e, t)) : clearInterval(x)
                })(100), x = setInterval(function() {
                    e(100)
                }, 100))
            }), o.bind(p, a, function(t) {
                t.preventDefault(), b.y = !0, o.addClass(this, "active"), w.move = t.clientY || t.originalEvent.touches[0].clientY, w.pos = v.y.position
            })), o.bind(document, s, function(t) {
                var e;
                b.x ? (e = t.clientX || t.originalEvent.touches[0].clientX, v.x.position = w.pos + e - w.move, i.scrollLeft = v.x.position * v.x.coef) : b.y && (t = t.clientY || t.originalEvent.touches[0].clientY, v.y.position = w.pos + t - w.move, i.scrollTop = v.y.position * v.y.coef)
            }), o.bind(document, l, function(t) {
                clearInterval(x), b.x && o.remClass(d, "active"), b.y && o.remClass(p, "active"), b.x = !1, b.y = !1
            }), n
        }

        function C() {
            "auto" != n.scroll && "x" != n.scroll || (v.x.volume = i.scrollHeight ? 100 * i.offsetHeight / i.scrollHeight : 100, v.x.coef = u.offsetHeight ? i.scrollHeight / u.offsetHeight : 0, u.setAttribute("data-width", v.x.volume.toFixed()), o.css(i, {
                "padding-bottom": o.getScrollWidth() + "px"
            })), "auto" != n.scroll && "y" != n.scroll || (v.y.volume = i.scrollHeight ? 100 * i.offsetHeight / i.scrollHeight : 100, v.y.coef = f.offsetHeight ? i.scrollHeight / f.offsetHeight : 0, f.setAttribute("data-height", v.y.volume.toFixed()), 100 <= v.y.volume ? o.addClass(f, "hidden") : o.remClass(f, "hidden"), r = 100 == v.y.volume ? 0 : o.getScrollWidth(i), o.css(i, {
                "padding-right": r + "px",
                width: "calc(100% + " + r + "px)"
            })), i.onscroll()
        }
    }
}), window.UI.extend({
    dyngraph: function(t, e) {
        function E() {
            return this
        }
        var S, _, P, I, B, L, j, o, O, U, R, k, H, N, D, F = -100,
            M = -100,
            z = !1,
            q = !1,
            W = !1,
            $ = !1,
            X = !1,
            G = {},
            Y = {
                w: 0,
                h: 0,
                data: [],
                division: "auto",
                max: void 0,
                min: void 0,
                translate: {
                    x: 0,
                    y: 0
                },
                padding: {
                    fromParent: !0,
                    bottom: 40,
                    left: 50,
                    right: 50,
                    top: 30
                },
                dpi: {
                    x: 0,
                    y: 0
                },
                offsetText: 7,
                color: "0,0,0",
                gradientLine: [],
                options: {
                    pointsSize: 2,
                    pointsShadowSize: 5,
                    mainPointSize: 5,
                    mainPointPulseSize: 15,
                    mainPointShadowSize: 9
                },
                measure: ""
            },
            V = {
                start: 2e3,
                new: 500,
                text: 200,
                clear: 1e3
            },
            J = {
                start: 0,
                translate: 0,
                clear: 0
            },
            Z = window.devicePixelRatio || 1,
            K = 1 / Z,
            Q = 0,
            tt = !1;

        function et(t) {
            "object" == typeof t && (E.setOptions(t), U = t.data || [], R = !!t.showValuesAlways, k = t.radiusMouse || 15, H = t.hoverType || "column", Y.max = void 0, Y.min = void 0)
        }

        function nt(t) {
            for (var e = 0; e < t.length; e++)(void 0 === Y.min || t[e] < Y.min) && (Y.min = t[e]), (void 0 === Y.max || t[e] > Y.max) && (Y.max = t[e]);
            Y.division = "auto" == Y.division ? t.length : Y.division;
            for (e = 0; e < t.length; e++) Y.data[e] = {
                x: e * Y.dpi.x,
                y: 0 != Y.dpi.y ? (t[e] - Y.min) * Y.dpi.y : Y.h / 2,
                value: t[e],
                timeAdd: 0
            }
        }

        function ot() {
            Y.dpi.y = Y.max != Y.min ? Y.h / (Y.max - Y.min) : 0;
            for (var t = 0; t < Y.data.length; t++) Y.data[t].y = 0 != Y.dpi.y ? (Y.data[t].value - Y.min) * Y.dpi.y : Y.h / 2
        }

        function it(t) {
            return +t.toFixed(8)
        }
        return S = document.getElementById(t), _ = E.canvas = document.createElement("canvas"), P = document.createElement("canvas"), I = document.createElement("canvas"), B = document.createElement("canvas"), L = _.getContext("2d"), j = P.getContext("2d"), ctxLine = I.getContext("2d"), E.addPoint = function(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) Y.data.push({
                        x: Y.data.length * Y.dpi.x,
                        y: (t[e] - Y.min) * Y.dpi.y,
                        value: t[e],
                        timeAdd: 0
                    });
                else Y.data.push({
                    x: Y.data.length * Y.dpi.x,
                    y: (t - Y.min) * Y.dpi.y,
                    value: t,
                    timeAdd: 0
                })
            }, E.setOptions = function(t) {
                "object" == typeof t && (t.color && (Y.color = t.color), t.measure && (Y.measure = t.measure), t.division && (Y.division = t.division), t.offsetText && (Y.offsetText = t.offsetText), t.gradientLine && (Y.gradientLine = t.gradientLine), "object" == typeof t.padding && (t.padding.fromParent && (Y.padding.fromParent = t.padding.fromParent), t.padding.bottom && (Y.padding.bottom = t.padding.bottom), t.padding.left && (Y.padding.left = t.padding.left), t.padding.right && (Y.padding.right = t.padding.right), t.padding.top && (Y.padding.top = t.padding.top)), "object" == typeof t.options && (t.options.pointsSize && (Y.options.pointsSize = t.options.pointsSize), t.options.pointsShadowSize && (Y.options.pointsShadowSize = t.options.pointsShadowSize), t.options.mainPointSize && (Y.options.mainPointSize = t.options.mainPointSize), t.options.mainPointPulseSize && (Y.options.mainPointPulseSize = t.options.mainPointPulseSize), t.options.mainPointShadowSize && (Y.options.mainPointShadowSize = t.options.mainPointShadowSize)), "object" == typeof t.duration && (t.duration.new && (V.new = t.duration.new), t.duration.text && (V.text = t.duration.text), t.duration.start && (V.start = t.duration.start)))
            }, E.update = function() {
                Z = window.devicePixelRatio || 1, K = 1 / Z, o = S.offsetWidth, O = S.offsetHeight, P.width = I.width = B.width = _.width = o * Z, P.height = I.height = B.height = _.height = O * Z, Y.padding.fromParent && (Y.padding.bottom = parseInt(window.getComputedStyle(S, null).getPropertyValue("padding-bottom")), Y.padding.left = parseInt(window.getComputedStyle(S, null).getPropertyValue("padding-left")), Y.padding.right = parseInt(window.getComputedStyle(S, null).getPropertyValue("padding-right")), Y.padding.top = parseInt(window.getComputedStyle(S, null).getPropertyValue("padding-top"))), Y.w = o - Y.padding.left - Y.padding.right, Y.h = O - Y.padding.top - Y.padding.bottom, Y.dpi.x = Y.w / (Y.division - 1), Y.dpi.y = Y.max != Y.min ? Y.h / (Y.max - Y.min) : 0, Y.translate.x = Y.translate.x ? Y.dpi.x : 0;
                for (var t = 0; t < Y.data.length; t++) Y.data[t].x = t * Y.dpi.x, Y.data[t].y = 0 != Y.dpi.y ? (Y.data[t].value - Y.min) * Y.dpi.y : Y.h / 2;
                if (Y.gradientLine.length) {
                    for (var e = B.getContext("2d"), n = e.createLinearGradient(Y.padding.left - 15, 0, Y.w + Y.padding.left + 15, 0), t = 0; t < Y.gradientLine.length; t++) n.addColorStop(Y.gradientLine[t][0], Y.gradientLine[t][1]);
                    e.scale(Z, Z), e.fillStyle = n, e.fillRect(0, 0, o, O), Y.color = "0,0,0"
                }
                X = !1
            }, E.clear = function() {
                $ || (J.clear = (new Date).getTime()), $ = !0
            }, E.reinit = function(t, e) {
                e && E.clear(), $ ? G = t : (J.start = (new Date).getTime(), J.translate = J.clear = Y.translate.x = 0, t ? (et(t), nt(U)) : (Y.min = void 0, Y.max = void 0, Y.data.splice(0, Y.data.length - Y.division), function() {
                    for (var t = 0; t < Y.data.length; t++)(void 0 === Y.min || Y.data[t].value < Y.min) && (Y.min = Y.data[t].value), (void 0 === Y.max || Y.data[t].value > Y.max) && (Y.max = Y.data[t].value)
                }()), E.update())
            }, et(e),
            function() {
                nt(U);
                var e = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                    t = e ? "touchmove" : "mousemove";
                _.addEventListener(t, function(t) {
                    bounds = S.getBoundingClientRect(), F = e ? t.targetTouches[0].clientX - bounds.left : t.clientX, M = e ? t.targetTouches[0].clientY - bounds.top : t.clientY
                }), _.addEventListener("mouseout", function(t) {
                    M = F = -100
                }), e && _.addEventListener("touchend", function(t) {
                    M = F = -100
                }), window.addEventListener ? window.addEventListener("resize", E.update) : window.attachEvent && window.attachEvent("onresize", E.update), E.update(), S.appendChild(_), J.start = (new Date).getTime()
            }(),
            function t() {
                if (!tt) {
                    var e = new Date,
                        n = e.getTime(),
                        o = n - J.start,
                        i = o < V.start ? o / V.start : 1,
                        r = 0,
                        a = 0,
                        s = [];
                    3e4 < n - N && E.reinit(), 1 == i && J.translate && (r = (l = n - J.translate) < V.new ? l / V.new : 1);
                    var l = Y.translate.x * r;
                    if (W && (W = !1, ot()), J.clear && (a = (o = n - J.clear) < V.clear ? o / V.clear : 1), Y.data.length) {
                        var c, u, d, f, p, h, m, y, g, b = Y.w * i + l,
                            v = Y.w * a + l,
                            w = 0;
                        if ($ && v && b <= v && 0 != Object.keys(G).length) return J.start = (new Date).getTime(), J.translate = J.clear = Y.translate.x = 0, et(G), nt(U), E.update(), $ = !(G = {}), void window.requestAnimationFrame(t);
                        if (L.clearRect(0, 0, L.canvas.width, L.canvas.height), j.clearRect(0, 0, j.canvas.width, j.canvas.height), L.lineWidth = 1, L.globalCompositeOperation = "source-over", L.fillStyle = "rgba(0,0,0,0.4)", L.strokeStyle = "rgba(" + Y.color + ",1)", L.textAlign = "center", L.font = '0.8em "Open Sans"', L.save(), L.scale(Z, Z), L.translate(-l, 0), L.moveTo(0, 0), L.beginPath(), 1 != a) {
                            if (X = (!(1 != i || r || a || Y.data.length > Y.division) || !X) && X) L.scale(K, K), L.drawImage(I, 0, 0), w = Y.data[Y.data.length - 1].y, s = Y.data, L.scale(Z, Z);
                            else {
                                for (var x = 0; x < Y.data.length; x++)
                                    if (!(x < Y.data.length - 1 && Y.data[x + 1].x <= v))
                                        if (Y.data[x].x - v < 0) {
                                            var C = Y.data[x + 1].y + (Y.data[x + 1].x - v) * (Y.data[x].y - Y.data[x + 1].y) / (Y.data[x + 1].x - Y.data[x].x);
                                            s[x] = {
                                                x: v,
                                                y: C
                                            }, 0 == x && r && (Y.data[x].value == Y.max || z ? (z = !0, Y.max += 0 != Y.dpi.y ? it((C - Y.h) / Y.dpi.y) : 0, ot()) : Y.data[x].value != Y.min && !q || (q = !0, Y.min += 0 != Y.dpi.y ? it(C / Y.dpi.y) : 0, ot())), 0 < Y.data[x].timeAdd && R && (Y.data[0].timeAdd = -n), L.lineTo(Y.padding.left + s[x].x, Y.padding.top + Y.h - s[x].y)
                                        } else if (Y.data[x].x <= b + 1e-10) s[x] = {
                                    x: Y.data[x].x,
                                    y: Y.data[x].y
                                }, w = s[x].y, L.lineTo(Y.padding.left + s[x].x, Y.padding.top + Y.h - s[x].y), Y.data[x].value >= Y.max ? (Y.max = Y.data[x].value, W = !(z = !1)) : Y.data[x].value <= Y.min && (Y.min = Y.data[x].value, W = !(q = !1));
                                else if (s[x - 1]) {
                                    1 != i || J.translate || (Y.translate.x = Y.dpi.x, J.translate = (new Date).getTime()), (w = s[x - 1].y + (b - s[x - 1].x) * (Y.data[x].y - s[x - 1].y) / (Y.data[x].x - s[x - 1].x)) < 0 ? (Y.min += 0 != Y.dpi.y ? it(w / Y.dpi.y) : 0, q = !1, ot()) : Y.h < w && (Y.max += 0 != Y.dpi.y ? it((w - Y.h) / Y.dpi.y) : 0, z = !1, ot()), L.lineTo(Y.padding.left + b, Y.padding.top + Y.h - w);
                                    break
                                }
                                for (L.stroke(), x = 0; x < s.length; x++) s[x] && (L.globalCompositeOperation = "destination-out", L.fillStyle = "rgba(0,0,0,1)", L.lineWidth = 0, L.beginPath(), L.arc(Y.padding.left + s[x].x, Y.padding.top + Y.h - s[x].y, Y.options.pointsShadowSize, 0, 2 * Math.PI), L.fill(), L.globalCompositeOperation = "source-over", L.fillStyle = "rgba(" + Y.color + ",1)", L.beginPath(), L.arc(Y.padding.left + s[x].x, Y.padding.top + Y.h - s[x].y, Y.options.pointsSize, 0, 2 * Math.PI), L.fill())
                            }
                            for (1 != i || r || a || (ctxLine.clearRect(0, 0, ctxLine.canvas.width, ctxLine.canvas.height), ctxLine.drawImage(_, 0, 0), X = !0), x = 0; x < s.length; x++) c = x, u = n, g = y = m = h = p = f = d = void 0, m = !1, y = Y.padding.left + Y.data[c].x, g = Y.padding.top + Y.h - Y.data[c].y, R ? (0 == Y.data[c].timeAdd && (Y.data[c].timeAdd = u), Y.data[c].timeAdd < 0 ? 0 == (d = (h = u + Y.data[c].timeAdd) < V.text ? 1 - h / V.text : 0) && (Y.data[c].timeAdd = 0) : d = (h = u - Y.data[c].timeAdd) < V.text ? h / V.text : 1) : ("radius" == H ? m = (f = y - F) * f + (f = g - M) * f <= k * k : "column" == H && (m = c == Math.round((F - Y.padding.left) / Y.dpi.x)), d = m ? (Y.data[c].timeAdd <= 0 && (p = 0 < (h = u + Y.data[c].timeAdd) && h < V.text ? V.text - h : 0, Y.data[c].timeAdd = u + p), (h = u - Y.data[c].timeAdd) < V.text ? h / V.text : 1) : (0 < Y.data[c].timeAdd && (p = 0 < (h = u - Y.data[c].timeAdd) && h < V.text ? V.text - h : 0, Y.data[c].timeAdd = -u - p), (h = u + Y.data[c].timeAdd) < V.text ? 1 - h / V.text : 0)), 0 < d && (p = 0 < c ? Y.data[c - 1].y - Y.data[c].y : 0, u = c < Y.data.length - 1 ? Y.data[c + 1].y - Y.data[c].y : 0, h = Y.offsetText, L.textBaseline = "bottom", L.fillStyle = "rgba(255,255,255," + .8 * d + ")", (p <= 0 && 0 < u && -p < u || 0 < p && (0 <= u || u < 0 && -u < p)) && (L.textBaseline = "top", h = -h), L.fillText(Y.data[c].value + (Y.measure ? " " + Y.measure : ""), y, g - h));
                            L.globalCompositeOperation = "destination-out", L.fillStyle = "rgba(0,0,0,1)", L.lineWidth = 0, L.beginPath(), L.arc(Y.padding.left + b, Y.padding.top + Y.h - w, Y.options.mainPointShadowSize, 0, 2 * Math.PI), L.fill(), L.globalCompositeOperation = "source-over", e = 1 - (a = .001 * e.getMilliseconds()), L.fillStyle = "rgba(" + Y.color + "," + e + ")", L.beginPath(), L.arc(Y.padding.left + b, Y.padding.top + Y.h - w, Y.options.mainPointPulseSize * a, 0, 2 * Math.PI), L.fill(), L.fillStyle = "rgba(" + Y.color + ",1)", L.beginPath(), L.arc(Y.padding.left + b, Y.padding.top + Y.h - w, Y.options.mainPointSize - Math.sin(Math.PI * e), 0, 2 * Math.PI), L.fill()
                        }
                        Y.gradientLine.length && (j.drawImage(_, 0, 0), L.clearRect(0, 0, L.canvas.width, L.canvas.height), L.scale(K, K), L.drawImage(B, l * Z, 0), L.globalCompositeOperation = "destination-in", L.drawImage(P, l * Z, 0), L.scale(Z, Z)), L.restore(), L.save(), L.scale(Z, Z), L.fillStyle = "rgba(255,255,255,0.4)", L.textBaseline = "bottom", L.font = '0.6em "Open Sans"';
                        var T = Y.padding.left + Y.w,
                            A = O - 5;
                        for (L.fillText("now", T, A), x = 1; x < Y.data.length / 10; x++) T -= 10 * Y.dpi.x, L.fillText(10 * x + " min", T, A);
                        L.restore(), 1 < Y.data.length && l >= Y.data[1].x && (Y.data.length > Y.division && function() {
                            var t = [];
                            Y.dpi.y = Y.max != Y.min ? Y.h / (Y.max - Y.min) : 0;
                            for (var e = 0; e < Y.data.length - 1; e++) t[e] = Y.data[e + 1], t[e].x = e * Y.dpi.x, t[e].y = 0 != Y.dpi.y ? (t[e].value - Y.min) * Y.dpi.y : Y.h;
                            Y.data = t
                        }(), J.translate = Y.translate.x = l = 0), N = n, D ? (delta = (performance.now() - D) / 1e3, D = performance.now(), fps = 1 / delta, fps < 25 && Q++, 25 < Q && (UI.func.addClass(S, "hide"), setTimeout(function() {
                            tt = !0
                        }, 500))) : (D = performance.now(), fps = 0), window.requestAnimationFrame(t)
                    } else window.requestAnimationFrame(t)
                }
            }(), E
    }
}), window.UI.extend({
    button: function(t, e) {
        function n() {
            return this
        }
        var o = "string" == typeof t ? document.getElementById(t) : t,
            i = o instanceof Node;
        let r = i ? o : void 0;
        var a = r ? r.getAttribute("data-loading") : null,
            s = r ? r.getAttribute("data-success") : null,
            t = r ? r.getAttribute("data-error") : null;
        n.obj = r, n.loadingText = e && "string" == typeof e.loadingText ? e.loadingText : a || "Loading", n.successText = e && "string" == typeof e.successText ? e.successText : s || "Success", n.errorText = e && "string" == typeof e.errorText ? e.errorText : t || "Error", n.changeAtOnce = !e || !1 !== e.changeAtOnce || e.changeAtOnce, n.changeTexts = !e || !1 !== e.changeTexts || e.changeTexts;
        let l = function() {};
        return i && ("input" == r.tagName.toLowerCase() ? n.defaultText = r.value : n.defaultText = r.innerHTML), n.loading = function(t) {
            return r.style.minWidth = r.offsetWidth + "px", UI.func.addClass(r, "loading"), r.disabled = !0, n.changeTexts && (t = t || n.loadingText, "input" == r.tagName.toLowerCase() ? r.value = t : r.innerHTML = t), n
        }, n.success = function(t) {
            return t = t || n.successText, setTimeout(function() {
                UI.func.addClass(r, "success"), UI.func.remClass(r, "loading"), r.style.minWidth = "", r.style.minWidth = null, n.changeTexts && ("input" == r.tagName.toLowerCase() ? r.value = t : r.innerHTML = t)
            }, 300), setTimeout(function() {
                UI.func.remClass(r, "success"), r.disabled = !1, n.changeTexts && ("input" == r.tagName.toLowerCase() ? r.value = n.defaultText : r.innerHTML = n.defaultText)
            }, 2e3), n
        }, n.error = function(t) {
            return t = t || n.errorText, setTimeout(function() {
                UI.func.addClass(r, "error"), UI.func.remClass(r, "loading"), n.changeTexts && ("input" == r.tagName.toLowerCase() ? r.value = t : r.innerHTML = t)
            }, 300), setTimeout(function() {
                UI.func.remClass(r, "error"), r.disabled = !1, r.style.minWidth = "", r.style.minWidth = null, n.changeTexts && ("input" == r.tagName.toLowerCase() ? r.value = n.defaultText : r.innerHTML = n.defaultText)
            }, 2e3), n
        }, n.attr = function(t, e) {
            return void 0 !== e ? (r.setAttribute(t, e), n) : r.getAttribute(t)
        }, n.click = function(t) {
            return void 0 === t ? r.click() : l = t, n
        }, UI.func.bind(o, "click", function(t) {
            return t = t || event, this.disabled || (i || (r = this, "input" == r.tagName.toLowerCase() ? n.defaultText = r.value : n.defaultText = r.innerHTML), n.changeAtOnce && n.loading(), l.call(this, n, t)), n
        }), n
    }
}), window.UI.extend({
    qrscan: function(t) {
        function e() {
            return this
        }
        var n, o = t.scan || function() {},
            i = document.createElement("div"),
            t = document.createElement("div"),
            r = document.createElement("div"),
            a = document.createElement("video"),
            s = document.createElement("canvas"),
            l = s.getContext("2d"),
            c = !1,
            u = !0;

        function d(t, e, n) {
            l.beginPath(), l.moveTo(t.x, t.y), l.lineTo(e.x, e.y), l.lineWidth = 4, l.strokeStyle = n, l.stroke()
        }

        function f() {
            var t;
            a.readyState === a.HAVE_ENOUGH_DATA && (s.hidden = !1, s.height = a.videoHeight, s.width = a.videoWidth, s.clientWidth > window.innerWidth && c ? (UI.func.remClass(i, "maxvertical"), c = !1) : s.clientHeight > window.innerHeight && !c && (c = !0, UI.func.addClass(i, "maxvertical")), l.drawImage(a, 0, 0, s.width, s.height), t = l.getImageData(0, 0, s.width, s.height), (t = jsQR(t.data, t.width, t.height, {
                inversionAttempts: "dontInvert"
            })) && (d(t.location.topLeftCorner, t.location.topRightCorner, "#FF3B58"), d(t.location.topRightCorner, t.location.bottomRightCorner, "#FF3B58"), d(t.location.bottomRightCorner, t.location.bottomLeftCorner, "#FF3B58"), d(t.location.bottomLeftCorner, t.location.topLeftCorner, "#FF3B58"), o.call(e, t.data))), u && requestAnimationFrame(f)
        }
        return i.setAttribute("class", "scan-qr-outer"), r.setAttribute("class", "scan-qr-loading"), t.setAttribute("class", "ico popup-close hoverhighlighting"), i.appendChild(s), i.appendChild(r), r.innerHTML = "Unable to access video stream<br>Allow access to the camera if you have one", i.appendChild(t), document.body.appendChild(i), e.scan = function(t) {
            return o = t, e
        }, e.close = function() {
            u = !1, n && n.stop(), UI.func.addClass(i, "hide"), setTimeout(function() {
                i.remove()
            }, 300)
        }, t.onclick = function() {
            e.close()
        }, navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            }
        }).then(function(t) {
            a.srcObject = t, n = t.getTracks()[0], a.setAttribute("playsinline", !0), r.innerHTML = "Loading", a.play(), r.hidden = !0, requestAnimationFrame(f)
        }), e
    }
}), window.UI.extend({
    popup: function(t) {
        function n() {
            return n
        }
        var e = UI.func;
        n.container = null, n.id = t.id || "", n.title = t.title || "", n.html = t.html || "", n.class = t.class || "", n.bgclose = !1 !== t.bgclose || t.bgclose, n.append = !1 !== t.append || t.append, n.bodyscroll = !1 !== t.bodyscroll || t.bodyscroll, n.marginScroll = !1 !== t.marginScroll || t.marginScroll, n.allowSubmit = !1 !== t.allowSubmit || t.allowSubmit, n.afterRender = t.afterRender || function() {}, n.afterClose = t.afterClose || function() {};
        let o = t.onSubmit || function() {};
        var i = void 0 !== t.submitButton ? t.submitButton : ".submit";
        let r = null;
        if (n.show = function() {}, n.submit = function() {}, n.close = function() {}, 1 == n.append) {
            let t = document.createElement("div");
            t.setAttribute("id", n.id), t.setAttribute("class", "popup" + (n.class ? " " + n.class : "")), t.innerHTML = '<div class="popup-bg"></div><div class="popup-wrap">' + n.html + "</div>", n.container = t
        } else {
            if ("" == n.id) return !1;
            n.container = document.getElementById(n.id)
        }
        n.show = function() {
            if (!1 === n) return !1;
            1 == n.append && document.body.appendChild(n.container);
            var t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
            document.body;
            return document.documentElement.offsetHeight < t ? (document.body.style.overflow = "hidden", document.body.style.marginRight = e.getScrollWidth() + "px", n.marginScroll && (n.container.style.paddingRight = e.getScrollWidth() + "px")) : n.bodyscroll = !1, setTimeout(function() {
                e.addClass(n.container, "active")
            }, 2), r = i ? n.container.querySelector(i) : null, e.on(n.container, "click", ".popup-close-btn, .popup-close, .popup-bg", function() {
                (!e.hasClass(this, "popup-bg") || e.hasClass(this, "popup-bg") && n.bgclose) && n.close()
            }), i && e.on(n.container, "click", i, function(t) {
                n.submit(this, t)
            }), n.afterRender.call(n), n
        }, n.submit = function(t, e) {
            !0 == (!1 !== o.call(t, n, e)) && n.close()
        }, n.close = function() {
            !0 == (!1 !== n.afterClose()) && (e.remClass(n.container, "active"), e.unbind(document, "keydown", a), setTimeout(function() {
                n.bodyscroll && (document.body.style.overflow = "", document.body.style.marginRight = "", document.body.style.overflow = null, document.body.style.marginRight = null), 1 == n.append && n.container.remove()
            }, 200))
        };
        var a = function(t) {
            13 == (t = t || event).keyCode && n.allowSubmit ? (t.preventDefault(), n.submit(r)) : 27 == t.keyCode && (t.preventDefault(), n.close())
        };
        return e.bind(document, "keydown", a), n
    },
    confirm: function(t, e, n) {
        var o = n && n.cancel ? n.cancel : "Cancel",
            n = n && n.ok ? n.ok : "Ok";
        return UI.popup({
                html: '<div class="popup-content popup-confirm fix-width"> \t\t\t\t\t\t<p>' + t + '</p>\t\t\t\t\t\t<div class="popup-ctrl"><button type="button" class="btn cancel popup-close-btn">' + o + '</button>\t\t\t\t\t\t<button type="button" class="btn submit popup-close-btn">' + n + "</button></div>\t\t\t\t\t</div>",
                onSubmit: e
            }).show(),
            function() {
                return this
            }
    },
    choice: function(t, r, e) {
        t = {
            html: '<div class="popup-content popup-confirm fix-width"> \t\t\t\t\t\t<p>' + t + '</p>\t\t\t\t\t\t<span id="popup_choice_btns"></span>\t\t\t\t\t\t<button type="button" class="btn cancel popup-close-btn">' + ((e = e || {}) && e.cancel ? e.cancel : "Cancel") + "</button>\t\t\t\t\t</div>",
            afterRender: function() {
                var e, n = this;
                let o = UI.func,
                    i = o.id("popup_choice_btns");
                for (e in r) {
                    let t = document.createElement("button");
                    t.setAttribute("type", "button"), t.setAttribute("class", "btn" + (r[e].class ? " " + r[e].class : "")), t.innerHTML = r[e].btn, o.bind(t, "click", function() {
                        r[e].func.call(n)
                    }), i.appendChild(t)
                }
            }
        };
        return UI.popup(Object.assign(t, e)).show(), self
    },
    alert: function(t) {
        return UI.popup({
                html: '<div class="popup-content popup-alert fix-width"> \t\t\t\t\t\t<p>' + t + '</p>\t\t\t\t\t\t<span class="btn submit popup-close-btn">Ok</span>\t\t\t\t\t</div>'
            }).show(),
            function() {
                return this
            }
    }
}), window.UI.extend({
    reminder: function(e) {
        function n() {
            return n
        }
        var t = UI.func;
        if (n.container = null, n.id = e.id || "", n.title = e.title || "", n.html = e.html || "", n.bgclose = !1 !== e.bgclose || e.bgclose, n.append = !1 !== e.append || e.append, n.bodyscroll = !1 !== e.bodyscroll || e.bodyscroll, n.closebtn = !0 === e.closebtn && e.closebtn, n.afterRender = e.afterRender || function() {}, n.onSubmit = e.onSubmit || function() {}, n.afterClose = e.afterClose || function() {}, n.show = function() {}, n.submit = function() {}, n.close = function() {}, 1 == n.append) {
            let t = document.createElement("div");
            e = n.closebtn ? '<div class="reminder-close close"></div>' : "";
            t.setAttribute("id", n.id), t.setAttribute("class", "reminder"), t.innerHTML = '<div class="reminder-bg"></div><div class="reminder-wrap">' + n.html + "</div>" + e, n.container = t
        } else {
            if ("" == n.id) return !1;
            n.container = document.getElementById(n.id)
        }
        return n.show = function() {
            return !1 !== n && (1 == n.append && document.body.appendChild(n.container), setTimeout(function() {
                t.addClass(n.container, "active")
            }, 2), t.on(n.container, "click", ".close", function() {
                n.close()
            }), t.on(n.container, "click", ".submit", function() {
                n.onSubmit(this)
            }), n.afterRender.call(n), n)
        }, n.submit = function() {
            !0 == (!1 !== n.onSubmit()) && n.close()
        }, n.close = function() {
            !0 == (!1 !== n.afterClose()) && (t.remClass(n.container, "active"), setTimeout(function() {
                1 == n.append && n.container.remove()
            }, 200))
        }, n
    }
}), window.UI.extend({
    radio: function(t) {
        function n() {
            return this
        }
        var e = UI.func;
        n.inputs = document.getElementsByName(t), n.value = "", n.set = function(t) {}, n.val = function(t) {}, n.change = function(t) {};
        var o = function() {};
        if (n.set = function(e) {
                for (let t = 0; t < n.inputs.length; t++) n.inputs[t].value == e && (n.inputs[t].checked = !0, n.value = e);
                return o.call(n), n.value
            }, n.val = function(e) {
                if (void 0 === e) {
                    n.value = "";
                    for (let t = 0; t < n.inputs.length; t++) "radio" === n.inputs[t].type && n.inputs[t].checked && (n.value = n.inputs[t].value);
                    return n.value
                }
                for (let t = 0; t < n.inputs.length; t++) n.inputs[t].value == e && (n.inputs[t].checked = !0, n.value = e);
                o.call(n)
            }, n.change = function(t) {
                return o = t, !0
            }, e.bind(n.inputs, "click", function(t) {
                n.value = this.value, o.call(n, this)
            }), n.value = n.val(), n.inputs.length) return n
    }
}), APP = {
    apiAbortController: new AbortController,
    abortApi: function() {
        APP.apiAbortController.abort()
    },
    api: function(t, e, n, o, i) {
        e = e || {};
        // var r = UI.func.toFormData(e);
        var r = e;
        i && i instanceof AbortController || (i = n && n instanceof AbortController ? n : APP.apiAbortController);
        let a = !0,
            s = !1,
            l = !1,
            c = new Promise(function(e, n) {
                var formBody = [];
                for (var property in r) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(r[property]);
                formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                fetch("http://localhost:831/" + t, {
                    method: "POST",
                    body: formBody,
                    cache: 'no-cache',
                    signal: i.signal,
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                }).then(function(t) {
                    return 200 !== t.status ? (s = !0, a = !1, void n({
                        code: 1,
                        msg: "API Error",
                        data: null
                    })) : void t.json().then(function(t) {
                        0 == t.code ? (l = !0, a = !1, e(t)) : (s = !0, a = !1, n(t))
                    })
                }).catch(function(t) {
                    s = !0, a = !1, t && "AbortError" == t.name ? n({
                        code: 2,
                        msg: "Abort query",
                        data: null
                    }) : n({
                        code: 1,
                        msg: "API Error",
                        data: null
                    })
                })
            });
        return n && "function" == typeof n && c.then(n), o && "function" == typeof o && c.catch(o), c.isFulfilled = function() {
            return l
        }, c.isPending = function() {
            return a
        }, c.isRejected = function() {
            return s
        }, c
    },
    WSClient: function(t) {
        var e = this;
        e.tid = 0, e.tvs = 0, e.url = t, e.target = document.createElement("div"), e.lastTime = new Date, e.isInit = !1, e.isOpen = !1, e.isProblem = !1, e.attempts = 10, e.ws = void 0
    },
    signOut: function() {
        APP.api("userSignOut").then(function() {
            window.location.reload()
        }).catch(function() {})
    },
    setCookie: function(t, e, n) {
        let o = (n = n || {}).expires;
        if ("number" == typeof o && o) {
            let t = new Date;
            t.setTime(t.getTime() + 1e3 * o), o = n.expires = t
        }
        o && o.toUTCString && (n.expires = o.toUTCString());
        let i = t + "=" + (e = encodeURIComponent(e));
        for (var r in n) {
            i += "; " + r;
            r = n[r];
            !0 !== r && (i += "=" + r)
        }
        document.cookie = i
    },
    getCookie: function(t) {
        t = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    },
    getCoinColor: function(t) {
        var e = {
            ada: "#ffffff",
            adabnb: "#ffffff",
            adabsc: "#ffffff",
            atom: "#e6e6e6",
            btc: "#f7931a",
            btcbnb: "#f7931a",
            btcbsc: "#f7931a",
            btcln: "#9157ff",
            etc: "#8cbd9b",
            eth: "#ffffff",
            ethbnb: "#ffffff",
            ethbsc: "#ffffff",
            ltc: "#497ed1",
            zec: "#ffbf20",
            bat: "#ff0649",
            batbsc: "#ff0649",
            bch: "#85c459",
            bnb: "#ffcc4f",
            bsc: "#ffcc4f",
            busd: "#ffcc4f",
            busdbsc: "#ffcc4f",
            busdeth: "#ffcc4f",
            bsv: "#eab300",
            btg: "#ffd827",
            btm: "#ffffff",
            btt: "#ffffff",
            cake: "#43d2da",
            daieth: "#f4b731",
            daibsc: "#f4b731",
            dash: "#008ce3",
            doge: "#ba9f33",
            drgn: "#28a2ea",
            eos: "#8997d8",
            eurs: "#15bcff",
            gnt: "#06a8c6",
            link: "#3f6ff3",
            lsk: "#2979d8",
            matic: "#8247e5",
            maticeth: "#8247e5",
            mkr: "#10bc99",
            neo: "#92d71b",
            omg: "#235eff",
            pax: "#c7e432",
            qtum: "#41abe0",
            shib: "#f4a816",
            shibbsc: "#f4a816",
            trx: "#ff2e4b",
            tube: "#86af49",
            tusd: "#5dc9bc",
            twt: "#478dd7",
            usdc: "#2775ca",
            usdcbsc: "#2775ca",
            usdctrc: "#2775ca",
            usdp: "#c7e432",
            usdt: "#53ae94",
            usdterc: "#53ae94",
            usdttrc: "#53ae94",
            usdtbnb: "#53ae94",
            usdtbsc: "#53ae94",
            ustbsc: "#5d9cff",
            waves: "#076dd4",
            xem: "#00c4b3",
            xlm: "#ffffff",
            xmr: "#e06b1a",
            xrp: "#0c89ca",
            xtz: "#4284ff",
            zrx: "#ffffff"
        };
        return e[t = t.toLowerCase()] || null
    },
    highlightingColor: function(t, e) {
        let n = "#f7931a";
        t = t.toLowerCase(), e = e.toLowerCase();
        let o = ["eth", "ethbnb", "zrx", "btm", "xlm", "ada", "adabnb", "adabsc", "btt", "atom"]; - 1 < o.indexOf(e) ? o.indexOf(t) < 0 && (t = this.getCoinColor(t), n = t || n) : (i = this.getCoinColor(e), n = i || n);
        var i = "a, .hl,.hoverhl:hover,.linkhl a:hover {color:" + n + ";} .borderhl{border-color:" + n + ";} .bghl,.buttonhl button:hover{background-color:" + n + ";}";
        document.getElementById("highlighting_style").innerHTML = i
    },
    formatTime: function(t) {
        var e = ~~(t / 3600);
        return (e ? UI.func.zerosNum(e) + ":" : "") + UI.func.zerosNum(~~(t / 60) - 60 * e) + ":" + UI.func.zerosNum(t % 60)
    },
    timeToText: function(t) {
        var e = ~~(t / 60) - 60 * ~~(t / 3600);
        return e ? e + " min" : t % 60 + " sec"
    },
    GeeCaptcha: function(e, t) {
        function n() {
            return this
        }
        e = "string" == typeof e ? document.getElementById(e) : e;
        let o = void 0;
        var i = t && t.lang ? t.lang : document.documentElement.getAttribute("lang"),
            r = t && t.width ? t.width : "100%";
        let a = function() {},
            s = function() {};
        if (document.getElementById("geetest_script")) l();
        else {
            let t = document.createElement("script");
            t.type = "text/javascript", t.id = "geetest_script", t.src = "/assets/js/libs/gt.js", document.head.appendChild(t), t.onload = function() {
                l()
            }
        }

        function l() {
            APP.api("userCaptchaInit").then(function(t) {
                t = t.data, t = {
                    product: "embed",
                    lang: i,
                    width: r,
                    gt: t.gt,
                    challenge: t.challenge,
                    new_captcha: t.new_captcha,
                    offline: !t.success
                };
                initGeetest(t, function(t) {
                    o = t, o.appendTo(e), o.onSuccess(function() {
                        a.call()
                    }), o.onError(function() {
                        s.call()
                    })
                })
            }).catch(function(t) {})
        }
        return n.validate = function() {
            return o.getValidate()
        }, n.reset = function() {
            o.reset()
        }, n.onSuccess = function(t) {
            return a = t, n
        }, n.onError = function(t) {
            return s = t, n
        }, n
    },
    authInit: function(t, e, n, o) {
        let s = UI.func,
            i = "string" == typeof t ? document.getElementById(t) : t;
        i.querySelectorAll("#auth_nav > button");
        n = !!n;
        let l = {
            isInit: !1,
            captcha: {
                signin: APP.GeeCaptcha("signin_captcha"),
                signup: APP.GeeCaptcha("signup_captcha"),
                forgot: APP.GeeCaptcha("auth_reset_captcha")
            },
            form: {
                signin: document.getElementById("layout_signin"),
                signup: document.getElementById("layout_signup"),
                forgot: document.getElementById("layout_forgot")
            },
            btn: {
                signin: UI.button("auth_signin"),
                signup: UI.button("auth_signup"),
                forgot: UI.button("auth_reset_btn")
            },
            errors: {
                signin: {
                    email: !0,
                    pswd: !0,
                    captcha: !0
                },
                signup: {
                    email: !0,
                    pswd: !0,
                    repswd: !0,
                    captcha: !0
                },
                forgot: {
                    email: !0,
                    captcha: !0
                }
            },
            navs: i.querySelectorAll("#auth_nav > button"),
            changeLayout: function(t) {
                var e = s.id("layout_" + t);
                "forgot" != t && (s.remClass(this.navs, "active"), s.addClass("nav_" + t, "active")), s.remClass(i.querySelectorAll(".auth-layout"), "active"), s.addClass(e, "active"), s.id("auth_layouts").style.height = e.offsetHeight + "px"
            },
            resizeLayout: function(t) {
                t = s.id("layout_" + t);
                s.id("auth_layouts").style.height = t.offsetHeight + "px"
            },
            checkRequired: function(t) {
                let e = 0;
                if (!t || !this.errors[t]) return !1;
                for (var n in this.errors[t]) e |= this.errors[t][n];
                return e = !!e, this.btn[t].obj.disabled = e, !e
            },
            validate: function(t, e, n, o) {
                let i = !1,
                    r;
                var a = "string" == typeof t ? this.form[t] : t;
                switch (n = n || !1, o = o || !1, e) {
                    case "email":
                        r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, i = r.test(a.email.value), o || s.togClass(a.email, "error", !(i || "" == a.email.value && !n)), l.errors[t][e] = !i;
                        break;
                    case "pswd":
                        r = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d).*$/, i = r.test(a.pswd.value), o || s.togClass(a.pswd, "error", !(i || "" == a.pswd.value && !n)), l.errors[t][e] = !i, a.repswd && (dis = a.pswd.value == a.repswd.value, o || s.togClass(a.repswd, "error", !(dis || "" == a.repswd.value && !n)), l.errors[t].repswd = !dis);
                        break;
                    case "repswd":
                        i = a.pswd.value == a.repswd.value, o || s.togClass(a.repswd, "error", !(i || "" == a.repswd.value && !n)), l.errors[t][e] = !i
                }
                return l.isInit && this.resizeLayout(t), i
            }
        };
        l.captcha.signin.onSuccess(function() {
            l.errors.signin.captcha = !1, l.checkRequired("signin"), s.remClass("signin_captcha_error", "active")
        }), l.captcha.signup.onSuccess(function() {
            l.errors.signup.captcha = !1, l.checkRequired("signup"), s.remClass("signup_captcha_error", "active")
        }), l.captcha.forgot.onSuccess(function() {
            l.errors.forgot.captcha = !1, l.checkRequired("forgot"), s.remClass("auth_reset_captcha_error", "active")
        }), l.btn.signin.click(function(e, t) {
            t.preventDefault();
            let n = l.captcha.signin.validate() || {};
            n.email = l.form.signin.email.value, n.pswd = l.form.signin.pswd.value, s.remClass("auth_error", "active"), s.remClass("signin_captcha_error", "active"), APP.api("userSignIn", n).then(function() {
                e.success(), o ? window.location.href = o : window.location.reload()
            }).catch(function(t) {
                e.error(), l.captcha.signin.reset(), 606 == t.code ? s.addClass("signin_captcha_error", "active") : s.addClass("auth_error", "active"), l.errors.signin.captcha = !0, l.checkRequired("signin"), l.resizeLayout("signin")
            })
        }), l.btn.signup.click(function(e, t) {
            t.preventDefault();
            let n = l.captcha.signup.validate() || {};
            n.email = l.form.signup.email.value, n.pswd = l.form.signup.pswd.value, s.remClass("auth_signup_error", "active"), s.remClass("signup_captcha_error", "active"), APP.api("userSignUp", n).then(function(t) {
                e.success(), o ? window.location.href = o : window.location.reload()
            }).catch(function(t) {
                l.captcha.signup.reset(), e.error(), 606 == t.code ? s.addClass("signup_captcha_error", "active") : 701 == t.code && (s.addClass("auth_signup_error", "active"), s.id("auth_layouts").style.height = s.id("layout_signup").offsetHeight + "px"), l.errors.signup.captcha = !0, l.checkRequired("signup"), l.resizeLayout("signup")
            })
        }), l.btn.forgot.click(function(n, t) {
            t.preventDefault();
            let e = l.captcha.forgot.validate() || {};
            e.email = l.form.forgot.email.value, s.remClass("auth_reset_error", "active"), s.remClass("auth_reset_captcha_error", "active"), APP.api("userRecovery", e).then(function(t) {
                n.success();
                var e = s.id("auth_reset_success");
                s.addClass(e, "active"), s.addClass(e.previousElementSibling, "none"), s.addClass(e.previousElementSibling.previousElementSibling, "none"), s.addClass(l.btn.forgot.obj.parentNode, "none")
            }).catch(function(t) {
                l.captcha.forgot.reset(), n.error(), 606 == t.code ? s.addClass("auth_reset_captcha_error", "active") : s.addClass("auth_reset_error", "active"), l.errors.forgot.captcha = !0, l.checkRequired("forgot"), l.resizeLayout("forgot")
            })
        }), s.bind(l.form.forgot.getElementsByTagName("INPUT"), "change", function() {
            l.validate("forgot", this.name, !1), l.checkRequired("forgot")
        }), s.bind(l.form.signup.getElementsByTagName("INPUT"), "change", function() {
            l.validate("signup", this.name, !1), l.checkRequired("signup")
        }), s.bind(l.form.signin.getElementsByTagName("INPUT"), "change", function() {
            var t = !this.value;
            s.togClass(this, "error", t), l.errors.signin[this.name] = t, l.checkRequired("signin")
        }), s.bind(l.form.forgot.getElementsByTagName("INPUT"), "input", function() {
            l.validate("forgot", this.name, !1, !0), l.checkRequired("forgot")
        }), s.bind(l.form.signup.getElementsByTagName("INPUT"), "input", function() {
            s.remClass(this, "error")
        }), s.bind(l.form.signin.getElementsByTagName("INPUT"), "input", function() {
            s.remClass(this, "error")
        }), s.bind(document.querySelectorAll(".auth-nav-btn"), "click", function() {
            l.changeLayout(this.getAttribute("data-layout"))
        }), n || (l.changeLayout(e), setTimeout(function() {
            s.addClass("auth_layouts", "init")
        }, 10)), setTimeout(function() {
            l.isInit = !0
        }, 500), window.Auth = l
    },
    popupAuth: function(t) {
        let e = UI.func;
        if (t = t || "signin", e.id("layout_" + t)) return e.id("layout_" + t).scrollIntoView(), window.Auth.changeLayout(t), !1;
        UI.popup({
            html: document.getElementById("auth").innerHTML,
            afterRender: function() {
                APP.authInit(this.container, t)
            },
            onSubmit: function(t, e) {
                return !1
            }
        }).show()
    }
}, APP.WSClient.prototype.init = function(e) {
    var n = this;
    clearTimeout(n.tid);
    try {
        n.ws = new WebSocket(n.url), n.ws.onopen = function(t) {
            n.isOpen = !0, n.attempts = 10, n.lastTime = new Date, clearInterval(n.tid), n.tid = setInterval(function() {
                n.send("ping")
            }, 3e4), "function" == typeof e && e.call(n)
        }, n.ws.onmessage = function(t) {
            t = JSON.parse(t.data);
            n.lastTime = new Date, n.target.dispatchEvent(new CustomEvent("msg", {
                detail: t
            }))
        }, n.ws.onerror = function(t) {
            n.target.dispatchEvent(new CustomEvent("error", {
                msg: "Internal error",
                event: t
            }))
        }, n.ws.onclose = function(t) {
            n.isOpen = !1, n.reconnect(e, 5e3)
        }
    } catch (t) {
        n.target.dispatchEvent(new CustomEvent("error", {
            msg: t,
            event: null
        })), n.reconnect(e, 15e3)
    }
    n.isInit || (n.tvs = setInterval(function() {
        var t = (new Date).getTime() - n.lastTime.getTime();
        n.isProblem = !n.isOpen && 6e4 < t
    }, 1e3)), n.isInit = !0
}, APP.WSClient.prototype.reconnect = function(t, e) {
    var n = this;
    n.isOpen && n.ws.close(), clearInterval(n.tid), e ? setTimeout(function() {
        console.log("WebSocket reconnecting…"), n.init(t)
    }, e) : n.init(t)
}, APP.WSClient.prototype.send = function(t, e) {
    var n = {
        method: t,
        params: e,
        id: Date.now()
    };
    try {
        return this.ws.send(JSON.stringify(n)), !0
    } catch (t) {
        return !1
    }
}, APP.WSClient.prototype.subscribe = function(t) {
    return this.send("subscribe", t)
}, APP.WSClient.prototype.message = function(e, n) {
    var o = this;
    e = "string" == typeof e ? [e] : e, o.target.addEventListener("msg", function(t) {
        t = t.detail;
        0 <= e.indexOf(t.event) && n.call(o, t.result)
    })
}, APP.WSClient.prototype.error = function(e) {
    var n = this;
    n.target.addEventListener("error", function(t) {
        e.call(n, t)
    })
}, document.addEventListener("DOMContentLoaded", function() {
    let e = UI.func;
    var t = window.location.hostname.split(".");
    // "fixedfloat.com" != t[t.length - 2] + "." + t[t.length - 1] && (window.location.href = "https://fixedfloat.com");
    var n = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchstart" : "mousedown",
        o = document.getElementById("left_menu_wrap");

    function i() {
        var t = window.pageYOffset || document.documentElement.scrollTop;
        0 < t ? (e.remClass("header", "onbody"), e.remClass("header", "ontop")) : (t < 0 ? e.addClass("header", "onbody") : e.remClass("header", "onbody"), e.addClass("header", "ontop"))
    }
    i(), window.onscroll = function() {
        i()
    }, e.bind("left_menu_btn", "click", function() {
        e.hasClass(o, "active") ? (e.remClass(o, "active"), "touchstart" == n && (document.body.style.overflow = "auto")) : (e.addClass(o, "active"), e.remClass(o, "right-active"), "touchstart" == n && (document.body.style.overflow = "hidden"))
    }), e.bind(document.querySelectorAll(".shadow-body, .loc .ui-select, .menu-focus-btn"), n, function(t) {
        e.remClass(o, "active"), "touchstart" == n && (document.body.style.overflow = "auto")
    }), e.bind("header_signin", "click", function() {
        APP.popupAuth("signin")
    }), e.bind("header_signup", "click", function() {
        APP.popupAuth("signup")
    }), !APP.getCookie("allowCookie") && e.id("cookies_accept") && UI.reminder({
        html: e.id("cookies_accept").innerHTML,
        closebtn: !1,
        onSubmit: function() {
            APP.setCookie("allowCookie", 1, {
                expires: 2592e3
            })
        }
    }).show()
});