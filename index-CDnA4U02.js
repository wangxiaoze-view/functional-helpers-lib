var x0 = Object.defineProperty;
var e0 = (n, e, x) => e in n ? x0(n, e, { enumerable: !0, configurable: !0, writable: !0, value: x }) : n[e] = x;
var h = (n, e, x) => e0(n, typeof e != "symbol" ? e + "" : e, x);
import * as Y from "fundebug-javascript";
import t0 from "fundebug-vue";
import { isString as P, isEmpty as X } from "lodash-es";
import c from "dayjs";
import { ETimePeriodType as d, ELoggerColor as T } from "./enums/es/index.js";
import { useClipboard as n0, usePermission as r0 } from "@vueuse/core";
import a0 from "axios";
function m(n, e) {
  const x = C();
  return m = function(t, r) {
    return t = t - 276, x[t];
  }, m(n, e);
}
(function(n, e) {
  const x = m, t = n();
  for (; ; )
    try {
      if (-parseInt(x(308)) / 1 * (parseInt(x(300)) / 2) + -parseInt(x(288)) / 3 * (parseInt(x(277)) / 4) + parseInt(x(276)) / 5 + -parseInt(x(281)) / 6 * (-parseInt(x(311)) / 7) + -parseInt(x(304)) / 8 + parseInt(x(316)) / 9 * (-parseInt(x(302)) / 10) + parseInt(x(305)) / 11 * (parseInt(x(285)) / 12) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(C, 453652);
function s0(n) {
  const e = m;
  return Array[e(313)](n) ? n : n[e(306)](",").filter((x) => x);
}
function y0(n) {
  return new Promise((e) => {
    const x = m, t = document[x(309)](x(303));
    t[x(290)] = n, t[x(299)] = "anonymous", t[x(291)] = x(319), t[x(314)] = 0.1, t[x(297)](x(294), () => {
      var s;
      const r = x, a = document.createElement("canvas");
      a[r(320)] = t[r(318)], a[r(280)] = t[r(289)], (s = a.getContext("2d")) == null || s[r(282)](t, 0, 0, a[r(320)], a[r(280)]), e(a[r(292)]());
    });
  });
}
function v0(n, e = 200, x = 200, t = 75) {
  const r = m;
  return n ? n[r(295)](r(310)) !== -1 ? n + r(278) + e + r(286) + x + r(312) + t : n + r(315) + e + r(283) + x + r(298) + t : "";
}
function k0(n, e = "") {
  const x = m, t = n.split(";base64,"), r = t[0][x(306)](":")[1], a = atob(t[1]), s = Array[x(279)]({ length: a.length });
  for (let l = 0; l < a.length; l++)
    s[l] = a[x(293)](l);
  const i = new Uint8Array(s);
  return new File([i], e, { type: r });
}
function T0(n, e) {
  const x = m;
  P(n) && (n = s0(n));
  const t = n[x(321)]((r) => {
    const a = x, s = P(r) ? r : r[a(296)];
    if (e === a(301)) return c0(s);
    if (e === "video") return o0(s);
    if (e === a(317)) return i0(s);
    if (e === a(287)) return u0(s);
    if (e === a(284)) return f0(s);
    if (e === a(307)) return d0(s);
  });
  return [t, t.length];
}
function C() {
  const n = ["/q/", "crossOrigin", "14UNiaPJ", "image", "3030bXBGDH", "video", "6702544ZhLcvO", "26743684yXyfvp", "split", "isZip", "119189yqQZbD", "createElement", "oss-cn", "21xhLLfB", ",limit_0/quality,q_", "isArray", "currentTime", "?imageView2/2/w/", "26433czuQnk", "isExcel", "videoWidth", "auto", "width", "filter", "493415DoIrZc", "8zPIgfh", "?x-oss-process=image/resize,w_", "from", "height", "1667346WBsRfc", "drawImage", "/h/", "isPdf", "12FRInDQ", ",h_", "isDocs", "521844xrZLuo", "videoHeight", "src", "preload", "toDataURL", "charCodeAt", "loadeddata", "indexOf", "url", "addEventListener"];
  return C = function() {
    return n;
  }, C();
}
const w = y;
(function(n, e) {
  const x = y, t = n();
  for (; ; )
    try {
      if (parseInt(x(447)) / 1 * (parseInt(x(443)) / 2) + parseInt(x(444)) / 3 * (parseInt(x(437)) / 4) + parseInt(x(461)) / 5 * (-parseInt(x(440)) / 6) + -parseInt(x(457)) / 7 * (-parseInt(x(435)) / 8) + parseInt(x(455)) / 9 + parseInt(x(458)) / 10 + -parseInt(x(448)) / 11 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(E, 904348);
function y(n, e) {
  const x = E();
  return y = function(t, r) {
    return t = t - 429, x[t];
  }, y(n, e);
}
function S0() {
  const n = y, e = c(), x = e.year(), t = e[n(450)]() + 1, r = e[n(460)](), a = e[n(433)](), s = e.minute(), i = e[n(432)](), l = e[n(445)]();
  return { year: x, month: t, day: r, hour: a, minute: s, second: i, week: l, weekName: ["日", "一", "二", "三", "四", "五", "六"] };
}
function g(n = /* @__PURE__ */ new Date(), e = w(459)) {
  return c(n).format(e);
}
function S(n = w(446)) {
  const e = w, x = [], t = c()[e(450)]() + 1;
  return t <= 3 ? x[e(453)]({ name: "本季度", start: c()[e(450)](0)[e(441)]("month")[e(430)](n), end: c().month(2)[e(454)]("month").format(n) }, { name: e(436), start: c()[e(451)](-1, e(452)).month(9).startOf(e(450))[e(430)](n), end: c()[e(451)](-1, e(452))[e(450)](11)[e(454)](e(450))[e(430)](n) }) : t <= 6 ? x[e(453)]({ name: e(431), start: c()[e(450)](3)[e(441)](e(450)).format(n), end: c().month(5)[e(454)](e(450))[e(430)](n) }, { name: "上季度", start: c()[e(450)](0)[e(441)](e(450))[e(430)](n), end: c()[e(450)](2).endOf(e(450))[e(430)](n) }) : t <= 9 ? x.push({ name: e(431), start: c()[e(450)](6)[e(441)](e(450))[e(430)](n), end: c().month(8)[e(454)](e(450)).format(n) }, { name: e(436), start: c()[e(450)](3)[e(441)](e(450))[e(430)](n), end: c()[e(450)](5)[e(454)](e(450))[e(430)](n) }) : t <= 12 && x[e(453)]({ name: e(431), start: c()[e(450)](9)[e(441)](e(450))[e(430)](n), end: c()[e(450)](11)[e(454)](e(450))[e(430)](n) }, { name: e(436), start: c()[e(450)](6)[e(441)]("month")[e(430)](n), end: c()[e(450)](8)[e(454)](e(450)).format(n) }), x;
}
function C0(n, e = w(446)) {
  const x = w;
  switch (n) {
    case d.lastOneMonth:
      return { startTime: c()[x(429)](30, x(445)).format(e), endTime: g(/* @__PURE__ */ new Date(), e) };
    case d[x(438)]:
      return { startTime: c()[x(429)](90, x(445))[x(430)](e), endTime: g(/* @__PURE__ */ new Date(), e) };
    case d[x(439)]:
      return { startTime: c()[x(429)](365, x(445))[x(430)](e), endTime: g(/* @__PURE__ */ new Date(), e) };
    case d[x(456)]:
      return { startTime: c()[x(451)](-1, x(463))[x(441)](x(463)).add(1, x(445))[x(430)](e), endTime: c().add(-1, x(463))[x(454)]("week")[x(451)](1, x(445))[x(430)](e) };
    case d.lastMonth:
      return { startTime: c()[x(451)](-1, x(450))[x(441)](x(450))[x(430)](e), endTime: c().add(-1, x(450)).endOf(x(450))[x(430)](e) };
    case d.lastQuarter:
      return { startTime: S(e)[1][x(464)], endTime: S(e)[1][x(442)] };
    case d[x(462)]:
      return { startTime: c()[x(451)](-1, x(452))[x(441)](x(452)).format(e), endTime: c().add(-1, "year")[x(454)]("year").format(e) };
    case d.nearWeek:
      return { startTime: c()[x(441)](x(463))[x(451)](1, x(445))[x(430)](e), endTime: c().endOf(x(463))[x(451)](1, x(445))[x(430)](e) };
    case d[x(434)]:
      return { startTime: c()[x(441)](x(450))[x(430)](e), endTime: c()[x(454)]("month").format(e) };
    case d.nearQuarter:
      return { startTime: S(e)[0].start, endTime: S(e)[0].end };
    case d[x(449)]:
      return { startTime: c()[x(441)](x(452)).format(e), endTime: c()[x(454)](x(452)).format(e) };
    default:
      return { startTime: c()[x(429)](30, x(445)).format(e), endTime: g(/* @__PURE__ */ new Date(), e) };
  }
}
function E() {
  const n = ["hour", "nearMonth", "11956272lfqPRf", "上季度", "916564FDZqtw", "lastThreeMonth", "lastOneYear", "655056EYTgXc", "startOf", "end", "1840RflNym", "12YMhpgK", "day", "YYYY-MM-DD", "1790tSlmVe", "40478801FKxxMJ", "nearYear", "month", "add", "year", "push", "endOf", "4814802KJvzes", "lastWeek", "7hZqxQF", "1005390nOWrgt", "YYYY-MM-DD HH:mm:ss", "date", "5EhTSQh", "lastYear", "week", "start", "subtract", "format", "本季度", "second"];
  return E = function() {
    return n;
  }, E();
}
const p = D;
(function(n, e) {
  const x = D, t = n();
  for (; ; )
    try {
      if (-parseInt(x(167)) / 1 * (-parseInt(x(142)) / 2) + parseInt(x(157)) / 3 + parseInt(x(117)) / 4 + parseInt(x(151)) / 5 * (-parseInt(x(152)) / 6) + parseInt(x(121)) / 7 * (parseInt(x(125)) / 8) + parseInt(x(149)) / 9 + parseInt(x(122)) / 10 * (-parseInt(x(166)) / 11) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(A, 971406);
function A() {
  const n = ["getContext", "11CkSkTO", "2260KIbhUR", "anonymous", "info", "5924428dNTRAK", "%c sup?", "danger", " %c ", "7PUcSTx", "16203960MyzgMB", "warn", "match", "7590152kFfNdM", "; padding: 1px; border-radius: 0 2px 2px 0; color: ", "onload", "createElement", "border:1px solid ", "image/png", "drawImage", ";border:1px solid ", "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;", "prettyLog", "red", "pop", "src", "fillRect", "log", "Log", "fillStyle", "454FHUeTR", "trim", "px ", "warning", "Error", "crossOrigin", "Warn", "4204386UtAeGU", "replace", "89530vXrMwy", "318ZoZplx", `);
                background-repeat: no-repeat;
                background-size: `, `px;
                background-image: url(`, "height", "init", "392310Ykrykb", "split", "floor", "width", "canvas", `font-size: 1px;
                padding: `, "background:", "debug"];
  return A = function() {
    return n;
  }, A();
}
function D(n, e) {
  const x = A();
  return D = function(t, r) {
    return t = t - 117, x[t];
  }, D(n, e);
}
class _ {
  constructor() {
  }
  static [p(134)](e, x, t) {
    const r = p;
    console[r(139)]("%c " + e + r(120) + x + " %c", r(163) + t + r(132) + t + r(133), r(129) + t + r(126) + t + ";", "background:transparent");
  }
  static logCaller() {
    var s;
    const e = p, x = new Error(), t = ((s = x.stack) == null ? void 0 : s[e(158)](`
`)) || [], r = (t[1] || "")[e(150)](/^\(|\)$/, "")[e(143)](), a = r[e(124)](/^(.*):(\d+):(\d+)$/);
    return a ? a[0][e(158)]("/")[e(136)]() : "";
  }
  static [p(156)](e, x, t) {
    const r = X(x) ? t : e, a = X(x) ? e : x;
    return { _title: r, _text: a };
  }
  [p(139)](e, x = "") {
    const t = p, { _title: r, _text: a } = _[t(156)](e, x, t(140));
    _.prettyLog(r, a, T[t(169)]);
  }
  error(e, x = "") {
    const t = p, { _title: r, _text: a } = _[t(156)](e, x, t(146));
    _[t(134)](r, a, T[t(119)]);
  }
  [p(123)](e, x = "") {
    const t = p, { _title: r, _text: a } = _[t(156)](e, x, t(148));
    _[t(134)](r, a, T[t(145)]);
  }
  [p(164)](e = "") {
    _.prettyLog("[" + g() + "]", e || "Debug", T.default);
  }
  img(e, x = 1) {
    const t = p, r = new Image();
    r[t(147)] = t(168), r[t(127)] = () => {
      const a = t, s = document[a(128)](a(161)), i = s[a(165)]("2d");
      if (i) {
        s[a(160)] = r[a(160)], s[a(155)] = r[a(155)], i[a(141)] = a(135), i[a(138)](0, 0, s[a(160)], s[a(155)]), i[a(131)](r, 0, 0);
        const l = s.toDataURL(a(130));
        console[a(139)](a(118), a(162) + Math[a(159)](r[a(155)] * x / 2) + "px " + Math[a(159)](r[a(160)] * x / 2) + a(154) + l + a(153) + r[a(160)] * x + a(144) + r[a(155)] * x + `px;
                color: transparent;
                `);
      }
    }, r[t(137)] = e;
  }
}
const q = new _();
(function(n, e) {
  const x = o, t = n();
  for (; ; )
    try {
      if (parseInt(x(186)) / 1 * (-parseInt(x(195)) / 2) + parseInt(x(182)) / 3 * (-parseInt(x(193)) / 4) + parseInt(x(184)) / 5 * (-parseInt(x(202)) / 6) + -parseInt(x(183)) / 7 + -parseInt(x(200)) / 8 * (-parseInt(x(199)) / 9) + parseInt(x(192)) / 10 * (-parseInt(x(196)) / 11) + parseInt(x(197)) / 12 * (parseInt(x(180)) / 13) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(z, 409133);
function E0(n) {
  return /\.(doc|docx|xls|xlsx|ppt|pptx|pdf|txt|zip|rar|7z|gz|bz2|tar|iso|apk|mp3|mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[o(198)](n);
}
function c0(n) {
  return /\.(png|jpg|jpeg|gif|bmp|webp|svg|ico)$/.test(n);
}
function o0(n) {
  return /\.(mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[o(198)](n);
}
function i0(n) {
  return /\.(xls|xlsx|csv)$/[o(198)](n);
}
function u0(n) {
  return /\.(doc|docx)$/[o(198)](n);
}
function f0(n) {
  return /\.(pdf)$/[o(198)](n);
}
function d0(n) {
  return /\.(zip|rar|7z|tar|iso|apk)$/.test(n);
}
function A0(n) {
  return /^(https?:|mailto:|tel:)/.test(n);
}
function z() {
  const n = ["WebSocket", "object", "string", "10BqmLMB", "12rRSkjN", "match", "148106KEKNHW", "8610877WFAmSg", "12YefoKq", "test", "675hcmBic", "64544ytVDkz", "parse", "18PRRLfT", "Adr", "function", "29896711wwdAHE", "indexOf", "117735JQmPvJ", "3846892fJhKAz", "1125585vlgnrn", "log", "5paiXWo", "SpeechSynthesisUtterance", "userAgent"];
  return z = function() {
    return n;
  }, z();
}
function D0() {
  const n = o, e = navigator[n(188)];
  return e[n(181)]("Android") > -1 || e[n(181)](n(178)) > -1;
}
function z0() {
  const n = o;
  return !!navigator[n(188)][n(194)](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function O0(n) {
  return /^1[3456789]\d{9}$/[o(198)](n);
}
function M0(n) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/[o(198)](n);
}
function N0(n) {
  return /^[\u4e00-\u9fa5]+$/.test(n);
}
function R0(n) {
  return /^[a-zA-Z]+$/[o(198)](n);
}
function F0(n) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/[o(198)](n);
}
function o(n, e) {
  const x = z();
  return o = function(t, r) {
    return t = t - 178, x[t];
  }, o(n, e);
}
function K0(n) {
  return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(n);
}
function U0(n) {
  return /^[a-z]+$/[o(198)](n);
}
function W0(n) {
  return /^[A-Z]+$/[o(198)](n);
}
function Z0(n) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(n);
}
function $0(n) {
  const e = o;
  if (typeof n == e(191)) try {
    const x = JSON[e(201)](n);
    return !!(typeof x == e(190) && x);
  } catch (x) {
    return console[e(185)]("error:" + x), !1;
  }
  return !1;
}
function q0() {
  const n = o;
  return window[n(187)] || typeof SpeechSynthesisUtterance !== n(179);
}
function L0() {
  const n = o;
  return n(189) in window || typeof WebSocket !== n(179);
}
function Y0(n) {
  return /^\S*(?=\S{5,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/[o(198)](n);
}
const P0 = (n) => /^(https?:|mailto:|tel:|\/\/)/[o(198)](n);
function O(n, e) {
  const x = M();
  return O = function(t, r) {
    return t = t - 414, x[t];
  }, O(n, e);
}
const u = O;
(function(n, e) {
  const x = O, t = n();
  for (; ; )
    try {
      if (parseInt(x(439)) / 1 + -parseInt(x(420)) / 2 + -parseInt(x(428)) / 3 * (-parseInt(x(443)) / 4) + parseInt(x(441)) / 5 * (-parseInt(x(427)) / 6) + parseInt(x(418)) / 7 + -parseInt(x(434)) / 8 * (parseInt(x(417)) / 9) + -parseInt(x(414)) / 10 * (parseInt(x(415)) / 11) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M, 610469);
const j = 60 * 60 * 24 * 30;
function M() {
  const n = ["cookie", "Failed to copy text.", "prefixKey", "clearCookie", "parse", "68694Vndphv", "5355TfseJM", "setCookie", "getKey", "; Max-Age=", "remove", "stringify", "8mNANvz", "clear", "getCookie", "storage", "getItem", "461765kKwEwE", "get", "415wBmaNH", "=;expire=", "1448uGYdHV", "toExponential", "length", "setItem", "split", "1060xRuXlP", "64658IcpRYd", "toUTCString", "98136HIHrZY", "7771372vLjwbS", "removeCookie", "46846wqXfiB", "set"];
  return M = function() {
    return n;
  }, M();
}
var J, V;
class p0 {
  constructor(e = "", x = localStorage) {
    h(this, V);
    h(this, J);
    const t = u;
    this[t(424)] = e, this[t(437)] = x;
  }
  [(V = u(424), J = u(437), u(430))](e) {
    return "" + this.prefixKey + e;
  }
  [u(421)](e, x, t = j) {
    const r = u, a = JSON[r(433)]({ value: x, expire: t !== null ? (/* @__PURE__ */ new Date()).getTime() + t * 1e3 : null });
    this.storage[r(446)](this.getKey(e), a);
  }
  [u(440)](e, x) {
    const t = u, r = this[t(437)][t(438)](this[t(430)](e));
    if (r) try {
      const a = JSON[t(426)](r), { value: s, expire: i } = a;
      if (i === null || i >= Date.now()) return s;
      this[t(432)](this[t(430)](e));
    } catch (a) {
      return k.isLogger && q.error(t(423), JSON[t(433)](a)), x;
    }
    return x;
  }
  [u(432)](e) {
    this[u(437)].removeItem(this.getKey(e));
  }
  clear() {
    const e = u;
    this.storage[e(435)]();
  }
  [u(429)](e, x, t = j[u(444)]) {
    const r = u;
    document[r(422)] = this[r(430)](e) + "=" + x + r(431) + t;
  }
  [u(436)](e) {
    const x = u, t = document[x(422)].split("; ");
    for (let r = 0, a = t[x(445)]; r < a; r++) {
      const s = t[r][x(447)]("=");
      if (s[0] === this[x(430)](e)) return s[1];
    }
    return "";
  }
  [u(419)](e) {
    this.setCookie(e, "", -1);
  }
  [u(425)]() {
    const e = u, x = document.cookie.match(/[^ =;]+(?==)/g);
    if (x) for (let t = x[e(445)]; t--; )
      document[e(422)] = x[t] + e(442) + (/* @__PURE__ */ new Date(0))[e(416)]();
  }
}
const X0 = new p0();
(function(n, e) {
  const x = v, t = n();
  for (; ; )
    try {
      if (-parseInt(x(276)) / 1 * (-parseInt(x(279)) / 2) + -parseInt(x(275)) / 3 + -parseInt(x(278)) / 4 + -parseInt(x(262)) / 5 + -parseInt(x(270)) / 6 * (parseInt(x(277)) / 7) + -parseInt(x(283)) / 8 * (parseInt(x(272)) / 9) + parseInt(x(280)) / 10 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(N, 676434);
function N() {
  const n = ["execCommand", "isLogger", "copy", "4223985FFboWw", "catch", "body", "select", "http://", "then", "setAttribute", "value", "69786upFXHP", "removeChild", "90mfVjzu", "ws://", "clipboard", "1334679inwuur", "102872WDOdwA", "714FEKCZg", "4784700pyczkr", "4UTdNpW", "44003770YhjsKt", "stringify", "createElement", "205968xEAbhS"];
  return N = function() {
    return n;
  }, N();
}
function v(n, e) {
  const x = N();
  return v = function(t, r) {
    return t = t - 262, x[t];
  }, v(n, e);
}
function j0(n) {
  const e = v, { text: x, success: t, error: r } = n, { isSupported: a, copy: s } = n0({ source: x });
  if (a || r0("clipboard-write"), navigator[e(274)]) s(x)[e(267)](() => {
    t && t();
  })[e(263)](() => {
    r && r();
  });
  else try {
    const i = document[e(282)]("input");
    i[e(268)](e(269), x), document.body.appendChild(i), i[e(265)](), document[e(284)](e(286)), document[e(264)][e(271)](i), t && t();
  } catch (i) {
    k[e(285)] && q.error("Failed to copy text.", JSON[e(281)](i)), r && r();
  }
}
function J0(n) {
  const e = v;
  return n.replace(/^(http|https):\/\//, (x) => x === e(266) ? e(273) : "wss://");
}
(function(n, e) {
  const x = R, t = n();
  for (; ; )
    try {
      if (-parseInt(x(482)) / 1 + -parseInt(x(490)) / 2 * (parseInt(x(496)) / 3) + parseInt(x(481)) / 4 * (-parseInt(x(494)) / 5) + -parseInt(x(485)) / 6 * (parseInt(x(486)) / 7) + -parseInt(x(489)) / 8 * (parseInt(x(487)) / 9) + parseInt(x(483)) / 10 * (parseInt(x(492)) / 11) + -parseInt(x(495)) / 12 * (-parseInt(x(491)) / 13) === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(F, 217494);
function V0(n) {
  const e = R, x = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"], t = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万", "十", "百", "千", "亿"];
  if (!n || isNaN(Number(n))) return "零";
  const r = n[e(497)]()[e(484)]("");
  let a = "";
  for (let s = 0; s < r[e(493)]; s++) {
    const i = r[e(493)] - 1 - s;
    a = t[s] + a;
    const l = r[i];
    a = x[Number(l)] + a;
  }
  return a = a.replace(/零(千|百|十)/g, "零")[e(488)](/十零/g, "十"), a = a[e(488)](/零+/g, "零"), a = a[e(488)](/零亿/g, "亿")[e(488)](/零万/g, "万"), a = a.replace(/亿万/g, "亿"), a = a[e(488)](/零+$/, ""), a = a[e(488)](/^一十/g, "十"), a;
}
function R(n, e) {
  const x = F();
  return R = function(t, r) {
    return t = t - 481, x[t];
  }, R(n, e);
}
function F() {
  const n = ["376977XFwbAv", "toString", "8JqVYUn", "211345xjLZGv", "340xOPxGL", "split", "448122qlWaMu", "7giWzIN", "3109743hOjXXo", "replace", "8rCnukx", "2txrjfJ", "704756OmjahV", "8745bjkxag", "length", "1019045GmRAKe", "300TmMMGx"];
  return F = function() {
    return n;
  }, F();
}
function K() {
  const n = ["isLogger", "98218AkGRWi", "963909EhwGVA", "response", "use", "get", "delete", "4cqpzYo", "9525sKLzjN", "interceptorsRequest", "9210072tdrpWR", "9459590EgdtjK", "1659279pCWKNv", "request", "post", "42957576pweXlA", "error", "baseConfig", "instance", "interceptors", "put", "354ODweIn", "Request instance has been created."];
  return K = function() {
    return n;
  }, K();
}
const f = U;
function U(n, e) {
  const x = K();
  return U = function(t, r) {
    return t = t - 430, x[t];
  }, U(n, e);
}
(function(n, e) {
  const x = U, t = n();
  for (; ; )
    try {
      if (-parseInt(x(447)) / 1 + parseInt(x(446)) / 2 + parseInt(x(434)) / 3 * (-parseInt(x(452)) / 4) + parseInt(x(430)) / 5 * (-parseInt(x(443)) / 6) + -parseInt(x(433)) / 7 + -parseInt(x(432)) / 8 + parseInt(x(437)) / 9 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(K, 690147);
var G;
class G0 {
  constructor(e) {
    h(this, "instance", null);
    h(this, G, { baseURL: "", timeout: 6e4 });
    const x = f;
    this.instance ? k[x(445)] && q[x(438)](x(444)) : this.instance = a0.create(Object.assign(this[x(439)], e ?? {}));
  }
  [(G = f(439), f(431))](e, x) {
    const t = f;
    this[t(440)][t(441)][t(435)].use((r) => e ? e(r) : r, (r) => x ? x(r) : r);
  }
  interceptorsResponse(e, x) {
    const t = f;
    this[t(440)].interceptors[t(448)][t(449)]((r) => {
      const { data: a } = r;
      return e ? e(a) : a;
    }, (r) => x ? x(r) : r);
  }
  [f(435)](e) {
    return this[f(440)].request(e);
  }
  [f(450)](e, x) {
    const t = f;
    return this[t(440)][t(450)](e, x);
  }
  post(e, x, t) {
    const r = f;
    return this.instance[r(436)](e, x, t);
  }
  put(e, x, t) {
    const r = f;
    return this[r(440)][r(442)](e, x, t);
  }
  [f(451)](e, x) {
    const t = f;
    return this.instance[t(451)](e, x);
  }
}
function W() {
  var n = ["15qGBSml", "2359084ROBorE", "1315080JDdbqU", "9173339XmRsMs", "214072HBjNrT", "554430rHXrab", "360EAskwn", "965535kztztD", "2016920hYXZac"];
  return W = function() {
    return n;
  }, W();
}
(function(n, e) {
  for (var x = L, t = n(); ; )
    try {
      var r = parseInt(x(477)) / 1 + -parseInt(x(483)) / 2 + parseInt(x(482)) / 3 + parseInt(x(476)) / 4 + -parseInt(x(484)) / 5 * (parseInt(x(480)) / 6) + -parseInt(x(478)) / 7 + parseInt(x(479)) / 8 * (parseInt(x(481)) / 9);
      if (r === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(W, 700904);
function L(n, e) {
  var x = W();
  return L = function(t, r) {
    t = t - 476;
    var a = x[t];
    return a;
  }, L(n, e);
}
const I = $;
(function(n, e) {
  const x = $, t = n();
  for (; ; )
    try {
      if (-parseInt(x(158)) / 1 + parseInt(x(172)) / 2 * (parseInt(x(166)) / 3) + parseInt(x(159)) / 4 * (-parseInt(x(165)) / 5) + -parseInt(x(171)) / 6 * (-parseInt(x(164)) / 7) + parseInt(x(163)) / 8 * (parseInt(x(170)) / 9) + -parseInt(x(160)) / 10 + -parseInt(x(156)) / 11 === e) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Z, 122882);
function Z() {
  const n = ["23580SwGrpX", "3sdxpHK", "isLogger", "error", "isDebug", "9hCvACq", "17274mpNCZQ", "295772IZPGDo", "vueVersion", "657283pzMcXI", "installFundebugVue", "94473lUiEtT", "12GpKWeZ", "1531700BltWGF", "526c4e4fad4df5f8e1ed8f102a938a1e6ee0cd443fb7ff5cce69cf0524ae77ec", "vue版本不支持, 目前只支持vue: >= v2 || >= v3", "1497104PXeoEy", "266SGZULb"];
  return Z = function() {
    return n;
  }, Z();
}
function $(n, e) {
  const x = Z();
  return $ = function(t, r) {
    return t = t - 155, x[t];
  }, $(n, e);
}
var B, H, Q;
Q = I(167), H = I(169), B = I(155);
const b = class b {
  constructor(e) {
    const x = I, { isLogger: t, isDebug: r, vueVersion: a = "v3", install: s } = e;
    b[x(167)] = t ?? !1, b.isDebug = r ?? !1, b[x(155)] = a ?? "v3", this.installFundebugVue() && s && s(this[x(157)]());
  }
  installFundebugVue() {
    const e = I;
    return b[e(169)] ? ["v2", "v3"].includes(b[e(155)]) ? (Y.init({ apikey: e(161) }), new t0(Y)) : (b[e(167)] && q[e(168)](e(162)), null) : null;
  }
};
h(b, Q), h(b, H), h(b, B);
let k = b;
export {
  R0 as A,
  F0 as B,
  K0 as C,
  U0 as D,
  W0 as E,
  Z0 as F,
  $0 as G,
  Y0 as H,
  k as I,
  P0 as J,
  j0 as K,
  V0 as L,
  G0 as R,
  X0 as S,
  q0 as a,
  L0 as b,
  s0 as c,
  y0 as d,
  v0 as e,
  k0 as f,
  g,
  J0 as h,
  z0 as i,
  T0 as j,
  S0 as k,
  q as l,
  S as m,
  C0 as n,
  E0 as o,
  c0 as p,
  o0 as q,
  i0 as r,
  u0 as s,
  f0 as t,
  d0 as u,
  A0 as v,
  D0 as w,
  O0 as x,
  M0 as y,
  N0 as z
};
