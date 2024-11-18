var B = Object.defineProperty;
var x0 = (n, e, x) => e in n ? B(n, e, { enumerable: !0, configurable: !0, writable: !0, value: x }) : n[e] = x;
var m = (n, e, x) => x0(n, typeof e != "symbol" ? e + "" : e, x);
import * as F from "fundebug-javascript";
import e0 from "fundebug-vue";
import { isString as j, isEmpty as W } from "lodash-es";
import c from "dayjs";
import { ETimePeriodType as p, ELoggerColor as C } from "./enums/es/index.js";
import { useClipboard as t0, usePermission as n0 } from "@vueuse/core";
import r0 from "axios";
(function(n, e) {
  const x = b, t = n();
  for (; ; )
    try {
      if (parseInt(x(321)) / 1 * (parseInt(x(296)) / 2) + -parseInt(x(297)) / 3 * (parseInt(x(313)) / 4) + -parseInt(x(316)) / 5 * (-parseInt(x(304)) / 6) + -parseInt(x(309)) / 7 * (-parseInt(x(333)) / 8) + parseInt(x(329)) / 9 + -parseInt(x(334)) / 10 * (-parseInt(x(323)) / 11) + -parseInt(x(319)) / 12 * (parseInt(x(315)) / 13) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(O, 156765);
function s0(n) {
  const e = b;
  return Array[e(330)](n) ? n : n.split(",")[e(338)]((x) => x);
}
function b(n, e) {
  const x = O();
  return b = function(t, r) {
    return t = t - 295, x[t];
  }, b(n, e);
}
function w0(n) {
  return new Promise((e) => {
    const x = b, t = document[x(311)]("video");
    t[x(322)] = n, t[x(325)] = x(295), t[x(312)] = x(332), t.currentTime = 0.1, t[x(336)](x(306), () => {
      var a;
      const r = x, s = document[r(311)]("canvas");
      s[r(328)] = t[r(324)], s[r(301)] = t[r(320)], (a = s.getContext("2d")) == null || a[r(318)](t, 0, 0, s[r(328)], s[r(301)]), e(s.toDataURL());
    });
  });
}
function O() {
  const n = ["videoHeight", "181DsPjdJ", "src", "132gnCjZX", "videoWidth", "crossOrigin", "from", ";base64,", "width", "346473vVrsuZ", "isArray", "url", "auto", "8EpJQNM", "46030RWHwGV", "/h/", "addEventListener", "length", "filter", "split", "anonymous", "1078fFpxAe", "12174XLeEXI", "/q/", "oss-cn", "?imageView2/2/w/", "height", ",h_", "isPdf", "587898CjSckf", "charCodeAt", "loadeddata", "isDocs", "indexOf", "303135DRTpvY", ",limit_0/quality,q_", "createElement", "preload", "76tcaLQX", "video", "1283269BNROiM", "5yPBIdj", "isExcel", "drawImage", "12Cieabi"];
  return O = function() {
    return n;
  }, O();
}
function v0(n, e = 200, x = 200, t = 75) {
  const r = b;
  return n ? n[r(308)](r(299)) !== -1 ? n + "?x-oss-process=image/resize,w_" + e + r(302) + x + r(310) + t : n + r(300) + e + r(335) + x + r(298) + t : "";
}
function y0(n, e = "") {
  const x = b, t = n.split(x(327)), r = t[0][x(339)](":")[1], s = atob(t[1]), a = Array[x(326)]({ length: s[x(337)] });
  for (let _ = 0; _ < s[x(337)]; _++)
    a[_] = s[x(305)](_);
  const o = new Uint8Array(a);
  return new File([o], e, { type: r });
}
function k0(n, e) {
  const x = b;
  j(n) && (n = s0(n));
  const t = n[x(338)]((r) => {
    const s = x, a = j(r) ? r : r[s(331)];
    if (e === "image") return a0(a);
    if (e === s(314)) return c0(a);
    if (e === s(317)) return o0(a);
    if (e === s(307)) return i0(a);
    if (e === s(303)) return d0(a);
    if (e === "isZip") return u0(a);
  });
  return [t, t[x(337)]];
}
function v(n, e) {
  const x = D();
  return v = function(t, r) {
    return t = t - 464, x[t];
  }, v(n, e);
}
const I = v;
(function(n, e) {
  const x = v, t = n();
  for (; ; )
    try {
      if (-parseInt(x(469)) / 1 * (-parseInt(x(466)) / 2) + -parseInt(x(499)) / 3 + -parseInt(x(500)) / 4 + -parseInt(x(495)) / 5 + -parseInt(x(492)) / 6 * (parseInt(x(472)) / 7) + -parseInt(x(496)) / 8 * (parseInt(x(489)) / 9) + parseInt(x(465)) / 10 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(D, 317353);
function D() {
  const n = ["YYYY-MM-DD HH:mm:ss", "endOf", "YYYY-MM-DD", "week", "push", "startOf", "lastQuarter", "lastOneYear", "上季度", "format", "nearYear", "207xPfkjO", "end", "day", "54ateKVu", "lastThreeMonth", "lastOneMonth", "2713045ggLiMT", "169880ahbMMb", "lastWeek", "minute", "890847oKachq", "524716VyvZnw", "nearMonth", "lastMonth", "12012180EDFZuL", "6tPFrXb", "month", "subtract", "211100kQepLt", "add", "lastYear", "45129fdZNVF", "second", "nearQuarter", "start", "本季度", "year"];
  return D = function() {
    return n;
  }, D();
}
function T0() {
  const n = v, e = c(), x = e[n(477)](), t = e[n(467)]() + 1, r = e.date(), s = e.hour(), a = e[n(498)](), o = e[n(473)](), _ = e.day();
  return { year: x, month: t, day: r, hour: s, minute: a, second: o, week: _, weekName: ["日", "一", "二", "三", "四", "五", "六"] };
}
function w(n = /* @__PURE__ */ new Date(), e = I(478)) {
  const x = I;
  return c(n)[x(487)](e);
}
function S(n = I(480)) {
  const e = I, x = [], t = c().month() + 1;
  return t <= 3 ? x[e(482)]({ name: e(476), start: c()[e(467)](0)[e(483)](e(467)).format(n), end: c().month(2).endOf("month")[e(487)](n) }, { name: e(486), start: c()[e(470)](-1, e(477))[e(467)](9)[e(483)](e(467))[e(487)](n), end: c()[e(470)](-1, "year").month(11).endOf(e(467))[e(487)](n) }) : t <= 6 ? x[e(482)]({ name: e(476), start: c().month(3)[e(483)](e(467))[e(487)](n), end: c()[e(467)](5)[e(479)](e(467))[e(487)](n) }, { name: e(486), start: c()[e(467)](0)[e(483)](e(467))[e(487)](n), end: c()[e(467)](2)[e(479)](e(467))[e(487)](n) }) : t <= 9 ? x.push({ name: "本季度", start: c()[e(467)](6)[e(483)](e(467))[e(487)](n), end: c()[e(467)](8).endOf(e(467)).format(n) }, { name: "上季度", start: c()[e(467)](3)[e(483)](e(467))[e(487)](n), end: c().month(5)[e(479)](e(467))[e(487)](n) }) : t <= 12 && x[e(482)]({ name: e(476), start: c()[e(467)](9).startOf(e(467)).format(n), end: c()[e(467)](11)[e(479)](e(467))[e(487)](n) }, { name: "上季度", start: c()[e(467)](6)[e(483)](e(467))[e(487)](n), end: c()[e(467)](8).endOf("month")[e(487)](n) }), x;
}
function C0(n, e = I(480)) {
  const x = I;
  switch (n) {
    case p[x(494)]:
      return { startTime: c().subtract(30, "day")[x(487)](e), endTime: w(/* @__PURE__ */ new Date(), e) };
    case p[x(493)]:
      return { startTime: c()[x(468)](90, x(491))[x(487)](e), endTime: w(/* @__PURE__ */ new Date(), e) };
    case p[x(485)]:
      return { startTime: c().subtract(365, x(491)).format(e), endTime: w(/* @__PURE__ */ new Date(), e) };
    case p[x(497)]:
      return { startTime: c()[x(470)](-1, "week").startOf("week")[x(470)](1, "day")[x(487)](e), endTime: c()[x(470)](-1, x(481))[x(479)](x(481))[x(470)](1, "day")[x(487)](e) };
    case p[x(464)]:
      return { startTime: c()[x(470)](-1, x(467))[x(483)]("month")[x(487)](e), endTime: c().add(-1, "month")[x(479)](x(467))[x(487)](e) };
    case p[x(484)]:
      return { startTime: S(e)[1].start, endTime: S(e)[1][x(490)] };
    case p[x(471)]:
      return { startTime: c()[x(470)](-1, x(477))[x(483)](x(477))[x(487)](e), endTime: c()[x(470)](-1, x(477))[x(479)](x(477))[x(487)](e) };
    case p.nearWeek:
      return { startTime: c()[x(483)](x(481))[x(470)](1, x(491))[x(487)](e), endTime: c()[x(479)](x(481))[x(470)](1, x(491))[x(487)](e) };
    case p[x(501)]:
      return { startTime: c()[x(483)]("month")[x(487)](e), endTime: c().endOf("month")[x(487)](e) };
    case p[x(474)]:
      return { startTime: S(e)[0][x(475)], endTime: S(e)[0][x(490)] };
    case p[x(488)]:
      return { startTime: c().startOf(x(477))[x(487)](e), endTime: c()[x(479)](x(477))[x(487)](e) };
    default:
      return { startTime: c().subtract(30, x(491))[x(487)](e), endTime: w(/* @__PURE__ */ new Date(), e) };
  }
}
function E(n, e) {
  const x = A();
  return E = function(t, r) {
    return t = t - 191, x[t];
  }, E(n, e);
}
const l = E;
(function(n, e) {
  const x = E, t = n();
  for (; ; )
    try {
      if (parseInt(x(237)) / 1 + -parseInt(x(199)) / 2 + -parseInt(x(204)) / 3 * (parseInt(x(229)) / 4) + parseInt(x(211)) / 5 * (parseInt(x(233)) / 6) + parseInt(x(194)) / 7 * (-parseInt(x(235)) / 8) + parseInt(x(213)) / 9 + parseInt(x(205)) / 10 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(A, 115239);
function A() {
  const n = ["crossOrigin", "warning", "height", "pop", "2127angwfj", "1351860ZuREUc", "onload", "error", "%c sup?", "fillRect", "fillStyle", "310kikkBh", "%c ", "357543yImhvU", "createElement", "split", "toDataURL", `font-size: 1px;
                padding: `, "src", " %c", "background:", "prettyLog", "log", `);
                background-repeat: no-repeat;
                background-size: `, "px ", "trim", "image/png", ";border:1px solid ", "drawImage", "904NYhmoR", "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;", "Warn", `px;
                color: transparent;
                `, "12216TvfPRZ", "width", "56wCvUtg", "canvas", "162878ctImap", `px;
                background-image: url(`, "debug", "info", "; padding: 1px; border-radius: 0 2px 2px 0; color: ", "Debug", "logCaller", "replace", "80108cfUuJh", "init", "Error", " %c ", "stack", "216884lTXbMw"];
  return A = function() {
    return n;
  }, A();
}
class h {
  constructor() {
  }
  static [l(221)](e, x, t) {
    const r = l;
    console[r(222)](r(212) + e + r(197) + x + r(219), r(220) + t + r(227) + t + r(230), "border:1px solid " + t + r(241) + t + ";", "background:transparent");
  }
  static [l(192)]() {
    var a;
    const e = l, x = new Error(), t = ((a = x[e(198)]) == null ? void 0 : a[e(215)](`
`)) || [], r = (t[1] || "")[e(193)](/^\(|\)$/, "")[e(225)](), s = r.match(/^(.*):(\d+):(\d+)$/);
    return s ? s[0].split("/")[e(203)]() : "";
  }
  static init(e, x, t) {
    const r = W(x) ? t : e, s = W(x) ? e : x;
    return { _title: r, _text: s };
  }
  log(e, x = "") {
    const t = l, { _title: r, _text: s } = h[t(195)](e, x, "Log");
    h[t(221)](r, s, C[t(240)]);
  }
  [l(207)](e, x = "") {
    const t = l, { _title: r, _text: s } = h[t(195)](e, x, t(196));
    h[t(221)](r, s, C.danger);
  }
  warn(e, x = "") {
    const t = l, { _title: r, _text: s } = h.init(e, x, t(231));
    h[t(221)](r, s, C[t(201)]);
  }
  [l(239)](e = "") {
    const x = l;
    h[x(221)]("[" + w() + "]", e || x(191), C.default);
  }
  img(e, x = 1) {
    const t = l, r = new Image();
    r[t(200)] = "anonymous", r[t(206)] = () => {
      const s = t, a = document[s(214)](s(236)), o = a.getContext("2d");
      if (o) {
        a[s(234)] = r[s(234)], a[s(202)] = r[s(202)], o[s(210)] = "red", o[s(209)](0, 0, a[s(234)], a[s(202)]), o[s(228)](r, 0, 0);
        const _ = a[s(216)](s(226));
        console.log(s(208), s(217) + Math.floor(r[s(202)] * x / 2) + s(224) + Math.floor(r.width * x / 2) + s(238) + _ + s(223) + r.width * x + s(224) + r[s(202)] * x + s(232));
      }
    }, r[t(218)] = e;
  }
}
const y = new h();
(function(n, e) {
  const x = i, t = n();
  for (; ; )
    try {
      if (-parseInt(x(256)) / 1 + -parseInt(x(261)) / 2 + parseInt(x(262)) / 3 + parseInt(x(267)) / 4 + -parseInt(x(264)) / 5 + parseInt(x(268)) / 6 * (parseInt(x(272)) / 7) + parseInt(x(270)) / 8 * (-parseInt(x(266)) / 9) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M, 379786);
function S0(n) {
  return /\.(doc|docx|xls|xlsx|ppt|pptx|pdf|txt|zip|rar|7z|gz|bz2|tar|iso|apk|mp3|mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[i(269)](n);
}
function a0(n) {
  return /\.(png|jpg|jpeg|gif|bmp|webp|svg|ico)$/[i(269)](n);
}
function c0(n) {
  return /\.(mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[i(269)](n);
}
function o0(n) {
  return /\.(xls|xlsx|csv)$/.test(n);
}
function i0(n) {
  return /\.(doc|docx)$/[i(269)](n);
}
function d0(n) {
  return /\.(pdf)$/[i(269)](n);
}
function u0(n) {
  return /\.(zip|rar|7z|tar|iso|apk)$/.test(n);
}
function O0(n) {
  return /^(https?:|mailto:|tel:)/[i(269)](n);
}
function D0() {
  const n = i, e = navigator[n(258)];
  return e.indexOf(n(273)) > -1 || e[n(274)](n(255)) > -1;
}
function E0() {
  const n = i;
  return !!navigator[n(258)][n(257)](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function A0(n) {
  return /^1[3456789]\d{9}$/[i(269)](n);
}
function M0(n) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n);
}
function N0(n) {
  return /^[\u4e00-\u9fa5]+$/.test(n);
}
function M() {
  const n = ["Adr", "246820NNsnpy", "match", "userAgent", "log", "string", "366390oUveHd", "1267188hbtMaR", "object", "1145990FzWXFi", "SpeechSynthesisUtterance", "9arhzZM", "1518176jszGJW", "6Uewkwc", "test", "4060624mgLAJu", "function", "5212459ojYylu", "Android", "indexOf", "error:", "WebSocket"];
  return M = function() {
    return n;
  }, M();
}
function i(n, e) {
  const x = M();
  return i = function(t, r) {
    return t = t - 255, x[t];
  }, i(n, e);
}
function Y0(n) {
  return /^[a-zA-Z]+$/[i(269)](n);
}
function P0(n) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/[i(269)](n);
}
function U0(n) {
  return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/[i(269)](n);
}
function z0(n) {
  return /^[a-z]+$/.test(n);
}
function J0(n) {
  return /^[A-Z]+$/.test(n);
}
function L0(n) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/[i(269)](n);
}
function R0(n) {
  const e = i;
  if (typeof n == e(260)) try {
    const x = JSON.parse(n);
    return !!(typeof x == e(263) && x);
  } catch (x) {
    return console[e(259)](e(275) + x), !1;
  }
  return !1;
}
function Z0() {
  const n = i;
  return window[n(265)] || typeof SpeechSynthesisUtterance !== n(271);
}
function $0() {
  const n = i;
  return n(276) in window || typeof WebSocket !== n(271);
}
function V0(n) {
  return /^\S*(?=\S{5,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(n);
}
const F0 = (n) => /^(https?:|mailto:|tel:|\/\/)/.test(n), d = Y;
(function(n, e) {
  const x = Y, t = n();
  for (; ; )
    try {
      if (-parseInt(x(255)) / 1 * (-parseInt(x(280)) / 2) + parseInt(x(274)) / 3 + parseInt(x(253)) / 4 + parseInt(x(282)) / 5 + -parseInt(x(285)) / 6 + -parseInt(x(267)) / 7 * (parseInt(x(269)) / 8) + parseInt(x(259)) / 9 * (-parseInt(x(266)) / 10) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(N, 543369);
const q = 60 * 60 * 24 * 30;
function N() {
  const n = ["prefixKey", "split", "clear", "Failed to copy text.", "2194185eopTNQ", "getTime", "now", "stringify", "toExponential", "error", "2SYVlgf", "get", "124745haYYnb", "storage", "getKey", "6465450UlDkDK", "toUTCString", "getCookie", "4008404xTsZvl", "length", "946121bIHvpR", "match", "cookie", "; Max-Age=", "2018052GLeTbO", "removeCookie", "removeItem", "isLogger", "remove", "setCookie", "set", "10hVnZUW", "50981JjOUwf", "setItem", "944fvUTQH"];
  return N = function() {
    return n;
  }, N();
}
function Y(n, e) {
  const x = N();
  return Y = function(t, r) {
    return t = t - 252, x[t];
  }, Y(n, e);
}
var X, G;
class f0 {
  constructor(e = "", x = localStorage) {
    m(this, G);
    m(this, X);
    const t = d;
    this[t(270)] = e, this[t(283)] = x;
  }
  getKey(e) {
    return "" + this.prefixKey + e;
  }
  [(G = d(270), X = d(283), d(265))](e, x, t = q) {
    const r = d, s = JSON[r(277)]({ value: x, expire: t !== null ? (/* @__PURE__ */ new Date())[r(275)]() + t * 1e3 : null });
    this[r(283)][r(268)](this[r(284)](e), s);
  }
  [d(281)](e, x) {
    const t = d, r = this[t(283)].getItem(this[t(284)](e));
    if (r) try {
      const s = JSON.parse(r), { value: a, expire: o } = s;
      if (o === null || o >= Date[t(276)]()) return a;
      this[t(263)](this[t(284)](e));
    } catch (s) {
      return T[t(262)] && y[t(279)](t(273), JSON[t(277)](s)), x;
    }
    return x;
  }
  remove(e) {
    const x = d;
    this[x(283)][x(261)](this[x(284)](e));
  }
  clear() {
    const e = d;
    this[e(283)][e(272)]();
  }
  [d(264)](e, x, t = q[d(278)]) {
    const r = d;
    document[r(257)] = this[r(284)](e) + "=" + x + r(258) + t;
  }
  [d(252)](e) {
    const x = d, t = document[x(257)][x(271)]("; ");
    for (let r = 0, s = t[x(254)]; r < s; r++) {
      const a = t[r][x(271)]("=");
      if (a[0] === this[x(284)](e)) return a[1];
    }
    return "";
  }
  [d(260)](e) {
    this.setCookie(e, "", -1);
  }
  clearCookie() {
    const e = d, x = document[e(257)][e(256)](/[^ =;]+(?==)/g);
    if (x) for (let t = x[e(254)]; t--; )
      document[e(257)] = x[t] + "=;expire=" + (/* @__PURE__ */ new Date(0))[e(286)]();
  }
}
const j0 = new f0();
(function(n, e) {
  const x = k, t = n();
  for (; ; )
    try {
      if (-parseInt(x(230)) / 1 * (-parseInt(x(211)) / 2) + -parseInt(x(213)) / 3 * (-parseInt(x(223)) / 4) + -parseInt(x(233)) / 5 * (parseInt(x(235)) / 6) + -parseInt(x(228)) / 7 * (-parseInt(x(229)) / 8) + -parseInt(x(217)) / 9 + -parseInt(x(237)) / 10 + -parseInt(x(210)) / 11 * (-parseInt(x(219)) / 12) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(P, 736219);
function W0(n) {
  const e = k, { text: x, success: t, error: r } = n, { isSupported: s, copy: a } = t0({ source: x });
  if (s || n0(e(225)), navigator[e(222)]) a(x)[e(221)](() => {
    t && t();
  }).catch(() => {
    r && r();
  });
  else try {
    const o = document[e(216)](e(224));
    o[e(220)]("value", x), document[e(215)][e(234)](o), o[e(226)](), document[e(214)]("copy"), document.body[e(231)](o), t && t();
  } catch (o) {
    T.isLogger && y[e(232)](e(236), JSON.stringify(o)), r && r();
  }
}
function k(n, e) {
  const x = P();
  return k = function(t, r) {
    return t = t - 210, x[t];
  }, k(n, e);
}
function P() {
  const n = ["3310977tJNWWm", "execCommand", "body", "createElement", "9680886WItGIN", "http://", "12ZNoRJo", "setAttribute", "then", "clipboard", "4LubfkV", "input", "clipboard-write", "select", "replace", "3303097RRjYOS", "16tCYXNR", "16393gpvwJo", "removeChild", "error", "5zrnMdM", "appendChild", "1033026RrfJwS", "Failed to copy text.", "12477010YPutPm", "9060678AHCMOw", "44wNPCtl", "ws://"];
  return P = function() {
    return n;
  }, P();
}
function q0(n) {
  const e = k;
  return n[e(227)](/^(http|https):\/\//, (x) => x === e(218) ? e(212) : "wss://");
}
function U() {
  const n = ["16106184ZgPZeX", "63aTSXaE", "2228SyJAsJ", "1185440OgAuPx", "replace", "4040500BxHLuk", "length", "141738litHVm", "2586abmoyD", "6167656judTMJ", "177693nhwrFO"];
  return U = function() {
    return n;
  }, U();
}
function z(n, e) {
  const x = U();
  return z = function(t, r) {
    return t = t - 474, x[t];
  }, z(n, e);
}
(function(n, e) {
  const x = z, t = n();
  for (; ; )
    try {
      if (-parseInt(x(483)) / 1 + parseInt(x(476)) / 2 + -parseInt(x(481)) / 3 * (-parseInt(x(475)) / 4) + parseInt(x(478)) / 5 + -parseInt(x(480)) / 6 * (parseInt(x(474)) / 7) + parseInt(x(482)) / 8 + -parseInt(x(484)) / 9 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(U, 472035);
function X0(n) {
  const e = z, x = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"], t = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万", "十", "百", "千", "亿"];
  if (!n || isNaN(Number(n))) return "零";
  const r = n.toString().split("");
  let s = "";
  for (let a = 0; a < r[e(479)]; a++) {
    const o = r[e(479)] - 1 - a;
    s = t[a] + s;
    const _ = r[o];
    s = x[Number(_)] + s;
  }
  return s = s[e(477)](/零(千|百|十)/g, "零")[e(477)](/十零/g, "十"), s = s[e(477)](/零+/g, "零"), s = s[e(477)](/零亿/g, "亿")[e(477)](/零万/g, "万"), s = s[e(477)](/亿万/g, "亿"), s = s.replace(/零+$/, ""), s = s[e(477)](/^一十/g, "十"), s;
}
const u = L;
(function(n, e) {
  const x = L, t = n();
  for (; ; )
    try {
      if (-parseInt(x(309)) / 1 * (-parseInt(x(310)) / 2) + parseInt(x(323)) / 3 * (-parseInt(x(317)) / 4) + -parseInt(x(311)) / 5 * (-parseInt(x(307)) / 6) + -parseInt(x(319)) / 7 + -parseInt(x(322)) / 8 * (-parseInt(x(326)) / 9) + -parseInt(x(316)) / 10 + -parseInt(x(320)) / 11 * (-parseInt(x(318)) / 12) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(J, 159176);
function J() {
  const n = ["instance", "interceptorsResponse", "2385280LGtrex", "492GnoIDa", "252eziSHh", "1732514RiABCE", "213301dVIJsL", "interceptors", "107448qEUaXE", "4491qvzSjL", "delete", "error", "54FCccYK", "assign", "request", "Request instance has been created.", "put", "interceptorsRequest", "isLogger", "30CGaEtu", "create", "13aCqeSF", "48830CAaoJg", "24145CxkopN", "use", "post"];
  return J = function() {
    return n;
  }, J();
}
function L(n, e) {
  const x = J();
  return L = function(t, r) {
    return t = t - 304, x[t];
  }, L(n, e);
}
var H;
class G0 {
  constructor(e) {
    m(this, H, null);
    m(this, "baseConfig", { baseURL: "", timeout: 6e4 });
    const x = u;
    this[x(314)] ? T[x(306)] && y[x(325)](x(329)) : this.instance = r0[x(308)](Object[x(327)](this.baseConfig, e ?? {}));
  }
  [(H = u(314), u(305))](e, x) {
    const t = u;
    this[t(314)][t(321)][t(328)].use((r) => e ? e(r) : r, (r) => x ? x(r) : r);
  }
  [u(315)](e, x) {
    const t = u;
    this[t(314)][t(321)].response[t(312)]((r) => {
      const { data: s } = r;
      return e ? e(s) : s;
    }, (r) => x ? x(r) : r);
  }
  [u(328)](e) {
    const x = u;
    return this[x(314)][x(328)](e);
  }
  get(e, x) {
    return this[u(314)].get(e, x);
  }
  [u(313)](e, x, t) {
    const r = u;
    return this[r(314)][r(313)](e, x, t);
  }
  [u(304)](e, x, t) {
    const r = u;
    return this[r(314)][r(304)](e, x, t);
  }
  [u(324)](e, x) {
    return this[u(314)].delete(e, x);
  }
}
(function(n, e) {
  for (var x = V, t = n(); ; )
    try {
      var r = parseInt(x(451)) / 1 + -parseInt(x(458)) / 2 * (parseInt(x(457)) / 3) + -parseInt(x(455)) / 4 + -parseInt(x(453)) / 5 + -parseInt(x(460)) / 6 * (-parseInt(x(454)) / 7) + parseInt(x(459)) / 8 + -parseInt(x(452)) / 9 * (-parseInt(x(456)) / 10);
      if (r === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(R, 795007);
function V(n, e) {
  var x = R();
  return V = function(t, r) {
    t = t - 451;
    var s = x[t];
    return s;
  }, V(n, e);
}
function R() {
  var n = ["33546BwGVqS", "748983bhIJPt", "18318114UshOuX", "4401300yJzetQ", "28GodNHu", "3942596driWcY", "10nmDGbs", "441bWcYeP", "20386TgNZNO", "10820752ESivYP"];
  return R = function() {
    return n;
  }, R();
}
const g = Z;
function Z(n, e) {
  const x = $();
  return Z = function(t, r) {
    return t = t - 315, x[t];
  }, Z(n, e);
}
(function(n, e) {
  const x = Z, t = n();
  for (; ; )
    try {
      if (parseInt(x(329)) / 1 + -parseInt(x(326)) / 2 + parseInt(x(320)) / 3 * (parseInt(x(328)) / 4) + parseInt(x(322)) / 5 * (-parseInt(x(316)) / 6) + parseInt(x(317)) / 7 * (parseInt(x(325)) / 8) + -parseInt(x(321)) / 9 + parseInt(x(327)) / 10 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})($, 355326);
function $() {
  const n = ["isLogger", "installFundebugVue", "138rzoqAL", "5963517PabvPF", "8095AVMmVo", "includes", "isDebug", "304fZZdij", "341306fQwyim", "3008560vIGCwM", "45436tDYmpD", "382238KcYxCk", "vueVersion", "1812jvQgWj", "86933pSiOMh"];
  return $ = function() {
    return n;
  }, $();
}
var Q, K;
const f = class f {
  constructor(e) {
    const x = g, { isLogger: t, isDebug: r, vueVersion: s = "v3", apikey: a, install: o } = e;
    f[x(318)] = t ?? !1, f[x(324)] = r ?? !1, f.vueVersion = s ?? "v3", this[x(319)](a) && o && o(this.installFundebugVue(a));
  }
  [(K = g(318), Q = g(315), g(319))](e) {
    const x = g;
    return f[x(324)] ? e ? ["v2", "v3"][x(323)](f[x(315)]) ? (F.init({ apikey: e }), new e0(F)) : (f.isLogger && y.error("vue版本不支持, 目前只支持vue: >= v2 || >= v3"), null) : (f[x(318)] && y.error("apikey 不能为空， 请在环境变量中配置"), null) : null;
  }
};
m(f, K), m(f, "isDebug"), m(f, Q);
let T = f;
export {
  Y0 as A,
  P0 as B,
  U0 as C,
  z0 as D,
  J0 as E,
  L0 as F,
  R0 as G,
  V0 as H,
  T as I,
  F0 as J,
  W0 as K,
  X0 as L,
  G0 as R,
  j0 as S,
  Z0 as a,
  $0 as b,
  s0 as c,
  w0 as d,
  v0 as e,
  y0 as f,
  w as g,
  q0 as h,
  E0 as i,
  k0 as j,
  T0 as k,
  y as l,
  S as m,
  C0 as n,
  S0 as o,
  a0 as p,
  c0 as q,
  o0 as r,
  i0 as s,
  d0 as t,
  u0 as u,
  O0 as v,
  D0 as w,
  A0 as x,
  M0 as y,
  N0 as z
};
