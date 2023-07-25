/*! For license information please see 3138.203e2d54.js.LICENSE.txt */
"use strict";
(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([
  [3138],
  {
    73138: (t, e, i) => {
      i.d(e, { u: () => fs });
      var n = {};
      i.r(n),
        i.d(n, {
          afterMain: () => E,
          afterRead: () => y,
          afterWrite: () => O,
          applyStyles: () => I,
          arrow: () => Z,
          auto: () => l,
          basePlacements: () => c,
          beforeMain: () => w,
          beforeRead: () => b,
          beforeWrite: () => C,
          bottom: () => o,
          clippingParents: () => d,
          computeStyles: () => nt,
          createPopper: () => It,
          createPopperBase: () => $t,
          createPopperLite: () => Nt,
          detectOverflow: () => vt,
          end: () => u,
          eventListeners: () => ot,
          flip: () => yt,
          hide: () => Et,
          left: () => a,
          main: () => A,
          modifierPhases: () => x,
          offset: () => Ct,
          placements: () => _,
          popper: () => p,
          popperGenerator: () => Dt,
          popperOffsets: () => Tt,
          preventOverflow: () => Ot,
          read: () => v,
          reference: () => m,
          right: () => r,
          start: () => h,
          top: () => s,
          variationPlacements: () => g,
          viewport: () => f,
          write: () => T,
        });
      var s = "top",
        o = "bottom",
        r = "right",
        a = "left",
        l = "auto",
        c = [s, o, r, a],
        h = "start",
        u = "end",
        d = "clippingParents",
        f = "viewport",
        p = "popper",
        m = "reference",
        g = c.reduce(function (t, e) {
          return t.concat([e + "-" + h, e + "-" + u]);
        }, []),
        _ = [].concat(c, [l]).reduce(function (t, e) {
          return t.concat([e, e + "-" + h, e + "-" + u]);
        }, []),
        b = "beforeRead",
        v = "read",
        y = "afterRead",
        w = "beforeMain",
        A = "main",
        E = "afterMain",
        C = "beforeWrite",
        T = "write",
        O = "afterWrite",
        x = [b, v, y, w, A, E, C, T, O];
      function k(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function L(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function S(t) {
        return t instanceof L(t).Element || t instanceof Element;
      }
      function D(t) {
        return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
      }
      function $(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      const I = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var i = e.styles[t] || {},
              n = e.attributes[t] || {},
              s = e.elements[t];
            D(s) &&
              k(s) &&
              (Object.assign(s.style, i),
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                !1 === e
                  ? s.removeAttribute(t)
                  : s.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var e = t.state,
            i = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, i.popper),
            (e.styles = i),
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var n = e.elements[t],
                  s = e.attributes[t] || {},
                  o = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                  ).reduce(function (t, e) {
                    return (t[e] = ""), t;
                  }, {});
                D(n) &&
                  k(n) &&
                  (Object.assign(n.style, o),
                  Object.keys(s).forEach(function (t) {
                    n.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function N(t) {
        return t.split("-")[0];
      }
      var P = Math.max,
        M = Math.min,
        j = Math.round;
      function F() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function H() {
        return !/^((?!chrome|android).)*safari/i.test(F());
      }
      function W(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(),
          s = 1,
          o = 1;
        e &&
          D(t) &&
          ((s = (t.offsetWidth > 0 && j(n.width) / t.offsetWidth) || 1),
          (o = (t.offsetHeight > 0 && j(n.height) / t.offsetHeight) || 1));
        var r = (S(t) ? L(t) : window).visualViewport,
          a = !H() && i,
          l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
          c = (n.top + (a && r ? r.offsetTop : 0)) / o,
          h = n.width / s,
          u = n.height / o;
        return {
          width: h,
          height: u,
          top: c,
          right: l + h,
          bottom: c + u,
          left: l,
          x: l,
          y: c,
        };
      }
      function B(t) {
        var e = W(t),
          i = t.offsetWidth,
          n = t.offsetHeight;
        return (
          Math.abs(e.width - i) <= 1 && (i = e.width),
          Math.abs(e.height - n) <= 1 && (n = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
        );
      }
      function z(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && $(i)) {
          var n = e;
          do {
            if (n && t.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function R(t) {
        return L(t).getComputedStyle(t);
      }
      function q(t) {
        return ["table", "td", "th"].indexOf(k(t)) >= 0;
      }
      function V(t) {
        return ((S(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function K(t) {
        return "html" === k(t)
          ? t
          : t.assignedSlot || t.parentNode || ($(t) ? t.host : null) || V(t);
      }
      function X(t) {
        return D(t) && "fixed" !== R(t).position ? t.offsetParent : null;
      }
      function Y(t) {
        for (var e = L(t), i = X(t); i && q(i) && "static" === R(i).position; )
          i = X(i);
        return i &&
          ("html" === k(i) || ("body" === k(i) && "static" === R(i).position))
          ? e
          : i ||
              (function (t) {
                var e = /firefox/i.test(F());
                if (/Trident/i.test(F()) && D(t) && "fixed" === R(t).position)
                  return null;
                var i = K(t);
                for (
                  $(i) && (i = i.host);
                  D(i) && ["html", "body"].indexOf(k(i)) < 0;

                ) {
                  var n = R(i);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (e && "filter" === n.willChange) ||
                    (e && n.filter && "none" !== n.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      function U(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function Q(t, e, i) {
        return P(t, M(e, i));
      }
      function G(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function J(t, e) {
        return e.reduce(function (e, i) {
          return (e[i] = t), e;
        }, {});
      }
      const Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            i = t.state,
            n = t.name,
            l = t.options,
            h = i.elements.arrow,
            u = i.modifiersData.popperOffsets,
            d = N(i.placement),
            f = U(d),
            p = [a, r].indexOf(d) >= 0 ? "height" : "width";
          if (h && u) {
            var m = (function (t, e) {
                return G(
                  "number" !=
                    typeof (t =
                      "function" == typeof t
                        ? t(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : t)
                    ? t
                    : J(t, c)
                );
              })(l.padding, i),
              g = B(h),
              _ = "y" === f ? s : a,
              b = "y" === f ? o : r,
              v =
                i.rects.reference[p] +
                i.rects.reference[f] -
                u[f] -
                i.rects.popper[p],
              y = u[f] - i.rects.reference[f],
              w = Y(h),
              A = w
                ? "y" === f
                  ? w.clientHeight || 0
                  : w.clientWidth || 0
                : 0,
              E = v / 2 - y / 2,
              C = m[_],
              T = A - g[p] - m[b],
              O = A / 2 - g[p] / 2 + E,
              x = Q(C, O, T),
              k = f;
            i.modifiersData[n] =
              (((e = {})[k] = x), (e.centerOffset = x - O), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            i = t.options.element,
            n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n &&
            ("string" != typeof n ||
              (n = e.elements.popper.querySelector(n))) &&
            z(e.elements.popper, n) &&
            (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function tt(t) {
        return t.split("-")[1];
      }
      var et = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function it(t) {
        var e,
          i = t.popper,
          n = t.popperRect,
          l = t.placement,
          c = t.variation,
          h = t.offsets,
          d = t.position,
          f = t.gpuAcceleration,
          p = t.adaptive,
          m = t.roundOffsets,
          g = t.isFixed,
          _ = h.x,
          b = void 0 === _ ? 0 : _,
          v = h.y,
          y = void 0 === v ? 0 : v,
          w = "function" == typeof m ? m({ x: b, y }) : { x: b, y };
        (b = w.x), (y = w.y);
        var A = h.hasOwnProperty("x"),
          E = h.hasOwnProperty("y"),
          C = a,
          T = s,
          O = window;
        if (p) {
          var x = Y(i),
            k = "clientHeight",
            S = "clientWidth";
          if (
            (x === L(i) &&
              "static" !== R((x = V(i))).position &&
              "absolute" === d &&
              ((k = "scrollHeight"), (S = "scrollWidth")),
            l === s || ((l === a || l === r) && c === u))
          )
            (T = o),
              (y -=
                (g && x === O && O.visualViewport
                  ? O.visualViewport.height
                  : x[k]) - n.height),
              (y *= f ? 1 : -1);
          if (l === a || ((l === s || l === o) && c === u))
            (C = r),
              (b -=
                (g && x === O && O.visualViewport
                  ? O.visualViewport.width
                  : x[S]) - n.width),
              (b *= f ? 1 : -1);
        }
        var D,
          $ = Object.assign({ position: d }, p && et),
          I =
            !0 === m
              ? (function (t, e) {
                  var i = t.x,
                    n = t.y,
                    s = e.devicePixelRatio || 1;
                  return { x: j(i * s) / s || 0, y: j(n * s) / s || 0 };
                })({ x: b, y }, L(i))
              : { x: b, y };
        return (
          (b = I.x),
          (y = I.y),
          f
            ? Object.assign(
                {},
                $,
                (((D = {})[T] = E ? "0" : ""),
                (D[C] = A ? "0" : ""),
                (D.transform =
                  (O.devicePixelRatio || 1) <= 1
                    ? "translate(" + b + "px, " + y + "px)"
                    : "translate3d(" + b + "px, " + y + "px, 0)"),
                D)
              )
            : Object.assign(
                {},
                $,
                (((e = {})[T] = E ? y + "px" : ""),
                (e[C] = A ? b + "px" : ""),
                (e.transform = ""),
                e)
              )
        );
      }
      const nt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = i.gpuAcceleration,
            s = void 0 === n || n,
            o = i.adaptive,
            r = void 0 === o || o,
            a = i.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: N(e.placement),
              variation: tt(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: s,
              isFixed: "fixed" === e.options.strategy,
            };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              it(
                Object.assign({}, c, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: r,
                  roundOffsets: l,
                })
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                it(
                  Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  })
                )
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement,
            }));
        },
        data: {},
      };
      var st = { passive: !0 };
      const ot = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            i = t.instance,
            n = t.options,
            s = n.scroll,
            o = void 0 === s || s,
            r = n.resize,
            a = void 0 === r || r,
            l = L(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            o &&
              c.forEach(function (t) {
                t.addEventListener("scroll", i.update, st);
              }),
            a && l.addEventListener("resize", i.update, st),
            function () {
              o &&
                c.forEach(function (t) {
                  t.removeEventListener("scroll", i.update, st);
                }),
                a && l.removeEventListener("resize", i.update, st);
            }
          );
        },
        data: {},
      };
      var rt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function at(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return rt[t];
        });
      }
      var lt = { start: "end", end: "start" };
      function ct(t) {
        return t.replace(/start|end/g, function (t) {
          return lt[t];
        });
      }
      function ht(t) {
        var e = L(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function ut(t) {
        return W(V(t)).left + ht(t).scrollLeft;
      }
      function dt(t) {
        var e = R(t),
          i = e.overflow,
          n = e.overflowX,
          s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
      }
      function ft(t) {
        return ["html", "body", "#document"].indexOf(k(t)) >= 0
          ? t.ownerDocument.body
          : D(t) && dt(t)
          ? t
          : ft(K(t));
      }
      function pt(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = ft(t),
          s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
          o = L(n),
          r = s ? [o].concat(o.visualViewport || [], dt(n) ? n : []) : n,
          a = e.concat(r);
        return s ? a : a.concat(pt(K(r)));
      }
      function mt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function gt(t, e, i) {
        return e === f
          ? mt(
              (function (t, e) {
                var i = L(t),
                  n = V(t),
                  s = i.visualViewport,
                  o = n.clientWidth,
                  r = n.clientHeight,
                  a = 0,
                  l = 0;
                if (s) {
                  (o = s.width), (r = s.height);
                  var c = H();
                  (c || (!c && "fixed" === e)) &&
                    ((a = s.offsetLeft), (l = s.offsetTop));
                }
                return { width: o, height: r, x: a + ut(t), y: l };
              })(t, i)
            )
          : S(e)
          ? (function (t, e) {
              var i = W(t, !1, "fixed" === e);
              return (
                (i.top = i.top + t.clientTop),
                (i.left = i.left + t.clientLeft),
                (i.bottom = i.top + t.clientHeight),
                (i.right = i.left + t.clientWidth),
                (i.width = t.clientWidth),
                (i.height = t.clientHeight),
                (i.x = i.left),
                (i.y = i.top),
                i
              );
            })(e, i)
          : mt(
              (function (t) {
                var e,
                  i = V(t),
                  n = ht(t),
                  s = null == (e = t.ownerDocument) ? void 0 : e.body,
                  o = P(
                    i.scrollWidth,
                    i.clientWidth,
                    s ? s.scrollWidth : 0,
                    s ? s.clientWidth : 0
                  ),
                  r = P(
                    i.scrollHeight,
                    i.clientHeight,
                    s ? s.scrollHeight : 0,
                    s ? s.clientHeight : 0
                  ),
                  a = -n.scrollLeft + ut(t),
                  l = -n.scrollTop;
                return (
                  "rtl" === R(s || i).direction &&
                    (a += P(i.clientWidth, s ? s.clientWidth : 0) - o),
                  { width: o, height: r, x: a, y: l }
                );
              })(V(t))
            );
      }
      function _t(t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = pt(K(t)),
                    i =
                      ["absolute", "fixed"].indexOf(R(t).position) >= 0 && D(t)
                        ? Y(t)
                        : t;
                  return S(i)
                    ? e.filter(function (t) {
                        return S(t) && z(t, i) && "body" !== k(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = gt(t, i, n);
            return (
              (e.top = P(s.top, e.top)),
              (e.right = M(s.right, e.right)),
              (e.bottom = M(s.bottom, e.bottom)),
              (e.left = P(s.left, e.left)),
              e
            );
          }, gt(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function bt(t) {
        var e,
          i = t.reference,
          n = t.element,
          l = t.placement,
          c = l ? N(l) : null,
          d = l ? tt(l) : null,
          f = i.x + i.width / 2 - n.width / 2,
          p = i.y + i.height / 2 - n.height / 2;
        switch (c) {
          case s:
            e = { x: f, y: i.y - n.height };
            break;
          case o:
            e = { x: f, y: i.y + i.height };
            break;
          case r:
            e = { x: i.x + i.width, y: p };
            break;
          case a:
            e = { x: i.x - n.width, y: p };
            break;
          default:
            e = { x: i.x, y: i.y };
        }
        var m = c ? U(c) : null;
        if (null != m) {
          var g = "y" === m ? "height" : "width";
          switch (d) {
            case h:
              e[m] = e[m] - (i[g] / 2 - n[g] / 2);
              break;
            case u:
              e[m] = e[m] + (i[g] / 2 - n[g] / 2);
          }
        }
        return e;
      }
      function vt(t, e) {
        void 0 === e && (e = {});
        var i = e,
          n = i.placement,
          a = void 0 === n ? t.placement : n,
          l = i.strategy,
          h = void 0 === l ? t.strategy : l,
          u = i.boundary,
          g = void 0 === u ? d : u,
          _ = i.rootBoundary,
          b = void 0 === _ ? f : _,
          v = i.elementContext,
          y = void 0 === v ? p : v,
          w = i.altBoundary,
          A = void 0 !== w && w,
          E = i.padding,
          C = void 0 === E ? 0 : E,
          T = G("number" != typeof C ? C : J(C, c)),
          O = y === p ? m : p,
          x = t.rects.popper,
          k = t.elements[A ? O : y],
          L = _t(S(k) ? k : k.contextElement || V(t.elements.popper), g, b, h),
          D = W(t.elements.reference),
          $ = bt({
            reference: D,
            element: x,
            strategy: "absolute",
            placement: a,
          }),
          I = mt(Object.assign({}, x, $)),
          N = y === p ? I : D,
          P = {
            top: L.top - N.top + T.top,
            bottom: N.bottom - L.bottom + T.bottom,
            left: L.left - N.left + T.left,
            right: N.right - L.right + T.right,
          },
          M = t.modifiersData.offset;
        if (y === p && M) {
          var j = M[a];
          Object.keys(P).forEach(function (t) {
            var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
              i = [s, o].indexOf(t) >= 0 ? "y" : "x";
            P[t] += j[i] * e;
          });
        }
        return P;
      }
      const yt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name;
          if (!e.modifiersData[n]._skip) {
            for (
              var u = i.mainAxis,
                d = void 0 === u || u,
                f = i.altAxis,
                p = void 0 === f || f,
                m = i.fallbackPlacements,
                b = i.padding,
                v = i.boundary,
                y = i.rootBoundary,
                w = i.altBoundary,
                A = i.flipVariations,
                E = void 0 === A || A,
                C = i.allowedAutoPlacements,
                T = e.options.placement,
                O = N(T),
                x =
                  m ||
                  (O === T || !E
                    ? [at(T)]
                    : (function (t) {
                        if (N(t) === l) return [];
                        var e = at(t);
                        return [ct(t), e, ct(e)];
                      })(T)),
                k = [T].concat(x).reduce(function (t, i) {
                  return t.concat(
                    N(i) === l
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var i = e,
                            n = i.placement,
                            s = i.boundary,
                            o = i.rootBoundary,
                            r = i.padding,
                            a = i.flipVariations,
                            l = i.allowedAutoPlacements,
                            h = void 0 === l ? _ : l,
                            u = tt(n),
                            d = u
                              ? a
                                ? g
                                : g.filter(function (t) {
                                    return tt(t) === u;
                                  })
                              : c,
                            f = d.filter(function (t) {
                              return h.indexOf(t) >= 0;
                            });
                          0 === f.length && (f = d);
                          var p = f.reduce(function (e, i) {
                            return (
                              (e[i] = vt(t, {
                                placement: i,
                                boundary: s,
                                rootBoundary: o,
                                padding: r,
                              })[N(i)]),
                              e
                            );
                          }, {});
                          return Object.keys(p).sort(function (t, e) {
                            return p[t] - p[e];
                          });
                        })(e, {
                          placement: i,
                          boundary: v,
                          rootBoundary: y,
                          padding: b,
                          flipVariations: E,
                          allowedAutoPlacements: C,
                        })
                      : i
                  );
                }, []),
                L = e.rects.reference,
                S = e.rects.popper,
                D = new Map(),
                $ = !0,
                I = k[0],
                P = 0;
              P < k.length;
              P++
            ) {
              var M = k[P],
                j = N(M),
                F = tt(M) === h,
                H = [s, o].indexOf(j) >= 0,
                W = H ? "width" : "height",
                B = vt(e, {
                  placement: M,
                  boundary: v,
                  rootBoundary: y,
                  altBoundary: w,
                  padding: b,
                }),
                z = H ? (F ? r : a) : F ? o : s;
              L[W] > S[W] && (z = at(z));
              var R = at(z),
                q = [];
              if (
                (d && q.push(B[j] <= 0),
                p && q.push(B[z] <= 0, B[R] <= 0),
                q.every(function (t) {
                  return t;
                }))
              ) {
                (I = M), ($ = !1);
                break;
              }
              D.set(M, q);
            }
            if ($)
              for (
                var V = function (t) {
                    var e = k.find(function (e) {
                      var i = D.get(e);
                      if (i)
                        return i.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return (I = e), "break";
                  },
                  K = E ? 3 : 1;
                K > 0;
                K--
              ) {
                if ("break" === V(K)) break;
              }
            e.placement !== I &&
              ((e.modifiersData[n]._skip = !0),
              (e.placement = I),
              (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function wt(t, e, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x,
          }
        );
      }
      function At(t) {
        return [s, r, o, a].some(function (e) {
          return t[e] >= 0;
        });
      }
      const Et = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            i = t.name,
            n = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = vt(e, { elementContext: "reference" }),
            a = vt(e, { altBoundary: !0 }),
            l = wt(r, n),
            c = wt(a, s, o),
            h = At(l),
            u = At(c);
          (e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: h,
            hasPopperEscaped: u,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": h,
              "data-popper-escaped": u,
            }));
        },
      };
      const Ct = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            o = i.offset,
            l = void 0 === o ? [0, 0] : o,
            c = _.reduce(function (t, i) {
              return (
                (t[i] = (function (t, e, i) {
                  var n = N(t),
                    o = [a, s].indexOf(n) >= 0 ? -1 : 1,
                    l =
                      "function" == typeof i
                        ? i(Object.assign({}, e, { placement: t }))
                        : i,
                    c = l[0],
                    h = l[1];
                  return (
                    (c = c || 0),
                    (h = (h || 0) * o),
                    [a, r].indexOf(n) >= 0 ? { x: h, y: c } : { x: c, y: h }
                  );
                })(i, e.rects, l)),
                t
              );
            }, {}),
            h = c[e.placement],
            u = h.x,
            d = h.y;
          null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += u),
            (e.modifiersData.popperOffsets.y += d)),
            (e.modifiersData[n] = c);
        },
      };
      const Tt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            i = t.name;
          e.modifiersData[i] = bt({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      };
      const Ot = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            l = i.mainAxis,
            c = void 0 === l || l,
            u = i.altAxis,
            d = void 0 !== u && u,
            f = i.boundary,
            p = i.rootBoundary,
            m = i.altBoundary,
            g = i.padding,
            _ = i.tether,
            b = void 0 === _ || _,
            v = i.tetherOffset,
            y = void 0 === v ? 0 : v,
            w = vt(e, {
              boundary: f,
              rootBoundary: p,
              padding: g,
              altBoundary: m,
            }),
            A = N(e.placement),
            E = tt(e.placement),
            C = !E,
            T = U(A),
            O = "x" === T ? "y" : "x",
            x = e.modifiersData.popperOffsets,
            k = e.rects.reference,
            L = e.rects.popper,
            S =
              "function" == typeof y
                ? y(Object.assign({}, e.rects, { placement: e.placement }))
                : y,
            D =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            $ = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            I = { x: 0, y: 0 };
          if (x) {
            if (c) {
              var j,
                F = "y" === T ? s : a,
                H = "y" === T ? o : r,
                W = "y" === T ? "height" : "width",
                z = x[T],
                R = z + w[F],
                q = z - w[H],
                V = b ? -L[W] / 2 : 0,
                K = E === h ? k[W] : L[W],
                X = E === h ? -L[W] : -k[W],
                G = e.elements.arrow,
                J = b && G ? B(G) : { width: 0, height: 0 },
                Z = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                et = Z[F],
                it = Z[H],
                nt = Q(0, k[W], J[W]),
                st = C
                  ? k[W] / 2 - V - nt - et - D.mainAxis
                  : K - nt - et - D.mainAxis,
                ot = C
                  ? -k[W] / 2 + V + nt + it + D.mainAxis
                  : X + nt + it + D.mainAxis,
                rt = e.elements.arrow && Y(e.elements.arrow),
                at = rt
                  ? "y" === T
                    ? rt.clientTop || 0
                    : rt.clientLeft || 0
                  : 0,
                lt = null != (j = null == $ ? void 0 : $[T]) ? j : 0,
                ct = z + ot - lt,
                ht = Q(b ? M(R, z + st - lt - at) : R, z, b ? P(q, ct) : q);
              (x[T] = ht), (I[T] = ht - z);
            }
            if (d) {
              var ut,
                dt = "x" === T ? s : a,
                ft = "x" === T ? o : r,
                pt = x[O],
                mt = "y" === O ? "height" : "width",
                gt = pt + w[dt],
                _t = pt - w[ft],
                bt = -1 !== [s, a].indexOf(A),
                yt = null != (ut = null == $ ? void 0 : $[O]) ? ut : 0,
                wt = bt ? gt : pt - k[mt] - L[mt] - yt + D.altAxis,
                At = bt ? pt + k[mt] + L[mt] - yt - D.altAxis : _t,
                Et =
                  b && bt
                    ? (function (t, e, i) {
                        var n = Q(t, e, i);
                        return n > i ? i : n;
                      })(wt, pt, At)
                    : Q(b ? wt : gt, pt, b ? At : _t);
              (x[O] = Et), (I[O] = Et - pt);
            }
            e.modifiersData[n] = I;
          }
        },
        requiresIfExists: ["offset"],
      };
      function xt(t, e, i) {
        void 0 === i && (i = !1);
        var n,
          s,
          o = D(e),
          r =
            D(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                i = j(e.width) / t.offsetWidth || 1,
                n = j(e.height) / t.offsetHeight || 1;
              return 1 !== i || 1 !== n;
            })(e),
          a = V(e),
          l = W(t, r, i),
          c = { scrollLeft: 0, scrollTop: 0 },
          h = { x: 0, y: 0 };
        return (
          (o || (!o && !i)) &&
            (("body" !== k(e) || dt(a)) &&
              (c =
                (n = e) !== L(n) && D(n)
                  ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                  : ht(n)),
            D(e)
              ? (((h = W(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
              : a && (h.x = ut(a))),
          {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function kt(t) {
        var e = new Map(),
          i = new Set(),
          n = [];
        function s(t) {
          i.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!i.has(t)) {
                  var n = e.get(t);
                  n && s(n);
                }
              }),
            n.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            i.has(t.name) || s(t);
          }),
          n
        );
      }
      var Lt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function St() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function Dt(t) {
        void 0 === t && (t = {});
        var e = t,
          i = e.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = e.defaultOptions,
          o = void 0 === s ? Lt : s;
        return function (t, e, i) {
          void 0 === i && (i = o);
          var s,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Lt, o),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            h = {
              state: a,
              setOptions: function (i) {
                var s = "function" == typeof i ? i(a.options) : i;
                u(),
                  (a.options = Object.assign({}, o, a.options, s)),
                  (a.scrollParents = {
                    reference: S(t)
                      ? pt(t)
                      : t.contextElement
                      ? pt(t.contextElement)
                      : [],
                    popper: pt(e),
                  });
                var r = (function (t) {
                  var e = kt(t);
                  return x.reduce(function (t, i) {
                    return t.concat(
                      e.filter(function (t) {
                        return t.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function (t) {
                    var e = t.reduce(function (t, e) {
                      var i = t[e.name];
                      return (
                        (t[e.name] = i
                          ? Object.assign({}, i, e, {
                              options: Object.assign({}, i.options, e.options),
                              data: Object.assign({}, i.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {});
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  })([].concat(n, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = r.filter(function (t) {
                    return t.enabled;
                  })),
                  a.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      i = t.options,
                      n = void 0 === i ? {} : i,
                      s = t.effect;
                    if ("function" == typeof s) {
                      var o = s({ state: a, name: e, instance: h, options: n }),
                        r = function () {};
                      l.push(o || r);
                    }
                  }),
                  h.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var t = a.elements,
                    e = t.reference,
                    i = t.popper;
                  if (St(e, i)) {
                    (a.rects = {
                      reference: xt(e, Y(i), "fixed" === a.options.strategy),
                      popper: B(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (t) {
                        return (a.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var n = 0; n < a.orderedModifiers.length; n++)
                      if (!0 !== a.reset) {
                        var s = a.orderedModifiers[n],
                          o = s.fn,
                          r = s.options,
                          l = void 0 === r ? {} : r,
                          u = s.name;
                        "function" == typeof o &&
                          (a =
                            o({ state: a, options: l, name: u, instance: h }) ||
                            a);
                      } else (a.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((s = function () {
                  return new Promise(function (t) {
                    h.forceUpdate(), t(a);
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (r = void 0), t(s());
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                u(), (c = !0);
              },
            };
          if (!St(t, e)) return h;
          function u() {
            l.forEach(function (t) {
              return t();
            }),
              (l = []);
          }
          return (
            h.setOptions(i).then(function (t) {
              !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }),
            h
          );
        };
      }
      var $t = Dt(),
        It = Dt({ defaultModifiers: [ot, Tt, nt, I, Ct, yt, Ot, Z, Et] }),
        Nt = Dt({ defaultModifiers: [ot, Tt, nt, I] }),
        Pt = i(19755);
      const Mt = new Map(),
        jt = {
          set(t, e, i) {
            Mt.has(t) || Mt.set(t, new Map());
            const n = Mt.get(t);
            n.has(e) || 0 === n.size
              ? n.set(e, i)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(n.keys())[0]
                  }.`
                );
          },
          get: (t, e) => (Mt.has(t) && Mt.get(t).get(e)) || null,
          remove(t, e) {
            if (!Mt.has(t)) return;
            const i = Mt.get(t);
            i.delete(e), 0 === i.size && Mt.delete(t);
          },
        },
        Ft = "transitionend",
        Ht = (t) => (
          t &&
            window.CSS &&
            window.CSS.escape &&
            (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
          t
        ),
        Wt = (t) => {
          t.dispatchEvent(new Event(Ft));
        },
        Bt = (t) =>
          !(!t || "object" != typeof t) &&
          (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        zt = (t) =>
          Bt(t)
            ? t.jquery
              ? t[0]
              : t
            : "string" == typeof t && t.length > 0
            ? document.querySelector(Ht(t))
            : null,
        Rt = (t) => {
          if (!Bt(t) || 0 === t.getClientRects().length) return !1;
          const e =
              "visible" === getComputedStyle(t).getPropertyValue("visibility"),
            i = t.closest("details:not([open])");
          if (!i) return e;
          if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
          }
          return e;
        },
        qt = (t) =>
          !t ||
          t.nodeType !== Node.ELEMENT_NODE ||
          !!t.classList.contains("disabled") ||
          (void 0 !== t.disabled
            ? t.disabled
            : t.hasAttribute("disabled") &&
              "false" !== t.getAttribute("disabled")),
        Vt = (t) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
          }
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? Vt(t.parentNode)
            : null;
        },
        Kt = () => {},
        Xt = (t) => {
          t.offsetHeight;
        },
        Yt = () =>
          Pt && !document.body.hasAttribute("data-bs-no-jquery") ? Pt : null,
        Ut = [],
        Qt = () => "rtl" === document.documentElement.dir,
        Gt = (t) => {
          var e;
          (e = () => {
            const e = Yt();
            if (e) {
              const i = t.NAME,
                n = e.fn[i];
              (e.fn[i] = t.jQueryInterface),
                (e.fn[i].Constructor = t),
                (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
            }
          }),
            "loading" === document.readyState
              ? (Ut.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    for (const t of Ut) t();
                  }),
                Ut.push(e))
              : e();
        },
        Jt = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
        Zt = (t, e, i = !0) => {
          if (!i) return void Jt(t);
          const n =
            ((t) => {
              if (!t) return 0;
              let { transitionDuration: e, transitionDelay: i } =
                window.getComputedStyle(t);
              const n = Number.parseFloat(e),
                s = Number.parseFloat(i);
              return n || s
                ? ((e = e.split(",")[0]),
                  (i = i.split(",")[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                : 0;
            })(e) + 5;
          let s = !1;
          const o = ({ target: i }) => {
            i === e && ((s = !0), e.removeEventListener(Ft, o), Jt(t));
          };
          e.addEventListener(Ft, o),
            setTimeout(() => {
              s || Wt(e);
            }, n);
        },
        te = (t, e, i, n) => {
          const s = t.length;
          let o = t.indexOf(e);
          return -1 === o
            ? !i && n
              ? t[s - 1]
              : t[0]
            : ((o += i ? 1 : -1),
              n && (o = (o + s) % s),
              t[Math.max(0, Math.min(o, s - 1))]);
        },
        ee = /[^.]*(?=\..*)\.|.*/,
        ie = /\..*/,
        ne = /::\d+$/,
        se = {};
      let oe = 1;
      const re = { mouseenter: "mouseover", mouseleave: "mouseout" },
        ae = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function le(t, e) {
        return (e && `${e}::${oe++}`) || t.uidEvent || oe++;
      }
      function ce(t) {
        const e = le(t);
        return (t.uidEvent = e), (se[e] = se[e] || {}), se[e];
      }
      function he(t, e, i = null) {
        return Object.values(t).find(
          (t) => t.callable === e && t.delegationSelector === i
        );
      }
      function ue(t, e, i) {
        const n = "string" == typeof e,
          s = n ? i : e || i;
        let o = me(t);
        return ae.has(o) || (o = t), [n, s, o];
      }
      function de(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = ue(e, i, n);
        if (e in re) {
          const t = (t) =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e);
            };
          r = t(r);
        }
        const l = ce(t),
          c = l[a] || (l[a] = {}),
          h = he(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const u = le(r, e.replace(ee, "")),
          d = o
            ? (function (t, e, i) {
                return function n(s) {
                  const o = t.querySelectorAll(e);
                  for (let { target: r } = s; r && r !== this; r = r.parentNode)
                    for (const a of o)
                      if (a === r)
                        return (
                          _e(s, { delegateTarget: r }),
                          n.oneOff && ge.off(t, s.type, e, i),
                          i.apply(r, [s])
                        );
                };
              })(t, i, r)
            : (function (t, e) {
                return function i(n) {
                  return (
                    _e(n, { delegateTarget: t }),
                    i.oneOff && ge.off(t, n.type, e),
                    e.apply(t, [n])
                  );
                };
              })(t, r);
        (d.delegationSelector = o ? i : null),
          (d.callable = r),
          (d.oneOff = s),
          (d.uidEvent = u),
          (c[u] = d),
          t.addEventListener(a, d, o);
      }
      function fe(t, e, i, n, s) {
        const o = he(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
      }
      function pe(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))
          o.includes(n) && fe(t, e, i, r.callable, r.delegationSelector);
      }
      function me(t) {
        return (t = t.replace(ie, "")), re[t] || t;
      }
      const ge = {
        on(t, e, i, n) {
          de(t, e, i, n, !1);
        },
        one(t, e, i, n) {
          de(t, e, i, n, !0);
        },
        off(t, e, i, n) {
          if ("string" != typeof e || !t) return;
          const [s, o, r] = ue(e, i, n),
            a = r !== e,
            l = ce(t),
            c = l[r] || {},
            h = e.startsWith(".");
          if (void 0 === o) {
            if (h) for (const i of Object.keys(l)) pe(t, l, i, e.slice(1));
            for (const [i, n] of Object.entries(c)) {
              const s = i.replace(ne, "");
              (a && !e.includes(s)) ||
                fe(t, l, r, n.callable, n.delegationSelector);
            }
          } else {
            if (!Object.keys(c).length) return;
            fe(t, l, r, o, s ? i : null);
          }
        },
        trigger(t, e, i) {
          if ("string" != typeof e || !t) return null;
          const n = Yt();
          let s = null,
            o = !0,
            r = !0,
            a = !1;
          e !== me(e) &&
            n &&
            ((s = n.Event(e, i)),
            n(t).trigger(s),
            (o = !s.isPropagationStopped()),
            (r = !s.isImmediatePropagationStopped()),
            (a = s.isDefaultPrevented()));
          const l = _e(new Event(e, { bubbles: o, cancelable: !0 }), i);
          return (
            a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
          );
        },
      };
      function _e(t, e = {}) {
        for (const [i, n] of Object.entries(e))
          try {
            t[i] = n;
          } catch (e) {
            Object.defineProperty(t, i, { configurable: !0, get: () => n });
          }
        return t;
      }
      function be(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
          return JSON.parse(decodeURIComponent(t));
        } catch (e) {
          return t;
        }
      }
      function ve(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
      }
      const ye = {
        setDataAttribute(t, e, i) {
          t.setAttribute(`data-bs-${ve(e)}`, i);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${ve(e)}`);
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {},
            i = Object.keys(t.dataset).filter(
              (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
            );
          for (const n of i) {
            let i = n.replace(/^bs/, "");
            (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
              (e[i] = be(t.dataset[n]));
          }
          return e;
        },
        getDataAttribute: (t, e) => be(t.getAttribute(`data-bs-${ve(e)}`)),
      };
      class we {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!'
          );
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return t;
        }
        _mergeConfigObj(t, e) {
          const i = Bt(e) ? ye.getDataAttribute(e, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof i ? i : {}),
            ...(Bt(e) ? ye.getDataAttributes(e) : {}),
            ...("object" == typeof t ? t : {}),
          };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const [n, s] of Object.entries(e)) {
            const e = t[n],
              o = Bt(e)
                ? "element"
                : null == (i = e)
                ? `${i}`
                : Object.prototype.toString
                    .call(i)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
            if (!new RegExp(s).test(o))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`
              );
          }
          var i;
        }
      }
      class Ae extends we {
        constructor(t, e) {
          super(),
            (t = zt(t)) &&
              ((this._element = t),
              (this._config = this._getConfig(e)),
              jt.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          jt.remove(this._element, this.constructor.DATA_KEY),
            ge.off(this._element, this.constructor.EVENT_KEY);
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
          Zt(t, e, i);
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t, this._element)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        static getInstance(t) {
          return jt.get(zt(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
          return (
            this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
          );
        }
        static get VERSION() {
          return "5.3.0";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
          return `${t}${this.EVENT_KEY}`;
        }
      }
      const Ee = (t) => {
          let e = t.getAttribute("data-bs-target");
          if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            i.includes("#") &&
              !i.startsWith("#") &&
              (i = `#${i.split("#")[1]}`),
              (e = i && "#" !== i ? i.trim() : null);
          }
          return Ht(e);
        },
        Ce = {
          find: (t, e = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) =>
            Element.prototype.querySelector.call(e, t),
          children: (t, e) =>
            [].concat(...t.children).filter((t) => t.matches(e)),
          parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n; ) i.push(n), (n = n.parentNode.closest(e));
            return i;
          },
          prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
              if (i.matches(e)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
              if (i.matches(e)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
          focusableChildren(t) {
            const e = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((t) => `${t}:not([tabindex^="-"])`)
              .join(",");
            return this.find(e, t).filter((t) => !qt(t) && Rt(t));
          },
          getSelectorFromElement(t) {
            const e = Ee(t);
            return e && Ce.findOne(e) ? e : null;
          },
          getElementFromSelector(t) {
            const e = Ee(t);
            return e ? Ce.findOne(e) : null;
          },
          getMultipleElementsFromSelector(t) {
            const e = Ee(t);
            return e ? Ce.find(e) : [];
          },
        },
        Te = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`,
            n = t.NAME;
          ge.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
              (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
              qt(this))
            )
              return;
            const s = Ce.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
          });
        },
        Oe = ".bs.alert",
        xe = `close${Oe}`,
        ke = `closed${Oe}`;
      class Le extends Ae {
        static get NAME() {
          return "alert";
        }
        close() {
          if (ge.trigger(this._element, xe).defaultPrevented) return;
          this._element.classList.remove("show");
          const t = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
          this._element.remove(), ge.trigger(this._element, ke), this.dispose();
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Le.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Te(Le, "close"), Gt(Le);
      const Se = '[data-bs-toggle="button"]';
      class De extends Ae {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = De.getOrCreateInstance(this);
            "toggle" === t && e[t]();
          });
        }
      }
      ge.on(document, "click.bs.button.data-api", Se, (t) => {
        t.preventDefault();
        const e = t.target.closest(Se);
        De.getOrCreateInstance(e).toggle();
      }),
        Gt(De);
      const $e = ".bs.swipe",
        Ie = `touchstart${$e}`,
        Ne = `touchmove${$e}`,
        Pe = `touchend${$e}`,
        Me = `pointerdown${$e}`,
        je = `pointerup${$e}`,
        Fe = { endCallback: null, leftCallback: null, rightCallback: null },
        He = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class We extends we {
        constructor(t, e) {
          super(),
            (this._element = t),
            t &&
              We.isSupported() &&
              ((this._config = this._getConfig(e)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents());
        }
        static get Default() {
          return Fe;
        }
        static get DefaultType() {
          return He;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          ge.off(this._element, $e);
        }
        _start(t) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
            : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
          this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            Jt(this._config.endCallback);
        }
        _move(t) {
          this._deltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40) return;
          const e = t / this._deltaX;
          (this._deltaX = 0),
            e &&
              Jt(
                e > 0 ? this._config.rightCallback : this._config.leftCallback
              );
        }
        _initEvents() {
          this._supportPointerEvents
            ? (ge.on(this._element, Me, (t) => this._start(t)),
              ge.on(this._element, je, (t) => this._end(t)),
              this._element.classList.add("pointer-event"))
            : (ge.on(this._element, Ie, (t) => this._start(t)),
              ge.on(this._element, Ne, (t) => this._move(t)),
              ge.on(this._element, Pe, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
          return (
            this._supportPointerEvents &&
            ("pen" === t.pointerType || "touch" === t.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const Be = ".bs.carousel",
        ze = ".data-api",
        Re = "next",
        qe = "prev",
        Ve = "left",
        Ke = "right",
        Xe = `slide${Be}`,
        Ye = `slid${Be}`,
        Ue = `keydown${Be}`,
        Qe = `mouseenter${Be}`,
        Ge = `mouseleave${Be}`,
        Je = `dragstart${Be}`,
        Ze = `load${Be}${ze}`,
        ti = `click${Be}${ze}`,
        ei = "carousel",
        ii = "active",
        ni = ".active",
        si = ".carousel-item",
        oi = ni + si,
        ri = { ArrowLeft: Ke, ArrowRight: Ve },
        ai = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        li = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class ci extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Ce.findOne(
              ".carousel-indicators",
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === ei && this.cycle();
        }
        static get Default() {
          return ai;
        }
        static get DefaultType() {
          return li;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Re);
        }
        nextWhenVisible() {
          !document.hidden && Rt(this._element) && this.next();
        }
        prev() {
          this._slide(qe);
        }
        pause() {
          this._isSliding && Wt(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? ge.one(this._element, Ye, () => this.cycle())
              : this.cycle());
        }
        to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0) return;
          if (this._isSliding)
            return void ge.one(this._element, Ye, () => this.to(t));
          const i = this._getItemIndex(this._getActive());
          if (i === t) return;
          const n = t > i ? Re : qe;
          this._slide(n, e[t]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
          return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
          this._config.keyboard &&
            ge.on(this._element, Ue, (t) => this._keydown(t)),
            "hover" === this._config.pause &&
              (ge.on(this._element, Qe, () => this.pause()),
              ge.on(this._element, Ge, () => this._maybeEnableCycle())),
            this._config.touch &&
              We.isSupported() &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const t of Ce.find(".carousel-item img", this._element))
            ge.on(t, Je, (t) => t.preventDefault());
          const t = {
            leftCallback: () => this._slide(this._directionToOrder(Ve)),
            rightCallback: () => this._slide(this._directionToOrder(Ke)),
            endCallback: () => {
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )));
            },
          };
          this._swipeHelper = new We(this._element, t);
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = ri[t.key];
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
          return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return;
          const e = Ce.findOne(ni, this._indicatorsElement);
          e.classList.remove(ii), e.removeAttribute("aria-current");
          const i = Ce.findOne(
            `[data-bs-slide-to="${t}"]`,
            this._indicatorsElement
          );
          i && (i.classList.add(ii), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t) return;
          const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
          if (this._isSliding) return;
          const i = this._getActive(),
            n = t === Re,
            s = e || te(this._getItems(), i, n, this._config.wrap);
          if (s === i) return;
          const o = this._getItemIndex(s),
            r = (e) =>
              ge.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o,
              });
          if (r(Xe).defaultPrevented) return;
          if (!i || !s) return;
          const a = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(o),
            (this._activeElement = s);
          const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
          s.classList.add(c), Xt(s), i.classList.add(l), s.classList.add(l);
          this._queueCallback(
            () => {
              s.classList.remove(l, c),
                s.classList.add(ii),
                i.classList.remove(ii, c, l),
                (this._isSliding = !1),
                r(Ye);
            },
            i,
            this._isAnimated()
          ),
            a && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Ce.findOne(oi, this._element);
        }
        _getItems() {
          return Ce.find(si, this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
          return Qt() ? (t === Ve ? qe : Re) : t === Ve ? Re : qe;
        }
        _orderToDirection(t) {
          return Qt() ? (t === qe ? Ve : Ke) : t === qe ? Ke : Ve;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ci.getOrCreateInstance(this, t);
            if ("number" != typeof t) {
              if ("string" == typeof t) {
                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            } else e.to(t);
          });
        }
      }
      ge.on(document, ti, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = Ce.getElementFromSelector(this);
        if (!e || !e.classList.contains(ei)) return;
        t.preventDefault();
        const i = ci.getOrCreateInstance(e),
          n = this.getAttribute("data-bs-slide-to");
        return n
          ? (i.to(n), void i._maybeEnableCycle())
          : "next" === ye.getDataAttribute(this, "slide")
          ? (i.next(), void i._maybeEnableCycle())
          : (i.prev(), void i._maybeEnableCycle());
      }),
        ge.on(window, Ze, () => {
          const t = Ce.find('[data-bs-ride="carousel"]');
          for (const e of t) ci.getOrCreateInstance(e);
        }),
        Gt(ci);
      const hi = ".bs.collapse",
        ui = `show${hi}`,
        di = `shown${hi}`,
        fi = `hide${hi}`,
        pi = `hidden${hi}`,
        mi = `click${hi}.data-api`,
        gi = "show",
        _i = "collapse",
        bi = "collapsing",
        vi = `:scope .${_i} .${_i}`,
        yi = '[data-bs-toggle="collapse"]',
        wi = { parent: null, toggle: !0 },
        Ai = { parent: "(null|element)", toggle: "boolean" };
      class Ei extends Ae {
        constructor(t, e) {
          super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
          const i = Ce.find(yi);
          for (const t of i) {
            const e = Ce.getSelectorFromElement(t),
              i = Ce.find(e).filter((t) => t === this._element);
            null !== e && i.length && this._triggerArray.push(t);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return wi;
        }
        static get DefaultType() {
          return Ai;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let t = [];
          if (
            (this._config.parent &&
              (t = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing"
              )
                .filter((t) => t !== this._element)
                .map((t) => Ei.getOrCreateInstance(t, { toggle: !1 }))),
            t.length && t[0]._isTransitioning)
          )
            return;
          if (ge.trigger(this._element, ui).defaultPrevented) return;
          for (const e of t) e.hide();
          const e = this._getDimension();
          this._element.classList.remove(_i),
            this._element.classList.add(bi),
            (this._element.style[e] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(bi),
                this._element.classList.add(_i, gi),
                (this._element.style[e] = ""),
                ge.trigger(this._element, di);
            },
            this._element,
            !0
          ),
            (this._element.style[e] = `${this._element[i]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (ge.trigger(this._element, fi).defaultPrevented) return;
          const t = this._getDimension();
          (this._element.style[t] = `${
            this._element.getBoundingClientRect()[t]
          }px`),
            Xt(this._element),
            this._element.classList.add(bi),
            this._element.classList.remove(_i, gi);
          for (const t of this._triggerArray) {
            const e = Ce.getElementFromSelector(t);
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
          }
          this._isTransitioning = !0;
          (this._element.style[t] = ""),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(bi),
                  this._element.classList.add(_i),
                  ge.trigger(this._element, pi);
              },
              this._element,
              !0
            );
        }
        _isShown(t = this._element) {
          return t.classList.contains(gi);
        }
        _configAfterMerge(t) {
          return (t.toggle = Boolean(t.toggle)), (t.parent = zt(t.parent)), t;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const t = this._getFirstLevelChildren(yi);
          for (const e of t) {
            const t = Ce.getElementFromSelector(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          }
        }
        _getFirstLevelChildren(t) {
          const e = Ce.find(vi, this._config.parent);
          return Ce.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
          if (t.length)
            for (const i of t)
              i.classList.toggle("collapsed", !e),
                i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
          const e = {};
          return (
            "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function () {
              const i = Ei.getOrCreateInstance(this, e);
              if ("string" == typeof t) {
                if (void 0 === i[t])
                  throw new TypeError(`No method named "${t}"`);
                i[t]();
              }
            })
          );
        }
      }
      ge.on(document, mi, yi, function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        for (const t of Ce.getMultipleElementsFromSelector(this))
          Ei.getOrCreateInstance(t, { toggle: !1 }).toggle();
      }),
        Gt(Ei);
      const Ci = "dropdown",
        Ti = ".bs.dropdown",
        Oi = ".data-api",
        xi = "ArrowUp",
        ki = "ArrowDown",
        Li = `hide${Ti}`,
        Si = `hidden${Ti}`,
        Di = `show${Ti}`,
        $i = `shown${Ti}`,
        Ii = `click${Ti}${Oi}`,
        Ni = `keydown${Ti}${Oi}`,
        Pi = `keyup${Ti}${Oi}`,
        Mi = "show",
        ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Fi = `${ji}.${Mi}`,
        Hi = ".dropdown-menu",
        Wi = Qt() ? "top-end" : "top-start",
        Bi = Qt() ? "top-start" : "top-end",
        zi = Qt() ? "bottom-end" : "bottom-start",
        Ri = Qt() ? "bottom-start" : "bottom-end",
        qi = Qt() ? "left-start" : "right-start",
        Vi = Qt() ? "right-start" : "left-start",
        Ki = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        Xi = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class Yi extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Ce.next(this._element, Hi)[0] ||
              Ce.prev(this._element, Hi)[0] ||
              Ce.findOne(Hi, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
          return Ki;
        }
        static get DefaultType() {
          return Xi;
        }
        static get NAME() {
          return Ci;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (qt(this._element) || this._isShown()) return;
          const t = { relatedTarget: this._element };
          if (!ge.trigger(this._element, Di, t).defaultPrevented) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (const t of [].concat(...document.body.children))
                ge.on(t, "mouseover", Kt);
            this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(Mi),
              this._element.classList.add(Mi),
              ge.trigger(this._element, $i, t);
          }
        }
        hide() {
          if (qt(this._element) || !this._isShown()) return;
          const t = { relatedTarget: this._element };
          this._completeHide(t);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(t) {
          if (!ge.trigger(this._element, Li, t).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (const t of [].concat(...document.body.children))
                ge.off(t, "mouseover", Kt);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(Mi),
              this._element.classList.remove(Mi),
              this._element.setAttribute("aria-expanded", "false"),
              ye.removeDataAttribute(this._menu, "popper"),
              ge.trigger(this._element, Si, t);
          }
        }
        _getConfig(t) {
          if (
            "object" == typeof (t = super._getConfig(t)).reference &&
            !Bt(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${Ci.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
          return t;
        }
        _createPopper() {
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let t = this._element;
          "parent" === this._config.reference
            ? (t = this._parent)
            : Bt(this._config.reference)
            ? (t = zt(this._config.reference))
            : "object" == typeof this._config.reference &&
              (t = this._config.reference);
          const e = this._getPopperConfig();
          this._popper = It(t, this._menu, e);
        }
        _isShown() {
          return this._menu.classList.contains(Mi);
        }
        _getPlacement() {
          const t = this._parent;
          if (t.classList.contains("dropend")) return qi;
          if (t.classList.contains("dropstart")) return Vi;
          if (t.classList.contains("dropup-center")) return "top";
          if (t.classList.contains("dropdown-center")) return "bottom";
          const e =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return t.classList.contains("dropup") ? (e ? Bi : Wi) : e ? Ri : zi;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (ye.setDataAttribute(this._menu, "popper", "static"),
              (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            { ...t, ...Jt(this._config.popperConfig, [t]) }
          );
        }
        _selectMenuItem({ key: t, target: e }) {
          const i = Ce.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          ).filter((t) => Rt(t));
          i.length && te(i, e, t === ki, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Yi.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
        static clearMenus(t) {
          if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
          const e = Ce.find(Fi);
          for (const i of e) {
            const e = Yi.getInstance(i);
            if (!e || !1 === e._config.autoClose) continue;
            const n = t.composedPath(),
              s = n.includes(e._menu);
            if (
              n.includes(e._element) ||
              ("inside" === e._config.autoClose && !s) ||
              ("outside" === e._config.autoClose && s)
            )
              continue;
            if (
              e._menu.contains(t.target) &&
              (("keyup" === t.type && "Tab" === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue;
            const o = { relatedTarget: e._element };
            "click" === t.type && (o.clickEvent = t), e._completeHide(o);
          }
        }
        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [xi, ki].includes(t.key);
          if (!n && !i) return;
          if (e && !i) return;
          t.preventDefault();
          const s = this.matches(ji)
              ? this
              : Ce.prev(this, ji)[0] ||
                Ce.next(this, ji)[0] ||
                Ce.findOne(ji, t.delegateTarget.parentNode),
            o = Yi.getOrCreateInstance(s);
          if (n)
            return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
          o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
      }
      ge.on(document, Ni, ji, Yi.dataApiKeydownHandler),
        ge.on(document, Ni, Hi, Yi.dataApiKeydownHandler),
        ge.on(document, Ii, Yi.clearMenus),
        ge.on(document, Pi, Yi.clearMenus),
        ge.on(document, Ii, ji, function (t) {
          t.preventDefault(), Yi.getOrCreateInstance(this).toggle();
        }),
        Gt(Yi);
      const Ui = "backdrop",
        Qi = "show",
        Gi = `mousedown.bs.${Ui}`,
        Ji = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        Zi = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class tn extends we {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isAppended = !1),
            (this._element = null);
        }
        static get Default() {
          return Ji;
        }
        static get DefaultType() {
          return Zi;
        }
        static get NAME() {
          return Ui;
        }
        show(t) {
          if (!this._config.isVisible) return void Jt(t);
          this._append();
          const e = this._getElement();
          this._config.isAnimated && Xt(e),
            e.classList.add(Qi),
            this._emulateAnimation(() => {
              Jt(t);
            });
        }
        hide(t) {
          this._config.isVisible
            ? (this._getElement().classList.remove(Qi),
              this._emulateAnimation(() => {
                this.dispose(), Jt(t);
              }))
            : Jt(t);
        }
        dispose() {
          this._isAppended &&
            (ge.off(this._element, Gi),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement("div");
            (t.className = this._config.className),
              this._config.isAnimated && t.classList.add("fade"),
              (this._element = t);
          }
          return this._element;
        }
        _configAfterMerge(t) {
          return (t.rootElement = zt(t.rootElement)), t;
        }
        _append() {
          if (this._isAppended) return;
          const t = this._getElement();
          this._config.rootElement.append(t),
            ge.on(t, Gi, () => {
              Jt(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }
        _emulateAnimation(t) {
          Zt(t, this._getElement(), this._config.isAnimated);
        }
      }
      const en = ".bs.focustrap",
        nn = `focusin${en}`,
        sn = `keydown.tab${en}`,
        on = "backward",
        rn = { autofocus: !0, trapElement: null },
        an = { autofocus: "boolean", trapElement: "element" };
      class ln extends we {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        static get Default() {
          return rn;
        }
        static get DefaultType() {
          return an;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            ge.off(document, en),
            ge.on(document, nn, (t) => this._handleFocusin(t)),
            ge.on(document, sn, (t) => this._handleKeydown(t)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), ge.off(document, en));
        }
        _handleFocusin(t) {
          const { trapElement: e } = this._config;
          if (t.target === document || t.target === e || e.contains(t.target))
            return;
          const i = Ce.focusableChildren(e);
          0 === i.length
            ? e.focus()
            : this._lastTabNavDirection === on
            ? i[i.length - 1].focus()
            : i[0].focus();
        }
        _handleKeydown(t) {
          "Tab" === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? on : "forward");
        }
      }
      const cn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        hn = ".sticky-top",
        un = "padding-right",
        dn = "margin-right";
      class fn {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t);
        }
        hide() {
          const t = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, un, (e) => e + t),
            this._setElementAttributes(cn, un, (e) => e + t),
            this._setElementAttributes(hn, dn, (e) => e - t);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, un),
            this._resetElementAttributes(cn, un),
            this._resetElementAttributes(hn, dn);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(t, (t) => {
            if (t !== this._element && window.innerWidth > t.clientWidth + n)
              return;
            this._saveInitialAttribute(t, e);
            const s = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
          });
        }
        _saveInitialAttribute(t, e) {
          const i = t.style.getPropertyValue(e);
          i && ye.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t) => {
            const i = ye.getDataAttribute(t, e);
            null !== i
              ? (ye.removeDataAttribute(t, e), t.style.setProperty(e, i))
              : t.style.removeProperty(e);
          });
        }
        _applyManipulationCallback(t, e) {
          if (Bt(t)) e(t);
          else for (const i of Ce.find(t, this._element)) e(i);
        }
      }
      const pn = ".bs.modal",
        mn = `hide${pn}`,
        gn = `hidePrevented${pn}`,
        _n = `hidden${pn}`,
        bn = `show${pn}`,
        vn = `shown${pn}`,
        yn = `resize${pn}`,
        wn = `click.dismiss${pn}`,
        An = `mousedown.dismiss${pn}`,
        En = `keydown.dismiss${pn}`,
        Cn = `click${pn}.data-api`,
        Tn = "modal-open",
        On = "show",
        xn = "modal-static",
        kn = { backdrop: !0, focus: !0, keyboard: !0 },
        Ln = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class Sn extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._dialog = Ce.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new fn()),
            this._addEventListeners();
        }
        static get Default() {
          return kn;
        }
        static get DefaultType() {
          return Ln;
        }
        static get NAME() {
          return "modal";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          if (this._isShown || this._isTransitioning) return;
          ge.trigger(this._element, bn, { relatedTarget: t })
            .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Tn),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
          if (!this._isShown || this._isTransitioning) return;
          ge.trigger(this._element, mn).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(On),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            ));
        }
        dispose() {
          ge.off(window, pn),
            ge.off(this._dialog, pn),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new tn({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new ln({ trapElement: this._element });
        }
        _showElement(t) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0);
          const e = Ce.findOne(".modal-body", this._dialog);
          e && (e.scrollTop = 0),
            Xt(this._element),
            this._element.classList.add(On);
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                ge.trigger(this._element, vn, { relatedTarget: t });
            },
            this._dialog,
            this._isAnimated()
          );
        }
        _addEventListeners() {
          ge.on(this._element, En, (t) => {
            "Escape" === t.key &&
              (this._config.keyboard
                ? this.hide()
                : this._triggerBackdropTransition());
          }),
            ge.on(window, yn, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            ge.on(this._element, An, (t) => {
              ge.one(this._element, wn, (e) => {
                this._element === t.target &&
                  this._element === e.target &&
                  ("static" !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            });
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(Tn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                ge.trigger(this._element, _n);
            });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (ge.trigger(this._element, gn).defaultPrevented) return;
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._element.style.overflowY;
          "hidden" === e ||
            this._element.classList.contains(xn) ||
            (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(xn),
            this._queueCallback(() => {
              this._element.classList.remove(xn),
                this._queueCallback(() => {
                  this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;
          if (i && !t) {
            const t = Qt() ? "paddingLeft" : "paddingRight";
            this._element.style[t] = `${e}px`;
          }
          if (!i && t) {
            const t = Qt() ? "paddingRight" : "paddingLeft";
            this._element.style[t] = `${e}px`;
          }
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
          return this.each(function () {
            const i = Sn.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === i[t])
                throw new TypeError(`No method named "${t}"`);
              i[t](e);
            }
          });
        }
      }
      ge.on(document, Cn, '[data-bs-toggle="modal"]', function (t) {
        const e = Ce.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          ge.one(e, bn, (t) => {
            t.defaultPrevented ||
              ge.one(e, _n, () => {
                Rt(this) && this.focus();
              });
          });
        const i = Ce.findOne(".modal.show");
        i && Sn.getInstance(i).hide();
        Sn.getOrCreateInstance(e).toggle(this);
      }),
        Te(Sn),
        Gt(Sn);
      const Dn = ".bs.offcanvas",
        $n = ".data-api",
        In = `load${Dn}${$n}`,
        Nn = "show",
        Pn = "showing",
        Mn = "hiding",
        jn = ".offcanvas.show",
        Fn = `show${Dn}`,
        Hn = `shown${Dn}`,
        Wn = `hide${Dn}`,
        Bn = `hidePrevented${Dn}`,
        zn = `hidden${Dn}`,
        Rn = `resize${Dn}`,
        qn = `click${Dn}${$n}`,
        Vn = `keydown.dismiss${Dn}`,
        Kn = { backdrop: !0, keyboard: !0, scroll: !1 },
        Xn = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class Yn extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }
        static get Default() {
          return Kn;
        }
        static get DefaultType() {
          return Xn;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          if (this._isShown) return;
          if (
            ge.trigger(this._element, Fn, { relatedTarget: t }).defaultPrevented
          )
            return;
          (this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new fn().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Pn);
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(Nn),
                this._element.classList.remove(Pn),
                ge.trigger(this._element, Hn, { relatedTarget: t });
            },
            this._element,
            !0
          );
        }
        hide() {
          if (!this._isShown) return;
          if (ge.trigger(this._element, Wn).defaultPrevented) return;
          this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(Mn),
            this._backdrop.hide();
          this._queueCallback(
            () => {
              this._element.classList.remove(Nn, Mn),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new fn().reset(),
                ge.trigger(this._element, zn);
            },
            this._element,
            !0
          );
        }
        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new tn({
            className: "offcanvas-backdrop",
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t
              ? () => {
                  "static" !== this._config.backdrop
                    ? this.hide()
                    : ge.trigger(this._element, Bn);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new ln({ trapElement: this._element });
        }
        _addEventListeners() {
          ge.on(this._element, Vn, (t) => {
            "Escape" === t.key &&
              (this._config.keyboard
                ? this.hide()
                : ge.trigger(this._element, Bn));
          });
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Yn.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      ge.on(document, qn, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Ce.getElementFromSelector(this);
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), qt(this))
        )
          return;
        ge.one(e, zn, () => {
          Rt(this) && this.focus();
        });
        const i = Ce.findOne(jn);
        i && i !== e && Yn.getInstance(i).hide();
        Yn.getOrCreateInstance(e).toggle(this);
      }),
        ge.on(window, In, () => {
          for (const t of Ce.find(jn)) Yn.getOrCreateInstance(t).show();
        }),
        ge.on(window, Rn, () => {
          for (const t of Ce.find(
            "[aria-modal][class*=show][class*=offcanvas-]"
          ))
            "fixed" !== getComputedStyle(t).position &&
              Yn.getOrCreateInstance(t).hide();
        }),
        Te(Yn),
        Gt(Yn);
      const Un = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Qn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        Gn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Jn = (t, e) => {
          const i = t.nodeName.toLowerCase();
          return e.includes(i)
            ? !Qn.has(i) || Boolean(Gn.test(t.nodeValue))
            : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        };
      const Zn = {
          allowList: Un,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        ts = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        es = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class is extends we {
        constructor(t) {
          super(), (this._config = this._getConfig(t));
        }
        static get Default() {
          return Zn;
        }
        static get DefaultType() {
          return ts;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((t) => this._resolvePossibleFunction(t))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(t) {
          return (
            this._checkContent(t),
            (this._config.content = { ...this._config.content, ...t }),
            this
          );
        }
        toHtml() {
          const t = document.createElement("div");
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e, i] of Object.entries(this._config.content))
            this._setContent(t, i, e);
          const e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);
          return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
          super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
          for (const [e, i] of Object.entries(t))
            super._typeCheckConfig({ selector: e, entry: i }, es);
        }
        _setContent(t, e, i) {
          const n = Ce.findOne(i, t);
          n &&
            ((e = this._resolvePossibleFunction(e))
              ? Bt(e)
                ? this._putElementInTemplate(zt(e), n)
                : this._config.html
                ? (n.innerHTML = this._maybeSanitize(e))
                : (n.textContent = e)
              : n.remove());
        }
        _maybeSanitize(t) {
          return this._config.sanitize
            ? (function (t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = new window.DOMParser().parseFromString(
                    t,
                    "text/html"
                  ),
                  s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                  const i = t.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(i)) {
                    t.remove();
                    continue;
                  }
                  const n = [].concat(...t.attributes),
                    s = [].concat(e["*"] || [], e[i] || []);
                  for (const e of n) Jn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
              })(t, this._config.allowList, this._config.sanitizeFn)
            : t;
        }
        _resolvePossibleFunction(t) {
          return Jt(t, [this]);
        }
        _putElementInTemplate(t, e) {
          if (this._config.html) return (e.innerHTML = ""), void e.append(t);
          e.textContent = t.textContent;
        }
      }
      const ns = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ss = "fade",
        os = "show",
        rs = ".modal",
        as = "hide.bs.modal",
        ls = "hover",
        cs = "focus",
        hs = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: Qt() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: Qt() ? "right" : "left",
        },
        us = {
          allowList: Un,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 6],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        ds = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class fs extends Ae {
        constructor(t, e) {
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          super(t, e),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
          return us;
        }
        static get DefaultType() {
          return ds;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout),
            ge.off(this._element.closest(rs), as, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title")
              ),
            this._disposePopper(),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const t = ge.trigger(
              this._element,
              this.constructor.eventName("show")
            ),
            e = (
              Vt(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (t.defaultPrevented || !e) return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const { container: n } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (n.append(i),
              ge.trigger(
                this._element,
                this.constructor.eventName("inserted")
              )),
            (this._popper = this._createPopper(i)),
            i.classList.add(os),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              ge.on(t, "mouseover", Kt);
          this._queueCallback(
            () => {
              ge.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated()
          );
        }
        hide() {
          if (!this._isShown()) return;
          if (
            ge.trigger(this._element, this.constructor.eventName("hide"))
              .defaultPrevented
          )
            return;
          if (
            (this._getTipElement().classList.remove(os),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              ge.off(t, "mouseover", Kt);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[cs] = !1),
            (this._activeTrigger[ls] = !1),
            (this._isHovered = null);
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                ge.trigger(
                  this._element,
                  this.constructor.eventName("hidden")
                ));
            },
            this.tip,
            this._isAnimated()
          );
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          );
        }
        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e) return null;
          e.classList.remove(ss, os),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
          const i = ((t) => {
            do {
              t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          })(this.constructor.NAME).toString();
          return (
            e.setAttribute("id", i),
            this._isAnimated() && e.classList.add(ss),
            e
          );
        }
        setContent(t) {
          (this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(t)
              : (this._templateFactory = new is({
                  ...this._config,
                  content: t,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(
            t.delegateTarget,
            this._getDelegateConfig()
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(ss))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(os);
        }
        _createPopper(t) {
          const e = Jt(this._config.placement, [this, t, this._element]),
            i = hs[e.toUpperCase()];
          return It(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
        }
        _resolvePossibleFunction(t) {
          return Jt(t, [this._element]);
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (t) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    t.state.placement
                  );
                },
              },
            ],
          };
          return { ...e, ...Jt(this._config.popperConfig, [e]) };
        }
        _setListeners() {
          const t = this._config.trigger.split(" ");
          for (const e of t)
            if ("click" === e)
              ge.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (t) => {
                  this._initializeOnDelegatedTarget(t).toggle();
                }
              );
            else if ("manual" !== e) {
              const t =
                  e === ls
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                i =
                  e === ls
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              ge.on(this._element, t, this._config.selector, (t) => {
                const e = this._initializeOnDelegatedTarget(t);
                (e._activeTrigger["focusin" === t.type ? cs : ls] = !0),
                  e._enter();
              }),
                ge.on(this._element, i, this._config.selector, (t) => {
                  const e = this._initializeOnDelegatedTarget(t);
                  (e._activeTrigger["focusout" === t.type ? cs : ls] =
                    e._element.contains(t.relatedTarget)),
                    e._leave();
                });
            }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            ge.on(this._element.closest(rs), as, this._hideModalHandler);
        }
        _fixTitle() {
          const t = this._element.getAttribute("title");
          t &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
          const e = ye.getDataAttributes(this._element);
          for (const t of Object.keys(e)) ns.has(t) && delete e[t];
          return (
            (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return (
            (t.container =
              !1 === t.container ? document.body : zt(t.container)),
            "number" == typeof t.delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
          );
        }
        _getDelegateConfig() {
          const t = {};
          for (const [e, i] of Object.entries(this._config))
            this.constructor.Default[e] !== i && (t[e] = i);
          return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = fs.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Gt(fs);
      const ps = {
          ...fs.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click",
        },
        ms = { ...fs.DefaultType, content: "(null|string|element|function)" };
      class gs extends fs {
        static get Default() {
          return ps;
        }
        static get DefaultType() {
          return ms;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return {
            ".popover-header": this._getTitle(),
            ".popover-body": this._getContent(),
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = gs.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Gt(gs);
      const _s = ".bs.scrollspy",
        bs = `activate${_s}`,
        vs = `click${_s}`,
        ys = `load${_s}.data-api`,
        ws = "active",
        As = "[href]",
        Es = ".nav-link",
        Cs = `${Es}, .nav-item > ${Es}, .list-group-item`,
        Ts = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        Os = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class xs extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh();
        }
        static get Default() {
          return Ts;
        }
        static get DefaultType() {
          return Os;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver());
          for (const t of this._observableSections.values())
            this._observer.observe(t);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
          return (
            (t.target = zt(t.target) || document.body),
            (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
            "string" == typeof t.threshold &&
              (t.threshold = t.threshold
                .split(",")
                .map((t) => Number.parseFloat(t))),
            t
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (ge.off(this._config.target, vs),
            ge.on(this._config.target, vs, As, (t) => {
              const e = this._observableSections.get(t.target.hash);
              if (e) {
                t.preventDefault();
                const i = this._rootElement || window,
                  n = e.offsetTop - this._element.offsetTop;
                if (i.scrollTo)
                  return void i.scrollTo({ top: n, behavior: "smooth" });
                i.scrollTop = n;
              }
            }));
        }
        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
          const e = (t) => this._targetLinks.get(`#${t.target.id}`),
            i = (t) => {
              (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                this._process(e(t));
            },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = n;
          for (const o of t) {
            if (!o.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(e(o));
              continue;
            }
            const t =
              o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && t) {
              if ((i(o), !n)) return;
            } else s || t || i(o);
          }
        }
        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()),
            (this._observableSections = new Map());
          const t = Ce.find(As, this._config.target);
          for (const e of t) {
            if (!e.hash || qt(e)) continue;
            const t = Ce.findOne(decodeURI(e.hash), this._element);
            Rt(t) &&
              (this._targetLinks.set(decodeURI(e.hash), e),
              this._observableSections.set(e.hash, t));
          }
        }
        _process(t) {
          this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = t),
            t.classList.add(ws),
            this._activateParents(t),
            ge.trigger(this._element, bs, { relatedTarget: t }));
        }
        _activateParents(t) {
          if (t.classList.contains("dropdown-item"))
            Ce.findOne(
              ".dropdown-toggle",
              t.closest(".dropdown")
            ).classList.add(ws);
          else
            for (const e of Ce.parents(t, ".nav, .list-group"))
              for (const t of Ce.prev(e, Cs)) t.classList.add(ws);
        }
        _clearActiveClass(t) {
          t.classList.remove(ws);
          const e = Ce.find(`${As}.${ws}`, t);
          for (const t of e) t.classList.remove(ws);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = xs.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      ge.on(window, ys, () => {
        for (const t of Ce.find('[data-bs-spy="scroll"]'))
          xs.getOrCreateInstance(t);
      }),
        Gt(xs);
      const ks = ".bs.tab",
        Ls = `hide${ks}`,
        Ss = `hidden${ks}`,
        Ds = `show${ks}`,
        $s = `shown${ks}`,
        Is = `click${ks}`,
        Ns = `keydown${ks}`,
        Ps = `load${ks}`,
        Ms = "ArrowLeft",
        js = "ArrowRight",
        Fs = "ArrowUp",
        Hs = "ArrowDown",
        Ws = "active",
        Bs = "fade",
        zs = "show",
        Rs = ":not(.dropdown-toggle)",
        qs =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Vs = `${`.nav-link${Rs}, .list-group-item${Rs}, [role="tab"]${Rs}`}, ${qs}`,
        Ks = `.${Ws}[data-bs-toggle="tab"], .${Ws}[data-bs-toggle="pill"], .${Ws}[data-bs-toggle="list"]`;
      class Xs extends Ae {
        constructor(t) {
          super(t),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              ge.on(this._element, Ns, (t) => this._keydown(t)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const t = this._element;
          if (this._elemIsActive(t)) return;
          const e = this._getActiveElem(),
            i = e ? ge.trigger(e, Ls, { relatedTarget: t }) : null;
          ge.trigger(t, Ds, { relatedTarget: e }).defaultPrevented ||
            (i && i.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
          if (!t) return;
          t.classList.add(Ws), this._activate(Ce.getElementFromSelector(t));
          this._queueCallback(
            () => {
              "tab" === t.getAttribute("role")
                ? (t.removeAttribute("tabindex"),
                  t.setAttribute("aria-selected", !0),
                  this._toggleDropDown(t, !0),
                  ge.trigger(t, $s, { relatedTarget: e }))
                : t.classList.add(zs);
            },
            t,
            t.classList.contains(Bs)
          );
        }
        _deactivate(t, e) {
          if (!t) return;
          t.classList.remove(Ws),
            t.blur(),
            this._deactivate(Ce.getElementFromSelector(t));
          this._queueCallback(
            () => {
              "tab" === t.getAttribute("role")
                ? (t.setAttribute("aria-selected", !1),
                  t.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(t, !1),
                  ge.trigger(t, Ss, { relatedTarget: e }))
                : t.classList.remove(zs);
            },
            t,
            t.classList.contains(Bs)
          );
        }
        _keydown(t) {
          if (![Ms, js, Fs, Hs].includes(t.key)) return;
          t.stopPropagation(), t.preventDefault();
          const e = [js, Hs].includes(t.key),
            i = te(
              this._getChildren().filter((t) => !qt(t)),
              t.target,
              e,
              !0
            );
          i &&
            (i.focus({ preventScroll: !0 }), Xs.getOrCreateInstance(i).show());
        }
        _getChildren() {
          return Ce.find(Vs, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, "role", "tablist");
          for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t),
            i = this._getOuterElement(t);
          t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
          const e = Ce.getElementFromSelector(t);
          e &&
            (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id &&
              this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
          const i = this._getOuterElement(t);
          if (!i.classList.contains("dropdown")) return;
          const n = (t, n) => {
            const s = Ce.findOne(t, i);
            s && s.classList.toggle(n, e);
          };
          n(".dropdown-toggle", Ws),
            n(".dropdown-menu", zs),
            i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
          t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
          return t.classList.contains(Ws);
        }
        _getInnerElement(t) {
          return t.matches(Vs) ? t : Ce.findOne(Vs, t);
        }
        _getOuterElement(t) {
          return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Xs.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      ge.on(document, Is, qs, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          qt(this) || Xs.getOrCreateInstance(this).show();
      }),
        ge.on(window, Ps, () => {
          for (const t of Ce.find(Ks)) Xs.getOrCreateInstance(t);
        }),
        Gt(Xs);
      const Ys = ".bs.toast",
        Us = `mouseover${Ys}`,
        Qs = `mouseout${Ys}`,
        Gs = `focusin${Ys}`,
        Js = `focusout${Ys}`,
        Zs = `hide${Ys}`,
        to = `hidden${Ys}`,
        eo = `show${Ys}`,
        io = `shown${Ys}`,
        no = "hide",
        so = "show",
        oo = "showing",
        ro = { animation: "boolean", autohide: "boolean", delay: "number" },
        ao = { animation: !0, autohide: !0, delay: 5e3 };
      class lo extends Ae {
        constructor(t, e) {
          super(t, e),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get Default() {
          return ao;
        }
        static get DefaultType() {
          return ro;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          if (ge.trigger(this._element, eo).defaultPrevented) return;
          this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
          this._element.classList.remove(no),
            Xt(this._element),
            this._element.classList.add(so, oo),
            this._queueCallback(
              () => {
                this._element.classList.remove(oo),
                  ge.trigger(this._element, io),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation
            );
        }
        hide() {
          if (!this.isShown()) return;
          if (ge.trigger(this._element, Zs).defaultPrevented) return;
          this._element.classList.add(oo),
            this._queueCallback(
              () => {
                this._element.classList.add(no),
                  this._element.classList.remove(oo, so),
                  ge.trigger(this._element, to);
              },
              this._element,
              this._config.animation
            );
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(so),
            super.dispose();
        }
        isShown() {
          return this._element.classList.contains(so);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e;
          }
          if (e) return void this._clearTimeout();
          const i = t.relatedTarget;
          this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          ge.on(this._element, Us, (t) => this._onInteraction(t, !0)),
            ge.on(this._element, Qs, (t) => this._onInteraction(t, !1)),
            ge.on(this._element, Gs, (t) => this._onInteraction(t, !0)),
            ge.on(this._element, Js, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = lo.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Te(lo), Gt(lo);
    },
  },
]);
