/*! For license information please see base.471310ee.js.LICENSE.txt */
(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([
  [5974],
  {
    77383: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a).fn.leavingBranchPopup = function (e) {
        e = Object.assign({ branchesForShowPopupOnLeavingBranch: [] }, e);
        var t,
          n = "leavingBranchPopup",
          a = window.Routing.globalDefaults._branch,
          i = o("#leavingBranchPopup"),
          r = function () {
            return o.cookie(n, a);
          },
          s = function () {
            return !document.hidden;
          },
          c = function (e, t) {
            o.ajax({
              url: e,
              type: "GET",
              dataType: "json",
              success: t,
              error: function () {
                return "error";
              },
            });
          },
          l = function (t) {
            return e.branchesForShowPopupOnLeavingBranch.includes(t);
          };
        l(a) &&
          (s() && o.removeCookie(n),
          (t = r),
          o(document).on("visibilitychange", function () {
            s() && t();
          }));
        var d = o.cookie(n);
        d
          ? d !== a &&
            l(d) &&
            (function (e, t) {
              c(
                ""
                  .concat(
                    "/web-api/v2/leaving-branch-popup-destination-branches",
                    "?branch="
                  )
                  .concat(e),
                function (e) {
                  return t(
                    e.map(function (e) {
                      return e.name;
                    })
                  );
                }
              );
            })(d, function (e) {
              e.includes(a) &&
                (function (e, t) {
                  c(
                    ""
                      .concat(
                        "/web-api/v2/leaving-branch-popup-translations",
                        "/"
                      )
                      .concat(e, "?branch=")
                      .concat(a),
                    t
                  );
                })(d, function (e) {
                  !(function (e, t) {
                    var n = i.find(".modal-title"),
                      o = i.find("a.js-btn-yes"),
                      a = i.find("a.js-btn-no"),
                      s = i.find(".popup-destination-branch");
                    n.text(e.title),
                      o.text(e.buttonYes).attr("href", "#"),
                      a.text(e.buttonNo).attr("href", t),
                      s.html(e.content),
                      o.on("click", function () {
                        i.modal("hide"), r();
                      });
                  })(e, "/".concat(d)),
                    i.modal({ backdrop: "static", keyboard: !1 }),
                    i.css("backdrop-filter", "blur(10px)"),
                    i.modal("show");
                });
            })
          : r();
      };
    },
    25160: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a).fn.popupRedirect = function (e) {
        var t = this.find("#redirectModal");
        (e.storageKey += window.Routing.globalDefaults._branch),
          (this.check = function () {
            var e = !1;
            n() ||
              o
                .ajax({
                  type: "GET",
                  dataType: "json",
                  cache: !1,
                  url: window.Routing.generate(
                    "front_api_branch_popup_redirect",
                    { _branch: window.Routing.globalDefaults._branch }
                  ),
                  success: function (n) {
                    n.hasOwnProperty("modal_content") &&
                      (t.find("div.modal-body").html(n.modal_content),
                      (e = !0)),
                      n.hasOwnProperty("redirect_url") &&
                        (t.find("a.js-btn-yes").attr("href", n.redirect_url),
                        (e = !0)),
                      n.hasOwnProperty("modal_button_redirect") &&
                        (t.find("a.js-btn-yes").html(n.modal_button_redirect),
                        (e = !0));
                  },
                })
                .done(function () {
                  e
                    ? (t.on("hidden.bs.modal", function () {
                        a();
                      }),
                      t.modal("show"))
                    : a();
                });
          });
        var n = function () {
            return (
              1 == +store.get(e.storageKey) ||
              1 == +window.Routing.globalDefaults._skipBranchRedirect
            );
          },
          a = function () {
            store.set(e.storageKey, 1);
          };
        return this;
      };
    },
    7806: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a).fn.riskWarningPopup = function (e) {
        var t = this;
        return (
          (t.show = function () {
            var n;
            o.ajax({
              type: "GET",
              cache: !1,
              url: e.actionUrl,
              data: {
                mrkt:
                  ((n = "mrkt"),
                  (location.search.split(n + "=")[1] || "").split("&")[0]),
              },
              success: function (n) {
                n &&
                  1 != o.cookie(e.storageKey) &&
                  (t.find("#riskWarningModal").length < 1 && t.append(n),
                  t
                    .find("#riskWarningModal")
                    .modal({ show: !0, backdrop: "static", keyboard: !1 }));
              },
            });
          }),
          o(document).on("hidden.bs.modal", "#riskWarningModal", function () {
            o.cookie(e.storageKey, "1", { expires: 3600 });
          }),
          this
        );
      };
    },
    53532: (e, t, n) => {
      !(function (e, t) {
        e.fn.xtbCookies = function (n, o) {
          var a = e(this),
            i = e("#cookieBar"),
            r = e("body"),
            s = a.find(".js-main"),
            c = s.find(".js-show-settings"),
            l = a.find(".js-settings"),
            d = l.find(".js-toggle-section"),
            u = l.find(".js-toggle-table"),
            f = l.find(".js-save-settings"),
            h = a.find(".js-accept-all"),
            p = a.find(".js-switch");
          function m(e, t, n) {
            e.toggleClass("active"),
              e.hasClass("active")
                ? t.slideDown()
                : t.slideUp(400, function () {
                    n &&
                      (t.find(".js-table").hide(),
                      t.find(".js-toggle-table").removeClass("active"));
                  });
          }
          function g() {
            var e = o.custom.includes(t.location.hostname.replace("www.", ""))
                ? t.location.hostname
                : o.default,
              s = "xtbCookiesSettings=" + JSON.stringify(n),
              c =
                "; expires=" +
                new Date(new Date().getTime() + 31536e6).toGMTString(),
              l = "; domain=".concat(e, "; path=/; SameSite=None; Secure");
            (document.cookie = s + c + l),
              (document.cookie = "xtbCookies=1" + c + l),
              dataLayer.push({ event: "cookie_consent_choice" }),
              dataLayer.push({ event: "cookie_consent_update" }),
              a.hide(),
              i.hide(),
              r.removeClass("show-cookies-popup");
          }
          function v() {
            e.each(n, function (e) {
              n[e] = "granted";
            }),
              g(),
              b();
          }
          function b() {
            e.each(n, function (e, t) {
              var n = p.filter("[data-type=" + e + "]");
              "granted" === t ? n.addClass("active") : n.removeClass("active");
            });
          }
          d.on("click", function () {
            var t = e(this),
              n = t.parent().find(".js-section");
            m(t, n, !0);
          }),
            u.on("click", function () {
              var t = e(this),
                n = t.parent().find(".js-table");
              m(t, n, !1);
            }),
            c.on("click", function () {
              s.hide(), l.css("display", "flex");
            }),
            h.on("click", function () {
              v();
            }),
            f.on("click", g),
            p.on("click", function () {
              var t = e(this),
                o = t.data("type");
              t.hasClass("is-required") ||
                (t.toggleClass("active"),
                t.hasClass("active") ? (n[o] = "granted") : (n[o] = "denied"));
            }),
            e(t).on("cookies-show-settings", function () {
              s.hide(),
                l.css("display", "flex"),
                r.addClass("show-cookies-popup"),
                a.show();
            }),
            e(t).on("cookies-accept-all", function () {
              v();
            }),
            b();
        };
      })(n(19755), window);
    },
    22187: (e, t, n) => {
      "use strict";
      n(77090), n(73138);
      var o = n(19755);
      !(function (e, t, n) {
        var a = e("body"),
          i = "riskWarning" + a.data("branch").toUpperCase();
        e(".js-risk-warning").removeClass("d-none");
        try {
          1 == sessionStorage.getItem(i) && e(".js-risk-warning").hide();
        } catch (t) {
          1 == store.get(i) && e(".js-risk-warning").hide();
        }
        e(".js-hide-risk-warning").on("click", function (t) {
          t.preventDefault();
          try {
            sessionStorage.setItem(i, 1);
          } catch (e) {
            store.set(i, 1, new Date().getTime() + 6e5);
          }
          e(".js-risk-warning").hide();
        }),
          e.browser.mobile && a.addClass("browser-mobile"),
          e(".js-cookies-btn").on("click", function () {
            o(n).trigger(e(this).data("event"));
          });
        var r = e(".js-info-popup");
        r.on("hide.bs.modal", function () {
          store.set("infoPopup", 1);
        });
        try {
          1 !== store.get("infoPopup") && r.show();
        } catch (e) {
          r.modal("show");
        }
        if (
          ((n.getOS = function () {
            var e = n.navigator.userAgent,
              t = n.navigator.platform,
              o = null;
            return (
              -1 !==
              ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "Mac OS"].indexOf(t)
                ? (o = "Mac OS")
                : -1 !== ["iPhone", "iPad", "iPod", "iOS"].indexOf(t)
                ? (o = "iOS")
                : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t)
                ? (o = "Windows")
                : /Android/.test(e)
                ? (o = "Android")
                : !o && /(Linux|Ubuntu)/.test(t) && (o = "Linux"),
              o
            );
          }),
          e(n).on(
            "change.marketingData create.adobe_unique_id load newBtnsLoaded",
            function (t) {
              e(".js-dynamic-link").dynamicLink();
            }
          ),
          a.hasClass("int") && a.hasClass("browser-mobile"))
        ) {
          var s = n.getOS(),
            c = e(n).prepareDynamicLink(a.data("app-url")),
            l = a.find(".js-change-url-on-mobile");
          ("iOS" !== s && "Android" !== s) ||
            l.each(function () {
              e(this).prop("href", c);
            });
        }
        function d() {
          a.hasClass("small-nav-active")
            ? (a.removeClass("small-nav-active"),
              a.css("padding-top", e(".js-header").height()),
              a.addClass("small-nav-active"))
            : a.css("padding-top", e(".js-header").height());
        }
        e
          .ajax({ type: "GET", cache: !1, url: a.data("alert") })
          .done(function (t) {
            if (t.data.alert) {
              var o = t.data.alert.slug,
                i = t.data.alert.title,
                r = e(".js-alert"),
                s = r.find("a").attr("href");
              r.find("p").html(i),
                r.find("a").attr("href", s + "#" + o),
                a.addClass("show-alert"),
                d(),
                e(n).on("resize", function () {
                  d();
                });
            }
          }),
          e(".js-overall-footer").css(
            "padding-bottom",
            e(".js-risk-warning.risk-warning-bottom").height() + 75
          ),
          e(n).on("resize", function () {
            e(".js-overall-footer").css(
              "padding-bottom",
              e(".js-risk-warning.risk-warning-bottom").height() + 75
            );
          });
      })(o, document, window);
    },
    88604: (e, t, n) => {
      "use strict";
      var o = n(69213),
        a = n.n(o);
      (n.g.$ = n.g.jQuery = n(19755)),
        (n.g.store = n(58971)),
        (n.g.Routing = a());
    },
    95103: (e, t, n) => {
      var o = n(19755),
        a = {
          addToDataLayer: function (e) {
            try {
              "undefined" != typeof dataLayer && dataLayer.push({ event: e });
            } catch (e) {}
          },
        };
      (window.gtmDataLayer = a),
        (function (e, t) {
          e(t).ready(function () {
            e("div").find(e(".js-mm-page-aa")).length > 0 &&
              a.addToDataLayer("mm-start"),
              e("div").find(e(".js-ib-page-aa")).length > 0 &&
                a.addToDataLayer("ib-start"),
              e(".js-menu-open-real-aa").click(function () {
                a.addToDataLayer("button-real-menu");
              }),
              e(".js-menu-open-demo-aa").click(function () {
                a.addToDataLayer("button-demo-menu");
              }),
              e(".js-kv-btn-aa-1").click(function () {
                a.addToDataLayer("button1-cta-kv");
              }),
              e(".js-kv-btn-aa-2").click(function () {
                a.addToDataLayer("button2-cta-kv");
              }),
              e(".js-rf-close-button").click(function () {
                a.addToDataLayer("rf-close");
              }),
              e(".js-df-close-button").click(function () {
                a.addToDataLayer("demo-close");
              }),
              e(".js-realform-platform-login-aa").click(function () {
                a.addToDataLayer("rf-s11-platform");
              }),
              e(".js-rf-login-co-aa").click(function () {
                a.addToDataLayer("rf-s11a-co");
              }),
              e(".js-login-xs-real-aa").click(function () {
                a.addToDataLayer("login-xs-real");
              }),
              e(".js-login-xs-demo-aa").click(function () {
                a.addToDataLayer("login-xs-demo");
              }),
              e(".js-login-xs-5-aa").click(function () {
                a.addToDataLayer("login-xs-5");
              }),
              e(".js-login-mt-real-aa").click(function () {
                a.addToDataLayer("login-mt-real");
              }),
              e(".js-login-mt-demo-aa").click(function () {
                a.addToDataLayer("login-mt-demo");
              }),
              e(".js-login-co-aa").click(function () {
                a.addToDataLayer("login-co");
              }),
              e(".js-xs-app-download-android-aa").click(function () {
                a.addToDataLayer("xs-app-download-android");
              }),
              e(".js-xs-app-download-ios-aa").click(function () {
                a.addToDataLayer("xs-app-download-ios");
              }),
              e("body").on(
                "click",
                ".js-gtm-homepage-instruments",
                function () {
                  a.addToDataLayer("Instrument Name");
                }
              ),
              e(".js-gtm-market-news").click(function () {
                a.addToDataLayer("Open Market News");
              }),
              e(".js-gtm-market-news-list").on(
                "click",
                ".js-gtm-market-news-single",
                function () {
                  a.addToDataLayer("Open Market News");
                }
              ),
              e(".js-gtm-homepage-news-arrow").click(function () {
                a.addToDataLayer("Arrow Market News");
              }),
              e(".js-gtm-interested-education").click(function () {
                a.addToDataLayer("Show More Education Window");
              }),
              e(".js-gtm-interested-market-analyst").click(function () {
                a.addToDataLayer("Show More Market Analyst");
              }),
              e(".js-gtm-interested-webinars").click(function () {
                a.addToDataLayer("Show More Webinars");
              }),
              e(".js-gtm-homepag-special-offer-1").click(function () {
                a.addToDataLayer("Middle LP1 Click");
              }),
              e(".js-gtm-homepag-special-offer-2").click(function () {
                a.addToDataLayer("Middle LP2 Click");
              }),
              e(".js-gtm-homepag-special-offer-3").click(function () {
                a.addToDataLayer("Middle LP3 Click");
              }),
              e(".js-gtm-homepag-kv").click(function () {
                a.addToDataLayer("TOP Baner LP Click");
              }),
              e(".js-gtm-language-switcher").click(function () {
                a.addToDataLayer("COUNTRY SELECTOR button");
              }),
              e(".js-add-id-aa").on("click", function () {
                var t = e(this).attr("id");
                a.addToDataLayer(t);
              }),
              e(".js-gtm-search").click(function () {
                a.addToDataLayer("TOP_Search");
              }),
              e(".js-gtm-offer-box-green").click(function () {
                a.addToDataLayer("Left_Button_Click");
              }),
              e(".js-gtm-offer-box-blue").click(function () {
                a.addToDataLayer("Middle_Button_Click");
              }),
              e(".js-gtm-offer-box-orange").click(function () {
                a.addToDataLayer("Right_Button_Click");
              }),
              e(".js-gtm-instrument-link-hp-table").click(function () {
                a.addToDataLayer("instrument_link_hp_table");
              }),
              e(".js-gtm-watch-video").click(function () {
                a.addToDataLayer("watch_video");
              }),
              e(".js-gtm-share-facebook").click(function () {
                a.addToDataLayer("share_facebook");
              }),
              e(".js-gtm-share-twitter").click(function () {
                a.addToDataLayer("share_twitter");
              }),
              e(".js-gtm-share-linkedin").click(function () {
                a.addToDataLayer("share_linkedin");
              });
          });
        })(o, document);
    },
    11573: (e, t, n) => {
      n(19755);
    },
    7570: (e, t, n) => {
      var o,
        a,
        i,
        r,
        s,
        c = n(19755);
      function l(e) {
        return (
          (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          l(e)
        );
      }
      (a = function (e) {
        for (
          var t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), o = 0;
          o < n.length;
          o++
        ) {
          var a = n[o].split("=");
          t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
        }
        return t;
      }),
        (i = function (e) {
          var t = [];
          for (var n in e)
            e.hasOwnProperty(n) &&
              t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
          return t.join("&");
        }),
        (r = function (e, t) {
          var n,
            o = [];
          for (n in e)
            if (e.hasOwnProperty(n)) {
              var a = t ? t + "[" + n + "]" : n,
                r = e[n];
              a.length > 0 &&
                o.push(
                  null !== r && "object" === l(r)
                    ? i(r)
                    : encodeURIComponent(a) + "=" + encodeURIComponent(r)
                );
            }
          return o.join("&");
        }),
        (s = function (e, t) {
          var n = e.match(/\?link=([^&]+)/);
          if (!n) return e;
          var i = (function () {
              var e = "",
                t = null;
              if (store.get("marketingData"))
                for (
                  var n = [
                      "affiliate_visit",
                      "current_visit",
                      "first_visit",
                      "current_hit",
                    ],
                    o = store.get("marketingData"),
                    a = 0;
                  a < n.length;
                  a++
                ) {
                  var i = n[a];
                  if (
                    i in o &&
                    "tracking_url" in o[i] &&
                    -1 !== o[i].tracking_url.indexOf("?")
                  ) {
                    t = o[i].tracking_url;
                    break;
                  }
                }
              return null !== t && (e = t.split("?")[1]), e;
            })(),
            s = a(i),
            c = a(window.location.search),
            l = s,
            d = decodeURIComponent(n[1]).split("?")[1];
          if (d) {
            var u = a(d);
            l = Object.assign(u, s);
          }
          c && c.auid
            ? (l.auid = c.auid)
            : void 0 === l.auid &&
              void 0 !== o.cookie("adobe_unique_id") &&
              (l.auid = o.cookie("adobe_unique_id"));
          var f = r(l),
            h = decodeURIComponent(n[1]),
            p = h.split("?");
          return (function (e, t) {
            if (!t) return e;
            var n = t.data("utm-medium"),
              o = t.data("link-id");
            if (!n) return e;
            var a = {
                utm_source: "website",
                utm_medium: n,
                utm_campaign: "default",
                link_id: o,
              },
              i = r(a);
            return -1 !== e.indexOf(i)
              ? e
              : e + (e.indexOf("?") > 0 ? "&" : "?") + r(a);
          })(
            (e = (function (e, t, n) {
              null === n && (n = "");
              var o = new RegExp("\\b(" + t + "=).*?(&|#|$)");
              return e.search(o) >= 0
                ? e.replace(o, "$1" + encodeURIComponent(n) + "$2")
                : (e = e.replace(/[?#]$/, "")) +
                    (e.indexOf("?") > 0 ? "&" : "?") +
                    t +
                    "=" +
                    encodeURIComponent(n);
            })(e, "link", (h = p[0] + "?" + f))),
            t
          );
        }),
        ((o = c).fn.prepareDynamicLink = function (e, t) {
          return s(e, t);
        }),
        (o.fn.dynamicLink = function () {
          this.each(function () {
            var e = o(this),
              t = e.attr("href");
            "undefined" !== l(t) && !1 !== t && e.attr("href", s(t, e));
          });
        });
    },
    45588: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a),
        document,
        (function e() {
          void 0 !== o.cookie("adobe_unique_id")
            ? o(window).trigger("create.adobe_unique_id", {
                adobe_unique_id: o.cookie("adobe_unique_id"),
              })
            : window.sessionStorage &&
              window.sessionStorage.getItem("adobe_unique_id")
            ? o(window).trigger("create.adobe_unique_id", {
                adobe_unique_id:
                  window.sessionStorage.getItem("adobe_unique_id"),
              })
            : setTimeout(e, 100);
        })(),
        (o.marketingData = function (e, t) {
          if (null !== store.get("marketingData")) {
            var n = {};
            (n.data = store.get("marketingData")),
              window.sessionStorage &&
                (n.data.adobe_unique_id =
                  window.sessionStorage.getItem("adobe_unique_id")),
              o.ajax({
                type: "POST",
                url: e,
                data: n,
                complete: function (e, n) {
                  "function" == typeof t && t(e, n);
                },
              });
          }
        });
    },
    60409: (e, t, n) => {
      !(function (e, t) {
        e.fn.xtbMenu = function () {
          var n = e(this),
            o = e("body"),
            a = e(".js-header"),
            i = n.find(".js-overall-header-menu-item-wrapper"),
            r = n.find(".js-overall-header-menu-item"),
            s = n.find(".js-overall-header-menu-list-background"),
            c = n.find(".js-overall-header-menu-hide-background"),
            l = n.find(".js-overall-header-navbar-toggle"),
            d = n.find(".js-overall-header-menu-mobile"),
            u = n.find(".js-overall-header-backdrop"),
            f = e(t).scrollTop(),
            h = null,
            p = n.find(".js-language-switcher"),
            m = e("#languageSwitcherModal"),
            g = e(".js-alert"),
            v = e(".js-overall-header-accordion-btn"),
            b = e(".js-overall-header-accordion-content");
          function k() {
            u.stop(!0, !0).fadeOut(300),
              d.removeClass("active"),
              l.removeClass("active"),
              o.css("overflow", "auto"),
              o.removeClass("menu-active");
          }
          function w() {
            var i = e(t).scrollTop();
            n.toggleClass("scrolled", i > 0),
              o.toggleClass("scrolled", i > 0),
              i >= 120 &&
                (i < f
                  ? o.removeClass("small-nav-active")
                  : o.addClass("small-nav-active"),
                (f = i)),
              o.hasClass("scrolled") && o.hasClass("show-alert")
                ? a.css("margin-top", "-" + g.outerHeight() + "px")
                : a.css("margin-top", "0");
          }
          function y() {
            o.hasClass("small-nav-active")
              ? (o.removeClass("small-nav-active"),
                o.css("padding-top", a.height()),
                o.addClass("small-nav-active"))
              : o.css("padding-top", a.height());
          }
          o.hasClass("expanded-menu") && (v.addClass("active"), b.slideDown()),
            w(),
            e(t).on("scroll", function () {
              w();
            }),
            i.on("mouseleave", function () {
              s.stop(!0, !0).hide(), (h = null);
            }),
            c.on("mouseenter", function () {
              s.stop(!0, !0).hide(), (h = null);
            }),
            r
              .on("mouseenter", function () {
                var t,
                  o,
                  a,
                  i = r.index(e(this)),
                  c = e(this).find(".js-overall-header-menu-list ul"),
                  l = n.find(".js-overall-header-menu-item-wrapper");
                e(this)
                  .find(".js-overall-header-menu-list")
                  .stop(!0, !0)
                  .fadeIn(300),
                  (t = c.offset().left - l.offset().left),
                  (o = c.outerWidth()),
                  (a = c.outerHeight()),
                  null === h
                    ? (s.css({ left: t, width: o, height: a }),
                      s.stop(!0, !0).fadeIn(200))
                    : i > h
                    ? (e(this)
                        .find(".js-overall-header-menu-list li")
                        .css({ marginLeft: "-20px" }),
                      e(this)
                        .find(".js-overall-header-menu-list li")
                        .animate({ marginLeft: "0" }, 300),
                      s
                        .stop(!0, !0)
                        .animate({ left: t, width: o, height: a }, 300))
                    : (e(this)
                        .find(".js-overall-header-menu-list li")
                        .css({ marginRight: "-20px" }),
                      e(this)
                        .find(".js-overall-header-menu-list li")
                        .animate({ marginRight: "0" }, 200),
                      s
                        .stop(!0, !0)
                        .animate({ left: t, width: o, height: a }, 200)),
                  (h = i);
              })
              .on("mouseleave", function () {
                e(this)
                  .find(".js-overall-header-menu-list")
                  .stop(!0, !0)
                  .hide();
              }),
            u.on("click", function (e) {
              e.preventDefault(), k();
            }),
            l.on("click", function (t) {
              t.preventDefault(),
                e(this).toggleClass("active"),
                e(this).hasClass("active")
                  ? (u.stop(!0, !0).fadeIn(300),
                    d.addClass("active"),
                    o.css("overflow", "hidden"),
                    o.addClass("menu-active"),
                    gtmDataLayer.addToDataLayer("hamburger_click"))
                  : k();
            }),
            p.on("click", function (n) {
              n.preventDefault(),
                e(t).width() >= 768 && o.addClass("transparent-backdrop"),
                m.modal("show");
            }),
            m.on("hidden.bs.modal", function () {
              o.removeClass("transparent-backdrop");
            }),
            a.addClass("fixed-top"),
            y(),
            e(t).on("resize", function () {
              y(), e(this).width() >= 1200 && k();
            });
        };
      })(n(19755), window);
    },
    48448: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a).fn.xtbAccordion = function (e, t, n) {
        n = void 0 !== n && n;
        var a = o(this),
          i = a.find(e),
          r = a.find(t);
        i.on("click", function (e) {
          e.preventDefault();
          var t = i.index(o(this));
          n
            ? (o(this).hasClass("active")
                ? r.eq(t).slideUp()
                : r.eq(t).slideDown(),
              o(this).toggleClass("active"))
            : o(this).hasClass("active")
            ? (o(this).removeClass("active"), r.slideUp())
            : (i.removeClass("active"),
              r.slideUp(),
              o(this).addClass("active"),
              r.eq(t).slideDown());
        });
      };
    },
    23532: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a),
        window,
        (o.fn.showBtnsForTargetOs = function () {
          var e = o(".js-btns"),
            t = getOS();
          o("body").hasClass("browser-mobile")
            ? ("Mac OS" === t &&
                e.find(".os-apple").css("display", "inline-block"),
              -1 !== o.inArray(t, ["Windows", "Linux"]) &&
                e.find(".os-windows").css("display", "inline-block"),
              "iOS" === t && e.find(".os-ios").css("display", "inline-block"),
              "Android" === t &&
                e.find(".os-android").css("display", "inline-block"))
            : ("Mac OS" === t &&
                e.find(".desktop-apple").css("display", "inline-block"),
              -1 !== o.inArray(t, ["Windows", "Linux"]) &&
                e.find(".desktop-windows").css("display", "inline-block"),
              e.find(".desktop").css("display", "inline-block"));
        }),
        a(document).ready(function () {
          a(window).showBtnsForTargetOs();
        }),
        a(window).on("newBtnsLoaded", function () {
          a(window).showBtnsForTargetOs();
        });
    },
    29622: (e, t, n) => {
      var o,
        a = n(19755);
      (o = a).fn.cookieApplier = function () {
        return o.ajax({
          type: "HEAD",
          async: !0,
          url: window.Routing.generate(
            "front_".concat(
              window.Routing.globalDefaults._branch,
              "_cookie_applier"
            )
          ),
        });
      };
    },
    39812: (e, t, n) => {
      var o, a;
      (o = [n(19755)]),
        void 0 ===
          (a = function (e) {
            return (function (e) {
              "use strict";
              function t(e) {
                void 0 === e && (e = window.navigator.userAgent),
                  (e = e.toLowerCase());
                var t =
                    /(edge)\/([\w.]+)/.exec(e) ||
                    /(opr)[\/]([\w.]+)/.exec(e) ||
                    /(chrome)[ \/]([\w.]+)/.exec(e) ||
                    /(iemobile)[\/]([\w.]+)/.exec(e) ||
                    /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(
                      e
                    ) ||
                    /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(
                      e
                    ) ||
                    /(webkit)[ \/]([\w.]+)/.exec(e) ||
                    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
                    /(msie) ([\w.]+)/.exec(e) ||
                    (e.indexOf("trident") >= 0 &&
                      /(rv)(?::| )([\w.]+)/.exec(e)) ||
                    (e.indexOf("compatible") < 0 &&
                      /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
                    [],
                  n =
                    /(ipad)/.exec(e) ||
                    /(ipod)/.exec(e) ||
                    /(windows phone)/.exec(e) ||
                    /(iphone)/.exec(e) ||
                    /(kindle)/.exec(e) ||
                    /(silk)/.exec(e) ||
                    /(android)/.exec(e) ||
                    /(win)/.exec(e) ||
                    /(mac)/.exec(e) ||
                    /(linux)/.exec(e) ||
                    /(cros)/.exec(e) ||
                    /(playbook)/.exec(e) ||
                    /(bb)/.exec(e) ||
                    /(blackberry)/.exec(e) ||
                    [],
                  o = {},
                  a = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0",
                    platform: n[0] || "",
                  };
                if (
                  (a.browser &&
                    ((o[a.browser] = !0),
                    (o.version = a.version),
                    (o.versionNumber = parseInt(a.versionNumber, 10))),
                  a.platform && (o[a.platform] = !0),
                  (o.android ||
                    o.bb ||
                    o.blackberry ||
                    o.ipad ||
                    o.iphone ||
                    o.ipod ||
                    o.kindle ||
                    o.playbook ||
                    o.silk ||
                    o["windows phone"]) &&
                    (o.mobile = !0),
                  (o.cros || o.mac || o.linux || o.win) && (o.desktop = !0),
                  (o.chrome || o.opr || o.safari) && (o.webkit = !0),
                  o.rv || o.iemobile)
                ) {
                  var i = "msie";
                  (a.browser = i), (o[i] = !0);
                }
                if (o.edge) {
                  delete o.edge;
                  var r = "msedge";
                  (a.browser = r), (o[r] = !0);
                }
                if (o.safari && o.blackberry) {
                  var s = "blackberry";
                  (a.browser = s), (o[s] = !0);
                }
                if (o.safari && o.playbook) {
                  var c = "playbook";
                  (a.browser = c), (o[c] = !0);
                }
                if (o.bb) {
                  var l = "blackberry";
                  (a.browser = l), (o[l] = !0);
                }
                if (o.opr) {
                  var d = "opera";
                  (a.browser = d), (o[d] = !0);
                }
                if (o.safari && o.android) {
                  var u = "android";
                  (a.browser = u), (o[u] = !0);
                }
                if (o.safari && o.kindle) {
                  var f = "kindle";
                  (a.browser = f), (o[f] = !0);
                }
                if (o.safari && o.silk) {
                  var h = "silk";
                  (a.browser = h), (o[h] = !0);
                }
                return (o.name = a.browser), (o.platform = a.platform), o;
              }
              return (
                (window.jQBrowser = t(window.navigator.userAgent)),
                (window.jQBrowser.uaMatch = t),
                e && (e.browser = window.jQBrowser),
                window.jQBrowser
              );
            })(e);
          }.apply(t, o)) || (e.exports = a);
    },
    66222: (e, t, n) => {
      var o, a, i;
      (a = [n(19755)]),
        void 0 ===
          (i =
            "function" ==
            typeof (o = function (e) {
              var t = /\+/g;
              function n(e) {
                return s.raw ? e : encodeURIComponent(e);
              }
              function o(e) {
                return s.raw ? e : decodeURIComponent(e);
              }
              function a(e) {
                return n(s.json ? JSON.stringify(e) : String(e));
              }
              function i(e) {
                0 === e.indexOf('"') &&
                  (e = e
                    .slice(1, -1)
                    .replace(/\\"/g, '"')
                    .replace(/\\\\/g, "\\"));
                try {
                  return (
                    (e = decodeURIComponent(e.replace(t, " "))),
                    s.json ? JSON.parse(e) : e
                  );
                } catch (e) {}
              }
              function r(t, n) {
                var o = s.raw ? t : i(t);
                return e.isFunction(n) ? n(o) : o;
              }
              var s = (e.cookie = function (t, i, c) {
                if (arguments.length > 1 && !e.isFunction(i)) {
                  if (
                    "number" == typeof (c = e.extend({}, s.defaults, c)).expires
                  ) {
                    var l = c.expires,
                      d = (c.expires = new Date());
                    d.setMilliseconds(d.getMilliseconds() + 864e5 * l);
                  }
                  return (document.cookie = [
                    n(t),
                    "=",
                    a(i),
                    c.expires ? "; expires=" + c.expires.toUTCString() : "",
                    c.path ? "; path=" + c.path : "",
                    c.domain ? "; domain=" + c.domain : "",
                    c.secure ? "; secure" : "",
                  ].join(""));
                }
                for (
                  var u = t ? void 0 : {},
                    f = document.cookie ? document.cookie.split("; ") : [],
                    h = 0,
                    p = f.length;
                  h < p;
                  h++
                ) {
                  var m = f[h].split("="),
                    g = o(m.shift()),
                    v = m.join("=");
                  if (t === g) {
                    u = r(v, i);
                    break;
                  }
                  t || void 0 === (v = r(v)) || (u[g] = v);
                }
                return u;
              });
              (s.defaults = {}),
                (e.removeCookie = function (t, n) {
                  return (
                    e.cookie(t, "", e.extend({}, n, { expires: -1 })),
                    !e.cookie(t)
                  );
                });
            })
              ? o.apply(t, a)
              : o) || (e.exports = i);
    },
    92431: function (e, t, n) {
      !(function (e, t, n) {
        var o,
          a = "hashchange",
          i = document,
          r = e.event.special,
          s = i.documentMode,
          c = "on" + a in t && (s === n || s > 7);
        function l(e) {
          return "#" + (e = e || location.href).replace(/^[^#]*#?(.*)$/, "$1");
        }
        (e.fn[a] = function (e) {
          return e ? this.bind(a, e) : this.trigger(a);
        }),
          (e.fn[a].delay = 50),
          (r[a] = e.extend(r[a], {
            setup: function () {
              if (c) return !1;
              e(o.start);
            },
            teardown: function () {
              if (c) return !1;
              e(o.stop);
            },
          })),
          (o = (function () {
            var o,
              r,
              s,
              d = {},
              u = l(),
              f = function (e) {
                return e;
              },
              h = f,
              p = f;
            function m() {
              var n = l(),
                i = p(u);
              n !== u
                ? (h((u = n), i), e(t).trigger(a))
                : i !== u &&
                  (location.href = location.href.replace(/#.*/, "") + i),
                (o = setTimeout(m, e.fn[a].delay));
            }
            return (
              (d.start = function () {
                o || m();
              }),
              (d.stop = function () {
                o && clearTimeout(o), (o = n);
              }),
              e.browser.msie &&
                !c &&
                ((d.start = function () {
                  r ||
                    ((s = (s = e.fn[a].src) && s + l()),
                    (r = e('<iframe tabindex="-1" title="empty"/>')
                      .hide()
                      .one("load", function () {
                        s || h(l()), m();
                      })
                      .attr("src", s || "javascript:0")
                      .insertAfter("body")[0].contentWindow),
                    (i.onpropertychange = function () {
                      try {
                        "title" === event.propertyName &&
                          (r.document.title = i.title);
                      } catch (e) {}
                    }));
                }),
                (d.stop = f),
                (p = function () {
                  return l(r.location.href);
                }),
                (h = function (t, n) {
                  var o = r.document,
                    s = e.fn[a].domain;
                  t !== n &&
                    ((o.title = i.title),
                    o.open(),
                    s &&
                      o.write('<script>document.domain="' + s + '"</script>'),
                    o.close(),
                    (r.location.hash = t));
                })),
              d
            );
          })());
      })(n(19755), this);
    },
    69213: function (e, t) {
      var n, o, a, i;
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      (i = (function () {
        "use strict";
        var e =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            },
          t =
            "function" == typeof Symbol && "symbol" === r(Symbol.iterator)
              ? function (e) {
                  return r(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : r(e);
                },
          n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })();
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var a = (function () {
          function a(e, t) {
            o(this, a),
              (this.context_ = e || {
                base_url: "",
                prefix: "",
                host: "",
                port: "",
                scheme: "",
                locale: "",
              }),
              this.setRoutes(t || {});
          }
          return (
            n(
              a,
              [
                {
                  key: "setRoutingData",
                  value: function (e) {
                    this.setBaseUrl(e.base_url),
                      this.setRoutes(e.routes),
                      "prefix" in e && this.setPrefix(e.prefix),
                      "port" in e && this.setPort(e.port),
                      "locale" in e && this.setLocale(e.locale),
                      this.setHost(e.host),
                      this.setScheme(e.scheme);
                  },
                },
                {
                  key: "setRoutes",
                  value: function (e) {
                    this.routes_ = Object.freeze(e);
                  },
                },
                {
                  key: "getRoutes",
                  value: function () {
                    return this.routes_;
                  },
                },
                {
                  key: "setBaseUrl",
                  value: function (e) {
                    this.context_.base_url = e;
                  },
                },
                {
                  key: "getBaseUrl",
                  value: function () {
                    return this.context_.base_url;
                  },
                },
                {
                  key: "setPrefix",
                  value: function (e) {
                    this.context_.prefix = e;
                  },
                },
                {
                  key: "setScheme",
                  value: function (e) {
                    this.context_.scheme = e;
                  },
                },
                {
                  key: "getScheme",
                  value: function () {
                    return this.context_.scheme;
                  },
                },
                {
                  key: "setHost",
                  value: function (e) {
                    this.context_.host = e;
                  },
                },
                {
                  key: "getHost",
                  value: function () {
                    return this.context_.host;
                  },
                },
                {
                  key: "setPort",
                  value: function (e) {
                    this.context_.port = e;
                  },
                },
                {
                  key: "getPort",
                  value: function () {
                    return this.context_.port;
                  },
                },
                {
                  key: "setLocale",
                  value: function (e) {
                    this.context_.locale = e;
                  },
                },
                {
                  key: "getLocale",
                  value: function () {
                    return this.context_.locale;
                  },
                },
                {
                  key: "buildQueryParams",
                  value: function (e, n, o) {
                    var a = this,
                      i = void 0,
                      r = new RegExp(/\[\]$/);
                    if (n instanceof Array)
                      n.forEach(function (n, i) {
                        r.test(e)
                          ? o(e, n)
                          : a.buildQueryParams(
                              e +
                                "[" +
                                ("object" ===
                                (void 0 === n ? "undefined" : t(n))
                                  ? i
                                  : "") +
                                "]",
                              n,
                              o
                            );
                      });
                    else if ("object" === (void 0 === n ? "undefined" : t(n)))
                      for (i in n)
                        this.buildQueryParams(e + "[" + i + "]", n[i], o);
                    else o(e, n);
                  },
                },
                {
                  key: "getRoute",
                  value: function (e) {
                    var t = [
                      this.context_.prefix + e,
                      e + "." + this.context_.locale,
                      this.context_.prefix + e + "." + this.context_.locale,
                      e,
                    ];
                    for (var n in t)
                      if (t[n] in this.routes_) return this.routes_[t[n]];
                    throw new Error('The route "' + e + '" does not exist.');
                  },
                },
                {
                  key: "generate",
                  value: function (t, n) {
                    var o =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      i = this.getRoute(t),
                      r = n || {},
                      s = e({}, r),
                      c = "",
                      l = !0,
                      d = "",
                      u =
                        void 0 === this.getPort() || null === this.getPort()
                          ? ""
                          : this.getPort();
                    if (
                      (i.tokens.forEach(function (e) {
                        if ("text" === e[0])
                          return (
                            (c = a.encodePathComponent(e[1]) + c), void (l = !1)
                          );
                        if ("variable" !== e[0])
                          throw new Error(
                            'The token type "' + e[0] + '" is not supported.'
                          );
                        var n = i.defaults && e[3] in i.defaults;
                        if (
                          !1 === l ||
                          !n ||
                          (e[3] in r && r[e[3]] != i.defaults[e[3]])
                        ) {
                          var o = void 0;
                          if (e[3] in r) (o = r[e[3]]), delete s[e[3]];
                          else {
                            if (!n) {
                              if (l) return;
                              throw new Error(
                                'The route "' +
                                  t +
                                  '" requires the parameter "' +
                                  e[3] +
                                  '".'
                              );
                            }
                            o = i.defaults[e[3]];
                          }
                          if ((!0 !== o && !1 !== o && "" !== o) || !l) {
                            var d = a.encodePathComponent(o);
                            "null" === d && null === o && (d = ""),
                              (c = e[1] + d + c);
                          }
                          l = !1;
                        } else n && e[3] in s && delete s[e[3]];
                      }),
                      "" === c && (c = "/"),
                      i.hosttokens.forEach(function (e) {
                        var t = void 0;
                        "text" !== e[0]
                          ? "variable" === e[0] &&
                            (e[3] in r
                              ? ((t = r[e[3]]), delete s[e[3]])
                              : i.defaults &&
                                e[3] in i.defaults &&
                                (t = i.defaults[e[3]]),
                            (d = e[1] + t + d))
                          : (d = e[1] + d);
                      }),
                      (c = this.context_.base_url + c),
                      i.requirements &&
                        "_scheme" in i.requirements &&
                        this.getScheme() != i.requirements._scheme)
                    ) {
                      var f = d || this.getHost();
                      c =
                        i.requirements._scheme +
                        "://" +
                        f +
                        (f.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) +
                        c;
                    } else if (
                      void 0 !== i.schemes &&
                      void 0 !== i.schemes[0] &&
                      this.getScheme() !== i.schemes[0]
                    ) {
                      var h = d || this.getHost();
                      c =
                        i.schemes[0] +
                        "://" +
                        h +
                        (h.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) +
                        c;
                    } else
                      d &&
                      this.getHost() !==
                        d + (d.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u)
                        ? (c =
                            this.getScheme() +
                            "://" +
                            d +
                            (d.indexOf(":" + u) > -1 || "" === u
                              ? ""
                              : ":" + u) +
                            c)
                        : !0 === o &&
                          (c =
                            this.getScheme() +
                            "://" +
                            this.getHost() +
                            (this.getHost().indexOf(":" + u) > -1 || "" === u
                              ? ""
                              : ":" + u) +
                            c);
                    if (Object.keys(s).length > 0) {
                      var p = void 0,
                        m = [],
                        g = function (e, t) {
                          (t =
                            null === (t = "function" == typeof t ? t() : t)
                              ? ""
                              : t),
                            m.push(
                              a.encodeQueryComponent(e) +
                                "=" +
                                a.encodeQueryComponent(t)
                            );
                        };
                      for (p in s) this.buildQueryParams(p, s[p], g);
                      c = c + "?" + m.join("&");
                    }
                    return c;
                  },
                },
              ],
              [
                {
                  key: "getInstance",
                  value: function () {
                    return i;
                  },
                },
                {
                  key: "setData",
                  value: function (e) {
                    a.getInstance().setRoutingData(e);
                  },
                },
                {
                  key: "customEncodeURIComponent",
                  value: function (e) {
                    return encodeURIComponent(e)
                      .replace(/%2F/g, "/")
                      .replace(/%40/g, "@")
                      .replace(/%3A/g, ":")
                      .replace(/%21/g, "!")
                      .replace(/%3B/g, ";")
                      .replace(/%2C/g, ",")
                      .replace(/%2A/g, "*")
                      .replace(/\(/g, "%28")
                      .replace(/\)/g, "%29")
                      .replace(/'/g, "%27");
                  },
                },
                {
                  key: "encodePathComponent",
                  value: function (e) {
                    return a
                      .customEncodeURIComponent(e)
                      .replace(/%3D/g, "=")
                      .replace(/%2B/g, "+")
                      .replace(/%21/g, "!")
                      .replace(/%7C/g, "|");
                  },
                },
                {
                  key: "encodeQueryComponent",
                  value: function (e) {
                    return a.customEncodeURIComponent(e).replace(/%3F/g, "?");
                  },
                },
              ]
            ),
            a
          );
        })();
        a.Route, a.Context;
        var i = new a();
        return { Router: a, Routing: i };
      })()),
        (o = []),
        (n = i.Routing),
        void 0 === (a = "function" == typeof n ? n.apply(t, o) : n) ||
          (e.exports = a);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [9755, 3138, 7563],
      () => (
        t(88604),
        t(39812),
        t(66222),
        t(92431),
        t(48448),
        t(25160),
        t(77383),
        t(7806),
        t(23532),
        t(29622),
        t(7570),
        t(45588),
        t(95103),
        t(11573),
        t(60409),
        t(22187),
        t(53532)
      )
    );
    e.O();
  },
]);
