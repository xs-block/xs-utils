import {
  f as Pr,
  t as Ir,
  x as kr,
  y as Dr,
  z as Cr,
  A as Ar,
  o as xr,
  c as Nr,
} from '../app.8ecaf5df.js';
/*! @docsearch/js 3.3.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function Ct(
  e,
  t,
) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ct(Object(n), !0).forEach(function (r) {
          Rr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ct(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ee(e) {
  return (
    (Ee =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ee(e)
  );
}
function Rr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function st() {
  return (
    (st =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    st.apply(this, arguments)
  );
}
function Tr(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Ve(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          c,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (i) {
          (s = !0), (c = i);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw c;
          }
        }
        return u;
      }
    })(e, t) ||
    Mn(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function We(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ft(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    Mn(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Mn(e, t) {
  if (e) {
    if (typeof e == 'string') return ft(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ft(e, t)
        : void 0
    );
  }
}
function ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var w,
  Oe,
  Hn,
  At,
  Un,
  Ke = {},
  wt = [],
  Lr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function z(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Fn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function V(e, t, n) {
  var r,
    o,
    a,
    c = arguments,
    u = {};
  for (a in t) a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3) for (n = [n], a = 3; a < arguments.length; a++) n.push(c[a]);
  if ((n != null && (u.children = n), typeof e == 'function' && e.defaultProps != null))
    for (a in e.defaultProps) u[a] === void 0 && (u[a] = e.defaultProps[a]);
  return Se(e, u, r, o, null);
}
function Se(e, t, n, r, o) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++w.__v,
  };
  return w.vnode != null && w.vnode(a), a;
}
function Z(e) {
  return e.children;
}
function W(e, t) {
  (this.props = e), (this.context = t);
}
function je(e, t) {
  if (t == null) return e.__ ? je(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == 'function' ? je(e) : null;
}
function Bn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Bn(e);
  }
}
function pt(e) {
  ((!e.__d && (e.__d = !0) && Oe.push(e) && !ze.__r++) || At !== w.debounceRendering) &&
    ((At = w.debounceRendering) || Hn)(ze);
}
function ze() {
  for (var e; (ze.__r = Oe.length); )
    (e = Oe.sort(function (t, n) {
      return t.__v.__b - n.__v.__b;
    })),
      (Oe = []),
      e.some(function (t) {
        var n, r, o, a, c, u;
        t.__d &&
          ((c = (a = (n = t).__v).__e),
          (u = n.__P) &&
            ((r = []),
            ((o = z({}, a)).__v = a.__v + 1),
            Et(
              u,
              a,
              o,
              n.__n,
              u.ownerSVGElement !== void 0,
              a.__h != null ? [c] : null,
              r,
              c ?? je(a),
              a.__h,
            ),
            zn(r, a),
            a.__e != c && Bn(a)));
      });
}
function Vn(e, t, n, r, o, a, c, u, l, s) {
  var i,
    m,
    d,
    p,
    v,
    h,
    g,
    y = (r && r.__k) || wt,
    S = y.length;
  for (n.__k = [], i = 0; i < t.length; i++)
    if (
      (p = n.__k[i] =
        (p = t[i]) == null || typeof p == 'boolean'
          ? null
          : typeof p == 'string' || typeof p == 'number'
          ? Se(null, p, null, null, p)
          : Array.isArray(p)
          ? Se(Z, { children: p }, null, null, null)
          : p.__b > 0
          ? Se(p.type, p.props, p.key, null, p.__v)
          : p) != null
    ) {
      if (
        ((p.__ = n),
        (p.__b = n.__b + 1),
        (d = y[i]) === null || (d && p.key == d.key && p.type === d.type))
      )
        y[i] = void 0;
      else
        for (m = 0; m < S; m++) {
          if ((d = y[m]) && p.key == d.key && p.type === d.type) {
            y[m] = void 0;
            break;
          }
          d = null;
        }
      Et(e, p, (d = d || Ke), o, a, c, u, l, s),
        (v = p.__e),
        (m = p.ref) &&
          d.ref != m &&
          (g || (g = []), d.ref && g.push(d.ref, null, p), g.push(m, p.__c || v, p)),
        v != null
          ? (h == null && (h = v),
            typeof p.type == 'function' && p.__k != null && p.__k === d.__k
              ? (p.__d = l = Wn(p, l, e))
              : (l = Kn(e, p, d, y, v, l)),
            s || n.type !== 'option' ? typeof n.type == 'function' && (n.__d = l) : (e.value = ''))
          : l && d.__e == l && l.parentNode != e && (l = je(d));
    }
  for (n.__e = h, i = S; i--; )
    y[i] != null &&
      (typeof n.type == 'function' &&
        y[i].__e != null &&
        y[i].__e == n.__d &&
        (n.__d = je(r, i + 1)),
      $n(y[i], y[i]));
  if (g) for (i = 0; i < g.length; i++) Jn(g[i], g[++i], g[++i]);
}
function Wn(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) &&
      ((o.__ = e), (t = typeof o.type == 'function' ? Wn(o, t, n) : Kn(n, o, o, e.__k, o.__e, t)));
  return t;
}
function J(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == 'boolean' ||
      (Array.isArray(e)
        ? e.some(function (n) {
            J(n, t);
          })
        : t.push(e)),
    t
  );
}
function Kn(e, t, n, r, o, a) {
  var c, u, l;
  if (t.__d !== void 0) (c = t.__d), (t.__d = void 0);
  else if (n == null || o != a || o.parentNode == null)
    e: if (a == null || a.parentNode !== e) e.appendChild(o), (c = null);
    else {
      for (u = a, l = 0; (u = u.nextSibling) && l < r.length; l += 2) if (u == o) break e;
      e.insertBefore(o, a), (c = a);
    }
  return c !== void 0 ? c : o.nextSibling;
}
function xt(e, t, n) {
  t[0] === '-'
    ? e.setProperty(t, n)
    : (e[t] = n == null ? '' : typeof n != 'number' || Lr.test(t) ? n : n + 'px');
}
function Ae(e, t, n, r, o) {
  var a;
  e: if (t === 'style')
    if (typeof n == 'string') e.style.cssText = n;
    else {
      if ((typeof r == 'string' && (e.style.cssText = r = ''), r))
        for (t in r) (n && t in n) || xt(e.style, t, '');
      if (n) for (t in n) (r && n[t] === r[t]) || xt(e.style, t, n[t]);
    }
  else if (t[0] === 'o' && t[1] === 'n')
    (a = t !== (t = t.replace(/Capture$/, ''))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + a] = n),
      n ? r || e.addEventListener(t, a ? Rt : Nt, a) : e.removeEventListener(t, a ? Rt : Nt, a);
  else if (t !== 'dangerouslySetInnerHTML') {
    if (o) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
    else if (t !== 'href' && t !== 'list' && t !== 'form' && t !== 'download' && t in e)
      try {
        e[t] = n ?? '';
        break e;
      } catch {}
    typeof n == 'function' ||
      (n != null && (n !== !1 || (t[0] === 'a' && t[1] === 'r'))
        ? e.setAttribute(t, n)
        : e.removeAttribute(t));
  }
}
function Nt(e) {
  this.l[e.type + !1](w.event ? w.event(e) : e);
}
function Rt(e) {
  this.l[e.type + !0](w.event ? w.event(e) : e);
}
function Et(e, t, n, r, o, a, c, u, l) {
  var s,
    i,
    m,
    d,
    p,
    v,
    h,
    g,
    y,
    S,
    O,
    _ = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null && ((l = n.__h), (u = t.__e = n.__e), (t.__h = null), (a = [u])),
    (s = w.__b) && s(t);
  try {
    e: if (typeof _ == 'function') {
      if (
        ((g = t.props),
        (y = (s = _.contextType) && r[s.__c]),
        (S = s ? (y ? y.props.value : s.__) : r),
        n.__c
          ? (h = (i = t.__c = n.__c).__ = i.__E)
          : ('prototype' in _ && _.prototype.render
              ? (t.__c = i = new _(g, S))
              : ((t.__c = i = new W(g, S)), (i.constructor = _), (i.render = Mr)),
            y && y.sub(i),
            (i.props = g),
            i.state || (i.state = {}),
            (i.context = S),
            (i.__n = r),
            (m = i.__d = !0),
            (i.__h = [])),
        i.__s == null && (i.__s = i.state),
        _.getDerivedStateFromProps != null &&
          (i.__s == i.state && (i.__s = z({}, i.__s)),
          z(i.__s, _.getDerivedStateFromProps(g, i.__s))),
        (d = i.props),
        (p = i.state),
        m)
      )
        _.getDerivedStateFromProps == null &&
          i.componentWillMount != null &&
          i.componentWillMount(),
          i.componentDidMount != null && i.__h.push(i.componentDidMount);
      else {
        if (
          (_.getDerivedStateFromProps == null &&
            g !== d &&
            i.componentWillReceiveProps != null &&
            i.componentWillReceiveProps(g, S),
          (!i.__e &&
            i.shouldComponentUpdate != null &&
            i.shouldComponentUpdate(g, i.__s, S) === !1) ||
            t.__v === n.__v)
        ) {
          (i.props = g),
            (i.state = i.__s),
            t.__v !== n.__v && (i.__d = !1),
            (i.__v = t),
            (t.__e = n.__e),
            (t.__k = n.__k),
            i.__h.length && c.push(i);
          break e;
        }
        i.componentWillUpdate != null && i.componentWillUpdate(g, i.__s, S),
          i.componentDidUpdate != null &&
            i.__h.push(function () {
              i.componentDidUpdate(d, p, v);
            });
      }
      (i.context = S),
        (i.props = g),
        (i.state = i.__s),
        (s = w.__r) && s(t),
        (i.__d = !1),
        (i.__v = t),
        (i.__P = e),
        (s = i.render(i.props, i.state, i.context)),
        (i.state = i.__s),
        i.getChildContext != null && (r = z(z({}, r), i.getChildContext())),
        m || i.getSnapshotBeforeUpdate == null || (v = i.getSnapshotBeforeUpdate(d, p)),
        (O = s != null && s.type === Z && s.key == null ? s.props.children : s),
        Vn(e, Array.isArray(O) ? O : [O], t, n, r, o, a, c, u, l),
        (i.base = t.__e),
        (t.__h = null),
        i.__h.length && c.push(i),
        h && (i.__E = i.__ = null),
        (i.__e = !1);
    } else
      a == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = qr(n.__e, t, n, r, o, a, c, l));
    (s = w.diffed) && s(t);
  } catch (b) {
    (t.__v = null),
      (l || a != null) && ((t.__e = u), (t.__h = !!l), (a[a.indexOf(u)] = null)),
      w.__e(b, t, n);
  }
}
function zn(e, t) {
  w.__c && w.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        w.__e(r, n.__v);
      }
    });
}
function qr(e, t, n, r, o, a, c, u) {
  var l,
    s,
    i,
    m,
    d = n.props,
    p = t.props,
    v = t.type,
    h = 0;
  if ((v === 'svg' && (o = !0), a != null)) {
    for (; h < a.length; h++)
      if ((l = a[h]) && (l === e || (v ? l.localName == v : l.nodeType == 3))) {
        (e = l), (a[h] = null);
        break;
      }
  }
  if (e == null) {
    if (v === null) return document.createTextNode(p);
    (e = o
      ? document.createElementNS('http://www.w3.org/2000/svg', v)
      : document.createElement(v, p.is && p)),
      (a = null),
      (u = !1);
  }
  if (v === null) d === p || (u && e.data === p) || (e.data = p);
  else {
    if (
      ((a = a && wt.slice.call(e.childNodes)),
      (s = (d = n.props || Ke).dangerouslySetInnerHTML),
      (i = p.dangerouslySetInnerHTML),
      !u)
    ) {
      if (a != null)
        for (d = {}, m = 0; m < e.attributes.length; m++)
          d[e.attributes[m].name] = e.attributes[m].value;
      (i || s) &&
        ((i && ((s && i.__html == s.__html) || i.__html === e.innerHTML)) ||
          (e.innerHTML = (i && i.__html) || ''));
    }
    if (
      ((function (g, y, S, O, _) {
        var b;
        for (b in S) b === 'children' || b === 'key' || b in y || Ae(g, b, null, S[b], O);
        for (b in y)
          (_ && typeof y[b] != 'function') ||
            b === 'children' ||
            b === 'key' ||
            b === 'value' ||
            b === 'checked' ||
            S[b] === y[b] ||
            Ae(g, b, y[b], S[b], O);
      })(e, p, d, o, u),
      i)
    )
      t.__k = [];
    else if (
      ((h = t.props.children),
      Vn(e, Array.isArray(h) ? h : [h], t, n, r, o && v !== 'foreignObject', a, c, e.firstChild, u),
      a != null)
    )
      for (h = a.length; h--; ) a[h] != null && Fn(a[h]);
    u ||
      ('value' in p &&
        (h = p.value) !== void 0 &&
        (h !== e.value || (v === 'progress' && !h)) &&
        Ae(e, 'value', h, d.value, !1),
      'checked' in p &&
        (h = p.checked) !== void 0 &&
        h !== e.checked &&
        Ae(e, 'checked', h, d.checked, !1));
  }
  return e;
}
function Jn(e, t, n) {
  try {
    typeof e == 'function' ? e(t) : (e.current = t);
  } catch (r) {
    w.__e(r, n);
  }
}
function $n(e, t, n) {
  var r, o, a;
  if (
    (w.unmount && w.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Jn(r, null, t)),
    n || typeof e.type == 'function' || (n = (o = e.__e) != null),
    (e.__e = e.__d = void 0),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (c) {
        w.__e(c, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && $n(r[a], t, n);
  o != null && Fn(o);
}
function Mr(e, t, n) {
  return this.constructor(e, n);
}
function Pe(e, t, n) {
  var r, o, a;
  w.__ && w.__(e, t),
    (o = (r = typeof n == 'function') ? null : (n && n.__k) || t.__k),
    (a = []),
    Et(
      t,
      (e = ((!r && n) || t).__k = V(Z, null, [e])),
      o || Ke,
      Ke,
      t.ownerSVGElement !== void 0,
      !r && n ? [n] : o ? null : t.firstChild ? wt.slice.call(t.childNodes) : null,
      a,
      !r && n ? n : o ? o.__e : t.firstChild,
      r,
    ),
    zn(a, e);
}
function Qn(e, t) {
  Pe(e, t, Qn);
}
function Hr(e, t, n) {
  var r,
    o,
    a,
    c = arguments,
    u = z({}, e.props);
  for (a in t) a == 'key' ? (r = t[a]) : a == 'ref' ? (o = t[a]) : (u[a] = t[a]);
  if (arguments.length > 3) for (n = [n], a = 3; a < arguments.length; a++) n.push(c[a]);
  return n != null && (u.children = n), Se(e.type, u, r || e.key, o || e.ref, null);
}
(w = {
  __e: function (e, t) {
    for (var n, r, o; (t = t.__); )
      if ((n = t.__c) && !n.__)
        try {
          if (
            ((r = n.constructor) &&
              r.getDerivedStateFromError != null &&
              (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
            n.componentDidCatch != null && (n.componentDidCatch(e), (o = n.__d)),
            o)
          )
            return (n.__E = n);
        } catch (a) {
          e = a;
        }
    throw e;
  },
  __v: 0,
}),
  (W.prototype.setState = function (e, t) {
    var n;
    (n = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = z({}, this.state))),
      typeof e == 'function' && (e = e(z({}, n), this.props)),
      e && z(n, e),
      e != null && this.__v && (t && this.__h.push(t), pt(this));
  }),
  (W.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), pt(this));
  }),
  (W.prototype.render = Z),
  (Oe = []),
  (Hn = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (ze.__r = 0),
  (Un = 0);
var le,
  T,
  Tt,
  ue = 0,
  mt = [],
  Lt = w.__b,
  qt = w.__r,
  Mt = w.diffed,
  Ht = w.__c,
  Ut = w.unmount;
function ke(e, t) {
  w.__h && w.__h(T, e, ue || t), (ue = 0);
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Zn(e) {
  return (ue = 1), Yn(Xn, e);
}
function Yn(e, t, n) {
  var r = ke(le++, 2);
  return (
    (r.t = e),
    r.__c ||
      ((r.__ = [
        n ? n(t) : Xn(void 0, t),
        function (o) {
          var a = r.t(r.__[0], o);
          r.__[0] !== a && ((r.__ = [a, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = T)),
    r.__
  );
}
function Gn(e, t) {
  var n = ke(le++, 3);
  !w.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__H.__h.push(n));
}
function Ft(e, t) {
  var n = ke(le++, 4);
  !w.__s && jt(n.__H, t) && ((n.__ = e), (n.__H = t), T.__h.push(n));
}
function rt(e, t) {
  var n = ke(le++, 7);
  return jt(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function Ur() {
  mt.forEach(function (e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(He), e.__H.__h.forEach(dt), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), w.__e(t, e.__v);
      }
  }),
    (mt = []);
}
(w.__b = function (e) {
  (T = null), Lt && Lt(e);
}),
  (w.__r = function (e) {
    qt && qt(e), (le = 0);
    var t = (T = e.__c).__H;
    t && (t.__h.forEach(He), t.__h.forEach(dt), (t.__h = []));
  }),
  (w.diffed = function (e) {
    Mt && Mt(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((mt.push(t) !== 1 && Tt === w.requestAnimationFrame) ||
        (
          (Tt = w.requestAnimationFrame) ||
          function (n) {
            var r,
              o = function () {
                clearTimeout(a), Bt && cancelAnimationFrame(r), setTimeout(n);
              },
              a = setTimeout(o, 100);
            Bt && (r = requestAnimationFrame(o));
          }
        )(Ur)),
      (T = void 0);
  }),
  (w.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(He),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || dt(r);
          }));
      } catch (r) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          w.__e(r, n.__v);
      }
    }),
      Ht && Ht(e, t);
  }),
  (w.unmount = function (e) {
    Ut && Ut(e);
    var t = e.__c;
    if (t && t.__H)
      try {
        t.__H.__.forEach(He);
      } catch (n) {
        w.__e(n, t.__v);
      }
  });
var Bt = typeof requestAnimationFrame == 'function';
function He(e) {
  var t = T;
  typeof e.__c == 'function' && e.__c(), (T = t);
}
function dt(e) {
  var t = T;
  (e.__c = e.__()), (T = t);
}
function jt(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function Xn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function er(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ht(e, t) {
  for (var n in e) if (n !== '__source' && !(n in t)) return !0;
  for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
  return !1;
}
function vt(e) {
  this.props = e;
}
((vt.prototype = new W()).isPureReactComponent = !0),
  (vt.prototype.shouldComponentUpdate = function (e, t) {
    return ht(this.props, e) || ht(this.state, t);
  });
var Vt = w.__b;
w.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), Vt && Vt(e);
};
var Fr = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911,
  Wt = function (e, t) {
    return e == null ? null : J(J(e).map(t));
  },
  Br = {
    map: Wt,
    forEach: Wt,
    count: function (e) {
      return e ? J(e).length : 0;
    },
    only: function (e) {
      var t = J(e);
      if (t.length !== 1) throw 'Children.only';
      return t[0];
    },
    toArray: J,
  },
  Vr = w.__e;
function Ue() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function tr(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function ge() {
  (this.u = null), (this.o = null);
}
(w.__e = function (e, t, n) {
  if (e.then) {
    for (var r, o = t; (o = o.__); )
      if ((r = o.__c) && r.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  }
  Vr(e, t, n);
}),
  ((Ue.prototype = new W()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = tr(r.__v),
      a = !1,
      c = function () {
        a || ((a = !0), (n.componentWillUnmount = n.__c), o ? o(u) : u());
      };
    (n.__c = n.componentWillUnmount),
      (n.componentWillUnmount = function () {
        c(), n.__c && n.__c();
      });
    var u = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var s = r.state.__e;
            r.__v.__k[0] = (function m(d, p, v) {
              return (
                d &&
                  ((d.__v = null),
                  (d.__k =
                    d.__k &&
                    d.__k.map(function (h) {
                      return m(h, p, v);
                    })),
                  d.__c &&
                    d.__c.__P === p &&
                    (d.__e && v.insertBefore(d.__e, d.__d), (d.__c.__e = !0), (d.__c.__P = v))),
                d
              );
            })(s, s.__c.__P, s.__c.__O);
          }
          var i;
          for (r.setState({ __e: (r.__b = null) }); (i = r.t.pop()); ) i.forceUpdate();
        }
      },
      l = t.__h === !0;
    r.__u++ || l || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(c, c);
  }),
  (Ue.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (Ue.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement('div'),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function a(c, u, l) {
          return (
            c &&
              (c.__c &&
                c.__c.__H &&
                (c.__c.__H.__.forEach(function (s) {
                  typeof s.__c == 'function' && s.__c();
                }),
                (c.__c.__H = null)),
              (c = er({}, c)).__c != null && (c.__c.__P === l && (c.__c.__P = u), (c.__c = null)),
              (c.__k =
                c.__k &&
                c.__k.map(function (s) {
                  return a(s, u, l);
                }))),
            c
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = t.__e && V(Z, null, e.fallback);
    return o && (o.__h = null), [V(Z, null, t.__e ? null : e.children), o];
  });
var Kt = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function Wr(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Kr(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    Pe(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            insertBefore: function (r, o) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
            },
          })),
        Pe(V(Wr, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function nr(e, t) {
  return V(Kr, { __v: e, i: t });
}
((ge.prototype = new W()).__e = function (e) {
  var t = this,
    n = tr(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (o) {
      var a = function () {
        t.props.revealOrder ? (r.push(o), Kt(t, e, r)) : o();
      };
      n ? n(a) : a();
    }
  );
}),
  (ge.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = J(e.children);
    e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (ge.prototype.componentDidUpdate = ge.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        Kt(e, n, t);
      });
    });
var rr = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  zr =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Jr = function (e) {
    return (typeof Symbol < 'u' && Ee(Symbol()) == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(
      e,
    );
  };
function or(e, t, n) {
  return (
    t.__k == null && (t.textContent = ''), Pe(e, t), typeof n == 'function' && n(), e ? e.__c : null
  );
}
(W.prototype.isReactComponent = {}),
  ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
    Object.defineProperty(W.prototype, e, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
      },
    });
  });
var zt = w.event;
function $r() {}
function Qr() {
  return this.cancelBubble;
}
function Zr() {
  return this.defaultPrevented;
}
w.event = function (e) {
  return (
    zt && (e = zt(e)),
    (e.persist = $r),
    (e.isPropagationStopped = Qr),
    (e.isDefaultPrevented = Zr),
    (e.nativeEvent = e)
  );
};
var ar,
  Jt = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  $t = w.vnode;
w.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == 'string') {
    for (var o in ((r = {}), n)) {
      var a = n[o];
      (o === 'value' && 'defaultValue' in n && a == null) ||
        (o === 'defaultValue' && 'value' in n && n.value == null
          ? (o = 'value')
          : o === 'download' && a === !0
          ? (a = '')
          : /ondoubleclick/i.test(o)
          ? (o = 'ondblclick')
          : /^onchange(textarea|input)/i.test(o + t) && !Jr(n.type)
          ? (o = 'oninput')
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
          ? (o = o.toLowerCase())
          : zr.test(o)
          ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
          : a === null && (a = void 0),
        (r[o] = a));
    }
    t == 'select' &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = J(n.children).forEach(function (c) {
        c.props.selected = r.value.indexOf(c.props.value) != -1;
      })),
      t == 'select' &&
        r.defaultValue != null &&
        (r.value = J(n.children).forEach(function (c) {
          c.props.selected = r.multiple
            ? r.defaultValue.indexOf(c.props.value) != -1
            : r.defaultValue == c.props.value;
        })),
      (e.props = r);
  }
  t &&
    n.class != n.className &&
    ((Jt.enumerable = 'className' in n),
    n.className != null && (r.class = n.className),
    Object.defineProperty(r, 'className', Jt)),
    (e.$$typeof = rr),
    $t && $t(e);
};
var Qt = w.__r;
w.__r = function (e) {
  Qt && Qt(e), (ar = e.__c);
};
var Yr = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return ar.__n[e.__c].props.value;
      },
    },
  },
};
(typeof performance > 'u' ? 'undefined' : Ee(performance)) == 'object' &&
  typeof performance.now == 'function' &&
  performance.now.bind(performance);
function Zt(e) {
  return !!e && e.$$typeof === rr;
}
var f = {
  useState: Zn,
  useReducer: Yn,
  useEffect: Gn,
  useLayoutEffect: Ft,
  useRef: function (e) {
    return (
      (ue = 5),
      rt(function () {
        return { current: e };
      }, [])
    );
  },
  useImperativeHandle: function (e, t, n) {
    (ue = 6),
      Ft(
        function () {
          typeof e == 'function' ? e(t()) : e && (e.current = t());
        },
        n == null ? n : n.concat(e),
      );
  },
  useMemo: rt,
  useCallback: function (e, t) {
    return (
      (ue = 8),
      rt(function () {
        return e;
      }, t)
    );
  },
  useContext: function (e) {
    var t = T.context[e.__c],
      n = ke(le++, 9);
    return (n.__c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(T)), t.props.value) : e.__;
  },
  useDebugValue: function (e, t) {
    w.useDebugValue && w.useDebugValue(t ? t(e) : e);
  },
  version: '16.8.0',
  Children: Br,
  render: or,
  hydrate: function (e, t, n) {
    return Qn(e, t), typeof n == 'function' && n(), e ? e.__c : null;
  },
  unmountComponentAtNode: function (e) {
    return !!e.__k && (Pe(null, e), !0);
  },
  createPortal: nr,
  createElement: V,
  createContext: function (e, t) {
    var n = {
      __c: (t = '__cC' + Un++),
      __: e,
      Consumer: function (r, o) {
        return r.children(o);
      },
      Provider: function (r) {
        var o, a;
        return (
          this.getChildContext ||
            ((o = []),
            ((a = {})[t] = this),
            (this.getChildContext = function () {
              return a;
            }),
            (this.shouldComponentUpdate = function (c) {
              this.props.value !== c.value && o.some(pt);
            }),
            (this.sub = function (c) {
              o.push(c);
              var u = c.componentWillUnmount;
              c.componentWillUnmount = function () {
                o.splice(o.indexOf(c), 1), u && u.call(c);
              };
            })),
          r.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  },
  createFactory: function (e) {
    return V.bind(null, e);
  },
  cloneElement: function (e) {
    return Zt(e) ? Hr.apply(null, arguments) : e;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: Z,
  isValidElement: Zt,
  findDOMNode: function (e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  },
  Component: W,
  PureComponent: vt,
  memo: function (e, t) {
    function n(o) {
      var a = this.props.ref,
        c = a == o.ref;
      return (
        !c && a && (a.call ? a(null) : (a.current = null)),
        t ? !t(this.props, o) || !c : ht(this.props, o)
      );
    }
    function r(o) {
      return (this.shouldComponentUpdate = n), V(e, o);
    }
    return (
      (r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  },
  forwardRef: function (e) {
    function t(n, r) {
      var o = er({}, n);
      return (
        delete o.ref, e(o, (r = n.ref || r) && (Ee(r) != 'object' || 'current' in r) ? r : null)
      );
    }
    return (
      (t.$$typeof = Fr),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
      t
    );
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: Z,
  Suspense: Ue,
  SuspenseList: ge,
  lazy: function (e) {
    var t, n, r;
    function o(a) {
      if (
        (t ||
          (t = e()).then(
            function (c) {
              n = c.default || c;
            },
            function (c) {
              r = c;
            },
          ),
        r)
      )
        throw r;
      if (!n) throw t;
      return V(n, a);
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Yr,
};
function Gr() {
  return f.createElement(
    'svg',
    { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' },
    f.createElement('path', {
      d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
      strokeWidth: '1.2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'square',
    }),
  );
}
function cr() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', className: 'DocSearch-Search-Icon', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
var Xr = ['translations'];
function yt() {
  return (
    (yt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    yt.apply(this, arguments)
  );
}
function eo(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          c,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (i) {
          (s = !0), (c = i);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw c;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Yt(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Yt(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function to(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var no = f.forwardRef(function (e, t) {
  var n = e.translations,
    r = n === void 0 ? {} : n,
    o = to(e, Xr),
    a = r.buttonText,
    c = a === void 0 ? 'Search' : a,
    u = r.buttonAriaLabel,
    l = u === void 0 ? 'Search' : u,
    s = eo(Zn(null), 2),
    i = s[0],
    m = s[1];
  return (
    Gn(function () {
      typeof navigator < 'u' &&
        (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? m('⌘') : m('Ctrl'));
    }, []),
    f.createElement(
      'button',
      yt({ type: 'button', className: 'DocSearch DocSearch-Button', 'aria-label': l }, o, {
        ref: t,
      }),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Container' },
        f.createElement(cr, null),
        f.createElement('span', { className: 'DocSearch-Button-Placeholder' }, c),
      ),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Keys' },
        i !== null &&
          f.createElement(
            f.Fragment,
            null,
            f.createElement(
              'kbd',
              { className: 'DocSearch-Button-Key' },
              i === 'Ctrl' ? f.createElement(Gr, null) : i,
            ),
            f.createElement('kbd', { className: 'DocSearch-Button-Key' }, 'K'),
          ),
      ),
    )
  );
});
function Ie(e) {
  return e.reduce(function (t, n) {
    return t.concat(n);
  }, []);
}
var ro = 0;
function _t(e) {
  return e.collections.length === 0
    ? 0
    : e.collections.reduce(function (t, n) {
        return t + n.items.length;
      }, 0);
}
var ir = function () {},
  oo = [{ segment: 'autocomplete-core', version: '1.7.4' }];
function Fe(e, t) {
  var n = t;
  return {
    then: function (r, o) {
      return Fe(e.then(xe(r, n, e), xe(o, n, e)), n);
    },
    catch: function (r) {
      return Fe(e.catch(xe(r, n, e)), n);
    },
    finally: function (r) {
      return (
        r && n.onCancelList.push(r),
        Fe(
          e.finally(
            xe(
              r &&
                function () {
                  return (n.onCancelList = []), r();
                },
              n,
              e,
            ),
          ),
          n,
        )
      );
    },
    cancel: function () {
      n.isCanceled = !0;
      var r = n.onCancelList;
      (n.onCancelList = []),
        r.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return n.isCanceled === !0;
    },
  };
}
function Gt(e) {
  return Fe(e, { isCanceled: !1, onCancelList: [] });
}
function xe(e, t, n) {
  return e
    ? function (r) {
        return t.isCanceled ? r : e(r);
      }
    : n;
}
function Xt(e, t, n, r) {
  if (!n) return null;
  if (e < 0 && (t === null || (r !== null && t === 0))) return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? (r === null ? null : 0) : o;
}
function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ao(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function co(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function (r) {
    return Promise.all(
      r
        .filter(function (o) {
          return Boolean(o);
        })
        .map(function (o) {
          if ((o.sourceId, n.includes(o.sourceId)))
            throw new Error(
              '[Autocomplete] The `sourceId` '.concat(
                JSON.stringify(o.sourceId),
                ' is not unique.',
              ),
            );
          n.push(o.sourceId);
          var a = (function (c) {
            for (var u = 1; u < arguments.length; u++) {
              var l = arguments[u] != null ? arguments[u] : {};
              u % 2
                ? en(Object(l), !0).forEach(function (s) {
                    ao(c, s, l[s]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l))
                : en(Object(l)).forEach(function (s) {
                    Object.defineProperty(c, s, Object.getOwnPropertyDescriptor(l, s));
                  });
            }
            return c;
          })(
            {
              getItemInputValue: function (c) {
                return c.state.query;
              },
              getItemUrl: function () {},
              onSelect: function (c) {
                (0, c.setIsOpen)(!1);
              },
              onActive: ir,
            },
            o,
          );
          return Promise.resolve(a);
        }),
    );
  });
}
function ce(e) {
  var t = (function (o) {
    var a = o.collections
      .map(function (c) {
        return c.items.length;
      })
      .reduce(function (c, u, l) {
        var s = (c[l - 1] || 0) + u;
        return c.push(s), c;
      }, [])
      .reduce(function (c, u) {
        return u <= o.activeItemId ? c + 1 : c;
      }, 0);
    return o.collections[a];
  })(e);
  if (!t) return null;
  var n =
      t.items[
        (function (o) {
          for (var a = o.state, c = o.collection, u = !1, l = 0, s = 0; u === !1; ) {
            var i = a.collections[l];
            if (i === c) {
              u = !0;
              break;
            }
            (s += i.items.length), l++;
          }
          return a.activeItemId - s;
        })({ state: e, collection: t })
      ],
    r = t.source;
  return {
    item: n,
    itemInputValue: r.getItemInputValue({ item: n, state: e }),
    itemUrl: r.getItemUrl({ item: n, state: e }),
    source: r,
  };
}
var io = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tn(Object(n), !0).forEach(function (r) {
          uo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function uo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function so(e, t, n) {
  var r,
    o = t.initialState;
  return {
    getState: function () {
      return o;
    },
    dispatch: function (a, c) {
      var u = (function (l) {
        for (var s = 1; s < arguments.length; s++) {
          var i = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? nn(Object(i), !0).forEach(function (m) {
                lo(l, m, i[m]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
            : nn(Object(i)).forEach(function (m) {
                Object.defineProperty(l, m, Object.getOwnPropertyDescriptor(i, m));
              });
        }
        return l;
      })({}, o);
      (o = e(o, { type: a, props: t, payload: c })), n({ state: o, prevState: u });
    },
    pendingRequests:
      ((r = []),
      {
        add: function (a) {
          return (
            r.push(a),
            a.finally(function () {
              r = r.filter(function (c) {
                return c !== a;
              });
            })
          );
        },
        cancelAll: function () {
          r.forEach(function (a) {
            return a.cancel();
          });
        },
        isEmpty: function () {
          return r.length === 0;
        },
      }),
  };
}
function rn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rn(Object(n), !0).forEach(function (r) {
          fo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function po(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return ot(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return ot(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return ot(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? on(Object(n), !0).forEach(function (r) {
          mo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : on(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function mo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function an(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? an(Object(n), !0).forEach(function (r) {
          ur(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : an(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ur(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function ho(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return at(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return at(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return at(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function at(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cn(Object(n), !0).forEach(function (r) {
          vo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function vo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Le(e) {
  return Boolean(e.execute);
}
function yo(e, t) {
  return (
    (n = e),
    Boolean(n == null ? void 0 : n.execute)
      ? un(
          un({}, e),
          {},
          {
            requests: e.queries.map(function (r) {
              return { query: r, sourceId: t, transformResponse: e.transformResponse };
            }),
          },
        )
      : { items: e, sourceId: t }
  );
  var n;
}
function _o(e) {
  var t = e
    .reduce(function (n, r) {
      if (!Le(r)) return n.push(r), n;
      var o = r.searchClient,
        a = r.execute,
        c = r.requesterId,
        u = r.requests,
        l = n.find(function (m) {
          return Le(r) && Le(m) && m.searchClient === o && Boolean(c) && m.requesterId === c;
        });
      if (l) {
        var s;
        (s = l.items).push.apply(s, ho(u));
      } else {
        var i = { execute: a, requesterId: c, items: u, searchClient: o };
        n.push(i);
      }
      return n;
    }, [])
    .map(function (n) {
      if (!Le(n)) return Promise.resolve(n);
      var r = n,
        o = r.execute,
        a = r.items;
      return o({ searchClient: r.searchClient, requests: a });
    });
  return Promise.all(t).then(function (n) {
    return Ie(n);
  });
}
function go(e, t) {
  return t.map(function (n) {
    var r = e.filter(function (u) {
        return u.sourceId === n.sourceId;
      }),
      o = r.map(function (u) {
        return u.items;
      }),
      a = r[0].transformResponse,
      c = a
        ? a(
            (function (u) {
              var l = u.map(function (s) {
                var i;
                return Ne(
                  Ne({}, s),
                  {},
                  {
                    hits:
                      (i = s.hits) === null || i === void 0
                        ? void 0
                        : i.map(function (m) {
                            return Ne(
                              Ne({}, m),
                              {},
                              {
                                __autocomplete_indexName: s.index,
                                __autocomplete_queryID: s.queryID,
                              },
                            );
                          }),
                  },
                );
              });
              return {
                results: l,
                hits: l
                  .map(function (s) {
                    return s.hits;
                  })
                  .filter(Boolean),
                facetHits: l
                  .map(function (s) {
                    var i;
                    return (i = s.facetHits) === null || i === void 0
                      ? void 0
                      : i.map(function (m) {
                          return {
                            label: m.value,
                            count: m.count,
                            _highlightResult: { label: { value: m.highlighted } },
                          };
                        });
                  })
                  .filter(Boolean),
              };
            })(o),
          )
        : o;
    return (
      c.every(Boolean),
      'The `getItems` function from source "'
        .concat(n.sourceId, '" must return an array of items but returned ')
        .concat(
          JSON.stringify(void 0),
          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`,
        ),
      { source: n, items: c }
    );
  });
}
var bo = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
function ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ln(Object(n), !0).forEach(function (r) {
          Oo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ln(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Oo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function So(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var sn,
  ct,
  qe,
  ye = null,
  fn =
    ((sn = -1),
    (ct = -1),
    (qe = void 0),
    function (e) {
      var t = ++sn;
      return Promise.resolve(e).then(function (n) {
        return qe && t < ct ? qe : ((ct = t), (qe = n), n);
      });
    });
function ae(e) {
  var t = e.event,
    n = e.nextState,
    r = n === void 0 ? {} : n,
    o = e.props,
    a = e.query,
    c = e.refresh,
    u = e.store,
    l = So(e, bo);
  ye && o.environment.clearTimeout(ye);
  var s = l.setCollections,
    i = l.setIsOpen,
    m = l.setQuery,
    d = l.setActiveItemId,
    p = l.setStatus;
  if ((m(a), d(o.defaultActiveItemId), !a && o.openOnFocus === !1)) {
    var v,
      h = u.getState().collections.map(function (S) {
        return ve(ve({}, S), {}, { items: [] });
      });
    p('idle'),
      s(h),
      i((v = r.isOpen) !== null && v !== void 0 ? v : o.shouldPanelOpen({ state: u.getState() }));
    var g = Gt(
      fn(h).then(function () {
        return Promise.resolve();
      }),
    );
    return u.pendingRequests.add(g);
  }
  p('loading'),
    (ye = o.environment.setTimeout(function () {
      p('stalled');
    }, o.stallThreshold));
  var y = Gt(
    fn(
      o.getSources(ve({ query: a, refresh: c, state: u.getState() }, l)).then(function (S) {
        return Promise.all(
          S.map(function (O) {
            return Promise.resolve(
              O.getItems(ve({ query: a, refresh: c, state: u.getState() }, l)),
            ).then(function (_) {
              return yo(_, O.sourceId);
            });
          }),
        )
          .then(_o)
          .then(function (O) {
            return go(O, S);
          })
          .then(function (O) {
            return (function (_) {
              var b = _.collections,
                I = _.props,
                N = _.state,
                A = b.reduce(function (k, R) {
                  return Te(
                    Te({}, k),
                    {},
                    ur(
                      {},
                      R.source.sourceId,
                      Te(
                        Te({}, R.source),
                        {},
                        {
                          getItems: function () {
                            return Ie(R.items);
                          },
                        },
                      ),
                    ),
                  );
                }, {});
              return Ie(I.reshape({ sources: Object.values(A), sourcesBySourceId: A, state: N }))
                .filter(Boolean)
                .map(function (k) {
                  return { source: k, items: k.getItems() };
                });
            })({ collections: O, props: o, state: u.getState() });
          });
      }),
    ),
  )
    .then(function (S) {
      var O;
      p('idle'), s(S);
      var _ = o.shouldPanelOpen({ state: u.getState() });
      i((O = r.isOpen) !== null && O !== void 0 ? O : (o.openOnFocus && !a && _) || _);
      var b = ce(u.getState());
      if (u.getState().activeItemId !== null && b) {
        var I = b.item,
          N = b.itemInputValue,
          A = b.itemUrl,
          k = b.source;
        k.onActive(
          ve(
            {
              event: t,
              item: I,
              itemInputValue: N,
              itemUrl: A,
              refresh: c,
              source: k,
              state: u.getState(),
            },
            l,
          ),
        );
      }
    })
    .finally(function () {
      p('idle'), ye && o.environment.clearTimeout(ye);
    });
  return u.pendingRequests.add(y);
}
var wo = ['event', 'props', 'refresh', 'store'];
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pn(Object(n), !0).forEach(function (r) {
          Eo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Eo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function jo(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var Po = ['props', 'refresh', 'store'],
  Io = ['inputElement', 'formElement', 'panelElement'],
  ko = ['inputElement'],
  Do = ['inputElement', 'maxLength'],
  Co = ['item', 'source'];
function mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mn(Object(n), !0).forEach(function (r) {
          Ao(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ao(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function _e(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function xo(e) {
  var t = e.props,
    n = e.refresh,
    r = e.store,
    o = _e(e, Po);
  return {
    getEnvironmentProps: function (a) {
      var c = a.inputElement,
        u = a.formElement,
        l = a.panelElement;
      function s(i) {
        (!r.getState().isOpen && r.pendingRequests.isEmpty()) ||
          i.target === c ||
          ([u, l].some(function (m) {
            return (d = m), (p = i.target), d === p || d.contains(p);
            var d, p;
          }) === !1 &&
            (r.dispatch('blur', null), t.debug || r.pendingRequests.cancelAll()));
      }
      return x(
        {
          onTouchStart: s,
          onMouseDown: s,
          onTouchMove: function (i) {
            r.getState().isOpen !== !1 &&
              c === t.environment.document.activeElement &&
              i.target !== c &&
              c.blur();
          },
        },
        _e(a, Io),
      );
    },
    getRootProps: function (a) {
      return x(
        {
          role: 'combobox',
          'aria-expanded': r.getState().isOpen,
          'aria-haspopup': 'listbox',
          'aria-owns': r.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
        },
        a,
      );
    },
    getFormProps: function (a) {
      return (
        a.inputElement,
        x(
          {
            action: '',
            noValidate: !0,
            role: 'search',
            onSubmit: function (c) {
              var u;
              c.preventDefault(),
                t.onSubmit(x({ event: c, refresh: n, state: r.getState() }, o)),
                r.dispatch('submit', null),
                (u = a.inputElement) === null || u === void 0 || u.blur();
            },
            onReset: function (c) {
              var u;
              c.preventDefault(),
                t.onReset(x({ event: c, refresh: n, state: r.getState() }, o)),
                r.dispatch('reset', null),
                (u = a.inputElement) === null || u === void 0 || u.focus();
            },
          },
          _e(a, ko),
        )
      );
    },
    getLabelProps: function (a) {
      return x({ htmlFor: ''.concat(t.id, '-input'), id: ''.concat(t.id, '-label') }, a);
    },
    getInputProps: function (a) {
      var c;
      function u(h) {
        (t.openOnFocus || Boolean(r.getState().query)) &&
          ae(
            x(
              {
                event: h,
                props: t,
                query: r.getState().completion || r.getState().query,
                refresh: n,
                store: r,
              },
              o,
            ),
          ),
          r.dispatch('focus', null);
      }
      var l = a || {},
        s = (l.inputElement, l.maxLength),
        i = s === void 0 ? 512 : s,
        m = _e(l, Do),
        d = ce(r.getState()),
        p = (function (h) {
          return Boolean(h && h.match(io));
        })(((c = t.environment.navigator) === null || c === void 0 ? void 0 : c.userAgent) || ''),
        v = d != null && d.itemUrl && !p ? 'go' : 'search';
      return x(
        {
          'aria-autocomplete': 'both',
          'aria-activedescendant':
            r.getState().isOpen && r.getState().activeItemId !== null
              ? ''.concat(t.id, '-item-').concat(r.getState().activeItemId)
              : void 0,
          'aria-controls': r.getState().isOpen ? ''.concat(t.id, '-list') : void 0,
          'aria-labelledby': ''.concat(t.id, '-label'),
          value: r.getState().completion || r.getState().query,
          id: ''.concat(t.id, '-input'),
          autoComplete: 'off',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          enterKeyHint: v,
          spellCheck: 'false',
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: i,
          type: 'search',
          onChange: function (h) {
            ae(
              x(
                {
                  event: h,
                  props: t,
                  query: h.currentTarget.value.slice(0, i),
                  refresh: n,
                  store: r,
                },
                o,
              ),
            );
          },
          onKeyDown: function (h) {
            (function (g) {
              var y = g.event,
                S = g.props,
                O = g.refresh,
                _ = g.store,
                b = jo(g, wo);
              if (y.key === 'ArrowUp' || y.key === 'ArrowDown') {
                var I = function () {
                    var q = S.environment.document.getElementById(
                      ''.concat(S.id, '-item-').concat(_.getState().activeItemId),
                    );
                    q &&
                      (q.scrollIntoViewIfNeeded
                        ? q.scrollIntoViewIfNeeded(!1)
                        : q.scrollIntoView(!1));
                  },
                  N = function () {
                    var q = ce(_.getState());
                    if (_.getState().activeItemId !== null && q) {
                      var De = q.item,
                        Y = q.itemInputValue,
                        Xe = q.itemUrl,
                        se = q.source;
                      se.onActive(
                        X(
                          {
                            event: y,
                            item: De,
                            itemInputValue: Y,
                            itemUrl: Xe,
                            refresh: O,
                            source: se,
                            state: _.getState(),
                          },
                          b,
                        ),
                      );
                    }
                  };
                y.preventDefault(),
                  _.getState().isOpen === !1 && (S.openOnFocus || Boolean(_.getState().query))
                    ? ae(
                        X(
                          { event: y, props: S, query: _.getState().query, refresh: O, store: _ },
                          b,
                        ),
                      ).then(function () {
                        _.dispatch(y.key, { nextActiveItemId: S.defaultActiveItemId }),
                          N(),
                          setTimeout(I, 0);
                      })
                    : (_.dispatch(y.key, {}), N(), I());
              } else if (y.key === 'Escape')
                y.preventDefault(), _.dispatch(y.key, null), _.pendingRequests.cancelAll();
              else if (y.key === 'Tab') _.dispatch('blur', null), _.pendingRequests.cancelAll();
              else if (y.key === 'Enter') {
                if (
                  _.getState().activeItemId === null ||
                  _.getState().collections.every(function (q) {
                    return q.items.length === 0;
                  })
                )
                  return void (S.debug || _.pendingRequests.cancelAll());
                y.preventDefault();
                var A = ce(_.getState()),
                  k = A.item,
                  R = A.itemInputValue,
                  L = A.itemUrl,
                  B = A.source;
                if (y.metaKey || y.ctrlKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: y,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: _.getState(),
                        },
                        b,
                      ),
                    ),
                    S.navigator.navigateNewTab({ itemUrl: L, item: k, state: _.getState() }));
                else if (y.shiftKey)
                  L !== void 0 &&
                    (B.onSelect(
                      X(
                        {
                          event: y,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: _.getState(),
                        },
                        b,
                      ),
                    ),
                    S.navigator.navigateNewWindow({ itemUrl: L, item: k, state: _.getState() }));
                else if (!y.altKey) {
                  if (L !== void 0)
                    return (
                      B.onSelect(
                        X(
                          {
                            event: y,
                            item: k,
                            itemInputValue: R,
                            itemUrl: L,
                            refresh: O,
                            source: B,
                            state: _.getState(),
                          },
                          b,
                        ),
                      ),
                      void S.navigator.navigate({ itemUrl: L, item: k, state: _.getState() })
                    );
                  ae(
                    X(
                      {
                        event: y,
                        nextState: { isOpen: !1 },
                        props: S,
                        query: R,
                        refresh: O,
                        store: _,
                      },
                      b,
                    ),
                  ).then(function () {
                    B.onSelect(
                      X(
                        {
                          event: y,
                          item: k,
                          itemInputValue: R,
                          itemUrl: L,
                          refresh: O,
                          source: B,
                          state: _.getState(),
                        },
                        b,
                      ),
                    );
                  });
                }
              }
            })(x({ event: h, props: t, refresh: n, store: r }, o));
          },
          onFocus: u,
          onBlur: ir,
          onClick: function (h) {
            a.inputElement !== t.environment.document.activeElement || r.getState().isOpen || u(h);
          },
        },
        m,
      );
    },
    getPanelProps: function (a) {
      return x(
        {
          onMouseDown: function (c) {
            c.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch('mouseleave', null);
          },
        },
        a,
      );
    },
    getListProps: function (a) {
      return x(
        {
          role: 'listbox',
          'aria-labelledby': ''.concat(t.id, '-label'),
          id: ''.concat(t.id, '-list'),
        },
        a,
      );
    },
    getItemProps: function (a) {
      var c = a.item,
        u = a.source,
        l = _e(a, Co);
      return x(
        {
          id: ''.concat(t.id, '-item-').concat(c.__autocomplete_id),
          role: 'option',
          'aria-selected': r.getState().activeItemId === c.__autocomplete_id,
          onMouseMove: function (s) {
            if (c.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch('mousemove', c.__autocomplete_id);
              var i = ce(r.getState());
              if (r.getState().activeItemId !== null && i) {
                var m = i.item,
                  d = i.itemInputValue,
                  p = i.itemUrl,
                  v = i.source;
                v.onActive(
                  x(
                    {
                      event: s,
                      item: m,
                      itemInputValue: d,
                      itemUrl: p,
                      refresh: n,
                      source: v,
                      state: r.getState(),
                    },
                    o,
                  ),
                );
              }
            }
          },
          onMouseDown: function (s) {
            s.preventDefault();
          },
          onClick: function (s) {
            var i = u.getItemInputValue({ item: c, state: r.getState() }),
              m = u.getItemUrl({ item: c, state: r.getState() });
            (m
              ? Promise.resolve()
              : ae(
                  x(
                    {
                      event: s,
                      nextState: { isOpen: !1 },
                      props: t,
                      query: i,
                      refresh: n,
                      store: r,
                    },
                    o,
                  ),
                )
            ).then(function () {
              u.onSelect(
                x(
                  {
                    event: s,
                    item: c,
                    itemInputValue: i,
                    itemUrl: m,
                    refresh: n,
                    source: u,
                    state: r.getState(),
                  },
                  o,
                ),
              );
            });
          },
        },
        l,
      );
    },
  };
}
function dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function No(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dn(Object(n), !0).forEach(function (r) {
          lr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function lr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ro(e) {
  var t,
    n,
    r,
    o,
    a = e.plugins,
    c = e.options,
    u =
      (t = (((n = c.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) ||
        [])[0]) === null || t === void 0
        ? void 0
        : t.segment,
    l = u
      ? lr(
          {},
          u,
          Object.keys(
            ((r = c.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {},
          ),
        )
      : {};
  return {
    plugins: a.map(function (s) {
      return { name: s.name, options: Object.keys(s.__autocomplete_pluginOptions || []) };
    }),
    options: No({ 'autocomplete-core': Object.keys(c) }, l),
    ua: oo.concat(
      ((o = c.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || [],
    ),
  };
}
function hn(e) {
  var t,
    n = e.state;
  return n.isOpen === !1 || n.activeItemId === null
    ? null
    : ((t = ce(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function vn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vn(Object(n), !0).forEach(function (r) {
          To(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function To(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var Lo = function (e, t) {
  switch (t.type) {
    case 'setActiveItemId':
    case 'mousemove':
      return E(E({}, e), {}, { activeItemId: t.payload });
    case 'setQuery':
      return E(E({}, e), {}, { query: t.payload, completion: null });
    case 'setCollections':
      return E(E({}, e), {}, { collections: t.payload });
    case 'setIsOpen':
      return E(E({}, e), {}, { isOpen: t.payload });
    case 'setStatus':
      return E(E({}, e), {}, { status: t.payload });
    case 'setContext':
      return E(E({}, e), {}, { context: E(E({}, e.context), t.payload) });
    case 'ArrowDown':
      var n = E(
        E({}, e),
        {},
        {
          activeItemId: t.payload.hasOwnProperty('nextActiveItemId')
            ? t.payload.nextActiveItemId
            : Xt(1, e.activeItemId, _t(e), t.props.defaultActiveItemId),
        },
      );
      return E(E({}, n), {}, { completion: hn({ state: n }) });
    case 'ArrowUp':
      var r = E(
        E({}, e),
        {},
        { activeItemId: Xt(-1, e.activeItemId, _t(e), t.props.defaultActiveItemId) },
      );
      return E(E({}, r), {}, { completion: hn({ state: r }) });
    case 'Escape':
      return e.isOpen
        ? E(E({}, e), {}, { activeItemId: null, isOpen: !1, completion: null })
        : E(E({}, e), {}, { activeItemId: null, query: '', status: 'idle', collections: [] });
    case 'submit':
      return E(E({}, e), {}, { activeItemId: null, isOpen: !1, status: 'idle' });
    case 'reset':
      return E(
        E({}, e),
        {},
        {
          activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null,
          status: 'idle',
          query: '',
        },
      );
    case 'focus':
      return E(
        E({}, e),
        {},
        {
          activeItemId: t.props.defaultActiveItemId,
          isOpen:
            (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }),
        },
      );
    case 'blur':
      return t.props.debug ? e : E(E({}, e), {}, { isOpen: !1, activeItemId: null });
    case 'mouseleave':
      return E(E({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return 'The reducer action '.concat(JSON.stringify(t.type), ' is not supported.'), e;
  }
};
function yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yn(Object(n), !0).forEach(function (r) {
          qo(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function qo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Mo(e) {
  var t = [],
    n = (function (u, l) {
      var s,
        i = typeof window < 'u' ? window : {},
        m = u.plugins || [];
      return re(
        re(
          {
            debug: !1,
            openOnFocus: !1,
            placeholder: '',
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            environment: i,
            shouldPanelOpen: function (d) {
              return _t(d.state) > 0;
            },
            reshape: function (d) {
              return d.sources;
            },
          },
          u,
        ),
        {},
        {
          id: (s = u.id) !== null && s !== void 0 ? s : 'autocomplete-'.concat(ro++),
          plugins: m,
          initialState: re(
            {
              activeItemId: null,
              query: '',
              completion: null,
              collections: [],
              isOpen: !1,
              status: 'idle',
              context: {},
            },
            u.initialState,
          ),
          onStateChange: function (d) {
            var p;
            (p = u.onStateChange) === null || p === void 0 || p.call(u, d),
              m.forEach(function (v) {
                var h;
                return (h = v.onStateChange) === null || h === void 0 ? void 0 : h.call(v, d);
              });
          },
          onSubmit: function (d) {
            var p;
            (p = u.onSubmit) === null || p === void 0 || p.call(u, d),
              m.forEach(function (v) {
                var h;
                return (h = v.onSubmit) === null || h === void 0 ? void 0 : h.call(v, d);
              });
          },
          onReset: function (d) {
            var p;
            (p = u.onReset) === null || p === void 0 || p.call(u, d),
              m.forEach(function (v) {
                var h;
                return (h = v.onReset) === null || h === void 0 ? void 0 : h.call(v, d);
              });
          },
          getSources: function (d) {
            return Promise.all(
              []
                .concat(
                  po(
                    m.map(function (p) {
                      return p.getSources;
                    }),
                  ),
                  [u.getSources],
                )
                .filter(Boolean)
                .map(function (p) {
                  return co(p, d);
                }),
            )
              .then(function (p) {
                return Ie(p);
              })
              .then(function (p) {
                return p.map(function (v) {
                  return re(
                    re({}, v),
                    {},
                    {
                      onSelect: function (h) {
                        v.onSelect(h),
                          l.forEach(function (g) {
                            var y;
                            return (y = g.onSelect) === null || y === void 0
                              ? void 0
                              : y.call(g, h);
                          });
                      },
                      onActive: function (h) {
                        v.onActive(h),
                          l.forEach(function (g) {
                            var y;
                            return (y = g.onActive) === null || y === void 0
                              ? void 0
                              : y.call(g, h);
                          });
                      },
                    },
                  );
                });
              });
          },
          navigator: re(
            {
              navigate: function (d) {
                var p = d.itemUrl;
                i.location.assign(p);
              },
              navigateNewTab: function (d) {
                var p = d.itemUrl,
                  v = i.open(p, '_blank', 'noopener');
                v == null || v.focus();
              },
              navigateNewWindow: function (d) {
                var p = d.itemUrl;
                i.open(p, '_blank', 'noopener');
              },
            },
            u.navigator,
          ),
        },
      );
    })(e, t),
    r = so(Lo, n, function (u) {
      var l = u.prevState,
        s = u.state;
      n.onStateChange(ee({ prevState: l, state: s, refresh: c }, o));
    }),
    o = (function (u) {
      var l = u.store;
      return {
        setActiveItemId: function (s) {
          l.dispatch('setActiveItemId', s);
        },
        setQuery: function (s) {
          l.dispatch('setQuery', s);
        },
        setCollections: function (s) {
          var i = 0,
            m = s.map(function (d) {
              return Re(
                Re({}, d),
                {},
                {
                  items: Ie(d.items).map(function (p) {
                    return Re(Re({}, p), {}, { __autocomplete_id: i++ });
                  }),
                },
              );
            });
          l.dispatch('setCollections', m);
        },
        setIsOpen: function (s) {
          l.dispatch('setIsOpen', s);
        },
        setStatus: function (s) {
          l.dispatch('setStatus', s);
        },
        setContext: function (s) {
          l.dispatch('setContext', s);
        },
      };
    })({ store: r }),
    a = xo(ee({ props: n, refresh: c, store: r }, o));
  function c() {
    return ae(
      ee(
        {
          event: new Event('input'),
          nextState: { isOpen: r.getState().isOpen },
          props: n,
          query: r.getState().query,
          refresh: c,
          store: r,
        },
        o,
      ),
    );
  }
  return (
    n.plugins.forEach(function (u) {
      var l;
      return (l = u.subscribe) === null || l === void 0
        ? void 0
        : l.call(
            u,
            ee(
              ee({}, o),
              {},
              {
                refresh: c,
                onSelect: function (s) {
                  t.push({ onSelect: s });
                },
                onActive: function (s) {
                  t.push({ onActive: s });
                },
              },
            ),
          );
    }),
    (function (u) {
      var l,
        s,
        i = u.metadata,
        m = u.environment;
      if (
        !(
          (l = m.navigator) === null ||
          l === void 0 ||
          (s = l.userAgent) === null ||
          s === void 0
        ) &&
        s.includes('Algolia Crawler')
      ) {
        var d = m.document.createElement('meta'),
          p = m.document.querySelector('head');
        (d.name = 'algolia:metadata'),
          setTimeout(function () {
            (d.content = JSON.stringify(i)), p.appendChild(d);
          }, 0);
      }
    })({ metadata: Ro({ plugins: n.plugins, options: e }), environment: n.environment }),
    ee(ee({ refresh: c }, a), o)
  );
}
function Ho(e) {
  var t = e.translations,
    n = (t === void 0 ? {} : t).searchByText,
    r = n === void 0 ? 'Search by' : n;
  return f.createElement(
    'a',
    {
      href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
        window.location.hostname,
        '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch',
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    f.createElement('span', { className: 'DocSearch-Label' }, r),
    f.createElement(
      'svg',
      {
        width: '77',
        height: '19',
        'aria-label': 'Algolia',
        role: 'img',
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2196.2 500',
      },
      f.createElement(
        'defs',
        null,
        f.createElement('style', null, '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}'),
      ),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('rect', {
        className: 'cls-1',
        x: '1845.88',
        y: '104.73',
        width: '62.58',
        height: '277.9',
        rx: '5.9',
        ry: '5.9',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
      }),
      f.createElement('path', {
        className: 'cls-1',
        d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
      }),
    ),
  );
}
function Me(e) {
  return f.createElement(
    'svg',
    { width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img' },
    f.createElement(
      'g',
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '1.2',
      },
      e.children,
    ),
  );
}
function Uo(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.selectText,
    o = r === void 0 ? 'to select' : r,
    a = n.selectKeyAriaLabel,
    c = a === void 0 ? 'Enter key' : a,
    u = n.navigateText,
    l = u === void 0 ? 'to navigate' : u,
    s = n.navigateUpKeyAriaLabel,
    i = s === void 0 ? 'Arrow up' : s,
    m = n.navigateDownKeyAriaLabel,
    d = m === void 0 ? 'Arrow down' : m,
    p = n.closeText,
    v = p === void 0 ? 'to close' : p,
    h = n.closeKeyAriaLabel,
    g = h === void 0 ? 'Escape key' : h,
    y = n.searchByText,
    S = y === void 0 ? 'Search by' : y;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      'div',
      { className: 'DocSearch-Logo' },
      f.createElement(Ho, { translations: { searchByText: S } }),
    ),
    f.createElement(
      'ul',
      { className: 'DocSearch-Commands' },
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: c },
            f.createElement('path', { d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3' }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, o),
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: d },
            f.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }),
          ),
        ),
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: i },
            f.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, l),
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            Me,
            { ariaLabel: g },
            f.createElement('path', {
              d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
            }),
          ),
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, v),
      ),
    ),
  );
}
function Fo(e) {
  var t = e.hit,
    n = e.children;
  return f.createElement('a', { href: t.url }, n);
}
function Bo() {
  return f.createElement(
    'svg',
    { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' },
    f.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      f.createElement(
        'g',
        { transform: 'translate(1 1)', strokeWidth: '2' },
        f.createElement('circle', { strokeOpacity: '.3', cx: '18', cy: '18', r: '18' }),
        f.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          f.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 18 18',
            to: '360 18 18',
            dur: '1s',
            repeatCount: 'indefinite',
          }),
        ),
      ),
    ),
  );
}
function Vo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', { d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0' }),
      f.createElement('path', { d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13' }),
    ),
  );
}
function gt() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
function Wo() {
  return f.createElement(
    'svg',
    { className: 'DocSearch-Hit-Select-Icon', width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      {
        stroke: 'currentColor',
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      f.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
      f.createElement('path', { d: 'M8 17l-6-6 6-6' }),
    ),
  );
}
var Ko = function () {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
};
function zo(e) {
  switch (e.type) {
    case 'lvl1':
      return f.createElement(Ko, null);
    case 'content':
      return f.createElement($o, null);
    default:
      return f.createElement(Jo, null);
  }
}
function Jo() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
}
function $o() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
}
function _n() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    }),
  );
}
function Qo() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
    }),
  );
}
function Zo() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
    }),
  );
}
function Yo(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = n.titleText,
    o = r === void 0 ? 'Unable to fetch results' : r,
    a = n.helpText,
    c = a === void 0 ? 'You might want to check your network connection.' : a;
  return f.createElement(
    'div',
    { className: 'DocSearch-ErrorScreen' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement(Qo, null)),
    f.createElement('p', { className: 'DocSearch-Title' }, o),
    f.createElement('p', { className: 'DocSearch-Help' }, c),
  );
}
var Go = ['translations'];
function Xo(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return it(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
    })(e) ||
    (function (t, n) {
      if (t) {
        if (typeof t == 'string') return it(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          (r === 'Object' && t.constructor && (r = t.constructor.name), r === 'Map' || r === 'Set')
        )
          return Array.from(t);
        if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return it(t, n);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function it(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ea(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ta(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = ea(e, Go),
    o = n.noResultsText,
    a = o === void 0 ? 'No results for' : o,
    c = n.suggestedQueryText,
    u = c === void 0 ? 'Try searching for' : c,
    l = n.reportMissingResultsText,
    s = l === void 0 ? 'Believe this query should return results?' : l,
    i = n.reportMissingResultsLinkText,
    m = i === void 0 ? 'Let us know.' : i,
    d = r.state.context.searchSuggestions;
  return f.createElement(
    'div',
    { className: 'DocSearch-NoResults' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement(Zo, null)),
    f.createElement(
      'p',
      { className: 'DocSearch-Title' },
      a,
      ' "',
      f.createElement('strong', null, r.state.query),
      '"',
    ),
    d &&
      d.length > 0 &&
      f.createElement(
        'div',
        { className: 'DocSearch-NoResults-Prefill-List' },
        f.createElement('p', { className: 'DocSearch-Help' }, u, ':'),
        f.createElement(
          'ul',
          null,
          d.slice(0, 3).reduce(function (p, v) {
            return [].concat(Xo(p), [
              f.createElement(
                'li',
                { key: v },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Prefill',
                    key: v,
                    type: 'button',
                    onClick: function () {
                      r.setQuery(v.toLowerCase() + ' '), r.refresh(), r.inputRef.current.focus();
                    },
                  },
                  v,
                ),
              ),
            ]);
          }, []),
        ),
      ),
    r.getMissingResultsUrl &&
      f.createElement(
        'p',
        { className: 'DocSearch-Help' },
        ''.concat(s, ' '),
        f.createElement(
          'a',
          {
            href: r.getMissingResultsUrl({ query: r.state.query }),
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          m,
        ),
      ),
  );
}
var na = ['hit', 'attribute', 'tagName'];
function gn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gn(Object(n), !0).forEach(function (r) {
          ra(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ra(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function oa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function On(e, t) {
  return t.split('.').reduce(function (n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function oe(e) {
  var t = e.hit,
    n = e.attribute,
    r = e.tagName;
  return V(
    r === void 0 ? 'span' : r,
    bn(
      bn({}, oa(e, na)),
      {},
      {
        dangerouslySetInnerHTML: {
          __html: On(t, '_snippetResult.'.concat(n, '.value')) || On(t, n),
        },
      },
    ),
  );
}
function Sn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          c,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (i) {
          (s = !0), (c = i);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw c;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return wn(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return wn(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function wn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Je() {
  return (
    (Je =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Je.apply(this, arguments)
  );
}
function bt(e) {
  return e.collection && e.collection.items.length !== 0
    ? f.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        f.createElement('div', { className: 'DocSearch-Hit-source' }, e.title),
        f.createElement(
          'ul',
          e.getListProps(),
          e.collection.items.map(function (t, n) {
            return f.createElement(
              aa,
              Je({ key: [e.title, t.objectID].join(':'), item: t, index: n }, e),
            );
          }),
        ),
      )
    : null;
}
function aa(e) {
  var t = e.item,
    n = e.index,
    r = e.renderIcon,
    o = e.renderAction,
    a = e.getItemProps,
    c = e.onItemClick,
    u = e.collection,
    l = e.hitComponent,
    s = Sn(f.useState(!1), 2),
    i = s[0],
    m = s[1],
    d = Sn(f.useState(!1), 2),
    p = d[0],
    v = d[1],
    h = f.useRef(null),
    g = l;
  return f.createElement(
    'li',
    Je(
      {
        className: [
          'DocSearch-Hit',
          t.__docsearch_parent && 'DocSearch-Hit--Child',
          i && 'DocSearch-Hit--deleting',
          p && 'DocSearch-Hit--favoriting',
        ]
          .filter(Boolean)
          .join(' '),
        onTransitionEnd: function () {
          h.current && h.current();
        },
      },
      a({
        item: t,
        source: u.source,
        onClick: function () {
          c(t);
        },
      }),
    ),
    f.createElement(
      g,
      { hit: t },
      f.createElement(
        'div',
        { className: 'DocSearch-Hit-Container' },
        r({ item: t, index: n }),
        t.hierarchy[t.type] &&
          t.type === 'lvl1' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
            t.content &&
              f.createElement(oe, {
                className: 'DocSearch-Hit-path',
                hit: t,
                attribute: 'content',
              }),
          ),
        t.hierarchy[t.type] &&
          (t.type === 'lvl2' ||
            t.type === 'lvl3' ||
            t.type === 'lvl4' ||
            t.type === 'lvl5' ||
            t.type === 'lvl6') &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, {
              className: 'DocSearch-Hit-title',
              hit: t,
              attribute: 'hierarchy.'.concat(t.type),
            }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        t.type === 'content' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(oe, { className: 'DocSearch-Hit-title', hit: t, attribute: 'content' }),
            f.createElement(oe, {
              className: 'DocSearch-Hit-path',
              hit: t,
              attribute: 'hierarchy.lvl1',
            }),
          ),
        o({
          item: t,
          runDeleteTransition: function (y) {
            m(!0), (h.current = y);
          },
          runFavoriteTransition: function (y) {
            v(!0), (h.current = y);
          },
        }),
      ),
    ),
  );
}
function En(e, t) {
  return e.reduce(function (n, r) {
    var o = t(r);
    return n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n;
  }, {});
}
function jn(e) {
  return e;
}
function ca() {}
var sr = /(<mark>|<\/mark>)/g,
  ia = RegExp(sr.source);
function fr(e) {
  var t,
    n,
    r,
    o,
    a,
    c = e;
  if (!c.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
  var u = (
    (c.__docsearch_parent
      ? (t = c.__docsearch_parent) === null ||
        t === void 0 ||
        (n = t._highlightResult) === null ||
        n === void 0 ||
        (r = n.hierarchy) === null ||
        r === void 0
        ? void 0
        : r.lvl0
      : (o = e._highlightResult) === null ||
        o === void 0 ||
        (a = o.hierarchy) === null ||
        a === void 0
      ? void 0
      : a.lvl0) || {}
  ).value;
  return u && ia.test(u) ? u.replace(sr, '') : u;
}
function Ot() {
  return (
    (Ot =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ot.apply(this, arguments)
  );
}
function ua(e) {
  return f.createElement(
    'div',
    { className: 'DocSearch-Dropdown-Container' },
    e.state.collections.map(function (t) {
      if (t.items.length === 0) return null;
      var n = fr(t.items[0]);
      return f.createElement(
        bt,
        Ot({}, e, {
          key: t.source.sourceId,
          title: n,
          collection: t,
          renderIcon: function (r) {
            var o,
              a = r.item,
              c = r.index;
            return f.createElement(
              f.Fragment,
              null,
              a.__docsearch_parent &&
                f.createElement(
                  'svg',
                  { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' },
                  f.createElement(
                    'g',
                    {
                      stroke: 'currentColor',
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                    a.__docsearch_parent !==
                      ((o = t.items[c + 1]) === null || o === void 0
                        ? void 0
                        : o.__docsearch_parent)
                      ? f.createElement('path', { d: 'M8 6v21M20 27H8.3' })
                      : f.createElement('path', { d: 'M8 6v42M20 27H8.3' }),
                  ),
                ),
              f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(zo, { type: a.type }),
              ),
            );
          },
          renderAction: function () {
            return f.createElement(
              'div',
              { className: 'DocSearch-Hit-action' },
              f.createElement(Wo, null),
            );
          },
        }),
      );
    }),
    e.resultsFooterComponent &&
      f.createElement(
        'section',
        { className: 'DocSearch-HitsFooter' },
        f.createElement(e.resultsFooterComponent, { state: e.state }),
      ),
  );
}
var la = ['translations'];
function $e() {
  return (
    ($e =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    $e.apply(this, arguments)
  );
}
function sa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function fa(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = sa(e, la),
    o = n.recentSearchesTitle,
    a = o === void 0 ? 'Recent' : o,
    c = n.noRecentSearchesText,
    u = c === void 0 ? 'No recent searches' : c,
    l = n.saveRecentSearchButtonTitle,
    s = l === void 0 ? 'Save this search' : l,
    i = n.removeRecentSearchButtonTitle,
    m = i === void 0 ? 'Remove this search from history' : i,
    d = n.favoriteSearchesTitle,
    p = d === void 0 ? 'Favorite' : d,
    v = n.removeFavoriteSearchButtonTitle,
    h = v === void 0 ? 'Remove this search from favorites' : v;
  return r.state.status === 'idle' && r.hasCollections === !1
    ? r.disableUserPersonalization
      ? null
      : f.createElement(
          'div',
          { className: 'DocSearch-StartScreen' },
          f.createElement('p', { className: 'DocSearch-Help' }, u),
        )
    : r.hasCollections === !1
    ? null
    : f.createElement(
        'div',
        { className: 'DocSearch-Dropdown-Container' },
        f.createElement(
          bt,
          $e({}, r, {
            title: a,
            collection: r.state.collections[0],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(Vo, null),
              );
            },
            renderAction: function (g) {
              var y = g.item,
                S = g.runFavoriteTransition,
                O = g.runDeleteTransition;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: s,
                      type: 'submit',
                      onClick: function (_) {
                        _.preventDefault(),
                          _.stopPropagation(),
                          S(function () {
                            r.favoriteSearches.add(y), r.recentSearches.remove(y), r.refresh();
                          });
                      },
                    },
                    f.createElement(_n, null),
                  ),
                ),
                f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: m,
                      type: 'submit',
                      onClick: function (_) {
                        _.preventDefault(),
                          _.stopPropagation(),
                          O(function () {
                            r.recentSearches.remove(y), r.refresh();
                          });
                      },
                    },
                    f.createElement(gt, null),
                  ),
                ),
              );
            },
          }),
        ),
        f.createElement(
          bt,
          $e({}, r, {
            title: p,
            collection: r.state.collections[1],
            renderIcon: function () {
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-icon' },
                f.createElement(_n, null),
              );
            },
            renderAction: function (g) {
              var y = g.item,
                S = g.runDeleteTransition;
              return f.createElement(
                'div',
                { className: 'DocSearch-Hit-action' },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Hit-action-button',
                    title: h,
                    type: 'submit',
                    onClick: function (O) {
                      O.preventDefault(),
                        O.stopPropagation(),
                        S(function () {
                          r.favoriteSearches.remove(y), r.refresh();
                        });
                    },
                  },
                  f.createElement(gt, null),
                ),
              );
            },
          }),
        ),
      );
}
var pa = ['translations'];
function Qe() {
  return (
    (Qe =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Qe.apply(this, arguments)
  );
}
function ma(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var da = f.memo(
    function (e) {
      var t = e.translations,
        n = t === void 0 ? {} : t,
        r = ma(e, pa);
      if (r.state.status === 'error')
        return f.createElement(Yo, { translations: n == null ? void 0 : n.errorScreen });
      var o = r.state.collections.some(function (a) {
        return a.items.length > 0;
      });
      return r.state.query
        ? o === !1
          ? f.createElement(ta, Qe({}, r, { translations: n == null ? void 0 : n.noResultsScreen }))
          : f.createElement(ua, r)
        : f.createElement(
            fa,
            Qe({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }),
          );
    },
    function (e, t) {
      return t.state.status === 'loading' || t.state.status === 'stalled';
    },
  ),
  ha = ['translations'];
function Ze() {
  return (
    (Ze =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ze.apply(this, arguments)
  );
}
function va(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ya(e) {
  var t = e.translations,
    n = t === void 0 ? {} : t,
    r = va(e, ha),
    o = n.resetButtonTitle,
    a = o === void 0 ? 'Clear the query' : o,
    c = n.resetButtonAriaLabel,
    u = c === void 0 ? 'Clear the query' : c,
    l = n.cancelButtonText,
    s = l === void 0 ? 'Cancel' : l,
    i = n.cancelButtonAriaLabel,
    m = i === void 0 ? 'Cancel' : i,
    d = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return (
    f.useEffect(
      function () {
        r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
      },
      [r.autoFocus, r.inputRef],
    ),
    f.useEffect(
      function () {
        r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
      },
      [r.isFromSelection, r.inputRef],
    ),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(
        'form',
        {
          className: 'DocSearch-Form',
          onSubmit: function (p) {
            p.preventDefault();
          },
          onReset: d,
        },
        f.createElement(
          'label',
          Ze({ className: 'DocSearch-MagnifierLabel' }, r.getLabelProps()),
          f.createElement(cr, null),
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-LoadingIndicator' },
          f.createElement(Bo, null),
        ),
        f.createElement(
          'input',
          Ze(
            { className: 'DocSearch-Input', ref: r.inputRef },
            r.getInputProps({
              inputElement: r.inputRef.current,
              autoFocus: r.autoFocus,
              maxLength: 64,
            }),
          ),
        ),
        f.createElement(
          'button',
          {
            type: 'reset',
            title: a,
            className: 'DocSearch-Reset',
            'aria-label': u,
            hidden: !r.state.query,
          },
          f.createElement(gt, null),
        ),
      ),
      f.createElement(
        'button',
        { className: 'DocSearch-Cancel', type: 'reset', 'aria-label': m, onClick: r.onClose },
        s,
      ),
    )
  );
}
var _a = ['_highlightResult', '_snippetResult'];
function ga(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function ba(e) {
  return (function () {
    var t = '__TEST_KEY__';
    try {
      return localStorage.setItem(t, ''), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  })() === !1
    ? {
        setItem: function () {},
        getItem: function () {
          return [];
        },
      }
    : {
        setItem: function (t) {
          return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
          var t = window.localStorage.getItem(e);
          return t ? JSON.parse(t) : [];
        },
      };
}
function Pn(e) {
  var t = e.key,
    n = e.limit,
    r = n === void 0 ? 5 : n,
    o = ba(t),
    a = o.getItem().slice(0, r);
  return {
    add: function (c) {
      var u = c,
        l = (u._highlightResult, u._snippetResult, ga(u, _a)),
        s = a.findIndex(function (i) {
          return i.objectID === l.objectID;
        });
      s > -1 && a.splice(s, 1), a.unshift(l), (a = a.slice(0, r)), o.setItem(a);
    },
    remove: function (c) {
      (a = a.filter(function (u) {
        return u.objectID !== c.objectID;
      })),
        o.setItem(a);
    },
    getAll: function () {
      return a;
    },
  };
}
var Oa = ['facetName', 'facetQuery'];
function Sa(e) {
  var t,
    n = 'algoliasearch-client-js-'.concat(e.key),
    r = function () {
      return t === void 0 && (t = e.localStorage || window.localStorage), t;
    },
    o = function () {
      return JSON.parse(r().getItem(n) || '{}');
    };
  return {
    get: function (a, c) {
      var u =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          var l = JSON.stringify(a),
            s = o()[l];
          return Promise.all([s || c(), s !== void 0]);
        })
        .then(function (l) {
          var s = Ve(l, 2),
            i = s[0],
            m = s[1];
          return Promise.all([i, m || u.miss(i)]);
        })
        .then(function (l) {
          return Ve(l, 1)[0];
        });
    },
    set: function (a, c) {
      return Promise.resolve().then(function () {
        var u = o();
        return (u[JSON.stringify(a)] = c), r().setItem(n, JSON.stringify(u)), c;
      });
    },
    delete: function (a) {
      return Promise.resolve().then(function () {
        var c = o();
        delete c[JSON.stringify(a)], r().setItem(n, JSON.stringify(c));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        r().removeItem(n);
      });
    },
  };
}
function be(e) {
  var t = We(e.caches),
    n = t.shift();
  return n === void 0
    ? {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (c) {
              return Promise.all([c, a.miss(c)]);
            })
            .then(function (c) {
              return Ve(c, 1)[0];
            });
        },
        set: function (r, o) {
          return Promise.resolve(o);
        },
        delete: function (r) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (r, o) {
          var a =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return n.get(r, o, a).catch(function () {
            return be({ caches: t }).get(r, o, a);
          });
        },
        set: function (r, o) {
          return n.set(r, o).catch(function () {
            return be({ caches: t }).set(r, o);
          });
        },
        delete: function (r) {
          return n.delete(r).catch(function () {
            return be({ caches: t }).delete(r);
          });
        },
        clear: function () {
          return n.clear().catch(function () {
            return be({ caches: t }).clear();
          });
        },
      };
}
function ut() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 },
    t = {};
  return {
    get: function (n, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        a = JSON.stringify(n);
      if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
      var c = r(),
        u =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return c
        .then(function (l) {
          return u(l);
        })
        .then(function () {
          return c;
        });
    },
    set: function (n, r) {
      return (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r), Promise.resolve(r);
    },
    delete: function (n) {
      return delete t[JSON.stringify(n)], Promise.resolve();
    },
    clear: function () {
      return (t = {}), Promise.resolve();
    },
  };
}
function wa(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)),
      r = e[t];
    (e[t] = e[n]), (e[n] = r);
  }
  return e;
}
function pr(e, t) {
  return (
    t &&
      Object.keys(t).forEach(function (n) {
        e[n] = t[n](e);
      }),
    e
  );
}
function Ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function () {
    return encodeURIComponent(n[o++]);
  });
}
var Be = { WithinQueryParameters: 0, WithinHeaders: 1 };
function In(e, t) {
  var n = e || {},
    r = n.data || {};
  return (
    Object.keys(n).forEach(function (o) {
      ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(o) === -1 &&
        (r[o] = n[o]);
    }),
    {
      data: Object.entries(r).length > 0 ? r : void 0,
      timeout: n.timeout || t,
      headers: n.headers || {},
      queryParameters: n.queryParameters || {},
      cacheable: n.cacheable,
    }
  );
}
var ie = { Read: 1, Write: 2, Any: 3 },
  mr = 1,
  Ea = 2,
  dr = 3;
function hr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mr;
  return P(P({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function vr(e) {
  return typeof e == 'string'
    ? { protocol: 'https', url: e, accept: ie.Any }
    : { protocol: e.protocol || 'https', url: e.url, accept: e.accept || ie.Any };
}
var kn = 'GET',
  Ge = 'POST';
function ja(e, t) {
  return Promise.all(
    t.map(function (n) {
      return e.get(n, function () {
        return Promise.resolve(hr(n));
      });
    }),
  ).then(function (n) {
    var r = n.filter(function (c) {
        return (function (u) {
          return u.status === mr || Date.now() - u.lastUpdate > 12e4;
        })(c);
      }),
      o = n.filter(function (c) {
        return (function (u) {
          return u.status === dr && Date.now() - u.lastUpdate <= 12e4;
        })(c);
      }),
      a = [].concat(We(r), We(o));
    return {
      getTimeout: function (c, u) {
        return (o.length === 0 && c === 0 ? 1 : o.length + 3 + c) * u;
      },
      statelessHosts:
        a.length > 0
          ? a.map(function (c) {
              return vr(c);
            })
          : t,
    };
  });
}
function Dn(e, t, n, r) {
  var o = [],
    a = (function (d, p) {
      if (!(d.method === kn || (d.data === void 0 && p.data === void 0))) {
        var v = Array.isArray(d.data) ? d.data : P(P({}, d.data), p.data);
        return JSON.stringify(v);
      }
    })(n, r),
    c = (function (d, p) {
      var v = P(P({}, d.headers), p.headers),
        h = {};
      return (
        Object.keys(v).forEach(function (g) {
          var y = v[g];
          h[g.toLowerCase()] = y;
        }),
        h
      );
    })(e, r),
    u = n.method,
    l = n.method !== kn ? {} : P(P({}, n.data), r.data),
    s = P(P(P({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), l), r.queryParameters),
    i = 0,
    m = function d(p, v) {
      var h = p.pop();
      if (h === void 0)
        throw {
          name: 'RetryError',
          message:
            'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
          transporterStackTrace: Cn(o),
        };
      var g = {
          data: a,
          headers: c,
          method: u,
          url: Ia(h, n.path, s),
          connectTimeout: v(i, e.timeouts.connect),
          responseTimeout: v(i, r.timeout),
        },
        y = function (O) {
          var _ = { request: g, response: O, host: h, triesLeft: p.length };
          return o.push(_), _;
        },
        S = {
          onSucess: function (O) {
            return (function (_) {
              try {
                return JSON.parse(_.content);
              } catch (b) {
                throw (function (I, N) {
                  return { name: 'DeserializationError', message: I, response: N };
                })(b.message, _);
              }
            })(O);
          },
          onRetry: function (O) {
            var _ = y(O);
            return (
              O.isTimedOut && i++,
              Promise.all([
                e.logger.info('Retryable failure', _r(_)),
                e.hostsCache.set(h, hr(h, O.isTimedOut ? dr : Ea)),
              ]).then(function () {
                return d(p, v);
              })
            );
          },
          onFail: function (O) {
            throw (
              (y(O),
              (function (_, b) {
                var I = _.content,
                  N = _.status,
                  A = I;
                try {
                  A = JSON.parse(I).message;
                } catch {}
                return (function (k, R, L) {
                  return { name: 'ApiError', message: k, status: R, transporterStackTrace: L };
                })(A, N, b);
              })(O, Cn(o)))
            );
          },
        };
      return e.requester.send(g).then(function (O) {
        return (function (_, b) {
          return (function (I) {
            var N = I.status;
            return (
              I.isTimedOut ||
              (function (A) {
                var k = A.isTimedOut,
                  R = A.status;
                return !k && ~~R == 0;
              })(I) ||
              (~~(N / 100) != 2 && ~~(N / 100) != 4)
            );
          })(_)
            ? b.onRetry(_)
            : ~~(_.status / 100) == 2
            ? b.onSucess(_)
            : b.onFail(_);
        })(O, S);
      });
    };
  return ja(e.hostsCache, t).then(function (d) {
    return m(We(d.statelessHosts).reverse(), d.getTimeout);
  });
}
function Pa(e) {
  var t = {
    value: 'Algolia for JavaScript ('.concat(e, ')'),
    add: function (n) {
      var r = '; '
        .concat(n.segment)
        .concat(n.version !== void 0 ? ' ('.concat(n.version, ')') : '');
      return t.value.indexOf(r) === -1 && (t.value = ''.concat(t.value).concat(r)), t;
    },
  };
  return t;
}
function Ia(e, t, n) {
  var r = yr(n),
    o = ''
      .concat(e.protocol, '://')
      .concat(e.url, '/')
      .concat(t.charAt(0) === '/' ? t.substr(1) : t);
  return r.length && (o += '?'.concat(r)), o;
}
function yr(e) {
  return Object.keys(e)
    .map(function (t) {
      return Ye(
        '%s=%s',
        t,
        ((n = e[t]),
        Object.prototype.toString.call(n) === '[object Object]' ||
        Object.prototype.toString.call(n) === '[object Array]'
          ? JSON.stringify(e[t])
          : e[t]),
      );
      var n;
    })
    .join('&');
}
function Cn(e) {
  return e.map(function (t) {
    return _r(t);
  });
}
function _r(e) {
  var t = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
  return P(
    P({}, e),
    {},
    { request: P(P({}, e.request), {}, { headers: P(P({}, e.request.headers), t) }) },
  );
}
var ka = function (e) {
    var t = e.appId,
      n = (function (a, c, u) {
        var l = { 'x-algolia-api-key': u, 'x-algolia-application-id': c };
        return {
          headers: function () {
            return a === Be.WithinHeaders ? l : {};
          },
          queryParameters: function () {
            return a === Be.WithinQueryParameters ? l : {};
          },
        };
      })(e.authMode !== void 0 ? e.authMode : Be.WithinHeaders, t, e.apiKey),
      r = (function (a) {
        var c = a.hostsCache,
          u = a.logger,
          l = a.requester,
          s = a.requestsCache,
          i = a.responsesCache,
          m = a.timeouts,
          d = a.userAgent,
          p = a.hosts,
          v = a.queryParameters,
          h = {
            hostsCache: c,
            logger: u,
            requester: l,
            requestsCache: s,
            responsesCache: i,
            timeouts: m,
            userAgent: d,
            headers: a.headers,
            queryParameters: v,
            hosts: p.map(function (g) {
              return vr(g);
            }),
            read: function (g, y) {
              var S = In(y, h.timeouts.read),
                O = function () {
                  return Dn(
                    h,
                    h.hosts.filter(function (b) {
                      return (b.accept & ie.Read) != 0;
                    }),
                    g,
                    S,
                  );
                };
              if ((S.cacheable !== void 0 ? S.cacheable : g.cacheable) !== !0) return O();
              var _ = {
                request: g,
                mappedRequestOptions: S,
                transporter: { queryParameters: h.queryParameters, headers: h.headers },
              };
              return h.responsesCache.get(
                _,
                function () {
                  return h.requestsCache.get(_, function () {
                    return h.requestsCache
                      .set(_, O())
                      .then(
                        function (b) {
                          return Promise.all([h.requestsCache.delete(_), b]);
                        },
                        function (b) {
                          return Promise.all([h.requestsCache.delete(_), Promise.reject(b)]);
                        },
                      )
                      .then(function (b) {
                        var I = Ve(b, 2);
                        return I[0], I[1];
                      });
                  });
                },
                {
                  miss: function (b) {
                    return h.responsesCache.set(_, b);
                  },
                },
              );
            },
            write: function (g, y) {
              return Dn(
                h,
                h.hosts.filter(function (S) {
                  return (S.accept & ie.Write) != 0;
                }),
                g,
                In(y, h.timeouts.write),
              );
            },
          };
        return h;
      })(
        P(
          P(
            {
              hosts: [
                { url: ''.concat(t, '-dsn.algolia.net'), accept: ie.Read },
                { url: ''.concat(t, '.algolia.net'), accept: ie.Write },
              ].concat(
                wa([
                  { url: ''.concat(t, '-1.algolianet.com') },
                  { url: ''.concat(t, '-2.algolianet.com') },
                  { url: ''.concat(t, '-3.algolianet.com') },
                ]),
              ),
            },
            e,
          ),
          {},
          {
            headers: P(
              P(P({}, n.headers()), { 'content-type': 'application/x-www-form-urlencoded' }),
              e.headers,
            ),
            queryParameters: P(P({}, n.queryParameters()), e.queryParameters),
          },
        ),
      ),
      o = {
        transporter: r,
        appId: t,
        addAlgoliaAgent: function (a, c) {
          r.userAgent.add({ segment: a, version: c });
        },
        clearCache: function () {
          return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(
            function () {},
          );
        },
      };
    return pr(o, e.methods);
  },
  gr = function (e) {
    return function (t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = { transporter: e.transporter, appId: e.appId, indexName: t };
      return pr(r, n.methods);
    };
  },
  An = function (e) {
    return function (t, n) {
      var r = t.map(function (o) {
        return P(P({}, o), {}, { params: yr(o.params || {}) });
      });
      return e.transporter.read(
        { method: Ge, path: '1/indexes/*/queries', data: { requests: r }, cacheable: !0 },
        n,
      );
    };
  },
  xn = function (e) {
    return function (t, n) {
      return Promise.all(
        t.map(function (r) {
          var o = r.params,
            a = o.facetName,
            c = o.facetQuery,
            u = Tr(o, Oa);
          return gr(e)(r.indexName, { methods: { searchForFacetValues: br } }).searchForFacetValues(
            a,
            c,
            P(P({}, n), u),
          );
        }),
      );
    };
  },
  Da = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/answers/%s/prediction', e.indexName),
          data: { query: t, queryLanguages: n },
          cacheable: !0,
        },
        r,
      );
    };
  },
  Ca = function (e) {
    return function (t, n) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/query', e.indexName),
          data: { query: t },
          cacheable: !0,
        },
        n,
      );
    };
  },
  br = function (e) {
    return function (t, n, r) {
      return e.transporter.read(
        {
          method: Ge,
          path: Ye('1/indexes/%s/facets/%s/query', e.indexName, t),
          data: { facetQuery: n },
          cacheable: !0,
        },
        r,
      );
    };
  },
  Aa = 1,
  xa = 2,
  Na = 3;
