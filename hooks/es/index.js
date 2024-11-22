var B = Object.defineProperty;
var J = (x, n, t) => n in x ? B(x, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[n] = t;
var W = (x, n, t) => J(x, typeof n != "symbol" ? n + "" : n, t);
import { ref as y } from "vue";
import { I as R, i as q, l as I, a as j, h as Q, b as Z, g as v } from "../../index-BSte8J9w.js";
import k from "currency.js";
import F from "ali-oss";
import { isObject as K } from "lodash-es";
import Y from "mitt";
export * from "@vueuse/core";
(function(x, n) {
  const t = g, e = x();
  for (; ; )
    try {
      if (parseInt(t(238)) / 1 * (parseInt(t(246)) / 2) + -parseInt(t(240)) / 3 * (-parseInt(t(244)) / 4) + parseInt(t(249)) / 5 * (parseInt(t(239)) / 6) + -parseInt(t(243)) / 7 * (-parseInt(t(241)) / 8) + parseInt(t(247)) / 9 * (-parseInt(t(248)) / 10) + -parseInt(t(245)) / 11 + parseInt(t(237)) / 12 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(C, 197599);
function C() {
  const x = ["16SrUVJb", "value", "125986EATejB", "4dEtiwe", "1057463SKvzUc", "114650giAhEM", "9MVVnuk", "3823450czSpZh", "1510qTnOyk", "224832SuFojK", "4MhGiha", "4872lQIztA", "440463poIhRd"];
  return C = function() {
    return x;
  }, C();
}
function g(x, n) {
  const t = C();
  return g = function(e, r) {
    return e = e - 237, t[e];
  }, g(x, n);
}
function o0(x = !1, n) {
  const t = y(x), e = y(n || "");
  return { loading: t, loadingText: e, setLoading: (o) => {
    const c = g;
    t[c(242)] = o;
  }, toggleLoading: () => {
    const o = g;
    t[o(242)] = !t[o(242)];
  }, setLoadingText: (o) => {
    const c = g;
    e[c(242)] = o;
  } };
}
(function(x, n) {
  const t = w, e = x();
  for (; ; )
    try {
      if (-parseInt(t(117)) / 1 + parseInt(t(146)) / 2 + -parseInt(t(118)) / 3 + -parseInt(t(122)) / 4 * (-parseInt(t(119)) / 5) + parseInt(t(147)) / 6 * (parseInt(t(128)) / 7) + parseInt(t(115)) / 8 + -parseInt(t(149)) / 9 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(E, 663613);
function c0() {
  const x = R.isLogger, n = (r) => {
    const s = w;
    try {
      q() && window.webkit[s(132)][s(116)].postMessage(r), x && I[s(126)](s(114) + JSON[s(123)](r));
    } catch (a) {
      x && I[s(108)](s(124), JSON[s(123)](a));
    }
  };
  return { goAppPage: (r, s) => {
    const a = w, o = { goOrderDetail: () => ({ type: a(141), url: a(131), title: s[a(139)] || a(135), data: { actionType: 1, orderDetailsId: s[a(137)] || "", ...s } }), callPhone: () => ({ type: a(141), url: "nav://tel", data: { actionType: 1, phone: s.phone || "" } }), gotoNavigate: () => ({ type: a(141), url: "nav://gotoNavigate", data: { contactAddressLat: s[a(145)] || "", contactAddressLng: s[a(120)] || "", address: s[a(127)] || "", ...s } }), goBail: () => ({ type: a(141), url: a(121) }), updateOrderDetails: () => ({ type: a(141), url: "nav://notifyOrderDetailRefresh", data: {} }), upLoadVideo: () => ({ type: a(141), url: a(133), data: {} }), upLoadImg: () => ({ type: "goto", url: "nav://uploadImage", data: { actionType: 1, photoCount: s[a(113)] || 4, showCamera: s[a(129)] ?? !0 } }), downloadImg: () => ({ type: a(141), url: "nav://savePicture", data: { imgUrl: s[a(136)] } }), navHead: () => ({ type: a(143), headSetting: { show: s[a(134)] ?? !0, color: s[a(142)] || a(109) } }), goto: (u) => ({ type: "goto", title: (u == null ? void 0 : u[a(139)]) || s[a(139)] || "", url: (u == null ? void 0 : u[a(136)]) || s[a(136)] }), login: () => {
      const u = a;
      return o[u(141)]({ title: "登录", url: u(110) });
    }, customerService: () => ({ type: a(141), url: "nav://wechatCustomer", data: { orderDetailsId: s.orderDetailsId, orderNum: s[a(144)] } }), gotoProduct: () => ({ type: "goto", url: "nav://product", data: { friendUserId: s[a(125)] } }), download: () => ({ type: a(112), url: s[a(136)] }), appVoice: () => ({ type: a(141), url: "nav://uploadVoice", data: {} }), addOrderMemo: () => ({ type: a(141), url: a(138), data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), editOrderMemo: () => ({ type: "goto", url: a(111), data: { orderDetailsId: s.id, abnormalCause: s[a(130)], ...s } }), goHome: () => ({ type: a(141), url: "nav://0" }), goSetWorkerState: () => ({ type: a(141), url: a(140) }), goIdCardUpload: () => ({ type: a(141), url: a(148) }) };
    if (!o[r]) return;
    const c = o[r]();
    n(c);
  }, customGoAppPage: (r) => {
    n(r);
  } };
}
function w(x, n) {
  const t = E();
  return w = function(e, r) {
    return e = e - 108, t[e];
  }, w(x, n);
}
function E() {
  const x = ["navShouldHidden", "337636bfEqfF", "2450040HpDEwz", "2435TZIXsy", "contactAddressLng", "nav://goBail", "8028uIygMM", "stringify", "app交互异常：", "info", "debug", "address", "2242625lKrztZ", "showCamera", "value", "nav://orderDetail", "messageHandlers", "nav://uploadVideo", "show", "订单详情", "url", "orderDetailsId", "nav://addOrderMemo", "title", "nav://goSetWorkerState", "goto", "color", "navHead", "orderNum", "contactAddressLat", "823450dAdXMf", "24scvlFV", "nav://goIdcardUpload", "8888220Efxint", "error", "#00f", "nav://login", "nav://editOrderMemo", "download", "size", "app交互的参数：", "1079000gndjTP"];
  return E = function() {
    return x;
  }, E();
}
(function(x, n) {
  const t = N, e = x();
  for (; ; )
    try {
      if (parseInt(t(109)) / 1 * (-parseInt(t(106)) / 2) + parseInt(t(107)) / 3 + parseInt(t(111)) / 4 * (-parseInt(t(100)) / 5) + parseInt(t(112)) / 6 * (-parseInt(t(108)) / 7) + -parseInt(t(102)) / 8 * (parseInt(t(104)) / 9) + -parseInt(t(101)) / 10 * (-parseInt(t(110)) / 11) + parseInt(t(103)) / 12 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(M, 132020);
function i0() {
  return { arithmetic: (r, s, a) => {
    const o = N, c = k(s)[r](a || 0);
    return { number: c[o(105)], string: c.toString() };
  }, toString: (r) => k(r).toString(), toNumber: (r) => k(r).value, custom: (r, s = {}) => k(r, s) };
}
function N(x, n) {
  const t = M();
  return N = function(e, r) {
    return e = e - 100, t[e];
  }, N(x, n);
}
function M() {
  const x = ["5529264tkJdly", "369fQXsre", "value", "156554dyvFeD", "443463ExbDHh", "21XyleEP", "3GGSuuN", "75130ydYHWg", "260116zGDRwV", "115218OAakXg", "15pIdMHG", "20scmsMc", "528xgRkth"];
  return M = function() {
    return x;
  }, M();
}
function L(x, n) {
  const t = H();
  return L = function(e, r) {
    return e = e - 299, t[e];
  }, L(x, n);
}
(function(x, n) {
  const t = L, e = x();
  for (; ; )
    try {
      if (parseInt(t(309)) / 1 * (-parseInt(t(308)) / 2) + -parseInt(t(299)) / 3 + -parseInt(t(304)) / 4 * (parseInt(t(303)) / 5) + parseInt(t(311)) / 6 + parseInt(t(306)) / 7 + parseInt(t(305)) / 8 + parseInt(t(300)) / 9 * (-parseInt(t(310)) / 10) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(H, 623798);
function H() {
  const x = ["speak", "289185qEjnRW", "641619hopJzc", "lang", "speechRate", "39815LOaPGO", "204yARAde", "3948376UCSlmR", "7736778aauEBG", "speechSynthesis", "206dNlzJq", "8743DnpAGG", "110dGrEQJ", "7273410BnQEhn", "volume", "onend", "text", "startCallback", "endCallback", "onstart", "pitch"];
  return H = function() {
    return x;
  }, H();
}
function u0() {
  function x(n) {
    const t = L;
    if (!j() || !n[t(314)]) return !1;
    const e = new SpeechSynthesisUtterance();
    return e.text = n[t(314)], e.rate = n[t(302)] || 1, e[t(301)] = n.lang || "zh-CN", e.volume = n[t(312)] || 1, e[t(318)] = n[t(318)] || 1, e[t(313)] = function() {
      const r = t;
      n[r(316)] && n[r(316)]();
    }, e[t(317)] = function() {
      const r = t;
      n[r(315)] && n[r(315)]();
    }, window[t(307)][t(319)](e), e;
  }
  return { speak: x };
}
function G() {
  const x = ["2520040zVjFlc", "pong", "571405SAeqQB", "value", "14BCLTIu", "ws runing... ", "onerror", "20IAHqgX", "18376vocAXh", "data", "onclose", "debug", "2114AnLYoT", "1286900EhUgdF", "isLogger", "stringify", "onmessage", "9215082ShAXMw", "177231KfexXi", "ws open...", "ws error... ", "send", "error", "4994046BlUFCd"];
  return G = function() {
    return x;
  }, G();
}
(function(x, n) {
  const t = S, e = x();
  for (; ; )
    try {
      if (parseInt(t(181)) / 1 + -parseInt(t(183)) / 2 * (-parseInt(t(197)) / 3) + parseInt(t(192)) / 4 * (parseInt(t(186)) / 5) + -parseInt(t(178)) / 6 + parseInt(t(191)) / 7 * (parseInt(t(187)) / 8) + -parseInt(t(196)) / 9 + -parseInt(t(179)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(G, 857295);
function S(x, n) {
  const t = G();
  return S = function(e, r) {
    return e = e - 175, t[e];
  }, S(x, n);
}
function p0(x) {
  const n = S, t = R[n(193)], { url: e, time: r = 15 * 1e3 } = x, s = Q(e), a = y(null), o = y(null), c = y(null);
  function u() {
    const l = n;
    clearTimeout(o[l(182)]), clearTimeout(c[l(182)]);
  }
  function D(l, i) {
    o.value = setTimeout(() => {
      l[S(176)]("ping"), c.value = setTimeout(() => {
        b(i);
      }, r);
    }, r);
  }
  function b(l) {
    const i = n, { isPermission: T = !0, callback: h } = l;
    if (!T || !Z() || (a[i(182)] = new WebSocket(s), !a[i(182)])) return !1;
    a.value.onopen = () => {
      const d = i;
      t && I[d(190)](d(198));
    }, a[i(182)][i(195)] = (d) => {
      const p = i;
      u(), D(a[p(182)], l), d[p(188)] != p(180) && (t && I[p(190)](p(184) + JSON[p(194)](d[p(188)])), h && h(d[p(188)]));
    }, a[i(182)][i(189)] = () => {
      setTimeout(() => {
        b(l);
      }, 3 * 1e3);
    }, a.value[i(185)] = (d) => {
      const p = i;
      t && I[p(177)](p(175) + JSON.stringify(d));
    };
  }
  return { ws: a, initWs: b };
}
const A = O;
(function(x, n) {
  const t = O, e = x();
  for (; ; )
    try {
      if (-parseInt(t(419)) / 1 + parseInt(t(430)) / 2 * (parseInt(t(440)) / 3) + parseInt(t(418)) / 4 * (-parseInt(t(437)) / 5) + -parseInt(t(417)) / 6 + parseInt(t(428)) / 7 + -parseInt(t(445)) / 8 * (-parseInt(t(431)) / 9) + parseInt(t(442)) / 10 === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(z, 151680);
function O(x, n) {
  const t = z();
  return O = function(e, r) {
    return e = e - 414, t[e];
  }, O(x, n);
}
var X;
class $ {
  constructor() {
    W(this, X);
  }
  [(X = A(416), A(441))](n) {
    const t = A;
    if (!this[t(416)]) {
      if (!n || !K(n)) return R.isLogger && I[t(443)](t(434)), null;
      this[t(416)] = new F(n);
    }
    return this.ossClient;
  }
}
function z() {
  const x = ["200", "1762551yoJfIx", "https://", "260ZrDcSb", "1072143yljgwz", "注意：oss-client不存在", "random", "注意：需要设置oss-client", "admin", "YYYY", "34370ZBiPim", "put", "url", "609TKlxcq", "getOssClient", "581730yoWQru", "error", "400", "8abEzoH", "then", "name", "ossClient", "769836dVTSHm", "28ghzEvr", "127379cNNnfp", "message", "slice", "上传失败", "上传成功", "isLogger", "replace", "http://"];
  return z = function() {
    return x;
  }, z();
}
function d0() {
  const x = A, n = new $();
  return { getOssClient: (e) => n[x(441)](e), onUpload: (e) => {
    const r = O, { platform: s = r(435), file: a, success: o, error: c, isHttps: u = !0 } = e, D = n.getOssClient();
    if (!D) return R[r(424)] && I.error(r(432)), null;
    const b = /* @__PURE__ */ new Date(), l = v(b, r(436)), i = v(b, "MM"), T = v(b, "DD"), h = Math[r(433)]().toString(36)[r(421)](-6) + "_" + Date.now(), d = a[r(415)], p = "/" + s + "/" + l + "/" + i + "/" + T + "/" + h + "-" + d;
    D[r(438)](p, a)[r(414)]((_) => {
      const f = r;
      o && o({ success: !0, context: { fileName: d, url: _[f(439)][f(425)](f(426), f(u ? 429 : 426)), path: _.name }, message: f(423), requestId: v(b) + "_" + h, code: f(427) });
    }).catch((_) => {
      const f = r;
      c && c({ success: !1, context: (_ == null ? void 0 : _[f(420)]) || _, message: f(422), requestId: v(b) + "_" + h, code: f(444) });
    });
  } };
}
(function(x, n) {
  const t = m, e = x();
  for (; ; )
    try {
      if (parseInt(t(423)) / 1 + -parseInt(t(420)) / 2 + -parseInt(t(433)) / 3 * (-parseInt(t(429)) / 4) + parseInt(t(419)) / 5 + -parseInt(t(422)) / 6 * (parseInt(t(426)) / 7) + parseInt(t(425)) / 8 * (-parseInt(t(430)) / 9) + -parseInt(t(428)) / 10 * (-parseInt(t(432)) / 11) === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(V, 472351);
function m(x, n) {
  const t = V();
  return m = function(e, r) {
    return e = e - 419, t[e];
  }, m(x, n);
}
function V() {
  const x = ["48730DwonsH", "3NnpQWg", "2909795ZtQCJt", "163516XRtCOy", "off", "700746pmvqXO", "698408wsPoIi", "all", "8vGtXKT", "42ZieANQ", "emit", "1250KxmYTR", "778300ZVvhgx", "6964533YoEfPG", "clear"];
  return V = function() {
    return x;
  }, V();
}
function f0() {
  const x = Y();
  return { emitter: x, simEmit: (s, ...a) => {
    x[m(427)](s, a);
  }, simEmitOn: (s, a) => {
    x.on(s, a);
  }, simEmitOff: (s, a) => {
    x[m(421)](s, a);
  }, simEmitClear: () => {
    const s = m;
    x[s(424)][s(431)]();
  } };
}
function U(x, n) {
  var t = P();
  return U = function(e, r) {
    e = e - 439;
    var s = t[e];
    return s;
  }, U(x, n);
}
(function(x, n) {
  for (var t = U, e = x(); ; )
    try {
      var r = parseInt(t(446)) / 1 * (-parseInt(t(441)) / 2) + -parseInt(t(451)) / 3 * (-parseInt(t(440)) / 4) + -parseInt(t(447)) / 5 * (parseInt(t(449)) / 6) + -parseInt(t(443)) / 7 + parseInt(t(444)) / 8 * (parseInt(t(448)) / 9) + -parseInt(t(442)) / 10 * (-parseInt(t(450)) / 11) + parseInt(t(439)) / 12 * (parseInt(t(445)) / 13);
      if (r === n) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(P, 407214);
function P() {
  var x = ["3ANDWul", "119988aEJSGB", "673068VjgIBn", "86TxcsDw", "10njVrXe", "1425004tWZeVt", "16eBrLoU", "780TirZkS", "7167LlQNoG", "3600645RzIuqe", "2005866pOKDRW", "6GctKMS", "4676551wjRMHP"];
  return P = function() {
    return x;
  }, P();
}
export {
  i0 as useComputedNum,
  o0 as useLoading,
  f0 as useMitter,
  c0 as useNavigatorApp,
  u0 as useSpeechRecognitionForSimple,
  d0 as useUpload,
  p0 as useWs
};
