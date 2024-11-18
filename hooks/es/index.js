var K = Object.defineProperty;
var R = (n, x, t) => x in n ? K(n, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[x] = t;
var F = (n, x, t) => R(n, typeof x != "symbol" ? x + "" : x, t);
import { ref as y } from "vue";
import { I as A, i as Z, l as _, a as j, h as q, b as z, g as v } from "../../index-CDnA4U02.js";
import k from "currency.js";
import B from "ali-oss";
import { isObject as E } from "lodash-es";
export * from "@vueuse/core";
(function(n, x) {
  const t = h, e = n();
  for (; ; )
    try {
      if (parseInt(t(455)) / 1 * (-parseInt(t(467)) / 2) + parseInt(t(465)) / 3 * (-parseInt(t(463)) / 4) + -parseInt(t(462)) / 5 * (-parseInt(t(464)) / 6) + parseInt(t(458)) / 7 * (-parseInt(t(454)) / 8) + parseInt(t(459)) / 9 + parseInt(t(461)) / 10 * (parseInt(t(460)) / 11) + -parseInt(t(456)) / 12 * (-parseInt(t(457)) / 13) === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(D, 921228);
function D() {
  const n = ["1762590ZAdEAK", "3584715uHDacV", "80nerwOt", "12Xiahmp", "124041ouORpT", "value", "14VQsiZX", "12098312BlhEHu", "58543LIHHxZ", "217032HnUFVD", "598ljKGPI", "7PLUnlD", "6294420HnPjkb", "44GnCcoN"];
  return D = function() {
    return n;
  }, D();
}
function h(n, x) {
  const t = D();
  return h = function(e, a) {
    return e = e - 454, t[e];
  }, h(n, x);
}
function x0(n = !1, x) {
  const t = y(n), e = y(x || "");
  return { loading: t, loadingText: e, setLoading: (r) => {
    const u = h;
    t[u(466)] = r;
  }, toggleLoading: () => {
    const r = h;
    t[r(466)] = !t[r(466)];
  }, setLoadingText: (r) => {
    const u = h;
    e[u(466)] = r;
  } };
}
(function(n, x) {
  const t = O, e = n();
  for (; ; )
    try {
      if (parseInt(t(145)) / 1 * (-parseInt(t(180)) / 2) + parseInt(t(169)) / 3 * (parseInt(t(175)) / 4) + parseInt(t(151)) / 5 + parseInt(t(163)) / 6 + -parseInt(t(141)) / 7 * (parseInt(t(178)) / 8) + -parseInt(t(165)) / 9 + -parseInt(t(162)) / 10 * (parseInt(t(155)) / 11) === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(H, 707169);
function O(n, x) {
  const t = H();
  return O = function(e, a) {
    return e = e - 141, t[e];
  }, O(n, x);
}
function n0() {
  const n = O, x = A[n(144)], t = (o) => {
    const s = n;
    try {
      Z() && window[s(159)][s(168)][s(167)][s(158)](o), x && _[s(187)]("app交互的参数：" + JSON[s(149)](o));
    } catch (r) {
      x && _.error(s(184), JSON[s(149)](r));
    }
  };
  return { goAppPage: (o, s) => {
    const r = n, u = { goOrderDetail: () => ({ type: "goto", url: r(176), title: s[r(166)] || r(171), data: { actionType: 1, orderDetailsId: s[r(174)] || "", ...s } }), callPhone: () => ({ type: r(181), url: "nav://tel", data: { actionType: 1, phone: s[r(156)] || "" } }), gotoNavigate: () => ({ type: r(181), url: r(157), data: { contactAddressLat: s[r(172)] || "", contactAddressLng: s[r(170)] || "", address: s[r(143)] || "", ...s } }), goBail: () => ({ type: r(181), url: r(182) }), updateOrderDetails: () => ({ type: r(181), url: r(185), data: {} }), upLoadVideo: () => ({ type: "goto", url: r(147), data: {} }), upLoadImg: () => ({ type: r(181), url: r(183), data: { actionType: 1, photoCount: s[r(154)] || 4, showCamera: s[r(179)] ?? !0 } }), downloadImg: () => ({ type: r(181), url: r(186), data: { imgUrl: s[r(152)] } }), navHead: () => ({ type: r(161), headSetting: { show: s[r(146)] ?? !0, color: s[r(164)] || r(177) } }), goto: (i) => ({ type: r(181), title: (i == null ? void 0 : i.title) || s.title || "", url: (i == null ? void 0 : i.url) || s[r(152)] }), login: () => {
      const i = r;
      return u[i(181)]({ title: "登录", url: i(142) });
    }, customerService: () => ({ type: r(181), url: "nav://wechatCustomer", data: { orderDetailsId: s[r(174)], orderNum: s.orderNum } }), gotoProduct: () => ({ type: "goto", url: "nav://product", data: { friendUserId: s[r(153)] } }), download: () => ({ type: r(160), url: s[r(152)] }), appVoice: () => ({ type: r(181), url: "nav://uploadVoice", data: {} }), addOrderMemo: () => ({ type: "goto", url: "nav://addOrderMemo", data: { orderDetailsId: s.id, abnormalCause: s[r(148)], ...s } }), editOrderMemo: () => ({ type: r(181), url: "nav://editOrderMemo", data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), goHome: () => ({ type: r(181), url: r(173) }), goSetWorkerState: () => ({ type: r(181), url: r(150) }), goIdCardUpload: () => ({ type: "goto", url: "nav://goIdcardUpload" }) };
    if (!u[o]) return;
    const m = u[o]();
    t(m);
  }, customGoAppPage: (o) => {
    t(o);
  } };
}
function H() {
  const n = ["orderDetailsId", "2507084PYxyrM", "nav://orderDetail", "#00f", "1717304PKPXyZ", "showCamera", "122438xLZnZa", "goto", "nav://goBail", "nav://uploadImage", "app交互异常：", "nav://notifyOrderDetailRefresh", "nav://savePicture", "debug", "42USqSlf", "nav://login", "address", "isLogger", "17Cjimca", "show", "nav://uploadVideo", "value", "stringify", "nav://goSetWorkerState", "6315730WajPgj", "url", "info", "size", "363770DYVKsD", "phone", "nav://gotoNavigate", "postMessage", "webkit", "download", "navHead", "190PgLcyN", "8459298LccSnH", "color", "2361339pcCiPY", "title", "navShouldHidden", "messageHandlers", "6ERoBHu", "contactAddressLng", "订单详情", "contactAddressLat", "nav://0"];
  return H = function() {
    return n;
  }, H();
}
(function(n, x) {
  const t = w, e = n();
  for (; ; )
    try {
      if (-parseInt(t(182)) / 1 + parseInt(t(176)) / 2 + parseInt(t(174)) / 3 + parseInt(t(181)) / 4 * (-parseInt(t(180)) / 5) + -parseInt(t(179)) / 6 + parseInt(t(177)) / 7 * (parseInt(t(178)) / 8) + parseInt(t(175)) / 9 === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(L, 712993);
function w(n, x) {
  const t = L();
  return w = function(e, a) {
    return e = e - 173, t[e];
  }, w(n, x);
}
function r0() {
  return { arithmetic: (a, o, s) => {
    const r = w, u = k(o)[a](s || 0);
    return { number: u.value, string: u[r(173)]() };
  }, toString: (a) => {
    const o = w;
    return k(a)[o(173)]();
  }, toNumber: (a) => k(a).value, custom: (a, o = {}) => k(a, o) };
}
function L() {
  const n = ["7130994yphZWp", "3847305osvIPU", "4ljRFIr", "200505HILsbR", "toString", "20202HReNXV", "7626375KcLYwx", "2568614DNWpVh", "5131294MZTBXb", "8BlIhat"];
  return L = function() {
    return n;
  }, L();
}
function W(n, x) {
  const t = N();
  return W = function(e, a) {
    return e = e - 431, t[e];
  }, W(n, x);
}
(function(n, x) {
  const t = W, e = n();
  for (; ; )
    try {
      if (parseInt(t(435)) / 1 * (parseInt(t(436)) / 2) + parseInt(t(442)) / 3 * (-parseInt(t(434)) / 4) + parseInt(t(439)) / 5 * (-parseInt(t(448)) / 6) + parseInt(t(449)) / 7 * (parseInt(t(444)) / 8) + -parseInt(t(446)) / 9 * (-parseInt(t(447)) / 10) + parseInt(t(443)) / 11 + parseInt(t(432)) / 12 === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(N, 308382);
function N() {
  const n = ["840636uoFwfe", "40EDlqrk", "24aLCzME", "1085Ycsnce", "startCallback", "endCallback", "speak", "lang", "236304NjzvoS", "rate", "1010212lEMVDh", "494478TwcKuz", "2bgpkpl", "text", "pitch", "680935OdLiSB", "zh-CN", "speechSynthesis", "3ubclWa", "789052rPaUhp", "7544kWFnBR", "volume"];
  return N = function() {
    return n;
  }, N();
}
function a0() {
  function n(x) {
    const t = W;
    if (!j() || !x[t(437)]) return !1;
    const e = new SpeechSynthesisUtterance();
    return e.text = x[t(437)], e[t(433)] = x.speechRate || 1, e[t(431)] = x.lang || t(440), e[t(445)] = x[t(445)] || 1, e[t(438)] = x[t(438)] || 1, e.onend = function() {
      const a = t;
      x[a(451)] && x[a(451)]();
    }, e.onstart = function() {
      x[t(450)] && x.startCallback();
    }, window[t(441)][t(452)](e), e;
  }
  return { speak: n };
}
(function(n, x) {
  const t = g, e = n();
  for (; ; )
    try {
      if (parseInt(t(368)) / 1 + parseInt(t(354)) / 2 * (-parseInt(t(362)) / 3) + -parseInt(t(370)) / 4 + -parseInt(t(365)) / 5 * (parseInt(t(351)) / 6) + parseInt(t(356)) / 7 * (parseInt(t(350)) / 8) + parseInt(t(353)) / 9 + parseInt(t(363)) / 10 * (parseInt(t(367)) / 11) === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(P, 185838);
function g(n, x) {
  const t = P();
  return g = function(e, a) {
    return e = e - 349, t[e];
  }, g(n, x);
}
function P() {
  const n = ["274160DiWFlW", "ws error... ", "15jGldxU", "pong", "88KFIWUT", "263343GqRplx", "stringify", "621940bVFCWz", "debug", "data", "ws runing... ", "onmessage", "onclose", "141448VPdHtQ", "678018eqIJwr", "ping", "3187971vprQIW", "56wNoTQr", "value", "70hIfAcF", "onopen", "error", "ws open...", "send", "onerror", "35718OpHEYK"];
  return P = function() {
    return n;
  }, P();
}
function s0(n) {
  const x = A.isLogger, { url: t, time: e = 15 * 1e3 } = n, a = q(t), o = y(null), s = y(null), r = y(null);
  function u() {
    const l = g;
    clearTimeout(s.value), clearTimeout(r[l(355)]);
  }
  function m(l, c) {
    s.value = setTimeout(() => {
      const f = g;
      l[f(360)](f(352)), r[f(355)] = setTimeout(() => {
        i(c);
      }, e);
    }, e);
  }
  function i(l) {
    const c = g, { isPermission: f = !0, callback: C } = l;
    if (!f || !z() || (o[c(355)] = new WebSocket(a), !o[c(355)])) return !1;
    o[c(355)][c(357)] = () => {
      const d = c;
      x && _.debug(d(359));
    }, o[c(355)][c(374)] = (d) => {
      const p = c;
      u(), m(o[p(355)], l), d.data != p(366) && (x && _[p(371)](p(373) + JSON[p(369)](d[p(372)])), C && C(d[p(372)]));
    }, o[c(355)][c(349)] = () => {
      setTimeout(() => {
        i(l);
      }, 3 * 1e3);
    }, o[c(355)][c(361)] = (d) => {
      const p = c;
      x && _[p(358)](p(364) + JSON[p(369)](d));
    };
  }
  return { ws: o, initWs: i };
}
const M = S;
(function(n, x) {
  const t = S, e = n();
  for (; ; )
    try {
      if (-parseInt(t(327)) / 1 * (-parseInt(t(316)) / 2) + -parseInt(t(315)) / 3 + parseInt(t(305)) / 4 + -parseInt(t(309)) / 5 * (parseInt(t(320)) / 6) + parseInt(t(318)) / 7 * (-parseInt(t(331)) / 8) + parseInt(t(311)) / 9 + parseInt(t(298)) / 10 === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(U, 161793);
function S(n, x) {
  const t = U();
  return S = function(e, a) {
    return e = e - 298, t[e];
  }, S(n, x);
}
function U() {
  const n = ["33000UDFCQt", "admin", "上传成功", "isLogger", "536135kUSUNZ", "name", "2581227AfgSmK", "http://", "toString", "now", "674613KdgxwX", "34nMCnQP", "random", "91AvMVeC", "ossClient", "12HaWtAK", "注意：oss-client不存在", "200", "put", "url", "error", "then", "17893xascWb", "getOssClient", "https://", "replace", "155368SHxlqO", "2543570umYOnI", "YYYY", "catch", "400", "slice", "注意：需要设置oss-client", "上传失败"];
  return U = function() {
    return n;
  }, U();
}
class J {
  constructor() {
    F(this, "ossClient");
  }
  [M(328)](x) {
    const t = M;
    if (!this.ossClient) {
      if (!x || !E(x)) return A[t(308)] && _[t(325)](t(303)), null;
      this[t(319)] = new B(x);
    }
    return this[t(319)];
  }
}
function o0() {
  const n = M, x = new J();
  return { getOssClient: (e) => x[n(328)](e), onUpload: (e) => {
    const a = S, { platform: o = a(306), file: s, success: r, error: u, isHttps: m = !0 } = e, i = x.getOssClient();
    if (!i) return A[a(308)] && _[a(325)](a(321)), null;
    const l = /* @__PURE__ */ new Date(), c = v(l, a(299)), f = v(l, "MM"), C = v(l, "DD"), d = Math[a(317)]()[a(313)](36)[a(302)](-6) + "_" + Date[a(314)](), p = s.name, Y = "/" + o + "/" + c + "/" + f + "/" + C + "/" + d + "-" + p;
    i[a(323)](Y, s)[a(326)]((I) => {
      const b = a;
      r && r({ success: !0, context: { fileName: p, url: I[b(324)][b(330)](b(312), b(m ? 329 : 312)), path: I[b(310)] }, message: b(307), requestId: v(l) + "_" + d, code: b(322) });
    })[a(300)]((I) => {
      const b = a;
      u && u({ success: !1, context: (I == null ? void 0 : I.message) || I, message: b(304), requestId: v(l) + "_" + d, code: b(301) });
    });
  } };
}
(function(n, x) {
  for (var t = V, e = n(); ; )
    try {
      var a = -parseInt(t(309)) / 1 + -parseInt(t(310)) / 2 + parseInt(t(315)) / 3 + parseInt(t(316)) / 4 + -parseInt(t(311)) / 5 * (-parseInt(t(312)) / 6) + -parseInt(t(313)) / 7 + parseInt(t(317)) / 8 * (-parseInt(t(314)) / 9);
      if (a === x) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(T, 942852);
function V(n, x) {
  var t = T();
  return V = function(e, a) {
    e = e - 309;
    var o = t[e];
    return o;
  }, V(n, x);
}
function T() {
  var n = ["3748857MoYWVA", "312084kWGcIo", "460144qhapNO", "957380luzDzC", "11188ffmDZt", "15vlhyOs", "2151582HvUkqL", "3080609JFWbnX", "9fAaJkz"];
  return T = function() {
    return n;
  }, T();
}
export {
  r0 as useComputedNum,
  x0 as useLoading,
  n0 as useNavigatorApp,
  a0 as useSpeechRecognitionForSimple,
  o0 as useUpload,
  s0 as useWs
};
