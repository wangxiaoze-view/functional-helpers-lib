var x0 = Object.defineProperty;
var t0 = (n, t, x) => t in n ? x0(n, t, { enumerable: !0, configurable: !0, writable: !0, value: x }) : n[t] = x;
var h = (n, t, x) => t0(n, typeof t != "symbol" ? t + "" : t, x);
import * as P from "fundebug-javascript";
import e0 from "fundebug-vue";
import { isString as W, isEmpty as J } from "lodash-es";
import c from "dayjs";
import { ETimePeriodType as b, ELoggerColor as S } from "./enums/es/index.js";
import { useClipboard as n0, usePermission as a0 } from "@vueuse/core";
import r0 from "axios";
(function(n, t) {
  const x = m, e = n();
  for (; ; )
    try {
      if (parseInt(x(155)) / 1 * (-parseInt(x(148)) / 2) + parseInt(x(150)) / 3 * (-parseInt(x(159)) / 4) + -parseInt(x(154)) / 5 + -parseInt(x(171)) / 6 + parseInt(x(168)) / 7 * (parseInt(x(174)) / 8) + parseInt(x(146)) / 9 + parseInt(x(137)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(C, 852694);
function s0(n) {
  const t = m;
  return Array[t(163)](n) ? n : n[t(179)](",")[t(141)]((x) => x);
}
function C() {
  const n = ["getContext", "height", "createElement", "split", "oss-cn", ";base64,", "23716410oPYhtM", "width", "indexOf", "length", "filter", "from", "video", "?imageView2/2/w/", "isDocs", "10390320EBttsk", "canvas", "6JCITzn", "toDataURL", "4092051PCxjsp", "/q/", "crossOrigin", "?x-oss-process=image/resize,w_", "3490320MKmsPN", "111715VeChnF", ",h_", "loadeddata", "drawImage", "4ONBvQi", "currentTime", "image", ",limit_0/quality,q_", "isArray", "preload", "charCodeAt", "auto", "isExcel", "7qVpdYq", "/h/", "addEventListener", "7106316EKACpO", "videoWidth", "anonymous", "7265480oYafnJ", "src"];
  return C = function() {
    return n;
  }, C();
}
function y0(n) {
  return new Promise((t) => {
    const x = m, e = document[x(178)](x(143));
    e[x(175)] = n, e[x(152)] = x(173), e[x(164)] = x(166), e[x(160)] = 0.1, e[x(170)](x(157), () => {
      var s;
      const a = x, r = document[a(178)](a(147));
      r[a(138)] = e[a(172)], r.height = e.videoHeight, (s = r[a(176)]("2d")) == null || s[a(158)](e, 0, 0, r[a(138)], r[a(177)]), t(r[a(149)]());
    });
  });
}
function w0(n, t = 200, x = 200, e = 75) {
  const a = m;
  return n ? n[a(139)](a(180)) !== -1 ? n + a(153) + t + a(156) + x + a(162) + e : n + a(144) + t + a(169) + x + a(151) + e : "";
}
function m(n, t) {
  const x = C();
  return m = function(e, a) {
    return e = e - 136, x[e];
  }, m(n, t);
}
function k0(n, t = "") {
  const x = m, e = n[x(179)](x(136)), a = e[0].split(":")[1], r = atob(e[1]), s = Array[x(142)]({ length: r[x(140)] });
  for (let _ = 0; _ < r[x(140)]; _++)
    s[_] = r[x(165)](_);
  const o = new Uint8Array(s);
  return new File([o], t, { type: a });
}
function S0(n, t) {
  const x = m;
  W(n) && (n = s0(n));
  const e = n[x(141)]((a) => {
    const r = x, s = W(a) ? a : a.url;
    if (t === r(161)) return c0(s);
    if (t === r(143)) return o0(s);
    if (t === r(167)) return i0(s);
    if (t === r(145)) return u0(s);
    if (t === "isPdf") return d0(s);
    if (t === "isZip") return f0(s);
  });
  return [e, e[x(140)]];
}
const O = g;
function g(n, t) {
  const x = A();
  return g = function(e, a) {
    return e = e - 142, x[e];
  }, g(n, t);
}
(function(n, t) {
  const x = g, e = n();
  for (; ; )
    try {
      if (parseInt(x(152)) / 1 + parseInt(x(169)) / 2 + -parseInt(x(159)) / 3 * (-parseInt(x(148)) / 4) + parseInt(x(162)) / 5 + parseInt(x(146)) / 6 * (-parseInt(x(154)) / 7) + -parseInt(x(143)) / 8 * (-parseInt(x(166)) / 9) + parseInt(x(168)) / 10 * (-parseInt(x(151)) / 11) === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(A, 728654);
function T0() {
  const n = g, t = c(), x = t[n(171)](), e = t[n(164)]() + 1, a = t.date(), r = t[n(142)](), s = t[n(160)](), o = t[n(176)](), _ = t.day();
  return { year: x, month: e, day: a, hour: r, minute: s, second: o, week: _, weekName: ["日", "一", "二", "三", "四", "五", "六"] };
}
function A() {
  const n = ["6vHJlPB", "lastQuarter", "4aYsaJd", "本季度", "end", "11WKqqyx", "783714fSjbuU", "nearMonth", "5684637xplogL", "format", "endOf", "startOf", "subtract", "178671jxFRkq", "minute", "add", "5858790tiKdlk", "nearWeek", "month", "YYYY-MM-DD", "396qCZZlm", "week", "19156100aNyDSo", "822220eyHtfL", "上季度", "year", "day", "lastOneMonth", "lastOneYear", "lastWeek", "second", "hour", "187312iyhNcr", "push", "start"];
  return A = function() {
    return n;
  }, A();
}
function v(n = /* @__PURE__ */ new Date(), t = "YYYY-MM-DD HH:mm:ss") {
  const x = g;
  return c(n)[x(155)](t);
}
function T(n = O(165)) {
  const t = O, x = [], e = c()[t(164)]() + 1;
  return e <= 3 ? x.push({ name: t(149), start: c().month(0).startOf("month")[t(155)](n), end: c()[t(164)](2)[t(156)](t(164)).format(n) }, { name: t(170), start: c()[t(161)](-1, t(171))[t(164)](9)[t(157)](t(164))[t(155)](n), end: c()[t(161)](-1, t(171))[t(164)](11)[t(156)]("month")[t(155)](n) }) : e <= 6 ? x[t(144)]({ name: t(149), start: c()[t(164)](3)[t(157)](t(164))[t(155)](n), end: c()[t(164)](5)[t(156)](t(164))[t(155)](n) }, { name: "上季度", start: c().month(0)[t(157)](t(164)).format(n), end: c()[t(164)](2)[t(156)](t(164))[t(155)](n) }) : e <= 9 ? x[t(144)]({ name: t(149), start: c()[t(164)](6).startOf("month").format(n), end: c()[t(164)](8)[t(156)](t(164)).format(n) }, { name: "上季度", start: c()[t(164)](3)[t(157)]("month")[t(155)](n), end: c()[t(164)](5).endOf(t(164))[t(155)](n) }) : e <= 12 && x[t(144)]({ name: "本季度", start: c().month(9)[t(157)](t(164))[t(155)](n), end: c()[t(164)](11)[t(156)]("month")[t(155)](n) }, { name: t(170), start: c()[t(164)](6)[t(157)](t(164)).format(n), end: c()[t(164)](8).endOf("month")[t(155)](n) }), x;
}
function C0(n, t = O(165)) {
  const x = O;
  switch (n) {
    case b[x(173)]:
      return { startTime: c().subtract(30, x(172))[x(155)](t), endTime: v(/* @__PURE__ */ new Date(), t) };
    case b.lastThreeMonth:
      return { startTime: c()[x(158)](90, "day")[x(155)](t), endTime: v(/* @__PURE__ */ new Date(), t) };
    case b[x(174)]:
      return { startTime: c()[x(158)](365, x(172)).format(t), endTime: v(/* @__PURE__ */ new Date(), t) };
    case b[x(175)]:
      return { startTime: c()[x(161)](-1, "week")[x(157)](x(167))[x(161)](1, "day")[x(155)](t), endTime: c()[x(161)](-1, x(167))[x(156)](x(167))[x(161)](1, "day")[x(155)](t) };
    case b.lastMonth:
      return { startTime: c()[x(161)](-1, x(164))[x(157)](x(164)).format(t), endTime: c()[x(161)](-1, x(164))[x(156)](x(164))[x(155)](t) };
    case b[x(147)]:
      return { startTime: T(t)[1].start, endTime: T(t)[1][x(150)] };
    case b.lastYear:
      return { startTime: c()[x(161)](-1, x(171))[x(157)](x(171))[x(155)](t), endTime: c()[x(161)](-1, "year")[x(156)](x(171)).format(t) };
    case b[x(163)]:
      return { startTime: c()[x(157)](x(167))[x(161)](1, x(172))[x(155)](t), endTime: c().endOf(x(167))[x(161)](1, x(172)).format(t) };
    case b[x(153)]:
      return { startTime: c()[x(157)](x(164))[x(155)](t), endTime: c()[x(156)]("month")[x(155)](t) };
    case b.nearQuarter:
      return { startTime: T(t)[0][x(145)], endTime: T(t)[0][x(150)] };
    case b.nearYear:
      return { startTime: c().startOf(x(171))[x(155)](t), endTime: c()[x(156)](x(171)).format(t) };
    default:
      return { startTime: c()[x(158)](30, x(172))[x(155)](t), endTime: v(/* @__PURE__ */ new Date(), t) };
  }
}
const f = L;
function E() {
  const n = ["default", "3ibmBVV", "pop", "%c sup?", "3103014hDtuda", "onload", "crossOrigin", "117ONKfKz", "%c ", "background:transparent", ";border:1px solid ", "toDataURL", "split", `px;
                background-image: url(`, "fillRect", "2778417DrUrHC", "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;", "1985446vSlfxe", "logCaller", "error", "height", "anonymous", "11BipqYe", "Debug", "7uIHILL", "danger", "16jCUEfL", "5007372szvKwp", "border:1px solid ", "img", "Warn", "Log", "warn", "log", "debug", "getContext", `font-size: 1px;
                padding: `, "replace", "background:", "createElement", "image/png", "canvas", " %c", "stack", `px;
                color: transparent;
                `, "716299wbuhlY", "trim", "warning", "info", "Error", `);
                background-repeat: no-repeat;
                background-size: `, "prettyLog", "red", "55260NHiAbO", "14887370apWVIN", "init", "width", "; padding: 1px; border-radius: 0 2px 2px 0; color: ", "45QjAosF", "floor", "px "];
  return E = function() {
    return n;
  }, E();
}
(function(n, t) {
  const x = L, e = n();
  for (; ; )
    try {
      if (parseInt(x(357)) / 1 + parseInt(x(329)) / 2 * (-parseInt(x(313)) / 3) + -parseInt(x(304)) / 4 * (-parseInt(x(309)) / 5) + -parseInt(x(316)) / 6 * (parseInt(x(336)) / 7) + parseInt(x(338)) / 8 * (-parseInt(x(327)) / 9) + -parseInt(x(305)) / 10 * (parseInt(x(334)) / 11) + parseInt(x(339)) / 12 * (parseInt(x(319)) / 13) === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(E, 980108);
function L(n, t) {
  const x = E();
  return L = function(e, a) {
    return e = e - 297, x[e];
  }, L(n, t);
}
class l {
  constructor() {
  }
  static [f(302)](t, x, e) {
    const a = f;
    console[a(345)](a(320) + t + " %c " + x + a(354), a(350) + e + a(322) + e + a(328), a(340) + e + a(308) + e + ";", a(321));
  }
  static [f(330)]() {
    var s;
    const t = f, x = new Error(), e = ((s = x[t(355)]) == null ? void 0 : s[t(324)](`
`)) || [], a = (e[1] || "")[t(349)](/^\(|\)$/, "")[t(297)](), r = a.match(/^(.*):(\d+):(\d+)$/);
    return r ? r[0][t(324)]("/")[t(314)]() : "";
  }
  static [f(306)](t, x, e) {
    const a = J(x) ? e : t, r = J(x) ? t : x;
    return { _title: a, _text: r };
  }
  log(t, x = "") {
    const e = f, { _title: a, _text: r } = l[e(306)](t, x, e(343));
    l[e(302)](a, r, S[e(299)]);
  }
  [f(331)](t, x = "") {
    const e = f, { _title: a, _text: r } = l.init(t, x, e(300));
    l[e(302)](a, r, S[e(337)]);
  }
  [f(344)](t, x = "") {
    const e = f, { _title: a, _text: r } = l[e(306)](t, x, e(342));
    l[e(302)](a, r, S[e(298)]);
  }
  [f(346)](t = "") {
    const x = f;
    l[x(302)]("[" + v() + "]", t || x(335), S[x(312)]);
  }
  [f(341)](t, x = 1) {
    const e = f, a = new Image();
    a[e(318)] = e(333), a[e(317)] = () => {
      const r = e, s = document[r(351)](r(353)), o = s[r(347)]("2d");
      if (o) {
        s[r(307)] = a.width, s[r(332)] = a[r(332)], o.fillStyle = r(303), o[r(326)](0, 0, s.width, s[r(332)]), o.drawImage(a, 0, 0);
        const _ = s[r(323)](r(352));
        console[r(345)](r(315), r(348) + Math.floor(a.height * x / 2) + r(311) + Math[r(310)](a[r(307)] * x / 2) + r(325) + _ + r(301) + a[r(307)] * x + "px " + a[r(332)] * x + r(356));
      }
    }, a.src = t;
  }
}
const y = new l();
(function(n, t) {
  const x = i, e = n();
  for (; ; )
    try {
      if (-parseInt(x(469)) / 1 + parseInt(x(474)) / 2 * (parseInt(x(478)) / 3) + -parseInt(x(471)) / 4 + -parseInt(x(473)) / 5 + parseInt(x(466)) / 6 + -parseInt(x(460)) / 7 * (-parseInt(x(470)) / 8) + parseInt(x(476)) / 9 * (parseInt(x(480)) / 10) === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(V, 897681);
function V() {
  const n = ["indexOf", "parse", "7684080Igsrbv", "match", "function", "562762WTIgeV", "7122432rSTRxf", "4736488BurfIb", "test", "8198115COgYHj", "4kgLnmw", "error:", "27ezokhe", "string", "2355099EuzbOS", "SpeechSynthesisUtterance", "1810460SQWtwn", "7uIVxNq", "object", "Adr", "log"];
  return V = function() {
    return n;
  }, V();
}
function O0(n) {
  return /\.(doc|docx|xls|xlsx|ppt|pptx|pdf|txt|zip|rar|7z|gz|bz2|tar|iso|apk|mp3|mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/.test(n);
}
function c0(n) {
  return /\.(png|jpg|jpeg|gif|bmp|webp|svg|ico)$/.test(n);
}
function o0(n) {
  return /\.(mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[i(472)](n);
}
function i0(n) {
  return /\.(xls|xlsx|csv)$/[i(472)](n);
}
function u0(n) {
  return /\.(doc|docx)$/[i(472)](n);
}
function d0(n) {
  return /\.(pdf)$/[i(472)](n);
}
function f0(n) {
  return /\.(zip|rar|7z|tar|iso|apk)$/[i(472)](n);
}
function A0(n) {
  return /^(https?:|mailto:|tel:)/[i(472)](n);
}
function E0() {
  const n = i, t = navigator.userAgent;
  return t[n(464)]("Android") > -1 || t.indexOf(n(462)) > -1;
}
function L0() {
  const n = i;
  return !!navigator.userAgent[n(467)](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function V0(n) {
  return /^1[3456789]\d{9}$/[i(472)](n);
}
function z0(n) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/[i(472)](n);
}
function D0(n) {
  return /^[\u4e00-\u9fa5]+$/.test(n);
}
function N0(n) {
  return /^[a-zA-Z]+$/[i(472)](n);
}
function i(n, t) {
  const x = V();
  return i = function(e, a) {
    return e = e - 460, x[e];
  }, i(n, t);
}
function Y0(n) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/[i(472)](n);
}
function F0(n) {
  return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(n);
}
function $0(n) {
  return /^[a-z]+$/[i(472)](n);
}
function U0(n) {
  return /^[A-Z]+$/[i(472)](n);
}
function M0(n) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/[i(472)](n);
}
function q0(n) {
  const t = i;
  if (typeof n == t(477)) try {
    const x = JSON[t(465)](n);
    return !!(typeof x == t(461) && x);
  } catch (x) {
    return console[t(463)](t(475) + x), !1;
  }
  return !1;
}
function j0() {
  return window[i(479)] || typeof SpeechSynthesisUtterance != "function";
}
function H0() {
  const n = i;
  return "WebSocket" in window || typeof WebSocket !== n(468);
}
function P0(n) {
  return /^\S*(?=\S{5,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/[i(472)](n);
}
const W0 = (n) => /^(https?:|mailto:|tel:|\/\/)/[i(472)](n);
function z(n, t) {
  const x = D();
  return z = function(e, a) {
    return e = e - 154, x[e];
  }, z(n, t);
}
const u = z;
(function(n, t) {
  const x = z, e = n();
  for (; ; )
    try {
      if (parseInt(x(154)) / 1 * (-parseInt(x(170)) / 2) + parseInt(x(159)) / 3 + -parseInt(x(181)) / 4 * (-parseInt(x(172)) / 5) + parseInt(x(157)) / 6 + -parseInt(x(185)) / 7 * (-parseInt(x(165)) / 8) + -parseInt(x(162)) / 9 + -parseInt(x(160)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(D, 439878);
function D() {
  const n = ["setItem", "158976GAoEwn", "clearCookie", "; Max-Age=", "error", "toExponential", "186mSvhLC", "stringify", "2512020cpXvXm", "getKey", "getItem", "get", "=;expire=", "now", "storage", "removeCookie", "getCookie", "4mkYWto", "cookie", "toUTCString", "prefixKey", "21luYHfN", "split", "isLogger", "4129boGmSA", "setCookie", "Failed to copy text.", "2223912sFaoVb", "match", "2278443vEdIbK", "5555710TuYhVb", "clear", "2814363Sewuvp", "remove"];
  return D = function() {
    return n;
  }, D();
}
const R = 60 * 60 * 24 * 30;
var K;
class p0 {
  constructor(t = "", x = localStorage) {
    h(this, K);
    h(this, "storage");
    const e = u;
    this[e(184)] = t, this[e(178)] = x;
  }
  [(K = u(184), u(173))](t) {
    return "" + this[u(184)] + t;
  }
  set(t, x, e = R) {
    const a = u, r = JSON[a(171)]({ value: x, expire: e !== null ? (/* @__PURE__ */ new Date()).getTime() + e * 1e3 : null });
    this[a(178)][a(164)](this[a(173)](t), r);
  }
  [u(175)](t, x) {
    const e = u, a = this.storage[e(174)](this[e(173)](t));
    if (a) try {
      const r = JSON.parse(a), { value: s, expire: o } = r;
      if (o === null || o >= Date[e(177)]()) return s;
      this[e(163)](this.getKey(t));
    } catch (r) {
      return k[e(187)] && y[e(168)](e(156), JSON[e(171)](r)), x;
    }
    return x;
  }
  remove(t) {
    const x = u;
    this.storage.removeItem(this[x(173)](t));
  }
  [u(161)]() {
    const t = u;
    this[t(178)][t(161)]();
  }
  [u(155)](t, x, e = R[u(169)]) {
    const a = u;
    document.cookie = this[a(173)](t) + "=" + x + a(167) + e;
  }
  [u(180)](t) {
    const x = u, e = document[x(182)][x(186)]("; ");
    for (let a = 0, r = e.length; a < r; a++) {
      const s = e[a][x(186)]("=");
      if (s[0] === this[x(173)](t)) return s[1];
    }
    return "";
  }
  [u(179)](t) {
    this[u(155)](t, "", -1);
  }
  [u(166)]() {
    const t = u, x = document[t(182)][t(158)](/[^ =;]+(?==)/g);
    if (x) for (let e = x.length; e--; )
      document[t(182)] = x[e] + t(176) + (/* @__PURE__ */ new Date(0))[t(183)]();
  }
}
const J0 = new p0();
(function(n, t) {
  const x = w, e = n();
  for (; ; )
    try {
      if (parseInt(x(344)) / 1 + -parseInt(x(346)) / 2 + -parseInt(x(338)) / 3 * (-parseInt(x(332)) / 4) + parseInt(x(329)) / 5 * (parseInt(x(339)) / 6) + -parseInt(x(340)) / 7 + parseInt(x(349)) / 8 + -parseInt(x(337)) / 9 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(N, 231555);
function N() {
  const n = ["execCommand", "2679504BRSKuB", "value", "appendChild", "clipboard-write", "76610kppioy", "replace", "stringify", "8VSFWKN", "isLogger", "clipboard", "copy", "createElement", "3204207LVMrkv", "659535FMdUkt", "12txHnxC", "1708245fZPrxt", "error", "then", "removeChild", "41733hOngap", "ws://", "30784jVdGhb", "wss://"];
  return N = function() {
    return n;
  }, N();
}
function R0(n) {
  const t = w, { text: x, success: e, error: a } = n, { isSupported: r, copy: s } = n0({ source: x });
  if (r || a0(t(352)), navigator[t(334)]) s(x)[t(342)](() => {
    e && e();
  }).catch(() => {
    a && a();
  });
  else try {
    const o = document[t(336)]("input");
    o.setAttribute(t(350), x), document.body[t(351)](o), o.select(), document[t(348)](t(335)), document.body[t(343)](o), e && e();
  } catch (o) {
    k[t(333)] && y[t(341)]("Failed to copy text.", JSON[t(331)](o)), a && a();
  }
}
function w(n, t) {
  const x = N();
  return w = function(e, a) {
    return e = e - 329, x[e];
  }, w(n, t);
}
function K0(n) {
  const t = w;
  return n[t(330)](/^(http|https):\/\//, (x) => t(x === "http://" ? 345 : 347));
}
(function(n, t) {
  const x = Y, e = n();
  for (; ; )
    try {
      if (parseInt(x(450)) / 1 * (parseInt(x(442)) / 2) + -parseInt(x(444)) / 3 * (-parseInt(x(445)) / 4) + parseInt(x(441)) / 5 * (-parseInt(x(439)) / 6) + parseInt(x(443)) / 7 + parseInt(x(440)) / 8 + parseInt(x(447)) / 9 + -parseInt(x(449)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(F, 722515);
function Y(n, t) {
  const x = F();
  return Y = function(e, a) {
    return e = e - 438, x[e];
  }, Y(n, t);
}
function F() {
  const n = ["4yGatfw", "toString", "12078630drMLbC", "replace", "18811370moGhWQ", "80110sYGMmp", "split", "length", "17070QuxBZL", "5470056epVrlr", "565xuzfjr", "2uzjQEv", "454062dLidlH", "2263002tYrHLX"];
  return F = function() {
    return n;
  }, F();
}
function Z0(n) {
  const t = Y, x = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"], e = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万", "十", "百", "千", "亿"];
  if (!n || isNaN(Number(n))) return "零";
  const a = n[t(446)]()[t(451)]("");
  let r = "";
  for (let s = 0; s < a.length; s++) {
    const o = a[t(438)] - 1 - s;
    r = e[s] + r;
    const _ = a[o];
    r = x[Number(_)] + r;
  }
  return r = r.replace(/零(千|百|十)/g, "零")[t(448)](/十零/g, "十"), r = r[t(448)](/零+/g, "零"), r = r[t(448)](/零亿/g, "亿")[t(448)](/零万/g, "万"), r = r[t(448)](/亿万/g, "亿"), r = r.replace(/零+$/, ""), r = r[t(448)](/^一十/g, "十"), r;
}
const d = U;
function $() {
  const n = ["baseConfig", "8CkWlNp", "post", "interceptorsResponse", "interceptorsRequest", "create", "error", "Request instance has been created.", "1134265vDHLSj", "interceptors", "36yspJEo", "use", "assign", "request", "350799yiLeOn", "86740IlCYVR", "955540AspLmz", "get", "790815LGnFss", "12opdUlA", "18uoVSRT", "instance", "1720957lPBIhm", "delete", "71544qfTyDV", "put", "isLogger"];
  return $ = function() {
    return n;
  }, $();
}
function U(n, t) {
  const x = $();
  return U = function(e, a) {
    return e = e - 292, x[e];
  }, U(n, t);
}
(function(n, t) {
  const x = U, e = n();
  for (; ; )
    try {
      if (parseInt(x(309)) / 1 + parseInt(x(292)) / 2 * (parseInt(x(315)) / 3) + -parseInt(x(310)) / 4 + -parseInt(x(313)) / 5 * (parseInt(x(314)) / 6) + parseInt(x(317)) / 7 * (-parseInt(x(296)) / 8) + parseInt(x(305)) / 9 * (parseInt(x(311)) / 10) + -parseInt(x(303)) / 11 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($, 260670);
var Z, B;
class B0 {
  constructor(t) {
    h(this, B, null);
    h(this, Z, { baseURL: "", timeout: 6e4 });
    const x = d;
    this[x(316)] ? k[x(294)] && y[x(301)](x(302)) : this[x(316)] = r0[x(300)](Object[x(307)](this[x(295)], t ?? {}));
  }
  [(B = d(316), Z = d(295), d(299))](t, x) {
    const e = d;
    this[e(316)][e(304)][e(308)].use((a) => t ? t(a) : a, (a) => x ? x(a) : a);
  }
  [d(298)](t, x) {
    const e = d;
    this[e(316)][e(304)].response[e(306)]((a) => {
      const { data: r } = a;
      return t ? t(r) : r;
    }, (a) => x ? x(a) : a);
  }
  request(t) {
    const x = d;
    return this.instance[x(308)](t);
  }
  [d(312)](t, x) {
    const e = d;
    return this[e(316)][e(312)](t, x);
  }
  [d(297)](t, x, e) {
    const a = d;
    return this.instance[a(297)](t, x, e);
  }
  [d(293)](t, x, e) {
    const a = d;
    return this[a(316)][a(293)](t, x, e);
  }
  [d(318)](t, x) {
    const e = d;
    return this[e(316)][e(318)](t, x);
  }
}
(function(n, t) {
  for (var x = H, e = n(); ; )
    try {
      var a = -parseInt(x(300)) / 1 + -parseInt(x(306)) / 2 + parseInt(x(299)) / 3 + parseInt(x(301)) / 4 + -parseInt(x(305)) / 5 * (parseInt(x(303)) / 6) + -parseInt(x(302)) / 7 + -parseInt(x(304)) / 8 * (-parseInt(x(307)) / 9);
      if (a === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(M, 322128);
function M() {
  var n = ["923448jvfAmh", "922537puvkFA", "2266422YiqIHF", "1512eNLkJz", "5TthPSO", "159582BjOywa", "49923oMNHeq", "384036YHxMyL", "495810JJxwJf"];
  return M = function() {
    return n;
  }, M();
}
function H(n, t) {
  var x = M();
  return H = function(e, a) {
    e = e - 299;
    var r = x[e];
    return r;
  }, H(n, t);
}
const I = q;
function q(n, t) {
  const x = j();
  return q = function(e, a) {
    return e = e - 125, x[e];
  }, q(n, t);
}
(function(n, t) {
  const x = q, e = n();
  for (; ; )
    try {
      if (-parseInt(x(127)) / 1 + -parseInt(x(140)) / 2 + -parseInt(x(134)) / 3 + parseInt(x(135)) / 4 + parseInt(x(136)) / 5 * (-parseInt(x(129)) / 6) + -parseInt(x(126)) / 7 + parseInt(x(125)) / 8 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(j, 184752);
var G, Q, X;
const p = class p {
  constructor(t) {
    const x = I, { isLogger: e, isDebug: a, vueVersion: r = "v3", apikey: s, install: o } = t;
    p[x(128)] = e ?? !1, p[x(132)] = a ?? !1, p[x(137)] = r ?? "v3", this.installFundebugVue(s) && o && o(this[x(133)](s));
  }
  [(X = I(128), Q = I(132), G = I(137), I(133))](t) {
    const x = I;
    return p[x(132)] ? t ? ["v2", "v3"][x(141)](p.vueVersion) ? (P[x(131)]({ apikey: t }), new e0(P)) : (p[x(128)] && y.error(x(130)), null) : (p[x(128)] && y[x(138)](x(139)), null) : null;
  }
};
h(p, X), h(p, Q), h(p, G);
let k = p;
function j() {
  const n = ["14988FUczIF", "vue版本不支持, 目前只支持vue: >= v2 || >= v3", "init", "isDebug", "installFundebugVue", "605073NwUHRH", "562384cUbAiA", "460VlUSfe", "vueVersion", "error", "apikey 不能为空， 请在环境变量中配置", "140480pNZTsL", "includes", "6675664oGrQXI", "322798XZjSvG", "242441FIvpWV", "isLogger"];
  return j = function() {
    return n;
  }, j();
}
export {
  N0 as A,
  Y0 as B,
  F0 as C,
  $0 as D,
  U0 as E,
  M0 as F,
  q0 as G,
  P0 as H,
  k as I,
  W0 as J,
  R0 as K,
  Z0 as L,
  B0 as R,
  J0 as S,
  j0 as a,
  H0 as b,
  s0 as c,
  y0 as d,
  w0 as e,
  k0 as f,
  v as g,
  K0 as h,
  L0 as i,
  S0 as j,
  T0 as k,
  y as l,
  T as m,
  C0 as n,
  O0 as o,
  c0 as p,
  o0 as q,
  i0 as r,
  u0 as s,
  d0 as t,
  f0 as u,
  A0 as v,
  E0 as w,
  V0 as x,
  z0 as y,
  D0 as z
};