function Or(e, t, n) {
  var r,
    o = {
      appId: e,
      apiKey: t,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: {
        send: function (a) {
          return new Promise(function (c) {
            var u = new XMLHttpRequest();
            u.open(a.method, a.url, !0),
              Object.keys(a.headers).forEach(function (m) {
                return u.setRequestHeader(m, a.headers[m]);
              });
            var l,
              s = function (m, d) {
                return setTimeout(function () {
                  u.abort(), c({ status: 0, content: d, isTimedOut: !0 });
                }, 1e3 * m);
              },
              i = s(a.connectTimeout, 'Connection timeout');
            (u.onreadystatechange = function () {
              u.readyState > u.OPENED &&
                l === void 0 &&
                (clearTimeout(i), (l = s(a.responseTimeout, 'Socket timeout')));
            }),
              (u.onerror = function () {
                u.status === 0 &&
                  (clearTimeout(i),
                  clearTimeout(l),
                  c({
                    content: u.responseText || 'Network request failed',
                    status: u.status,
                    isTimedOut: !1,
                  }));
              }),
              (u.onload = function () {
                clearTimeout(i),
                  clearTimeout(l),
                  c({ content: u.responseText, status: u.status, isTimedOut: !1 });
              }),
              u.send(a.data);
          });
        },
      },
      logger:
        ((r = Na),
        {
          debug: function (a, c) {
            return Aa >= r && console.debug(a, c), Promise.resolve();
          },
          info: function (a, c) {
            return xa >= r && console.info(a, c), Promise.resolve();
          },
          error: function (a, c) {
            return console.error(a, c), Promise.resolve();
          },
        }),
      responsesCache: ut(),
      requestsCache: ut({ serializable: !1 }),
      hostsCache: be({ caches: [Sa({ key: ''.concat('4.8.5', '-').concat(e) }), ut()] }),
      userAgent: Pa('4.8.5').add({ segment: 'Browser', version: 'lite' }),
      authMode: Be.WithinQueryParameters,
    };
  return ka(
    P(
      P(P({}, o), n),
      {},
      {
        methods: {
          search: An,
          searchForFacetValues: xn,
          multipleQueries: An,
          multipleSearchForFacetValues: xn,
          initIndex: function (a) {
            return function (c) {
              return gr(a)(c, {
                methods: { search: Ca, searchForFacetValues: br, findAnswers: Da },
              });
            };
          },
        },
      },
    ),
  );
}
Or.version = '4.8.5';
var Ra = ['footer', 'searchBox'];
function we() {
  return (
    (we =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    we.apply(this, arguments)
  );
}
function Nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nn(Object(n), !0).forEach(function (r) {
          Ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nn(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ta(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function La(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          c,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (i) {
          (s = !0), (c = i);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw c;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Rn(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Rn(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qa(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = (function (c, u) {
      if (c == null) return {};
      var l,
        s,
        i = {},
        m = Object.keys(c);
      for (s = 0; s < m.length; s++) (l = m[s]), u.indexOf(l) >= 0 || (i[l] = c[l]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Ma(e) {
  var t = e.appId,
    n = e.apiKey,
    r = e.indexName,
    o = e.placeholder,
    a = o === void 0 ? 'Search docs' : o,
    c = e.searchParameters,
    u = e.onClose,
    l = u === void 0 ? ca : u,
    s = e.transformItems,
    i = s === void 0 ? jn : s,
    m = e.hitComponent,
    d = m === void 0 ? Fo : m,
    p = e.resultsFooterComponent,
    v =
      p === void 0
        ? function () {
            return null;
          }
        : p,
    h = e.navigator,
    g = e.initialScrollY,
    y = g === void 0 ? 0 : g,
    S = e.transformSearchClient,
    O = S === void 0 ? jn : S,
    _ = e.disableUserPersonalization,
    b = _ !== void 0 && _,
    I = e.initialQuery,
    N = I === void 0 ? '' : I,
    A = e.translations,
    k = A === void 0 ? {} : A,
    R = e.getMissingResultsUrl,
    L = k.footer,
    B = k.searchBox,
    q = qa(k, Ra),
    De = La(
      f.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: 'idle',
      }),
      2,
    ),
    Y = De[0],
    Xe = De[1],
    se = f.useRef(null),
    et = f.useRef(null),
    Pt = f.useRef(null),
    Ce = f.useRef(null),
    fe = f.useRef(null),
    $ = f.useRef(10),
    It = f.useRef(typeof window < 'u' ? window.getSelection().toString().slice(0, 64) : '').current,
    G = f.useRef(N || It).current,
    kt = (function (j, D, M) {
      return f.useMemo(
        function () {
          var H = Or(j, D);
          return (
            H.addAlgoliaAgent('docsearch', '3.3.2'),
            /docsearch.js \(.*\)/.test(H.transporter.userAgent.value) === !1 &&
              H.addAlgoliaAgent('docsearch-react', '3.3.2'),
            M(H)
          );
        },
        [j, D, M],
      );
    })(t, n, O),
    te = f.useRef(Pn({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(r), limit: 10 })).current,
    pe = f.useRef(
      Pn({
        key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(r),
        limit: te.getAll().length === 0 ? 7 : 4,
      }),
    ).current,
    me = f.useCallback(
      function (j) {
        if (!b) {
          var D = j.type === 'content' ? j.__docsearch_parent : j;
          D &&
            te.getAll().findIndex(function (M) {
              return M.objectID === D.objectID;
            }) === -1 &&
            pe.add(D);
        }
      },
      [te, pe, b],
    ),
    de = f.useMemo(
      function () {
        return Mo({
          id: 'docsearch',
          defaultActiveItemId: 0,
          placeholder: a,
          openOnFocus: !0,
          initialState: { query: G, context: { searchSuggestions: [] } },
          navigator: h,
          onStateChange: function (j) {
            Xe(j.state);
          },
          getSources: function (j) {
            var D = j.query,
              M = j.state,
              H = j.setContext,
              Q = j.setStatus;
            return D
              ? kt
                  .search([
                    {
                      query: D,
                      indexName: r,
                      params: lt(
                        {
                          attributesToRetrieve: [
                            'hierarchy.lvl0',
                            'hierarchy.lvl1',
                            'hierarchy.lvl2',
                            'hierarchy.lvl3',
                            'hierarchy.lvl4',
                            'hierarchy.lvl5',
                            'hierarchy.lvl6',
                            'content',
                            'type',
                            'url',
                          ],
                          attributesToSnippet: [
                            'hierarchy.lvl1:'.concat($.current),
                            'hierarchy.lvl2:'.concat($.current),
                            'hierarchy.lvl3:'.concat($.current),
                            'hierarchy.lvl4:'.concat($.current),
                            'hierarchy.lvl5:'.concat($.current),
                            'hierarchy.lvl6:'.concat($.current),
                            'content:'.concat($.current),
                          ],
                          snippetEllipsisText: '…',
                          highlightPreTag: '<mark>',
                          highlightPostTag: '</mark>',
                          hitsPerPage: 20,
                        },
                        c,
                      ),
                    },
                  ])
                  .catch(function (C) {
                    throw (C.name === 'RetryError' && Q('error'), C);
                  })
                  .then(function (C) {
                    var U = C.results[0],
                      F = U.hits,
                      Er = U.nbHits,
                      tt = En(F, function (nt) {
                        return fr(nt);
                      });
                    return (
                      M.context.searchSuggestions.length < Object.keys(tt).length &&
                        H({ searchSuggestions: Object.keys(tt) }),
                      H({ nbHits: Er }),
                      Object.values(tt).map(function (nt, jr) {
                        return {
                          sourceId: 'hits'.concat(jr),
                          onSelect: function (K) {
                            var he = K.item,
                              ne = K.event;
                            me(he), ne.shiftKey || ne.ctrlKey || ne.metaKey || l();
                          },
                          getItemUrl: function (K) {
                            return K.item.url;
                          },
                          getItems: function () {
                            return Object.values(
                              En(nt, function (K) {
                                return K.hierarchy.lvl1;
                              }),
                            )
                              .map(i)
                              .map(function (K) {
                                return K.map(function (he) {
                                  return lt(
                                    lt({}, he),
                                    {},
                                    {
                                      __docsearch_parent:
                                        he.type !== 'lvl1' &&
                                        K.find(function (ne) {
                                          return (
                                            ne.type === 'lvl1' &&
                                            ne.hierarchy.lvl1 === he.hierarchy.lvl1
                                          );
                                        }),
                                    },
                                  );
                                });
                              })
                              .flat();
                          },
                        };
                      })
                    );
                  })
              : b
              ? []
              : [
                  {
                    sourceId: 'recentSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || l();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return pe.getAll();
                    },
                  },
                  {
                    sourceId: 'favoriteSearches',
                    onSelect: function (C) {
                      var U = C.item,
                        F = C.event;
                      me(U), F.shiftKey || F.ctrlKey || F.metaKey || l();
                    },
                    getItemUrl: function (C) {
                      return C.item.url;
                    },
                    getItems: function () {
                      return te.getAll();
                    },
                  },
                ];
          },
        });
      },
      [r, c, kt, l, pe, te, me, G, a, h, i, b],
    ),
    Sr = de.getEnvironmentProps,
    wr = de.getRootProps,
    Dt = de.refresh;
  return (
    (function (j) {
      var D = j.getEnvironmentProps,
        M = j.panelElement,
        H = j.formElement,
        Q = j.inputElement;
      f.useEffect(
        function () {
          if (M && H && Q) {
            var C = D({ panelElement: M, formElement: H, inputElement: Q }),
              U = C.onTouchStart,
              F = C.onTouchMove;
            return (
              window.addEventListener('touchstart', U),
              window.addEventListener('touchmove', F),
              function () {
                window.removeEventListener('touchstart', U),
                  window.removeEventListener('touchmove', F);
              }
            );
          }
        },
        [D, M, H, Q],
      );
    })({
      getEnvironmentProps: Sr,
      panelElement: Ce.current,
      formElement: Pt.current,
      inputElement: fe.current,
    }),
    (function (j) {
      var D = j.container;
      f.useEffect(
        function () {
          if (D) {
            var M = D.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])',
              ),
              H = M[0],
              Q = M[M.length - 1];
            return (
              D.addEventListener('keydown', C),
              function () {
                D.removeEventListener('keydown', C);
              }
            );
          }
          function C(U) {
            U.key === 'Tab' &&
              (U.shiftKey
                ? document.activeElement === H && (U.preventDefault(), Q.focus())
                : document.activeElement === Q && (U.preventDefault(), H.focus()));
          }
        },
        [D],
      );
    })({ container: se.current }),
    f.useEffect(function () {
      return (
        document.body.classList.add('DocSearch--active'),
        function () {
          var j, D;
          document.body.classList.remove('DocSearch--active'),
            (j = (D = window).scrollTo) === null || j === void 0 || j.call(D, 0, y);
        }
      );
    }, []),
    f.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && ($.current = 5);
    }, []),
    f.useEffect(
      function () {
        Ce.current && (Ce.current.scrollTop = 0);
      },
      [Y.query],
    ),
    f.useEffect(
      function () {
        G.length > 0 && (Dt(), fe.current && fe.current.focus());
      },
      [G, Dt],
    ),
    f.useEffect(function () {
      function j() {
        if (et.current) {
          var D = 0.01 * window.innerHeight;
          et.current.style.setProperty('--docsearch-vh', ''.concat(D, 'px'));
        }
      }
      return (
        j(),
        window.addEventListener('resize', j),
        function () {
          window.removeEventListener('resize', j);
        }
      );
    }, []),
    f.createElement(
      'div',
      we({ ref: se }, wr({ 'aria-expanded': !0 }), {
        className: [
          'DocSearch',
          'DocSearch-Container',
          Y.status === 'stalled' && 'DocSearch-Container--Stalled',
          Y.status === 'error' && 'DocSearch-Container--Errored',
        ]
          .filter(Boolean)
          .join(' '),
        role: 'button',
        tabIndex: 0,
        onMouseDown: function (j) {
          j.target === j.currentTarget && l();
        },
      }),
      f.createElement(
        'div',
        { className: 'DocSearch-Modal', ref: et },
        f.createElement(
          'header',
          { className: 'DocSearch-SearchBar', ref: Pt },
          f.createElement(
            ya,
            we({}, de, {
              state: Y,
              autoFocus: G.length === 0,
              inputRef: fe,
              isFromSelection: Boolean(G) && G === It,
              translations: B,
              onClose: l,
            }),
          ),
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-Dropdown', ref: Ce },
          f.createElement(
            da,
            we({}, de, {
              indexName: r,
              state: Y,
              hitComponent: d,
              resultsFooterComponent: v,
              disableUserPersonalization: b,
              recentSearches: pe,
              favoriteSearches: te,
              inputRef: fe,
              translations: q,
              getMissingResultsUrl: R,
              onItemClick: function (j) {
                me(j), l();
              },
            }),
          ),
        ),
        f.createElement(
          'footer',
          { className: 'DocSearch-Footer' },
          f.createElement(Uo, { translations: L }),
        ),
      ),
    )
  );
}
function St() {
  return (
    (St =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    St.apply(this, arguments)
  );
}
function Tn(e, t) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(e) ||
    (function (n, r) {
      var o = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
      if (o != null) {
        var a,
          c,
          u = [],
          l = !0,
          s = !1;
        try {
          for (
            o = o.call(n);
            !(l = (a = o.next()).done) && (u.push(a.value), !r || u.length !== r);
            l = !0
          );
        } catch (i) {
          (s = !0), (c = i);
        } finally {
          try {
            l || o.return == null || o.return();
          } finally {
            if (s) throw c;
          }
        }
        return u;
      }
    })(e, t) ||
    (function (n, r) {
      if (n) {
        if (typeof n == 'string') return Ln(n, r);
        var o = Object.prototype.toString.call(n).slice(8, -1);
        if (
          (o === 'Object' && n.constructor && (o = n.constructor.name), o === 'Map' || o === 'Set')
        )
          return Array.from(n);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return Ln(n, r);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ha(e) {
  var t,
    n,
    r = f.useRef(null),
    o = Tn(f.useState(!1), 2),
    a = o[0],
    c = o[1],
    u = Tn(f.useState((e == null ? void 0 : e.initialQuery) || void 0), 2),
    l = u[0],
    s = u[1],
    i = f.useCallback(
      function () {
        c(!0);
      },
      [c],
    ),
    m = f.useCallback(
      function () {
        c(!1);
      },
      [c],
    );
  return (
    (function (d) {
      var p = d.isOpen,
        v = d.onOpen,
        h = d.onClose,
        g = d.onInput,
        y = d.searchButtonRef;
      f.useEffect(
        function () {
          function S(O) {
            ((O.keyCode === 27 && p) ||
              (O.key.toLowerCase() === 'k' && (O.metaKey || O.ctrlKey)) ||
              (!(function (_) {
                var b = _.target,
                  I = b.tagName;
                return b.isContentEditable || I === 'INPUT' || I === 'SELECT' || I === 'TEXTAREA';
              })(O) &&
                O.key === '/' &&
                !p)) &&
              (O.preventDefault(),
              p
                ? h()
                : document.body.classList.contains('DocSearch--active') ||
                  document.body.classList.contains('DocSearch--active') ||
                  v()),
              y &&
                y.current === document.activeElement &&
                g &&
                /[a-zA-Z0-9]/.test(String.fromCharCode(O.keyCode)) &&
                g(O);
          }
          return (
            window.addEventListener('keydown', S),
            function () {
              window.removeEventListener('keydown', S);
            }
          );
        },
        [p, v, h, g, y],
      );
    })({
      isOpen: a,
      onOpen: i,
      onClose: m,
      onInput: f.useCallback(
        function (d) {
          c(!0), s(d.key);
        },
        [c, s],
      ),
      searchButtonRef: r,
    }),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(no, {
        ref: r,
        translations:
          e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button,
        onClick: i,
      }),
      a &&
        nr(
          f.createElement(
            Ma,
            St({}, e, {
              initialScrollY: window.scrollY,
              initialQuery: l,
              translations:
                e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal,
              onClose: m,
            }),
          ),
          document.body,
        ),
    )
  );
}
function qn(e) {
  or(
    f.createElement(
      Ha,
      st({}, e, {
        transformSearchClient: function (t) {
          return (
            t.addAlgoliaAgent('docsearch.js', '3.3.2'),
            e.transformSearchClient ? e.transformSearchClient(t) : t
          );
        },
      }),
    ),
    (function (t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof t == 'string' ? n.document.querySelector(t) : t;
    })(e.container, e.environment),
  );
}
const Ua = { id: 'docsearch' },
  Ba = Pr({
    __name: 'VPAlgoliaSearchBox',
    props: { algolia: null },
    setup(e) {
      const t = e,
        n = Ir(),
        r = kr(),
        { site: o, localeIndex: a, lang: c } = Dr(),
        u = qn.default ?? qn;
      Cr(l), Ar(a, l);
      function l() {
        var v, h;
        const m = { ...t.algolia, ...((v = t.algolia.locales) == null ? void 0 : v[a.value]) },
          d = ((h = m.searchParameters) == null ? void 0 : h.facetFilters) ?? [],
          p = [
            ...(Array.isArray(d) ? d : [d]).filter((g) => !g.startsWith('lang:')),
            `lang:${c.value}`,
          ];
        s({ ...m, searchParameters: { ...m.searchParameters, facetFilters: p } });
      }
      function s(m) {
        const d = Object.assign({}, m, {
          container: '#docsearch',
          navigator: {
            navigate({ itemUrl: p }) {
              const { pathname: v } = new URL(window.location.origin + p);
              r.path === v ? window.location.assign(window.location.origin + p) : n.go(p);
            },
          },
          transformItems(p) {
            return p.map((v) => Object.assign({}, v, { url: i(v.url) }));
          },
          hitComponent({ hit: p, children: v }) {
            return {
              __v: null,
              type: 'a',
              ref: void 0,
              constructor: void 0,
              key: void 0,
              props: { href: p.url, children: v },
            };
          },
        });
        u(d);
      }
      function i(m) {
        const { pathname: d, hash: p } = new URL(m);
        return d.replace(/\.html$/, o.value.cleanUrls === 'disabled' ? '.html' : '') + p;
      }
      return (m, d) => (xr(), Nr('div', Ua));
    },
  });
export { Ba as default };
