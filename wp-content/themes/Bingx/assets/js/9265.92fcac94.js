(self.webpackChunkxtb_com = self.webpackChunkxtb_com || []).push([
  [9265],
  {
    59265: (e, t, s) => {
      var n = s(19755),
        i = (function () {
          function e(e, t) {
            for (var s = 0; s < t.length; s++) {
              var n = t[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, s, n) {
            return s && e(t.prototype, s), n && e(t, n), t;
          };
        })();
      !(function (e) {
        "use strict";
        e.fn.initWebSocketClient = function (e, s, n) {
          new t(e, s, n);
        };
        var t = (function () {
          function t(s, n, i) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            try {
              (this.wsinstance = this.open(s)),
                e(this.mainContainerClass).show(),
                (null !== this.wsinstance && void 0 !== this.wsinstance) ||
                  (console.error("Could not connect to WebService"),
                  e(this.mainContainerClass).hide());
            } catch (t) {
              console.error(t), e(this.mainContainerClass).hide();
            }
            function a(e) {
              return e.replace(/\.?0+$/, "");
            }
            function o(e) {
              var t = a(e.toString());
              return t.slice(0, -2) + "<strong>" + t.slice(-2) + "</strong>";
            }
            return (
              (this.wsinstance.endpoint = n.endpoint),
              (this.wsinstance.user = n.user),
              (this.wsinstance.accountId = n.accountId),
              (this.wsinstance.accessCode = n.accessCode),
              (this.wsinstance.methods = i.callMethods),
              (this.wsinstance.env = i.environment),
              (this.wsinstance.widgetTypeId = i.widgetTypeId),
              (this.wsinstance.subscribedSymbols = JSON.parse(
                i.subscribedSymbols
              )),
              (this.wsinstance.chartStart = i.chartStart),
              (this.wsinstance.chartEnd = i.chartEnd),
              (this.wsinstance.chartInterval = i.chartInterval),
              (this.wsinstance.mainContainerClass = i.mainContainerClass),
              (this.wsinstance.instrumentBoxClass = i.instrumentBoxClass),
              (this.wsinstance.templateInstrumentBoxClass =
                i.templateInstrumentBoxClass),
              (this.wsinstance.onopen = function () {
                this.log("client connected", "info");
                try {
                  this.logonRestricted();
                  var e = this;
                  setTimeout(function () {
                    e.declareCommands(e);
                  }, 2e3);
                } catch (e) {
                  console.error(e);
                }
              }),
              (this.wsinstance.onclose = function (e) {
                this.log(
                  "client closed. msg: " + e.reason + " code: " + e.code,
                  "info"
                );
              }),
              (this.wsinstance.onerror = function (e) {
                this.log("Message from server ", e.message, "error"),
                  this.handleError(e);
              }),
              (this.wsinstance.onmessage = function (e) {
                this.log("WS message:", "info");
                var t = JSON.parse(e.data);
                if ((this.log(t, "info"), 2 === t.status && !0 === t.completed))
                  this.subscribeToSymbolsResponse(t);
                else if (0 === t.status && !0 === t.completed)
                  switch (t.reqId) {
                    case "logonRestricted":
                      this.getLogonResponse(t);
                      break;
                    case "getAllSymbols":
                      this.getAllSymbolsResponse(t);
                      break;
                    case "getBySymbols":
                      this.getBySymbolsResponse(t);
                      break;
                    case "getChartHistoryByDate":
                      this.getChartHistoryByDateResponse(t);
                      break;
                    case "getAndSubscribeElement":
                      this.getAndSubscribeElementResponse(t);
                      break;
                    case "getElement":
                      this.getElementResponse(t);
                  }
              }),
              (this.wsinstance.log = function (e, t) {
                if (e) {
                  "info" === t && this.env, "error" === t && console.error(e);
                }
              }),
              (this.wsinstance.declareCommands = function (e) {
                try {
                  var t = this.methods;
                  t &&
                    t.length > 0 &&
                    t.forEach(function (t) {
                      switch (t) {
                        case "getAllSymbols":
                          e.getAllSymbols();
                          break;
                        case "getBySymbols":
                          e.getBySymbols();
                          break;
                        case "subscribeToSymbols":
                          e.subscribeToSymbols();
                          break;
                        case "getAndSubscribeElement":
                          e.getAndSubscribeElement();
                          break;
                        case "getChartHistoryByDate":
                          e.getChartHistoryByDate();
                          break;
                        case "getElement":
                          e.getElement();
                      }
                    });
                } catch (e) {
                  this.handleError(e);
                }
              }),
              (this.wsinstance.handleError = function (t) {
                var s = this;
                if ("error" === t.type)
                  s.log("Could not connect to WebService", "error"),
                    e(s.mainContainerClass).hide();
                else s.reconnect(t);
              }),
              (this.wsinstance.isClientReady = function () {
                return this.readyState === WebSocket.OPEN;
              }),
              (this.wsinstance.logonRestricted = function () {
                if (!1 !== this.isClientReady())
                  if (
                    this.endpoint.length > 0 &&
                    this.user.length > 0 &&
                    this.accessCode.length > 0
                  ) {
                    this.log("Logging as user: " + this.user, "info");
                    var e = {
                      CoreAPI: {
                        endpoint: this.endpoint,
                        logonRestricted: {
                          user: this.user,
                          accessCode: this.accessCode,
                        },
                      },
                    };
                    this.send(
                      JSON.stringify({ reqId: "logonRestricted", command: [e] })
                    );
                  } else this.log("No all credentials was provided.", "error");
                else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getAllSymbols = function () {
                if (!1 !== this.isClientReady()) {
                  this.log("Getting data for AllSymbols", "info");
                  var e = {
                    CoreAPI: {
                      endpoint: this.endpoint,
                      accountId: this.accountId,
                      getElement: { eid: 3 },
                    },
                  };
                  this.send(
                    JSON.stringify({ reqId: "getAllSymbols", command: [e] })
                  );
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getBySymbols = function () {
                if (!1 !== this.isClientReady()) {
                  this.log("Get Instruments by symbols:", "info");
                  var e = [];
                  Object.values(this.subscribedSymbols) &&
                    Object.values(this.subscribedSymbols).length > 0 &&
                    Object.keys(this.subscribedSymbols).forEach(function (t) {
                      e.push(t);
                    });
                  var t = {
                    CoreAPI: {
                      endpoint: this.endpoint,
                      accountId: this.accountId,
                      getElement: { eid: 3, keys: e },
                    },
                  };
                  this.send(
                    JSON.stringify({ reqId: "getBySymbols", command: [t] })
                  );
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.subscribeToSymbols = function () {
                if (!1 !== this.isClientReady()) {
                  this.log("Subscribing for symbols:", "info"),
                    this.log(this.subscribedSymbols, "info");
                  var e = [];
                  if (
                    (Object.values(this.subscribedSymbols) &&
                      Object.values(this.subscribedSymbols).length > 0 &&
                      Object.keys(this.subscribedSymbols).forEach(function (t) {
                        e.push(t);
                      }),
                    e.length > 0)
                  ) {
                    var t = {
                      CoreAPI: {
                        endpoint: this.endpoint,
                        accountId: this.accountId,
                        subscribeElement: { eid: 2, keys: e },
                      },
                    };
                    this.send(
                      JSON.stringify({
                        reqId: "subscribeElementsTick",
                        command: [t],
                      })
                    );
                  } else this.log("no symbols defined for widget", "info");
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getAndSubscribeElement = function () {
                if (!1 !== this.isClientReady()) {
                  this.log(
                    "Getting snapshot and subscribing for symbols:",
                    "info"
                  ),
                    this.log(this.subscribedSymbols, "info");
                  var t = [];
                  if (
                    (Object.values(this.subscribedSymbols) &&
                      Object.values(this.subscribedSymbols).length > 0 &&
                      Object.keys(this.subscribedSymbols).forEach(function (e) {
                        t.push(e);
                      }),
                    t.length > 0)
                  ) {
                    var s = {
                      CoreAPI: {
                        endpoint: this.endpoint,
                        accountId: this.accountId,
                        getAndSubscribeElement: { eid: 2, keys: t },
                      },
                    };
                    this.send(
                      JSON.stringify({
                        reqId: "getAndSubscribeElement",
                        command: [s],
                      })
                    );
                  } else
                    this.log("no symbols defined for widget", "info"),
                      e(this.mainContainerClass).hide();
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getElement = function () {
                if (!1 !== this.isClientReady()) {
                  this.log(
                    "Getting snapshot and subscribing for symbols:",
                    "info"
                  ),
                    this.log(this.subscribedSymbols, "info");
                  var e = [];
                  if (
                    (Object.values(this.subscribedSymbols) &&
                      Object.values(this.subscribedSymbols).length > 0 &&
                      Object.keys(this.subscribedSymbols).forEach(function (t) {
                        e.push(t);
                      }),
                    e.length > 0)
                  ) {
                    var t = {
                      CoreAPI: {
                        endpoint: this.endpoint,
                        accountId: this.accountId,
                        getElement: { eid: 1005, keys: e },
                      },
                    };
                    this.send(
                      JSON.stringify({ reqId: "getElement", command: [t] })
                    );
                  } else this.log("no symbols defined for widget", "info");
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getChartHistoryByDate = function () {
                if (!1 !== this.isClientReady()) {
                  this.log("Get Chart History ByDate for symbols:", "info"),
                    this.log(this.subscribedSymbols, "info");
                  var e = this;
                  Object.values(this.subscribedSymbols) &&
                    Object.values(this.subscribedSymbols).length > 0 &&
                    Object.keys(this.subscribedSymbols).forEach(function (t) {
                      var s = t.split("_"),
                        n = {
                          IXServerAPI: {
                            endpoint: e.endpoint,
                            accountId: e.accountId,
                            getChartHistoryByDate: {
                              assetClass: parseInt(s[0]),
                              symbol: s[1],
                              quoteId: parseInt(s[2]),
                              interval: parseInt(e.chartInterval),
                              start: parseInt(e.chartStart),
                              end: parseInt(e.chartEnd),
                            },
                          },
                        };
                      e.send(
                        JSON.stringify({
                          reqId: "getChartHistoryByDate",
                          command: [n],
                        })
                      );
                    });
                } else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getChartHistoryByDateForSymbol = function (e) {
                if (!1 !== this.isClientReady())
                  if (e) {
                    this.log("Get Chart History ByDate for symbol:", "info"),
                      this.log(e, "info");
                    var t = this,
                      s = e.split("_"),
                      n = {
                        IXServerAPI: {
                          endpoint: t.endpoint,
                          accountId: t.accountId,
                          getChartHistoryByDate: {
                            assetClass: parseInt(s[0]),
                            symbol: s[1],
                            quoteId: parseInt(s[2]),
                            interval: parseInt(t.chartInterval),
                            start: parseInt(t.chartStart),
                            end: parseInt(t.chartEnd),
                          },
                        },
                      };
                    t.send(
                      JSON.stringify({
                        reqId: "getChartHistoryByDate",
                        command: [n],
                      })
                    );
                  } else this.log("No symbol provided", "error");
                else this.log("WS Client not ready", "error");
              }),
              (this.wsinstance.getAllSymbolsResponse = function (e) {}),
              (this.wsinstance.getLogonResponse = function (t) {
                var s = t.response[0],
                  n = t.response[0].exception;
                n
                  ? (e(this.mainContainerClass).hide(),
                    this.log(n.message, "error"))
                  : s.xloginresult &&
                    (this.log("Logon successful", "info"),
                    e(this.mainContainerClass).show());
              }),
              (this.wsinstance.getBySymbolsResponse = function (e) {
                var t = this,
                  s = e.response[0].element.elements;
                s &&
                  s.length > 0 &&
                  s.forEach(function (e) {
                    var s = e.value.xcfdsymbol,
                      n = {
                        symbol: s.name,
                        bid: s.bid,
                        ask: s.ask,
                        tradingHours:
                          t.subscribedSymbols[
                            s.idAssetClass + "_" + s.name + "_" + s.quoteId
                          ],
                      };
                    t.recalculateAndUpdateInstrumentBoxValues(n);
                  });
              }),
              (this.wsinstance.subscribeToSymbolsResponse = function (e) {
                var t = e.events[0].row.value.xcfdtick;
                (t.tradingHours =
                  this.subscribedSymbols[
                    t.assetClass + "_" + t.symbol + "_" + t.quoteId
                  ]),
                  this.recalculateAndUpdateInstrumentBoxValues(t);
              }),
              (this.wsinstance.getChartHistoryByDateResponse = function (t) {
                if (t.response[0].xcharthistory.xRateInfos) {
                  var s = t.response[0].xcharthistory.xRateInfos,
                    n = s[0].symbol,
                    i = [],
                    a = [],
                    o = e(
                      this.mainContainerClass +
                        " " +
                        this.instrumentBoxClass +
                        '[data-symbol="' +
                        n +
                        '"]'
                    );
                  for (var r in (o.addClass("chart-ready"), s))
                    s.hasOwnProperty(r) &&
                      (i.push(s[r].low), a.push(s[r].time));
                  var l = o.find(".js-chart")[0].getContext("2d"),
                    c = l.createLinearGradient(0, 0, 0, 65);
                  c.addColorStop(0, "rgba(12, 205, 147, 0.1)"),
                    c.addColorStop(1, "transparent"),
                    new Chart(l, {
                      type: "line",
                      data: {
                        labels: a,
                        datasets: [
                          {
                            borderColor: "#059e5a",
                            pointBorderWidth: 0,
                            pointHoverRadius: 7,
                            pointHoverBorderWidth: 1,
                            pointRadius: 0,
                            fill: !0,
                            backgroundColor: c,
                            borderWidth: 1,
                            data: i,
                          },
                        ],
                      },
                      options: {
                        elements: { line: { tension: 0 } },
                        legend: { display: !1 },
                        maintainAspectRatio: !1,
                        scales: {
                          yAxes: [
                            {
                              display: !1,
                              ticks: { display: !1 },
                              gridLines: { drawTicks: !1, display: !1 },
                            },
                          ],
                          xAxes: [
                            {
                              display: !1,
                              gridLines: { drawTicks: !1, display: !1 },
                              ticks: { display: !1 },
                            },
                          ],
                        },
                      },
                    }).render();
                }
              }),
              (this.wsinstance.getAndSubscribeElementResponse = function (t) {
                var s = this;
                try {
                  e.each(t.response[0].element.elements, function (e, t) {
                    var n = t.value.xcfdtick;
                    s.recalculateAndUpdateInstrumentBoxValues(n);
                  });
                } catch (e) {}
              }),
              (this.wsinstance.getElementResponse = function (t) {
                var s = this;
                try {
                  e.each(t.response[0].element.elements, function (e, t) {
                    var n = t.value.xcloseprice;
                    s.setBoxValues(n);
                  });
                } catch (e) {}
              }),
              (this.wsinstance.calculateInstrumentDailyChange = function (
                e,
                t
              ) {
                var s = "0.00";
                return (
                  0 !== e &&
                    t &&
                    (t > e
                      ? (s = "-" + (((t - e) / e) * 100).toFixed(2))
                      : t < e && (s = (((e - t) / e) * 100).toFixed(2))),
                  (s = a(s) + "%")
                );
              }),
              (this.wsinstance.recalculateAndUpdateInstrumentBoxValues =
                function (e) {
                  switch (this.widgetTypeId) {
                    case "instrumentSpecification":
                      this.recalculateAndUpdateInstrumentSpecificationBoxValues(
                        e
                      );
                      break;
                    case "instrumentPage":
                      this.recalculateAndUpdateInstrumentPageBoxValues(e);
                      break;
                    case "instrumentHomepage":
                      this.recalculateAndUpdateHomePageBoxValues(e);
                  }
                }),
              (this.wsinstance.recalculateAndUpdateHomePageBoxValues =
                function (t) {
                  if (t) {
                    var s = t.symbol,
                      n = t.key,
                      i = e(
                        this.mainContainerClass +
                          " " +
                          this.instrumentBoxClass +
                          '[data-instrument="' +
                          n +
                          '"]'
                      ),
                      a = this;
                    e.each(i, function (n, i) {
                      var r = parseFloat(t.ask).toFixed(4),
                        l = parseFloat(t.bid).toFixed(4),
                        c = parseFloat(t.high).toFixed(4),
                        d = parseFloat(t.low).toFixed(4),
                        h = parseFloat(e(i).attr("close1day")),
                        u = 0,
                        p = 0,
                        b = a.calculateInstrumentDailyChange(
                          parseFloat(t.bid),
                          h
                        ),
                        m = Math.abs(
                          parseFloat(t.bid) - parseFloat(t.ask)
                        ).toFixed(5),
                        f = "",
                        y = "";
                      null !== i &&
                        ((f =
                          (u = parseFloat(
                            e(i).find("td.buy-price span.price").text()
                          ).toFixed(4)) < l
                            ? "up"
                            : u > l
                            ? "down"
                            : ""),
                        (y =
                          (p = parseFloat(
                            e(i).find("td.sell-price span.price").text()
                          ).toFixed(4)) < r
                            ? "up"
                            : p > r
                            ? "down"
                            : "")),
                        a.updateHomePageBox(i, s, r, l, c, d, m, b, f, y),
                        e(i).find("td.sell-price span.price").html(o(r)),
                        e(i).find("td.buy-price span.price").html(o(l));
                    });
                  }
                }),
              (this.wsinstance.updateHomePageBox = function (
                t,
                s,
                n,
                i,
                o,
                r,
                l,
                c,
                d,
                h
              ) {
                null !== t &&
                  ((t = e(t)).find("td.sell-price span.price").text(a(n)),
                  t.find("td.sell-price").removeClass("up down"),
                  t.find("td.sell-price").addClass(h),
                  t.find("td.buy-price span.price").text(a(i)),
                  t.find("td.buy-price").removeClass("up down"),
                  t.find("td.buy-price").addClass(d),
                  t.find("td.spread").text(a(l)),
                  t.find("td.change").text(c));
              }),
              (this.wsinstance.setHomePageBoxStartValues = function (t) {
                if (t) {
                  var s = t.key,
                    n = t.close1day,
                    i = e(
                      this.mainContainerClass +
                        " " +
                        this.instrumentBoxClass +
                        '[data-instrument="' +
                        s +
                        '"]'
                    );
                  e.each(i, function (t, s) {
                    e(s).attr("close1day", n);
                  }),
                    e(this.mainContainerClass).removeClass("loading");
                }
              }),
              (this.wsinstance.setBoxValues = function (e) {
                switch (this.widgetTypeId) {
                  case "instrumentSpecification":
                    this.setInstrumentSpecificationBoxValues(e);
                    break;
                  case "instrumentHomepage":
                    this.setHomePageBoxStartValues(e);
                }
              }),
              (this.wsinstance.recalculateAndUpdateInstrumentPageBoxValues =
                function (t) {
                  if (t) {
                    var s = null,
                      n = t.symbol,
                      i = e(
                        this.mainContainerClass +
                          " " +
                          this.instrumentBoxClass +
                          '[data-symbol="' +
                          n +
                          '"]'
                      );
                    i.length > 0 && (s = i[0]);
                    var a = parseFloat(t.ask).toFixed(4),
                      r = parseFloat(t.bid).toFixed(4),
                      l = parseFloat(t.high).toFixed(4),
                      c = parseFloat(t.low).toFixed(4),
                      d = 0,
                      h = 0,
                      u = parseFloat((r - a) / 100).toFixed(4);
                    u += "%";
                    var p = Math.abs(
                        parseFloat(t.bid) - parseFloat(t.ask)
                      ).toFixed(5),
                      b = "",
                      m = "";
                    null !== s &&
                      ((b =
                        (d = e(s).find("span#bid").text()) < r
                          ? "up"
                          : d > r
                          ? "down"
                          : ""),
                      (m =
                        (h = e(s).find("span#ask").text()) < a
                          ? "up"
                          : h > a
                          ? "down"
                          : "")),
                      this.updateInstrumentPageBox(
                        s,
                        n,
                        a,
                        r,
                        l,
                        c,
                        p,
                        u,
                        b,
                        m
                      ),
                      e(s).find("span#ask").html(o(a)),
                      e(s).find("span#bid").html(o(r));
                  }
                }),
              (this.wsinstance.updateInstrumentPageBox = function (
                t,
                s,
                n,
                i,
                o,
                r,
                l,
                c,
                d,
                h
              ) {
                null !== t &&
                  ((t = e(t)).find("span#bid").text(i),
                  t.find("div.bid").removeClass("up down"),
                  t.find("div.bid").addClass(d),
                  t.find("span#ask").text(n),
                  t.find("div.ask").removeClass("up down"),
                  t.find("div.ask").addClass(h),
                  t.find("span#spread").text(a(l)),
                  t.find("span#change").text(a(c)),
                  t.find("span#low").text(o),
                  t.find("span#high").text(r));
              }),
              (this.wsinstance.setInstrumentSpecificationBoxValues = function (
                t
              ) {
                if (t) {
                  var s = t.symbol,
                    n = t.close1day;
                  e(
                    this.mainContainerClass +
                      " " +
                      this.instrumentBoxClass +
                      '[data-symbol="' +
                      s +
                      '"]'
                  ).data("close1day", n),
                    e(this.mainContainerClass).removeClass("loading");
                }
              }),
              (this.wsinstance.recalculateAndUpdateInstrumentSpecificationBoxValues =
                function (t) {
                  if (t) {
                    var s = t.key,
                      n = t.symbol,
                      i = e(
                        this.mainContainerClass +
                          " " +
                          this.instrumentBoxClass +
                          '[data-symbol="' +
                          n +
                          '"]'
                      ),
                      a = e(
                        '.js-widget-data-update .js-widget-modal-instrument-details[data-symbol="' +
                          n +
                          '"]'
                      );
                    if (null !== i) {
                      var o = parseFloat(t.ask),
                        r = parseFloat(t.bid),
                        l = Math.abs(r - o).toFixed(5),
                        c = parseFloat(i.data("close1day")),
                        d = this.calculateInstrumentDailyChange(r, c);
                      (o = o.toFixed(4)),
                        (r = r.toFixed(4)),
                        o.length > 9 && (o = parseFloat(t.ask).toFixed(2)),
                        r.length > 9 && (r = parseFloat(t.bid).toFixed(2)),
                        this.updateInstrumentSpecificationBox(
                          i,
                          n,
                          s,
                          o,
                          r,
                          l,
                          d
                        ),
                        this.updateInstrumentSpecificationModalBox(
                          a,
                          n,
                          o,
                          r,
                          l,
                          d
                        );
                    }
                  }
                }),
              (this.wsinstance.updateInstrumentSpecificationModalBox =
                function (e, t, s, n, i, r) {
                  if (null !== e) {
                    var l = e.find("span#change").text();
                    e.find("span#bid").html(o(n)),
                      e.find("span#ask").html(o(s)),
                      e.find("span#change").parent().removeClass("up down"),
                      e.find("span#change").text(a(r)),
                      "-" !== l &&
                        (parseFloat(l) < parseFloat(r)
                          ? e.find("span#change").parent().addClass("up")
                          : parseFloat(l) > parseFloat(r) &&
                            e.find("span#change").parent().addClass("down"));
                  }
                }),
              (this.wsinstance.updateInstrumentSpecificationBox = function (
                e,
                t,
                s,
                n,
                i,
                r,
                l
              ) {
                if (null !== e) {
                  var c = e.find("#bid").text(),
                    d = e.find("#ask").text();
                  e.find("#bid").html(o(i)),
                    e.find("#bid").parent().removeClass("up down"),
                    "-" !== c &&
                      (parseFloat(c) < parseFloat(i)
                        ? e.find("#bid").parent().addClass("up")
                        : parseFloat(c) > parseFloat(i) &&
                          e.find("#bid").parent().addClass("down")),
                    e.find("#ask").html(o(n)),
                    e.find("#ask").parent().removeClass("up down"),
                    "-" !== d &&
                      (parseFloat(d) < parseFloat(n)
                        ? e.find("#ask").parent().addClass("up")
                        : parseFloat(d) > parseFloat(n) &&
                          e.find("#ask").parent().addClass("down")),
                    e.find("#spread").text(a(r)),
                    e.find("#change").text(a(l)),
                    e.hasClass("chart-ready") ||
                      this.getChartHistoryByDateForSymbol(s);
                }
              }),
              this.wsinstance
            );
          }
          return (
            i(t, [
              {
                key: "open",
                value: function (e) {
                  var t = null;
                  try {
                    t = new WebSocket(e);
                  } catch (s) {
                    t = this.reconnect(e);
                  }
                  return t;
                },
              },
              {
                key: "reconnect",
                value: function (e) {
                  console.log("XStationApiClient: retry in: 5000 ms", "info");
                  for (
                    var t = null, s = 0;
                    s < 2 && t.readyState !== WebSocket.OPEN;
                    s++
                  )
                    setTimeout(
                      (console.info("WebSocketClient: reconnecting..."),
                      void (t = new WebSocket(e))),
                      5e3
                    );
                  return t;
                },
              },
            ]),
            t
          );
        })();
      })(n);
    },
  },
]);
