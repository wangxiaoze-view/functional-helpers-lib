var E = Object.defineProperty;
var F = (r, n, e) => n in r ? E(r, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[n] = e;
var B = (r, n, e) => F(r, typeof n != "symbol" ? n + "" : n, e);
import { ref as y } from "vue";
import { I as A, i as j, l as _, a as G, h as K, b as Q, g as v } from "../../index-Dmrlwy4n.js";
import O from "currency.js";
import W from "ali-oss";
import { isObject as R } from "lodash-es";
export * from "@vueuse/core";
(function(r, n) {
  const e = g, t = r();
  for (; ; )
    try {
      if (-parseInt(e(135)) / 1 + -parseInt(e(128)) / 2 * (-parseInt(e(131)) / 3) + parseInt(e(127)) / 4 + parseInt(e(130)) / 5 * (parseInt(e(132)) / 6) + parseInt(e(126)) / 7 + -parseInt(e(134)) / 8 + -parseInt(e(133)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(C, 574764);
function n0(r = !1, n) {
  const e = y(r), t = y(n || "");
  return { loading: e, loadingText: t, setLoading: (x) => {
    const i = g;
    e[i(129)] = x;
  }, toggleLoading: () => {
    const x = g;
    e[x(129)] = !e[x(129)];
  }, setLoadingText: (x) => {
    const i = g;
    t[i(129)] = x;
  } };
}
function g(r, n) {
  const e = C();
  return g = function(t, a) {
    return t = t - 126, e[t];
  }, g(r, n);
}
function C() {
  const r = ["424713BTvgTi", "3089436VCCTku", "2133872qFZgqs", "702XAUmay", "value", "477560TiiZEG", "4302WjGBdq", "42clzrbd", "9788193caupRI", "477440DOHckj"];
  return C = function() {
    return r;
  }, C();
}
(function(r, n) {
  const e = U, t = r();
  for (; ; )
    try {
      if (-parseInt(e(395)) / 1 * (-parseInt(e(401)) / 2) + parseInt(e(386)) / 3 * (-parseInt(e(433)) / 4) + parseInt(e(398)) / 5 * (parseInt(e(396)) / 6) + -parseInt(e(406)) / 7 + -parseInt(e(402)) / 8 + -parseInt(e(435)) / 9 + -parseInt(e(428)) / 10 * (-parseInt(e(387)) / 11) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(N, 252949);
function r0() {
  const r = U, n = A[r(436)], e = (o) => {
    const s = r;
    try {
      j() && window[s(430)][s(413)][s(425)][s(432)](o), n && _[s(415)](s(427) + JSON[s(412)](o));
    } catch (x) {
      n && _[s(411)](s(389), JSON.stringify(x));
    }
  };
  return { goAppPage: (o, s) => {
    const x = r, i = { goOrderDetail: () => ({ type: x(392), url: "nav://orderDetail", title: s[x(400)] || x(431), data: { actionType: 1, orderDetailsId: s[x(434)] || "", ...s } }), callPhone: () => ({ type: x(392), url: x(394), data: { actionType: 1, phone: s[x(399)] || "" } }), gotoNavigate: () => ({ type: x(392), url: x(424), data: { contactAddressLat: s.contactAddressLat || "", contactAddressLng: s[x(391)] || "", address: s[x(418)] || "", ...s } }), goBail: () => ({ type: x(392), url: x(410) }), updateOrderDetails: () => ({ type: x(392), url: x(426), data: {} }), upLoadVideo: () => ({ type: x(392), url: x(416), data: {} }), upLoadImg: () => ({ type: "goto", url: "nav://uploadImage", data: { actionType: 1, photoCount: s[x(419)] || 4, showCamera: s[x(421)] ?? !0 } }), downloadImg: () => ({ type: x(392), url: x(429), data: { imgUrl: s.url } }), navHead: () => ({ type: x(407), headSetting: { show: s[x(397)] ?? !0, color: s[x(403)] || x(408) } }), goto: (c) => ({ type: x(392), title: (c == null ? void 0 : c[x(400)]) || s[x(400)] || "", url: (c == null ? void 0 : c[x(420)]) || s.url }), login: () => {
      const c = x;
      return i[c(392)]({ title: "登录", url: c(388) });
    }, customerService: () => ({ type: "goto", url: x(404), data: { orderDetailsId: s[x(434)], orderNum: s[x(417)] } }), gotoProduct: () => ({ type: "goto", url: x(393), data: { friendUserId: s.info } }), download: () => ({ type: x(414), url: s[x(420)] }), appVoice: () => ({ type: x(392), url: x(422), data: {} }), addOrderMemo: () => ({ type: x(392), url: "nav://addOrderMemo", data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), editOrderMemo: () => ({ type: x(392), url: x(423), data: { orderDetailsId: s.id, abnormalCause: s.value, ...s } }), goHome: () => ({ type: x(392), url: x(390) }), goSetWorkerState: () => ({ type: x(392), url: x(405) }), goIdCardUpload: () => ({ type: x(392), url: x(409) }) };
    if (!i[o]) return;
    const b = i[o]();
    e(b);
  }, customGoAppPage: (o) => {
    e(o);
  } };
}
function U(r, n) {
  const e = N();
  return U = function(t, a) {
    return t = t - 386, e[t];
  }, U(r, n);
}
function N() {
  const r = ["color", "nav://wechatCustomer", "nav://goSetWorkerState", "1019074fWlyit", "navHead", "#00f", "nav://goIdcardUpload", "nav://goBail", "error", "stringify", "messageHandlers", "download", "debug", "nav://uploadVideo", "orderNum", "address", "size", "url", "showCamera", "nav://uploadVoice", "nav://editOrderMemo", "nav://gotoNavigate", "navShouldHidden", "nav://notifyOrderDetailRefresh", "app交互的参数：", "3850kMgIiv", "nav://savePicture", "webkit", "订单详情", "postMessage", "20jEvQtl", "orderDetailsId", "2512944uMHMim", "isLogger", "40179DnZTZz", "12199hJkXpB", "nav://login", "app交互异常：", "nav://0", "contactAddressLng", "goto", "nav://product", "nav://tel", "17dvXisj", "6XoVvfQ", "show", "1040920VQzYcT", "phone", "title", "28802xrvLTK", "1082032CnHOrM"];
  return N = function() {
    return r;
  }, N();
}
(function(r, n) {
  const e = w, t = r();
  for (; ; )
    try {
      if (-parseInt(e(500)) / 1 * (parseInt(e(496)) / 2) + -parseInt(e(504)) / 3 + -parseInt(e(495)) / 4 + parseInt(e(502)) / 5 * (-parseInt(e(503)) / 6) + parseInt(e(499)) / 7 + -parseInt(e(506)) / 8 + parseInt(e(497)) / 9 * (parseInt(e(501)) / 10) === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(D, 203796);
function D() {
  const r = ["toString", "1251033eJMaKU", "9052DmckLH", "10799240StJuxH", "5wgNZuE", "2122578yfQgRN", "97227iUFDnc", "value", "1710488Mcwqsa", "262512PTZwKQ", "86JGgCdf", "9pOFgiQ"];
  return D = function() {
    return r;
  }, D();
}
function w(r, n) {
  const e = D();
  return w = function(t, a) {
    return t = t - 495, e[t];
  }, w(r, n);
}
function a0() {
  return { arithmetic: (a, o, s) => {
    const x = w, i = O(o)[a](s || 0);
    return { number: i[x(505)], string: i[x(498)]() };
  }, toString: (a) => O(a).toString(), toNumber: (a) => {
    const o = w;
    return O(a)[o(505)];
  }, custom: (a, o = {}) => O(a, o) };
}
function L() {
  const r = ["speak", "1710394tAUgFL", "9455517OKOBuV", "speechRate", "6AUDkCF", "lang", "3462438EaQBxl", "volume", "text", "zh-CN", "3014896xZvZyc", "pitch", "endCallback", "1JbyMoq", "startCallback", "3171392ejIcqZ", "257346xUzmHO", "speechSynthesis", "4064405LuFGKu", "onstart", "rate"];
  return L = function() {
    return r;
  }, L();
}
function M(r, n) {
  const e = L();
  return M = function(t, a) {
    return t = t - 235, e[t];
  }, M(r, n);
}
(function(r, n) {
  const e = M, t = r();
  for (; ; )
    try {
      if (parseInt(e(248)) / 1 * (parseInt(e(236)) / 2) + parseInt(e(251)) / 3 + -parseInt(e(250)) / 4 + parseInt(e(253)) / 5 * (-parseInt(e(239)) / 6) + parseInt(e(241)) / 7 + -parseInt(e(245)) / 8 + parseInt(e(237)) / 9 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(L, 503635);
function s0() {
  function r(n) {
    const e = M;
    if (!G() || !n[e(243)]) return !1;
    const t = new SpeechSynthesisUtterance();
    return t[e(243)] = n[e(243)], t[e(255)] = n[e(238)] || 1, t[e(240)] = n[e(240)] || e(244), t[e(242)] = n.volume || 1, t.pitch = n[e(246)] || 1, t.onend = function() {
      n[e(247)] && n.endCallback();
    }, t[e(254)] = function() {
      const a = e;
      n[a(249)] && n[a(249)]();
    }, window[e(252)][e(235)](t), t;
  }
  return { speak: r };
}
(function(r, n) {
  const e = h, t = r();
  for (; ; )
    try {
      if (parseInt(e(343)) / 1 * (-parseInt(e(337)) / 2) + -parseInt(e(344)) / 3 + -parseInt(e(339)) / 4 + parseInt(e(334)) / 5 * (parseInt(e(347)) / 6) + parseInt(e(342)) / 7 * (parseInt(e(332)) / 8) + parseInt(e(330)) / 9 * (parseInt(e(335)) / 10) + parseInt(e(336)) / 11 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(H, 880221);
function H() {
  const r = ["ws error... ", "onopen", "19326lYJERL", "value", "53307KIFCkG", "onclose", "8wMGqVJ", "debug", "20ZOooeZ", "2380VLUNKK", "25294555EVDAEh", "12142PSQwkM", "ws open...", "5820396BuDUEk", "onmessage", "stringify", "2954441vnrcTq", "189cZmMXf", "1984161tmUFjc"];
  return H = function() {
    return r;
  }, H();
}
function h(r, n) {
  const e = H();
  return h = function(t, a) {
    return t = t - 330, e[t];
  }, h(r, n);
}
function o0(r) {
  const n = A.isLogger, { url: e, time: t = 15 * 1e3 } = r, a = K(e), o = y(null), s = y(null), x = y(null);
  function i() {
    const f = h;
    clearTimeout(s[f(348)]), clearTimeout(x[f(348)]);
  }
  function b(f, u) {
    const m = h;
    s[m(348)] = setTimeout(() => {
      f.send("ping"), x.value = setTimeout(() => {
        c(u);
      }, t);
    }, t);
  }
  function c(f) {
    const u = h, { isPermission: m = !0, callback: S } = f;
    if (!m || !Q() || (o.value = new WebSocket(a), !o[u(348)])) return !1;
    o[u(348)][u(346)] = () => {
      const p = u;
      n && _[p(333)](p(338));
    }, o[u(348)][u(340)] = (p) => {
      const l = u;
      i(), b(o[l(348)], f), p.data != "pong" && (n && _.debug("ws runing... " + JSON[l(341)](p.data)), S && S(p.data));
    }, o[u(348)][u(331)] = () => {
      setTimeout(() => {
        c(f);
      }, 3 * 1e3);
    }, o[u(348)].onerror = (p) => {
      const l = u;
      n && _.error(l(345) + JSON[l(341)](p));
    };
  }
  return { ws: o, initWs: c };
}
function k(r, n) {
  const e = P();
  return k = function(t, a) {
    return t = t - 269, e[t];
  }, k(r, n);
}
const T = k;
(function(r, n) {
  const e = k, t = r();
  for (; ; )
    try {
      if (parseInt(e(283)) / 1 * (-parseInt(e(298)) / 2) + -parseInt(e(295)) / 3 + parseInt(e(282)) / 4 + -parseInt(e(279)) / 5 * (-parseInt(e(274)) / 6) + parseInt(e(287)) / 7 + parseInt(e(300)) / 8 * (parseInt(e(290)) / 9) + -parseInt(e(271)) / 10 === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(P, 915538);
function P() {
  const r = ["https://", "random", "18716630JlgGZY", "YYYY", "put", "114QTkCzV", "200", "replace", "slice", "注意：oss-client不存在", "364215mhywnP", "now", "400", "6211404SgRVAE", "30391BlShVP", "catch", "admin", "上传失败", "5478459PSbmCa", "上传成功", "name", "9UINzKE", "http://", "getOssClient", "error", "toString", "975153sGLPJe", "isLogger", "ossClient", "92HTNHUP", "url", "6325864vguyIH"];
  return P = function() {
    return r;
  }, P();
}
var J;
class z {
  constructor() {
    B(this, J);
  }
  [(J = T(297), T(292))](n) {
    const e = T;
    if (!this[e(297)]) {
      if (!n || !R(n)) return A[e(296)] && _[e(293)]("注意：需要设置oss-client"), null;
      this[e(297)] = new W(n);
    }
    return this[e(297)];
  }
}
function c0() {
  const r = T, n = new z();
  return { getOssClient: (t) => n[r(292)](t), onUpload: (t) => {
    const a = k, { platform: o = a(285), file: s, success: x, error: i, isHttps: b = !0 } = t, c = n[a(292)]();
    if (!c) return A[a(296)] && _[a(293)](a(278)), null;
    const f = /* @__PURE__ */ new Date(), u = v(f, a(272)), m = v(f, "MM"), S = v(f, "DD"), p = Math[a(270)]()[a(294)](36)[a(277)](-6) + "_" + Date[a(280)](), l = s[a(289)], q = "/" + o + "/" + u + "/" + m + "/" + S + "/" + p + "-" + l;
    c[a(273)](q, s).then((I) => {
      const d = a;
      x && x({ success: !0, context: { fileName: l, url: I[d(299)][d(276)](d(291), d(b ? 269 : 291)), path: I[d(289)] }, message: d(288), requestId: v(f) + "_" + p, code: d(275) });
    })[a(284)]((I) => {
      const d = a;
      i && i({ success: !1, context: (I == null ? void 0 : I.message) || I, message: d(286), requestId: v(f) + "_" + p, code: d(281) });
    });
  } };
}
(function(r, n) {
  for (var e = Z, t = r(); ; )
    try {
      var a = parseInt(e(496)) / 1 * (parseInt(e(498)) / 2) + -parseInt(e(501)) / 3 * (parseInt(e(504)) / 4) + -parseInt(e(494)) / 5 * (-parseInt(e(500)) / 6) + -parseInt(e(499)) / 7 + -parseInt(e(502)) / 8 + -parseInt(e(497)) / 9 * (parseInt(e(503)) / 10) + parseInt(e(495)) / 11 * (parseInt(e(493)) / 12);
      if (a === n) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(V, 636838);
function V() {
  var r = ["10UhNkBA", "630836GrlqNK", "3857604qqUuPF", "5RUOcwk", "77ZIPOej", "619852VuBmAl", "10218186nIhPOT", "4EgNVhe", "7299992VjXloB", "1200660Jrlewp", "3WQByZR", "5738608mtjdBc"];
  return V = function() {
    return r;
  }, V();
}
function Z(r, n) {
  var e = V();
  return Z = function(t, a) {
    t = t - 493;
    var o = e[t];
    return o;
  }, Z(r, n);
}
export {
  a0 as useComputedNum,
  n0 as useLoading,
  r0 as useNavigatorApp,
  s0 as useSpeechRecognitionForSimple,
  c0 as useUpload,
  o0 as useWs
};
