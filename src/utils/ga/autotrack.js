(function () {
  let g,
    aa =
      typeof Object.defineProperties === 'function'
        ? Object.defineProperty
        : function (a, b, c) {
          if (c.get || c.set) throw new TypeError('ES3 does not support getters and setters.');
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        },
    k =
      typeof window !== 'undefined' && window === this
        ? this
        : typeof global !== 'undefined' && global != null ? global : this;
  function l() {
    l = function () {};
    k.Symbol || (k.Symbol = ba);
  }
  let ca = 0;
  function ba(a) {
    return `jscomp_symbol_${a || ''}${ca++}`;
  }
  function m() {
    l();
    let a = k.Symbol.iterator;
    a || (a = k.Symbol.iterator = k.Symbol('iterator'));
    typeof Array.prototype[a] !== 'function' &&
      aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value() {
          return da(this);
        },
      });
    m = function () {};
  }
  function da(a) {
    let b = 0;
    return ea(() => (b < a.length ? { done: !1, value: a[b++] } : { done: !0 }));
  }
  function ea(a) {
    m();
    a = { next: a };
    a[k.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function fa(a) {
    m();
    l();
    m();
    const b = a[Symbol.iterator];
    return b ? b.call(a) : da(a);
  }
  function n(a) {
    if (!(a instanceof Array)) {
      a = fa(a);
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ha(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ha = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    for (const d in b) {
      if (Object.defineProperties) {
        const e = Object.getOwnPropertyDescriptor(b, d);
        e && Object.defineProperty(a, d, e);
      } else a[d] = b[d];
    }
  }
  let p = window.Element.prototype,
    ia =
      p.matches ||
      p.matchesSelector ||
      p.webkitMatchesSelector ||
      p.mozMatchesSelector ||
      p.msMatchesSelector ||
      p.oMatchesSelector;
  function ja(a, b) {
    if (a && a.nodeType == 1 && b) {
      if (typeof b === 'string' || b.nodeType == 1) return a == b || ka(a, b);
      if ('length' in b) for (var c = 0, d; (d = b[c]); c++) if (a == d || ka(a, d)) return !0;
    }
    return !1;
  }
  function ka(a, b) {
    if (typeof b !== 'string') return !1;
    if (ia) return ia.call(a, b);
    b = a.parentNode.querySelectorAll(b);
    for (var c = 0, d; (d = b[c]); c++) if (d == a) return !0;
    return !1;
  }
  function la(a) {
    for (var b = []; a && a.parentNode && a.parentNode.nodeType == 1;) {
      (a = a.parentNode), b.push(a);
    }
    return b;
  }
  function q(a, b, c) {
    function d(a) {
      let d;
      if (h.composed && typeof a.composedPath === 'function') {
        for (var e = a.composedPath(), f = 0, F; (F = e[f]); f++) {
          F.nodeType == 1 && ja(F, b) && (d = F);
        }
      } else {
        a: {
          if ((d = a.target) && d.nodeType == 1 && b) {
            for (d = [d].concat(la(d)), e = 0; (f = d[e]); e++) {
              if (ja(f, b)) {
                d = f;
                break a;
              }
            }
          }
          d = void 0;
        }
      }
      d && c.call(d, a, d);
    }
    var e = document,
      h = { composed: !0, S: !0 },
      h = void 0 === h ? {} : h;
    e.addEventListener(a, d, h.S);
    return {
      j() {
        e.removeEventListener(a, d, h.S);
      },
    };
  }
  function ma(a) {
    const b = {};
    if (!a || a.nodeType != 1) return b;
    a = a.attributes;
    if (!a.length) return {};
    for (var c = 0, d; (d = a[c]); c++) b[d.name] = d.value;
    return b;
  }
  let na = /:(80|443)$/,
    r = document.createElement('a'),
    t = {};
  function u(a) {
    a = a && a != '.' ? a : location.href;
    if (t[a]) return t[a];
    r.href = a;
    if (a.charAt(0) == '.' || a.charAt(0) == '/') return u(r.href);
    var b = r.port == '80' || r.port == '443' ? '' : r.port,
      b = b == '0' ? '' : b,
      c = r.host.replace(na, '');
    return (t[a] = {
      hash: r.hash,
      host: c,
      hostname: r.hostname,
      href: r.href,
      origin: r.origin ? r.origin : `${r.protocol}//${c}`,
      pathname: r.pathname.charAt(0) == '/' ? r.pathname : `/${r.pathname}`,
      port: b,
      protocol: r.protocol,
      search: r.search,
    });
  }
  const w = [];
  function oa(a, b) {
    const c = this;
    this.context = a;
    this.P = b;
    this.f = (this.c = /Task$/.test(b)) ? a.get(b) : a[b];
    this.b = [];
    this.a = [];
    this.g = function (a) {
      for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d];
      return c.a[c.a.length - 1].apply(null, [].concat(n(b)));
    };
    this.c ? a.set(b, this.g) : (a[b] = this.g);
  }
  function x(a, b, c) {
    a = pa(a, b);
    a.b.push(c);
    qa(a);
  }
  function y(a, b, c) {
    a = pa(a, b);
    c = a.b.indexOf(c);
    c > -1 && (a.b.splice(c, 1), a.b.length > 0 ? qa(a) : a.j());
  }
  function qa(a) {
    a.a = [];
    for (var b, c = 0; (b = a.b[c]); c++) {
      const d = a.a[c - 1] || a.f.bind(a.context);
      a.a.push(b(d));
    }
  }
  oa.prototype.j = function () {
    const a = w.indexOf(this);
    a > -1 &&
      (w.splice(a, 1), this.c ? this.context.set(this.P, this.f) : (this.context[this.P] = this.f));
  };
  function pa(a, b) {
    let c = w.filter(c => c.context == a && c.P == b)[0];
    c || ((c = new oa(a, b)), w.push(c));
    return c;
  }
  function z(a, b, c, d, e, h) {
    if (typeof d === 'function') {
      const f = c.get('buildHitTask');
      return {
        buildHitTask(c) {
          c.set(a, null, !0);
          c.set(b, null, !0);
          d(c, e, h);
          f(c);
        },
      };
    }
    return A({}, a, b);
  }
  function B(a, b) {
    let c = ma(a),
      d = {};
    Object.keys(c).forEach((a) => {
      if (!a.indexOf(b) && a != `${b}on`) {
        let e = c[a];
        e == 'true' && (e = !0);
        e == 'false' && (e = !1);
        a = ra(a.slice(b.length));
        d[a] = e;
      }
    });
    return d;
  }
  function sa(a) {
    document.readyState == 'loading'
      ? document.addEventListener('DOMContentLoaded', function c() {
        document.removeEventListener('DOMContentLoaded', c);
        a();
      })
      : a();
  }
  function ta(a, b) {
    let c;
    return function (d) {
      for (var e = [], h = 0; h < arguments.length; ++h) e[h - 0] = arguments[h];
      clearTimeout(c);
      c = setTimeout(() => a(...[].concat(n(e))), b);
    };
  }
  function ua(a) {
    function b() {
      c || ((c = !0), a());
    }
    var c = !1;
    setTimeout(b, 2e3);
    return b;
  }
  const C = {};
  function va(a, b) {
    function c() {
      clearTimeout(e.timeout);
      e.send && y(a, 'send', e.send);
      delete C[d];
      e.R.forEach(a => a());
    }
    var d = a.get('trackingId'),
      e = (C[d] = C[d] || {});
    clearTimeout(e.timeout);
    e.timeout = setTimeout(c, 0);
    e.R = e.R || [];
    e.R.push(b);
    e.send ||
      ((e.send = function (a) {
        return function (b) {
          for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
          c();
          a(...[].concat(n(d)));
        };
      }),
        x(a, 'send', e.send));
  }
  var A =
    Object.assign ||
    function (a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
      for (var d = 0, e = c.length; d < e; d++) {
        var h = Object(c[d]),
          f;
        for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (a[f] = h[f]);
      }
      return a;
    };
  function ra(a) {
    return a.replace(/[\-\_]+(\w?)/g, (a, c) => c.toUpperCase());
  }
  function D(a) {
    return typeof a === 'object' && a !== null;
  }
  const E = function wa(b) {
    return b
      ? (b ^ ((16 * Math.random()) >> (b / 4))).toString(16)
      : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, wa);
  };
  function G(a, b) {
    const c = window.GoogleAnalyticsObject || 'ga';
    window[c] =
      window[c] ||
      function (a) {
        for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d];
        (window[c].q = window[c].q || []).push(b);
      };
    window.gaDevIds = window.gaDevIds || [];
    window.gaDevIds.indexOf('i5iSjo') < 0 && window.gaDevIds.push('i5iSjo');
    window[c]('provide', a, b);
    window.gaplugins = window.gaplugins || {};
    window.gaplugins[a.charAt(0).toUpperCase() + a.slice(1)] = b;
  }
  let H = { T: 1, U: 2, V: 3, X: 4, Y: 5, Z: 6, $: 7, aa: 8, ba: 9, W: 10 },
    I = Object.keys(H).length;
  function J(a, b) {
    a.set('\x26_av', '2.4.1');
    var c = a.get('\x26_au'),
      c = parseInt(c || '0', 16).toString(2);
    if (c.length < I) for (let d = I - c.length; d;) (c = `0${c}`), d--;
    b = I - b;
    c = c.substr(0, b) + 1 + c.substr(b + 1);
    a.set('\x26_au', parseInt(c || '0', 2).toString(16));
  }
  function K(a, b) {
    J(a, H.T);
    this.a = A({}, b);
    this.g = a;
    this.b =
      this.a.stripQuery && this.a.queryDimensionIndex
        ? `dimension${this.a.queryDimensionIndex}`
        : null;
    this.f = this.f.bind(this);
    this.c = this.c.bind(this);
    x(a, 'get', this.f);
    x(a, 'buildHitTask', this.c);
  }
  K.prototype.f = function (a) {
    const b = this;
    return function (c) {
      if (c == 'page' || c == b.b) {
        const d = { location: a('location'), page: a('page') };
        return xa(b, d)[c];
      }
      return a(c);
    };
  };
  K.prototype.c = function (a) {
    const b = this;
    return function (c) {
      const d = xa(b, { location: c.get('location'), page: c.get('page') });
      c.set(d, null, !0);
      a(c);
    };
  };
  function xa(a, b) {
    let c = u(b.page || b.location),
      d = c.pathname;
    if (a.a.indexFilename) {
      const e = d.split('/');
      a.a.indexFilename == e[e.length - 1] && ((e[e.length - 1] = ''), (d = e.join('/')));
    }
    a.a.trailingSlash == 'remove'
      ? (d = d.replace(/\/+$/, ''))
      : a.a.trailingSlash == 'add' && (/\.\w+$/.test(d) || d.substr(-1) == '/' || (d += '/'));
    d = { page: d + (a.a.stripQuery ? ya(a, c.search) : c.search) };
    b.location && (d.location = b.location);
    a.b && (d[a.b] = c.search.slice(1) || '(not set)');
    return typeof a.a.urlFieldsFilter === 'function'
      ? ((b = a.a.urlFieldsFilter(d, u)),
        (c = {
          page: b.page,
          location: b.location,
        }),
        a.b && (c[a.b] = b[a.b]),
        c)
      : d;
  }
  function ya(a, b) {
    if (Array.isArray(a.a.queryParamsWhitelist)) {
      const c = [];
      b
        .slice(1)
        .split('\x26')
        .forEach((b) => {
          let d = fa(b.split('\x3d'));
          b = d.next().value;
          d = d.next().value;
          a.a.queryParamsWhitelist.indexOf(b) > -1 && d && c.push([b, d]);
        });
      return c.length ? `?${c.map(a => a.join('\x3d')).join('\x26')}` : '';
    }
    return '';
  }
  K.prototype.remove = function () {
    y(this.g, 'get', this.f);
    y(this.g, 'buildHitTask', this.c);
  };
  G('cleanUrlTracker', K);
  function L(a, b) {
    const c = this;
    J(a, H.U);
    if (window.addEventListener) {
      this.a = A({ events: ['click'], fieldsObj: {}, attributePrefix: 'ga-' }, b);
      this.f = a;
      this.c = this.c.bind(this);
      const d = `[${this.a.attributePrefix}on]`;
      this.b = {};
      this.a.events.forEach((a) => {
        c.b[a] = q(a, d, c.c);
      });
    }
  }
  L.prototype.c = function (a, b) {
    var c = this.a.attributePrefix;
    if (
      !(
        b
          .getAttribute(`${c}on`)
          .split(/\s*,\s*/)
          .indexOf(a.type) < 0
      )
    ) {
      var c = B(b, c),
        d = A({}, this.a.fieldsObj, c);
      this.f.send(
        c.hitType || 'event',
        z({ transport: 'beacon' }, d, this.f, this.a.hitFilter, b, a),
      );
    }
  };
  L.prototype.remove = function () {
    const a = this;
    Object.keys(this.b).forEach((b) => {
      a.b[b].j();
    });
  };
  G('eventTracker', L);
  function za(a, b) {
    const c = this;
    J(a, H.V);
    window.IntersectionObserver &&
      window.MutationObserver &&
      ((this.a = A({ rootMargin: '0px', fieldsObj: {}, attributePrefix: 'ga-' }, b)),
        (this.c = a),
        (this.M = this.M.bind(this)),
        (this.O = this.O.bind(this)),
        (this.K = this.K.bind(this)),
        (this.L = this.L.bind(this)),
        (this.b = null),
        (this.items = []),
        (this.i = {}),
        (this.h = {}),
        sa(() => {
          c.a.elements && c.observeElements(c.a.elements);
        }));
  }
  g = za.prototype;
  g.observeElements = function (a) {
    const b = this;
    a = M(this, a);
    this.items = this.items.concat(a.items);
    this.i = A({}, a.i, this.i);
    this.h = A({}, a.h, this.h);
    a.items.forEach((a) => {
      const c = (b.h[a.threshold] =
        b.h[a.threshold] ||
        new IntersectionObserver(b.O, { rootMargin: b.a.rootMargin, threshold: [+a.threshold] }));
      (a = b.i[a.id] || (b.i[a.id] = document.getElementById(a.id))) && c.observe(a);
    });
    this.b ||
      ((this.b = new MutationObserver(this.M)),
        this.b.observe(document.body, { childList: !0, subtree: !0 }));
    requestAnimationFrame(() => {});
  };
  g.unobserveElements = function (a) {
    let b = [],
      c = [];
    this.items.forEach((d) => {
      a.some((a) => {
        a = Aa(a);
        return (
          a.id === d.id &&
          a.threshold === d.threshold &&
          a.trackFirstImpressionOnly === d.trackFirstImpressionOnly
        );
      })
        ? c.push(d)
        : b.push(d);
    });
    if (b.length) {
      let d = M(this, b),
        e = M(this, c);
      this.items = d.items;
      this.i = d.i;
      this.h = d.h;
      c.forEach((a) => {
        if (!d.i[a.id]) {
          let b = e.h[a.threshold],
            c = e.i[a.id];
          c && b.unobserve(c);
          d.h[a.threshold] || e.h[a.threshold].disconnect();
        }
      });
    } else this.unobserveAllElements();
  };
  g.unobserveAllElements = function () {
    const a = this;
    Object.keys(this.h).forEach((b) => {
      a.h[b].disconnect();
    });
    this.b.disconnect();
    this.b = null;
    this.items = [];
    this.i = {};
    this.h = {};
  };
  function M(a, b) {
    let c = [],
      d = {},
      e = {};
    b.length &&
      b.forEach((b) => {
        b = Aa(b);
        c.push(b);
        e[b.id] = a.i[b.id] || null;
        d[b.threshold] = a.h[b.threshold] || null;
      });
    return { items: c, i: e, h: d };
  }
  g.M = function (a) {
    for (var b = 0, c; (c = a[b]); b++) {
      for (var d = 0, e; (e = c.removedNodes[d]); d++) N(this, e, this.L);
      for (d = 0; (e = c.addedNodes[d]); d++) N(this, e, this.K);
    }
  };
  function N(a, b, c) {
    b.nodeType == 1 && b.id in a.i && c(b.id);
    for (var d = 0, e; (e = b.childNodes[d]); d++) N(a, e, c);
  }
  g.O = function (a) {
    for (var b = [], c = 0, d; (d = a[c]); c++) {
      for (var e = 0, h; (h = this.items[e]); e++) {
        var f;
        if ((f = d.target.id === h.id)) {
          (f = h.threshold)
            ? (f = d.intersectionRatio >= f)
            : ((f = d.intersectionRect),
              (f = f.top > 0 || f.bottom > 0 || f.left > 0 || f.right > 0));
        }
        if (f) {
          var v = h.id;
          f = document.getElementById(v);
          var v = {
              transport: 'beacon',
              eventCategory: 'Viewport',
              eventAction: 'impression',
              eventLabel: v,
              nonInteraction: !0,
            },
            Na = A({}, this.a.fieldsObj, B(f, this.a.attributePrefix));
          this.c.send('event', z(v, Na, this.c, this.a.hitFilter, f));
          h.trackFirstImpressionOnly && b.push(h);
        }
      }
    }
    b.length && this.unobserveElements(b);
  };
  g.K = function (a) {
    let b = this,
      c = (this.i[a] = document.getElementById(a));
    this.items.forEach((d) => {
      a == d.id && b.h[d.threshold].observe(c);
    });
  };
  g.L = function (a) {
    let b = this,
      c = this.i[a];
    this.items.forEach((d) => {
      a == d.id && b.h[d.threshold].unobserve(c);
    });
    this.i[a] = null;
  };
  g.remove = function () {
    this.unobserveAllElements();
  };
  G('impressionTracker', za);
  function Aa(a) {
    typeof a === 'string' && (a = { id: a });
    return A({ threshold: 0, trackFirstImpressionOnly: !0 }, a);
  }
  function Ba() {
    this.a = {};
  }
  function Ca(a, b) {
    (a.a.externalSet = a.a.externalSet || []).push(b);
  }
  Ba.prototype.ca = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    (this.a[a] = this.a[a] || []).forEach(a => a(...[].concat(n(c))));
  };
  let O = {},
    P = !1,
    Q;
  function R(a, b) {
    b = void 0 === b ? {} : b;
    this.a = {};
    this.b = a;
    this.w = b;
    this.l = null;
  }
  ha(R, Ba);
  function S(a, b, c) {
    a = ['autotrack', a, b].join(':');
    O[a] || ((O[a] = new R(a, c)), P || (window.addEventListener('storage', Da), (P = !0)));
    return O[a];
  }
  function Ea() {
    if (Q != null) return Q;
    try {
      window.localStorage.setItem('autotrack', 'autotrack'),
      window.localStorage.removeItem('autotrack'),
      (Q = !0);
    } catch (a) {
      Q = !1;
    }
    return Q;
  }
  R.prototype.get = function () {
    if (this.l) return this.l;
    if (Ea()) {
      try {
        this.l = Fa(window.localStorage.getItem(this.b));
      } catch (a) {}
    }
    return (this.l = A({}, this.w, this.l));
  };
  R.prototype.set = function (a) {
    this.l = A({}, this.w, this.l, a);
    if (Ea()) {
      try {
        const b = JSON.stringify(this.l);
        window.localStorage.setItem(this.b, b);
      } catch (c) {}
    }
  };
  function Ga(a) {
    a.l = {};
    if (Ea()) {
      try {
        window.localStorage.removeItem(a.b);
      } catch (b) {}
    }
  }
  R.prototype.j = function () {
    delete O[this.b];
    Object.keys(O).length || (window.removeEventListener('storage', Da), (P = !1));
  };
  function Da(a) {
    const b = O[a.key];
    if (b) {
      const c = A({}, b.w, Fa(a.oldValue));
      a = A({}, b.w, Fa(a.newValue));
      b.l = a;
      b.ca('externalSet', a, c);
    }
  }
  function Fa(a) {
    let b = {};
    if (a) {
      try {
        b = JSON.parse(a);
      } catch (c) {}
    }
    return b;
  }
  const T = {};
  function U(a, b, c) {
    this.f = a;
    this.timeout = b || Ha;
    this.timeZone = c;
    this.b = this.b.bind(this);
    x(a, 'sendHitTask', this.b);
    try {
      this.c = new Intl.DateTimeFormat('en-US', { timeZone: this.timeZone });
    } catch (d) {}
    this.a = S(a.get('trackingId'), 'session', { hitTime: 0, isExpired: !1 });
    this.a.get().id || this.a.set({ id: E() });
  }
  function Ia(a, b, c) {
    const d = a.get('trackingId');
    return T[d] ? T[d] : (T[d] = new U(a, b, c));
  }
  function V(a) {
    return a.a.get().id;
  }
  U.prototype.isExpired = function (a) {
    a = void 0 === a ? V(this) : a;
    if (a != V(this)) return !0;
    a = this.a.get();
    if (a.isExpired) return !0;
    let b = a.hitTime;
    return b &&
      ((a = new Date()),
        (b = new Date(b)),
        a - b > 6e4 * this.timeout || (this.c && this.c.format(a) != this.c.format(b)))
      ? !0
      : !1;
  };
  U.prototype.b = function (a) {
    const b = this;
    return function (c) {
      a(c);
      var d = c.get('sessionControl');
      c = d == 'start' || b.isExpired();
      var d = d == 'end',
        e = b.a.get();
      e.hitTime = +new Date();
      c && ((e.isExpired = !1), (e.id = E()));
      d && (e.isExpired = !0);
      b.a.set(e);
    };
  };
  U.prototype.j = function () {
    y(this.f, 'sendHitTask', this.b);
    this.a.j();
    delete T[this.f.get('trackingId')];
  };
  var Ha = 30;
  function W(a, b) {
    J(a, H.W);
    window.addEventListener &&
      ((this.b = A({ increaseThreshold: 20, sessionTimeout: Ha, fieldsObj: {} }, b)),
        (this.f = a),
        (this.c = Ja(this)),
        (this.g = ta(this.g.bind(this), 500)),
        (this.o = this.o.bind(this)),
        (this.a = S(a.get('trackingId'), 'plugins/max-scroll-tracker')),
        (this.m = Ia(a, this.b.sessionTimeout, this.b.timeZone)),
        x(a, 'set', this.o),
        Ka(this));
  }
  function Ka(a) {
    (a.a.get()[a.c] || 0) < 100 && window.addEventListener('scroll', a.g);
  }
  W.prototype.g = function () {
    var a = document.documentElement,
      b = document.body,
      a = Math.min(
        100,
        Math.max(
          0,
          Math.round(
            window.pageYOffset /
              (Math.max(a.offsetHeight, a.scrollHeight, b.offsetHeight, b.scrollHeight) -
                window.innerHeight) *
              100,
          ),
        ),
      ),
      b = V(this.m);
    b != this.a.get().sessionId && (Ga(this.a), this.a.set({ sessionId: b }));
    if (this.m.isExpired(this.a.get().sessionId)) Ga(this.a);
    else if (
      ((b = this.a.get()[this.c] || 0),
        a > b &&
        ((a != 100 && b != 100) || window.removeEventListener('scroll', this.g),
          (b = a - b),
          a == 100 || b >= this.b.increaseThreshold))
    ) {
      const c = {};
      this.a.set(((c[this.c] = a), (c.sessionId = V(this.m)), c));
      a = {
        transport: 'beacon',
        eventCategory: 'Max Scroll',
        eventAction: 'increase',
        eventValue: b,
        eventLabel: String(a),
        nonInteraction: !0,
      };
      this.b.maxScrollMetricIndex && (a[`metric${this.b.maxScrollMetricIndex}`] = b);
      this.f.send('event', z(a, this.b.fieldsObj, this.f, this.b.hitFilter));
    }
  };
  W.prototype.o = function (a) {
    const b = this;
    return function (c, d) {
      a(c, d);
      const e = {};
      (D(c) ? c : ((e[c] = d), e)).page && ((c = b.c), (b.c = Ja(b)), b.c != c && Ka(b));
    };
  };
  function Ja(a) {
    a = u(a.f.get('page') || a.f.get('location'));
    return a.pathname + a.search;
  }
  W.prototype.remove = function () {
    this.m.j();
    window.removeEventListener('scroll', this.g);
    y(this.f, 'set', this.o);
  };
  G('maxScrollTracker', W);
  const La = {};
  function Ma(a, b) {
    J(a, H.X);
    window.matchMedia &&
      ((this.a = A({ changeTemplate: this.changeTemplate, changeTimeout: 1e3, fieldsObj: {} }, b)),
        D(this.a.definitions) &&
        ((b = this.a.definitions),
          (this.a.definitions = Array.isArray(b) ? b : [b]),
          (this.b = a),
          (this.c = []),
          Oa(this)));
  }
  function Oa(a) {
    a.a.definitions.forEach((b) => {
      if (b.name && b.dimensionIndex) {
        const c = Pa(b);
        a.b.set(`dimension${b.dimensionIndex}`, c);
        Qa(a, b);
      }
    });
  }
  function Pa(a) {
    let b;
    a.items.forEach((a) => {
      Ra(a.media).matches && (b = a);
    });
    return b ? b.name : '(not set)';
  }
  function Qa(a, b) {
    b.items.forEach((c) => {
      c = Ra(c.media);
      const d = ta(() => {
        let c = Pa(b),
          d = a.b.get(`dimension${b.dimensionIndex}`);
        c !== d &&
          (a.b.set(`dimension${b.dimensionIndex}`, c),
            (c = {
              transport: 'beacon',
              eventCategory: b.name,
              eventAction: 'change',
              eventLabel: a.a.changeTemplate(d, c),
              nonInteraction: !0,
            }),
            a.b.send('event', z(c, a.a.fieldsObj, a.b, a.a.hitFilter)));
      }, a.a.changeTimeout);
      c.addListener(d);
      a.c.push({ fa: c, da: d });
    });
  }
  Ma.prototype.remove = function () {
    for (var a = 0, b; (b = this.c[a]); a++) b.fa.removeListener(b.da);
  };
  Ma.prototype.changeTemplate = function (a, b) {
    return `${a} \x3d\x3e ${b}`;
  };
  G('mediaQueryTracker', Ma);
  function Ra(a) {
    return La[a] || (La[a] = window.matchMedia(a));
  }
  function X(a, b) {
    J(a, H.Y);
    window.addEventListener &&
      ((this.a = A(
        {
          formSelector: 'form',
          shouldTrackOutboundForm: this.shouldTrackOutboundForm,
          fieldsObj: {},
          attributePrefix: 'ga-',
        },
        b,
      )),
        (this.b = a),
        (this.c = q('submit', this.a.formSelector, this.f.bind(this))));
  }
  X.prototype.f = function (a, b) {
    const c = {
      transport: 'beacon',
      eventCategory: 'Outbound Form',
      eventAction: 'submit',
      eventLabel: u(b.action).href,
    };
    if (this.a.shouldTrackOutboundForm(b, u)) {
      navigator.sendBeacon ||
        (a.preventDefault(),
          (c.hitCallback = ua(() => {
            b.submit();
          })));
      const d = A({}, this.a.fieldsObj, B(b, this.a.attributePrefix));
      this.b.send('event', z(c, d, this.b, this.a.hitFilter, b, a));
    }
  };
  X.prototype.shouldTrackOutboundForm = function (a, b) {
    a = b(a.action);
    return a.hostname != location.hostname && a.protocol.slice(0, 4) == 'http';
  };
  X.prototype.remove = function () {
    this.c.j();
  };
  G('outboundFormTracker', X);
  function Y(a, b) {
    const c = this;
    J(a, H.Z);
    window.addEventListener &&
      ((this.a = A(
        {
          events: ['click'],
          linkSelector: 'a, area',
          shouldTrackOutboundLink: this.shouldTrackOutboundLink,
          fieldsObj: {},
          attributePrefix: 'ga-',
        },
        b,
      )),
        (this.c = a),
        (this.f = this.f.bind(this)),
        (this.b = {}),
        this.a.events.forEach((a) => {
          c.b[a] = q(a, c.a.linkSelector, c.f);
        }));
  }
  Y.prototype.f = function (a, b) {
    const c = this;
    if (this.a.shouldTrackOutboundLink(b, u)) {
      var d = b.getAttribute('href') || b.getAttribute('xlink:href'),
        e = u(d),
        e = {
          transport: 'beacon',
          eventCategory: 'Outbound Link',
          eventAction: a.type,
          eventLabel: e.href,
        },
        h = A({}, this.a.fieldsObj, B(b, this.a.attributePrefix)),
        f = z(e, h, this.c, this.a.hitFilter, b, a);
      if (
        navigator.sendBeacon ||
        a.type != 'click' ||
        b.target == '_blank' ||
        a.metaKey ||
        a.ctrlKey ||
        a.shiftKey ||
        a.altKey ||
        a.which > 1
      ) {
        this.c.send('event', f);
      } else {
        var v = function () {
          window.removeEventListener('click', v);
          if (!a.defaultPrevented) {
            a.preventDefault();
            const b = f.hitCallback;
            f.hitCallback = ua(() => {
              typeof b === 'function' && b();
              location.href = d;
            });
          }
          c.c.send('event', f);
        };
        window.addEventListener('click', v);
      }
    }
  };
  Y.prototype.shouldTrackOutboundLink = function (a, b) {
    a = a.getAttribute('href') || a.getAttribute('xlink:href');
    b = b(a);
    return b.hostname != location.hostname && b.protocol.slice(0, 4) == 'http';
  };
  Y.prototype.remove = function () {
    const a = this;
    Object.keys(this.b).forEach((b) => {
      a.b[b].j();
    });
  };
  G('outboundLinkTracker', Y);
  const Z = E();
  function Sa(a, b) {
    const c = this;
    J(a, H.$);
    document.visibilityState &&
      ((this.a = A(
        { sessionTimeout: Ha, visibleThreshold: 5e3, sendInitialPageview: !1, fieldsObj: {} },
        b,
      )),
        (this.b = a),
        (this.g = document.visibilityState),
        (this.m = null),
        (this.o = !1),
        (this.v = this.v.bind(this)),
        (this.s = this.s.bind(this)),
        (this.G = this.G.bind(this)),
        (this.N = this.N.bind(this)),
        (this.c = S(a.get('trackingId'), 'plugins/page-visibility-tracker')),
        Ca(this.c, this.N),
        (this.f = Ia(a, this.a.sessionTimeout, this.a.timeZone)),
        x(a, 'set', this.v),
        window.addEventListener('unload', this.G),
        document.addEventListener('visibilitychange', this.s),
        va(this.b, () => {
          if (document.visibilityState == 'visible') {
            c.a.sendInitialPageview && (Ta(c, { ea: !0 }), (c.o = !0)),
            c.c.set({ time: +new Date(), state: 'visible', pageId: Z, sessionId: V(c.f) });
          } else if (c.a.sendInitialPageview && c.a.pageLoadsMetricIndex) {
            var a = {},
              a = ((a.transport = 'beacon'),
                (a.eventCategory = 'Page Visibility'),
                (a.eventAction = 'page load'),
                (a.eventLabel = '(not set)'),
                (a[`metric${c.a.pageLoadsMetricIndex}`] = 1),
                (a.nonInteraction = !0),
                a);
            c.b.send('event', z(a, c.a.fieldsObj, c.b, c.a.hitFilter));
          }
        }));
  }
  g = Sa.prototype;
  g.s = function () {
    const a = this;
    if (document.visibilityState == 'visible' || document.visibilityState == 'hidden') {
      let b = Ua(this),
        c = { time: +new Date(), state: document.visibilityState, pageId: Z, sessionId: V(this.f) };
      document.visibilityState == 'visible' &&
        this.a.sendInitialPageview &&
        !this.o &&
        (Ta(this), (this.o = !0));
      document.visibilityState == 'hidden' && this.m && clearTimeout(this.m);
      this.f.isExpired(b.sessionId)
        ? (Ga(this.c),
          this.g == 'hidden' &&
            document.visibilityState == 'visible' &&
            (clearTimeout(this.m),
              (this.m = setTimeout(() => {
                a.c.set(c);
                Ta(a, { hitTime: c.time });
              }, this.a.visibleThreshold))))
        : (b.pageId == Z && b.state == 'visible' && Va(this, b), this.c.set(c));
      this.g = document.visibilityState;
    }
  };
  function Ua(a) {
    const b = a.c.get();
    a.g == 'visible' &&
      b.state == 'hidden' &&
      b.pageId != Z &&
      ((b.state = 'visible'), (b.pageId = Z), a.c.set(b));
    return b;
  }
  function Va(a, b, c) {
    c = (c || {}).hitTime;
    var d = { hitTime: c },
      d = (d || {}).hitTime;
    (b = b.time ? (d || +new Date()) - b.time : 0) &&
      b >= a.a.visibleThreshold &&
      ((b = Math.round(b / 1e3)),
        (d = {
          transport: 'beacon',
          nonInteraction: !0,
          eventCategory: 'Page Visibility',
          eventAction: 'track',
          eventValue: b,
          eventLabel: '(not set)',
        }),
        c && (d.queueTime = +new Date() - c),
        a.a.visibleMetricIndex && (d[`metric${a.a.visibleMetricIndex}`] = b),
        a.b.send('event', z(d, a.a.fieldsObj, a.b, a.a.hitFilter)));
  }
  function Ta(a, b) {
    var c = b || {};
    b = c.hitTime;
    var c = c.ea,
      d = { transport: 'beacon' };
    b && (d.queueTime = +new Date() - b);
    c && a.a.pageLoadsMetricIndex && (d[`metric${a.a.pageLoadsMetricIndex}`] = 1);
    a.b.send('pageview', z(d, a.a.fieldsObj, a.b, a.a.hitFilter));
  }
  g.v = function (a) {
    const b = this;
    return function (c, d) {
      var e = {},
        e = D(c) ? c : ((e[c] = d), e);
      e.page && e.page !== b.b.get('page') && b.g == 'visible' && b.s();
      a(c, d);
    };
  };
  g.N = function (a, b) {
    a.time != b.time &&
      (b.pageId != Z ||
        b.state != 'visible' ||
        this.f.isExpired(b.sessionId) ||
        Va(this, b, { hitTime: a.time }));
  };
  g.G = function () {
    this.g != 'hidden' && this.s();
  };
  g.remove = function () {
    this.c.j();
    this.f.j();
    y(this.b, 'set', this.v);
    window.removeEventListener('unload', this.G);
    document.removeEventListener('visibilitychange', this.s);
  };
  G('pageVisibilityTracker', Sa);
  function Wa(a, b) {
    J(a, H.aa);
    window.addEventListener &&
      ((this.a = A({ fieldsObj: {}, hitFilter: null }, b)),
        (this.b = a),
        (this.u = this.u.bind(this)),
        (this.J = this.J.bind(this)),
        (this.D = this.D.bind(this)),
        (this.A = this.A.bind(this)),
        (this.B = this.B.bind(this)),
        (this.F = this.F.bind(this)),
        document.readyState != 'complete' ? window.addEventListener('load', this.u) : this.u());
  }
  g = Wa.prototype;
  g.u = function () {
    if (window.FB) {
      try {
        window.FB.Event.subscribe('edge.create', this.B),
        window.FB.Event.subscribe('edge.remove', this.F);
      } catch (a) {}
    }
    window.twttr && this.J();
  };
  g.J = function () {
    const a = this;
    try {
      window.twttr.ready(() => {
        window.twttr.events.bind('tweet', a.D);
        window.twttr.events.bind('follow', a.A);
      });
    } catch (b) {}
  };
  function Xa(a) {
    try {
      window.twttr.ready(() => {
        window.twttr.events.unbind('tweet', a.D);
        window.twttr.events.unbind('follow', a.A);
      });
    } catch (b) {}
  }
  g.D = function (a) {
    if (a.region == 'tweet') {
      const b = {
        transport: 'beacon',
        socialNetwork: 'Twitter',
        socialAction: 'tweet',
        socialTarget: a.data.url || a.target.getAttribute('data-url') || location.href,
      };
      this.b.send('social', z(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a));
    }
  };
  g.A = function (a) {
    if (a.region == 'follow') {
      const b = {
        transport: 'beacon',
        socialNetwork: 'Twitter',
        socialAction: 'follow',
        socialTarget: a.data.screen_name || a.target.getAttribute('data-screen-name'),
      };
      this.b.send('social', z(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a));
    }
  };
  g.B = function (a) {
    this.b.send(
      'social',
      z(
        { transport: 'beacon', socialNetwork: 'Facebook', socialAction: 'like', socialTarget: a },
        this.a.fieldsObj,
        this.b,
        this.a.hitFilter,
      ),
    );
  };
  g.F = function (a) {
    this.b.send(
      'social',
      z(
        { transport: 'beacon', socialNetwork: 'Facebook', socialAction: 'unlike', socialTarget: a },
        this.a.fieldsObj,
        this.b,
        this.a.hitFilter,
      ),
    );
  };
  g.remove = function () {
    window.removeEventListener('load', this.u);
    try {
      window.FB.Event.unsubscribe('edge.create', this.B),
      window.FB.Event.unsubscribe('edge.remove', this.F);
    } catch (a) {}
    Xa(this);
  };
  G('socialWidgetTracker', Wa);
  function Ya(a, b) {
    J(a, H.ba);
    history.pushState &&
      window.addEventListener &&
      ((this.a = A(
        {
          shouldTrackUrlChange: this.shouldTrackUrlChange,
          trackReplaceState: !1,
          fieldsObj: {},
          hitFilter: null,
        },
        b,
      )),
        (this.b = a),
        (this.c = location.pathname + location.search),
        (this.H = this.H.bind(this)),
        (this.I = this.I.bind(this)),
        (this.C = this.C.bind(this)),
        x(history, 'pushState', this.H),
        x(history, 'replaceState', this.I),
        window.addEventListener('popstate', this.C));
  }
  g = Ya.prototype;
  g.H = function (a) {
    const b = this;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
      a(...[].concat(n(d)));
      Za(b, !0);
    };
  };
  g.I = function (a) {
    const b = this;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
      a(...[].concat(n(d)));
      Za(b, !1);
    };
  };
  g.C = function () {
    Za(this, !0);
  };
  function Za(a, b) {
    setTimeout(() => {
      let c = a.c,
        d = location.pathname + location.search;
      c != d &&
        a.a.shouldTrackUrlChange.call(a, d, c) &&
        ((a.c = d),
          a.b.set({ page: d, title: document.title }),
          (b || a.a.trackReplaceState) &&
          a.b.send('pageview', z({ transport: 'beacon' }, a.a.fieldsObj, a.b, a.a.hitFilter)));
    }, 0);
  }
  g.shouldTrackUrlChange = function (a, b) {
    return !(!a || !b);
  };
  g.remove = function () {
    y(history, 'pushState', this.H);
    y(history, 'replaceState', this.I);
    window.removeEventListener('popstate', this.C);
  };
  G('urlChangeTracker', Ya);
}());
// # sourceMappingURL=autotrack.js.map
