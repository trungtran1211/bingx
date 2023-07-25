/*! For license information please see homepage.01bb5c7b.js.LICENSE.txt */
(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([
  [8678],
  {
    55069: (t, e, n) => {
      "use strict";
      var o,
        i = n(63845),
        a = n(95186),
        r = n(19755);
      i.Z.use([a.Z]),
        (o = r),
        window,
        (o.fn.awards = function () {
          var t = o(this),
            e = t
              .find(".js-awards-slide")
              .index(t.find(".js-awards-slide.start"));
          new i.Z(".js-awards-slider", {
            navigation: { nextEl: ".js-next", prevEl: ".js-prev" },
            slidesPerView: 1,
            centeredSlides: !0,
            initialSlide: e,
            breakpoints: {
              991: { slidesPerView: 3, spaceBetween: 30, centeredSlides: !1 },
            },
          });
        });
    },
    13023: (t, e, n) => {
      "use strict";
      var o,
        i = n(63845),
        a = n(95186),
        r = n(19755);
      i.Z.use([a.Z]),
        (o = r),
        window,
        (o.fn.news = function () {
          var t = o(this),
            e = t.find(".js-slide").index(t.find(".js-slide.start"));
          new i.Z(".js-news-slider", {
            navigation: { nextEl: ".js-next", prevEl: ".js-prev" },
            slidesPerView: "auto",
            initialSlide: e,
          });
        });
    },
    45629: (t, e, n) => {
      !(function (t, e) {
        function n(e, a, r, s, c) {
          var u = !1;
          return (
            e
              .contents()
              .detach()
              .each(function () {
                var d = this,
                  l = t(d);
                if (
                  void 0 === d ||
                  (3 == d.nodeType && 0 == t.trim(d.data).length)
                )
                  return !0;
                if (l.is("script, .dotdotdot-keep")) e.append(l);
                else {
                  if (u) return !0;
                  e.append(l),
                    !c ||
                      l.is(s.after) ||
                      l.find(s.after).length ||
                      e[
                        e.is(
                          "a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
                        )
                          ? "after"
                          : "append"
                      ](c),
                    i(r, s) &&
                      ((u =
                        3 == d.nodeType
                          ? o(l, a, r, s, c)
                          : n(l, a, r, s, c)) ||
                        (l.detach(), (u = !0))),
                    u || (c && c.detach());
                }
              }),
            u
          );
        }
        function o(e, n, o, r, u) {
          var l = e[0];
          if (!l) return !1;
          var p = c(l),
            h = -1 !== p.indexOf(" ") ? " " : "　",
            f = "letter" == r.wrap ? "" : h,
            v = p.split(f),
            g = -1,
            m = -1,
            w = 0,
            b = v.length - 1;
          for (
            r.fallbackToLetter &&
            0 == w &&
            0 == b &&
            ((f = ""), (b = (v = p.split(f)).length - 1));
            b >= w && (0 != w || 0 != b);

          ) {
            var T = Math.floor((w + b) / 2);
            if (T == m) break;
            (m = T),
              s(l, v.slice(0, m + 1).join(f) + r.ellipsis),
              i(o, r)
                ? ((b = m),
                  r.fallbackToLetter &&
                    0 == w &&
                    0 == b &&
                    ((f = ""),
                    (g = -1),
                    (m = -1),
                    (w = 0),
                    (b = (v = v[0].split(f)).length - 1)))
                : ((g = m), (w = m));
          }
          if (-1 == g || (1 == v.length && 0 == v[0].length)) {
            var y = e.parent();
            e.detach();
            var x = u && u.closest(y).length ? u.length : 0;
            y.contents().length > x
              ? (l = d(y.contents().eq(-1 - x), n))
              : ((l = d(y, n, !0)), x || y.detach()),
              l && (s(l, (p = a(c(l), r))), x && u && t(l).parent().append(u));
          } else s(l, (p = a(v.slice(0, g + 1).join(f), r)));
          return !0;
        }
        function i(t, e) {
          return t.innerHeight() > e.maxHeight;
        }
        function a(e, n) {
          for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; )
            e = e.slice(0, -1);
          return (
            t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 &&
              (e += n.ellipsis),
            e
          );
        }
        function r(t) {
          return { width: t.innerWidth(), height: t.innerHeight() };
        }
        function s(t, e) {
          t.innerText
            ? (t.innerText = e)
            : t.nodeValue
            ? (t.nodeValue = e)
            : t.textContent && (t.textContent = e);
        }
        function c(t) {
          return t.innerText
            ? t.innerText
            : t.nodeValue
            ? t.nodeValue
            : t.textContent
            ? t.textContent
            : "";
        }
        function u(t) {
          do {
            t = t.previousSibling;
          } while (t && 1 !== t.nodeType && 3 !== t.nodeType);
          return t;
        }
        function d(e, n, o) {
          var i,
            a = e && e[0];
          if (a) {
            if (!o) {
              if (3 === a.nodeType) return a;
              if (t.trim(e.text())) return d(e.contents().last(), n);
            }
            for (i = u(a); !i; ) {
              if ((e = e.parent()).is(n) || !e.length) return !1;
              i = u(e[0]);
            }
            if (i) return d(t(i), n);
          }
          return !1;
        }
        if (!t.fn.dotdotdot) {
          (t.fn.dotdotdot = function (e) {
            if (0 == this.length)
              return (
                t.fn.dotdotdot.debug(
                  'No element found for "' + this.selector + '".'
                ),
                this
              );
            if (this.length > 1)
              return this.each(function () {
                t(this).dotdotdot(e);
              });
            var o = this;
            o.data("dotdotdot") && o.trigger("destroy.dot"),
              o.data("dotdotdot-style", o.attr("style") || ""),
              o.css("word-wrap", "break-word"),
              "nowrap" === o.css("white-space") &&
                o.css("white-space", "normal"),
              (o.bind_events = function () {
                return (
                  o
                    .bind("update.dot", function (e, r) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        (s.maxHeight =
                          "number" == typeof s.height
                            ? s.height
                            : (function (t) {
                                for (
                                  var e = t.innerHeight(),
                                    n = ["paddingTop", "paddingBottom"],
                                    o = 0,
                                    i = n.length;
                                  i > o;
                                  o++
                                ) {
                                  var a = parseInt(t.css(n[o]), 10);
                                  isNaN(a) && (a = 0), (e -= a);
                                }
                                return e;
                              })(o)),
                        (s.maxHeight += s.tolerance),
                        void 0 !== r &&
                          (("string" == typeof r || r instanceof HTMLElement) &&
                            (r = t("<div />").append(r).contents()),
                          r instanceof t && (a = r)),
                        (p = o
                          .wrapInner('<div class="dotdotdot" />')
                          .children())
                          .contents()
                          .detach()
                          .end()
                          .append(a.clone(!0))
                          .find("br")
                          .replaceWith("  <br />  ")
                          .end()
                          .css({
                            height: "auto",
                            width: "auto",
                            border: "none",
                            padding: 0,
                            margin: 0,
                          });
                      var u = !1,
                        d = !1;
                      return (
                        c.afterElement &&
                          ((u = c.afterElement.clone(!0)).show(),
                          c.afterElement.detach()),
                        i(p, s) &&
                          (d =
                            "children" == s.wrap
                              ? (function (t, e, n) {
                                  var o = t.children(),
                                    a = !1;
                                  t.empty();
                                  for (var r = 0, s = o.length; s > r; r++) {
                                    var c = o.eq(r);
                                    if (
                                      (t.append(c), n && t.append(n), i(t, e))
                                    ) {
                                      c.remove(), (a = !0);
                                      break;
                                    }
                                    n && n.detach();
                                  }
                                  return a;
                                })(p, s, u)
                              : n(p, o, p, s, u)),
                        p.replaceWith(p.contents()),
                        (p = null),
                        t.isFunction(s.callback) && s.callback.call(o[0], d, a),
                        (c.isTruncated = d),
                        d
                      );
                    })
                    .bind("isTruncated.dot", function (t, e) {
                      return (
                        t.preventDefault(),
                        t.stopPropagation(),
                        "function" == typeof e && e.call(o[0], c.isTruncated),
                        c.isTruncated
                      );
                    })
                    .bind("originalContent.dot", function (t, e) {
                      return (
                        t.preventDefault(),
                        t.stopPropagation(),
                        "function" == typeof e && e.call(o[0], a),
                        a
                      );
                    })
                    .bind("destroy.dot", function (t) {
                      t.preventDefault(),
                        t.stopPropagation(),
                        o
                          .unwatch()
                          .unbind_events()
                          .contents()
                          .detach()
                          .end()
                          .append(a)
                          .attr("style", o.data("dotdotdot-style") || "")
                          .data("dotdotdot", !1);
                    }),
                  o
                );
              }),
              (o.unbind_events = function () {
                return o.unbind(".dot"), o;
              }),
              (o.watch = function () {
                if ((o.unwatch(), "window" == s.watch)) {
                  var e = t(window),
                    n = e.width(),
                    i = e.height();
                  e.bind("resize.dot" + c.dotId, function () {
                    (n == e.width() && i == e.height() && s.windowResizeFix) ||
                      ((n = e.width()),
                      (i = e.height()),
                      d && clearInterval(d),
                      (d = setTimeout(function () {
                        o.trigger("update.dot");
                      }, 100)));
                  });
                } else
                  (u = r(o)),
                    (d = setInterval(function () {
                      if (o.is(":visible")) {
                        var t = r(o);
                        (u.width != t.width || u.height != t.height) &&
                          (o.trigger("update.dot"), (u = t));
                      }
                    }, 500));
                return o;
              }),
              (o.unwatch = function () {
                return (
                  t(window).unbind("resize.dot" + c.dotId),
                  d && clearInterval(d),
                  o
                );
              });
            var a = o.contents(),
              s = t.extend(!0, {}, t.fn.dotdotdot.defaults, e),
              c = {},
              u = {},
              d = null,
              p = null;
            return (
              s.lastCharacter.remove instanceof Array ||
                (s.lastCharacter.remove =
                  t.fn.dotdotdot.defaultArrays.lastCharacter.remove),
              s.lastCharacter.noEllipsis instanceof Array ||
                (s.lastCharacter.noEllipsis =
                  t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
              (c.afterElement = (function (e, n) {
                return (
                  !!e &&
                  ("string" == typeof e
                    ? !!(e = t(e, n)).length && e
                    : !!e.jquery && e)
                );
              })(s.after, o)),
              (c.isTruncated = !1),
              (c.dotId = l++),
              o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
              s.watch && o.watch(),
              o
            );
          }),
            (t.fn.dotdotdot.defaults = {
              ellipsis: "... ",
              wrap: "word",
              fallbackToLetter: !0,
              lastCharacter: {},
              tolerance: 0,
              callback: null,
              after: null,
              height: null,
              watch: !1,
              windowResizeFix: !0,
            }),
            (t.fn.dotdotdot.defaultArrays = {
              lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: [],
              },
            }),
            (t.fn.dotdotdot.debug = function () {});
          var l = 1,
            p = t.fn.html;
          t.fn.html = function (n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot")
              ? this.trigger("update", [n])
              : p.apply(this, arguments);
          };
          var h = t.fn.text;
          t.fn.text = function (n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot")
              ? ((n = t("<div />").text(n).html()), this.trigger("update", [n]))
              : h.apply(this, arguments);
          };
        }
      })(n(19755));
    },
    94517: function (t, e, n) {
      var o, i, a, r, s, c, u, d, l, p, h, f, v, g, m, w, b;
      (w = this),
        (b = document),
        (g = [n(19755)]),
        (m = function (T) {
          return (
            (function (w, b, T, y) {
              (function (t) {
                (o = [n(19755)]),
                  "function" == typeof (i = t)
                    ? void 0 === (r = i.apply((a = {}), o)) && (r = a)
                    : (r = i);
              })(function (t) {
                function e(t) {
                  for (; t && void 0 !== t.originalEvent; ) t = t.originalEvent;
                  return t;
                }
                function n(n, o) {
                  var i,
                    a,
                    r,
                    s,
                    c,
                    u,
                    d,
                    l,
                    p,
                    h = n.type;
                  if (
                    (((n = t.Event(n)).type = o),
                    (i = n.originalEvent),
                    (a = C),
                    h.search(/^(mouse|click)/) > -1 && (a = M),
                    i)
                  )
                    for (d = a.length; d; ) n[(s = a[--d])] = i[s];
                  if (
                    (h.search(/mouse(down|up)|click/) > -1 &&
                      !n.which &&
                      (n.which = 1),
                    -1 !== h.search(/^touch/) &&
                      ((h = (r = e(i)).touches),
                      (c = r.changedTouches),
                      (u = h && h.length ? h[0] : c && c.length ? c[0] : y)))
                  )
                    for (l = 0, p = P.length; l < p; l++) n[(s = P[l])] = u[s];
                  return n;
                }
                function o(e) {
                  for (var n, o, i = {}; e; ) {
                    for (o in (n = t.data(e, D)))
                      n[o] && (i[o] = i.hasVirtualBinding = !0);
                    e = e.parentNode;
                  }
                  return i;
                }
                function i(e, n) {
                  for (var o; e; ) {
                    if ((o = t.data(e, D)) && (!n || o[n])) return e;
                    e = e.parentNode;
                  }
                  return null;
                }
                function a() {
                  A = !1;
                }
                function r() {
                  A = !0;
                }
                function s() {
                  (z = 0), (L.length = 0), (O = !1), r();
                }
                function c() {
                  a();
                }
                function u() {
                  X && (clearTimeout(X), (X = 0));
                }
                function d() {
                  u(),
                    (X = setTimeout(function () {
                      (X = 0), s();
                    }, t.vmouse.resetTimerDuration));
                }
                function l(e, o, a) {
                  var r;
                  return (
                    ((a && a[e]) || (!a && i(o.target, e))) &&
                      ((r = n(o, e)), t(o.target).trigger(r)),
                    r
                  );
                }
                function p(e) {
                  var n,
                    o = t.data(e.target, E);
                  "click" === e.type &&
                    "touchstart" === t.data(e.target, "lastTouchType") &&
                    setTimeout(function () {
                      "touchstart" === t.data(e.target, "lastTouchType") &&
                        (s(), delete t.data(e.target).lastTouchType, p(e));
                    }, t.vmouse.maximumTimeBetweenTouches),
                    !O &&
                      (!z || z !== o) &&
                      (n = l("v" + e.type, e)) &&
                      (n.isDefaultPrevented() && e.preventDefault(),
                      n.isPropagationStopped() && e.stopPropagation(),
                      n.isImmediatePropagationStopped() &&
                        e.stopImmediatePropagation());
                }
                function h(n) {
                  var i,
                    a,
                    r,
                    s = e(n).touches;
                  s &&
                    1 === s.length &&
                    ((a = o((i = n.target))),
                    t.data(n.target, "lastTouchType", n.type),
                    a.hasVirtualBinding &&
                      ((z = N++),
                      t.data(i, E, z),
                      u(),
                      c(),
                      (H = !1),
                      (r = e(n).touches[0]),
                      (Y = r.pageX),
                      (V = r.pageY),
                      l("vmouseover", n, a),
                      l("vmousedown", n, a)));
                }
                function f(e) {
                  A ||
                    (H || l("vmousecancel", e, o(e.target)),
                    t.data(e.target, "lastTouchType", e.type),
                    (H = !0),
                    d());
                }
                function v(n) {
                  if (!A) {
                    var i = e(n).touches[0],
                      a = H,
                      r = t.vmouse.moveDistanceThreshold,
                      s = o(n.target);
                    t.data(n.target, "lastTouchType", n.type),
                      (H =
                        H ||
                        Math.abs(i.pageX - Y) > r ||
                        Math.abs(i.pageY - V) > r) &&
                        !a &&
                        l("vmousecancel", n, s),
                      l("vmousemove", n, s),
                      d();
                  }
                }
                function g(n) {
                  if (!A && t.data(n.target, "lastTouchType") !== y) {
                    r(), delete t.data(n.target).lastTouchType;
                    var i,
                      a,
                      s = o(n.target);
                    l("vmouseup", n, s),
                      H ||
                        ((i = l("vclick", n, s)) &&
                          i.isDefaultPrevented() &&
                          ((a = e(n).changedTouches[0]),
                          L.push({ touchID: z, x: a.clientX, y: a.clientY }),
                          (O = !0))),
                      l("vmouseout", n, s),
                      (H = !1),
                      d();
                  }
                }
                function m(e) {
                  var n,
                    o = t.data(e, D);
                  if (o) for (n in o) if (o[n]) return !0;
                  return !1;
                }
                function w() {}
                function b(e) {
                  var n = e.substr(1);
                  return {
                    setup: function () {
                      m(this) || t.data(this, D, {}),
                        (t.data(this, D)[e] = !0),
                        (S[e] = (S[e] || 0) + 1),
                        1 === S[e] && F.bind(n, p),
                        t(this).bind(n, w),
                        B &&
                          ((S.touchstart = (S.touchstart || 0) + 1),
                          1 === S.touchstart &&
                            F.bind("touchstart", h)
                              .bind("touchend", g)
                              .bind("touchmove", v)
                              .bind("scroll", f));
                    },
                    teardown: function () {
                      --S[e],
                        S[e] || F.unbind(n, p),
                        B &&
                          (--S.touchstart,
                          S.touchstart ||
                            F.unbind("touchstart", h)
                              .unbind("touchmove", v)
                              .unbind("touchend", g)
                              .unbind("scroll", f));
                      var o = t(this),
                        i = t.data(this, D);
                      i && (i[e] = !1),
                        o.unbind(n, w),
                        m(this) || o.removeData(D);
                    },
                  };
                }
                var x,
                  k,
                  D = "virtualMouseBindings",
                  E = "virtualTouchID",
                  P = "clientX clientY pageX pageY screenX screenY".split(" "),
                  I =
                    "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(
                      " "
                    ),
                  C =
                    "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                      " "
                    ),
                  j = t.event.mouseHooks ? t.event.mouseHooks.props : [],
                  M = C.concat(j),
                  S = {},
                  X = 0,
                  Y = 0,
                  V = 0,
                  H = !1,
                  L = [],
                  O = !1,
                  A = !1,
                  B = "addEventListener" in T,
                  F = t(T),
                  N = 1,
                  z = 0;
                for (
                  t.vmouse = {
                    moveDistanceThreshold: 10,
                    clickDistanceThreshold: 10,
                    resetTimerDuration: 1500,
                    maximumTimeBetweenTouches: 100,
                  },
                    k = 0;
                  k < I.length;
                  k++
                )
                  t.event.special[I[k]] = b(I[k]);
                B &&
                  T.addEventListener(
                    "click",
                    function (e) {
                      var n,
                        o,
                        i,
                        a,
                        r,
                        s = L.length,
                        c = e.target;
                      if (s)
                        for (
                          n = e.clientX,
                            o = e.clientY,
                            x = t.vmouse.clickDistanceThreshold,
                            i = c;
                          i;

                        ) {
                          for (a = 0; a < s; a++)
                            if (
                              ((r = L[a]),
                              (i === c &&
                                Math.abs(r.x - n) < x &&
                                Math.abs(r.y - o) < x) ||
                                t.data(i, E) === r.touchID)
                            )
                              return (
                                e.preventDefault(), void e.stopPropagation()
                              );
                          i = i.parentNode;
                        }
                    },
                    !0
                  );
              }),
                (function (t) {
                  (s = [n(19755)]),
                    "function" == typeof (c = t)
                      ? void 0 === (d = c.apply((u = {}), s)) && (d = u)
                      : (d = c);
                })(function (t) {
                  return (t.mobile = { version: "@VERSION" }), t.mobile;
                }),
                (function (t) {
                  (l = [n(19755), d]),
                    "function" == typeof (p = t)
                      ? void 0 === (f = p.apply((h = {}), l)) && (f = h)
                      : (f = p);
                })(function (t) {
                  var e = { touch: "ontouchend" in T };
                  return (
                    (t.mobile.support = t.mobile.support || {}),
                    t.extend(t.support, e),
                    t.extend(t.mobile.support, e),
                    t.support
                  );
                }),
                (function (o) {
                  (g = [n(19755), r, f]),
                    void 0 ===
                      (m = "function" == typeof (v = o) ? v.apply(e, g) : v) ||
                      (t.exports = m);
                })(function (t) {
                  function e(e, n, o, i) {
                    var a = o.type;
                    (o.type = n),
                      i
                        ? t.event.trigger(o, y, e)
                        : t.event.dispatch.call(e, o),
                      (o.type = a);
                  }
                  var n = t(T),
                    o = t.mobile.support.touch,
                    i = o ? "touchstart" : "mousedown",
                    a = o ? "touchend" : "mouseup",
                    r = o ? "touchmove" : "mousemove";
                  return (
                    t.each(
                      "touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(
                        " "
                      ),
                      function (e, n) {
                        (t.fn[n] = function (t) {
                          return t ? this.bind(n, t) : this.trigger(n);
                        }),
                          t.attrFn && (t.attrFn[n] = !0);
                      }
                    ),
                    (t.event.special.tap = {
                      tapholdThreshold: 750,
                      emitTapOnTaphold: !0,
                      setup: function () {
                        var o = this,
                          i = t(o),
                          a = !1;
                        i.bind("vmousedown", function (r) {
                          function s() {
                            u && (i.bind("vclick", d), clearTimeout(u));
                          }
                          function c() {
                            s(),
                              i.unbind("vclick", d).unbind("vmouseup", s),
                              n.unbind("vmousecancel", c);
                          }
                          if (((a = !1), r.which && 1 !== r.which)) return !0;
                          var u,
                            d,
                            l = r.target;
                          (d = function (t) {
                            c(),
                              a || l !== t.target
                                ? a && t.preventDefault()
                                : e(o, "tap", t);
                          }),
                            i.bind("vmouseup", s),
                            n.bind("vmousecancel", c),
                            (u = setTimeout(function () {
                              t.event.special.tap.emitTapOnTaphold || (a = !0),
                                (u = 0),
                                e(
                                  o,
                                  "taphold",
                                  t.Event("taphold", { target: l })
                                );
                            }, t.event.special.tap.tapholdThreshold));
                        });
                      },
                      teardown: function () {
                        t(this)
                          .unbind("vmousedown")
                          .unbind("vclick")
                          .unbind("vmouseup"),
                          n.unbind("vmousecancel");
                      },
                    }),
                    (t.event.special.swipe = {
                      scrollSupressionThreshold: 30,
                      durationThreshold: 1e3,
                      horizontalDistanceThreshold:
                        b.devicePixelRatio >= 2 ? 15 : 30,
                      verticalDistanceThreshold:
                        b.devicePixelRatio >= 2 ? 15 : 30,
                      getLocation: function (t) {
                        var e = b.pageXOffset,
                          n = b.pageYOffset,
                          o = t.clientX,
                          i = t.clientY;
                        return (
                          (0 === t.pageY &&
                            Math.floor(i) > Math.floor(t.pageY)) ||
                          (0 === t.pageX && Math.floor(o) > Math.floor(t.pageX))
                            ? ((o -= e), (i -= n))
                            : (i < t.pageY - n || o < t.pageX - e) &&
                              ((o = t.pageX - e), (i = t.pageY - n)),
                          { x: o, y: i }
                        );
                      },
                      start: function (e) {
                        var n = e.originalEvent.touches
                            ? e.originalEvent.touches[0]
                            : e,
                          o = t.event.special.swipe.getLocation(n);
                        return {
                          time: new Date().getTime(),
                          coords: [o.x, o.y],
                          origin: t(e.target),
                        };
                      },
                      stop: function (e) {
                        var n = e.originalEvent.touches
                            ? e.originalEvent.touches[0]
                            : e,
                          o = t.event.special.swipe.getLocation(n);
                        return {
                          time: new Date().getTime(),
                          coords: [o.x, o.y],
                        };
                      },
                      handleSwipe: function (n, o, i, a) {
                        if (
                          o.time - n.time <
                            t.event.special.swipe.durationThreshold &&
                          Math.abs(n.coords[0] - o.coords[0]) >
                            t.event.special.swipe.horizontalDistanceThreshold &&
                          Math.abs(n.coords[1] - o.coords[1]) <
                            t.event.special.swipe.verticalDistanceThreshold
                        ) {
                          var r =
                            n.coords[0] > o.coords[0]
                              ? "swipeleft"
                              : "swiperight";
                          return (
                            e(
                              i,
                              "swipe",
                              t.Event("swipe", {
                                target: a,
                                swipestart: n,
                                swipestop: o,
                              }),
                              !0
                            ),
                            e(
                              i,
                              r,
                              t.Event(r, {
                                target: a,
                                swipestart: n,
                                swipestop: o,
                              }),
                              !0
                            ),
                            !0
                          );
                        }
                        return !1;
                      },
                      eventInProgress: !1,
                      setup: function () {
                        var e,
                          o = this,
                          s = t(o),
                          c = {};
                        (e = t.data(this, "mobile-events")) ||
                          ((e = { length: 0 }),
                          t.data(this, "mobile-events", e)),
                          e.length++,
                          (e.swipe = c),
                          (c.start = function (e) {
                            if (!t.event.special.swipe.eventInProgress) {
                              t.event.special.swipe.eventInProgress = !0;
                              var i,
                                s = t.event.special.swipe.start(e),
                                u = e.target,
                                d = !1;
                              (c.move = function (e) {
                                s &&
                                  !e.isDefaultPrevented() &&
                                  ((i = t.event.special.swipe.stop(e)),
                                  d ||
                                    ((d = t.event.special.swipe.handleSwipe(
                                      s,
                                      i,
                                      o,
                                      u
                                    )) &&
                                      (t.event.special.swipe.eventInProgress =
                                        !1)),
                                  Math.abs(s.coords[0] - i.coords[0]) >
                                    t.event.special.swipe
                                      .scrollSupressionThreshold &&
                                    e.preventDefault());
                              }),
                                (c.stop = function () {
                                  (d = !0),
                                    (t.event.special.swipe.eventInProgress =
                                      !1),
                                    n.off(r, c.move),
                                    (c.move = null);
                                }),
                                n.on(r, c.move).one(a, c.stop);
                            }
                          }),
                          s.on(i, c.start);
                      },
                      teardown: function () {
                        var e, o;
                        (e = t.data(this, "mobile-events")) &&
                          ((o = e.swipe),
                          delete e.swipe,
                          e.length--,
                          0 === e.length &&
                            t.removeData(this, "mobile-events")),
                          o &&
                            (o.start && t(this).off(i, o.start),
                            o.move && n.off(r, o.move),
                            o.stop && n.off(a, o.stop));
                      },
                    }),
                    t.each(
                      {
                        taphold: "tap",
                        swipeleft: "swipe.left",
                        swiperight: "swipe.right",
                      },
                      function (e, n) {
                        t.event.special[e] = {
                          setup: function () {
                            t(this).bind(n, t.noop);
                          },
                          teardown: function () {
                            t(this).unbind(n);
                          },
                        };
                      }
                    ),
                    t.event.special
                  );
                });
            })(0, w, b),
            T.mobile
          );
        }.apply(e, g)),
        void 0 === m || (t.exports = m);
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(
      0,
      [9755, 1053, 9265],
      () => (e(45629), e(94517), e(13023), e(59265), e(55069))
    );
    t.O();
  },
]);
