var x0 = Object.defineProperty;
var t0 = (n, t, x) => t in n ? x0(n, t, { enumerable: !0, configurable: !0, writable: !0, value: x }) : n[t] = x;
var h = (n, t, x) => t0(n, typeof t != "symbol" ? t + "" : t, x);
import * as J from "fundebug-javascript";
import e0 from "fundebug-vue";
import { isString as N, isEmpty as Q } from "lodash-es";
import a from "dayjs";
import { ETimePeriodType as b, ELoggerColor as k } from "./enums/es/index.js";
import { useClipboard as n0, usePermission as r0 } from "@vueuse/core";
import s0 from "axios";
(function(n, t) {
  const x = m, e = n();
  for (; ; )
    try {
      if (parseInt(x(150)) / 1 + parseInt(x(168)) / 2 * (-parseInt(x(177)) / 3) + -parseInt(x(159)) / 4 + -parseInt(x(173)) / 5 + parseInt(x(147)) / 6 * (-parseInt(x(161)) / 7) + parseInt(x(174)) / 8 * (-parseInt(x(144)) / 9) + parseInt(x(160)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(S, 632362);
function c0(n) {
  const t = m;
  return Array[t(166)](n) ? n : n[t(163)](",").filter((x) => x);
}
function y0(n) {
  return new Promise((t) => {
    const x = m, e = document[x(169)](x(143));
    e[x(184)] = n, e[x(162)] = x(156), e[x(176)] = x(154), e[x(171)] = 0.1, e[x(153)](x(148), () => {
      var c;
      const r = x, s = document.createElement("canvas");
      s[r(164)] = e[r(183)], s[r(182)] = e[r(157)], (c = s[r(180)]("2d")) == null || c[r(178)](e, 0, 0, s[r(164)], s[r(182)]), t(s[r(149)]());
    });
  });
}
function v0(n, t = 200, x = 200, e = 75) {
  const r = m;
  return n ? n.indexOf(r(186)) !== -1 ? n + r(151) + t + r(145) + x + r(185) + e : n + r(181) + t + r(188) + x + "/q/" + e : "";
}
function T0(n, t = "") {
  const x = m, e = n.split(x(187)), r = e[0].split(":")[1], s = atob(e[1]), c = Array[x(179)]({ length: s.length });
  for (let _ = 0; _ < s[x(167)]; _++)
    c[_] = s[x(172)](_);
  const i = new Uint8Array(c);
  return new File([i], t, { type: r });
}
function m(n, t) {
  const x = S();
  return m = function(e, r) {
    return e = e - 143, x[e];
  }, m(n, t);
}
function k0(n, t) {
  const x = m;
  N(n) && (n = c0(n));
  const e = n[x(165)]((r) => {
    const s = x, c = N(r) ? r : r[s(158)];
    if (t === s(175)) return a0(c);
    if (t === "video") return o0(c);
    if (t === s(152)) return i0(c);
    if (t === s(170)) return u0(c);
    if (t === s(155)) return f0(c);
    if (t === s(146)) return d0(c);
  });
  return [e, e[x(167)]];
}
function S() {
  const n = ["width", "filter", "isArray", "length", "250JlcoAF", "createElement", "isDocs", "currentTime", "charCodeAt", "1193655FpbXtp", "9886128EdYmzU", "image", "preload", "10767zpfsRV", "drawImage", "from", "getContext", "?imageView2/2/w/", "height", "videoWidth", "src", ",limit_0/quality,q_", "oss-cn", ";base64,", "/h/", "video", "9dEfuaN", ",h_", "isZip", "6yptzue", "loadeddata", "toDataURL", "972624ualySw", "?x-oss-process=image/resize,w_", "isExcel", "addEventListener", "auto", "isPdf", "anonymous", "videoHeight", "url", "500992zDYgge", "29016350vPniLa", "8354689rIFFIH", "crossOrigin", "split"];
  return S = function() {
    return n;
  }, S();
}
const I = y;
(function(n, t) {
  const x = y, e = n();
  for (; ; )
    try {
      if (-parseInt(x(462)) / 1 * (parseInt(x(435)) / 2) + -parseInt(x(465)) / 3 * (parseInt(x(457)) / 4) + parseInt(x(431)) / 5 * (-parseInt(x(436)) / 6) + -parseInt(x(432)) / 7 + -parseInt(x(441)) / 8 + parseInt(x(459)) / 9 + parseInt(x(458)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(E, 353768);
function E() {
  const n = ["day", "4520544HpNazy", "year", "上季度", "add", "lastYear", "push", "本季度", "lastWeek", "endOf", "nearYear", "second", "lastThreeMonth", "end", "nearMonth", "date", "nearQuarter", "613688GsZusi", "15257020cLqhLW", "5350023ciKTpD", "month", "subtract", "8252mQbMji", "lastQuarter", "lastOneMonth", "6JlmQou", "start", "70025OPseuV", "2875614MQeBvI", "YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss", "12VkcxhQ", "186OdORPM", "startOf", "format", "week"];
  return E = function() {
    return n;
  }, E();
}
function C0() {
  const n = y, t = a(), x = t[n(442)](), e = t[n(460)]() + 1, r = t[n(455)](), s = t.hour(), c = t.minute(), i = t[n(451)](), _ = t[n(440)]();
  return { year: x, month: e, day: r, hour: s, minute: c, second: i, week: _, weekName: ["日", "一", "二", "三", "四", "五", "六"] };
}
function w(n = /* @__PURE__ */ new Date(), t = I(434)) {
  const x = I;
  return a(n)[x(438)](t);
}
function y(n, t) {
  const x = E();
  return y = function(e, r) {
    return e = e - 431, x[e];
  }, y(n, t);
}
function C(n = I(433)) {
  const t = I, x = [], e = a()[t(460)]() + 1;
  return e <= 3 ? x[t(446)]({ name: t(447), start: a().month(0)[t(437)]("month").format(n), end: a().month(2)[t(449)](t(460))[t(438)](n) }, { name: t(443), start: a().add(-1, t(442))[t(460)](9)[t(437)]("month")[t(438)](n), end: a()[t(444)](-1, t(442))[t(460)](11)[t(449)](t(460))[t(438)](n) }) : e <= 6 ? x[t(446)]({ name: t(447), start: a().month(3)[t(437)](t(460)).format(n), end: a()[t(460)](5)[t(449)](t(460)).format(n) }, { name: "上季度", start: a()[t(460)](0)[t(437)]("month")[t(438)](n), end: a()[t(460)](2).endOf(t(460))[t(438)](n) }) : e <= 9 ? x[t(446)]({ name: t(447), start: a().month(6)[t(437)](t(460))[t(438)](n), end: a()[t(460)](8)[t(449)](t(460)).format(n) }, { name: t(443), start: a()[t(460)](3)[t(437)](t(460))[t(438)](n), end: a()[t(460)](5)[t(449)](t(460)).format(n) }) : e <= 12 && x[t(446)]({ name: t(447), start: a()[t(460)](9)[t(437)](t(460))[t(438)](n), end: a()[t(460)](11)[t(449)]("month").format(n) }, { name: t(443), start: a()[t(460)](6)[t(437)](t(460)).format(n), end: a()[t(460)](8)[t(449)](t(460)).format(n) }), x;
}
function S0(n, t = I(433)) {
  const x = I;
  switch (n) {
    case b[x(464)]:
      return { startTime: a()[x(461)](30, x(440))[x(438)](t), endTime: w(/* @__PURE__ */ new Date(), t) };
    case b[x(452)]:
      return { startTime: a()[x(461)](90, x(440))[x(438)](t), endTime: w(/* @__PURE__ */ new Date(), t) };
    case b.lastOneYear:
      return { startTime: a()[x(461)](365, x(440))[x(438)](t), endTime: w(/* @__PURE__ */ new Date(), t) };
    case b[x(448)]:
      return { startTime: a()[x(444)](-1, x(439))[x(437)]("week")[x(444)](1, x(440))[x(438)](t), endTime: a().add(-1, x(439))[x(449)](x(439))[x(444)](1, x(440))[x(438)](t) };
    case b.lastMonth:
      return { startTime: a()[x(444)](-1, x(460)).startOf(x(460))[x(438)](t), endTime: a()[x(444)](-1, x(460))[x(449)](x(460))[x(438)](t) };
    case b[x(463)]:
      return { startTime: C(t)[1][x(466)], endTime: C(t)[1][x(453)] };
    case b[x(445)]:
      return { startTime: a()[x(444)](-1, x(442))[x(437)](x(442))[x(438)](t), endTime: a()[x(444)](-1, x(442))[x(449)](x(442))[x(438)](t) };
    case b.nearWeek:
      return { startTime: a().startOf(x(439))[x(444)](1, x(440))[x(438)](t), endTime: a()[x(449)](x(439))[x(444)](1, "day").format(t) };
    case b[x(454)]:
      return { startTime: a()[x(437)](x(460))[x(438)](t), endTime: a()[x(449)](x(460))[x(438)](t) };
    case b[x(456)]:
      return { startTime: C(t)[0].start, endTime: C(t)[0][x(453)] };
    case b[x(450)]:
      return { startTime: a()[x(437)](x(442))[x(438)](t), endTime: a()[x(449)]("year")[x(438)](t) };
    default:
      return { startTime: a().subtract(30, x(440))[x(438)](t), endTime: w(/* @__PURE__ */ new Date(), t) };
  }
}
const d = D;
(function(n, t) {
  const x = D, e = n();
  for (; ; )
    try {
      if (parseInt(x(233)) / 1 * (-parseInt(x(260)) / 2) + parseInt(x(275)) / 3 + -parseInt(x(262)) / 4 + parseInt(x(264)) / 5 + parseInt(x(232)) / 6 + -parseInt(x(237)) / 7 + -parseInt(x(250)) / 8 * (parseInt(x(280)) / 9) === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(O, 920165);
function D(n, t) {
  const x = O();
  return D = function(e, r) {
    return e = e - 232, x[e];
  }, D(n, t);
}
class l {
  constructor() {
  }
  static [d(239)](t, x, e) {
    const r = d;
    console[r(246)](r(254) + t + r(277) + x + r(273), "background:" + e + r(249) + e + r(245), r(256) + e + "; padding: 1px; border-radius: 0 2px 2px 0; color: " + e + ";", r(236));
  }
  static [d(276)]() {
    var c;
    const t = d, x = new Error(), e = ((c = x.stack) == null ? void 0 : c.split(`
`)) || [], r = (e[1] || "")[t(243)](/^\(|\)$/, "")[t(248)](), s = r.match(/^(.*):(\d+):(\d+)$/);
    return s ? s[0].split("/")[t(270)]() : "";
  }
  static [d(274)](t, x, e) {
    const r = Q(x) ? e : t, s = Q(x) ? t : x;
    return { _title: r, _text: s };
  }
  [d(246)](t, x = "") {
    const e = d, { _title: r, _text: s } = l.init(t, x, e(272));
    l[e(239)](r, s, k[e(238)]);
  }
  error(t, x = "") {
    const e = d, { _title: r, _text: s } = l[e(274)](t, x, e(271));
    l[e(239)](r, s, k[e(235)]);
  }
  [d(261)](t, x = "") {
    const e = d, { _title: r, _text: s } = l[e(274)](t, x, e(266));
    l[e(239)](r, s, k.warning);
  }
  [d(263)](t = "") {
    const x = d;
    l[x(239)]("[" + w() + "]", t || x(259), k[x(242)]);
  }
  [d(269)](t, x = 1) {
    const e = d, r = new Image();
    r[e(267)] = e(268), r.onload = () => {
      const s = e, c = document[s(279)](s(278)), i = c[s(234)]("2d");
      if (i) {
        c[s(244)] = r[s(244)], c[s(253)] = r[s(253)], i.fillStyle = s(257), i.fillRect(0, 0, c.width, c.height), i[s(251)](r, 0, 0);
        const _ = c.toDataURL(s(258));
        console.log("%c sup?", s(255) + Math.floor(r[s(253)] * x / 2) + "px " + Math[s(240)](r[s(244)] * x / 2) + `px;
                background-image: url(` + _ + s(247) + r.width * x + s(252) + r.height * x + s(241));
      }
    }, r[e(265)] = t;
  }
}
const F = new l();
function O() {
  const n = ["anonymous", "img", "pop", "Error", "Log", " %c", "init", "3557835ZoWEve", "logCaller", " %c ", "canvas", "createElement", "531wQOAQZ", "8977776zkphuv", "3ZfQSVr", "getContext", "danger", "background:transparent", "8059492OeLgAx", "info", "prettyLog", "floor", `px;
                color: transparent;
                `, "default", "replace", "width", "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;", "log", `);
                background-repeat: no-repeat;
                background-size: `, "trim", ";border:1px solid ", "19576CzjgHn", "drawImage", "px ", "height", "%c ", `font-size: 1px;
                padding: `, "border:1px solid ", "red", "image/png", "Debug", "635844hscOPt", "warn", "4487488ikDwsQ", "debug", "8046455uZcqop", "src", "Warn", "crossOrigin"];
  return O = function() {
    return n;
  }, O();
}
(function(n, t) {
  const x = o, e = n();
  for (; ; )
    try {
      if (-parseInt(x(347)) / 1 * (-parseInt(x(346)) / 2) + -parseInt(x(356)) / 3 * (parseInt(x(360)) / 4) + -parseInt(x(366)) / 5 + -parseInt(x(364)) / 6 * (parseInt(x(352)) / 7) + parseInt(x(349)) / 8 * (parseInt(x(358)) / 9) + -parseInt(x(359)) / 10 + parseInt(x(350)) / 11 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(z, 645571);
function E0(n) {
  return /\.(doc|docx|xls|xlsx|ppt|pptx|pdf|txt|zip|rar|7z|gz|bz2|tar|iso|apk|mp3|mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[o(355)](n);
}
function a0(n) {
  return /\.(png|jpg|jpeg|gif|bmp|webp|svg|ico)$/[o(355)](n);
}
function o0(n) {
  return /\.(mp4|avi|wmv|rmvb|mov|flv|asf|3gp|mkv)$/[o(355)](n);
}
function z() {
  const n = ["16UGEvkD", "error:", "80wwtHtM", "26884055nSxVyW", "match", "91woawCs", "userAgent", "function", "test", "453prcTOu", "string", "56718wwMCoq", "9965580dfdqfJ", "16388iuudEG", "indexOf", "WebSocket", "SpeechSynthesisUtterance", "163272ciAtHm", "Adr", "1447585DasYMt", "object", "log", "49628eWUOdT"];
  return z = function() {
    return n;
  }, z();
}
function i0(n) {
  return /\.(xls|xlsx|csv)$/[o(355)](n);
}
function u0(n) {
  return /\.(doc|docx)$/[o(355)](n);
}
function f0(n) {
  return /\.(pdf)$/[o(355)](n);
}
function d0(n) {
  return /\.(zip|rar|7z|tar|iso|apk)$/.test(n);
}
function D0(n) {
  return /^(https?:|mailto:|tel:)/[o(355)](n);
}
function O0() {
  const n = o, t = navigator[n(353)];
  return t.indexOf("Android") > -1 || t[n(361)](n(365)) > -1;
}
function z0() {
  const n = o;
  return !!navigator.userAgent[n(351)](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
function M0(n) {
  return /^1[3456789]\d{9}$/[o(355)](n);
}
function A0(n) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n);
}
function P0(n) {
  return /^[\u4e00-\u9fa5]+$/[o(355)](n);
}
function Y0(n) {
  return /^[a-zA-Z]+$/.test(n);
}
function $0(n) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/[o(355)](n);
}
function q0(n) {
  return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/[o(355)](n);
}
function L0(n) {
  return /^[a-z]+$/[o(355)](n);
}
function W0(n) {
  return /^[A-Z]+$/[o(355)](n);
}
function U0(n) {
  return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(n);
}
function o(n, t) {
  const x = z();
  return o = function(e, r) {
    return e = e - 346, x[e];
  }, o(n, t);
}
function Z0(n) {
  const t = o;
  if (typeof n == t(357)) try {
    const x = JSON.parse(n);
    return !!(typeof x == t(367) && x);
  } catch (x) {
    return console[t(368)](t(348) + x), !1;
  }
  return !1;
}
function F0() {
  const n = o;
  return window[n(363)] || typeof SpeechSynthesisUtterance !== n(354);
}
function V0() {
  const n = o;
  return n(362) in window || typeof WebSocket !== n(354);
}
function J0(n) {
  return /^\S*(?=\S{5,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/[o(355)](n);
}
const u = A;
(function(n, t) {
  const x = A, e = n();
  for (; ; )
    try {
      if (-parseInt(x(279)) / 1 * (parseInt(x(300)) / 2) + -parseInt(x(271)) / 3 * (parseInt(x(305)) / 4) + -parseInt(x(274)) / 5 + parseInt(x(277)) / 6 * (parseInt(x(285)) / 7) + -parseInt(x(273)) / 8 + -parseInt(x(299)) / 9 + parseInt(x(296)) / 10 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(M, 568632);
function M() {
  const n = ["=;expire=", "28574950wJVvPz", "isLogger", "removeCookie", "7862193IEIKIN", "11738qYOtaq", "getKey", "; Max-Age=", "split", "storage", "60EYMbQW", "clear", "setItem", "length", "124359waLdxl", "prefixKey", "5600840qUUvxC", "3482375vkfxcq", "getCookie", "error", "4398HfxnCy", "toExponential", "34vNIhRd", "match", "getItem", "set", "clearCookie", "removeItem", "7665aYUjQg", "setCookie", "remove", "stringify", "get", "Failed to copy text.", "now", "cookie", "parse", "toUTCString"];
  return M = function() {
    return n;
  }, M();
}
function A(n, t) {
  const x = M();
  return A = function(e, r) {
    return e = e - 268, x[e];
  }, A(n, t);
}
const R = 60 * 60 * 24 * 30;
var K, j;
class b0 {
  constructor(t = "", x = localStorage) {
    h(this, j);
    h(this, K);
    const e = u;
    this[e(272)] = t, this[e(304)] = x;
  }
  getKey(t) {
    return "" + this[u(272)] + t;
  }
  [(j = u(272), K = u(304), u(282))](t, x, e = R) {
    const r = u, s = JSON[r(288)]({ value: x, expire: e !== null ? (/* @__PURE__ */ new Date()).getTime() + e * 1e3 : null });
    this[r(304)][r(269)](this[r(301)](t), s);
  }
  [u(289)](t, x) {
    const e = u, r = this.storage[e(281)](this[e(301)](t));
    if (r) try {
      const s = JSON[e(293)](r), { value: c, expire: i } = s;
      if (i === null || i >= Date[e(291)]()) return c;
      this[e(287)](this[e(301)](t));
    } catch (s) {
      return T[e(297)] && F[e(276)](e(290), JSON.stringify(s)), x;
    }
    return x;
  }
  [u(287)](t) {
    const x = u;
    this[x(304)][x(284)](this[x(301)](t));
  }
  [u(268)]() {
    const t = u;
    this[t(304)][t(268)]();
  }
  [u(286)](t, x, e = R[u(278)]) {
    const r = u;
    document[r(292)] = this.getKey(t) + "=" + x + r(302) + e;
  }
  [u(275)](t) {
    const x = u, e = document[x(292)][x(303)]("; ");
    for (let r = 0, s = e[x(270)]; r < s; r++) {
      const c = e[r][x(303)]("=");
      if (c[0] === this.getKey(t)) return c[1];
    }
    return "";
  }
  [u(298)](t) {
    this.setCookie(t, "", -1);
  }
  [u(283)]() {
    const t = u, x = document[t(292)][t(280)](/[^ =;]+(?==)/g);
    if (x) for (let e = x.length; e--; )
      document[t(292)] = x[e] + t(295) + (/* @__PURE__ */ new Date(0))[t(294)]();
  }
}
const N0 = new b0();
function v(n, t) {
  const x = P();
  return v = function(e, r) {
    return e = e - 244, x[e];
  }, v(n, t);
}
(function(n, t) {
  const x = v, e = n();
  for (; ; )
    try {
      if (-parseInt(x(244)) / 1 * (parseInt(x(266)) / 2) + -parseInt(x(270)) / 3 * (parseInt(x(253)) / 4) + parseInt(x(263)) / 5 * (-parseInt(x(260)) / 6) + parseInt(x(257)) / 7 + -parseInt(x(247)) / 8 * (parseInt(x(251)) / 9) + parseInt(x(271)) / 10 * (-parseInt(x(268)) / 11) + parseInt(x(261)) / 12 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(P, 974999);
function Q0(n) {
  const t = v, { text: x, success: e, error: r } = n, { isSupported: s, copy: c } = n0({ source: x });
  if (s || r0(t(248)), navigator.clipboard) c(x)[t(267)](() => {
    e && e();
  })[t(254)](() => {
    r && r();
  });
  else try {
    const i = document[t(269)]("input");
    i[t(245)](t(246), x), document[t(250)][t(259)](i), i[t(264)](), document.execCommand("copy"), document[t(250)].removeChild(i), e && e();
  } catch (i) {
    T[t(265)] && F[t(256)](t(262), JSON[t(252)](i)), r && r();
  }
}
function R0(n) {
  const t = v;
  return n[t(258)](/^(http|https):\/\//, (x) => x === t(255) ? t(272) : t(249));
}
function P() {
  const n = ["Failed to copy text.", "5hzKbST", "select", "isLogger", "733292vJIXnY", "then", "291049Ynfwxp", "createElement", "75FqcPQP", "330qstitD", "ws://", "1dackru", "setAttribute", "value", "32dyhTHC", "clipboard-write", "wss://", "body", "2793771elyPdJ", "stringify", "241288gpZqMs", "catch", "http://", "error", "12235909GejMkq", "replace", "appendChild", "4583622aGMeLb", "47765616wPZWmT"];
  return P = function() {
    return n;
  }, P();
}
(function(n, t) {
  const x = Y, e = n();
  for (; ; )
    try {
      if (parseInt(x(266)) / 1 * (parseInt(x(264)) / 2) + -parseInt(x(262)) / 3 * (-parseInt(x(256)) / 4) + parseInt(x(258)) / 5 * (-parseInt(x(259)) / 6) + -parseInt(x(265)) / 7 * (parseInt(x(257)) / 8) + -parseInt(x(260)) / 9 + -parseInt(x(269)) / 10 + parseInt(x(261)) / 11 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})($, 995422);
function K0(n) {
  const t = Y, x = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"], e = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万", "十", "百", "千", "亿"];
  if (!n || isNaN(Number(n))) return "零";
  const r = n.toString()[t(268)]("");
  let s = "";
  for (let c = 0; c < r[t(263)]; c++) {
    const i = r[t(263)] - 1 - c;
    s = e[c] + s;
    const _ = r[i];
    s = x[Number(_)] + s;
  }
  return s = s[t(267)](/零(千|百|十)/g, "零")[t(267)](/十零/g, "十"), s = s[t(267)](/零+/g, "零"), s = s[t(267)](/零亿/g, "亿")[t(267)](/零万/g, "万"), s = s[t(267)](/亿万/g, "亿"), s = s[t(267)](/零+$/, ""), s = s[t(267)](/^一十/g, "十"), s;
}
function Y(n, t) {
  const x = $();
  return Y = function(e, r) {
    return e = e - 256, x[e];
  }, Y(n, t);
}
function $() {
  const n = ["103942mDXoWv", "3139094mhdute", "17TMMBCW", "replace", "split", "10423260pnBTdB", "12YaZrhm", "32ZaJglz", "1755785ydWoiu", "6KYzqeL", "2781297fCDqCJ", "28883283PSbuEB", "982446hukxkm", "length"];
  return $ = function() {
    return n;
  }, $();
}
const f = L;
(function(n, t) {
  const x = L, e = n();
  for (; ; )
    try {
      if (parseInt(x(309)) / 1 + parseInt(x(302)) / 2 + parseInt(x(306)) / 3 + parseInt(x(298)) / 4 + -parseInt(x(299)) / 5 + -parseInt(x(308)) / 6 + -parseInt(x(310)) / 7 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(q, 769298);
function q() {
  const n = ["interceptors", "406602iyRSfw", "response", "put", "request", "4487838azCtWz", "get", "4951746hpCEor", "872061kVPTba", "607579JUQRFM", "post", "delete", "baseConfig", "isLogger", "Request instance has been created.", "interceptorsRequest", "error", "create", "use", "1235044vjLLwu", "5993415uduDjP", "instance"];
  return q = function() {
    return n;
  }, q();
}
function L(n, t) {
  const x = q();
  return L = function(e, r) {
    return e = e - 291, x[e];
  }, L(n, t);
}
var H, B;
class j0 {
  constructor(t) {
    h(this, B, null);
    h(this, H, { baseURL: "", timeout: 6e4 });
    const x = f;
    this.instance ? T[x(292)] && F[x(295)](x(293)) : this.instance = s0[x(296)](Object.assign(this[x(291)], t ?? {}));
  }
  [(B = f(300), H = f(291), f(294))](t, x) {
    const e = f;
    this.instance[e(301)][e(305)][e(297)]((r) => t ? t(r) : r, (r) => x ? x(r) : r);
  }
  interceptorsResponse(t, x) {
    const e = f;
    this.instance[e(301)][e(303)][e(297)]((r) => {
      const { data: s } = r;
      return t ? t(s) : s;
    }, (r) => x ? x(r) : r);
  }
  [f(305)](t) {
    const x = f;
    return this.instance[x(305)](t);
  }
  [f(307)](t, x) {
    return this[f(300)].get(t, x);
  }
  [f(311)](t, x, e) {
    const r = f;
    return this[r(300)][r(311)](t, x, e);
  }
  [f(304)](t, x, e) {
    const r = f;
    return this[r(300)][r(304)](t, x, e);
  }
  [f(312)](t, x) {
    const e = f;
    return this[e(300)][e(312)](t, x);
  }
}
(function(n, t) {
  for (var x = V, e = n(); ; )
    try {
      var r = -parseInt(x(463)) / 1 * (-parseInt(x(465)) / 2) + -parseInt(x(458)) / 3 + -parseInt(x(468)) / 4 * (-parseInt(x(464)) / 5) + -parseInt(x(461)) / 6 * (parseInt(x(469)) / 7) + -parseInt(x(467)) / 8 + parseInt(x(466)) / 9 * (-parseInt(x(462)) / 10) + parseInt(x(459)) / 11 * (parseInt(x(460)) / 12);
      if (r === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(W, 277950);
function W() {
  var n = ["75583wpPkTb", "15715tlrVTF", "10tusWQf", "3339gZWzKi", "3704EyRtLi", "284Baoepu", "126fAuuEM", "165288OCEvfn", "1276xIlEuu", "4128DWJtHo", "48198OLNJRy", "4390EQEeOV"];
  return W = function() {
    return n;
  }, W();
}
function V(n, t) {
  var x = W();
  return V = function(e, r) {
    e = e - 458;
    var s = x[e];
    return s;
  }, V(n, t);
}
function U(n, t) {
  const x = Z();
  return U = function(e, r) {
    return e = e - 163, x[e];
  }, U(n, t);
}
const g = U;
(function(n, t) {
  const x = U, e = n();
  for (; ; )
    try {
      if (-parseInt(x(180)) / 1 + parseInt(x(169)) / 2 * (parseInt(x(174)) / 3) + parseInt(x(177)) / 4 * (-parseInt(x(171)) / 5) + -parseInt(x(179)) / 6 * (parseInt(x(167)) / 7) + parseInt(x(163)) / 8 + -parseInt(x(166)) / 9 * (parseInt(x(178)) / 10) + parseInt(x(181)) / 11 === t) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Z, 270580);
function Z() {
  const n = ["error", "526c4e4fad4df5f8e1ed8f102a938a1e6ee0cd443fb7ff5cce69cf0524ae77ec", "8SKwjrg", "130lyZwmo", "12sOTiPY", "202579ZaYKaW", "8848587hMRnyg", "isDebug", "2183616RZFCUh", "isLogger", "vue版本不支持, 目前只支持vue: >= v2 || >= v3", "107739wsgzZK", "640787LLgrQi", "installFundebugVue", "6LOKyPN", "vueVersion", "731945jXhGpv", "includes", "init", "27273kkoNkD"];
  return Z = function() {
    return n;
  }, Z();
}
var G, X;
const p = class p {
  constructor(t) {
    const x = g, { isLogger: e, isDebug: r, vueVersion: s = "v3", install: c } = t;
    p[x(164)] = e ?? !1, p[x(182)] = r ?? !1, p.vueVersion = s ?? "v3", this[x(168)]() && c && c(this.installFundebugVue());
  }
  [(X = g(164), G = g(182), g(168))]() {
    const t = g;
    return p.isDebug ? ["v2", "v3"][t(172)](p[t(170)]) ? (J[t(173)]({ apikey: t(176) }), new e0(J)) : (p[t(164)] && F[t(175)](t(165)), null) : null;
  }
};
h(p, X), h(p, G), h(p, "vueVersion");
let T = p;
export {
  Y0 as A,
  $0 as B,
  q0 as C,
  L0 as D,
  W0 as E,
  U0 as F,
  Z0 as G,
  J0 as H,
  T as I,
  Q0 as J,
  K0 as K,
  j0 as R,
  N0 as S,
  F0 as a,
  V0 as b,
  c0 as c,
  y0 as d,
  v0 as e,
  T0 as f,
  w as g,
  R0 as h,
  z0 as i,
  k0 as j,
  C0 as k,
  F as l,
  C as m,
  S0 as n,
  E0 as o,
  a0 as p,
  o0 as q,
  i0 as r,
  u0 as s,
  f0 as t,
  d0 as u,
  D0 as v,
  O0 as w,
  M0 as x,
  A0 as y,
  P0 as z
};
