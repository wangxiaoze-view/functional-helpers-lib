var R = Object.defineProperty;
var E = (n, x, e) => x in n ? R(n, x, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[x] = e;
var P = (n, x, e) => E(n, typeof x != "symbol" ? x + "" : x, e);
import { ref as y } from "vue";
import { I as Y, i as F, l as h, a as K, h as q, b as B, g as w } from "../../index-BuTxJ5iA.js";
import k from "currency.js";
import G from "ali-oss";
import { isObject as Q } from "lodash-es";
export * from "@vueuse/core";
function g(n, x) {
  const e = C();
  return g = function(t, s) {
    return t = t - 207, e[t];
  }, g(n, x);
}
(function(n, x) {
  const e = g, t = n();
  for (; ; )
    try {
      if (parseInt(e(218)) / 1 * (-parseInt(e(209)) / 2) + -parseInt(e(212)) / 3 + parseInt(e(213)) / 4 * (parseInt(e(210)) / 5) + -parseInt(e(214)) / 6 * (-parseInt(e(216)) / 7) + parseInt(e(208)) / 8 + -parseInt(e(219)) / 9 * (parseInt(e(217)) / 10) + -parseInt(e(211)) / 11 * (-parseInt(e(215)) / 12) === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(C, 283889);
function n0(n = !1, x) {
  const e = y(n), t = y(x || "");
  return { loading: e, loadingText: t, setLoading: (r) => {
    const d = g;
    e[d(207)] = r;
  }, toggleLoading: () => {
    const r = g;
    e[r(207)] = !e[r(207)];
  }, setLoadingText: (r) => {
    const d = g;
    t[d(207)] = r;
  } };
}
function C() {
  const n = ["24717Jmczch", "2370kEbYwO", "6fbRbdD", "14967rKZawl", "value", "1565032WfTsJS", "185998Sjxcft", "5QilPLO", "22YmAceW", "780450fWPIvj", "13636ZZNKRc", "648jnJCTu", "5494668eiEFdn"];
  return C = function() {
    return n;
  }, C();
}
(function(n, x) {
  const e = L, t = n();
  for (; ; )
    try {
      if (parseInt(e(344)) / 1 + parseInt(e(300)) / 2 * (-parseInt(e(334)) / 3) + parseInt(e(313)) / 4 * (-parseInt(e(328)) / 5) + parseInt(e(302)) / 6 * (parseInt(e(309)) / 7) + parseInt(e(314)) / 8 * (-parseInt(e(312)) / 9) + parseInt(e(321)) / 10 + parseInt(e(322)) / 11 === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(T, 295288);
function r0() {
  const n = L, x = Y[n(331)], e = (c) => {
    const a = n;
    try {
      F() && window.webkit[a(317)][a(335)][a(342)](c), x && h[a(330)](a(339) + JSON[a(311)](c));
    } catch (r) {
      x && h[a(340)](a(337), JSON[a(311)](r));
    }
  };
  return { goAppPage: (c, a) => {
    const r = n, d = { goOrderDetail: () => ({ type: r(343), url: r(341), title: a[r(315)] || r(319), data: { actionType: 1, orderDetailsId: a[r(324)] || "", ...a } }), callPhone: () => ({ type: r(343), url: r(306), data: { actionType: 1, phone: a[r(307)] || "" } }), gotoNavigate: () => ({ type: "goto", url: "nav://gotoNavigate", data: { contactAddressLat: a[r(327)] || "", contactAddressLng: a[r(301)] || "", address: a[r(336)] || "", ...a } }), goBail: () => ({ type: r(343), url: "nav://goBail" }), updateOrderDetails: () => ({ type: "goto", url: r(304), data: {} }), upLoadVideo: () => ({ type: "goto", url: "nav://uploadVideo", data: {} }), upLoadImg: () => ({ type: r(343), url: "nav://uploadImage", data: { actionType: 1, photoCount: a[r(308)] || 4, showCamera: a.showCamera ?? !0 } }), downloadImg: () => ({ type: r(343), url: "nav://savePicture", data: { imgUrl: a[r(316)] } }), navHead: () => ({ type: "navHead", headSetting: { show: a[r(326)] ?? !0, color: a.color || r(333) } }), goto: (i) => ({ type: "goto", title: (i == null ? void 0 : i[r(315)]) || a.title || "", url: (i == null ? void 0 : i.url) || a.url }), login: () => d[r(343)]({ title: "登录", url: "nav://login" }), customerService: () => ({ type: r(343), url: r(338), data: { orderDetailsId: a[r(324)], orderNum: a[r(329)] } }), gotoProduct: () => ({ type: r(343), url: r(323), data: { friendUserId: a[r(310)] } }), download: () => ({ type: r(332), url: a[r(316)] }), appVoice: () => ({ type: r(343), url: r(325), data: {} }), addOrderMemo: () => ({ type: r(343), url: r(345), data: { orderDetailsId: a.id, abnormalCause: a[r(305)], ...a } }), editOrderMemo: () => ({ type: r(343), url: r(303), data: { orderDetailsId: a.id, abnormalCause: a[r(305)], ...a } }), goHome: () => ({ type: "goto", url: r(320) }), goSetWorkerState: () => ({ type: r(343), url: "nav://goSetWorkerState" }), goIdCardUpload: () => ({ type: r(343), url: r(318) }) };
    if (!d[c]) return;
    const v = d[c]();
    e(v);
  }, customGoAppPage: (c) => {
    e(c);
  } };
}
function L(n, x) {
  const e = T();
  return L = function(t, s) {
    return t = t - 300, e[t];
  }, L(n, x);
}
function T() {
  const n = ["orderNum", "debug", "isLogger", "download", "#00f", "15FkhswW", "navShouldHidden", "address", "app交互异常：", "nav://wechatCustomer", "app交互的参数：", "error", "nav://orderDetail", "postMessage", "goto", "210194RqwFPh", "nav://addOrderMemo", "84484JHDOVw", "contactAddressLng", "3858XTYPYZ", "nav://editOrderMemo", "nav://notifyOrderDetailRefresh", "value", "nav://tel", "phone", "size", "1750YGwExC", "info", "stringify", "331605bKcbGR", "49968AvMmWF", "56Xjgwoa", "title", "url", "messageHandlers", "nav://goIdcardUpload", "订单详情", "nav://0", "684520YlDXBg", "4124835sJyrlE", "nav://product", "orderDetailsId", "nav://uploadVoice", "show", "contactAddressLat", "20uvqWpE"];
  return T = function() {
    return n;
  }, T();
}
(function(n, x) {
  const e = m, t = n();
  for (; ; )
    try {
      if (-parseInt(e(337)) / 1 * (parseInt(e(333)) / 2) + -parseInt(e(336)) / 3 * (-parseInt(e(338)) / 4) + parseInt(e(335)) / 5 * (parseInt(e(332)) / 6) + -parseInt(e(342)) / 7 * (parseInt(e(340)) / 8) + -parseInt(e(330)) / 9 + parseInt(e(331)) / 10 + parseInt(e(334)) / 11 === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(W, 801529);
function m(n, x) {
  const e = W();
  return m = function(t, s) {
    return t = t - 330, e[t];
  }, m(n, x);
}
function s0() {
  return { arithmetic: (s, c, a) => {
    const r = m, d = k(c)[s](a || 0);
    return { number: d.value, string: d[r(339)]() };
  }, toString: (s) => {
    const c = m;
    return k(s)[c(339)]();
  }, toNumber: (s) => {
    const c = m;
    return k(s)[c(341)];
  }, custom: (s, c = {}) => k(s, c) };
}
function W() {
  const n = ["13020942zQYwxI", "845qGkWgL", "141lypLdw", "4EdUFYS", "47740lKkIQx", "toString", "438248wQzDAH", "value", "203HXdhNB", "1827378mXtOXB", "455150KhRRJG", "50076GZDQVV", "303718JimJQj"];
  return W = function() {
    return n;
  }, W();
}
function O(n, x) {
  const e = M();
  return O = function(t, s) {
    return t = t - 292, e[t];
  }, O(n, x);
}
(function(n, x) {
  const e = O, t = n();
  for (; ; )
    try {
      if (parseInt(e(294)) / 1 + -parseInt(e(312)) / 2 * (-parseInt(e(308)) / 3) + parseInt(e(292)) / 4 * (parseInt(e(311)) / 5) + -parseInt(e(297)) / 6 * (-parseInt(e(309)) / 7) + parseInt(e(293)) / 8 * (parseInt(e(295)) / 9) + parseInt(e(306)) / 10 + -parseInt(e(301)) / 11 === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(M, 150464);
function a0() {
  function n(x) {
    const e = O;
    if (!K() || !x[e(296)]) return !1;
    const t = new SpeechSynthesisUtterance();
    return t[e(296)] = x[e(296)], t[e(303)] = x[e(307)] || 1, t[e(304)] = x[e(304)] || "zh-CN", t[e(300)] = x[e(300)] || 1, t[e(298)] = x[e(298)] || 1, t[e(299)] = function() {
      x[e(305)] && x.endCallback();
    }, t.onstart = function() {
      const s = e;
      x[s(310)] && x[s(310)]();
    }, window[e(302)].speak(t), t;
  }
  return { speak: n };
}
function M() {
  const n = ["519566Disnhd", "2776YRDTXR", "282008jIesPI", "48196yMwQGi", "18fhnjlW", "text", "15198BDNSwh", "pitch", "onend", "volume", "7880818KPJjST", "speechSynthesis", "rate", "lang", "endCallback", "2610380ZytJvu", "speechRate", "3aogAxg", "427CsuAMS", "startCallback", "525Stxktf"];
  return M = function() {
    return n;
  }, M();
}
function N() {
  const n = ["value", "ping", "onmessage", "onopen", "ws runing... ", "1133146sEifDj", "96cDDBBq", "10NIETwt", "send", "9604tHEYvL", "pong", "4bhmAdZ", "100026gUvxAf", "stringify", "ws open...", "716243aoNrAA", "error", "onerror", "4mnFjIV", "63715mbnKol", "debug", "422187KvyLtv", "2269524AZQIMt", "40eBXgVh", "data"];
  return N = function() {
    return n;
  }, N();
}
(function(n, x) {
  const e = b, t = n();
  for (; ; )
    try {
      if (parseInt(e(491)) / 1 * (parseInt(e(500)) / 2) + parseInt(e(478)) / 3 * (-parseInt(e(493)) / 4) + parseInt(e(501)) / 5 * (parseInt(e(488)) / 6) + -parseInt(e(487)) / 7 + -parseInt(e(480)) / 8 * (parseInt(e(494)) / 9) + parseInt(e(489)) / 10 * (parseInt(e(497)) / 11) + parseInt(e(479)) / 12 === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(N, 119159);
function b(n, x) {
  const e = N();
  return b = function(t, s) {
    return t = t - 477, e[t];
  }, b(n, x);
}
function c0(n) {
  const x = Y.isLogger, { url: e, time: t = 15 * 1e3 } = n, s = q(e), c = y(null), a = y(null), r = y(null);
  function d() {
    clearTimeout(a[b(482)]), clearTimeout(r.value);
  }
  function v(u, o) {
    a.value = setTimeout(() => {
      const I = b;
      u[I(490)](I(483)), r[I(482)] = setTimeout(() => {
        i(o);
      }, t);
    }, t);
  }
  function i(u) {
    const o = b, { isPermission: I = !0, callback: D } = u;
    if (!I || !B() || (c[o(482)] = new WebSocket(s), !c[o(482)])) return !1;
    c[o(482)][o(485)] = () => {
      const p = o;
      x && h[p(477)](p(496));
    }, c[o(482)][o(484)] = (p) => {
      const f = o;
      d(), v(c.value, u), p[f(481)] != f(492) && (x && h[f(477)](f(486) + JSON.stringify(p[f(481)])), D && D(p.data));
    }, c[o(482)].onclose = () => {
      setTimeout(() => {
        i(u);
      }, 3 * 1e3);
    }, c[o(482)][o(499)] = (p) => {
      const f = o;
      x && h[f(498)]("ws error... " + JSON[f(495)](p));
    };
  }
  return { ws: c, initWs: i };
}
const A = S;
(function(n, x) {
  const e = S, t = n();
  for (; ; )
    try {
      if (parseInt(e(463)) / 1 * (parseInt(e(462)) / 2) + -parseInt(e(477)) / 3 + parseInt(e(481)) / 4 * (parseInt(e(483)) / 5) + -parseInt(e(475)) / 6 + parseInt(e(452)) / 7 * (-parseInt(e(461)) / 8) + -parseInt(e(470)) / 9 + -parseInt(e(453)) / 10 * (-parseInt(e(460)) / 11) === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(J, 821212);
function J() {
  const n = ["200", "ossClient", "注意：oss-client不存在", "getOssClient", "767682WUDVRd", "name", "400", "上传失败", "注意：需要设置oss-client", "7887480nkAVTD", "put", "2407191MeKwpx", "replace", "http://", "https://", "8hQMwyY", "message", "3637190ViFUoP", "7koqajq", "8034430FtHFZv", "上传成功", "random", "admin", "error", "then", "slice", "22LSWuTC", "491312sEMMCl", "6WUBahU", "7713ijWLVb", "isLogger", "toString"];
  return J = function() {
    return n;
  }, J();
}
function S(n, x) {
  const e = J();
  return S = function(t, s) {
    return t = t - 452, e[t];
  }, S(n, x);
}
var V;
class X {
  constructor() {
    P(this, V);
  }
  [(V = A(467), A(469))](x) {
    const e = A;
    if (!this.ossClient) {
      if (!x || !Q(x)) return Y[e(464)] && h[e(457)](e(474)), null;
      this[e(467)] = new G(x);
    }
    return this[e(467)];
  }
}
function o0() {
  const n = A, x = new X();
  return { getOssClient: (t) => x[n(469)](t), onUpload: (t) => {
    const s = S, { platform: c = s(456), file: a, success: r, error: d, isHttps: v = !0 } = t, i = x[s(469)]();
    if (!i) return Y[s(464)] && h[s(457)](s(468)), null;
    const u = /* @__PURE__ */ new Date(), o = w(u, "YYYY"), I = w(u, "MM"), D = w(u, "DD"), p = Math[s(455)]()[s(465)](36)[s(459)](-6) + "_" + Date.now(), f = a[s(471)], j = "/" + c + "/" + o + "/" + I + "/" + D + "/" + p + "-" + f;
    i[s(476)](j, a)[s(458)]((_) => {
      const l = s;
      r && r({ success: !0, context: { fileName: f, url: _.url[l(478)](l(479), l(v ? 480 : 479)), path: _.name }, message: l(454), requestId: w(u) + "_" + p, code: l(466) });
    }).catch((_) => {
      const l = s;
      d && d({ success: !1, context: (_ == null ? void 0 : _[l(482)]) || _, message: l(473), requestId: w(u) + "_" + p, code: l(472) });
    });
  } };
}
(function(n, x) {
  for (var e = H, t = n(); ; )
    try {
      var s = -parseInt(e(372)) / 1 * (-parseInt(e(375)) / 2) + -parseInt(e(374)) / 3 + parseInt(e(373)) / 4 * (parseInt(e(379)) / 5) + parseInt(e(376)) / 6 * (parseInt(e(380)) / 7) + -parseInt(e(370)) / 8 + parseInt(e(378)) / 9 + parseInt(e(371)) / 10 * (-parseInt(e(377)) / 11);
      if (s === x) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(U, 804200);
function H(n, x) {
  var e = U();
  return H = function(t, s) {
    t = t - 370;
    var c = e[t];
    return c;
  }, H(n, x);
}
function U() {
  var n = ["80lLKzAl", "382431UaKcGm", "892904xDYzli", "1940010zMMqwf", "1291SodsqH", "360556ITFoCr", "3872649JIxyfA", "298lJwSVD", "156LEUwue", "110tWRnXG", "9824985HEaAne"];
  return U = function() {
    return n;
  }, U();
}
export {
  s0 as useComputedNum,
  n0 as useLoading,
  r0 as useNavigatorApp,
  a0 as useSpeechRecognitionForSimple,
  o0 as useUpload,
  c0 as useWs
};
