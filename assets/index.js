(() => {
    const e = `https://www.dmoe.cc/random.php?_dufs_bg=${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.__CUSTOM_BACKGROUND_URL__ = e;
    document.head.insertAdjacentHTML("beforeend", `<style>.v-application{background-image:url("${e}") !important;}</style>`);
})();
var e, t, n = Object.defineProperty,
    r = (e, t, r) => ((e, t, r) => t in e ? n(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r);

function a(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return e => e in t
} ! function () {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function (e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
const o = {},
    l = [],
    i = () => { },
    s = () => !1,
    u = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    c = e => e.startsWith("onUpdate:"),
    d = Object.assign,
    p = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    f = {}.hasOwnProperty,
    v = (e, t) => f.call(e, t),
    g = Array.isArray,
    h = e => "[object Map]" === S(e),
    m = e => "[object Set]" === S(e),
    y = e => "function" == typeof e,
    b = e => "string" == typeof e,
    k = e => "symbol" == typeof e,
    w = e => null !== e && "object" == typeof e,
    x = e => (w(e) || y(e)) && y(e.then) && y(e.catch),
    C = {}.toString,
    S = e => C.call(e),
    _ = e => "[object Object]" === S(e),
    A = e => b(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
    L = a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    T = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    E = /-(\w)/g,
    F = T((e => e.replace(E, ((e, t) => t ? t.toUpperCase() : "")))),
    $ = /\B([A-Z])/g,
    P = T((e => e.replace($, "-$1").toLowerCase())),
    V = T((e => e.charAt(0).toUpperCase() + e.slice(1))),
    M = T((e => e ? `on${V(e)}` : "")),
    R = (e, t) => !Object.is(e, t),
    I = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    O = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    },
    H = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let B;
const D = () => B || (B = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

function N(e) {
    if (g(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                a = b(r) ? W(r) : N(r);
            if (a)
                for (const e in a) t[e] = a[e]
        }
        return t
    }
    if (b(e) || w(e)) return e
}
const z = /;(?![^(]*\))/g,
    j = /:([^]+)/,
    U = /\/\*[^]*?\*\//g;

function W(e) {
    const t = {};
    return e.replace(U, "").split(z).forEach((e => {
        if (e) {
            const n = e.split(j);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    })), t
}

function G(e) {
    let t = "";
    if (b(e)) t = e;
    else if (g(e))
        for (let n = 0; n < e.length; n++) {
            const r = G(e[n]);
            r && (t += r + " ")
        } else if (w(e))
        for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Z = a("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

function q(e) {
    return !!e || "" === e
}
const Y = e => !(!e || !0 !== e.__v_isRef),
    K = e => b(e) ? e : null == e ? "" : g(e) || w(e) && (e.toString === C || !y(e.toString)) ? Y(e) ? K(e.value) : JSON.stringify(e, X, 2) : String(e),
    X = (e, t) => Y(t) ? X(e, t.value) : h(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n], r) => (e[J(t, r) + " =>"] = n, e)), {})
    } : m(t) ? {
        [`Set(${t.size})`]: [...t.values()].map((e => J(e)))
    } : k(t) ? J(t) : !w(t) || g(t) || _(t) ? t : String(t),
    J = (e, t = "") => {
        var n;
        return k(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e
    };
let Q, ee;
class te {
    constructor(e = !1) {
        this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Q, !e && Q && (this.index = (Q.scopes || (Q.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            let e, t;
            if (this._isPaused = !0, this.scopes)
                for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
            for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            let e, t;
            if (this._isPaused = !1, this.scopes)
                for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
            for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            const t = Q;
            try {
                return Q = this, e()
            } finally {
                Q = t
            }
        }
    }
    on() {
        Q = this
    }
    off() {
        Q = this.parent
    }
    stop(e) {
        if (this._active) {
            let t, n;
            for (this._active = !1, t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
            for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
            if (this.cleanups.length = 0, this.scopes) {
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                const e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function ne(e) {
    return new te(e)
}

function re(e, t = !1) {
    Q && Q.cleanups.push(e)
}
const ae = new WeakSet;
class oe {
    constructor(e) {
        this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Q && Q.active && Q.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        64 & this.flags && (this.flags &= -65, ae.has(this) && (ae.delete(this), this.trigger()))
    }
    notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || ue(this)
    }
    run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, xe(this), pe(this);
        const e = ee,
            t = ye;
        ee = this, ye = !0;
        try {
            return this.fn()
        } finally {
            fe(this), ee = e, ye = t, this.flags &= -3
        }
    }
    stop() {
        if (1 & this.flags) {
            for (let e = this.deps; e; e = e.nextDep) he(e);
            this.deps = this.depsTail = void 0, xe(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        64 & this.flags ? ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        ve(this) && this.run()
    }
    get dirty() {
        return ve(this)
    }
}
let le, ie, se = 0;

function ue(e, t = !1) {
    if (e.flags |= 8, t) return e.next = ie, void (ie = e);
    e.next = le, le = e
}

function ce() {
    se++
}

function de() {
    if (--se > 0) return;
    if (ie) {
        let e = ie;
        for (ie = void 0; e;) {
            const t = e.next;
            e.next = void 0, e.flags &= -9, e = t
        }
    }
    let e;
    for (; le;) {
        let n = le;
        for (le = void 0; n;) {
            const r = n.next;
            if (n.next = void 0, n.flags &= -9, 1 & n.flags) try {
                n.trigger()
            } catch (t) {
                e || (e = t)
            }
            n = r
        }
    }
    if (e) throw e
}

function pe(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function fe(e) {
    let t, n = e.depsTail,
        r = n;
    for (; r;) {
        const e = r.prevDep; - 1 === r.version ? (r === n && (n = e), he(r), me(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e
    }
    e.deps = t, e.depsTail = n
}

function ve(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function ge(e) {
    if (4 & e.flags && !(16 & e.flags)) return;
    if (e.flags &= -17, e.globalVersion === Ce) return;
    e.globalVersion = Ce;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ve(e)) return void (e.flags &= -3);
    const n = ee,
        r = ye;
    ee = e, ye = !0;
    try {
        pe(e);
        const n = e.fn(e._value);
        (0 === t.version || R(n, e._value)) && (e._value = n, t.version++)
    } catch (a) {
        throw t.version++, a
    } finally {
        ee = n, ye = r, fe(e), e.flags &= -3
    }
}

function he(e, t = !1) {
    const {
        dep: n,
        prevSub: r,
        nextSub: a
    } = e;
    if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let e = n.computed.deps; e; e = e.nextDep) he(e, !0)
    }
    t || --n.sc || !n.map || n.map.delete(n.key)
}

function me(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let ye = !0;
const be = [];

function ke() {
    be.push(ye), ye = !1
}

function we() {
    const e = be.pop();
    ye = void 0 === e || e
}

function xe(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const e = ee;
        ee = void 0;
        try {
            t()
        } finally {
            ee = e
        }
    }
}
let Ce = 0;
class Se {
    constructor(e, t) {
        this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class _e {
    constructor(e) {
        this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(e) {
        if (!ee || !ye || ee === this.computed) return;
        let t = this.activeLink;
        if (void 0 === t || t.sub !== ee) t = this.activeLink = new Se(ee, this), ee.deps ? (t.prevDep = ee.depsTail, ee.depsTail.nextDep = t, ee.depsTail = t) : ee.deps = ee.depsTail = t, Ae(t);
        else if (-1 === t.version && (t.version = this.version, t.nextDep)) {
            const e = t.nextDep;
            e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = ee.depsTail, t.nextDep = void 0, ee.depsTail.nextDep = t, ee.depsTail = t, ee.deps === t && (ee.deps = e)
        }
        return t
    }
    trigger(e) {
        this.version++, Ce++, this.notify(e)
    }
    notify(e) {
        ce();
        try {
            for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify()
        } finally {
            de()
        }
    }
}

function Ae(e) {
    if (e.dep.sc++, 4 & e.sub.flags) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let e = t.deps; e; e = e.nextDep) Ae(e)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Le = new WeakMap,
    Te = Symbol(""),
    Ee = Symbol(""),
    Fe = Symbol("");

function $e(e, t, n) {
    if (ye && ee) {
        let t = Le.get(e);
        t || Le.set(e, t = new Map);
        let r = t.get(n);
        r || (t.set(n, r = new _e), r.map = t, r.key = n), r.track()
    }
}

function Pe(e, t, n, r, a, o) {
    const l = Le.get(e);
    if (!l) return void Ce++;
    const i = e => {
        e && e.trigger()
    };
    if (ce(), "clear" === t) l.forEach(i);
    else {
        const a = g(e),
            o = a && A(n);
        if (a && "length" === n) {
            const e = Number(r);
            l.forEach(((t, n) => {
                ("length" === n || n === Fe || !k(n) && n >= e) && i(t)
            }))
        } else switch ((void 0 !== n || l.has(void 0)) && i(l.get(n)), o && i(l.get(Fe)), t) {
            case "add":
                a ? o && i(l.get("length")) : (i(l.get(Te)), h(e) && i(l.get(Ee)));
                break;
            case "delete":
                a || (i(l.get(Te)), h(e) && i(l.get(Ee)));
                break;
            case "set":
                h(e) && i(l.get(Te))
        }
    }
    de()
}

function Ve(e) {
    const t = ht(e);
    return t === e ? t : ($e(t, 0, Fe), vt(e) ? t : t.map(mt))
}

function Me(e) {
    return $e(e = ht(e), 0, Fe), e
}
const Re = {
    __proto__: null,
    [Symbol.iterator]() {
        return Ie(this, Symbol.iterator, mt)
    },
    concat(...e) {
        return Ve(this).concat(...e.map((e => g(e) ? Ve(e) : e)))
    },
    entries() {
        return Ie(this, "entries", (e => (e[1] = mt(e[1]), e)))
    },
    every(e, t) {
        return He(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return He(this, "filter", e, t, (e => e.map(mt)), arguments)
    },
    find(e, t) {
        return He(this, "find", e, t, mt, arguments)
    },
    findIndex(e, t) {
        return He(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return He(this, "findLast", e, t, mt, arguments)
    },
    findLastIndex(e, t) {
        return He(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return He(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return De(this, "includes", e)
    },
    indexOf(...e) {
        return De(this, "indexOf", e)
    },
    join(e) {
        return Ve(this).join(e)
    },
    lastIndexOf(...e) {
        return De(this, "lastIndexOf", e)
    },
    map(e, t) {
        return He(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Ne(this, "pop")
    },
    push(...e) {
        return Ne(this, "push", e)
    },
    reduce(e, ...t) {
        return Be(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Be(this, "reduceRight", e, t)
    },
    shift() {
        return Ne(this, "shift")
    },
    some(e, t) {
        return He(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Ne(this, "splice", e)
    },
    toReversed() {
        return Ve(this).toReversed()
    },
    toSorted(e) {
        return Ve(this).toSorted(e)
    },
    toSpliced(...e) {
        return Ve(this).toSpliced(...e)
    },
    unshift(...e) {
        return Ne(this, "unshift", e)
    },
    values() {
        return Ie(this, "values", mt)
    }
};

function Ie(e, t, n) {
    const r = Me(e),
        a = r[t]();
    return r === e || vt(e) || (a._next = a.next, a.next = () => {
        const e = a._next();
        return e.value && (e.value = n(e.value)), e
    }), a
}
const Oe = Array.prototype;

function He(e, t, n, r, a, o) {
    const l = Me(e),
        i = l !== e && !vt(e),
        s = l[t];
    if (s !== Oe[t]) {
        const t = s.apply(e, o);
        return i ? mt(t) : t
    }
    let u = n;
    l !== e && (i ? u = function (t, r) {
        return n.call(this, mt(t), r, e)
    } : n.length > 2 && (u = function (t, r) {
        return n.call(this, t, r, e)
    }));
    const c = s.call(l, u, r);
    return i && a ? a(c) : c
}

function Be(e, t, n, r) {
    const a = Me(e);
    let o = n;
    return a !== e && (vt(e) ? n.length > 3 && (o = function (t, r, a) {
        return n.call(this, t, r, a, e)
    }) : o = function (t, r, a) {
        return n.call(this, t, mt(r), a, e)
    }), a[t](o, ...r)
}

function De(e, t, n) {
    const r = ht(e);
    $e(r, 0, Fe);
    const a = r[t](...n);
    return -1 !== a && !1 !== a || !gt(n[0]) ? a : (n[0] = ht(n[0]), r[t](...n))
}

function Ne(e, t, n = []) {
    ke(), ce();
    const r = ht(e)[t].apply(e, n);
    return de(), we(), r
}
const ze = a("__proto__,__v_isRef,__isVue"),
    je = new Set(Object.getOwnPropertyNames(Symbol).filter((e => "arguments" !== e && "caller" !== e)).map((e => Symbol[e])).filter(k));

function Ue(e) {
    k(e) || (e = String(e));
    const t = ht(this);
    return $e(t, 0, e), t.hasOwnProperty(e)
}
class We {
    constructor(e = !1, t = !1) {
        this._isReadonly = e, this._isShallow = t
    }
    get(e, t, n) {
        if ("__v_skip" === t) return e.__v_skip;
        const r = this._isReadonly,
            a = this._isShallow;
        if ("__v_isReactive" === t) return !r;
        if ("__v_isReadonly" === t) return r;
        if ("__v_isShallow" === t) return a;
        if ("__v_raw" === t) return n === (r ? a ? it : lt : a ? ot : at).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
        const o = g(e);
        if (!r) {
            let e;
            if (o && (e = Re[t])) return e;
            if ("hasOwnProperty" === t) return Ue
        }
        const l = Reflect.get(e, t, bt(e) ? e : n);
        return (k(t) ? je.has(t) : ze(t)) ? l : (r || $e(e, 0, t), a ? l : bt(l) ? o && A(t) ? l : l.value : w(l) ? r ? ct(l) : st(l) : l)
    }
}
class Ge extends We {
    constructor(e = !1) {
        super(!1, e)
    }
    set(e, t, n, r) {
        let a = e[t];
        if (!this._isShallow) {
            const t = ft(a);
            if (vt(n) || ft(n) || (a = ht(a), n = ht(n)), !g(e) && bt(a) && !bt(n)) return !t && (a.value = n, !0)
        }
        const o = g(e) && A(t) ? Number(t) < e.length : v(e, t),
            l = Reflect.set(e, t, n, bt(e) ? e : r);
        return e === ht(r) && (o ? R(n, a) && Pe(e, "set", t, n) : Pe(e, "add", t, n)), l
    }
    deleteProperty(e, t) {
        const n = v(e, t);
        e[t];
        const r = Reflect.deleteProperty(e, t);
        return r && n && Pe(e, "delete", t, void 0), r
    }
    has(e, t) {
        const n = Reflect.has(e, t);
        return k(t) && je.has(t) || $e(e, 0, t), n
    }
    ownKeys(e) {
        return $e(e, 0, g(e) ? "length" : Te), Reflect.ownKeys(e)
    }
}
class Ze extends We {
    constructor(e = !1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
const qe = new Ge,
    Ye = new Ze,
    Ke = new Ge(!0),
    Xe = e => e,
    Je = e => Reflect.getPrototypeOf(e);

function Qe(e) {
    return function (...t) {
        return "delete" !== e && ("clear" === e ? void 0 : this)
    }
}

function et(e, t) {
    const n = function (e, t) {
        const n = {
            get(n) {
                const r = this.__v_raw,
                    a = ht(r),
                    o = ht(n);
                e || (R(n, o) && $e(a, 0, n), $e(a, 0, o));
                const {
                    has: l
                } = Je(a), i = t ? Xe : e ? yt : mt;
                return l.call(a, n) ? i(r.get(n)) : l.call(a, o) ? i(r.get(o)) : void (r !== a && r.get(n))
            },
            get size() {
                const t = this.__v_raw;
                return !e && $e(ht(t), 0, Te), Reflect.get(t, "size", t)
            },
            has(t) {
                const n = this.__v_raw,
                    r = ht(n),
                    a = ht(t);
                return e || (R(t, a) && $e(r, 0, t), $e(r, 0, a)), t === a ? n.has(t) : n.has(t) || n.has(a)
            },
            forEach(n, r) {
                const a = this,
                    o = a.__v_raw,
                    l = ht(o),
                    i = t ? Xe : e ? yt : mt;
                return !e && $e(l, 0, Te), o.forEach(((e, t) => n.call(r, i(e), i(t), a)))
            }
        };
        return d(n, e ? {
            add: Qe("add"),
            set: Qe("set"),
            delete: Qe("delete"),
            clear: Qe("clear")
        } : {
            add(e) {
                t || vt(e) || ft(e) || (e = ht(e));
                const n = ht(this);
                return Je(n).has.call(n, e) || (n.add(e), Pe(n, "add", e, e)), this
            },
            set(e, n) {
                t || vt(n) || ft(n) || (n = ht(n));
                const r = ht(this),
                    {
                        has: a,
                        get: o
                    } = Je(r);
                let l = a.call(r, e);
                l || (e = ht(e), l = a.call(r, e));
                const i = o.call(r, e);
                return r.set(e, n), l ? R(n, i) && Pe(r, "set", e, n) : Pe(r, "add", e, n), this
            },
            delete(e) {
                const t = ht(this),
                    {
                        has: n,
                        get: r
                    } = Je(t);
                let a = n.call(t, e);
                a || (e = ht(e), a = n.call(t, e)), r && r.call(t, e);
                const o = t.delete(e);
                return a && Pe(t, "delete", e, void 0), o
            },
            clear() {
                const e = ht(this),
                    t = 0 !== e.size,
                    n = e.clear();
                return t && Pe(e, "clear", void 0, void 0), n
            }
        }), ["keys", "values", "entries", Symbol.iterator].forEach((r => {
            n[r] = function (e, t, n) {
                return function (...r) {
                    const a = this.__v_raw,
                        o = ht(a),
                        l = h(o),
                        i = "entries" === e || e === Symbol.iterator && l,
                        s = "keys" === e && l,
                        u = a[e](...r),
                        c = n ? Xe : t ? yt : mt;
                    return !t && $e(o, 0, s ? Ee : Te), {
                        next() {
                            const {
                                value: e,
                                done: t
                            } = u.next();
                            return t ? {
                                value: e,
                                done: t
                            } : {
                                value: i ? [c(e[0]), c(e[1])] : c(e),
                                done: t
                            }
                        },
                        [Symbol.iterator]() {
                            return this
                        }
                    }
                }
            }(r, e, t)
        })), n
    }(e, t);
    return (t, r, a) => "__v_isReactive" === r ? !e : "__v_isReadonly" === r ? e : "__v_raw" === r ? t : Reflect.get(v(n, r) && r in t ? n : t, r, a)
}
const tt = {
    get: et(!1, !1)
},
    nt = {
        get: et(!1, !0)
    },
    rt = {
        get: et(!0, !1)
    },
    at = new WeakMap,
    ot = new WeakMap,
    lt = new WeakMap,
    it = new WeakMap;

function st(e) {
    return ft(e) ? e : dt(e, !1, qe, tt, at)
}

function ut(e) {
    return dt(e, !1, Ke, nt, ot)
}

function ct(e) {
    return dt(e, !0, Ye, rt, lt)
}

function dt(e, t, n, r, a) {
    if (!w(e)) return e;
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
    const o = a.get(e);
    if (o) return o;
    const l = (i = e).__v_skip || !Object.isExtensible(i) ? 0 : function (e) {
        switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0
        }
    }((e => S(e).slice(8, -1))(i));
    var i;
    if (0 === l) return e;
    const s = new Proxy(e, 2 === l ? r : n);
    return a.set(e, s), s
}

function pt(e) {
    return ft(e) ? pt(e.__v_raw) : !(!e || !e.__v_isReactive)
}

function ft(e) {
    return !(!e || !e.__v_isReadonly)
}

function vt(e) {
    return !(!e || !e.__v_isShallow)
}

function gt(e) {
    return !!e && !!e.__v_raw
}

function ht(e) {
    const t = e && e.__v_raw;
    return t ? ht(t) : e
}
const mt = e => w(e) ? st(e) : e,
    yt = e => w(e) ? ct(e) : e;

function bt(e) {
    return !!e && !0 === e.__v_isRef
}

function kt(e) {
    return xt(e, !1)
}

function wt(e) {
    return xt(e, !0)
}

function xt(e, t) {
    return bt(e) ? e : new Ct(e, t)
}
class Ct {
    constructor(e, t) {
        this.dep = new _e, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : ht(e), this._value = t ? e : mt(e), this.__v_isShallow = t
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(e) {
        const t = this._rawValue,
            n = this.__v_isShallow || vt(e) || ft(e);
        e = n ? e : ht(e), R(e, t) && (this._rawValue = e, this._value = n ? e : mt(e), this.dep.trigger())
    }
}

function St(e) {
    return bt(e) ? e.value : e
}
const _t = {
    get: (e, t, n) => "__v_raw" === t ? e : St(Reflect.get(e, t, n)),
    set(e, t, n, r) {
        const a = e[t];
        return bt(a) && !bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function At(e) {
    return pt(e) ? e : new Proxy(e, _t)
}

function Lt(e) {
    const t = g(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = $t(e, n);
    return t
}
class Tt {
    constructor(e, t, n) {
        this._object = e, this._key = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0
    }
    get value() {
        const e = this._object[this._key];
        return this._value = void 0 === e ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
    get dep() {
        return function (e, t) {
            const n = Le.get(e);
            return n && n.get(t)
        }(ht(this._object), this._key)
    }
}
class Et {
    constructor(e) {
        this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function Ft(e, t, n) {
    return bt(e) ? e : y(e) ? new Et(e) : w(e) && arguments.length > 1 ? $t(e, t, n) : kt(e)
}

function $t(e, t, n) {
    const r = e[t];
    return bt(r) ? r : new Tt(e, t, n)
}
class Pt {
    constructor(e, t, n) {
        this.fn = e, this.setter = t, this._value = void 0, this.dep = new _e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ce - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n
    }
    notify() {
        if (this.flags |= 16, !(8 & this.flags) && ee !== this) return ue(this, !0), !0
    }
    get value() {
        const e = this.dep.track();
        return ge(this), e && (e.version = this.dep.version), this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}
const Vt = {},
    Mt = new WeakMap;
let Rt;

function It(e, t = 1 / 0, n) {
    if (t <= 0 || !w(e) || e.__v_skip) return e;
    if ((n = n || new Set).has(e)) return e;
    if (n.add(e), t--, bt(e)) It(e.value, t, n);
    else if (g(e))
        for (let r = 0; r < e.length; r++) It(e[r], t, n);
    else if (m(e) || h(e)) e.forEach((e => {
        It(e, t, n)
    }));
    else if (_(e)) {
        for (const r in e) It(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) ({}).propertyIsEnumerable.call(e, r) && It(e[r], t, n)
    }
    return e
}

function Ot(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (a) {
        Bt(a, t, n)
    }
}

function Ht(e, t, n, r) {
    if (y(e)) {
        const a = Ot(e, t, n, r);
        return a && x(a) && a.catch((e => {
            Bt(e, t, n)
        })), a
    }
    if (g(e)) {
        const a = [];
        for (let o = 0; o < e.length; o++) a.push(Ht(e[o], t, n, r));
        return a
    }
}

function Bt(e, t, n, r = !0) {
    t && t.vnode;
    const {
        errorHandler: a,
        throwUnhandledErrorInProduction: l
    } = t && t.appContext.config || o;
    if (t) {
        let r = t.parent;
        const o = t.proxy,
            l = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r;) {
            const t = r.ec;
            if (t)
                for (let n = 0; n < t.length; n++)
                    if (!1 === t[n](e, o, l)) return;
            r = r.parent
        }
        if (a) return ke(), Ot(a, null, 10, [e, o, l]), void we()
    } ! function (e, t, n, r = !0, a = !1) {
        if (a) throw e;
        console.error(e)
    }(e, 0, 0, r, l)
}
const Dt = [];
let Nt = -1;
const zt = [];
let jt = null,
    Ut = 0;
const Wt = Promise.resolve();
let Gt = null;

function Zt(e) {
    const t = Gt || Wt;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function qt(e) {
    if (!(1 & e.flags)) {
        const t = Jt(e),
            n = Dt[Dt.length - 1];
        !n || !(2 & e.flags) && t >= Jt(n) ? Dt.push(e) : Dt.splice(function (e) {
            let t = Nt + 1,
                n = Dt.length;
            for (; t < n;) {
                const r = t + n >>> 1,
                    a = Dt[r],
                    o = Jt(a);
                o < e || o === e && 2 & a.flags ? t = r + 1 : n = r
            }
            return t
        }(t), 0, e), e.flags |= 1, Yt()
    }
}

function Yt() {
    Gt || (Gt = Wt.then(Qt))
}

function Kt(e, t, n = Nt + 1) {
    for (; n < Dt.length; n++) {
        const t = Dt[n];
        if (t && 2 & t.flags) {
            if (e && t.id !== e.uid) continue;
            Dt.splice(n, 1), n--, 4 & t.flags && (t.flags &= -2), t(), 4 & t.flags || (t.flags &= -2)
        }
    }
}

function Xt(e) {
    if (zt.length) {
        const e = [...new Set(zt)].sort(((e, t) => Jt(e) - Jt(t)));
        if (zt.length = 0, jt) return void jt.push(...e);
        for (jt = e, Ut = 0; Ut < jt.length; Ut++) {
            const e = jt[Ut];
            4 & e.flags && (e.flags &= -2), 8 & e.flags || e(), e.flags &= -2
        }
        jt = null, Ut = 0
    }
}
const Jt = e => null == e.id ? 2 & e.flags ? -1 : 1 / 0 : e.id;

function Qt(e) {
    try {
        for (Nt = 0; Nt < Dt.length; Nt++) {
            const e = Dt[Nt];
            !e || 8 & e.flags || (4 & e.flags && (e.flags &= -2), Ot(e, e.i, e.i ? 15 : 14), 4 & e.flags || (e.flags &= -2))
        }
    } finally {
        for (; Nt < Dt.length; Nt++) {
            const e = Dt[Nt];
            e && (e.flags &= -2)
        }
        Nt = -1, Dt.length = 0, Xt(), Gt = null, (Dt.length || zt.length) && Qt()
    }
}
let en = null,
    tn = null;

function nn(e) {
    const t = en;
    return en = e, tn = e && e.type.__scopeId || null, t
}

function rn(e, t = en, n) {
    if (!t) return e;
    if (e._n) return e;
    const r = (...n) => {
        r._d && _a(-1);
        const a = nn(t);
        let o;
        try {
            o = e(...n)
        } finally {
            nn(a), r._d && _a(1)
        }
        return o
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function an(e, t) {
    if (null === en) return e;
    const n = no(en),
        r = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let [e, l, i, s = o] = t[a];
        e && (y(e) && (e = {
            mounted: e,
            updated: e
        }), e.deep && It(l), r.push({
            dir: e,
            instance: n,
            value: l,
            oldValue: void 0,
            arg: i,
            modifiers: s
        }))
    }
    return e
}

function on(e, t, n, r) {
    const a = e.dirs,
        o = t && t.dirs;
    for (let l = 0; l < a.length; l++) {
        const i = a[l];
        o && (i.oldValue = o[l].value);
        let s = i.dir[r];
        s && (ke(), Ht(s, n, 8, [e.el, i, e, t]), we())
    }
}
const ln = Symbol("_vte"),
    sn = e => e.__isTeleport,
    un = e => e && (e.disabled || "" === e.disabled),
    cn = e => e && (e.defer || "" === e.defer),
    dn = e => "undefined" != typeof SVGElement && e instanceof SVGElement,
    pn = e => "function" == typeof MathMLElement && e instanceof MathMLElement,
    fn = (e, t) => {
        const n = e && e.to;
        return b(n) ? t ? t(n) : null : n
    },
    vn = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, r, a, o, l, i, s, u) {
            const {
                mc: c,
                pc: d,
                pbc: p,
                o: {
                    insert: f,
                    querySelector: v,
                    createText: g,
                    createComment: h
                }
            } = u, m = un(t.props);
            let {
                shapeFlag: y,
                children: b,
                dynamicChildren: k
            } = t;
            if (null == e) {
                const e = t.el = g(""),
                    u = t.anchor = g("");
                f(e, n, r), f(u, n, r);
                const d = (e, t) => {
                    16 & y && (a && a.isCE && (a.ce._teleportTarget = e), c(b, e, t, a, o, l, i, s))
                },
                    p = () => {
                        const e = t.target = fn(t.props, v),
                            n = yn(e, t, g, f);
                        e && ("svg" !== l && dn(e) ? l = "svg" : "mathml" !== l && pn(e) && (l = "mathml"), m || (d(e, n), mn(t, !1)))
                    };
                m && (d(n, u), mn(t, !0)), cn(t.props) ? qr((() => {
                    p(), t.el.__isMounted = !0
                }), o) : p()
            } else {
                if (cn(t.props) && !e.el.__isMounted) return void qr((() => {
                    vn.process(e, t, n, r, a, o, l, i, s, u), delete e.el.__isMounted
                }), o);
                t.el = e.el, t.targetStart = e.targetStart;
                const c = t.anchor = e.anchor,
                    f = t.target = e.target,
                    g = t.targetAnchor = e.targetAnchor,
                    h = un(e.props),
                    y = h ? n : f,
                    b = h ? c : g;
                if ("svg" === l || dn(f) ? l = "svg" : ("mathml" === l || pn(f)) && (l = "mathml"), k ? (p(e.dynamicChildren, k, y, a, o, l, i), Jr(e, t, !0)) : s || d(e, t, y, b, a, o, l, i, !1), m) h ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : gn(t, n, c, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const e = t.target = fn(t.props, v);
                    e && gn(t, e, null, u, 0)
                } else h && gn(t, f, g, u, 1);
                mn(t, m)
            }
        },
        remove(e, t, n, {
            um: r,
            o: {
                remove: a
            }
        }, o) {
            const {
                shapeFlag: l,
                children: i,
                anchor: s,
                targetStart: u,
                targetAnchor: c,
                target: d,
                props: p
            } = e;
            if (d && (a(u), a(c)), o && a(s), 16 & l) {
                const e = o || !un(p);
                for (let a = 0; a < i.length; a++) {
                    const o = i[a];
                    r(o, t, n, e, !!o.dynamicChildren)
                }
            }
        },
        move: gn,
        hydrate(e, t, n, r, a, o, {
            o: {
                nextSibling: l,
                parentNode: i,
                querySelector: s,
                insert: u,
                createText: c
            }
        }, d) {
            const p = t.target = fn(t.props, s);
            if (p) {
                const s = un(t.props),
                    f = p._lpa || p.firstChild;
                if (16 & t.shapeFlag)
                    if (s) t.anchor = d(l(e), t, i(e), n, r, a, o), t.targetStart = f, t.targetAnchor = f && l(f);
                    else {
                        t.anchor = l(e);
                        let i = f;
                        for (; i;) {
                            if (i && 8 === i.nodeType)
                                if ("teleport start anchor" === i.data) t.targetStart = i;
                                else if ("teleport anchor" === i.data) {
                                    t.targetAnchor = i, p._lpa = t.targetAnchor && l(t.targetAnchor);
                                    break
                                }
                            i = l(i)
                        }
                        t.targetAnchor || yn(p, t, c, u), d(f && l(f), t, p, n, r, a, o)
                    } mn(t, s)
            }
            return t.anchor && l(t.anchor)
        }
    };

function gn(e, t, n, {
    o: {
        insert: r
    },
    m: a
}, o = 2) {
    0 === o && r(e.targetAnchor, t, n);
    const {
        el: l,
        anchor: i,
        shapeFlag: s,
        children: u,
        props: c
    } = e, d = 2 === o;
    if (d && r(l, t, n), (!d || un(c)) && 16 & s)
        for (let p = 0; p < u.length; p++) a(u[p], t, n, 2);
    d && r(i, t, n)
}
const hn = vn;

function mn(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, a;
        for (t ? (r = e.el, a = e.anchor) : (r = e.targetStart, a = e.targetAnchor); r && r !== a;) 1 === r.nodeType && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
        n.ut()
    }
}

function yn(e, t, n, r) {
    const a = t.targetStart = n(""),
        o = t.targetAnchor = n("");
    return a[ln] = o, e && (r(a, e), r(o, e)), o
}
const bn = Symbol("_leaveCb"),
    kn = Symbol("_enterCb");

function wn() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Yn((() => {
        e.isMounted = !0
    })), Jn((() => {
        e.isUnmounting = !0
    })), e
}
const xn = [Function, Array],
    Cn = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: xn,
        onEnter: xn,
        onAfterEnter: xn,
        onEnterCancelled: xn,
        onBeforeLeave: xn,
        onLeave: xn,
        onAfterLeave: xn,
        onLeaveCancelled: xn,
        onBeforeAppear: xn,
        onAppear: xn,
        onAfterAppear: xn,
        onAppearCancelled: xn
    },
    Sn = e => {
        const t = e.subTree;
        return t.component ? Sn(t.component) : t
    };

function _n(e) {
    let t = e[0];
    if (e.length > 1)
        for (const n of e)
            if (n.type !== ba) {
                t = n;
                break
            } return t
}
const An = {
    name: "BaseTransition",
    props: Cn,
    setup(e, {
        slots: t
    }) {
        const n = Ga(),
            r = wn();
        return () => {
            const a = t.default && Pn(t.default(), !0);
            if (!a || !a.length) return;
            const o = _n(a),
                l = ht(e),
                {
                    mode: i
                } = l;
            if (r.isLeaving) return En(o);
            const s = Fn(o);
            if (!s) return En(o);
            let u = Tn(s, l, r, n, (e => u = e));
            s.type !== ba && $n(s, u);
            let c = n.subTree && Fn(n.subTree);
            if (c && c.type !== ba && !Fa(s, c) && Sn(n).type !== ba) {
                let e = Tn(c, l, r, n);
                if ($n(c, e), "out-in" === i && s.type !== ba) return r.isLeaving = !0, e.afterLeave = () => {
                    r.isLeaving = !1, 8 & n.job.flags || n.update(), delete e.afterLeave, c = void 0
                }, En(o);
                "in-out" === i && s.type !== ba ? e.delayLeave = (e, t, n) => {
                    Ln(r, c)[String(c.key)] = c, e[bn] = () => {
                        t(), e[bn] = void 0, delete u.delayedLeave, c = void 0
                    }, u.delayedLeave = () => {
                        n(), delete u.delayedLeave, c = void 0
                    }
                } : c = void 0
            } else c && (c = void 0);
            return o
        }
    }
};

function Ln(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Tn(e, t, n, r, a) {
    const {
        appear: o,
        mode: l,
        persisted: i = !1,
        onBeforeEnter: s,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: d,
        onBeforeLeave: p,
        onLeave: f,
        onAfterLeave: v,
        onLeaveCancelled: h,
        onBeforeAppear: m,
        onAppear: y,
        onAfterAppear: b,
        onAppearCancelled: k
    } = t, w = String(e.key), x = Ln(n, e), C = (e, t) => {
        e && Ht(e, r, 9, t)
    }, S = (e, t) => {
        const n = t[1];
        C(e, t), g(e) ? e.every((e => e.length <= 1)) && n() : e.length <= 1 && n()
    }, _ = {
        mode: l,
        persisted: i,
        beforeEnter(t) {
            let r = s;
            if (!n.isMounted) {
                if (!o) return;
                r = m || s
            }
            t[bn] && t[bn](!0);
            const a = x[w];
            a && Fa(e, a) && a.el[bn] && a.el[bn](), C(r, [t])
        },
        enter(e) {
            let t = u,
                r = c,
                a = d;
            if (!n.isMounted) {
                if (!o) return;
                t = y || u, r = b || c, a = k || d
            }
            let l = !1;
            const i = e[kn] = t => {
                l || (l = !0, C(t ? a : r, [e]), _.delayedLeave && _.delayedLeave(), e[kn] = void 0)
            };
            t ? S(t, [e, i]) : i()
        },
        leave(t, r) {
            const a = String(e.key);
            if (t[kn] && t[kn](!0), n.isUnmounting) return r();
            C(p, [t]);
            let o = !1;
            const l = t[bn] = n => {
                o || (o = !0, r(), C(n ? h : v, [t]), t[bn] = void 0, x[a] === e && delete x[a])
            };
            x[a] = e, f ? S(f, [t, l]) : l()
        },
        clone(e) {
            const o = Tn(e, t, n, r, a);
            return a && a(o), o
        }
    };
    return _
}

function En(e) {
    if (On(e)) return (e = Ra(e)).children = null, e
}

function Fn(e) {
    if (!On(e)) return sn(e.type) && e.children ? _n(e.children) : e;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (16 & t) return n[0];
        if (32 & t && y(n.default)) return n.default()
    }
}

function $n(e, t) {
    6 & e.shapeFlag && e.component ? (e.transition = t, $n(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Pn(e, t = !1, n) {
    let r = [],
        a = 0;
    for (let o = 0; o < e.length; o++) {
        let l = e[o];
        const i = null == n ? l.key : String(n) + String(null != l.key ? l.key : o);
        l.type === ma ? (128 & l.patchFlag && a++, r = r.concat(Pn(l.children, t, i))) : (t || l.type !== ba) && r.push(null != i ? Ra(l, {
            key: i
        }) : l)
    }
    if (a > 1)
        for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r
}

function Vn(e, t) {
    return y(e) ? (() => d({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}

function Mn(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Rn(e, t, n, r, a = !1) {
    if (g(e)) return void e.forEach(((e, o) => Rn(e, t && (g(t) ? t[o] : t), n, r, a)));
    if (In(r) && !a) return void (512 & r.shapeFlag && r.type.__asyncResolved && r.component.subTree.component && Rn(e, t, n, r.component.subTree));
    const l = 4 & r.shapeFlag ? no(r.component) : r.el,
        i = a ? null : l,
        {
            i: s,
            r: u
        } = e,
        c = t && t.r,
        d = s.refs === o ? s.refs = {} : s.refs,
        f = s.setupState,
        h = ht(f),
        m = f === o ? () => !1 : e => v(h, e);
    if (null != c && c !== u && (b(c) ? (d[c] = null, m(c) && (f[c] = null)) : bt(c) && (c.value = null)), y(u)) Ot(u, s, 12, [i, d]);
    else {
        const t = b(u),
            r = bt(u);
        if (t || r) {
            const o = () => {
                if (e.f) {
                    const n = t ? m(u) ? f[u] : d[u] : u.value;
                    a ? g(n) && p(n, l) : g(n) ? n.includes(l) || n.push(l) : t ? (d[u] = [l], m(u) && (f[u] = d[u])) : (u.value = [l], e.k && (d[e.k] = u.value))
                } else t ? (d[u] = i, m(u) && (f[u] = i)) : r && (u.value = i, e.k && (d[e.k] = i))
            };
            i ? (o.id = -1, qr(o, n)) : o()
        }
    }
}
D().requestIdleCallback, D().cancelIdleCallback;
const In = e => !!e.type.__asyncLoader,
    On = e => e.type.__isKeepAlive,
    Hn = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = Ga(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const e = t.default && t.default();
                return e && 1 === e.length ? e[0] : e
            };
            const a = new Map,
                o = new Set;
            let l = null;
            const i = n.suspense,
                {
                    renderer: {
                        p: s,
                        m: u,
                        um: c,
                        o: {
                            createElement: d
                        }
                    }
                } = r,
                p = d("div");

            function f(e) {
                Un(e), c(e, n, i, !0)
            }

            function v(e) {
                a.forEach(((t, n) => {
                    const r = ro(t.type);
                    r && !e(r) && g(n)
                }))
            }

            function g(e) {
                const t = a.get(e);
                !t || l && Fa(t, l) ? l && Un(l) : f(t), a.delete(e), o.delete(e)
            }
            r.activate = (e, t, n, r, a) => {
                const o = e.component;
                u(e, t, n, 0, i), s(o.vnode, e, t, n, o, i, r, e.slotScopeIds, a), qr((() => {
                    o.isDeactivated = !1, o.a && I(o.a);
                    const t = e.props && e.props.onVnodeMounted;
                    t && za(t, o.parent, e)
                }), i)
            }, r.deactivate = e => {
                const t = e.component;
                ea(t.m), ea(t.a), u(e, p, null, 1, i), qr((() => {
                    t.da && I(t.da);
                    const n = e.props && e.props.onVnodeUnmounted;
                    n && za(n, t.parent, e), t.isDeactivated = !0
                }), i)
            }, aa((() => [e.include, e.exclude]), (([e, t]) => {
                e && v((t => Bn(e, t))), t && v((e => !Bn(t, e)))
            }), {
                flush: "post",
                deep: !0
            });
            let h = null;
            const m = () => {
                null != h && (ha(n.subTree.type) ? qr((() => {
                    a.set(h, Wn(n.subTree))
                }), n.subTree.suspense) : a.set(h, Wn(n.subTree)))
            };
            return Yn(m), Xn(m), Jn((() => {
                a.forEach((e => {
                    const {
                        subTree: t,
                        suspense: r
                    } = n, a = Wn(t);
                    if (e.type !== a.type || e.key !== a.key) f(e);
                    else {
                        Un(a);
                        const e = a.component.da;
                        e && qr(e, r)
                    }
                }))
            })), () => {
                if (h = null, !t.default) return l = null;
                const n = t.default(),
                    r = n[0];
                if (n.length > 1) return l = null, n;
                if (!Ea(r) || !(4 & r.shapeFlag || 128 & r.shapeFlag)) return l = null, r;
                let i = Wn(r);
                if (i.type === ba) return l = null, i;
                const s = i.type,
                    u = ro(In(i) ? i.type.__asyncResolved || {} : s),
                    {
                        include: c,
                        exclude: d,
                        max: p
                    } = e;
                if (c && (!u || !Bn(c, u)) || d && u && Bn(d, u)) return i.shapeFlag &= -257, l = i, r;
                const f = null == i.key ? s : i.key,
                    v = a.get(f);
                return i.el && (i = Ra(i), 128 & r.shapeFlag && (r.ssContent = i)), h = f, v ? (i.el = v.el, i.component = v.component, i.transition && $n(i, i.transition), i.shapeFlag |= 512, o.delete(f), o.add(f)) : (o.add(f), p && o.size > parseInt(p, 10) && g(o.values().next().value)), i.shapeFlag |= 256, l = i, ha(r.type) ? r : i
            }
        }
    };

function Bn(e, t) {
    return g(e) ? e.some((e => Bn(e, t))) : b(e) ? e.split(",").includes(t) : "[object RegExp]" === S(e) && (e.lastIndex = 0, e.test(t))
}

function Dn(e, t) {
    zn(e, "a", t)
}

function Nn(e, t) {
    zn(e, "da", t)
}

function zn(e, t, n = Wa) {
    const r = e.__wdc || (e.__wdc = () => {
        let t = n;
        for (; t;) {
            if (t.isDeactivated) return;
            t = t.parent
        }
        return e()
    });
    if (Gn(t, r, n), n) {
        let e = n.parent;
        for (; e && e.parent;) On(e.parent.vnode) && jn(r, t, n, e), e = e.parent
    }
}

function jn(e, t, n, r) {
    const a = Gn(t, e, r, !0);
    Qn((() => {
        p(r[t], a)
    }), n)
}

function Un(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Wn(e) {
    return 128 & e.shapeFlag ? e.ssContent : e
}

function Gn(e, t, n = Wa, r = !1) {
    if (n) {
        const a = n[e] || (n[e] = []),
            o = t.__weh || (t.__weh = (...r) => {
                ke();
                const a = Ya(n),
                    o = Ht(t, n, e, r);
                return a(), we(), o
            });
        return r ? a.unshift(o) : a.push(o), o
    }
}
const Zn = e => (t, n = Wa) => {
    Ja && "sp" !== e || Gn(e, ((...e) => t(...e)), n)
},
    qn = Zn("bm"),
    Yn = Zn("m"),
    Kn = Zn("bu"),
    Xn = Zn("u"),
    Jn = Zn("bum"),
    Qn = Zn("um"),
    er = Zn("sp"),
    tr = Zn("rtg"),
    nr = Zn("rtc");

function rr(e, t = Wa) {
    Gn("ec", e, t)
}
const ar = "components";

function or(e, t) {
    return ur(ar, e, !0, t) || e
}
const lr = Symbol.for("v-ndc");

function ir(e) {
    return b(e) ? ur(ar, e, !1) || e : e || lr
}

function sr(e) {
    return ur("directives", e)
}

function ur(e, t, n = !0, r = !1) {
    const a = en || Wa;
    if (a) {
        const n = a.type;
        if (e === ar) {
            const e = ro(n, !1);
            if (e && (e === t || e === F(t) || e === V(F(t)))) return n
        }
        const o = cr(a[e] || n[e], t) || cr(a.appContext[e], t);
        return !o && r ? n : o
    }
}

function cr(e, t) {
    return e && (e[t] || e[F(t)] || e[V(F(t))])
}

function dr(e, t, n, r) {
    let a;
    const o = n,
        l = g(e);
    if (l || b(e)) {
        let n = !1;
        l && pt(e) && (n = !vt(e), e = Me(e)), a = new Array(e.length);
        for (let r = 0, l = e.length; r < l; r++) a[r] = t(n ? mt(e[r]) : e[r], r, void 0, o)
    } else if ("number" == typeof e) {
        a = new Array(e);
        for (let n = 0; n < e; n++) a[n] = t(n + 1, n, void 0, o)
    } else if (w(e))
        if (e[Symbol.iterator]) a = Array.from(e, ((e, n) => t(e, n, void 0, o)));
        else {
            const n = Object.keys(e);
            a = new Array(n.length);
            for (let r = 0, l = n.length; r < l; r++) {
                const l = n[r];
                a[r] = t(e[l], l, r, o)
            }
        }
    else a = [];
    return a
}
const pr = e => e ? Xa(e) ? no(e) : pr(e.parent) : null,
    fr = d(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => pr(e.parent),
        $root: e => pr(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => kr(e),
        $forceUpdate: e => e.f || (e.f = () => {
            qt(e.update)
        }),
        $nextTick: e => e.n || (e.n = Zt.bind(e.proxy)),
        $watch: e => la.bind(e)
    }),
    vr = (e, t) => e !== o && !e.__isScriptSetup && v(e, t),
    gr = {
        get({
            _: e
        }, t) {
            if ("__v_skip" === t) return !0;
            const {
                ctx: n,
                setupState: r,
                data: a,
                props: l,
                accessCache: i,
                type: s,
                appContext: u
            } = e;
            let c;
            if ("$" !== t[0]) {
                const s = i[t];
                if (void 0 !== s) switch (s) {
                    case 1:
                        return r[t];
                    case 2:
                        return a[t];
                    case 4:
                        return n[t];
                    case 3:
                        return l[t]
                } else {
                    if (vr(r, t)) return i[t] = 1, r[t];
                    if (a !== o && v(a, t)) return i[t] = 2, a[t];
                    if ((c = e.propsOptions[0]) && v(c, t)) return i[t] = 3, l[t];
                    if (n !== o && v(n, t)) return i[t] = 4, n[t];
                    mr && (i[t] = 0)
                }
            }
            const d = fr[t];
            let p, f;
            return d ? ("$attrs" === t && $e(e.attrs, 0, ""), d(e)) : (p = s.__cssModules) && (p = p[t]) ? p : n !== o && v(n, t) ? (i[t] = 4, n[t]) : (f = u.config.globalProperties, v(f, t) ? f[t] : void 0)
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: a,
                ctx: l
            } = e;
            return vr(a, t) ? (a[t] = n, !0) : r !== o && v(r, t) ? (r[t] = n, !0) : !(v(e.props, t) || "$" === t[0] && t.slice(1) in e || (l[t] = n, 0))
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: a,
                propsOptions: l
            }
        }, i) {
            let s;
            return !!n[i] || e !== o && v(e, i) || vr(t, i) || (s = l[0]) && v(s, i) || v(r, i) || v(fr, i) || v(a.config.globalProperties, i)
        },
        defineProperty(e, t, n) {
            return null != n.get ? e._.accessCache[t] = 0 : v(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function hr(e) {
    return g(e) ? e.reduce(((e, t) => (e[t] = null, e)), {}) : e
}
let mr = !0;

function yr(e, t, n) {
    Ht(g(e) ? e.map((e => e.bind(t.proxy))) : e.bind(t.proxy), t, n)
}

function br(e, t, n, r) {
    let a = r.includes(".") ? ia(n, r) : () => n[r];
    if (b(e)) {
        const n = t[e];
        y(n) && aa(a, n)
    } else if (y(e)) aa(a, e.bind(n));
    else if (w(e))
        if (g(e)) e.forEach((e => br(e, t, n, r)));
        else {
            const r = y(e.handler) ? e.handler.bind(n) : t[e.handler];
            y(r) && aa(a, r, e)
        }
}

function kr(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: a,
            optionsCache: o,
            config: {
                optionMergeStrategies: l
            }
        } = e.appContext,
        i = o.get(t);
    let s;
    return i ? s = i : a.length || n || r ? (s = {}, a.length && a.forEach((e => wr(s, e, l, !0))), wr(s, t, l)) : s = t, w(t) && o.set(t, s), s
}

function wr(e, t, n, r = !1) {
    const {
        mixins: a,
        extends: o
    } = t;
    o && wr(e, o, n, !0), a && a.forEach((t => wr(e, t, n, !0)));
    for (const l in t)
        if (r && "expose" === l);
        else {
            const r = xr[l] || n && n[l];
            e[l] = r ? r(e[l], t[l]) : t[l]
        } return e
}
const xr = {
    data: Cr,
    props: Lr,
    emits: Lr,
    methods: Ar,
    computed: Ar,
    beforeCreate: _r,
    created: _r,
    beforeMount: _r,
    mounted: _r,
    beforeUpdate: _r,
    updated: _r,
    beforeDestroy: _r,
    beforeUnmount: _r,
    destroyed: _r,
    unmounted: _r,
    activated: _r,
    deactivated: _r,
    errorCaptured: _r,
    serverPrefetch: _r,
    components: Ar,
    directives: Ar,
    watch(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = d(Object.create(null), e);
        for (const r in t) n[r] = _r(e[r], t[r]);
        return n
    },
    provide: Cr,
    inject: (e, t) => Ar(Sr(e), Sr(t))
};

function Cr(e, t) {
    return t ? e ? function () {
        return d(y(e) ? e.call(this, this) : e, y(t) ? t.call(this, this) : t)
    } : t : e
}

function Sr(e) {
    if (g(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function _r(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Ar(e, t) {
    return e ? d(Object.create(null), e, t) : t
}

function Lr(e, t) {
    return e ? g(e) && g(t) ? [...new Set([...e, ...t])] : d(Object.create(null), hr(e), hr(null != t ? t : {})) : t
}

function Tr() {
    return {
        app: null,
        config: {
            isNativeTag: s,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Er = 0;

function Fr(e, t) {
    return function (t, n = null) {
        y(t) || (t = d({}, t)), null == n || w(n) || (n = null);
        const r = Tr(),
            a = new WeakSet,
            o = [];
        let l = !1;
        const i = r.app = {
            _uid: Er++,
            _component: t,
            _props: n,
            _container: null,
            _context: r,
            _instance: null,
            version: lo,
            get config() {
                return r.config
            },
            set config(e) { },
            use(e, ...t) {
                return a.has(e) || (e && y(e.install) ? (a.add(e), e.install(i, ...t)) : y(e) && (a.add(e), e(i, ...t))), i
            },
            mixin(e) {
                return r.mixins.includes(e) || r.mixins.push(e), i
            },
            component(e, t) {
                return t ? (r.components[e] = t, i) : r.components[e]
            },
            directive(e, t) {
                return t ? (r.directives[e] = t, i) : r.directives[e]
            },
            mount(a, o, s) {
                if (!l) {
                    const o = i._ceVNode || Ma(t, n);
                    return o.appContext = r, !0 === s ? s = "svg" : !1 === s && (s = void 0), e(o, a, s), l = !0, i._container = a, a.__vue_app__ = i, no(o.component)
                }
            },
            onUnmount(e) {
                o.push(e)
            },
            unmount() {
                l && (Ht(o, i._instance, 16), e(null, i._container), delete i._container.__vue_app__)
            },
            provide(e, t) {
                return r.provides[e] = t, i
            },
            runWithContext(e) {
                const t = $r;
                $r = i;
                try {
                    return e()
                } finally {
                    $r = t
                }
            }
        };
        return i
    }
}
let $r = null;

function Pr(e, t) {
    if (Wa) {
        let n = Wa.provides;
        const r = Wa.parent && Wa.parent.provides;
        r === n && (n = Wa.provides = Object.create(r)), n[e] = t
    }
}

function Vr(e, t, n = !1) {
    const r = Wa || en;
    if (r || $r) {
        const a = $r ? $r._context.provides : r ? null == r.parent ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (a && e in a) return a[e];
        if (arguments.length > 1) return n && y(t) ? t.call(r && r.proxy) : t
    }
}
const Mr = {},
    Rr = () => Object.create(Mr),
    Ir = e => Object.getPrototypeOf(e) === Mr;

function Or(e, t, n, r) {
    const [a, l] = e.propsOptions;
    let i, s = !1;
    if (t)
        for (let o in t) {
            if (L(o)) continue;
            const u = t[o];
            let c;
            a && v(a, c = F(o)) ? l && l.includes(c) ? (i || (i = {}))[c] = u : n[c] = u : da(e.emitsOptions, o) || o in r && u === r[o] || (r[o] = u, s = !0)
        }
    if (l) {
        const t = ht(n),
            r = i || o;
        for (let o = 0; o < l.length; o++) {
            const i = l[o];
            n[i] = Hr(a, t, i, r[i], e, !v(r, i))
        }
    }
    return s
}

function Hr(e, t, n, r, a, o) {
    const l = e[n];
    if (null != l) {
        const e = v(l, "default");
        if (e && void 0 === r) {
            const e = l.default;
            if (l.type !== Function && !l.skipFactory && y(e)) {
                const {
                    propsDefaults: o
                } = a;
                if (n in o) r = o[n];
                else {
                    const l = Ya(a);
                    r = o[n] = e.call(null, t), l()
                }
            } else r = e;
            a.ce && a.ce._setProp(n, r)
        }
        l[0] && (o && !e ? r = !1 : !l[1] || "" !== r && r !== P(n) || (r = !0))
    }
    return r
}
const Br = new WeakMap;

function Dr(e, t, n = !1) {
    const r = n ? Br : t.propsCache,
        a = r.get(e);
    if (a) return a;
    const i = e.props,
        s = {},
        u = [];
    let c = !1;
    if (!y(e)) {
        const r = e => {
            c = !0;
            const [n, r] = Dr(e, t, !0);
            d(s, n), r && u.push(...r)
        };
        !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
    }
    if (!i && !c) return w(e) && r.set(e, l), l;
    if (g(i))
        for (let l = 0; l < i.length; l++) {
            const e = F(i[l]);
            Nr(e) && (s[e] = o)
        } else if (i)
        for (const o in i) {
            const e = F(o);
            if (Nr(e)) {
                const t = i[o],
                    n = s[e] = g(t) || y(t) ? {
                        type: t
                    } : d({}, t),
                    r = n.type;
                let a = !1,
                    l = !0;
                if (g(r))
                    for (let e = 0; e < r.length; ++e) {
                        const t = r[e],
                            n = y(t) && t.name;
                        if ("Boolean" === n) {
                            a = !0;
                            break
                        }
                        "String" === n && (l = !1)
                    } else a = y(r) && "Boolean" === r.name;
                n[0] = a, n[1] = l, (a || v(n, "default")) && u.push(e)
            }
        }
    const p = [s, u];
    return w(e) && r.set(e, p), p
}

function Nr(e) {
    return "$" !== e[0] && !L(e)
}
const zr = e => "_" === e[0] || "$stable" === e,
    jr = e => g(e) ? e.map(Ha) : [Ha(e)],
    Ur = (e, t, n) => {
        if (t._n) return t;
        const r = rn(((...e) => jr(t(...e))), n);
        return r._c = !1, r
    },
    Wr = (e, t, n) => {
        const r = e._ctx;
        for (const a in e) {
            if (zr(a)) continue;
            const n = e[a];
            if (y(n)) t[a] = Ur(0, n, r);
            else if (null != n) {
                const e = jr(n);
                t[a] = () => e
            }
        }
    },
    Gr = (e, t) => {
        const n = jr(t);
        e.slots.default = () => n
    },
    Zr = (e, t, n) => {
        for (const r in t) (n || "_" !== r) && (e[r] = t[r])
    },
    qr = function (e, t) {
        var n;
        t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : (g(n = e) ? zt.push(...n) : jt && -1 === n.id ? jt.splice(Ut + 1, 0, n) : 1 & n.flags || (zt.push(n), n.flags |= 1), Yt())
    };

function Yr(e) {
    return function (e) {
        D().__VUE__ = !0;
        const {
            insert: t,
            remove: n,
            patchProp: r,
            createElement: a,
            createText: s,
            createComment: u,
            setText: c,
            setElementText: d,
            parentNode: p,
            nextSibling: f,
            setScopeId: g = i,
            insertStaticContent: h
        } = e, m = (e, t, n, r = null, a = null, o = null, l = void 0, i = null, s = !!t.dynamicChildren) => {
            if (e === t) return;
            e && !Fa(e, t) && (r = K(e), W(e, a, o, !0), e = null), -2 === t.patchFlag && (s = !1, t.dynamicChildren = null);
            const {
                type: u,
                ref: c,
                shapeFlag: d
            } = t;
            switch (u) {
                case ya:
                    y(e, t, n, r);
                    break;
                case ba:
                    b(e, t, n, r);
                    break;
                case ka:
                    null == e && k(t, n, r, l);
                    break;
                case ma:
                    $(e, t, n, r, a, o, l, i, s);
                    break;
                default:
                    1 & d ? w(e, t, n, r, a, o, l, i, s) : 6 & d ? V(e, t, n, r, a, o, l, i, s) : (64 & d || 128 & d) && u.process(e, t, n, r, a, o, l, i, s, Q)
            }
            null != c && a && Rn(c, e && e.ref, o, t || e, !t)
        }, y = (e, n, r, a) => {
            if (null == e) t(n.el = s(n.children), r, a);
            else {
                const t = n.el = e.el;
                n.children !== e.children && c(t, n.children)
            }
        }, b = (e, n, r, a) => {
            null == e ? t(n.el = u(n.children || ""), r, a) : n.el = e.el
        }, k = (e, t, n, r) => {
            [e.el, e.anchor] = h(e.children, t, n, r, e.el, e.anchor)
        }, w = (e, t, n, r, a, o, l, i, s) => {
            "svg" === t.type ? l = "svg" : "math" === t.type && (l = "mathml"), null == e ? C(t, n, r, a, o, l, i, s) : A(e, t, a, o, l, i, s)
        }, C = (e, n, o, l, i, s, u, c) => {
            let p, f;
            const {
                props: v,
                shapeFlag: g,
                transition: h,
                dirs: m
            } = e;
            if (p = e.el = a(e.type, s, v && v.is, v), 8 & g ? d(p, e.children) : 16 & g && _(e.children, p, null, l, i, Kr(e, s), u, c), m && on(e, null, l, "created"), S(p, e, e.scopeId, u, l), v) {
                for (const e in v) "value" === e || L(e) || r(p, e, null, v[e], s, l);
                "value" in v && r(p, "value", null, v.value, s), (f = v.onVnodeBeforeMount) && za(f, l, e)
            }
            m && on(e, null, l, "beforeMount");
            const y = function (e, t) {
                return (!e || e && !e.pendingBranch) && t && !t.persisted
            }(i, h);
            y && h.beforeEnter(p), t(p, n, o), ((f = v && v.onVnodeMounted) || y || m) && qr((() => {
                f && za(f, l, e), y && h.enter(p), m && on(e, null, l, "mounted")
            }), i)
        }, S = (e, t, n, r, a) => {
            if (n && g(e, n), r)
                for (let o = 0; o < r.length; o++) g(e, r[o]);
            if (a) {
                let n = a.subTree;
                if (t === n || ha(n.type) && (n.ssContent === t || n.ssFallback === t)) {
                    const t = a.vnode;
                    S(e, t, t.scopeId, t.slotScopeIds, a.parent)
                }
            }
        }, _ = (e, t, n, r, a, o, l, i, s = 0) => {
            for (let u = s; u < e.length; u++) {
                const s = e[u] = i ? Ba(e[u]) : Ha(e[u]);
                m(null, s, t, n, r, a, o, l, i)
            }
        }, A = (e, t, n, a, l, i, s) => {
            const u = t.el = e.el;
            let {
                patchFlag: c,
                dynamicChildren: p,
                dirs: f
            } = t;
            c |= 16 & e.patchFlag;
            const v = e.props || o,
                g = t.props || o;
            let h;
            if (n && Xr(n, !1), (h = g.onVnodeBeforeUpdate) && za(h, n, t, e), f && on(t, e, n, "beforeUpdate"), n && Xr(n, !0), (v.innerHTML && null == g.innerHTML || v.textContent && null == g.textContent) && d(u, ""), p ? T(e.dynamicChildren, p, u, n, a, Kr(t, l), i) : s || N(e, t, u, null, n, a, Kr(t, l), i, !1), c > 0) {
                if (16 & c) E(u, v, g, n, l);
                else if (2 & c && v.class !== g.class && r(u, "class", null, g.class, l), 4 & c && r(u, "style", v.style, g.style, l), 8 & c) {
                    const e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        const a = e[t],
                            o = v[a],
                            i = g[a];
                        i === o && "value" !== a || r(u, a, o, i, l, n)
                    }
                }
                1 & c && e.children !== t.children && d(u, t.children)
            } else s || null != p || E(u, v, g, n, l);
            ((h = g.onVnodeUpdated) || f) && qr((() => {
                h && za(h, n, t, e), f && on(t, e, n, "updated")
            }), a)
        }, T = (e, t, n, r, a, o, l) => {
            for (let i = 0; i < t.length; i++) {
                const s = e[i],
                    u = t[i],
                    c = s.el && (s.type === ma || !Fa(s, u) || 70 & s.shapeFlag) ? p(s.el) : n;
                m(s, u, c, null, r, a, o, l, !0)
            }
        }, E = (e, t, n, a, l) => {
            if (t !== n) {
                if (t !== o)
                    for (const o in t) L(o) || o in n || r(e, o, t[o], null, l, a);
                for (const o in n) {
                    if (L(o)) continue;
                    const i = n[o],
                        s = t[o];
                    i !== s && "value" !== o && r(e, o, s, i, l, a)
                }
                "value" in n && r(e, "value", t.value, n.value, l)
            }
        }, $ = (e, n, r, a, o, l, i, u, c) => {
            const d = n.el = e ? e.el : s(""),
                p = n.anchor = e ? e.anchor : s("");
            let {
                patchFlag: f,
                dynamicChildren: v,
                slotScopeIds: g
            } = n;
            g && (u = u ? u.concat(g) : g), null == e ? (t(d, r, a), t(p, r, a), _(n.children || [], r, p, o, l, i, u, c)) : f > 0 && 64 & f && v && e.dynamicChildren ? (T(e.dynamicChildren, v, r, o, l, i, u), (null != n.key || o && n === o.subTree) && Jr(e, n, !0)) : N(e, n, r, p, o, l, i, u, c)
        }, V = (e, t, n, r, a, o, l, i, s) => {
            t.slotScopeIds = i, null == e ? 512 & t.shapeFlag ? a.ctx.activate(t, n, r, l, s) : M(t, n, r, a, o, l, s) : R(e, t, s)
        }, M = (e, t, n, r, a, l, i) => {
            const s = e.component = function (e, t, n) {
                const r = e.type,
                    a = (t ? t.appContext : e.appContext) || ja,
                    l = {
                        uid: Ua++,
                        vnode: e,
                        type: r,
                        parent: t,
                        appContext: a,
                        root: null,
                        next: null,
                        subTree: null,
                        effect: null,
                        update: null,
                        job: null,
                        scope: new te(!0),
                        render: null,
                        proxy: null,
                        exposed: null,
                        exposeProxy: null,
                        withProxy: null,
                        provides: t ? t.provides : Object.create(a.provides),
                        ids: t ? t.ids : ["", 0, 0],
                        accessCache: null,
                        renderCache: [],
                        components: null,
                        directives: null,
                        propsOptions: Dr(r, a),
                        emitsOptions: ca(r, a),
                        emit: null,
                        emitted: null,
                        propsDefaults: o,
                        inheritAttrs: r.inheritAttrs,
                        ctx: o,
                        data: o,
                        props: o,
                        attrs: o,
                        slots: o,
                        refs: o,
                        setupState: o,
                        setupContext: null,
                        suspense: n,
                        suspenseId: n ? n.pendingId : 0,
                        asyncDep: null,
                        asyncResolved: !1,
                        isMounted: !1,
                        isUnmounted: !1,
                        isDeactivated: !1,
                        bc: null,
                        c: null,
                        bm: null,
                        m: null,
                        bu: null,
                        u: null,
                        um: null,
                        bum: null,
                        da: null,
                        a: null,
                        rtg: null,
                        rtc: null,
                        ec: null,
                        sp: null
                    };
                return l.ctx = {
                    _: l
                }, l.root = t ? t.root : l, l.emit = ua.bind(null, l), e.ce && e.ce(l), l
            }(e, r, a);
            if (On(e) && (s.ctx.renderer = Q), function (e, t = !1, n = !1) {
                t && qa(t);
                const {
                    props: r,
                    children: a
                } = e.vnode, o = Xa(e);
                (function (e, t, n, r = !1) {
                    const a = {},
                        o = Rr();
                    e.propsDefaults = Object.create(null), Or(e, t, a, o);
                    for (const l in e.propsOptions[0]) l in a || (a[l] = void 0);
                    n ? e.props = r ? a : ut(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o
                })(e, r, o, t), ((e, t, n) => {
                    const r = e.slots = Rr();
                    if (32 & e.vnode.shapeFlag) {
                        const e = t._;
                        e ? (Zr(r, t, n), n && O(r, "_", e, !0)) : Wr(t, r)
                    } else t && Gr(e, t)
                })(e, a, n);
                o && function (e, t) {
                    const n = e.type;
                    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, gr);
                    const {
                        setup: r
                    } = n;
                    if (r) {
                        ke();
                        const n = e.setupContext = r.length > 1 ? function (e) {
                            return {
                                attrs: new Proxy(e.attrs, to),
                                slots: e.slots,
                                emit: e.emit,
                                expose(t) {
                                    e.exposed = t || {}
                                }
                            }
                        }(e) : null,
                            a = Ya(e),
                            o = Ot(r, e, 0, [e.props, n]),
                            l = x(o);
                        if (we(), a(), !l && !e.sp || In(e) || Mn(e), l) {
                            if (o.then(Ka, Ka), t) return o.then((t => {
                                Qa(e, t)
                            })).catch((t => {
                                Bt(t, e, 0)
                            }));
                            e.asyncDep = o
                        } else Qa(e, o)
                    } else eo(e)
                }(e, t);
                t && qa(!1)
            }(s, !1, i), s.asyncDep) {
                if (a && a.registerDep(s, H, i), !e.el) {
                    const e = s.subTree = Ma(ba);
                    b(null, e, t, n)
                }
            } else H(s, e, t, n, a, l, i)
        }, R = (e, t, n) => {
            const r = t.component = e.component;
            if (function (e, t, n) {
                const {
                    props: r,
                    children: a,
                    component: o
                } = e, {
                    props: l,
                    children: i,
                    patchFlag: s
                } = t, u = o.emitsOptions;
                if (t.dirs || t.transition) return !0;
                if (!(n && s >= 0)) return !(!a && !i || i && i.$stable) || r !== l && (r ? !l || ga(r, l, u) : !!l);
                if (1024 & s) return !0;
                if (16 & s) return r ? ga(r, l, u) : !!l;
                if (8 & s) {
                    const e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (l[n] !== r[n] && !da(u, n)) return !0
                    }
                }
                return !1
            }(e, t, n)) {
                if (r.asyncDep && !r.asyncResolved) return void B(r, t, n);
                r.next = t, r.update()
            } else t.el = e.el, r.vnode = t
        }, H = (e, t, n, r, a, o, l) => {
            const i = () => {
                if (e.isMounted) {
                    let {
                        next: t,
                        bu: n,
                        u: r,
                        parent: s,
                        vnode: u
                    } = e;
                    {
                        const n = Qr(e);
                        if (n) return t && (t.el = u.el, B(e, t, l)), void n.asyncDep.then((() => {
                            e.isUnmounted || i()
                        }))
                    }
                    let c, d = t;
                    Xr(e, !1), t ? (t.el = u.el, B(e, t, l)) : t = u, n && I(n), (c = t.props && t.props.onVnodeBeforeUpdate) && za(c, s, t, u), Xr(e, !0);
                    const f = pa(e),
                        v = e.subTree;
                    e.subTree = f, m(v, f, p(v.el), K(v), e, a, o), t.el = f.el, null === d && function ({
                        vnode: e,
                        parent: t
                    }, n) {
                        for (; t;) {
                            const r = t.subTree;
                            if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r !== e) break;
                            (e = t.vnode).el = n, t = t.parent
                        }
                    }(e, f.el), r && qr(r, a), (c = t.props && t.props.onVnodeUpdated) && qr((() => za(c, s, t, u)), a)
                } else {
                    let l;
                    const {
                        el: i,
                        props: s
                    } = t, {
                        bm: u,
                        m: c,
                        parent: d,
                        root: p,
                        type: f
                    } = e, v = In(t);
                    Xr(e, !1), u && I(u), !v && (l = s && s.onVnodeBeforeMount) && za(l, d, t), Xr(e, !0);
                    {
                        p.ce && p.ce._injectChildStyle(f);
                        const l = e.subTree = pa(e);
                        m(null, l, n, r, e, a, o), t.el = l.el
                    }
                    if (c && qr(c, a), !v && (l = s && s.onVnodeMounted)) {
                        const e = t;
                        qr((() => za(l, d, e)), a)
                    } (256 & t.shapeFlag || d && In(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && qr(e.a, a), e.isMounted = !0, t = n = r = null
                }
            };
            e.scope.on();
            const s = e.effect = new oe(i);
            e.scope.off();
            const u = e.update = s.run.bind(s),
                c = e.job = s.runIfDirty.bind(s);
            c.i = e, c.id = e.uid, s.scheduler = () => qt(c), Xr(e, !0), u()
        }, B = (e, t, n) => {
            t.component = e;
            const r = e.vnode.props;
            e.vnode = t, e.next = null,
                function (e, t, n, r) {
                    const {
                        props: a,
                        attrs: o,
                        vnode: {
                            patchFlag: l
                        }
                    } = e, i = ht(a), [s] = e.propsOptions;
                    let u = !1;
                    if (!(r || l > 0) || 16 & l) {
                        let r;
                        Or(e, t, a, o) && (u = !0);
                        for (const o in i) t && (v(t, o) || (r = P(o)) !== o && v(t, r)) || (s ? !n || void 0 === n[o] && void 0 === n[r] || (a[o] = Hr(s, i, o, void 0, e, !0)) : delete a[o]);
                        if (o !== i)
                            for (const e in o) t && v(t, e) || (delete o[e], u = !0)
                    } else if (8 & l) {
                        const n = e.vnode.dynamicProps;
                        for (let r = 0; r < n.length; r++) {
                            let l = n[r];
                            if (da(e.emitsOptions, l)) continue;
                            const c = t[l];
                            if (s)
                                if (v(o, l)) c !== o[l] && (o[l] = c, u = !0);
                                else {
                                    const t = F(l);
                                    a[t] = Hr(s, i, t, c, e, !1)
                                }
                            else c !== o[l] && (o[l] = c, u = !0)
                        }
                    }
                    u && Pe(e.attrs, "set", "")
                }(e, t.props, r, n), ((e, t, n) => {
                    const {
                        vnode: r,
                        slots: a
                    } = e;
                    let l = !0,
                        i = o;
                    if (32 & r.shapeFlag) {
                        const e = t._;
                        e ? n && 1 === e ? l = !1 : Zr(a, t, n) : (l = !t.$stable, Wr(t, a)), i = t
                    } else t && (Gr(e, t), i = {
                        default: 1
                    });
                    if (l)
                        for (const o in a) zr(o) || null != i[o] || delete a[o]
                })(e, t.children, n), ke(), Kt(e), we()
        }, N = (e, t, n, r, a, o, l, i, s = !1) => {
            const u = e && e.children,
                c = e ? e.shapeFlag : 0,
                p = t.children,
                {
                    patchFlag: f,
                    shapeFlag: v
                } = t;
            if (f > 0) {
                if (128 & f) return void j(u, p, n, r, a, o, l, i, s);
                if (256 & f) return void z(u, p, n, r, a, o, l, i, s)
            }
            8 & v ? (16 & c && Y(u, a, o), p !== u && d(n, p)) : 16 & c ? 16 & v ? j(u, p, n, r, a, o, l, i, s) : Y(u, a, o, !0) : (8 & c && d(n, ""), 16 & v && _(p, n, r, a, o, l, i, s))
        }, z = (e, t, n, r, a, o, i, s, u) => {
            t = t || l;
            const c = (e = e || l).length,
                d = t.length,
                p = Math.min(c, d);
            let f;
            for (f = 0; f < p; f++) {
                const r = t[f] = u ? Ba(t[f]) : Ha(t[f]);
                m(e[f], r, n, null, a, o, i, s, u)
            }
            c > d ? Y(e, a, o, !0, !1, p) : _(t, n, r, a, o, i, s, u, p)
        }, j = (e, t, n, r, a, o, i, s, u) => {
            let c = 0;
            const d = t.length;
            let p = e.length - 1,
                f = d - 1;
            for (; c <= p && c <= f;) {
                const r = e[c],
                    l = t[c] = u ? Ba(t[c]) : Ha(t[c]);
                if (!Fa(r, l)) break;
                m(r, l, n, null, a, o, i, s, u), c++
            }
            for (; c <= p && c <= f;) {
                const r = e[p],
                    l = t[f] = u ? Ba(t[f]) : Ha(t[f]);
                if (!Fa(r, l)) break;
                m(r, l, n, null, a, o, i, s, u), p--, f--
            }
            if (c > p) {
                if (c <= f) {
                    const e = f + 1,
                        l = e < d ? t[e].el : r;
                    for (; c <= f;) m(null, t[c] = u ? Ba(t[c]) : Ha(t[c]), n, l, a, o, i, s, u), c++
                }
            } else if (c > f)
                for (; c <= p;) W(e[c], a, o, !0), c++;
            else {
                const v = c,
                    g = c,
                    h = new Map;
                for (c = g; c <= f; c++) {
                    const e = t[c] = u ? Ba(t[c]) : Ha(t[c]);
                    null != e.key && h.set(e.key, c)
                }
                let y, b = 0;
                const k = f - g + 1;
                let w = !1,
                    x = 0;
                const C = new Array(k);
                for (c = 0; c < k; c++) C[c] = 0;
                for (c = v; c <= p; c++) {
                    const r = e[c];
                    if (b >= k) {
                        W(r, a, o, !0);
                        continue
                    }
                    let l;
                    if (null != r.key) l = h.get(r.key);
                    else
                        for (y = g; y <= f; y++)
                            if (0 === C[y - g] && Fa(r, t[y])) {
                                l = y;
                                break
                            } void 0 === l ? W(r, a, o, !0) : (C[l - g] = c + 1, l >= x ? x = l : w = !0, m(r, t[l], n, null, a, o, i, s, u), b++)
                }
                const S = w ? function (e) {
                    const t = e.slice(),
                        n = [0];
                    let r, a, o, l, i;
                    const s = e.length;
                    for (r = 0; r < s; r++) {
                        const s = e[r];
                        if (0 !== s) {
                            if (a = n[n.length - 1], e[a] < s) {
                                t[r] = a, n.push(r);
                                continue
                            }
                            for (o = 0, l = n.length - 1; o < l;) i = o + l >> 1, e[n[i]] < s ? o = i + 1 : l = i;
                            s < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
                        }
                    }
                    for (o = n.length, l = n[o - 1]; o-- > 0;) n[o] = l, l = t[l];
                    return n
                }(C) : l;
                for (y = S.length - 1, c = k - 1; c >= 0; c--) {
                    const e = g + c,
                        l = t[e],
                        p = e + 1 < d ? t[e + 1].el : r;
                    0 === C[c] ? m(null, l, n, p, a, o, i, s, u) : w && (y < 0 || c !== S[y] ? U(l, n, p, 2) : y--)
                }
            }
        }, U = (e, n, r, a, o = null) => {
            const {
                el: l,
                type: i,
                transition: s,
                children: u,
                shapeFlag: c
            } = e;
            if (6 & c) U(e.component.subTree, n, r, a);
            else if (128 & c) e.suspense.move(n, r, a);
            else if (64 & c) i.move(e, n, r, Q);
            else if (i !== ma)
                if (i !== ka)
                    if (2 !== a && 1 & c && s)
                        if (0 === a) s.beforeEnter(l), t(l, n, r), qr((() => s.enter(l)), o);
                        else {
                            const {
                                leave: e,
                                delayLeave: a,
                                afterLeave: o
                            } = s, i = () => t(l, n, r), u = () => {
                                e(l, (() => {
                                    i(), o && o()
                                }))
                            };
                            a ? a(l, i, u) : u()
                        }
                    else t(l, n, r);
                else (({
                    el: e,
                    anchor: n
                }, r, a) => {
                    let o;
                    for (; e && e !== n;) o = f(e), t(e, r, a), e = o;
                    t(n, r, a)
                })(e, n, r);
            else {
                t(l, n, r);
                for (let e = 0; e < u.length; e++) U(u[e], n, r, a);
                t(e.anchor, n, r)
            }
        }, W = (e, t, n, r = !1, a = !1) => {
            const {
                type: o,
                props: l,
                ref: i,
                children: s,
                dynamicChildren: u,
                shapeFlag: c,
                patchFlag: d,
                dirs: p,
                cacheIndex: f
            } = e;
            if (-2 === d && (a = !1), null != i && Rn(i, null, n, e, !0), null != f && (t.renderCache[f] = void 0), 256 & c) return void t.ctx.deactivate(e);
            const v = 1 & c && p,
                g = !In(e);
            let h;
            if (g && (h = l && l.onVnodeBeforeUnmount) && za(h, t, e), 6 & c) q(e.component, n, r);
            else {
                if (128 & c) return void e.suspense.unmount(n, r);
                v && on(e, null, t, "beforeUnmount"), 64 & c ? e.type.remove(e, t, n, Q, r) : u && !u.hasOnce && (o !== ma || d > 0 && 64 & d) ? Y(u, t, n, !1, !0) : (o === ma && 384 & d || !a && 16 & c) && Y(s, t, n), r && G(e)
            } (g && (h = l && l.onVnodeUnmounted) || v) && qr((() => {
                h && za(h, t, e), v && on(e, null, t, "unmounted")
            }), n)
        }, G = e => {
            const {
                type: t,
                el: r,
                anchor: a,
                transition: o
            } = e;
            if (t === ma) return void Z(r, a);
            if (t === ka) return void (({
                el: e,
                anchor: t
            }) => {
                let r;
                for (; e && e !== t;) r = f(e), n(e), e = r;
                n(t)
            })(e);
            const l = () => {
                n(r), o && !o.persisted && o.afterLeave && o.afterLeave()
            };
            if (1 & e.shapeFlag && o && !o.persisted) {
                const {
                    leave: t,
                    delayLeave: n
                } = o, a = () => t(r, l);
                n ? n(e.el, l, a) : a()
            } else l()
        }, Z = (e, t) => {
            let r;
            for (; e !== t;) r = f(e), n(e), e = r;
            n(t)
        }, q = (e, t, n) => {
            const {
                bum: r,
                scope: a,
                job: o,
                subTree: l,
                um: i,
                m: s,
                a: u
            } = e;
            ea(s), ea(u), r && I(r), a.stop(), o && (o.flags |= 8, W(l, e, t, n)), i && qr(i, t), qr((() => {
                e.isUnmounted = !0
            }), t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve())
        }, Y = (e, t, n, r = !1, a = !1, o = 0) => {
            for (let l = o; l < e.length; l++) W(e[l], t, n, r, a)
        }, K = e => {
            if (6 & e.shapeFlag) return K(e.component.subTree);
            if (128 & e.shapeFlag) return e.suspense.next();
            const t = f(e.anchor || e.el),
                n = t && t[ln];
            return n ? f(n) : t
        };
        let X = !1;
        const J = (e, t, n) => {
            null == e ? t._vnode && W(t._vnode, null, null, !0) : m(t._vnode || null, e, t, null, null, null, n), t._vnode = e, X || (X = !0, Kt(), Xt(), X = !1)
        },
            Q = {
                p: m,
                um: W,
                m: U,
                r: G,
                mt: M,
                mc: _,
                pc: N,
                pbc: T,
                n: K,
                o: e
            };
        return {
            render: J,
            hydrate: undefined,
            createApp: Fr(J)
        }
    }(e)
}

function Kr({
    type: e,
    props: t
}, n) {
    return "svg" === n && "foreignObject" === e || "mathml" === n && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Xr({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Jr(e, t, n = !1) {
    const r = e.children,
        a = t.children;
    if (g(r) && g(a))
        for (let o = 0; o < r.length; o++) {
            const e = r[o];
            let t = a[o];
            1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = a[o] = Ba(a[o]), t.el = e.el), n || -2 === t.patchFlag || Jr(e, t)), t.type === ya && (t.el = e.el)
        }
}

function Qr(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Qr(t)
}

function ea(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const ta = Symbol.for("v-scx"),
    na = () => Vr(ta);

function ra(e, t) {
    return oa(e, null, t)
}

function aa(e, t, n) {
    return oa(e, t, n)
}

function oa(e, t, n = o) {
    const {
        immediate: r,
        deep: a,
        flush: l,
        once: s
    } = n, u = d({}, n), c = t && r || !t && "post" !== l;
    let f;
    if (Ja)
        if ("sync" === l) {
            const e = na();
            f = e.__watcherHandles || (e.__watcherHandles = [])
        } else if (!c) {
            const e = () => { };
            return e.stop = i, e.resume = i, e.pause = i, e
        }
    const v = Wa;
    u.call = (e, t, n) => Ht(e, v, t, n);
    let h = !1;
    "post" === l ? u.scheduler = e => {
        qr(e, v && v.suspense)
    } : "sync" !== l && (h = !0, u.scheduler = (e, t) => {
        t ? e() : qt(e)
    }), u.augmentJob = e => {
        t && (e.flags |= 4), h && (e.flags |= 2, v && (e.id = v.uid, e.i = v))
    };
    const m = function (e, t, n = o) {
        const {
            immediate: r,
            deep: a,
            once: l,
            scheduler: s,
            augmentJob: u,
            call: c
        } = n, d = e => a ? e : vt(e) || !1 === a || 0 === a ? It(e, 1) : It(e);
        let f, v, h, m, b = !1,
            k = !1;
        if (bt(e) ? (v = () => e.value, b = vt(e)) : pt(e) ? (v = () => d(e), b = !0) : g(e) ? (k = !0, b = e.some((e => pt(e) || vt(e))), v = () => e.map((e => bt(e) ? e.value : pt(e) ? d(e) : y(e) ? c ? c(e, 2) : e() : void 0))) : v = y(e) ? t ? c ? () => c(e, 2) : e : () => {
            if (h) {
                ke();
                try {
                    h()
                } finally {
                    we()
                }
            }
            const t = Rt;
            Rt = f;
            try {
                return c ? c(e, 3, [m]) : e(m)
            } finally {
                Rt = t
            }
        } : i, t && a) {
            const e = v,
                t = !0 === a ? 1 / 0 : a;
            v = () => It(e(), t)
        }
        const w = Q,
            x = () => {
                f.stop(), w && w.active && p(w.effects, f)
            };
        if (l && t) {
            const e = t;
            t = (...t) => {
                e(...t), x()
            }
        }
        let C = k ? new Array(e.length).fill(Vt) : Vt;
        const S = e => {
            if (1 & f.flags && (f.dirty || e))
                if (t) {
                    const e = f.run();
                    if (a || b || (k ? e.some(((e, t) => R(e, C[t]))) : R(e, C))) {
                        h && h();
                        const n = Rt;
                        Rt = f;
                        try {
                            const n = [e, C === Vt ? void 0 : k && C[0] === Vt ? [] : C, m];
                            c ? c(t, 3, n) : t(...n), C = e
                        } finally {
                            Rt = n
                        }
                    }
                } else f.run()
        };
        return u && u(S), f = new oe(v), f.scheduler = s ? () => s(S, !1) : S, m = e => function (e, t = !1, n = Rt) {
            if (n) {
                let t = Mt.get(n);
                t || Mt.set(n, t = []), t.push(e)
            }
        }(e, !1, f), h = f.onStop = () => {
            const e = Mt.get(f);
            if (e) {
                if (c) c(e, 4);
                else
                    for (const t of e) t();
                Mt.delete(f)
            }
        }, t ? r ? S(!0) : C = f.run() : s ? s(S.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x
    }(e, t, u);
    return Ja && (f ? f.push(m) : c && m()), m
}

function la(e, t, n) {
    const r = this.proxy,
        a = b(e) ? e.includes(".") ? ia(r, e) : () => r[e] : e.bind(r, r);
    let o;
    y(t) ? o = t : (o = t.handler, n = t);
    const l = Ya(this),
        i = oa(a, o.bind(r), n);
    return l(), i
}

function ia(e, t) {
    const n = t.split(".");
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++) t = t[n[e]];
        return t
    }
}
const sa = (e, t) => "modelValue" === t || "model-value" === t ? e.modelModifiers : e[`${t}Modifiers`] || e[`${F(t)}Modifiers`] || e[`${P(t)}Modifiers`];

function ua(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || o;
    let a = n;
    const l = t.startsWith("update:"),
        i = l && sa(r, t.slice(7));
    let s;
    i && (i.trim && (a = n.map((e => b(e) ? e.trim() : e))), i.number && (a = n.map(H)));
    let u = r[s = M(t)] || r[s = M(F(t))];
    !u && l && (u = r[s = M(P(t))]), u && Ht(u, e, 6, a);
    const c = r[s + "Once"];
    if (c) {
        if (e.emitted) {
            if (e.emitted[s]) return
        } else e.emitted = {};
        e.emitted[s] = !0, Ht(c, e, 6, a)
    }
}

function ca(e, t, n = !1) {
    const r = t.emitsCache,
        a = r.get(e);
    if (void 0 !== a) return a;
    const o = e.emits;
    let l = {},
        i = !1;
    if (!y(e)) {
        const r = e => {
            const n = ca(e, t, !0);
            n && (i = !0, d(l, n))
        };
        !n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r)
    }
    return o || i ? (g(o) ? o.forEach((e => l[e] = null)) : d(l, o), w(e) && r.set(e, l), l) : (w(e) && r.set(e, null), null)
}

function da(e, t) {
    return !(!e || !u(t)) && (t = t.slice(2).replace(/Once$/, ""), v(e, t[0].toLowerCase() + t.slice(1)) || v(e, P(t)) || v(e, t))
}

function pa(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: a,
        propsOptions: [o],
        slots: l,
        attrs: i,
        emit: s,
        render: u,
        renderCache: d,
        props: p,
        data: f,
        setupState: v,
        ctx: g,
        inheritAttrs: h
    } = e, m = nn(e);
    let y, b;
    try {
        if (4 & n.shapeFlag) {
            const e = a || r,
                t = e;
            y = Ha(u.call(t, e, d, p, v, f, g)), b = i
        } else {
            const e = t;
            y = Ha(e.length > 1 ? e(p, {
                attrs: i,
                slots: l,
                emit: s
            }) : e(p, null)), b = t.props ? i : fa(i)
        }
    } catch (w) {
        wa.length = 0, Bt(w, e, 1), y = Ma(ba)
    }
    let k = y;
    if (b && !1 !== h) {
        const e = Object.keys(b),
            {
                shapeFlag: t
            } = k;
        e.length && 7 & t && (o && e.some(c) && (b = va(b, o)), k = Ra(k, b, !1, !0))
    }
    return n.dirs && (k = Ra(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && $n(k, n.transition), y = k, nn(m), y
}
const fa = e => {
    let t;
    for (const n in e) ("class" === n || "style" === n || u(n)) && ((t || (t = {}))[n] = e[n]);
    return t
},
    va = (e, t) => {
        const n = {};
        for (const r in e) c(r) && r.slice(9) in t || (n[r] = e[r]);
        return n
    };

function ga(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let a = 0; a < r.length; a++) {
        const o = r[a];
        if (t[o] !== e[o] && !da(n, o)) return !0
    }
    return !1
}
const ha = e => e.__isSuspense,
    ma = Symbol.for("v-fgt"),
    ya = Symbol.for("v-txt"),
    ba = Symbol.for("v-cmt"),
    ka = Symbol.for("v-stc"),
    wa = [];
let xa = null;

function Ca(e = !1) {
    wa.push(xa = e ? null : [])
}
let Sa = 1;

function _a(e, t = !1) {
    Sa += e, e < 0 && xa && t && (xa.hasOnce = !0)
}

function Aa(e) {
    return e.dynamicChildren = Sa > 0 ? xa || l : null, wa.pop(), xa = wa[wa.length - 1] || null, Sa > 0 && xa && xa.push(e), e
}

function La(e, t, n, r, a, o) {
    return Aa(Va(e, t, n, r, a, o, !0))
}

function Ta(e, t, n, r, a) {
    return Aa(Ma(e, t, n, r, a, !0))
}

function Ea(e) {
    return !!e && !0 === e.__v_isVNode
}

function Fa(e, t) {
    return e.type === t.type && e.key === t.key
}
const $a = ({
    key: e
}) => null != e ? e : null,
    Pa = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => ("number" == typeof e && (e = "" + e), null != e ? b(e) || bt(e) || y(e) ? {
        i: en,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function Va(e, t = null, n = null, r = 0, a = null, o = (e === ma ? 0 : 1), l = !1, i = !1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && $a(t),
        ref: t && Pa(t),
        scopeId: tn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: a,
        dynamicChildren: null,
        appContext: null,
        ctx: en
    };
    return i ? (Da(s, n), 128 & o && e.normalize(s)) : n && (s.shapeFlag |= b(n) ? 8 : 16), Sa > 0 && !l && xa && (s.patchFlag > 0 || 6 & o) && 32 !== s.patchFlag && xa.push(s), s
}
const Ma = function (e, t = null, n = null, r = 0, a = null, o = !1) {
    if (e && e !== lr || (e = ba), Ea(e)) {
        const r = Ra(e, t, !0);
        return n && Da(r, n), Sa > 0 && !o && xa && (6 & r.shapeFlag ? xa[xa.indexOf(e)] = r : xa.push(r)), r.patchFlag = -2, r
    }
    var l;
    if (y(l = e) && "__vccOpts" in l && (e = e.__vccOpts), t) {
        t = function (e) {
            return e ? gt(e) || Ir(e) ? d({}, e) : e : null
        }(t);
        let {
            class: e,
            style: n
        } = t;
        e && !b(e) && (t.class = G(e)), w(n) && (gt(n) && !g(n) && (n = d({}, n)), t.style = N(n))
    }
    return Va(e, t, n, r, a, b(e) ? 1 : ha(e) ? 128 : sn(e) ? 64 : w(e) ? 4 : y(e) ? 2 : 0, o, !0)
};

function Ra(e, t, n = !1, r = !1) {
    const {
        props: a,
        ref: o,
        patchFlag: l,
        children: i,
        transition: s
    } = e, u = t ? Na(a || {}, t) : a, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && $a(u),
        ref: t && t.ref ? n && o ? g(o) ? o.concat(Pa(t)) : [o, Pa(t)] : Pa(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ma ? -1 === l ? 16 : 16 | l : l,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ra(e.ssContent),
        ssFallback: e.ssFallback && Ra(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && r && $n(c, s.clone(c)), c
}

function Ia(e = " ", t = 0) {
    return Ma(ya, null, e, t)
}

function Oa(e = "", t = !1) {
    return t ? (Ca(), Ta(ba, null, e)) : Ma(ba, null, e)
}

function Ha(e) {
    return null == e || "boolean" == typeof e ? Ma(ba) : g(e) ? Ma(ma, null, e.slice()) : Ea(e) ? Ba(e) : Ma(ya, null, String(e))
}

function Ba(e) {
    return null === e.el && -1 !== e.patchFlag || e.memo ? e : Ra(e)
}

function Da(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (null == t) t = null;
    else if (g(t)) n = 16;
    else if ("object" == typeof t) {
        if (65 & r) {
            const n = t.default;
            return void (n && (n._c && (n._d = !1), Da(e, n()), n._c && (n._d = !0)))
        } {
            n = 32;
            const r = t._;
            r || Ir(t) ? 3 === r && en && (1 === en.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = en
        }
    } else y(t) ? (t = {
        default: t,
        _ctx: en
    }, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [Ia(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Na(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const e in r)
            if ("class" === e) t.class !== r.class && (t.class = G([t.class, r.class]));
            else if ("style" === e) t.style = N([t.style, r.style]);
            else if (u(e)) {
                const n = t[e],
                    a = r[e];
                !a || n === a || g(n) && n.includes(a) || (t[e] = n ? [].concat(n, a) : a)
            } else "" !== e && (t[e] = r[e])
    }
    return t
}

function za(e, t, n, r = null) {
    Ht(e, t, 7, [n, r])
}
const ja = Tr();
let Ua = 0,
    Wa = null;
const Ga = () => Wa || en;
let Za, qa;
{
    const e = D(),
        t = (t, n) => {
            let r;
            return (r = e[t]) || (r = e[t] = []), r.push(n), e => {
                r.length > 1 ? r.forEach((t => t(e))) : r[0](e)
            }
        };
    Za = t("__VUE_INSTANCE_SETTERS__", (e => Wa = e)), qa = t("__VUE_SSR_SETTERS__", (e => Ja = e))
}
const Ya = e => {
    const t = Wa;
    return Za(e), e.scope.on(), () => {
        e.scope.off(), Za(t)
    }
},
    Ka = () => {
        Wa && Wa.scope.off(), Za(null)
    };

function Xa(e) {
    return 4 & e.vnode.shapeFlag
}
let Ja = !1;

function Qa(e, t, n) {
    y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : w(t) && (e.setupState = At(t)), eo(e)
}

function eo(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || i);
    {
        const t = Ya(e);
        ke();
        try {
            ! function (e) {
                const t = kr(e),
                    n = e.proxy,
                    r = e.ctx;
                mr = !1, t.beforeCreate && yr(t.beforeCreate, e, "bc");
                const {
                    data: a,
                    computed: o,
                    methods: l,
                    watch: s,
                    provide: u,
                    inject: c,
                    created: d,
                    beforeMount: p,
                    mounted: f,
                    beforeUpdate: v,
                    updated: h,
                    activated: m,
                    deactivated: b,
                    beforeDestroy: k,
                    beforeUnmount: x,
                    destroyed: C,
                    unmounted: S,
                    render: _,
                    renderTracked: A,
                    renderTriggered: L,
                    errorCaptured: T,
                    serverPrefetch: E,
                    expose: F,
                    inheritAttrs: $,
                    components: P,
                    directives: V,
                    filters: M
                } = t;
                if (c && function (e, t) {
                    g(e) && (e = Sr(e));
                    for (const n in e) {
                        const r = e[n];
                        let a;
                        a = w(r) ? "default" in r ? Vr(r.from || n, r.default, !0) : Vr(r.from || n) : Vr(r), bt(a) ? Object.defineProperty(t, n, {
                            enumerable: !0,
                            configurable: !0,
                            get() {
                                return a.value
                            },
                            set(e) {
                                return a.value = e
                            }
                        }) : t[n] = a
                    }
                }(c, r), l)
                    for (const i in l) {
                        const e = l[i];
                        y(e) && (r[i] = e.bind(n))
                    }
                if (a) {
                    const t = a.call(n, n);
                    w(t) && (e.data = st(t))
                }
                if (mr = !0, o)
                    for (const g in o) {
                        const e = o[g],
                            t = y(e) ? e.bind(n, n) : y(e.get) ? e.get.bind(n, n) : i,
                            a = !y(e) && y(e.set) ? e.set.bind(n) : i,
                            l = ao({
                                get: t,
                                set: a
                            });
                        Object.defineProperty(r, g, {
                            enumerable: !0,
                            configurable: !0,
                            get() {
                                return l.value
                            },
                            set(e) {
                                return l.value = e
                            }
                        })
                    }
                if (s)
                    for (const i in s) br(s[i], r, n, i);
                if (u) {
                    const e = y(u) ? u.call(n) : u;
                    Reflect.ownKeys(e).forEach((t => {
                        Pr(t, e[t])
                    }))
                }

                function R(e, t) {
                    g(t) ? t.forEach((t => e(t.bind(n)))) : t && e(t.bind(n))
                }
                if (d && yr(d, e, "c"), R(qn, p), R(Yn, f), R(Kn, v), R(Xn, h), R(Dn, m), R(Nn, b), R(rr, T), R(nr, A), R(tr, L), R(Jn, x), R(Qn, S), R(er, E), g(F))
                    if (F.length) {
                        const t = e.exposed || (e.exposed = {});
                        F.forEach((e => {
                            Object.defineProperty(t, e, {
                                get() {
                                    return n[e]
                                },
                                set(t) {
                                    return n[e] = t
                                }
                            })
                        }))
                    } else e.exposed || (e.exposed = {});
                _ && e.render === i && (e.render = _), null != $ && (e.inheritAttrs = $), P && (e.components = P), V && (e.directives = V), E && Mn(e)
            }(e)
        } finally {
            we(), t()
        }
    }
}
const to = {
    get(e, t) {
        return $e(e, 0, ""), e[t]
    }
};

function no(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(At((t = e.exposed, !v(t, "__v_skip") && Object.isExtensible(t) && O(t, "__v_skip", !0), t)), {
        get(t, n) {
            return n in t ? t[n] : n in fr ? fr[n](e) : void 0
        },
        has(e, t) {
            return t in e || t in fr
        }
    })) : e.proxy;
    var t
}

function ro(e, t = !0) {
    return y(e) ? e.displayName || e.name : e.name || t && e.__name
}
const ao = (e, t) => {
    const n = function (e, t, n = !1) {
        let r, a;
        return y(e) ? r = e : (r = e.get, a = e.set), new Pt(r, a, n)
    }(e, 0, Ja);
    return n
};

function oo(e, t, n) {
    const r = arguments.length;
    return 2 === r ? w(t) && !g(t) ? Ea(t) ? Ma(e, null, [t]) : Ma(e, t) : Ma(e, null, t) : (r > 3 ? n = [].slice.call(arguments, 2) : 3 === r && Ea(n) && (n = [n]), Ma(e, t, n))
}
const lo = "3.5.13";
let io;
const so = "undefined" != typeof window && window.trustedTypes;
if (so) try {
    io = so.createPolicy("vue", {
        createHTML: e => e
    })
} catch (Uk) { }
const uo = io ? e => io.createHTML(e) : e => e,
    co = "undefined" != typeof document ? document : null,
    po = co && co.createElement("template"),
    fo = {
        insert(e, t, n) {
            t.insertBefore(e, n || null)
        },
        remove(e) {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement(e, t, n, r) {
            const a = "svg" === t ? co.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? co.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? co.createElement(e, {
                is: n
            }) : co.createElement(e);
            return "select" === e && r && null != r.multiple && a.setAttribute("multiple", r.multiple), a
        },
        createText: e => co.createTextNode(e),
        createComment: e => co.createComment(e),
        setText(e, t) {
            e.nodeValue = t
        },
        setElementText(e, t) {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => co.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, a, o) {
            const l = n ? n.previousSibling : t.lastChild;
            if (a && (a === o || a.nextSibling))
                for (; t.insertBefore(a.cloneNode(!0), n), a !== o && (a = a.nextSibling););
            else {
                po.innerHTML = uo("svg" === r ? `<svg>${e}</svg>` : "mathml" === r ? `<math>${e}</math>` : e);
                const a = po.content;
                if ("svg" === r || "mathml" === r) {
                    const e = a.firstChild;
                    for (; e.firstChild;) a.appendChild(e.firstChild);
                    a.removeChild(e)
                }
                t.insertBefore(a, n)
            }
            return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    vo = "transition",
    go = "animation",
    ho = Symbol("_vtc"),
    mo = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    yo = d({}, Cn, mo),
    bo = (e => (e.displayName = "Transition", e.props = yo, e))(((e, {
        slots: t
    }) => oo(An, xo(e), t))),
    ko = (e, t = []) => {
        g(e) ? e.forEach((e => e(...t))) : e && e(...t)
    },
    wo = e => !!e && (g(e) ? e.some((e => e.length > 1)) : e.length > 1);

function xo(e) {
    const t = {};
    for (const d in e) d in mo || (t[d] = e[d]);
    if (!1 === e.css) return t;
    const {
        name: n = "v",
        type: r,
        duration: a,
        enterFromClass: o = `${n}-enter-from`,
        enterActiveClass: l = `${n}-enter-active`,
        enterToClass: i = `${n}-enter-to`,
        appearFromClass: s = o,
        appearActiveClass: u = l,
        appearToClass: c = i,
        leaveFromClass: p = `${n}-leave-from`,
        leaveActiveClass: f = `${n}-leave-active`,
        leaveToClass: v = `${n}-leave-to`
    } = e, g = function (e) {
        if (null == e) return null;
        if (w(e)) return [Co(e.enter), Co(e.leave)];
        {
            const t = Co(e);
            return [t, t]
        }
    }(a), h = g && g[0], m = g && g[1], {
        onBeforeEnter: y,
        onEnter: b,
        onEnterCancelled: k,
        onLeave: x,
        onLeaveCancelled: C,
        onBeforeAppear: S = y,
        onAppear: _ = b,
        onAppearCancelled: A = k
    } = t, L = (e, t, n, r) => {
        e._enterCancelled = r, _o(e, t ? c : i), _o(e, t ? u : l), n && n()
    }, T = (e, t) => {
        e._isLeaving = !1, _o(e, p), _o(e, v), _o(e, f), t && t()
    }, E = e => (t, n) => {
        const a = e ? _ : b,
            l = () => L(t, e, n);
        ko(a, [t, l]), Ao((() => {
            _o(t, e ? s : o), So(t, e ? c : i), wo(a) || To(t, r, h, l)
        }))
    };
    return d(t, {
        onBeforeEnter(e) {
            ko(y, [e]), So(e, o), So(e, l)
        },
        onBeforeAppear(e) {
            ko(S, [e]), So(e, s), So(e, u)
        },
        onEnter: E(!1),
        onAppear: E(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            const n = () => T(e, t);
            So(e, p), e._enterCancelled ? (So(e, f), Po()) : (Po(), So(e, f)), Ao((() => {
                e._isLeaving && (_o(e, p), So(e, v), wo(x) || To(e, r, m, n))
            })), ko(x, [e, n])
        },
        onEnterCancelled(e) {
            L(e, !1, void 0, !0), ko(k, [e])
        },
        onAppearCancelled(e) {
            L(e, !0, void 0, !0), ko(A, [e])
        },
        onLeaveCancelled(e) {
            T(e), ko(C, [e])
        }
    })
}

function Co(e) {
    const t = (e => {
        const t = b(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    })(e);
    return t
}

function So(e, t) {
    t.split(/\s+/).forEach((t => t && e.classList.add(t))), (e[ho] || (e[ho] = new Set)).add(t)
}

function _o(e, t) {
    t.split(/\s+/).forEach((t => t && e.classList.remove(t)));
    const n = e[ho];
    n && (n.delete(t), n.size || (e[ho] = void 0))
}

function Ao(e) {
    requestAnimationFrame((() => {
        requestAnimationFrame(e)
    }))
}
let Lo = 0;

function To(e, t, n, r) {
    const a = e._endId = ++Lo,
        o = () => {
            a === e._endId && r()
        };
    if (null != n) return setTimeout(o, n);
    const {
        type: l,
        timeout: i,
        propCount: s
    } = Eo(e, t);
    if (!l) return r();
    const u = l + "end";
    let c = 0;
    const d = () => {
        e.removeEventListener(u, p), o()
    },
        p = t => {
            t.target === e && ++c >= s && d()
        };
    setTimeout((() => {
        c < s && d()
    }), i + 1), e.addEventListener(u, p)
}

function Eo(e, t) {
    const n = window.getComputedStyle(e),
        r = e => (n[e] || "").split(", "),
        a = r(`${vo}Delay`),
        o = r(`${vo}Duration`),
        l = Fo(a, o),
        i = r(`${go}Delay`),
        s = r(`${go}Duration`),
        u = Fo(i, s);
    let c = null,
        d = 0,
        p = 0;
    return t === vo ? l > 0 && (c = vo, d = l, p = o.length) : t === go ? u > 0 && (c = go, d = u, p = s.length) : (d = Math.max(l, u), c = d > 0 ? l > u ? vo : go : null, p = c ? c === vo ? o.length : s.length : 0), {
        type: c,
        timeout: d,
        propCount: p,
        hasTransform: c === vo && /\b(transform|all)(,|$)/.test(r(`${vo}Property`).toString())
    }
}

function Fo(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map(((t, n) => $o(t) + $o(e[n]))))
}

function $o(e) {
    return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."))
}

function Po() {
    return document.body.offsetHeight
}
const Vo = Symbol("_vod"),
    Mo = Symbol("_vsh"),
    Ro = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Vo] = "none" === e.style.display ? "" : e.style.display, n && t ? n.beforeEnter(e) : Io(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Io(e, !0), r.enter(e)) : r.leave(e, (() => {
                Io(e, !1)
            })) : Io(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Io(e, t)
        }
    };

function Io(e, t) {
    e.style.display = t ? e[Vo] : "none", e[Mo] = !t
}
const Oo = Symbol(""),
    Ho = /(^|;)\s*display\s*:/,
    Bo = /\s*!important$/;

function Do(e, t, n) {
    if (g(n)) n.forEach((n => Do(e, t, n)));
    else if (null == n && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = function (e, t) {
            const n = zo[t];
            if (n) return n;
            let r = F(t);
            if ("filter" !== r && r in e) return zo[t] = r;
            r = V(r);
            for (let a = 0; a < No.length; a++) {
                const n = No[a] + r;
                if (n in e) return zo[t] = n
            }
            return t
        }(e, t);
        Bo.test(n) ? e.setProperty(P(r), n.replace(Bo, ""), "important") : e[r] = n
    }
}
const No = ["Webkit", "Moz", "ms"],
    zo = {},
    jo = "http://www.w3.org/1999/xlink";

function Uo(e, t, n, r, a, o = Z(t)) {
    r && t.startsWith("xlink:") ? null == n ? e.removeAttributeNS(jo, t.slice(6, t.length)) : e.setAttributeNS(jo, t, n) : null == n || o && !q(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : k(n) ? String(n) : n)
}

function Wo(e, t, n, r, a) {
    if ("innerHTML" === t || "textContent" === t) return void (null != n && (e[t] = "innerHTML" === t ? uo(n) : n));
    const o = e.tagName;
    if ("value" === t && "PROGRESS" !== o && !o.includes("-")) {
        const r = "OPTION" === o ? e.getAttribute("value") || "" : e.value,
            a = null == n ? "checkbox" === e.type ? "on" : "" : String(n);
        return r === a && "_value" in e || (e.value = a), null == n && e.removeAttribute(t), void (e._value = n)
    }
    let l = !1;
    if ("" === n || null == n) {
        const r = typeof e[t];
        "boolean" === r ? n = q(n) : null == n && "string" === r ? (n = "", l = !0) : "number" === r && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch (Uk) { }
    l && e.removeAttribute(a || t)
}

function Go(e, t, n, r) {
    e.addEventListener(t, n, r)
}
const Zo = Symbol("_vei");
const qo = /(?:Once|Passive|Capture)$/;
let Yo = 0;
const Ko = Promise.resolve(),
    Xo = () => Yo || (Ko.then((() => Yo = 0)), Yo = Date.now()),
    Jo = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Qo = new WeakMap,
    el = new WeakMap,
    tl = Symbol("_moveCb"),
    nl = Symbol("_enterCb"),
    rl = (e => (delete e.props.mode, e))({
        name: "TransitionGroup",
        props: d({}, yo, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const n = Ga(),
                r = wn();
            let a, o;
            return Xn((() => {
                if (!a.length) return;
                const t = e.moveClass || `${e.name || "v"}-move`;
                if (! function (e, t, n) {
                    const r = e.cloneNode(),
                        a = e[ho];
                    a && a.forEach((e => {
                        e.split(/\s+/).forEach((e => e && r.classList.remove(e)))
                    })), n.split(/\s+/).forEach((e => e && r.classList.add(e))), r.style.display = "none";
                    const o = 1 === t.nodeType ? t : t.parentNode;
                    o.appendChild(r);
                    const {
                        hasTransform: l
                    } = Eo(r);
                    return o.removeChild(r), l
                }(a[0].el, n.vnode.el, t)) return;
                a.forEach(al), a.forEach(ol);
                const r = a.filter(ll);
                Po(), r.forEach((e => {
                    const n = e.el,
                        r = n.style;
                    So(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
                    const a = n[tl] = e => {
                        e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener("transitionend", a), n[tl] = null, _o(n, t))
                    };
                    n.addEventListener("transitionend", a)
                }))
            })), () => {
                const l = ht(e),
                    i = xo(l);
                let s = l.tag || ma;
                if (a = [], o)
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e];
                        t.el && t.el instanceof Element && (a.push(t), $n(t, Tn(t, i, r, n)), Qo.set(t, t.el.getBoundingClientRect()))
                    }
                o = t.default ? Pn(t.default()) : [];
                for (let e = 0; e < o.length; e++) {
                    const t = o[e];
                    null != t.key && $n(t, Tn(t, i, r, n))
                }
                return Ma(s, null, o)
            }
        }
    });

function al(e) {
    const t = e.el;
    t[tl] && t[tl](), t[nl] && t[nl]()
}

function ol(e) {
    el.set(e, e.el.getBoundingClientRect())
}

function ll(e) {
    const t = Qo.get(e),
        n = el.get(e),
        r = t.left - n.left,
        a = t.top - n.top;
    if (r || a) {
        const t = e.el.style;
        return t.transform = t.webkitTransform = `translate(${r}px,${a}px)`, t.transitionDuration = "0s", e
    }
}
const il = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return g(t) ? e => I(t, e) : t
};

function sl(e) {
    e.target.composing = !0
}

function ul(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const cl = Symbol("_assign"),
    dl = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, a) {
            e[cl] = il(a);
            const o = r || a.props && "number" === a.props.type;
            Go(e, t ? "change" : "input", (t => {
                if (t.target.composing) return;
                let r = e.value;
                n && (r = r.trim()), o && (r = H(r)), e[cl](r)
            })), n && Go(e, "change", (() => {
                e.value = e.value.trim()
            })), t || (Go(e, "compositionstart", sl), Go(e, "compositionend", ul), Go(e, "change", ul))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: r,
                trim: a,
                number: o
            }
        }, l) {
            if (e[cl] = il(l), e.composing) return;
            const i = t ?? "";
            if ((!o && "number" !== e.type || /^0\d/.test(e.value) ? e.value : H(e.value)) !== i) {
                if (document.activeElement === e && "range" !== e.type) {
                    if (r && t === n) return;
                    if (a && e.value.trim() === i) return
                }
                e.value = i
            }
        }
    },
    pl = d({
        patchProp(e, t, n, r, a, o) {
            const l = "svg" === a;
            "class" === t ? function (e, t, n) {
                const r = e[ho];
                r && (t = (t ? [t, ...r] : [...r]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
            }(e, r, l) : "style" === t ? function (e, t, n) {
                const r = e.style,
                    a = b(n);
                let o = !1;
                if (n && !a) {
                    if (t)
                        if (b(t))
                            for (const e of t.split(";")) {
                                const t = e.slice(0, e.indexOf(":")).trim();
                                null == n[t] && Do(r, t, "")
                            } else
                            for (const e in t) null == n[e] && Do(r, e, "");
                    for (const e in n) "display" === e && (o = !0), Do(r, e, n[e])
                } else if (a) {
                    if (t !== n) {
                        const e = r[Oo];
                        e && (n += ";" + e), r.cssText = n, o = Ho.test(n)
                    }
                } else t && e.removeAttribute("style");
                Vo in e && (e[Vo] = o ? r.display : "", e[Mo] && (r.display = "none"))
            }(e, n, r) : u(t) ? c(t) || function (e, t, n, r, a = null) {
                const o = e[Zo] || (e[Zo] = {}),
                    l = o[t];
                if (r && l) l.value = r;
                else {
                    const [n, i] = function (e) {
                        let t;
                        if (qo.test(e)) {
                            let n;
                            for (t = {}; n = e.match(qo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
                        }
                        return [":" === e[2] ? e.slice(3) : P(e.slice(2)), t]
                    }(t);
                    if (r) {
                        const l = o[t] = function (e, t) {
                            const n = e => {
                                if (e._vts) {
                                    if (e._vts <= n.attached) return
                                } else e._vts = Date.now();
                                Ht(function (e, t) {
                                    if (g(t)) {
                                        const n = e.stopImmediatePropagation;
                                        return e.stopImmediatePropagation = () => {
                                            n.call(e), e._stopped = !0
                                        }, t.map((e => t => !t._stopped && e && e(t)))
                                    }
                                    return t
                                }(e, n.value), t, 5, [e])
                            };
                            return n.value = e, n.attached = Xo(), n
                        }(r, a);
                        Go(e, n, l, i)
                    } else l && (function (e, t, n, r) {
                        e.removeEventListener(t, n, r)
                    }(e, n, l, i), o[t] = void 0)
                }
            }(e, t, 0, r, o) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : function (e, t, n, r) {
                if (r) return "innerHTML" === t || "textContent" === t || !!(t in e && Jo(t) && y(n));
                if ("spellcheck" === t || "draggable" === t || "translate" === t) return !1;
                if ("form" === t) return !1;
                if ("list" === t && "INPUT" === e.tagName) return !1;
                if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                if ("width" === t || "height" === t) {
                    const t = e.tagName;
                    if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t) return !1
                }
                return (!Jo(t) || !b(n)) && t in e
            }(e, t, r, l)) ? (Wo(e, t, r), e.tagName.includes("-") || "value" !== t && "checked" !== t && "selected" !== t || Uo(e, t, r, l, 0, "value" !== t)) : !e._isVueCE || !/[A-Z]/.test(t) && b(r) ? ("true-value" === t ? e._trueValue = r : "false-value" === t && (e._falseValue = r), Uo(e, t, r, l)) : Wo(e, F(t), r, 0, t)
        }
    }, fo);
let fl;
const vl = (...e) => {
    const t = (fl || (fl = Yr(pl))).createApp(...e),
        {
            mount: n
        } = t;
    return t.mount = e => {
        const r = function (e) {
            return b(e) ? document.querySelector(e) : e
        }(e);
        if (!r) return;
        const a = t._component;
        y(a) || a.render || a.template || (a.template = r.innerHTML), 1 === r.nodeType && (r.textContent = "");
        const o = n(r, !1, function (e) {
            return e instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e instanceof MathMLElement ? "mathml" : void 0
        }(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
    }, t
};
let gl = {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
};

function hl(e) {
    gl = e
}
const ml = {
    exec: () => null
};

function yl(e, t = "") {
    let n = "string" == typeof e ? e : e.source;
    const r = {
        replace(e, t) {
            let a = "string" == typeof t ? t : t.source;
            return a = a.replace(bl.caret, "$1"), n = n.replace(e, a), r
        },
        getRegex: () => new RegExp(n, t)
    };
    return r
}
const bl = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: e => new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
    hrRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: e => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
},
    kl = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    wl = /(?:[*+-]|\d{1,9}[.)])/,
    xl = yl(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, wl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(),
    Cl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    Sl = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    _l = yl(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Sl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
    Al = yl(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, wl).getRegex(),
    Ll = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Tl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    El = yl("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", Tl).replace("tag", Ll).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
    Fl = yl(Cl).replace("hr", kl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ll).getRegex(),
    $l = {
        blockquote: yl(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Fl).getRegex(),
        code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
        def: _l,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: kl,
        html: El,
        lheading: xl,
        list: Al,
        newline: /^(?:[ \t]*(?:\n|$))+/,
        paragraph: Fl,
        table: ml,
        text: /^[^\n]+/
    },
    Pl = yl("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", kl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ll).getRegex(),
    Vl = {
        ...$l,
        table: Pl,
        paragraph: yl(Cl).replace("hr", kl).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ll).getRegex()
    },
    Ml = {
        ...$l,
        html: yl("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Tl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: ml,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: yl(Cl).replace("hr", kl).replace("heading", " *#{1,6} *[^\n]").replace("lheading", xl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    },
    Rl = /^( {2,}|\\)\n(?!\s*$)/,
    Il = /[\p{P}\p{S}]/u,
    Ol = /[\s\p{P}\p{S}]/u,
    Hl = /[^\s\p{P}\p{S}]/u,
    Bl = yl(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ol).getRegex(),
    Dl = /(?!~)[\p{P}\p{S}]/u,
    Nl = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    zl = yl(Nl, "u").replace(/punct/g, Il).getRegex(),
    jl = yl(Nl, "u").replace(/punct/g, Dl).getRegex(),
    Ul = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    Wl = yl(Ul, "gu").replace(/notPunctSpace/g, Hl).replace(/punctSpace/g, Ol).replace(/punct/g, Il).getRegex(),
    Gl = yl(Ul, "gu").replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g, Dl).getRegex(),
    Zl = yl("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Hl).replace(/punctSpace/g, Ol).replace(/punct/g, Il).getRegex(),
    ql = yl(/\\(punct)/, "gu").replace(/punct/g, Il).getRegex(),
    Yl = yl(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
    Kl = yl(Tl).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
    Xl = yl("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Kl).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
    Jl = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    Ql = yl(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Jl).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
    ei = yl(/^!?\[(label)\]\[(ref)\]/).replace("label", Jl).replace("ref", Sl).getRegex(),
    ti = yl(/^!?\[(ref)\](?:\[\])?/).replace("ref", Sl).getRegex(),
    ni = {
        _backpedal: ml,
        anyPunctuation: ql,
        autolink: Yl,
        blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
        br: Rl,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: ml,
        emStrongLDelim: zl,
        emStrongRDelimAst: Wl,
        emStrongRDelimUnd: Zl,
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        link: Ql,
        nolink: ti,
        punctuation: Bl,
        reflink: ei,
        reflinkSearch: yl("reflink|nolink(?!\\()", "g").replace("reflink", ei).replace("nolink", ti).getRegex(),
        tag: Xl,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: ml
    },
    ri = {
        ...ni,
        link: yl(/^!?\[(label)\]\((.*?)\)/).replace("label", Jl).getRegex(),
        reflink: yl(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Jl).getRegex()
    },
    ai = {
        ...ni,
        emStrongRDelimAst: Gl,
        emStrongLDelim: jl,
        url: yl(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    },
    oi = {
        ...ai,
        br: yl(Rl).replace("{2,}", "*").getRegex(),
        text: yl(ai.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    },
    li = {
        normal: $l,
        gfm: Vl,
        pedantic: Ml
    },
    ii = {
        normal: ni,
        gfm: ai,
        breaks: oi,
        pedantic: ri
    },
    si = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    ui = e => si[e];

function ci(e, t) {
    if (t) {
        if (bl.escapeTest.test(e)) return e.replace(bl.escapeReplace, ui)
    } else if (bl.escapeTestNoEncode.test(e)) return e.replace(bl.escapeReplaceNoEncode, ui);
    return e
}

function di(e) {
    try {
        e = encodeURI(e).replace(bl.percentDecode, "%")
    } catch {
        return null
    }
    return e
}

function pi(e, t) {
    var n;
    const r = e.replace(bl.findPipe, ((e, t, n) => {
        let r = !1,
            a = t;
        for (; --a >= 0 && "\\" === n[a];) r = !r;
        return r ? "|" : " |"
    })).split(bl.splitPipe);
    let a = 0;
    if (r[0].trim() || r.shift(), r.length > 0 && !(null == (n = r.at(-1)) ? void 0 : n.trim()) && r.pop(), t)
        if (r.length > t) r.splice(t);
        else
            for (; r.length < t;) r.push("");
    for (; a < r.length; a++) r[a] = r[a].trim().replace(bl.slashPipe, "|");
    return r
}

function fi(e, t, n) {
    const r = e.length;
    if (0 === r) return "";
    let a = 0;
    for (; a < r && e.charAt(r - a - 1) === t;) a++;
    return e.slice(0, r - a)
}

function vi(e, t, n, r, a) {
    const o = t.href,
        l = t.title || null,
        i = e[1].replace(a.other.outputLinkReplace, "$1");
    if ("!" !== e[0].charAt(0)) {
        r.state.inLink = !0;
        const e = {
            type: "link",
            raw: n,
            href: o,
            title: l,
            text: i,
            tokens: r.inlineTokens(i)
        };
        return r.state.inLink = !1, e
    }
    return {
        type: "image",
        raw: n,
        href: o,
        title: l,
        text: i
    }
}
class gi {
    constructor(e) {
        r(this, "options"), r(this, "rules"), r(this, "lexer"), this.options = e || gl
    }
    space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        }
    }
    code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
            const e = t[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? e : fi(e, "\n")
            }
        }
    }
    fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
            const e = t[0],
                n = function (e, t, n) {
                    const r = e.match(n.other.indentCodeCompensation);
                    if (null === r) return t;
                    const a = r[1];
                    return t.split("\n").map((e => {
                        const t = e.match(n.other.beginningSpace);
                        if (null === t) return e;
                        const [r] = t;
                        return r.length >= a.length ? e.slice(a.length) : e
                    })).join("\n")
                }(e, t[3] || "", this.rules);
            return {
                type: "code",
                raw: e,
                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                text: n
            }
        }
    }
    heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
            let e = t[2].trim();
            if (this.rules.other.endingHash.test(e)) {
                const t = fi(e, "#");
                this.options.pedantic ? e = t.trim() : t && !this.rules.other.endingSpaceChar.test(t) || (e = t.trim())
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: e,
                tokens: this.lexer.inline(e)
            }
        }
    }
    hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: fi(t[0], "\n")
        }
    }
    blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
            let e = fi(t[0], "\n").split("\n"),
                n = "",
                r = "";
            const a = [];
            for (; e.length > 0;) {
                let t = !1;
                const o = [];
                let l;
                for (l = 0; l < e.length; l++)
                    if (this.rules.other.blockquoteStart.test(e[l])) o.push(e[l]), t = !0;
                    else {
                        if (t) break;
                        o.push(e[l])
                    } e = e.slice(l);
                const i = o.join("\n"),
                    s = i.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
                n = n ? `${n}\n${i}` : i, r = r ? `${r}\n${s}` : s;
                const u = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(s, a, !0), this.lexer.state.top = u, 0 === e.length) break;
                const c = a.at(-1);
                if ("code" === (null == c ? void 0 : c.type)) break;
                if ("blockquote" === (null == c ? void 0 : c.type)) {
                    const t = c,
                        o = t.raw + "\n" + e.join("\n"),
                        l = this.blockquote(o);
                    a[a.length - 1] = l, n = n.substring(0, n.length - t.raw.length) + l.raw, r = r.substring(0, r.length - t.text.length) + l.text;
                    break
                }
                if ("list" !== (null == c ? void 0 : c.type));
                else {
                    const t = c,
                        o = t.raw + "\n" + e.join("\n"),
                        l = this.list(o);
                    a[a.length - 1] = l, n = n.substring(0, n.length - c.raw.length) + l.raw, r = r.substring(0, r.length - t.raw.length) + l.raw, e = o.substring(a.at(-1).raw.length).split("\n")
                }
            }
            return {
                type: "blockquote",
                raw: n,
                tokens: a,
                text: r
            }
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n = t[1].trim();
            const r = n.length > 1,
                a = {
                    type: "list",
                    raw: "",
                    ordered: r,
                    start: r ? +n.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
            n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
            const o = this.rules.other.listItemRegex(n);
            let l = !1;
            for (; e;) {
                let n = !1,
                    r = "",
                    i = "";
                if (!(t = o.exec(e))) break;
                if (this.rules.block.hr.test(e)) break;
                r = t[0], e = e.substring(r.length);
                let s = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e => " ".repeat(3 * e.length))),
                    u = e.split("\n", 1)[0],
                    c = !s.trim(),
                    d = 0;
                if (this.options.pedantic ? (d = 2, i = s.trimStart()) : c ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, i = s.slice(d), d += t[1].length), c && this.rules.other.blankLine.test(u) && (r += u + "\n", e = e.substring(u.length + 1), n = !0), !n) {
                    const t = this.rules.other.nextBulletRegex(d),
                        n = this.rules.other.hrRegex(d),
                        a = this.rules.other.fencesBeginRegex(d),
                        o = this.rules.other.headingBeginRegex(d),
                        l = this.rules.other.htmlBeginRegex(d);
                    for (; e;) {
                        const p = e.split("\n", 1)[0];
                        let f;
                        if (u = p, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), f = u) : f = u.replace(this.rules.other.tabCharGlobal, "    "), a.test(u)) break;
                        if (o.test(u)) break;
                        if (l.test(u)) break;
                        if (t.test(u)) break;
                        if (n.test(u)) break;
                        if (f.search(this.rules.other.nonSpaceChar) >= d || !u.trim()) i += "\n" + f.slice(d);
                        else {
                            if (c) break;
                            if (s.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) break;
                            if (a.test(s)) break;
                            if (o.test(s)) break;
                            if (n.test(s)) break;
                            i += "\n" + u
                        }
                        c || u.trim() || (c = !0), r += p + "\n", e = e.substring(p.length + 1), s = f.slice(d)
                    }
                }
                a.loose || (l ? a.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (l = !0));
                let p, f = null;
                this.options.gfm && (f = this.rules.other.listIsTask.exec(i), f && (p = "[ ] " !== f[0], i = i.replace(this.rules.other.listReplaceTask, ""))), a.items.push({
                    type: "list_item",
                    raw: r,
                    task: !!f,
                    checked: p,
                    loose: !1,
                    text: i,
                    tokens: []
                }), a.raw += r
            }
            const i = a.items.at(-1);
            if (!i) return;
            i.raw = i.raw.trimEnd(), i.text = i.text.trimEnd(), a.raw = a.raw.trimEnd();
            for (let e = 0; e < a.items.length; e++)
                if (this.lexer.state.top = !1, a.items[e].tokens = this.lexer.blockTokens(a.items[e].text, []), !a.loose) {
                    const t = a.items[e].tokens.filter((e => "space" === e.type)),
                        n = t.length > 0 && t.some((e => this.rules.other.anyLine.test(e.raw)));
                    a.loose = n
                } if (a.loose)
                for (let e = 0; e < a.items.length; e++) a.items[e].loose = !0;
            return a
        }
    }
    html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) return {
            type: "html",
            block: !0,
            raw: t[0],
            pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
            text: t[0]
        }
    }
    def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
            const e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
            return {
                type: "def",
                tag: e,
                raw: t[0],
                href: n,
                title: r
            }
        }
    }
    table(e) {
        var t;
        const n = this.rules.block.table.exec(e);
        if (!n) return;
        if (!this.rules.other.tableDelimiter.test(n[2])) return;
        const r = pi(n[1]),
            a = n[2].replace(this.rules.other.tableAlignChars, "").split("|"),
            o = (null == (t = n[3]) ? void 0 : t.trim()) ? n[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [],
            l = {
                type: "table",
                raw: n[0],
                header: [],
                align: [],
                rows: []
            };
        if (r.length === a.length) {
            for (const e of a) this.rules.other.tableAlignRight.test(e) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? l.align.push("left") : l.align.push(null);
            for (let e = 0; e < r.length; e++) l.header.push({
                text: r[e],
                tokens: this.lexer.inline(r[e]),
                header: !0,
                align: l.align[e]
            });
            for (const e of o) l.rows.push(pi(e, l.header.length).map(((e, t) => ({
                text: e,
                tokens: this.lexer.inline(e),
                header: !1,
                align: l.align[t]
            }))));
            return l
        }
    }
    lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t) return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1])
        }
    }
    paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
            const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: e,
                tokens: this.lexer.inline(e)
            }
        }
    }
    text(e) {
        const t = this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0])
        }
    }
    escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: t[1]
        }
    }
    tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: t[0]
        }
    }
    link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
                if (!this.rules.other.endAngleBracket.test(e)) return;
                const t = fi(e.slice(0, -1), "\\");
                if ((e.length - t.length) % 2 == 0) return
            } else {
                const e = function (e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    let n = 0;
                    for (let r = 0; r < e.length; r++)
                        if ("\\" === e[r]) r++;
                        else if (e[r] === t[0]) n++;
                        else if (e[r] === t[1] && (n--, n < 0)) return r;
                    return -1
                }(t[2], "()");
                if (e > -1) {
                    const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                    t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ""
                }
            }
            let n = t[2],
                r = "";
            if (this.options.pedantic) {
                const e = this.rules.other.pedanticHrefTitle.exec(n);
                e && (n = e[1], r = e[3])
            } else r = t[3] ? t[3].slice(1, -1) : "";
            return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), vi(t, {
                href: n ? n.replace(this.rules.inline.anyPunctuation, "$1") : n,
                title: r ? r.replace(this.rules.inline.anyPunctuation, "$1") : r
            }, t[0], this.lexer, this.rules)
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            const e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
            if (!e) {
                const e = n[0].charAt(0);
                return {
                    type: "text",
                    raw: e,
                    text: e
                }
            }
            return vi(n, e, n[0], this.lexer, this.rules)
        }
    }
    emStrong(e, t, n = "") {
        let r = this.rules.inline.emStrongLDelim.exec(e);
        if (r && (!r[3] || !n.match(this.rules.other.unicodeAlphaNumeric)) && (!r[1] && !r[2] || !n || this.rules.inline.punctuation.exec(n))) {
            const n = [...r[0]].length - 1;
            let a, o, l = n,
                i = 0;
            const s = "*" === r[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = s.exec(t));) {
                if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
                if (o = [...a].length, r[3] || r[4]) {
                    l += o;
                    continue
                }
                if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
                    i += o;
                    continue
                }
                if (l -= o, l > 0) continue;
                o = Math.min(o, o + l + i);
                const t = [...r[0]][0].length,
                    s = e.slice(0, n + r.index + t + o);
                if (Math.min(n, o) % 2) {
                    const e = s.slice(1, -1);
                    return {
                        type: "em",
                        raw: s,
                        text: e,
                        tokens: this.lexer.inlineTokens(e)
                    }
                }
                const u = s.slice(2, -2);
                return {
                    type: "strong",
                    raw: s,
                    text: u,
                    tokens: this.lexer.inlineTokens(u)
                }
            }
        }
    }
    codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
            let e = t[2].replace(this.rules.other.newLineCharGlobal, " ");
            const n = this.rules.other.nonSpaceChar.test(e),
                r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
            return n && r && (e = e.substring(1, e.length - 1)), {
                type: "codespan",
                raw: t[0],
                text: e
            }
        }
    }
    br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        }
    }
    del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t) return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2])
        }
    }
    autolink(e) {
        const t = this.rules.inline.autolink.exec(e);
        if (t) {
            let e, n;
            return "@" === t[2] ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
                type: "link",
                raw: t[0],
                text: e,
                href: n,
                tokens: [{
                    type: "text",
                    raw: e,
                    text: e
                }]
            }
        }
    }
    url(e) {
        var t;
        let n;
        if (n = this.rules.inline.url.exec(e)) {
            let e, r;
            if ("@" === n[2]) e = n[0], r = "mailto:" + e;
            else {
                let a;
                do {
                    a = n[0], n[0] = (null == (t = this.rules.inline._backpedal.exec(n[0])) ? void 0 : t[0]) ?? ""
                } while (a !== n[0]);
                e = n[0], r = "www." === n[1] ? "http://" + n[0] : n[0]
            }
            return {
                type: "link",
                raw: n[0],
                text: e,
                href: r,
                tokens: [{
                    type: "text",
                    raw: e,
                    text: e
                }]
            }
        }
    }
    inlineText(e) {
        const t = this.rules.inline.text.exec(e);
        if (t) {
            const e = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: t[0],
                text: t[0],
                escaped: e
            }
        }
    }
}
class hi {
    constructor(e) {
        r(this, "tokens"), r(this, "options"), r(this, "state"), r(this, "tokenizer"), r(this, "inlineQueue"), this.tokens = [], this.tokens.links = Object.create(null), this.options = e || gl, this.options.tokenizer = this.options.tokenizer || new gi, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        const t = {
            other: bl,
            block: li.normal,
            inline: ii.normal
        };
        this.options.pedantic ? (t.block = li.pedantic, t.inline = ii.pedantic) : this.options.gfm && (t.block = li.gfm, this.options.breaks ? t.inline = ii.breaks : t.inline = ii.gfm), this.tokenizer.rules = t
    }
    static get rules() {
        return {
            block: li,
            inline: ii
        }
    }
    static lex(e, t) {
        return new hi(t).lex(e)
    }
    static lexInline(e, t) {
        return new hi(t).inlineTokens(e)
    }
    lex(e) {
        e = e.replace(bl.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
        for (let t = 0; t < this.inlineQueue.length; t++) {
            const e = this.inlineQueue[t];
            this.inlineTokens(e.src, e.tokens)
        }
        return this.inlineQueue = [], this.tokens
    }
    blockTokens(e, t = [], n = !1) {
        var r, a, o;
        for (this.options.pedantic && (e = e.replace(bl.tabCharGlobal, "    ").replace(bl.spaceLine, "")); e;) {
            let l;
            if (null == (a = null == (r = this.options.extensions) ? void 0 : r.block) ? void 0 : a.some((n => !!(l = n.call({
                lexer: this
            }, e, t)) && (e = e.substring(l.raw.length), t.push(l), !0)))) continue;
            if (l = this.tokenizer.space(e)) {
                e = e.substring(l.raw.length);
                const n = t.at(-1);
                1 === l.raw.length && void 0 !== n ? n.raw += "\n" : t.push(l);
                continue
            }
            if (l = this.tokenizer.code(e)) {
                e = e.substring(l.raw.length);
                const n = t.at(-1);
                "paragraph" === (null == n ? void 0 : n.type) || "text" === (null == n ? void 0 : n.type) ? (n.raw += "\n" + l.raw, n.text += "\n" + l.text, this.inlineQueue.at(-1).src = n.text) : t.push(l);
                continue
            }
            if (l = this.tokenizer.fences(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.heading(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.hr(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.blockquote(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.list(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.html(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.def(e)) {
                e = e.substring(l.raw.length);
                const n = t.at(-1);
                "paragraph" === (null == n ? void 0 : n.type) || "text" === (null == n ? void 0 : n.type) ? (n.raw += "\n" + l.raw, n.text += "\n" + l.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
                    href: l.href,
                    title: l.title
                });
                continue
            }
            if (l = this.tokenizer.table(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.lheading(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            let i = e;
            if (null == (o = this.options.extensions) ? void 0 : o.startBlock) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startBlock.forEach((e => {
                    r = e.call({
                        lexer: this
                    }, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                })), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1))
            }
            if (this.state.top && (l = this.tokenizer.paragraph(i))) {
                const r = t.at(-1);
                n && "paragraph" === (null == r ? void 0 : r.type) ? (r.raw += "\n" + l.raw, r.text += "\n" + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r.text) : t.push(l), n = i.length !== e.length, e = e.substring(l.raw.length)
            } else if (l = this.tokenizer.text(e)) {
                e = e.substring(l.raw.length);
                const n = t.at(-1);
                "text" === (null == n ? void 0 : n.type) ? (n.raw += "\n" + l.raw, n.text += "\n" + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(l)
            } else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(t);
                    break
                }
                throw new Error(t)
            }
        }
        return this.state.top = !0, t
    }
    inline(e, t = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t
    }
    inlineTokens(e, t = []) {
        var n, r, a;
        let o = e,
            l = null;
        if (this.tokens.links) {
            const e = Object.keys(this.tokens.links);
            if (e.length > 0)
                for (; null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(o));) e.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
        }
        for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(o));) o = o.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (l = this.tokenizer.rules.inline.anyPunctuation.exec(o));) o = o.slice(0, l.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let i = !1,
            s = "";
        for (; e;) {
            let l;
            if (i || (s = ""), i = !1, null == (r = null == (n = this.options.extensions) ? void 0 : n.inline) ? void 0 : r.some((n => !!(l = n.call({
                lexer: this
            }, e, t)) && (e = e.substring(l.raw.length), t.push(l), !0)))) continue;
            if (l = this.tokenizer.escape(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.tag(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.link(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.reflink(e, this.tokens.links)) {
                e = e.substring(l.raw.length);
                const n = t.at(-1);
                "text" === l.type && "text" === (null == n ? void 0 : n.type) ? (n.raw += l.raw, n.text += l.text) : t.push(l);
                continue
            }
            if (l = this.tokenizer.emStrong(e, o, s)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.codespan(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.br(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.del(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (l = this.tokenizer.autolink(e)) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            if (!this.state.inLink && (l = this.tokenizer.url(e))) {
                e = e.substring(l.raw.length), t.push(l);
                continue
            }
            let u = e;
            if (null == (a = this.options.extensions) ? void 0 : a.startInline) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startInline.forEach((e => {
                    r = e.call({
                        lexer: this
                    }, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                })), t < 1 / 0 && t >= 0 && (u = e.substring(0, t + 1))
            }
            if (l = this.tokenizer.inlineText(u)) {
                e = e.substring(l.raw.length), "_" !== l.raw.slice(-1) && (s = l.raw.slice(-1)), i = !0;
                const n = t.at(-1);
                "text" === (null == n ? void 0 : n.type) ? (n.raw += l.raw, n.text += l.text) : t.push(l)
            } else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(t);
                    break
                }
                throw new Error(t)
            }
        }
        return t
    }
}
class mi {
    constructor(e) {
        r(this, "options"), r(this, "parser"), this.options = e || gl
    }
    space(e) {
        return ""
    }
    code({
        text: e,
        lang: t,
        escaped: n
    }) {
        var r;
        const a = null == (r = (t || "").match(bl.notSpaceStart)) ? void 0 : r[0],
            o = e.replace(bl.endingNewline, "") + "\n";
        return a ? '<pre><code class="language-' + ci(a) + '">' + (n ? o : ci(o, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? o : ci(o, !0)) + "</code></pre>\n"
    }
    blockquote({
        tokens: e
    }) {
        return `<blockquote>\n${this.parser.parse(e)}</blockquote>\n`
    }
    html({
        text: e
    }) {
        return e
    }
    heading({
        tokens: e,
        depth: t
    }) {
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>\n`
    }
    hr(e) {
        return "<hr>\n"
    }
    list(e) {
        const t = e.ordered,
            n = e.start;
        let r = "";
        for (let o = 0; o < e.items.length; o++) {
            const t = e.items[o];
            r += this.listitem(t)
        }
        const a = t ? "ol" : "ul";
        return "<" + a + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + r + "</" + a + ">\n"
    }
    listitem(e) {
        var t;
        let n = "";
        if (e.task) {
            const r = this.checkbox({
                checked: !!e.checked
            });
            e.loose ? "paragraph" === (null == (t = e.tokens[0]) ? void 0 : t.type) ? (e.tokens[0].text = r + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && "text" === e.tokens[0].tokens[0].type && (e.tokens[0].tokens[0].text = r + " " + ci(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
                type: "text",
                raw: r + " ",
                text: r + " ",
                escaped: !0
            }) : n += r + " "
        }
        return n += this.parser.parse(e.tokens, !!e.loose), `<li>${n}</li>\n`
    }
    checkbox({
        checked: e
    }) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
    }
    paragraph({
        tokens: e
    }) {
        return `<p>${this.parser.parseInline(e)}</p>\n`
    }
    table(e) {
        let t = "",
            n = "";
        for (let a = 0; a < e.header.length; a++) n += this.tablecell(e.header[a]);
        t += this.tablerow({
            text: n
        });
        let r = "";
        for (let a = 0; a < e.rows.length; a++) {
            const t = e.rows[a];
            n = "";
            for (let e = 0; e < t.length; e++) n += this.tablecell(t[e]);
            r += this.tablerow({
                text: n
            })
        }
        return r && (r = `<tbody>${r}</tbody>`), "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n"
    }
    tablerow({
        text: e
    }) {
        return `<tr>\n${e}</tr>\n`
    }
    tablecell(e) {
        const t = this.parser.parseInline(e.tokens),
            n = e.header ? "th" : "td";
        return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>\n`
    }
    strong({
        tokens: e
    }) {
        return `<strong>${this.parser.parseInline(e)}</strong>`
    }
    em({
        tokens: e
    }) {
        return `<em>${this.parser.parseInline(e)}</em>`
    }
    codespan({
        text: e
    }) {
        return `<code>${ci(e, !0)}</code>`
    }
    br(e) {
        return "<br>"
    }
    del({
        tokens: e
    }) {
        return `<del>${this.parser.parseInline(e)}</del>`
    }
    link({
        href: e,
        title: t,
        tokens: n
    }) {
        const r = this.parser.parseInline(n),
            a = di(e);
        if (null === a) return r;
        let o = '<a href="' + (e = a) + '"';
        return t && (o += ' title="' + ci(t) + '"'), o += ">" + r + "</a>", o
    }
    image({
        href: e,
        title: t,
        text: n
    }) {
        const r = di(e);
        if (null === r) return ci(n);
        let a = `<img src="${e = r}" alt="${n}"`;
        return t && (a += ` title="${ci(t)}"`), a += ">", a
    }
    text(e) {
        return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : ci(e.text)
    }
}
class yi {
    strong({
        text: e
    }) {
        return e
    }
    em({
        text: e
    }) {
        return e
    }
    codespan({
        text: e
    }) {
        return e
    }
    del({
        text: e
    }) {
        return e
    }
    html({
        text: e
    }) {
        return e
    }
    text({
        text: e
    }) {
        return e
    }
    link({
        text: e
    }) {
        return "" + e
    }
    image({
        text: e
    }) {
        return "" + e
    }
    br() {
        return ""
    }
}
class bi {
    constructor(e) {
        r(this, "options"), r(this, "renderer"), r(this, "textRenderer"), this.options = e || gl, this.options.renderer = this.options.renderer || new mi, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new yi
    }
    static parse(e, t) {
        return new bi(t).parse(e)
    }
    static parseInline(e, t) {
        return new bi(t).parseInline(e)
    }
    parse(e, t = !0) {
        var n, r;
        let a = "";
        for (let o = 0; o < e.length; o++) {
            const l = e[o];
            if (null == (r = null == (n = this.options.extensions) ? void 0 : n.renderers) ? void 0 : r[l.type]) {
                const e = l,
                    t = this.options.extensions.renderers[e.type].call({
                        parser: this
                    }, e);
                if (!1 !== t || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(e.type)) {
                    a += t || "";
                    continue
                }
            }
            const i = l;
            switch (i.type) {
                case "space":
                    a += this.renderer.space(i);
                    continue;
                case "hr":
                    a += this.renderer.hr(i);
                    continue;
                case "heading":
                    a += this.renderer.heading(i);
                    continue;
                case "code":
                    a += this.renderer.code(i);
                    continue;
                case "table":
                    a += this.renderer.table(i);
                    continue;
                case "blockquote":
                    a += this.renderer.blockquote(i);
                    continue;
                case "list":
                    a += this.renderer.list(i);
                    continue;
                case "html":
                    a += this.renderer.html(i);
                    continue;
                case "paragraph":
                    a += this.renderer.paragraph(i);
                    continue;
                case "text": {
                    let n = i,
                        r = this.renderer.text(n);
                    for (; o + 1 < e.length && "text" === e[o + 1].type;) n = e[++o], r += "\n" + this.renderer.text(n);
                    a += t ? this.renderer.paragraph({
                        type: "paragraph",
                        raw: r,
                        text: r,
                        tokens: [{
                            type: "text",
                            raw: r,
                            text: r,
                            escaped: !0
                        }]
                    }) : r;
                    continue
                }
                default: {
                    const e = 'Token with "' + i.type + '" type was not found.';
                    if (this.options.silent) return console.error(e), "";
                    throw new Error(e)
                }
            }
        }
        return a
    }
    parseInline(e, t = this.renderer) {
        var n, r;
        let a = "";
        for (let o = 0; o < e.length; o++) {
            const l = e[o];
            if (null == (r = null == (n = this.options.extensions) ? void 0 : n.renderers) ? void 0 : r[l.type]) {
                const e = this.options.extensions.renderers[l.type].call({
                    parser: this
                }, l);
                if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
                    a += e || "";
                    continue
                }
            }
            const i = l;
            switch (i.type) {
                case "escape":
                case "text":
                    a += t.text(i);
                    break;
                case "html":
                    a += t.html(i);
                    break;
                case "link":
                    a += t.link(i);
                    break;
                case "image":
                    a += t.image(i);
                    break;
                case "strong":
                    a += t.strong(i);
                    break;
                case "em":
                    a += t.em(i);
                    break;
                case "codespan":
                    a += t.codespan(i);
                    break;
                case "br":
                    a += t.br(i);
                    break;
                case "del":
                    a += t.del(i);
                    break;
                default: {
                    const e = 'Token with "' + i.type + '" type was not found.';
                    if (this.options.silent) return console.error(e), "";
                    throw new Error(e)
                }
            }
        }
        return a
    }
}
class ki {
    constructor(e) {
        r(this, "options"), r(this, "block"), this.options = e || gl
    }
    preprocess(e) {
        return e
    }
    postprocess(e) {
        return e
    }
    processAllTokens(e) {
        return e
    }
    provideLexer() {
        return this.block ? hi.lex : hi.lexInline
    }
    provideParser() {
        return this.block ? bi.parse : bi.parseInline
    }
}
r(ki, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"]));
const wi = new class {
    constructor(...e) {
        r(this, "defaults", {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null
        }), r(this, "options", this.setOptions), r(this, "parse", this.parseMarkdown(!0)), r(this, "parseInline", this.parseMarkdown(!1)), r(this, "Parser", bi), r(this, "Renderer", mi), r(this, "TextRenderer", yi), r(this, "Lexer", hi), r(this, "Tokenizer", gi), r(this, "Hooks", ki), this.use(...e)
    }
    walkTokens(e, t) {
        var n, r;
        let a = [];
        for (const o of e) switch (a = a.concat(t.call(this, o)), o.type) {
            case "table": {
                const e = o;
                for (const n of e.header) a = a.concat(this.walkTokens(n.tokens, t));
                for (const n of e.rows)
                    for (const e of n) a = a.concat(this.walkTokens(e.tokens, t));
                break
            }
            case "list": {
                const e = o;
                a = a.concat(this.walkTokens(e.items, t));
                break
            }
            default: {
                const e = o;
                (null == (r = null == (n = this.defaults.extensions) ? void 0 : n.childTokens) ? void 0 : r[e.type]) ? this.defaults.extensions.childTokens[e.type].forEach((n => {
                    const r = e[n].flat(1 / 0);
                    a = a.concat(this.walkTokens(r, t))
                })) : e.tokens && (a = a.concat(this.walkTokens(e.tokens, t)))
            }
        }
        return a
    }
    use(...e) {
        const t = this.defaults.extensions || {
            renderers: {},
            childTokens: {}
        };
        return e.forEach((e => {
            const n = {
                ...e
            };
            if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e => {
                if (!e.name) throw new Error("extension name required");
                if ("renderer" in e) {
                    const n = t.renderers[e.name];
                    t.renderers[e.name] = n ? function (...t) {
                        let r = e.renderer.apply(this, t);
                        return !1 === r && (r = n.apply(this, t)), r
                    } : e.renderer
                }
                if ("tokenizer" in e) {
                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                    const n = t[e.level];
                    n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                }
                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
            })), n.extensions = t), e.renderer) {
                const t = this.defaults.renderer || new mi(this.defaults);
                for (const n in e.renderer) {
                    if (!(n in t)) throw new Error(`renderer '${n}' does not exist`);
                    if (["options", "parser"].includes(n)) continue;
                    const r = n,
                        a = e.renderer[r],
                        o = t[r];
                    t[r] = (...e) => {
                        let n = a.apply(t, e);
                        return !1 === n && (n = o.apply(t, e)), n || ""
                    }
                }
                n.renderer = t
            }
            if (e.tokenizer) {
                const t = this.defaults.tokenizer || new gi(this.defaults);
                for (const n in e.tokenizer) {
                    if (!(n in t)) throw new Error(`tokenizer '${n}' does not exist`);
                    if (["options", "rules", "lexer"].includes(n)) continue;
                    const r = n,
                        a = e.tokenizer[r],
                        o = t[r];
                    t[r] = (...e) => {
                        let n = a.apply(t, e);
                        return !1 === n && (n = o.apply(t, e)), n
                    }
                }
                n.tokenizer = t
            }
            if (e.hooks) {
                const t = this.defaults.hooks || new ki;
                for (const n in e.hooks) {
                    if (!(n in t)) throw new Error(`hook '${n}' does not exist`);
                    if (["options", "block"].includes(n)) continue;
                    const r = n,
                        a = e.hooks[r],
                        o = t[r];
                    ki.passThroughHooks.has(n) ? t[r] = e => {
                        if (this.defaults.async) return Promise.resolve(a.call(t, e)).then((e => o.call(t, e)));
                        const n = a.call(t, e);
                        return o.call(t, n)
                    } : t[r] = (...e) => {
                        let n = a.apply(t, e);
                        return !1 === n && (n = o.apply(t, e)), n
                    }
                }
                n.hooks = t
            }
            if (e.walkTokens) {
                const t = this.defaults.walkTokens,
                    r = e.walkTokens;
                n.walkTokens = function (e) {
                    let n = [];
                    return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n
                }
            }
            this.defaults = {
                ...this.defaults,
                ...n
            }
        })), this
    }
    setOptions(e) {
        return this.defaults = {
            ...this.defaults,
            ...e
        }, this
    }
    lexer(e, t) {
        return hi.lex(e, t ?? this.defaults)
    }
    parser(e, t) {
        return bi.parse(e, t ?? this.defaults)
    }
    parseMarkdown(e) {
        return (t, n) => {
            const r = {
                ...n
            },
                a = {
                    ...this.defaults,
                    ...r
                },
                o = this.onError(!!a.silent, !!a.async);
            if (!0 === this.defaults.async && !1 === r.async) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
            if (null == t) return o(new Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof t) return o(new Error("marked(): input parameter is of type " + {}.toString.call(t) + ", string expected"));
            a.hooks && (a.hooks.options = a, a.hooks.block = e);
            const l = a.hooks ? a.hooks.provideLexer() : e ? hi.lex : hi.lexInline,
                i = a.hooks ? a.hooks.provideParser() : e ? bi.parse : bi.parseInline;
            if (a.async) return Promise.resolve(a.hooks ? a.hooks.preprocess(t) : t).then((e => l(e, a))).then((e => a.hooks ? a.hooks.processAllTokens(e) : e)).then((e => a.walkTokens ? Promise.all(this.walkTokens(e, a.walkTokens)).then((() => e)) : e)).then((e => i(e, a))).then((e => a.hooks ? a.hooks.postprocess(e) : e)).catch(o);
            try {
                a.hooks && (t = a.hooks.preprocess(t));
                let e = l(t, a);
                a.hooks && (e = a.hooks.processAllTokens(e)), a.walkTokens && this.walkTokens(e, a.walkTokens);
                let n = i(e, a);
                return a.hooks && (n = a.hooks.postprocess(n)), n
            } catch (Uk) {
                return o(Uk)
            }
        }
    }
    onError(e, t) {
        return n => {
            if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
                const e = "<p>An error occurred:</p><pre>" + ci(n.message + "", !0) + "</pre>";
                return t ? Promise.resolve(e) : e
            }
            if (t) return Promise.reject(n);
            throw n
        }
    }
};

function xi(e, t) {
    return wi.parse(e, t)
}

function Ci(e) {
    return (e || "").match(/\S*/)[0]
}

function Si(e) {
    return t => {
        "string" == typeof t && t !== e.text && (e.escaped = !0, e.text = t)
    }
}
xi.options = xi.setOptions = function (e) {
    return wi.setOptions(e), xi.defaults = wi.defaults, hl(xi.defaults), xi
}, xi.getDefaults = function () {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    }
}, xi.defaults = gl, xi.use = function (...e) {
    return wi.use(...e), xi.defaults = wi.defaults, hl(xi.defaults), xi
}, xi.walkTokens = function (e, t) {
    return wi.walkTokens(e, t)
}, xi.parseInline = wi.parseInline, xi.Parser = bi, xi.parser = bi.parse, xi.Renderer = mi, xi.TextRenderer = yi, xi.Lexer = hi, xi.lexer = hi.lex, xi.Tokenizer = gi, xi.Hooks = ki, xi.parse = xi, xi.options, xi.setOptions, xi.use, xi.walkTokens, xi.parseInline, bi.parse, hi.lex;
const _i = /[&<>"']/,
    Ai = new RegExp(_i.source, "g"),
    Li = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    Ti = new RegExp(Li.source, "g"),
    Ei = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    Fi = e => Ei[e];

function $i(e, t) {
    if (t) {
        if (_i.test(e)) return e.replace(Ai, Fi)
    } else if (Li.test(e)) return e.replace(Ti, Fi);
    return e
}
var Pi = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function Vi(e) {
    return e && e.__esModule && {}.hasOwnProperty.call(e, "default") ? e.default : e
}
var Mi, Ri, Ii, Oi = {
    exports: {}
},
    Hi = (Mi || (Mi = 1, Ri = Oi, Ii = function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            n = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(t) {
                        return t instanceof o ? new o(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: e => ({}.toString.call(e).slice(8, -1)),
                    objId: e => (e.__id || Object.defineProperty(e, "__id", {
                        value: ++n
                    }), e.__id),
                    clone: function e(t, n) {
                        var r, o;
                        switch (n = n || {}, a.util.type(t)) {
                            case "Object":
                                if (o = a.util.objId(t), n[o]) return n[o];
                                for (var l in r = {}, n[o] = r, t) t.hasOwnProperty(l) && (r[l] = e(t[l], n));
                                return r;
                            case "Array":
                                return o = a.util.objId(t), n[o] ? n[o] : (r = [], n[o] = r, t.forEach((function (t, a) {
                                    r[a] = e(t, n)
                                })), r);
                            default:
                                return t
                        }
                    },
                    getLanguage(e) {
                        for (; e;) {
                            var n = t.exec(e.className);
                            if (n) return n[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage(e, n) {
                        e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                    },
                    currentScript() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                            if (e) {
                                var t = document.getElementsByTagName("script");
                                for (var n in t)
                                    if (t[n].src == e) return t[n]
                            }
                            return null
                        }
                    },
                    isActive(e, t, n) {
                        for (var r = "no-" + t; e;) {
                            var a = e.classList;
                            if (a.contains(t)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!n
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend(e, t) {
                        var n = a.util.clone(a.languages[e]);
                        for (var r in t) n[r] = t[r];
                        return n
                    },
                    insertBefore(e, t, n, r) {
                        var o = (r = r || a.languages)[e],
                            l = {};
                        for (var i in o)
                            if (o.hasOwnProperty(i)) {
                                if (i == t)
                                    for (var s in n) n.hasOwnProperty(s) && (l[s] = n[s]);
                                n.hasOwnProperty(i) || (l[i] = o[i])
                            } var u = r[e];
                        return r[e] = l, a.languages.DFS(a.languages, (function (t, n) {
                            n === u && t != e && (this[t] = l)
                        })), l
                    },
                    DFS: function e(t, n, r, o) {
                        o = o || {};
                        var l = a.util.objId;
                        for (var i in t)
                            if (t.hasOwnProperty(i)) {
                                n.call(t, i, t[i], r || i);
                                var s = t[i],
                                    u = a.util.type(s);
                                "Object" !== u || o[l(s)] ? "Array" !== u || o[l(s)] || (o[l(s)] = !0, e(s, n, i, o)) : (o[l(s)] = !0, e(s, n, null, o))
                            }
                    }
                },
                plugins: {},
                highlightAll(e, t) {
                    a.highlightAllUnder(document, e, t)
                },
                highlightAllUnder(e, t, n) {
                    var r = {
                        callback: n,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    a.hooks.run("before-highlightall", r), r.elements = [].slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
                    for (var o, l = 0; o = r.elements[l++];) a.highlightElement(o, !0 === t, r.callback)
                },
                highlightElement(t, n, r) {
                    var o = a.util.getLanguage(t),
                        l = a.languages[o];
                    a.util.setLanguage(t, o);
                    var i = t.parentElement;
                    i && "pre" === i.nodeName.toLowerCase() && a.util.setLanguage(i, o);
                    var s = {
                        element: t,
                        language: o,
                        grammar: l,
                        code: t.textContent
                    };

                    function u(e) {
                        s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element)
                    }
                    if (a.hooks.run("before-sanity-check", s), (i = s.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void (r && r.call(s.element));
                    if (a.hooks.run("before-highlight", s), s.grammar)
                        if (n && e.Worker) {
                            var c = new Worker(a.filename);
                            c.onmessage = function (e) {
                                u(e.data)
                            }, c.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }))
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code))
                },
                highlight(e, t, n) {
                    var r = {
                        code: e,
                        grammar: t,
                        language: n
                    };
                    if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
                    return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), o.stringify(a.util.encode(r.tokens), r.language)
                },
                tokenize(e, t) {
                    var n = t.rest;
                    if (n) {
                        for (var r in n) t[r] = n[r];
                        delete t.rest
                    }
                    var a = new s;
                    return u(a, a.head, e), i(e, a, t, a.head, 0),
                        function (e) {
                            for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                            return t
                        }(a)
                },
                hooks: {
                    all: {},
                    add(e, t) {
                        var n = a.hooks.all;
                        n[e] = n[e] || [], n[e].push(t)
                    },
                    run(e, t) {
                        var n = a.hooks.all[e];
                        if (n && n.length)
                            for (var r, o = 0; r = n[o++];) r(t)
                    }
                },
                Token: o
            };

        function o(e, t, n, r) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
        }

        function l(e, t, n, r) {
            e.lastIndex = t;
            var a = e.exec(n);
            if (a && r && a[1]) {
                var o = a[1].length;
                a.index += o, a[0] = a[0].slice(o)
            }
            return a
        }

        function i(e, t, n, r, s, d) {
            for (var p in n)
                if (n.hasOwnProperty(p) && n[p]) {
                    var f = n[p];
                    f = Array.isArray(f) ? f : [f];
                    for (var v = 0; v < f.length; ++v) {
                        if (d && d.cause == p + "," + v) return;
                        var g = f[v],
                            h = g.inside,
                            m = !!g.lookbehind,
                            y = !!g.greedy,
                            b = g.alias;
                        if (y && !g.pattern.global) {
                            var k = g.pattern.toString().match(/[imsuy]*$/)[0];
                            g.pattern = RegExp(g.pattern.source, k + "g")
                        }
                        for (var w = g.pattern || g, x = r.next, C = s; x !== t.tail && !(d && C >= d.reach); C += x.value.length, x = x.next) {
                            var S = x.value;
                            if (t.length > e.length) return;
                            if (!(S instanceof o)) {
                                var _, A = 1;
                                if (y) {
                                    if (!(_ = l(w, C, e, m)) || _.index >= e.length) break;
                                    var L = _.index,
                                        T = _.index + _[0].length,
                                        E = C;
                                    for (E += x.value.length; L >= E;) E += (x = x.next).value.length;
                                    if (C = E -= x.value.length, x.value instanceof o) continue;
                                    for (var F = x; F !== t.tail && (E < T || "string" == typeof F.value); F = F.next) A++, E += F.value.length;
                                    A--, S = e.slice(C, E), _.index -= C
                                } else if (!(_ = l(w, 0, S, m))) continue;
                                L = _.index;
                                var $ = _[0],
                                    P = S.slice(0, L),
                                    V = S.slice(L + $.length),
                                    M = C + S.length;
                                d && M > d.reach && (d.reach = M);
                                var R = x.prev;
                                if (P && (R = u(t, R, P), C += P.length), c(t, R, A), x = u(t, R, new o(p, h ? a.tokenize($, h) : $, b, $)), V && u(t, x, V), A > 1) {
                                    var I = {
                                        cause: p + "," + v,
                                        reach: M
                                    };
                                    i(e, t, n, x.prev, C, I), d && I.reach > d.reach && (d.reach = I.reach)
                                }
                            }
                        }
                    }
                }
        }

        function s() {
            var e = {
                value: null,
                prev: null,
                next: null
            },
                t = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = t, this.head = e, this.tail = t, this.length = 0
        }

        function u(e, t, n) {
            var r = t.next,
                a = {
                    value: n,
                    prev: t,
                    next: r
                };
            return t.next = a, r.prev = a, e.length++, a
        }

        function c(e, t, n) {
            for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
            t.next = r, r.prev = t, e.length -= a
        }
        if (e.Prism = a, o.stringify = function e(t, n) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) {
                var r = "";
                return t.forEach((function (t) {
                    r += e(t, n)
                })), r
            }
            var o = {
                type: t.type,
                content: e(t.content, n),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: n
            },
                l = t.alias;
            l && (Array.isArray(l) ? [].push.apply(o.classes, l) : o.classes.push(l)), a.hooks.run("wrap", o);
            var i = "";
            for (var s in o.attributes) i += " " + s + '="' + (o.attributes[s] || "").replace(/"/g, "&quot;") + '"';
            return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + i + ">" + o.content + "</" + o.tag + ">"
        }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function (t) {
            var n = JSON.parse(t.data),
                r = n.language,
                o = n.code,
                l = n.immediateClose;
            e.postMessage(a.highlight(o, a.languages[r], r)), l && e.close()
        }), !1), a) : a;
        var d = a.util.currentScript();

        function p() {
            a.manual || a.highlightAll()
        }
        if (d && (a.filename = d.src, d.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
            var f = document.readyState;
            "loading" === f || "interactive" === f && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
        }
        return a
    }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}), Ri.exports && (Ri.exports = Ii), void 0 !== Pi && (Pi.Prism = Ii), Ii.languages.markup = {
        comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: !0
        },
        prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: !0
        },
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/
            }
        },
        cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: !0
        },
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [{
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        }, /&#x?[\da-f]{1,8};/i]
    }, Ii.languages.markup.tag.inside["attr-value"].inside.entity = Ii.languages.markup.entity, Ii.languages.markup.doctype.inside["internal-subset"].inside = Ii.languages.markup, Ii.hooks.add("wrap", (function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    })), Object.defineProperty(Ii.languages.markup.tag, "addInlined", {
        value(e, t) {
            var n = {};
            n["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Ii.languages[t]
            }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var r = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: n
                }
            };
            r["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: Ii.languages[t]
            };
            var a = {};
            a[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function () {
                    return e
                })), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: r
            }, Ii.languages.insertBefore("markup", "cdata", a)
        }
    }), Object.defineProperty(Ii.languages.markup.tag, "addAttribute", {
        value(e, t) {
            Ii.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [t, "language-" + t],
                                inside: Ii.languages[t]
                            },
                            punctuation: [{
                                pattern: /^=/,
                                alias: "attr-equals"
                            }, /"|'/]
                        }
                    }
                }
            })
        }
    }), Ii.languages.html = Ii.languages.markup, Ii.languages.mathml = Ii.languages.markup, Ii.languages.svg = Ii.languages.markup, Ii.languages.xml = Ii.languages.extend("markup", {}), Ii.languages.ssml = Ii.languages.xml, Ii.languages.atom = Ii.languages.xml, Ii.languages.rss = Ii.languages.xml, function (e) {
        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: !0
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + t.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: t,
                greedy: !0
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0
            },
            punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var n = e.languages.markup;
        n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
    }(Ii), Ii.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    }, Ii.languages.javascript = Ii.languages.extend("clike", {
        "class-name": [Ii.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
            lookbehind: !0
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Ii.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Ii.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Ii.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Ii.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Ii.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Ii.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Ii.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Ii.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Ii.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    }), Ii.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }), Ii.languages.markup && (Ii.languages.markup.tag.addInlined("script", "javascript"), Ii.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Ii.languages.js = Ii.languages.javascript, function () {
        if (void 0 !== Ii && "undefined" != typeof document) {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
            var e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            },
                t = "data-src-status",
                n = "loading",
                r = "loaded",
                a = "pre[data-src]:not([" + t + '="' + r + '"]):not([' + t + '="' + n + '"])';
            Ii.hooks.add("before-highlightall", (function (e) {
                e.selector += ", " + a
            })), Ii.hooks.add("before-sanity-check", (function (o) {
                var l = o.element;
                if (l.matches(a)) {
                    o.code = "", l.setAttribute(t, n);
                    var i = l.appendChild(document.createElement("CODE"));
                    i.textContent = "Loading…";
                    var s = l.getAttribute("data-src"),
                        u = o.language;
                    if ("none" === u) {
                        var c = (/\.(\w+)$/.exec(s) || [, "none"])[1];
                        u = e[c] || c
                    }
                    Ii.util.setLanguage(i, u), Ii.util.setLanguage(l, u);
                    var d = Ii.plugins.autoloader;
                    d && d.loadLanguages(u),
                        function (e, n, a) {
                            var o = new XMLHttpRequest;
                            o.open("GET", e, !0), o.onreadystatechange = function () {
                                4 == o.readyState && (o.status < 400 && o.responseText ? function (e) {
                                    l.setAttribute(t, r);
                                    var n = function (e) {
                                        var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                                        if (t) {
                                            var n = Number(t[1]),
                                                r = t[2],
                                                a = t[3];
                                            return r ? a ? [n, Number(a)] : [n, void 0] : [n, n]
                                        }
                                    }(l.getAttribute("data-range"));
                                    if (n) {
                                        var a = e.split(/\r\n?|\n/g),
                                            o = n[0],
                                            s = null == n[1] ? a.length : n[1];
                                        o < 0 && (o += a.length), o = Math.max(0, Math.min(o - 1, a.length)), s < 0 && (s += a.length), s = Math.max(0, Math.min(s, a.length)), e = a.slice(o, s).join("\n"), l.hasAttribute("data-start") || l.setAttribute("data-start", String(o + 1))
                                    }
                                    i.textContent = e, Ii.highlightElement(i)
                                }(o.responseText) : o.status >= 400 ? a("✖ Error " + o.status + " while fetching file: " + o.statusText) : a("✖ Error: File does not exist or is empty"))
                            }, o.send(null)
                        }(s, 0, (function (e) {
                            l.setAttribute(t, "failed"), i.textContent = e
                        }))
                }
            })), Ii.plugins.fileHighlight = {
                highlight(e) {
                    for (var t, n = (e || document).querySelectorAll(a), r = 0; t = n[r++];) Ii.highlightElement(t)
                }
            };
            var o = !1;
            Ii.fileHighlight = function () {
                o || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), o = !0), Ii.plugins.fileHighlight.highlight.apply(this, arguments)
            }
        }
    }()), Oi.exports);
const Bi = Vi(Hi);
var Di, Ni, zi, ji, Ui, Wi, Gi, Zi, qi, Yi, Ki, Xi, Ji, Qi, es, ts;
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function"
            }],
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
}), Prism.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
}), delete Prism.languages.c.boolean, Di || (Di = 1, function (e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, (function () {
            return t.source
        }));
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, (function () {
                return t.source
            }))),
            lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, (function () {
                return n
            })) + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: /^[<"][\s\S]+/,
                operator: /:/,
                punctuation: /\./
            }
        },
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }), e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                function: /^\w+/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp
                }
            }
        }
    }), e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }), e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism)), Ni || (Ni = 1, function (e) {
    function t(e, t) {
        return e.replace(/<<(\d+)>>/g, (function (e, n) {
            return "(?:" + t[+n] + ")"
        }))
    }

    function n(e, n, r) {
        return RegExp(t(e, n), "")
    }

    function r(e, t) {
        for (var n = 0; n < t; n++) e = e.replace(/<<self>>/g, (function () {
            return "(?:" + e + ")"
        }));
        return e.replace(/<<self>>/g, "[^\\s\\S]")
    }
    var a = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
        o = "class enum interface record struct",
        l = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
        i = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";

    function s(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
    }
    var u = s(o),
        c = RegExp(s(a + " " + o + " " + l + " " + i)),
        d = s(o + " " + l + " " + i),
        p = s(a + " " + o + " " + i),
        f = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
        v = r(/\((?:[^()]|<<self>>)*\)/.source, 2),
        g = /@?\b[A-Za-z_]\w*\b/.source,
        h = t(/<<0>>(?:\s*<<1>>)?/.source, [g, f]),
        m = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d, h]),
        y = /\[\s*(?:,\s*)*\]/.source,
        b = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [m, y]),
        k = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [f, v, y]),
        w = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [k]),
        x = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [w, m, y]),
        C = {
            keyword: c,
            punctuation: /[<>()?,.:[\]]/
        },
        S = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
        _ = /"(?:\\.|[^\\"\r\n])*"/.source,
        A = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
    e.languages.csharp = e.languages.extend("clike", {
        string: [{
            pattern: n(/(^|[^$\\])<<0>>/.source, [A]),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: n(/(^|[^@$\\])<<0>>/.source, [_]),
            lookbehind: !0,
            greedy: !0
        }],
        "class-name": [{
            pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [m]),
            lookbehind: !0,
            inside: C
        }, {
            pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [g, x]),
            lookbehind: !0,
            inside: C
        }, {
            pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [g]),
            lookbehind: !0
        }, {
            pattern: n(/(\b<<0>>\s+)<<1>>/.source, [u, h]),
            lookbehind: !0,
            inside: C
        }, {
            pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [m]),
            lookbehind: !0,
            inside: C
        }, {
            pattern: n(/(\bwhere\s+)<<0>>/.source, [g]),
            lookbehind: !0
        }, {
            pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [b]),
            lookbehind: !0,
            inside: C
        }, {
            pattern: n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [x, p, g]),
            inside: C
        }],
        keyword: c,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/
    }), e.languages.insertBefore("csharp", "number", {
        range: {
            pattern: /\.\./,
            alias: "operator"
        }
    }), e.languages.insertBefore("csharp", "punctuation", {
        "named-parameter": {
            pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [g]),
            lookbehind: !0,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("csharp", "class-name", {
        namespace: {
            pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [g]),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        },
        "type-expression": {
            pattern: n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [v]),
            lookbehind: !0,
            alias: "class-name",
            inside: C
        },
        "return-type": {
            pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [x, m]),
            inside: C,
            alias: "class-name"
        },
        "constructor-invocation": {
            pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [x]),
            lookbehind: !0,
            inside: C,
            alias: "class-name"
        },
        "generic-method": {
            pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [g, f]),
            inside: {
                function: n(/^<<0>>/.source, [g]),
                generic: {
                    pattern: RegExp(f),
                    alias: "class-name",
                    inside: C
                }
            }
        },
        "type-list": {
            pattern: n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [u, h, g, x, c.source, v, /\bnew\s*\(\s*\)/.source]),
            lookbehind: !0,
            inside: {
                "record-arguments": {
                    pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [h, v]),
                    lookbehind: !0,
                    greedy: !0,
                    inside: e.languages.csharp
                },
                keyword: c,
                "class-name": {
                    pattern: RegExp(x),
                    greedy: !0,
                    inside: C
                },
                punctuation: /[,()]/
            }
        },
        preprocessor: {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
                directive: {
                    pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        }
    });
    var L = _ + "|" + S,
        T = t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [L]),
        E = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [T]), 2),
        F = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,
        $ = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [m, E]);
    e.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [F, $]),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {
                    pattern: n(/^<<0>>(?=\s*:)/.source, [F]),
                    alias: "keyword"
                },
                "attribute-arguments": {
                    pattern: n(/\(<<0>>*\)/.source, [E]),
                    inside: e.languages.csharp
                },
                "class-name": {
                    pattern: RegExp(m),
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /[:,]/
            }
        }
    });
    var P = /:[^}\r\n]+/.source,
        V = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [T]), 2),
        M = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [V, P]),
        R = r(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [L]), 2),
        I = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [R, P]);

    function O(t, r) {
        return {
            interpolation: {
                pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r, P]),
                        lookbehind: !0,
                        inside: {
                            punctuation: /^:/
                        }
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: e.languages.csharp
                    }
                }
            },
            string: /[\s\S]+/
        }
    }
    e.languages.insertBefore("csharp", "string", {
        "interpolation-string": [{
            pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [M]),
            lookbehind: !0,
            greedy: !0,
            inside: O(M, V)
        }, {
            pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [I]),
            lookbehind: !0,
            greedy: !0,
            inside: O(I, R)
        }],
        char: {
            pattern: RegExp(S),
            greedy: !0
        }
    }), e.languages.dotnet = e.languages.cs = e.languages.csharp
}(Prism)), Prism.languages.go = Prism.languages.extend("clike", {
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
}), Prism.languages.insertBefore("go", "string", {
    char: {
        pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
        greedy: !0
    }
}), delete Prism.languages.go["class-name"], zi || (zi = 1, Prism.languages["go-mod"] = Prism.languages["go-module"] = {
    comment: {
        pattern: /\/\/.*/,
        greedy: !0
    },
    version: {
        pattern: /(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,
        lookbehind: !0,
        alias: "number"
    },
    "go-version": {
        pattern: /((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,
        lookbehind: !0,
        alias: "number"
    },
    keyword: {
        pattern: /^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,
        lookbehind: !0
    },
    operator: /=>/,
    punctuation: /[()[\],]/
}), ji || (ji = 1, function (e) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
        r = {
            pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
            lookbehind: !0,
            inside: {
                namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /\./
            }
        };
    e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [r, {
            pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
            lookbehind: !0,
            inside: r.inside
        }, {
                pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
                lookbehind: !0,
                inside: r.inside
            }],
        keyword: t,
        function: [e.languages.clike.function, {
            pattern: /(::\s*)[a-z_]\w*/,
            lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        },
        constant: /\b[A-Z][A-Z_\d]+\b/
    }), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        },
        char: {
            pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
            greedy: !0
        }
    }), e.languages.insertBefore("java", "class-name", {
        annotation: {
            pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
            lookbehind: !0,
            alias: "punctuation"
        },
        generics: {
            pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
            inside: {
                "class-name": r,
                keyword: t,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        },
        import: [{
            pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
            lookbehind: !0,
            inside: {
                namespace: r.inside.namespace,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }, {
            pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
            lookbehind: !0,
            alias: "static",
            inside: {
                namespace: r.inside.namespace,
                static: /\b\w+$/,
                punctuation: /\./,
                operator: /\*/,
                "class-name": /\w+/
            }
        }],
        namespace: {
            pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, (function () {
                return t.source
            }))),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    })
}(Prism)), Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript,
    function (e) {
        var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function o(e, t) {
            return e = e.replace(/<S>/g, (function () {
                return n
            })).replace(/<BRACES>/g, (function () {
                return r
            })).replace(/<SPREAD>/g, (function () {
                return a
            })), RegExp(e, t)
        }
        a = o(a).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
            spread: {
                pattern: o(/<SPREAD>/.source),
                inside: e.languages.jsx
            }
        }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
            script: {
                pattern: o(/=<BRACES>/.source),
                alias: "language-javascript",
                inside: {
                    "script-punctuation": {
                        pattern: /^=(?=\{)/,
                        alias: "punctuation"
                    },
                    rest: e.languages.jsx
                }
            }
        }, e.languages.jsx.tag);
        var l = function (e) {
            return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(l).join("") : ""
        },
            i = function (t) {
                for (var n = [], r = 0; r < t.length; r++) {
                    var a = t[r],
                        o = !1;
                    if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? n.length > 0 && n[n.length - 1].tagName === l(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
                        tagName: l(a.content[0].content[1]),
                        openedBraces: 0
                    }) : n.length > 0 && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : o = !0), (o || "string" == typeof a) && n.length > 0 && 0 === n[n.length - 1].openedBraces) {
                        var s = l(a);
                        r < t.length - 1 && ("string" == typeof t[r + 1] || "plain-text" === t[r + 1].type) && (s += l(t[r + 1]), t.splice(r + 1, 1)), r > 0 && ("string" == typeof t[r - 1] || "plain-text" === t[r - 1].type) && (s = l(t[r - 1]) + s, t.splice(r - 1, 1), r--), t[r] = new e.Token("plain-text", s, null, s)
                    }
                    a.content && "string" != typeof a.content && i(a.content)
                }
            };
        e.hooks.add("after-tokenize", (function (e) {
            "jsx" !== e.language && "tsx" !== e.language || i(e.tokens)
        }))
    }(Prism), Ui || (Ui = 1, function (e) {
        e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
                pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
        }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
        var t = e.languages.extend("typescript", {});
        delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
            decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                    at: {
                        pattern: /^@/,
                        alias: "operator"
                    },
                    function: /^[\s\S]+/
                }
            },
            "generic-function": {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                    function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: "class-name",
                        inside: t
                    }
                }
            }
        }), e.languages.ts = e.languages.typescript
    }(Prism)),
    function (e) {
        var t = e.util.clone(e.languages.typescript);
        e.languages.tsx = e.languages.extend("jsx", t), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
        var n = e.languages.tsx.tag;
        n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0
    }(Prism), Wi || (Wi = 1, function (e) {
        var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
            n = [{
                pattern: /\b(?:false|true)\b/i,
                alias: "boolean"
            }, {
                pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                greedy: !0,
                lookbehind: !0
            }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
            r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            a = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
            o = /[{}\[\](),:;]/;
        e.languages.php = {
            delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important"
            },
            comment: t,
            variable: /\$+(?:\w+\b|(?=\{))/,
            package: {
                pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            },
            "class-name-definition": {
                pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                lookbehind: !0,
                alias: "class-name"
            },
            "function-definition": {
                pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                lookbehind: !0,
                alias: "function"
            },
            keyword: [{
                pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                alias: "type-casting",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                alias: "type-hint",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
                alias: "return-type",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                alias: "type-declaration",
                greedy: !0
            }, {
                pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                alias: "type-declaration",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                alias: "static-context",
                greedy: !0
            }, {
                pattern: /(\byield\s+)from\b/i,
                lookbehind: !0
            }, /\bclass\b/i, {
                pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                lookbehind: !0
            }],
            "argument-name": {
                pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
                lookbehind: !0
            },
            "class-name": [{
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                greedy: !0
            }, {
                pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: "class-name-fully-qualified",
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                alias: "type-declaration",
                greedy: !0
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ["class-name-fully-qualified", "type-declaration"],
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /\b[a-z_]\w*(?=\s*::)/i,
                alias: "static-context",
                greedy: !0
            }, {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                alias: ["class-name-fully-qualified", "static-context"],
                greedy: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                alias: "type-hint",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ["class-name-fully-qualified", "type-hint"],
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                alias: "return-type",
                greedy: !0,
                lookbehind: !0
            }, {
                pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: ["class-name-fully-qualified", "return-type"],
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }],
            constant: n,
            function: {
                pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            },
            property: {
                pattern: /(->\s*)\w+/,
                lookbehind: !0
            },
            number: r,
            operator: a,
            punctuation: o
        };
        var l = {
            pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
            lookbehind: !0,
            inside: e.languages.php
        },
            i = [{
                pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                alias: "nowdoc-string",
                greedy: !0,
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<'?|[';]$/
                        }
                    }
                }
            }, {
                pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                alias: "heredoc-string",
                greedy: !0,
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<"?|[";]$/
                        }
                    },
                    interpolation: l
                }
            }, {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                alias: "backtick-quoted-string",
                greedy: !0
            }, {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                alias: "single-quoted-string",
                greedy: !0
            }, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                alias: "double-quoted-string",
                greedy: !0,
                inside: {
                    interpolation: l
                }
            }];
        e.languages.insertBefore("php", "variable", {
            string: i,
            attribute: {
                pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                greedy: !0,
                inside: {
                    "attribute-content": {
                        pattern: /^(#\[)[\s\S]+(?=\]$)/,
                        lookbehind: !0,
                        inside: {
                            comment: t,
                            string: i,
                            "attribute-class-name": [{
                                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                alias: "class-name",
                                greedy: !0,
                                lookbehind: !0
                            }, {
                                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                alias: ["class-name", "class-name-fully-qualified"],
                                greedy: !0,
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\\/
                                }
                            }],
                            constant: n,
                            number: r,
                            operator: a,
                            punctuation: o
                        }
                    },
                    delimiter: {
                        pattern: /^#\[|\]$/,
                        alias: "punctuation"
                    }
                }
            }
        }), e.hooks.add("before-tokenize", (function (t) {
            /<\?/.test(t.code) && e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)
        })), e.hooks.add("after-tokenize", (function (t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "php")
        }))
    }(Prism)), Gi || (Gi = 1, Prism.languages.insertBefore("php", "variable", {
        this: {
            pattern: /\$this\b/,
            alias: "keyword"
        },
        global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
        scope: {
            pattern: /\b[\w\\]+::/,
            inside: {
                keyword: /\b(?:parent|self|static)\b/,
                punctuation: /::|\\/
            }
        }
    })), Zi || (Zi = 1, Prism.languages.python = {
        comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            greedy: !0
        },
        "string-interpolation": {
            pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "format-spec": {
                            pattern: /(:)[^:(){}]+(?=\}$)/,
                            lookbehind: !0
                        },
                        "conversion-option": {
                            pattern: /![sra](?=[:}]$)/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                string: /[\s\S]+/
            }
        },
        "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string"
        },
        string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0
        },
        function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0
        },
        "class-name": {
            pattern: /(\bclass\s+)\w+/i,
            lookbehind: !0
        },
        decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: {
                punctuation: /\./
            }
        },
        keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:False|None|True)\b/,
        number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
        operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), Prism.languages.markup = {
        comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: !0
        },
        prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: !0
        },
        doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
                "internal-subset": {
                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                string: {
                    pattern: /"[^"]*"|'[^']*'/,
                    greedy: !0
                },
                punctuation: /^<!|>$|[[\]]/,
                "doctype-tag": /^DOCTYPE/i,
                name: /[^\s<>'"]+/
            }
        },
        cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: !0
        },
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "special-attr": [],
                "attr-value": {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                    inside: {
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: [{
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        }, /&#x?[\da-f]{1,8};/i]
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", (function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    })), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value(e, t) {
            var n = {};
            n["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[t]
            }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var r = {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: n
                }
            };
            r["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[t]
            };
            var a = {};
            a[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function () {
                    return e
                })), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: r
            }, Prism.languages.insertBefore("markup", "cdata", a)
        }
    }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value(e, t) {
            Prism.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                lookbehind: !0,
                inside: {
                    "attr-name": /^[^\s=]+/,
                    "attr-value": {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [t, "language-" + t],
                                inside: Prism.languages[t]
                            },
                            punctuation: [{
                                pattern: /^=/,
                                alias: "attr-equals"
                            }, /"|'/]
                        }
                    }
                }
            })
        }
    }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml,
    function (e) {
        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {
                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                        lookbehind: !0
                    }
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                        pattern: RegExp("^" + t.source + "$"),
                        alias: "url"
                    }
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {
                pattern: t,
                greedy: !0
            },
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {
                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                lookbehind: !0
            },
            punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var n = e.languages.markup;
        n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
    }(Prism),
    function (e) {
        var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: t = {
                "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                "pseudo-class": /:[-\w]+/,
                class: /\.[-\w]+/,
                id: /#[-\w]+/,
                attribute: {
                    pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                    greedy: !0,
                    inside: {
                        punctuation: /^\[|\]$/,
                        "case-sensitivity": {
                            pattern: /(\s)[si]$/i,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        namespace: {
                            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\|$/
                            }
                        },
                        "attr-name": {
                            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                            lookbehind: !0
                        },
                        "attr-value": [n, {
                            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: !0
                        }],
                        operator: /[|~*^$]?=/
                    }
                },
                "n-th": [{
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: {
                        number: /[\dn]+/,
                        operator: /[+-]/
                    }
                }, {
                    pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                    lookbehind: !0
                }],
                combinator: />|\+|~|\|\|/,
                punctuation: /[(),]/
            }
        }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
            variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0
            }
        });
        var r = {
            pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
            lookbehind: !0
        },
            a = {
                pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                lookbehind: !0
            };
        e.languages.insertBefore("css", "function", {
            operator: {
                pattern: /(\s)[+\-*\/](?=\s)/,
                lookbehind: !0
            },
            hexcode: {
                pattern: /\B#[\da-f]{3,8}\b/i,
                alias: "color"
            },
            color: [{
                pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0
            }, {
                pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: r,
                    number: a,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/
                }
            }],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: a
        })
    }(Prism), Prism.languages.lua = {
        comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
        string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0
        },
        number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
        keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
        function: /(?!\d)\w+(?=\s*(?:[({]))/,
        operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
            pattern: /(^|[^.])\.\.(?!\.)/,
            lookbehind: !0
        }],
        punctuation: /[\[\](){},;]|\.+|:+/
    }, qi || (qi = 1, function (e) {
        for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) t = t.replace(/<self>/g, (function () {
            return t
        }));
        t = t.replace(/<self>/g, (function () {
            return /[^\s\S]/.source
        })), e.languages.rust = {
            comment: [{
                pattern: RegExp(/(^|[^\\])/.source + t),
                lookbehind: !0,
                greedy: !0
            }, {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0,
                greedy: !0
            }],
            string: {
                pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                greedy: !0
            },
            char: {
                pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                greedy: !0
            },
            attribute: {
                pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                greedy: !0,
                alias: "attr-name",
                inside: {
                    string: null
                }
            },
            "closure-params": {
                pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "closure-punctuation": {
                        pattern: /^\||\|$/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            "lifetime-annotation": {
                pattern: /'\w+/,
                alias: "symbol"
            },
            "fragment-specifier": {
                pattern: /(\$\w+:)[a-z]+/,
                lookbehind: !0,
                alias: "punctuation"
            },
            variable: /\$\w+/,
            "function-definition": {
                pattern: /(\bfn\s+)\w+/,
                lookbehind: !0,
                alias: "function"
            },
            "type-definition": {
                pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                lookbehind: !0,
                alias: "class-name"
            },
            "module-declaration": [{
                pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                lookbehind: !0,
                alias: "namespace"
            }, {
                pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                lookbehind: !0,
                alias: "namespace",
                inside: {
                    punctuation: /::/
                }
            }],
            keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
            function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
            macro: {
                pattern: /\b\w+!/,
                alias: "property"
            },
            constant: /\b[A-Z_][A-Z_\d]+\b/,
            "class-name": /\b[A-Z]\w*\b/,
            namespace: {
                pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                inside: {
                    punctuation: /::/
                }
            },
            number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
            boolean: /\b(?:false|true)\b/,
            punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
            operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
        }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
    }(Prism)),
    function (e) {
        e.languages.kotlin = e.languages.extend("clike", {
            keyword: {
                pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                lookbehind: !0
            },
            function: [{
                pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                greedy: !0
            }, {
                pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                lookbehind: !0,
                greedy: !0
            }],
            number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
            operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
        }), delete e.languages.kotlin["class-name"];
        var t = {
            "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation"
            },
            expression: {
                pattern: /[\s\S]+/,
                inside: e.languages.kotlin
            }
        };
        e.languages.insertBefore("kotlin", "string", {
            "string-literal": [{
                pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                alias: "multiline",
                inside: {
                    interpolation: {
                        pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                        inside: t
                    },
                    string: /[\s\S]+/
                }
            }, {
                pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                alias: "singleline",
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                        lookbehind: !0,
                        inside: t
                    },
                    string: /[\s\S]+/
                }
            }],
            char: {
                pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                greedy: !0
            }
        }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", {
            annotation: {
                pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                alias: "builtin"
            }
        }), e.languages.insertBefore("kotlin", "function", {
            label: {
                pattern: /\b\w+@|@\w+\b/,
                alias: "symbol"
            }
        }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin
    }(Prism),
    function (e) {
        var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,
            n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, (function () {
                return t
            })),
            r = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,
            a = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, (function () {
                return r
            })),
            o = {
                pattern: RegExp(r),
                greedy: !0
            },
            l = {
                pattern: /(^[ \t]*)#.*/m,
                lookbehind: !0,
                greedy: !0
            };

        function i(e, t) {
            return e = e.replace(/<OPT>/g, (function () {
                return a
            })).replace(/<SP>/g, (function () {
                return n
            })), RegExp(e, t)
        }
        e.languages.docker = {
            instruction: {
                pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    options: {
                        pattern: i(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            property: {
                                pattern: /(^|\s)--[\w-]+/,
                                lookbehind: !0
                            },
                            string: [o, {
                                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                                lookbehind: !0
                            }],
                            operator: /\\$/m,
                            punctuation: /=/
                        }
                    },
                    keyword: [{
                        pattern: i(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: i(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: i(/(^ONBUILD<SP>)\w+/.source, "i"),
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /^\w+/,
                        greedy: !0
                    }],
                    comment: l,
                    string: o,
                    variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                    operator: /\\$/m
                }
            },
            comment: l
        }, e.languages.dockerfile = e.languages.docker
    }(Prism), (Yi = Prism.languages.powershell = {
        comment: [{
            pattern: /(^|[^`])<#[\s\S]*?#>/,
            lookbehind: !0
        }, {
            pattern: /(^|[^`])#.*/,
            lookbehind: !0
        }],
        string: [{
            pattern: /"(?:`[\s\S]|[^`"])*"/,
            greedy: !0,
            inside: null
        }, {
            pattern: /'(?:[^']|'')*'/,
            greedy: !0
        }],
        namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
        boolean: /\$(?:false|true)\b/i,
        variable: /\$\w+\b/,
        function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    }).string[0].inside = {
        function: {
            pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
            lookbehind: !0,
            inside: Yi
        },
        boolean: Yi.boolean,
        variable: Yi.variable
    }, Prism.languages.json = {
        property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0
        },
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0
        },
        comment: {
            pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0
        },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:false|true)\b/,
        null: {
            pattern: /\bnull\b/,
            alias: "keyword"
        }
    }, Prism.languages.webmanifest = Prism.languages.json, Ki = /%%?[~:\w]+%?|!\S+!/, Xi = {
        pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
        alias: "attr-name",
        inside: {
            punctuation: /:/
        }
    }, Ji = /"(?:[\\"]"|[^"])*"(?!")/, Qi = /(?:\b|-)\d+\b/, Prism.languages.batch = {
        comment: [/^::.*/m, {
            pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0
        }],
        label: {
            pattern: /^:.*/m,
            alias: "property"
        },
        command: [{
            pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,
            lookbehind: !0,
            inside: {
                keyword: /\b(?:do|in)\b|^for\b/i,
                string: Ji,
                parameter: Xi,
                variable: Ki,
                number: Qi,
                punctuation: /[()',]/
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,
            lookbehind: !0,
            inside: {
                keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,
                string: Ji,
                parameter: Xi,
                variable: Ki,
                number: Qi,
                operator: /\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i
            }
        }, {
            pattern: /((?:^|[&()])[ \t]*)else\b/im,
            lookbehind: !0,
            inside: {
                keyword: /^else\b/i
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            inside: {
                keyword: /^set\b/i,
                string: Ji,
                parameter: Xi,
                variable: [Ki, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                number: Qi,
                operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                punctuation: /[()',]/
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,
            lookbehind: !0,
            inside: {
                keyword: /^\w+\b/,
                string: Ji,
                parameter: Xi,
                label: {
                    pattern: /(^\s*):\S+/m,
                    lookbehind: !0,
                    alias: "property"
                },
                variable: Ki,
                number: Qi,
                operator: /\^/
            }
        }],
        operator: /[&@]/,
        punctuation: /[()']/
    }, es || (es = 1, function (e) {
        var t = [/"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source, /'[^']*'/.source, /\$'(?:[^'\\]|\\[\s\S])*'/.source, /<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source].join("|");
        e.languages["shell-session"] = {
            command: {
                pattern: RegExp(/^/.source + "(?:" + /[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source + "|" + /[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source + ")?" + /[$#%](?=\s)/.source + /(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g, (function () {
                    return t
                })), "m"),
                greedy: !0,
                inside: {
                    info: {
                        pattern: /^[^#$%]+/,
                        alias: "punctuation",
                        inside: {
                            user: /^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,
                            punctuation: /:/,
                            path: /[\s\S]+/
                        }
                    },
                    bash: {
                        pattern: /(^[$#%]\s*)\S[\s\S]*/,
                        lookbehind: !0,
                        alias: "language-bash",
                        inside: e.languages.bash
                    },
                    "shell-symbol": {
                        pattern: /^[$#%]/,
                        alias: "important"
                    }
                }
            },
            output: /.(?:.*(?:[\r\n]|.$))*/
        }, e.languages["sh-session"] = e.languages.shellsession = e.languages["shell-session"]
    }(Prism)),
    function (e) {
        var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
                pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
                lookbehind: !0,
                alias: "punctuation",
                inside: null
            },
            r = {
                bash: n,
                environment: {
                    pattern: RegExp("\\$" + t),
                    alias: "constant"
                },
                variable: [{
                    pattern: /\$?\(\([\s\S]+?\)\)/,
                    greedy: !0,
                    inside: {
                        variable: [{
                            pattern: /(^\$\(\([\s\S]+)\)\)/,
                            lookbehind: !0
                        }, /^\$\(\(/],
                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                        punctuation: /\(\(?|\)\)?|,|;/
                    }
                }, {
                    pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                    greedy: !0,
                    inside: {
                        variable: /^\$\(|^`|\)$|`$/
                    }
                }, {
                    pattern: /\$\{[^}]+\}/,
                    greedy: !0,
                    inside: {
                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[\[\]]/,
                        environment: {
                            pattern: RegExp("(\\{)" + t),
                            lookbehind: !0,
                            alias: "constant"
                        }
                    }
                }, /\$(?:\w+|[#?*!@$])/],
                entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
            };
        e.languages.bash = {
            shebang: {
                pattern: /^#!\s*\/.*/,
                alias: "important"
            },
            comment: {
                pattern: /(^|[^"{\\$])#.*/,
                lookbehind: !0
            },
            "function-name": [{
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function"
            }, {
                pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
                alias: "function"
            }],
            "for-or-select": {
                pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                alias: "variable",
                lookbehind: !0
            },
            "assign-left": {
                pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
                inside: {
                    environment: {
                        pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                        lookbehind: !0,
                        alias: "constant"
                    }
                },
                alias: "variable",
                lookbehind: !0
            },
            parameter: {
                pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
                alias: "variable",
                lookbehind: !0
            },
            string: [{
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r
            }, {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    bash: n
                }
            }, {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r
            }, {
                pattern: /(^|[^$\\])'[^']*'/,
                lookbehind: !0,
                greedy: !0
            }, {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: {
                    entity: r.entity
                }
            }],
            environment: {
                pattern: RegExp("\\$?" + t),
                alias: "constant"
            },
            variable: r.variable,
            function: {
                pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            keyword: {
                pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            builtin: {
                pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
                lookbehind: !0,
                alias: "class-name"
            },
            boolean: {
                pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
                lookbehind: !0
            },
            "file-descriptor": {
                pattern: /\B&\d\b/,
                alias: "important"
            },
            operator: {
                pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                inside: {
                    "file-descriptor": {
                        pattern: /^\d/,
                        alias: "important"
                    }
                }
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
                pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                lookbehind: !0
            }
        }, n.inside = e.languages.bash;
        for (var a = ["comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], o = r.variable[1].inside, l = 0; l < a.length; l++) o[a[l]] = e.languages.bash[a[l]];
        e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash
    }(Prism),
    function (e) {
        function t(e, t) {
            return "___" + e.toUpperCase() + t + "___"
        }
        Object.defineProperties(e.languages["markup-templating"] = {}, {
            buildPlaceholders: {
                value(n, r, a, o) {
                    if (n.language === r) {
                        var l = n.tokenStack = [];
                        n.code = n.code.replace(a, (function (e) {
                            if ("function" == typeof o && !o(e)) return e;
                            for (var a, i = l.length; - 1 !== n.code.indexOf(a = t(r, i));) ++i;
                            return l[i] = e, a
                        })), n.grammar = e.languages.markup
                    }
                }
            },
            tokenizePlaceholders: {
                value(n, r) {
                    if (n.language === r && n.tokenStack) {
                        n.grammar = e.languages[r];
                        var a = 0,
                            o = Object.keys(n.tokenStack);
                        ! function l(i) {
                            for (var s = 0; s < i.length && !(a >= o.length); s++) {
                                var u = i[s];
                                if ("string" == typeof u || u.content && "string" == typeof u.content) {
                                    var c = o[a],
                                        d = n.tokenStack[c],
                                        p = "string" == typeof u ? u : u.content,
                                        f = t(r, c),
                                        v = p.indexOf(f);
                                    if (v > -1) {
                                        ++a;
                                        var g = p.substring(0, v),
                                            h = new e.Token(r, e.tokenize(d, n.grammar), "language-" + r, d),
                                            m = p.substring(v + f.length),
                                            y = [];
                                        g && y.push.apply(y, l([g])), y.push(h), m && y.push.apply(y, l([m])), "string" == typeof u ? i.splice.apply(i, [s, 1].concat(y)) : u.content = y
                                    }
                                } else u.content && l(u.content)
                            }
                            return i
                        }(n.tokens)
                    }
                }
            }
        })
    }(Prism),
    function (e) {
        var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)",
            a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, (function () {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
            })),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

        function l(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, (function () {
                return r
            })).replace(/<<value>>/g, (function () {
                return e
            }));
            return RegExp(n, t)
        }
        e.languages.yaml = {
            scalar: {
                pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function () {
                    return r
                }))),
                lookbehind: !0,
                alias: "string"
            },
            comment: /#.*/,
            key: {
                pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, (function () {
                    return r
                })).replace(/<<key>>/g, (function () {
                    return "(?:" + a + "|" + o + ")"
                }))),
                lookbehind: !0,
                greedy: !0,
                alias: "atrule"
            },
            directive: {
                pattern: /(^[ \t]*)%.+/m,
                lookbehind: !0,
                alias: "important"
            },
            datetime: {
                pattern: l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                lookbehind: !0,
                alias: "number"
            },
            boolean: {
                pattern: l(/false|true/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            null: {
                pattern: l(/null|~/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            string: {
                pattern: l(o),
                lookbehind: !0,
                greedy: !0
            },
            number: {
                pattern: l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                lookbehind: !0
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        }, e.languages.yml = e.languages.yaml
    }(Prism), ts || (ts = 1, function () {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
            var e = "line-numbers",
                t = /\n(?!$)/g,
                n = Prism.plugins.lineNumbers = {
                    getLine(t, n) {
                        if ("PRE" === t.tagName && t.classList.contains(e)) {
                            var r = t.querySelector(".line-numbers-rows");
                            if (r) {
                                var a = parseInt(t.getAttribute("data-start"), 10) || 1,
                                    o = a + (r.children.length - 1);
                                n < a && (n = a), n > o && (n = o);
                                var l = n - a;
                                return r.children[l]
                            }
                        }
                    },
                    resize(e) {
                        a([e])
                    },
                    assumeViewportIndependence: !0
                },
                r = void 0;
            window.addEventListener("resize", (function () {
                n.assumeViewportIndependence && r === window.innerWidth || (r = window.innerWidth, a([].slice.call(document.querySelectorAll("pre." + e))))
            })), Prism.hooks.add("complete", (function (n) {
                if (n.code) {
                    var r = n.element,
                        o = r.parentNode;
                    if (o && /pre/i.test(o.nodeName) && !r.querySelector(".line-numbers-rows") && Prism.util.isActive(r, e)) {
                        r.classList.remove(e), o.classList.add(e);
                        var l, i = n.code.match(t),
                            s = i ? i.length + 1 : 1,
                            u = new Array(s + 1).join("<span></span>");
                        (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, o.hasAttribute("data-start") && (o.style.counterReset = "linenumber " + (parseInt(o.getAttribute("data-start"), 10) - 1)), n.element.appendChild(l), a([o]), Prism.hooks.run("line-numbers", n)
                    }
                }
            })), Prism.hooks.add("line-numbers", (function (e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            }))
        }

        function a(e) {
            if (0 != (e = e.filter((function (e) {
                var t, n = (t = e, t ? window.getComputedStyle ? getComputedStyle(t) : t.currentStyle || null : null)["white-space"];
                return "pre-wrap" === n || "pre-line" === n
            }))).length) {
                var n = e.map((function (e) {
                    var n = e.querySelector("code"),
                        r = e.querySelector(".line-numbers-rows");
                    if (n && r) {
                        var a = e.querySelector(".line-numbers-sizer"),
                            o = n.textContent.split(t);
                        a || ((a = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(a)), a.innerHTML = "0", a.style.display = "block";
                        var l = a.getBoundingClientRect().height;
                        return a.innerHTML = "", {
                            element: e,
                            lines: o,
                            lineHeights: [],
                            oneLinerHeight: l,
                            sizer: a
                        }
                    }
                })).filter(Boolean);
                n.forEach((function (e) {
                    var t = e.sizer,
                        n = e.lines,
                        r = e.lineHeights,
                        a = e.oneLinerHeight;
                    r[n.length - 1] = void 0, n.forEach((function (e, n) {
                        if (e && e.length > 1) {
                            var o = t.appendChild(document.createElement("span"));
                            o.style.display = "block", o.textContent = e
                        } else r[n] = a
                    }))
                })), n.forEach((function (e) {
                    for (var t = e.sizer, n = e.lineHeights, r = 0, a = 0; a < n.length; a++) void 0 === n[a] && (n[a] = t.children[r++].getBoundingClientRect().height)
                })), n.forEach((function (e) {
                    var t = e.sizer,
                        n = e.element.querySelector(".line-numbers-rows");
                    t.style.display = "none", t.innerHTML = "", e.lineHeights.forEach((function (e, t) {
                        n.children[t].style.height = e + "px"
                    }))
                }))
            }
        }
    }());
const ns = "undefined" != typeof document;

function rs(e) {
    return "object" == typeof e || "displayName" in e || "props" in e || "__vccOpts" in e
}
const as = Object.assign;

function os(e, t) {
    const n = {};
    for (const r in t) {
        const a = t[r];
        n[r] = is(a) ? a.map(e) : e(a)
    }
    return n
}
const ls = () => { },
    is = Array.isArray,
    ss = /#/g,
    us = /&/g,
    cs = /=/g,
    ds = /\?/g,
    ps = /\+/g,
    fs = /%5B/g,
    vs = /%5D/g,
    gs = /%5E/g,
    hs = /%60/g,
    ms = /%7B/g,
    ys = /%7C/g,
    bs = /%7D/g,
    ks = /%20/g;

function ws(e) {
    return encodeURI("" + e).replace(ys, "|").replace(fs, "[").replace(vs, "]")
}

function xs(e) {
    return ws(e).replace(ps, "%2B").replace(ks, "+").replace(ss, "%23").replace(us, "%26").replace(hs, "`").replace(ms, "{").replace(bs, "}").replace(gs, "^")
}

function Cs(e) {
    return null == e ? "" : function (e) {
        return ws(e).replace(ss, "%23").replace(ds, "%3F")
    }(e).replace(/\//g, "%2F")
}

function Ss(e) {
    try {
        return decodeURIComponent("" + e)
    } catch (t) { }
    return "" + e
}

function _s(e, t, n = "/") {
    let r, a = {},
        o = "",
        l = "";
    const i = t.indexOf("#");
    let s = t.indexOf("?");
    return i < s && i >= 0 && (s = -1), s > -1 && (r = t.slice(0, s), o = t.slice(s + 1, i > -1 ? i : t.length), a = e(o)), i > -1 && (r = r || t.slice(0, i), l = t.slice(i, t.length)), r = function (e, t) {
        if (e.startsWith("/")) return e;
        if (!e) return t;
        const n = t.split("/"),
            r = e.split("/"),
            a = r[r.length - 1];
        ".." !== a && "." !== a || r.push("");
        let o, l, i = n.length - 1;
        for (o = 0; o < r.length; o++)
            if (l = r[o], "." !== l) {
                if (".." !== l) break;
                i > 1 && i--
            } return n.slice(0, i).join("/") + "/" + r.slice(o).join("/")
    }(null != r ? r : t, n), {
        fullPath: r + (o && "?") + o + l,
        path: r,
        query: a,
        hash: Ss(l)
    }
}

function As(e, t) {
    return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e
}

function Ls(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Ts(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!Es(e[n], t[n])) return !1;
    return !0
}

function Es(e, t) {
    return is(e) ? Fs(e, t) : is(t) ? Fs(t, e) : e === t
}

function Fs(e, t) {
    return is(t) ? e.length === t.length && e.every(((e, n) => e === t[n])) : 1 === e.length && e[0] === t
}
const $s = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Ps, Vs, Ms, Rs;
(Vs = Ps || (Ps = {})).pop = "pop", Vs.push = "push", (Rs = Ms || (Ms = {})).back = "back", Rs.forward = "forward", Rs.unknown = "";
const Is = /^[^#]+#/;

function Os(e, t) {
    return e.replace(Is, "#") + t
}
const Hs = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function Bs(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ds = new Map;

function Ns(e, t) {
    const {
        pathname: n,
        search: r,
        hash: a
    } = t, o = e.indexOf("#");
    if (o > -1) {
        let t = a.includes(e.slice(o)) ? e.slice(o).length : 1,
            n = a.slice(t);
        return "/" !== n[0] && (n = "/" + n), As(n, "")
    }
    return As(n, e) + r + a
}

function zs(e, t, n, r = !1, a = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: a ? Hs() : null
    }
}

function js(e) {
    return "string" == typeof e || "symbol" == typeof e
}
const Us = Symbol("");
var Ws, Gs;

function Zs(e, t) {
    return as(new Error, {
        type: e,
        [Us]: !0
    }, t)
}

function qs(e, t) {
    return e instanceof Error && Us in e && (null == t || !!(e.type & t))
} (Gs = Ws || (Ws = {}))[Gs.aborted = 4] = "aborted", Gs[Gs.cancelled = 8] = "cancelled", Gs[Gs.duplicated = 16] = "duplicated";
const Ys = "[^/]+?",
    Ks = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Xs = /[.+*?^${}()[\]/\\]/g;

function Js(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0
}

function Qs(e, t) {
    let n = 0;
    const r = e.score,
        a = t.score;
    for (; n < r.length && n < a.length;) {
        const e = Js(r[n], a[n]);
        if (e) return e;
        n++
    }
    if (1 === Math.abs(a.length - r.length)) {
        if (eu(r)) return 1;
        if (eu(a)) return -1
    }
    return a.length - r.length
}

function eu(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const tu = {
    type: 0,
    value: ""
},
    nu = /[a-zA-Z0-9_]/;

function ru(e, t, n) {
    const r = function (e, t) {
        const n = as({}, Ks, t),
            r = [];
        let a = n.start ? "^" : "";
        const o = [];
        for (const s of e) {
            const e = s.length ? [] : [90];
            n.strict && !s.length && (a += "/");
            for (let t = 0; t < s.length; t++) {
                const r = s[t];
                let l = 40 + (n.sensitive ? .25 : 0);
                if (0 === r.type) t || (a += "/"), a += r.value.replace(Xs, "\\$&"), l += 40;
                else if (1 === r.type) {
                    const {
                        value: e,
                        repeatable: n,
                        optional: u,
                        regexp: c
                    } = r;
                    o.push({
                        name: e,
                        repeatable: n,
                        optional: u
                    });
                    const d = c || Ys;
                    if (d !== Ys) {
                        l += 10;
                        try {
                            new RegExp(`(${d})`)
                        } catch (i) {
                            throw new Error(`Invalid custom RegExp for param "${e}" (${d}): ` + i.message)
                        }
                    }
                    let p = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`;
                    t || (p = u && s.length < 2 ? `(?:/${p})` : "/" + p), u && (p += "?"), a += p, l += 20, u && (l += -8), n && (l += -20), ".*" === d && (l += -50)
                }
                e.push(l)
            }
            r.push(e)
        }
        if (n.strict && n.end) {
            const e = r.length - 1;
            r[e][r[e].length - 1] += .7000000000000001
        }
        n.strict || (a += "/?"), n.end ? a += "$" : n.strict && !a.endsWith("/") && (a += "(?:/|$)");
        const l = new RegExp(a, n.sensitive ? "" : "i");
        return {
            re: l,
            score: r,
            keys: o,
            parse(e) {
                const t = e.match(l),
                    n = {};
                if (!t) return null;
                for (let r = 1; r < t.length; r++) {
                    const e = t[r] || "",
                        a = o[r - 1];
                    n[a.name] = e && a.repeatable ? e.split("/") : e
                }
                return n
            },
            stringify(t) {
                let n = "",
                    r = !1;
                for (const a of e) {
                    r && n.endsWith("/") || (n += "/"), r = !1;
                    for (const e of a)
                        if (0 === e.type) n += e.value;
                        else if (1 === e.type) {
                            const {
                                value: o,
                                repeatable: l,
                                optional: i
                            } = e, s = o in t ? t[o] : "";
                            if (is(s) && !l) throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);
                            const u = is(s) ? s.join("/") : s;
                            if (!u) {
                                if (!i) throw new Error(`Missing required param "${o}"`);
                                a.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0)
                            }
                            n += u
                        }
                }
                return n || "/"
            }
        }
    }(function (e) {
        if (!e) return [
            []
        ];
        if ("/" === e) return [
            [tu]
        ];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

        function t(e) {
            throw new Error(`ERR (${n})/"${u}": ${e}`)
        }
        let n = 0,
            r = n;
        const a = [];
        let o;

        function l() {
            o && a.push(o), o = []
        }
        let i, s = 0,
            u = "",
            c = "";

        function d() {
            u && (0 === n ? o.push({
                type: 0,
                value: u
            }) : 1 === n || 2 === n || 3 === n ? (o.length > 1 && ("*" === i || "+" === i) && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
                type: 1,
                value: u,
                regexp: c,
                repeatable: "*" === i || "+" === i,
                optional: "*" === i || "?" === i
            })) : t("Invalid state to consume buffer"), u = "")
        }

        function p() {
            u += i
        }
        for (; s < e.length;)
            if (i = e[s++], "\\" !== i || 2 === n) switch (n) {
                case 0:
                    "/" === i ? (u && d(), l()) : ":" === i ? (d(), n = 1) : p();
                    break;
                case 4:
                    p(), n = r;
                    break;
                case 1:
                    "(" === i ? n = 2 : nu.test(i) ? p() : (d(), n = 0, "*" !== i && "?" !== i && "+" !== i && s--);
                    break;
                case 2:
                    ")" === i ? "\\" == c[c.length - 1] ? c = c.slice(0, -1) + i : n = 3 : c += i;
                    break;
                case 3:
                    d(), n = 0, "*" !== i && "?" !== i && "+" !== i && s--, c = "";
                    break;
                default:
                    t("Unknown state")
            } else r = n, n = 4;
        return 2 === n && t(`Unfinished custom RegExp for param "${u}"`), d(), l(), a
    }(e.path), n),
        a = as(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a
}

function au(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function ou(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: lu(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function lu(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = "object" == typeof n ? n[r] : n;
    return t
}

function iu(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function su(e) {
    return e.reduce(((e, t) => as(e, t.meta)), {})
}

function uu(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function cu({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function du(e) {
    const t = {};
    if ("" === e || "?" === e) return t;
    const n = ("?" === e[0] ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
        const e = n[r].replace(ps, " "),
            a = e.indexOf("="),
            o = Ss(a < 0 ? e : e.slice(0, a)),
            l = a < 0 ? null : Ss(e.slice(a + 1));
        if (o in t) {
            let e = t[o];
            is(e) || (e = t[o] = [e]), e.push(l)
        } else t[o] = l
    }
    return t
}

function pu(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        (n = xs(n).replace(cs, "%3D"), null != r) ? (is(r) ? r.map((e => e && xs(e))) : [r && xs(r)]).forEach((e => {
            void 0 !== e && (t += (t.length ? "&" : "") + n, null != e && (t += "=" + e))
        })) : void 0 !== r && (t += (t.length ? "&" : "") + n)
    }
    return t
}

function fu(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        void 0 !== r && (t[n] = is(r) ? r.map((e => null == e ? null : "" + e)) : null == r ? r : "" + r)
    }
    return t
}
const vu = Symbol(""),
    gu = Symbol(""),
    hu = Symbol(""),
    mu = Symbol(""),
    yu = Symbol("");

function bu() {
    let e = [];
    return {
        add: t => (e.push(t), () => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }),
        list: () => e.slice(),
        reset() {
            e = []
        }
    }
}

function ku(e, t, n, r, a, o = e => e()) {
    const l = r && (r.enterCallbacks[a] = r.enterCallbacks[a] || []);
    return () => new Promise(((i, s) => {
        const u = e => {
            var o;
            !1 === e ? s(Zs(4, {
                from: n,
                to: t
            })) : e instanceof Error ? s(e) : "string" == typeof (o = e) || o && "object" == typeof o ? s(Zs(2, {
                from: t,
                to: e
            })) : (l && r.enterCallbacks[a] === l && "function" == typeof e && l.push(e), i())
        },
            c = o((() => e.call(r && r.instances[a], t, n, u)));
        let d = Promise.resolve(c);
        e.length < 3 && (d = d.then(u)), d.catch((e => s(e)))
    }))
}

function wu(e, t, n, r, a = e => e()) {
    const o = [];
    for (const l of e)
        for (const e in l.components) {
            let i = l.components[e];
            if ("beforeRouteEnter" === t || l.instances[e])
                if (rs(i)) {
                    const s = (i.__vccOpts || i)[t];
                    s && o.push(ku(s, n, r, l, e, a))
                } else {
                    let s = i();
                    o.push((() => s.then((o => {
                        if (!o) throw new Error(`Couldn't resolve component "${e}" at "${l.path}"`);
                        const i = (s = o).__esModule || "Module" === s[Symbol.toStringTag] || s.default && rs(s.default) ? o.default : o;
                        var s;
                        l.mods[e] = o, l.components[e] = i;
                        const u = (i.__vccOpts || i)[t];
                        return u && ku(u, n, r, l, e, a)()
                    }))))
                }
        }
    return o
}

function xu(e) {
    const t = Vr(hu),
        n = Vr(mu),
        r = ao((() => {
            const n = St(e.to);
            return t.resolve(n)
        })),
        a = ao((() => {
            const {
                matched: e
            } = r.value, {
                length: t
            } = e, a = e[t - 1], o = n.matched;
            if (!a || !o.length) return -1;
            const l = o.findIndex(Ls.bind(null, a));
            if (l > -1) return l;
            const i = Su(e[t - 2]);
            return t > 1 && Su(a) === i && o[o.length - 1].path !== i ? o.findIndex(Ls.bind(null, e[t - 2])) : l
        })),
        o = ao((() => a.value > -1 && function (e, t) {
            for (const n in t) {
                const r = t[n],
                    a = e[n];
                if ("string" == typeof r) {
                    if (r !== a) return !1
                } else if (!is(a) || a.length !== r.length || r.some(((e, t) => e !== a[t]))) return !1
            }
            return !0
        }(n.params, r.value.params))),
        l = ao((() => a.value > -1 && a.value === n.matched.length - 1 && Ts(n.params, r.value.params)));
    return {
        route: r,
        href: ao((() => r.value.href)),
        isActive: o,
        isExactActive: l,
        navigate(n = {}) {
            if (function (e) {
                if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
                    if (e.currentTarget && e.currentTarget.getAttribute) {
                        const t = e.currentTarget.getAttribute("target");
                        if (/\b_blank\b/i.test(t)) return
                    }
                    return e.preventDefault && e.preventDefault(), !0
                }
            }(n)) {
                const n = t[St(e.replace) ? "replace" : "push"](St(e.to)).catch(ls);
                return e.viewTransition && "undefined" != typeof document && "startViewTransition" in document && document.startViewTransition((() => n)), n
            }
            return Promise.resolve()
        }
    }
}
const Cu = Vn({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: xu,
    setup(e, {
        slots: t
    }) {
        const n = st(xu(e)),
            {
                options: r
            } = Vr(hu),
            a = ao((() => ({
                [_u(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                [_u(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
            })));
        return () => {
            const r = t.default && (1 === (o = t.default(n)).length ? o[0] : o);
            var o;
            return e.custom ? r : oo("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: a.value
            }, r)
        }
    }
});

function Su(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const _u = (e, t, n) => null != e ? e : null != t ? t : n;

function Au(e, t) {
    if (!e) return null;
    const n = e(t);
    return 1 === n.length ? n[0] : n
}
const Lu = Vn({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {
        attrs: t,
        slots: n
    }) {
        const r = Vr(yu),
            a = ao((() => e.route || r.value)),
            o = Vr(gu, 0),
            l = ao((() => {
                let e = St(o);
                const {
                    matched: t
                } = a.value;
                let n;
                for (;
                    (n = t[e]) && !n.components;) e++;
                return e
            })),
            i = ao((() => a.value.matched[l.value]));
        Pr(gu, ao((() => l.value + 1))), Pr(vu, i), Pr(yu, a);
        const s = kt();
        return aa((() => [s.value, i.value, e.name]), (([e, t, n], [r, a, o]) => {
            t && (t.instances[n] = e, a && a !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = a.leaveGuards), t.updateGuards.size || (t.updateGuards = a.updateGuards))), !e || !t || a && Ls(t, a) && r || (t.enterCallbacks[n] || []).forEach((t => t(e)))
        }), {
            flush: "post"
        }), () => {
            const r = a.value,
                o = e.name,
                l = i.value,
                u = l && l.components[o];
            if (!u) return Au(n.default, {
                Component: u,
                route: r
            });
            const c = l.props[o],
                d = c ? !0 === c ? r.params : "function" == typeof c ? c(r) : c : null,
                p = oo(u, as({}, d, t, {
                    onVnodeUnmounted(e) {
                        e.component.isUnmounted && (l.instances[o] = null)
                    },
                    ref: s
                }));
            return Au(n.default, {
                Component: p,
                route: r
            }) || p
        }
    }
});

function Tu(e, t) {
    let n;

    function r() {
        n = ne(), n.run((() => t.length ? t((() => {
            null == n || n.stop(), r()
        })) : t()))
    }
    aa(e, (e => {
        e && !n ? r() : e || (null == n || n.stop(), n = void 0)
    }), {
        immediate: !0
    }), re((() => {
        null == n || n.stop()
    }))
}
const Eu = "undefined" != typeof window,
    Fu = Eu && "IntersectionObserver" in window,
    $u = Eu && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);

function Pu(e, t, n) {
    const r = t.length - 1;
    if (r < 0) return void 0 === e ? n : e;
    for (let a = 0; a < r; a++) {
        if (null == e) return n;
        e = e[t[a]]
    }
    return null == e || void 0 === e[t[r]] ? n : e[t[r]]
}

function Vu(e, t) {
    if (e === t) return !0;
    if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) return !1;
    if (e !== Object(e) || t !== Object(t)) return !1;
    const n = Object.keys(e);
    return n.length === Object.keys(t).length && n.every((n => Vu(e[n], t[n])))
}

function Mu(e, t, n) {
    return null != e && t && "string" == typeof t ? void 0 !== e[t] ? e[t] : Pu(e, (t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), n) : n
}

function Ru(e, t, n) {
    if (!0 === t) return void 0 === e ? n : e;
    if (null == t || "boolean" == typeof t) return n;
    if (e !== Object(e)) {
        if ("function" != typeof t) return n;
        const r = t(e, n);
        return void 0 === r ? n : r
    }
    if ("string" == typeof t) return Mu(e, t, n);
    if (Array.isArray(t)) return Pu(e, t, n);
    if ("function" != typeof t) return n;
    const r = t(e, n);
    return void 0 === r ? n : r
}

function Iu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Array.from({
        length: e
    }, ((e, n) => t + n))
}

function Ou(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
    return null == e || "" === e ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0
}

function Hu(e) {
    let t;
    return null !== e && "object" == typeof e && ((t = Object.getPrototypeOf(e)) === Object.prototype || null === t)
}

function Bu(e) {
    if (e && "$el" in e) {
        const t = e.$el;
        return (null == t ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t
    }
    return e
}
const Du = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
}),
    Nu = Object.freeze({
        enter: "Enter",
        tab: "Tab",
        delete: "Delete",
        esc: "Escape",
        space: "Space",
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
        end: "End",
        home: "Home",
        del: "Delete",
        backspace: "Backspace",
        insert: "Insert",
        pageup: "PageUp",
        pagedown: "PageDown",
        shift: "Shift"
    });

function zu(e, t) {
    return t.every((t => e.hasOwnProperty(t)))
}

function ju(e, t) {
    const n = {},
        r = new Set(Object.keys(e));
    for (const a of t) r.has(a) && (n[a] = e[a]);
    return n
}

function Uu(e, t, n) {
    const r = Object.create(null),
        a = Object.create(null);
    for (const o in e) t.some((e => e instanceof RegExp ? e.test(o) : e === o)) ? r[o] = e[o] : a[o] = e[o];
    return [r, a]
}

function Wu(e, t) {
    const n = {
        ...e
    };
    return t.forEach((e => delete n[e])), n
}
const Gu = /^on[^a-z]/,
    Zu = e => Gu.test(e),
    qu = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];

function Yu(e) {
    const [t, n] = Uu(e, [Gu]), r = Wu(t, qu), [a, o] = Uu(n, ["class", "style", "id", /^data-/]);
    return Object.assign(a, t), Object.assign(o, r), [a, o]
}

function Ku(e) {
    return null == e ? [] : Array.isArray(e) ? e : [e]
}

function Xu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return Math.max(t, Math.min(n, e))
}

function Ju(e) {
    const t = e.toString().trim();
    return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0
}

function Qu(e, t) {
    return e + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0").repeat(Math.max(0, t - e.length))
}

function ec(e, t) {
    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e
}

function tc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
    const r = {};
    for (const a in e) r[a] = e[a];
    for (const a in t) {
        const o = e[a],
            l = t[a];
        Hu(o) && Hu(l) ? r[a] = tc(o, l, n) : n && Array.isArray(o) && Array.isArray(l) ? r[a] = n(o, l) : r[a] = l
    }
    return r
}

function nc(e) {
    return e.map((e => e.type === ma ? nc(e.children) : e)).flat()
}

function rc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (rc.cache.has(e)) return rc.cache.get(e);
    const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
    return rc.cache.set(e, t), t
}

function ac(e, t) {
    if (!t || "object" != typeof t) return [];
    if (Array.isArray(t)) return t.map((t => ac(e, t))).flat(1);
    if (t.suspense) return ac(e, t.ssContent);
    if (Array.isArray(t.children)) return t.children.map((t => ac(e, t))).flat(1);
    if (t.component) {
        if (Object.getOwnPropertySymbols(t.component.provides).includes(e)) return [t.component];
        if (t.component.subTree) return ac(e, t.component.subTree).flat(1)
    }
    return []
}

function oc(e) {
    const t = st({}),
        n = ao(e);
    return ra((() => {
        for (const e in n.value) t[e] = n.value[e]
    }), {
        flush: "sync"
    }), Lt(t)
}

function lc(e, t) {
    return e.includes(t)
}

function ic(e) {
    return e[2].toLowerCase() + e.slice(3)
}
rc.cache = new Map;
const sc = () => [Function, Array];

function uc(e, t) {
    return !!(e[t = "on" + V(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`])
}

function cc(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    if (Array.isArray(e))
        for (const a of e) a(...n);
    else "function" == typeof e && e(...n)
}

function dc(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((e => `${e}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`)).join(", ");
    return [...e.querySelectorAll(n)]
}

function pc(e, t, n) {
    let r, a = e.indexOf(document.activeElement);
    const o = "next" === t ? 1 : -1;
    do {
        a += o, r = e[a]
    } while ((!r || null == r.offsetParent || !((null == n ? void 0 : n(r)) ?? 1)) && a < e.length && a >= 0);
    return r
}

function fc(e, t) {
    var n, r, a, o;
    const l = dc(e);
    if (t)
        if ("first" === t) null == (r = l[0]) || r.focus();
        else if ("last" === t) null == (a = l.at(-1)) || a.focus();
        else if ("number" == typeof t) null == (o = l[t]) || o.focus();
        else {
            const n = pc(l, t);
            n ? n.focus() : fc(e, "next" === t ? "first" : "last")
        } else e !== document.activeElement && e.contains(document.activeElement) || null == (n = l[0]) || n.focus()
}

function vc() {
    const e = wt(),
        t = t => {
            e.value = t
        };
    return Object.defineProperty(t, "value", {
        enumerable: !0,
        get: () => e.value,
        set: t => e.value = t
    }), Object.defineProperty(t, "el", {
        enumerable: !0,
        get: () => Bu(e.value)
    }), t
}
const gc = ["top", "bottom"],
    hc = ["start", "end", "left", "right"];

function mc(e, t) {
    let [n, r] = e.split(" ");
    return r || (r = lc(gc, n) ? "start" : lc(hc, n) ? "top" : "center"), {
        side: yc(n, t),
        align: yc(r, t)
    }
}

function yc(e, t) {
    return "start" === e ? t ? "right" : "left" : "end" === e ? t ? "left" : "right" : e
}

function bc(e) {
    return {
        side: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.side],
        align: e.align
    }
}

function kc(e) {
    return {
        side: e.side,
        align: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.align]
    }
}

function wc(e) {
    return {
        side: e.align,
        align: e.side
    }
}

function xc(e) {
    return lc(gc, e.side) ? "y" : "x"
}
class Cc {
    constructor(e) {
        let {
            x: t,
            y: n,
            width: r,
            height: a
        } = e;
        this.x = t, this.y = n, this.width = r, this.height = a
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
}

function Sc(e, t) {
    return {
        x: {
            before: Math.max(0, t.left - e.left),
            after: Math.max(0, e.right - t.right)
        },
        y: {
            before: Math.max(0, t.top - e.top),
            after: Math.max(0, e.bottom - t.bottom)
        }
    }
}

function _c(e) {
    return Array.isArray(e) ? new Cc({
        x: e[0],
        y: e[1],
        width: 0,
        height: 0
    }) : e.getBoundingClientRect()
}

function Ac(e) {
    const t = e.getBoundingClientRect(),
        n = getComputedStyle(e),
        r = n.transform;
    if (r) {
        let a, o, l, i, s;
        if (r.startsWith("matrix3d(")) a = r.slice(9, -1).split(/, /), o = +a[0], l = +a[5], i = +a[12], s = +a[13];
        else {
            if (!r.startsWith("matrix(")) return new Cc(t);
            a = r.slice(7, -1).split(/, /), o = +a[0], l = +a[3], i = +a[4], s = +a[5]
        }
        const u = n.transformOrigin,
            c = t.x - i - (1 - o) * parseFloat(u),
            d = t.y - s - (1 - l) * parseFloat(u.slice(u.indexOf(" ") + 1)),
            p = o ? t.width / o : e.offsetWidth + 1,
            f = l ? t.height / l : e.offsetHeight + 1;
        return new Cc({
            x: c,
            y: d,
            width: p,
            height: f
        })
    }
    return new Cc(t)
}

function Lc(e, t, n) {
    if (void 0 === e.animate) return {
        finished: Promise.resolve()
    };
    let r;
    try {
        r = e.animate(t, n)
    } catch (a) {
        return {
            finished: Promise.resolve()
        }
    }
    return void 0 === r.finished && (r.finished = new Promise((e => {
        r.onfinish = () => {
            e(r)
        }
    }))), r
}
const Tc = new WeakMap,
    Ec = 2.4,
    Fc = .2126729,
    $c = .7151522,
    Pc = .072175,
    Vc = .03,
    Mc = 12.82051282051282,
    Rc = .06;

function Ic(e, t) {
    const n = (e.r / 255) ** Ec,
        r = (e.g / 255) ** Ec,
        a = (e.b / 255) ** Ec,
        o = (t.r / 255) ** Ec,
        l = (t.g / 255) ** Ec,
        i = (t.b / 255) ** Ec;
    let s, u = n * Fc + r * $c + a * Pc,
        c = o * Fc + l * $c + i * Pc;
    if (u <= Vc && (u += (Vc - u) ** 1.45), c <= Vc && (c += (Vc - c) ** 1.45), Math.abs(c - u) < 5e-4) return 0;
    if (c > u) {
        const e = 1.25 * (c ** .55 - u ** .58);
        s = e < .001 ? 0 : e < .078 ? e - e * Mc * Rc : e - Rc
    } else {
        const e = 1.25 * (c ** .62 - u ** .57);
        s = e > -.001 ? 0 : e > -.078 ? e - e * Mc * Rc : e + Rc
    }
    return 100 * s
}
const Oc = .20689655172413793,
    Hc = e => e > Oc ** 3 ? Math.cbrt(e) : e / (3 * Oc ** 2) + 4 / 29,
    Bc = e => e > Oc ? e ** 3 : 3 * Oc ** 2 * (e - 4 / 29);

function Dc(e) {
    const t = Hc,
        n = t(e[1]);
    return [116 * n - 16, 500 * (t(e[0] / .95047) - n), 200 * (n - t(e[2] / 1.08883))]
}

function Nc(e) {
    const t = Bc,
        n = (e[0] + 16) / 116;
    return [.95047 * t(n + e[1] / 500), t(n), 1.08883 * t(n - e[2] / 200)]
}
const zc = [
    [3.2406, -1.5372, -.4986],
    [-.9689, 1.8758, .0415],
    [.0557, -.204, 1.057]
],
    jc = e => e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055,
    Uc = [
        [.4124, .3576, .1805],
        [.2126, .7152, .0722],
        [.0193, .1192, .9505]
    ],
    Wc = e => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;

function Gc(e) {
    const t = Array(3),
        n = jc,
        r = zc;
    for (let a = 0; a < 3; ++a) t[a] = Math.round(255 * Xu(n(r[a][0] * e[0] + r[a][1] * e[1] + r[a][2] * e[2])));
    return {
        r: t[0],
        g: t[1],
        b: t[2]
    }
}

function Zc(e) {
    let {
        r: t,
        g: n,
        b: r
    } = e;
    const a = [0, 0, 0],
        o = Wc,
        l = Uc;
    t = o(t / 255), n = o(n / 255), r = o(r / 255);
    for (let i = 0; i < 3; ++i) a[i] = l[i][0] * t + l[i][1] * n + l[i][2] * r;
    return a
}

function qc(e) {
    return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
}
const Yc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
    Kc = {
        rgb: (e, t, n, r) => ({
            r: e,
            g: t,
            b: n,
            a: r
        }),
        rgba: (e, t, n, r) => ({
            r: e,
            g: t,
            b: n,
            a: r
        }),
        hsl: (e, t, n, r) => Qc({
            h: e,
            s: t,
            l: n,
            a: r
        }),
        hsla: (e, t, n, r) => Qc({
            h: e,
            s: t,
            l: n,
            a: r
        }),
        hsv: (e, t, n, r) => Jc({
            h: e,
            s: t,
            v: n,
            a: r
        }),
        hsva: (e, t, n, r) => Jc({
            h: e,
            s: t,
            v: n,
            a: r
        })
    };

function Xc(e) {
    if ("number" == typeof e) return {
        r: (16711680 & e) >> 16,
        g: (65280 & e) >> 8,
        b: 255 & e
    };
    if ("string" == typeof e && Yc.test(e)) {
        const {
            groups: t
        } = e.match(Yc), {
            fn: n,
            values: r
        } = t, a = r.split(/,\s*/).map((e => e.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(e) / 100 : parseFloat(e)));
        return Kc[n](...a)
    }
    if ("string" == typeof e) {
        let t = e.startsWith("#") ? e.slice(1) : e;
        return [3, 4].includes(t.length) ? t = t.split("").map((e => e + e)).join("") : [6, 8].includes(t.length),
            function (e) {
                e = function (e) {
                    return e.startsWith("#") && (e = e.slice(1)), (3 === (e = e.replace(/([^0-9a-f])/gi, "F")).length || 4 === e.length) && (e = e.split("").map((e => e + e)).join("")), 6 !== e.length && (e = Qu(Qu(e, 6), 8, "F")), e
                }(e);
                let [t, n, r, a] = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    const n = [];
                    let r = 0;
                    for (; r < e.length;) n.push(e.substr(r, t)), r += t;
                    return n
                }(e, 2).map((e => parseInt(e, 16)));
                return a = void 0 === a ? a : a / 255, {
                    r: t,
                    g: n,
                    b: r,
                    a
                }
            }(t)
    }
    if ("object" == typeof e) {
        if (zu(e, ["r", "g", "b"])) return e;
        if (zu(e, ["h", "s", "l"])) return Jc(ed(e));
        if (zu(e, ["h", "s", "v"])) return Jc(e)
    }
    throw new TypeError(`Invalid color: ${null == e ? e : String(e) || e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}

function Jc(e) {
    const {
        h: t,
        s: n,
        v: r,
        a
    } = e, o = e => {
        const a = (e + t / 60) % 6;
        return r - r * n * Math.max(Math.min(a, 4 - a, 1), 0)
    }, l = [o(5), o(3), o(1)].map((e => Math.round(255 * e)));
    return {
        r: l[0],
        g: l[1],
        b: l[2],
        a
    }
}

function Qc(e) {
    return Jc(ed(e))
}

function ed(e) {
    const {
        h: t,
        s: n,
        l: r,
        a
    } = e, o = r + n * Math.min(r, 1 - r);
    return {
        h: t,
        s: 0 === o ? 0 : 2 - 2 * r / o,
        v: o,
        a
    }
}

function td(e) {
    const t = Math.round(e).toString(16);
    return ("00".substr(0, 2 - t.length) + t).toUpperCase()
}

function nd(e) {
    let {
        r: t,
        g: n,
        b: r,
        a
    } = e;
    return `#${[td(t), td(n), td(r), void 0 !== a ? td(Math.round(255 * a)) : ""].join("")}`
}

function rd(e, t) {
    const n = Dc(Zc(e));
    return n[0] = n[0] + 10 * t, Gc(Nc(n))
}

function ad(e, t) {
    const n = Dc(Zc(e));
    return n[0] = n[0] - 10 * t, Gc(Nc(n))
}

function od(e) {
    const t = Math.abs(Ic(Xc(0), Xc(e)));
    return Math.abs(Ic(Xc(16777215), Xc(e))) > Math.min(t, 50) ? "#fff" : "#000"
}

function ld(e, t) {
    return n => Object.keys(e).reduce(((r, a) => {
        const o = "object" != typeof e[a] || null == e[a] || Array.isArray(e[a]) ? {
            type: e[a]
        } : e[a];
        return r[a] = n && a in n ? {
            ...o,
            default: n[a]
        } : o, t && !r[a].source && (r[a].source = t), r
    }), {})
}
const id = ld({
    class: [String, Array, Object],
    style: {
        type: [String, Array, Object],
        default: null
    }
}, "component");

function sd(e, t) {
    const n = Ga();
    if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
    return n
}

function ud() {
    const e = sd(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "composables").type;
    return rc((null == e ? void 0 : e.aliasName) || (null == e ? void 0 : e.name))
}
let cd = 0,
    dd = new WeakMap;

function pd() {
    const e = sd("getUid");
    if (dd.has(e)) return dd.get(e);
    {
        const t = cd++;
        return dd.set(e, t), t
    }
}
pd.reset = () => {
    cd = 0, dd = new WeakMap
};
const fd = Symbol.for("vuetify:defaults");

function vd() {
    const e = Vr(fd);
    if (!e) throw new Error("[Vuetify] Could not find defaults instance");
    return e
}

function gd(e, t) {
    const n = vd(),
        r = kt(e),
        a = ao((() => {
            if (St(null == t ? void 0 : t.disabled)) return n.value;
            const e = St(null == t ? void 0 : t.scoped),
                a = St(null == t ? void 0 : t.reset),
                o = St(null == t ? void 0 : t.root);
            if (null == r.value && !(e || a || o)) return n.value;
            let l = tc(r.value, {
                prev: n.value
            });
            if (e) return l;
            if (a || o) {
                const e = Number(a || 1 / 0);
                for (let t = 0; t <= e && l && "prev" in l; t++) l = l.prev;
                return l && "string" == typeof o && o in l && (l = tc(tc(l, {
                    prev: l
                }), l[o])), l
            }
            return l.prev ? tc(l.prev, l) : l
        }));
    return Pr(fd, a), a
}

function hd(e) {
    if (e._setup = e._setup ?? e.setup, !e.name) return e;
    if (e._setup) {
        e.props = ld(e.props ?? {}, e.name)();
        const t = Object.keys(e.props).filter((e => "class" !== e && "style" !== e));
        e.filterProps = function (e) {
            return ju(e, t)
        }, e.props._as = String, e.setup = function (t, n) {
            const r = vd();
            if (!r.value) return e._setup(t, n);
            const {
                props: a,
                provideSubDefaults: o
            } = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vd();
                const r = sd("useDefaults");
                if (t = t ?? r.type.name ?? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
                const a = ao((() => {
                    var r;
                    return null == (r = n.value) ? void 0 : r[e._as ?? t]
                })),
                    o = new Proxy(e, {
                        get(e, t) {
                            var o, l, i, s, u, c, d;
                            const p = Reflect.get(e, t);
                            return "class" === t || "style" === t ? [null == (o = a.value) ? void 0 : o[t], p].filter((e => null != e)) : "string" != typeof t || function (e, t) {
                                var n, r;
                                return void 0 !== (null == (n = e.props) ? void 0 : n[t]) || void 0 !== (null == (r = e.props) ? void 0 : r[rc(t)])
                            }(r.vnode, t) ? p : void 0 !== (null == (l = a.value) ? void 0 : l[t]) ? null == (i = a.value) ? void 0 : i[t] : void 0 !== (null == (u = null == (s = n.value) ? void 0 : s.global) ? void 0 : u[t]) ? null == (d = null == (c = n.value) ? void 0 : c.global) ? void 0 : d[t] : p
                        }
                    }),
                    l = wt();
                return ra((() => {
                    if (a.value) {
                        const e = Object.entries(a.value).filter((e => {
                            let [t] = e;
                            return t.startsWith(t[0].toUpperCase())
                        }));
                        l.value = e.length ? Object.fromEntries(e) : void 0
                    } else l.value = void 0
                })), {
                    props: o,
                    provideSubDefaults() {
                        const e = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sd("injectSelf");
                            const {
                                provides: n
                            } = t;
                            if (n && e in n) return n[e]
                        }(fd, r);
                        Pr(fd, ao((() => l.value ? tc((null == e ? void 0 : e.value) ?? {}, l.value) : null == e ? void 0 : e.value)))
                    }
                }
            }(t, t._as ?? e.name, r), l = e._setup(a, n);
            return o(), l
        }
    }
    return e
}

function md() {
    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return t => (e ? hd : Vn)(t)
}

function yd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "div",
        n = arguments.length > 2 ? arguments[2] : void 0;
    return md()({
        name: n ?? V(F(e.replace(/__/g, "-"))),
        props: {
            tag: {
                type: String,
                default: t
            },
            ...id()
        },
        setup(t, n) {
            let {
                slots: r
            } = n;
            return () => {
                var n;
                return oo(t.tag, {
                    class: [e, t.class],
                    style: t.style
                }, null == (n = r.default) ? void 0 : n.call(r))
            }
        }
    })
}

function bd(e) {
    if ("function" != typeof e.getRootNode) {
        for (; e.parentNode;) e = e.parentNode;
        return e !== document ? null : document
    }
    const t = e.getRootNode();
    return t !== document && t.getRootNode({
        composed: !0
    }) !== document ? null : t
}
const kd = "cubic-bezier(0.4, 0, 0.2, 1)";

function wd(e, t) {
    const n = [];
    if (t && e && !t.contains(e)) return n;
    for (; e && (xd(e) && n.push(e), e !== t);) e = e.parentElement;
    return n
}

function xd(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
    const t = window.getComputedStyle(e);
    return "scroll" === t.overflowY || "auto" === t.overflowY && e.scrollHeight > e.clientHeight
}

function Cd(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
    const t = window.getComputedStyle(e);
    return ["scroll", "auto"].includes(t.overflowY)
}

function Sd(e) {
    sd("useRender").render = e
}

function _d(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e => e;
    const o = sd("useProxiedModel"),
        l = kt(void 0 !== e[t] ? e[t] : n),
        i = rc(t),
        s = ao(i !== t ? () => {
            var n, r, a, l;
            return e[t], !(!(null == (n = o.vnode.props) ? void 0 : n.hasOwnProperty(t)) && !(null == (r = o.vnode.props) ? void 0 : r.hasOwnProperty(i)) || !(null == (a = o.vnode.props) ? void 0 : a.hasOwnProperty(`onUpdate:${t}`)) && !(null == (l = o.vnode.props) ? void 0 : l.hasOwnProperty(`onUpdate:${i}`)))
        } : () => {
            var n, r;
            return e[t], !(!(null == (n = o.vnode.props) ? void 0 : n.hasOwnProperty(t)) || !(null == (r = o.vnode.props) ? void 0 : r.hasOwnProperty(`onUpdate:${t}`)))
        });
    Tu((() => !s.value), (() => {
        aa((() => e[t]), (e => {
            l.value = e
        }))
    }));
    const u = ao({
        get() {
            const n = e[t];
            return r(s.value ? n : l.value)
        },
        set(n) {
            const i = a(n),
                u = ht(s.value ? e[t] : l.value);
            u !== i && r(u) !== n && (l.value = i, null == o || o.emit(`update:${t}`, i))
        }
    });
    return Object.defineProperty(u, "externalValue", {
        get: () => s.value ? e[t] : l.value
    }), u
}
const Ad = {
    badge: "Badge",
    open: "Open",
    close: "Close",
    dismiss: "Dismiss",
    confirmEdit: {
        ok: "OK",
        cancel: "Cancel"
    },
    dataIterator: {
        noResultsText: "No matching records found",
        loadingText: "Loading items..."
    },
    dataTable: {
        itemsPerPageText: "Rows per page:",
        ariaLabel: {
            sortDescending: "Sorted descending.",
            sortAscending: "Sorted ascending.",
            sortNone: "Not sorted.",
            activateNone: "Activate to remove sorting.",
            activateDescending: "Activate to sort descending.",
            activateAscending: "Activate to sort ascending."
        },
        sortBy: "Sort by"
    },
    dataFooter: {
        itemsPerPageText: "Items per page:",
        itemsPerPageAll: "All",
        nextPage: "Next page",
        prevPage: "Previous page",
        firstPage: "First page",
        lastPage: "Last page",
        pageText: "{0}-{1} of {2}"
    },
    dateRangeInput: {
        divider: "to"
    },
    datePicker: {
        itemsSelected: "{0} selected",
        range: {
            title: "Select dates",
            header: "Enter dates"
        },
        title: "Select date",
        header: "Enter date",
        input: {
            placeholder: "Enter date"
        }
    },
    noDataText: "No data available",
    carousel: {
        prev: "Previous visual",
        next: "Next visual",
        ariaLabel: {
            delimiter: "Carousel slide {0} of {1}"
        }
    },
    calendar: {
        moreEvents: "{0} more",
        today: "Today"
    },
    input: {
        clear: "Clear {0}",
        prependAction: "{0} prepended action",
        appendAction: "{0} appended action",
        otp: "Please enter OTP character {0}"
    },
    fileInput: {
        counter: "{0} files",
        counterSize: "{0} files ({1} in total)"
    },
    fileUpload: {
        title: "Drag and drop files here",
        divider: "or",
        browse: "Browse Files"
    },
    timePicker: {
        am: "AM",
        pm: "PM",
        title: "Select Time"
    },
    pagination: {
        ariaLabel: {
            root: "Pagination Navigation",
            next: "Next page",
            previous: "Previous page",
            page: "Go to page {0}",
            currentPage: "Page {0}, Current page",
            first: "First page",
            last: "Last page"
        }
    },
    stepper: {
        next: "Next",
        prev: "Previous"
    },
    rating: {
        ariaLabel: {
            item: "Rating {0} of {1}"
        }
    },
    loading: "Loading...",
    infiniteScroll: {
        loadMore: "Load more",
        empty: "No more"
    }
},
    Ld = "$vuetify.",
    Td = (e, t) => e.replace(/\{(\d+)\}/g, ((e, n) => String(t[+n]))),
    Ed = (e, t, n) => function (r) {
        for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++) o[l - 1] = arguments[l];
        if (!r.startsWith(Ld)) return Td(r, o);
        const i = r.replace(Ld, ""),
            s = e.value && n.value[e.value],
            u = t.value && n.value[t.value];
        let c = Mu(s, i, null);
        return c || (e.value, c = Mu(u, i, null)), c || (c = r), "string" != typeof c && (c = r), Td(c, o)
    };

function Fd(e, t) {
    return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n)
}

function $d(e, t, n) {
    const r = _d(e, t, e[t] ?? n.value);
    return r.value = e[t] ?? n.value, aa(n, (a => {
        null == e[t] && (r.value = n.value)
    })), r
}

function Pd(e) {
    return t => {
        const n = $d(t, "locale", e.current),
            r = $d(t, "fallback", e.fallback),
            a = $d(t, "messages", e.messages);
        return {
            name: "vuetify",
            current: n,
            fallback: r,
            messages: a,
            t: Ed(n, r, a),
            n: Fd(n, r),
            provide: Pd({
                current: n,
                fallback: r,
                messages: a
            })
        }
    }
}
const Vd = Symbol.for("vuetify:locale");

function Md() {
    const e = Vr(Vd);
    if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
    return e
}

function Rd() {
    const e = Vr(Vd);
    if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
    return {
        isRtl: e.isRtl,
        rtlClasses: e.rtlClasses
    }
}
const Id = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AG: 0,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AS: 0,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BD: 0,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BR: 0,
    BS: 0,
    BT: 0,
    BW: 0,
    BY: 1,
    BZ: 0,
    CA: 0,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CO: 0,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DM: 0,
    DO: 0,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    ET: 0,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    "GB-alt-variant": 0,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    GT: 0,
    GU: 0,
    HK: 0,
    HN: 0,
    HR: 1,
    HU: 1,
    ID: 0,
    IE: 1,
    IL: 0,
    IN: 0,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JM: 0,
    JO: 6,
    JP: 0,
    KE: 0,
    KG: 1,
    KH: 0,
    KR: 0,
    KW: 6,
    KZ: 1,
    LA: 0,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MH: 0,
    MK: 1,
    MM: 0,
    MN: 1,
    MO: 0,
    MQ: 1,
    MT: 0,
    MV: 5,
    MX: 0,
    MY: 1,
    MZ: 0,
    NI: 0,
    NL: 1,
    NO: 1,
    NP: 0,
    NZ: 1,
    OM: 6,
    PA: 0,
    PE: 0,
    PH: 0,
    PK: 0,
    PL: 1,
    PR: 0,
    PT: 0,
    PY: 0,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SA: 0,
    SD: 6,
    SE: 1,
    SG: 0,
    SI: 1,
    SK: 1,
    SM: 1,
    SV: 0,
    SY: 6,
    TH: 0,
    TJ: 1,
    TM: 1,
    TR: 1,
    TT: 0,
    TW: 0,
    UA: 1,
    UM: 0,
    US: 0,
    UY: 1,
    UZ: 1,
    VA: 1,
    VE: 0,
    VI: 0,
    VN: 1,
    WS: 0,
    XK: 1,
    YE: 0,
    ZA: 0,
    ZW: 0
};

function Od(e) {
    return new Date(e.getFullYear(), e.getMonth(), 1)
}

function Hd(e) {
    return new Date(e.getFullYear(), e.getMonth() + 1, 0)
}
const Bd = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;

function Dd(e) {
    if (null == e) return new Date;
    if (e instanceof Date) return e;
    if ("string" == typeof e) {
        let t;
        if (Bd.test(e)) return function (e) {
            const t = e.split("-").map(Number);
            return new Date(t[0], t[1] - 1, t[2])
        }(e);
        if (t = Date.parse(e), !isNaN(t)) return new Date(t)
    }
    return null
}
const Nd = new Date(2e3, 0, 2);

function zd(e, t) {
    return e.getTime() > t.getTime()
}

function jd(e, t) {
    return e.getTime() === t.getTime()
}

function Ud(e) {
    return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
}
class Wd {
    constructor(e) {
        this.locale = e.locale, this.formats = e.formats
    }
    date(e) {
        return Dd(e)
    }
    toJsDate(e) {
        return e
    }
    toISO(e) {
        return function (e, t) {
            const n = e.toJsDate(t);
            return `${n.getFullYear()}-${ec(String(n.getMonth() + 1), 2, "0")}-${ec(String(n.getDate()), 2, "0")}`
        }(this, e)
    }
    parseISO(e) {
        return function (e) {
            const [t, n, r] = e.split("-").map(Number);
            return new Date(t, n - 1, r)
        }(e)
    }
    addMinutes(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setMinutes(n.getMinutes() + t), n
        }(e, t)
    }
    addHours(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setHours(n.getHours() + t), n
        }(e, t)
    }
    addDays(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setDate(n.getDate() + t), n
        }(e, t)
    }
    addWeeks(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setDate(n.getDate() + 7 * t), n
        }(e, t)
    }
    addMonths(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setDate(1), n.setMonth(n.getMonth() + t), n
        }(e, t)
    }
    getWeekArray(e, t) {
        return function (e, t, n) {
            const r = [];
            let a = [];
            const o = Od(e),
                l = Hd(e),
                i = n ?? Id[t.slice(-2).toUpperCase()] ?? 0,
                s = (o.getDay() - i + 7) % 7,
                u = (l.getDay() - i + 7) % 7;
            for (let c = 0; c < s; c++) {
                const e = new Date(o);
                e.setDate(e.getDate() - (s - c)), a.push(e)
            }
            for (let c = 1; c <= l.getDate(); c++) {
                const t = new Date(e.getFullYear(), e.getMonth(), c);
                a.push(t), 7 === a.length && (r.push(a), a = [])
            }
            for (let c = 1; c < 7 - u; c++) {
                const e = new Date(l);
                e.setDate(e.getDate() + c), a.push(e)
            }
            return a.length > 0 && r.push(a), r
        }(e, this.locale, t ? Number(t) : void 0)
    }
    startOfWeek(e, t) {
        return function (e, t, n) {
            const r = n ?? Id[t.slice(-2).toUpperCase()] ?? 0,
                a = new Date(e);
            for (; a.getDay() !== r;) a.setDate(a.getDate() - 1);
            return a
        }(e, this.locale, t ? Number(t) : void 0)
    }
    endOfWeek(e) {
        return function (e, t) {
            const n = new Date(e),
                r = ((Id[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
            for (; n.getDay() !== r;) n.setDate(n.getDate() + 1);
            return n
        }(e, this.locale)
    }
    startOfMonth(e) {
        return Od(e)
    }
    endOfMonth(e) {
        return Hd(e)
    }
    format(e, t) {
        return function (e, t, n, r) {
            const a = Dd(e) ?? new Date,
                o = null == r ? void 0 : r[t];
            if ("function" == typeof o) return o(a, t, n);
            let l = {};
            switch (t) {
                case "fullDate":
                    l = {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    };
                    break;
                case "fullDateWithWeekday":
                    l = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    };
                    break;
                case "normalDate":
                    return `${a.getDate()} ${new Intl.DateTimeFormat(n, { month: "long" }).format(a)}`;
                case "normalDateWithWeekday":
                    l = {
                        weekday: "short",
                        day: "numeric",
                        month: "short"
                    };
                    break;
                case "shortDate":
                    l = {
                        month: "short",
                        day: "numeric"
                    };
                    break;
                case "year":
                    l = {
                        year: "numeric"
                    };
                    break;
                case "month":
                    l = {
                        month: "long"
                    };
                    break;
                case "monthShort":
                    l = {
                        month: "short"
                    };
                    break;
                case "monthAndYear":
                    l = {
                        month: "long",
                        year: "numeric"
                    };
                    break;
                case "monthAndDate":
                    l = {
                        month: "long",
                        day: "numeric"
                    };
                    break;
                case "weekday":
                    l = {
                        weekday: "long"
                    };
                    break;
                case "weekdayShort":
                    l = {
                        weekday: "short"
                    };
                    break;
                case "dayOfMonth":
                    return new Intl.NumberFormat(n).format(a.getDate());
                case "hours12h":
                    l = {
                        hour: "numeric",
                        hour12: !0
                    };
                    break;
                case "hours24h":
                    l = {
                        hour: "numeric",
                        hour12: !1
                    };
                    break;
                case "minutes":
                    l = {
                        minute: "numeric"
                    };
                    break;
                case "seconds":
                    l = {
                        second: "numeric"
                    };
                    break;
                case "fullTime":
                case "fullTime12h":
                    l = {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !0
                    };
                    break;
                case "fullTime24h":
                    l = {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !1
                    };
                    break;
                case "fullDateTime":
                case "fullDateTime12h":
                    l = {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !0
                    };
                    break;
                case "fullDateTime24h":
                    l = {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !1
                    };
                    break;
                case "keyboardDate":
                    l = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    };
                    break;
                case "keyboardDateTime":
                case "keyboardDateTime24h":
                    l = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !1
                    };
                    break;
                case "keyboardDateTime12h":
                    l = {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !0
                    };
                    break;
                default:
                    l = o ?? {
                        timeZone: "UTC",
                        timeZoneName: "short"
                    }
            }
            return new Intl.DateTimeFormat(n, l).format(a)
        }(e, t, this.locale, this.formats)
    }
    isEqual(e, t) {
        return jd(e, t)
    }
    isValid(e) {
        return function (e) {
            const t = new Date(e);
            return t instanceof Date && !isNaN(t.getTime())
        }(e)
    }
    isWithinRange(e, t) {
        return function (e, t) {
            return zd(e, t[0]) && function (e, t) {
                return e.getTime() < t.getTime()
            }(e, t[1])
        }(e, t)
    }
    isAfter(e, t) {
        return zd(e, t)
    }
    isAfterDay(e, t) {
        return function (e, t) {
            return zd(Ud(e), Ud(t))
        }(e, t)
    }
    isBefore(e, t) {
        return !zd(e, t) && !jd(e, t)
    }
    isSameDay(e, t) {
        return function (e, t) {
            return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
        }(e, t)
    }
    isSameMonth(e, t) {
        return function (e, t) {
            return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
        }(e, t)
    }
    isSameYear(e, t) {
        return function (e, t) {
            return e.getFullYear() === t.getFullYear()
        }(e, t)
    }
    setMinutes(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setMinutes(t), n
        }(e, t)
    }
    setHours(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setHours(t), n
        }(e, t)
    }
    setMonth(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setMonth(t), n
        }(e, t)
    }
    setDate(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setDate(t), n
        }(e, t)
    }
    setYear(e, t) {
        return function (e, t) {
            const n = new Date(e);
            return n.setFullYear(t), n
        }(e, t)
    }
    getDiff(e, t, n) {
        return function (e, t, n) {
            const r = new Date(e),
                a = new Date(t);
            switch (n) {
                case "years":
                    return r.getFullYear() - a.getFullYear();
                case "quarters":
                    return Math.floor((r.getMonth() - a.getMonth() + 12 * (r.getFullYear() - a.getFullYear())) / 4);
                case "months":
                    return r.getMonth() - a.getMonth() + 12 * (r.getFullYear() - a.getFullYear());
                case "weeks":
                    return Math.floor((r.getTime() - a.getTime()) / 6048e5);
                case "days":
                    return Math.floor((r.getTime() - a.getTime()) / 864e5);
                case "hours":
                    return Math.floor((r.getTime() - a.getTime()) / 36e5);
                case "minutes":
                    return Math.floor((r.getTime() - a.getTime()) / 6e4);
                case "seconds":
                    return Math.floor((r.getTime() - a.getTime()) / 1e3);
                default:
                    return r.getTime() - a.getTime()
            }
        }(e, t, n)
    }
    getWeekdays(e) {
        return function (e, t) {
            const n = t ?? Id[e.slice(-2).toUpperCase()] ?? 0;
            return Iu(7).map((t => {
                const r = new Date(Nd);
                return r.setDate(Nd.getDate() + n + t), new Intl.DateTimeFormat(e, {
                    weekday: "narrow"
                }).format(r)
            }))
        }(this.locale, e ? Number(e) : void 0)
    }
    getYear(e) {
        return function (e) {
            return e.getFullYear()
        }(e)
    }
    getMonth(e) {
        return function (e) {
            return e.getMonth()
        }(e)
    }
    getDate(e) {
        return function (e) {
            return e.getDate()
        }(e)
    }
    getNextMonth(e) {
        return function (e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 1)
        }(e)
    }
    getPreviousMonth(e) {
        return function (e) {
            return new Date(e.getFullYear(), e.getMonth() - 1, 1)
        }(e)
    }
    getHours(e) {
        return function (e) {
            return e.getHours()
        }(e)
    }
    getMinutes(e) {
        return function (e) {
            return e.getMinutes()
        }(e)
    }
    startOfDay(e) {
        return Ud(e)
    }
    endOfDay(e) {
        return function (e) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999)
        }(e)
    }
    startOfYear(e) {
        return function (e) {
            return new Date(e.getFullYear(), 0, 1)
        }(e)
    }
    endOfYear(e) {
        return function (e) {
            return new Date(e.getFullYear(), 11, 31)
        }(e)
    }
}
const Gd = Symbol.for("vuetify:date-options"),
    Zd = Symbol.for("vuetify:date-adapter");

function qd(e, t) {
    const n = st("function" == typeof e.adapter ? new e.adapter({
        locale: e.locale[t.current.value] ?? t.current.value,
        formats: e.formats
    }) : e.adapter);
    return aa(t.current, (t => {
        n.locale = e.locale[t] ?? t ?? n.locale
    })), n
}
const Yd = Symbol.for("vuetify:display"),
    Kd = {
        mobileBreakpoint: "lg",
        thresholds: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            xxl: 2560
        }
    };

function Xd(e) {
    return Eu && !e ? window.innerWidth : "object" == typeof e && e.clientWidth || 0
}

function Jd(e) {
    return Eu && !e ? window.innerHeight : "object" == typeof e && e.clientHeight || 0
}

function Qd(e) {
    const t = Eu && !e ? window.navigator.userAgent : "ssr";

    function n(e) {
        return Boolean(t.match(e))
    }
    return {
        android: n(/android/i),
        ios: n(/iphone|ipad|ipod/i),
        cordova: n(/cordova/i),
        electron: n(/electron/i),
        chrome: n(/chrome/i),
        edge: n(/edge/i),
        firefox: n(/firefox/i),
        opera: n(/opera/i),
        win: n(/win/i),
        mac: n(/mac/i),
        linux: n(/linux/i),
        touch: $u,
        ssr: "ssr" === t
    }
}

function ep() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    const n = Vr(Yd);
    if (!n) throw new Error("Could not find Vuetify display injection");
    const r = ao((() => {
        if (null != e.mobile) return e.mobile;
        if (!e.mobileBreakpoint) return n.mobile.value;
        const t = "number" == typeof e.mobileBreakpoint ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
        return n.width.value < t
    })),
        a = ao((() => t ? {
            [`${t}--mobile`]: r.value
        } : {}));
    return {
        ...n,
        displayClasses: a,
        mobile: r
    }
}
const tp = Symbol.for("vuetify:goto"),
    np = {
        collapse: "mdi-chevron-up",
        complete: "mdi-check",
        cancel: "mdi-close-circle",
        close: "mdi-close",
        delete: "mdi-close-circle",
        clear: "mdi-close-circle",
        success: "mdi-check-circle",
        info: "mdi-information",
        warning: "mdi-alert-circle",
        error: "mdi-close-circle",
        prev: "mdi-chevron-left",
        next: "mdi-chevron-right",
        checkboxOn: "mdi-checkbox-marked",
        checkboxOff: "mdi-checkbox-blank-outline",
        checkboxIndeterminate: "mdi-minus-box",
        delimiter: "mdi-circle",
        sortAsc: "mdi-arrow-up",
        sortDesc: "mdi-arrow-down",
        expand: "mdi-chevron-down",
        menu: "mdi-menu",
        subgroup: "mdi-menu-down",
        dropdown: "mdi-menu-down",
        radioOn: "mdi-radiobox-marked",
        radioOff: "mdi-radiobox-blank",
        edit: "mdi-pencil",
        ratingEmpty: "mdi-star-outline",
        ratingFull: "mdi-star",
        ratingHalf: "mdi-star-half-full",
        loading: "mdi-cached",
        first: "mdi-page-first",
        last: "mdi-page-last",
        unfold: "mdi-unfold-more-horizontal",
        file: "mdi-paperclip",
        plus: "mdi-plus",
        minus: "mdi-minus",
        calendar: "mdi-calendar",
        treeviewCollapse: "mdi-menu-down",
        treeviewExpand: "mdi-menu-right",
        eyeDropper: "mdi-eyedropper",
        upload: "mdi-cloud-upload"
    },
    rp = {
        component: e => oo(up, {
            ...e,
            class: "mdi"
        })
    },
    ap = [String, Function, Object, Array],
    op = Symbol.for("vuetify:icons"),
    lp = ld({
        icon: {
            type: ap
        },
        tag: {
            type: String,
            required: !0
        }
    }, "icon"),
    ip = md()({
        name: "VComponentIcon",
        props: lp(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return () => {
                const t = e.icon;
                return Ma(e.tag, null, {
                    default() {
                        var r;
                        return [e.icon ? Ma(t, null, null) : null == (r = n.default) ? void 0 : r.call(n)]
                    }
                })
            }
        }
    }),
    sp = hd({
        name: "VSvgIcon",
        inheritAttrs: !1,
        props: lp(),
        setup(e, t) {
            let {
                attrs: n
            } = t;
            return () => Ma(e.tag, Na(n, {
                style: null
            }), {
                default: () => [Ma("svg", {
                    class: "v-icon__svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": "true"
                }, [Array.isArray(e.icon) ? e.icon.map((e => Array.isArray(e) ? Ma("path", {
                    d: e[0],
                    "fill-opacity": e[1]
                }, null) : Ma("path", {
                    d: e
                }, null))) : Ma("path", {
                    d: e.icon
                }, null)])]
            })
        }
    });
hd({
    name: "VLigatureIcon",
    props: lp(),
    setup(e) {
        return () => Ma(e.tag, null, {
            default: () => [e.icon]
        })
    }
});
const up = hd({
    name: "VClassIcon",
    props: lp(),
    setup(e) {
        return () => Ma(e.tag, {
            class: e.icon
        }, null)
    }
});
const cp = Symbol.for("vuetify:theme"),
    dp = ld({
        theme: String
    }, "theme");

function pp(e) {
    sd("provideTheme");
    const t = Vr(cp, null);
    if (!t) throw new Error("Could not find Vuetify theme injection");
    const n = ao((() => e.theme ?? t.name.value)),
        r = ao((() => t.themes.value[n.value])),
        a = ao((() => t.isDisabled ? void 0 : `v-theme--${n.value}`)),
        o = {
            ...t,
            name: n,
            current: r,
            themeClasses: a
        };
    return Pr(cp, o), o
}

function fp() {
    sd("useTheme");
    const e = Vr(cp, null);
    if (!e) throw new Error("Could not find Vuetify theme injection");
    return e
}

function vp(e, t, n) {
    e.push(`${t} {\n`, ...n.map((e => `  ${e};\n`)), "}\n")
}

function gp(e) {
    const t = e.dark ? 2 : 1,
        n = e.dark ? 1 : 2,
        r = [];
    for (const [o, l] of Object.entries(e.colors)) {
        const e = Xc(l);
        r.push(`--v-theme-${o}: ${e.r},${e.g},${e.b}`), o.startsWith("on-") || r.push(`--v-theme-${o}-overlay-multiplier: ${a = l, Zc(Xc(a))[1] > .18 ? t : n}`)
    }
    var a;
    for (const [o, l] of Object.entries(e.variables)) {
        const e = "string" == typeof l && l.startsWith("#") ? Xc(l) : void 0,
            t = e ? `${e.r}, ${e.g}, ${e.b}` : void 0;
        r.push(`--v-${o}: ${t ?? l}`)
    }
    return r
}

function hp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "content";
    const n = vc(),
        r = kt();
    if (Eu) {
        const e = new ResizeObserver((e => {
            e.length && (r.value = "content" === t ? e[0].contentRect : e[0].target.getBoundingClientRect())
        }));
        Jn((() => {
            e.disconnect()
        })), aa((() => n.el), ((t, n) => {
            n && (e.unobserve(n), r.value = void 0), t && e.observe(t)
        }), {
            flush: "post"
        })
    }
    return {
        resizeRef: n,
        contentRect: ct(r)
    }
}
const mp = Symbol.for("vuetify:layout"),
    yp = Symbol.for("vuetify:layout-item"),
    bp = ld({
        overlaps: {
            type: Array,
            default: () => []
        },
        fullHeight: Boolean
    }, "layout"),
    kp = ld({
        name: {
            type: String
        },
        order: {
            type: [Number, String],
            default: 0
        },
        absolute: Boolean
    }, "layout-item");

function wp() {
    const e = Vr(mp);
    if (!e) throw new Error("[Vuetify] Could not find injected layout");
    return {
        getLayoutItem: e.getLayoutItem,
        mainRect: e.mainRect,
        mainStyles: e.mainStyles
    }
}

function xp() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        blueprint: t,
        ...n
    } = e, r = tc(t, n), {
        aliases: a = {},
        components: o = {},
        directives: l = {}
    } = r, i = function (e) {
        return kt(e)
    }(r.defaults), s = function (e, t) {
        const {
            thresholds: n,
            mobileBreakpoint: r
        } = function () {
            return tc(Kd, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kd)
        }(e), a = wt(Jd(t)), o = wt(Qd(t)), l = st({}), i = wt(Xd(t));

        function s() {
            a.value = Jd(), i.value = Xd()
        }
        return ra((() => {
            const e = i.value < n.sm,
                t = i.value < n.md && !e,
                s = i.value < n.lg && !(t || e),
                u = i.value < n.xl && !(s || t || e),
                c = i.value < n.xxl && !(u || s || t || e),
                d = i.value >= n.xxl,
                p = e ? "xs" : t ? "sm" : s ? "md" : u ? "lg" : c ? "xl" : "xxl",
                f = "number" == typeof r ? r : n[r],
                v = i.value < f;
            l.xs = e, l.sm = t, l.md = s, l.lg = u, l.xl = c, l.xxl = d, l.smAndUp = !e, l.mdAndUp = !(e || t), l.lgAndUp = !(e || t || s), l.xlAndUp = !(e || t || s || u), l.smAndDown = !(s || u || c || d), l.mdAndDown = !(u || c || d), l.lgAndDown = !(c || d), l.xlAndDown = !d, l.name = p, l.height = a.value, l.width = i.value, l.mobile = v, l.mobileBreakpoint = r, l.platform = o.value, l.thresholds = n
        })), Eu && window.addEventListener("resize", s, {
            passive: !0
        }), {
            ...Lt(l),
            update() {
                s(), o.value = Qd()
            },
            ssr: !!t
        }
    }(r.display, r.ssr), u = function (e) {
        const t = function () {
            var e, t;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                defaultTheme: "light",
                variations: {
                    colors: [],
                    lighten: 0,
                    darken: 0
                },
                themes: {
                    light: {
                        dark: !1,
                        colors: {
                            background: "#FFFFFF",
                            surface: "#FFFFFF",
                            "surface-bright": "#FFFFFF",
                            "surface-light": "#EEEEEE",
                            "surface-variant": "#424242",
                            "on-surface-variant": "#EEEEEE",
                            primary: "#1867C0",
                            "primary-darken-1": "#1F5592",
                            secondary: "#48A9A6",
                            "secondary-darken-1": "#018786",
                            error: "#B00020",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00"
                        },
                        variables: {
                            "border-color": "#000000",
                            "border-opacity": .12,
                            "high-emphasis-opacity": .87,
                            "medium-emphasis-opacity": .6,
                            "disabled-opacity": .38,
                            "idle-opacity": .04,
                            "hover-opacity": .04,
                            "focus-opacity": .12,
                            "selected-opacity": .08,
                            "activated-opacity": .12,
                            "pressed-opacity": .12,
                            "dragged-opacity": .08,
                            "theme-kbd": "#212529",
                            "theme-on-kbd": "#FFFFFF",
                            "theme-code": "#F5F5F5",
                            "theme-on-code": "#000000"
                        }
                    },
                    dark: {
                        dark: !0,
                        colors: {
                            background: "#121212",
                            surface: "#212121",
                            "surface-bright": "#ccbfd6",
                            "surface-light": "#424242",
                            "surface-variant": "#a3a3a3",
                            "on-surface-variant": "#424242",
                            primary: "#2196F3",
                            "primary-darken-1": "#277CC1",
                            secondary: "#54B6B2",
                            "secondary-darken-1": "#48A9A6",
                            error: "#CF6679",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00"
                        },
                        variables: {
                            "border-color": "#FFFFFF",
                            "border-opacity": .12,
                            "high-emphasis-opacity": 1,
                            "medium-emphasis-opacity": .7,
                            "disabled-opacity": .5,
                            "idle-opacity": .1,
                            "hover-opacity": .04,
                            "focus-opacity": .12,
                            "selected-opacity": .08,
                            "activated-opacity": .12,
                            "pressed-opacity": .16,
                            "dragged-opacity": .08,
                            "theme-kbd": "#212529",
                            "theme-on-kbd": "#FFFFFF",
                            "theme-code": "#343434",
                            "theme-on-code": "#CCCCCC"
                        }
                    }
                }
            };
            const r = {
                defaultTheme: "light",
                variations: {
                    colors: [],
                    lighten: 0,
                    darken: 0
                },
                themes: {
                    light: {
                        dark: !1,
                        colors: {
                            background: "#FFFFFF",
                            surface: "#FFFFFF",
                            "surface-bright": "#FFFFFF",
                            "surface-light": "#EEEEEE",
                            "surface-variant": "#424242",
                            "on-surface-variant": "#EEEEEE",
                            primary: "#1867C0",
                            "primary-darken-1": "#1F5592",
                            secondary: "#48A9A6",
                            "secondary-darken-1": "#018786",
                            error: "#B00020",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00"
                        },
                        variables: {
                            "border-color": "#000000",
                            "border-opacity": .12,
                            "high-emphasis-opacity": .87,
                            "medium-emphasis-opacity": .6,
                            "disabled-opacity": .38,
                            "idle-opacity": .04,
                            "hover-opacity": .04,
                            "focus-opacity": .12,
                            "selected-opacity": .08,
                            "activated-opacity": .12,
                            "pressed-opacity": .12,
                            "dragged-opacity": .08,
                            "theme-kbd": "#212529",
                            "theme-on-kbd": "#FFFFFF",
                            "theme-code": "#F5F5F5",
                            "theme-on-code": "#000000"
                        }
                    },
                    dark: {
                        dark: !0,
                        colors: {
                            background: "#121212",
                            surface: "#212121",
                            "surface-bright": "#ccbfd6",
                            "surface-light": "#424242",
                            "surface-variant": "#a3a3a3",
                            "on-surface-variant": "#424242",
                            primary: "#2196F3",
                            "primary-darken-1": "#277CC1",
                            secondary: "#54B6B2",
                            "secondary-darken-1": "#48A9A6",
                            error: "#CF6679",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00"
                        },
                        variables: {
                            "border-color": "#FFFFFF",
                            "border-opacity": .12,
                            "high-emphasis-opacity": 1,
                            "medium-emphasis-opacity": .7,
                            "disabled-opacity": .5,
                            "idle-opacity": .1,
                            "hover-opacity": .04,
                            "focus-opacity": .12,
                            "selected-opacity": .08,
                            "activated-opacity": .12,
                            "pressed-opacity": .16,
                            "dragged-opacity": .08,
                            "theme-kbd": "#212529",
                            "theme-on-kbd": "#FFFFFF",
                            "theme-code": "#343434",
                            "theme-on-code": "#CCCCCC"
                        }
                    }
                }
            };
            if (!n) return {
                ...r,
                isDisabled: !0
            };
            const a = {};
            for (const [o, l] of Object.entries(n.themes ?? {})) {
                const n = l.dark || "dark" === o ? null == (e = r.themes) ? void 0 : e.dark : null == (t = r.themes) ? void 0 : t.light;
                a[o] = tc(n, l)
            }
            return tc(r, {
                ...n,
                themes: a
            })
        }(e),
            n = kt(t.defaultTheme),
            r = kt(t.themes),
            a = ao((() => {
                const e = {};
                for (const [n, a] of Object.entries(r.value)) {
                    const r = e[n] = {
                        ...a,
                        colors: {
                            ...a.colors
                        }
                    };
                    if (t.variations)
                        for (const e of t.variations.colors) {
                            const n = r.colors[e];
                            if (n)
                                for (const a of ["lighten", "darken"]) {
                                    const o = "lighten" === a ? rd : ad;
                                    for (const l of Iu(t.variations[a], 1)) r.colors[`${e}-${a}-${l}`] = nd(o(Xc(n), l))
                                }
                        }
                    for (const e of Object.keys(r.colors)) {
                        if (/^on-[a-z]/.test(e) || r.colors[`on-${e}`]) continue;
                        const t = `on-${e}`,
                            n = Xc(r.colors[e]);
                        r.colors[t] = od(n)
                    }
                }
                return e
            })),
            o = ao((() => a.value[n.value])),
            l = ao((() => {
                var e;
                const t = [];
                (null == (e = o.value) ? void 0 : e.dark) && vp(t, ":root", ["color-scheme: dark"]), vp(t, ":root", gp(o.value));
                for (const [o, i] of Object.entries(a.value)) vp(t, `.v-theme--${o}`, ["color-scheme: " + (i.dark ? "dark" : "normal"), ...gp(i)]);
                const n = [],
                    r = [],
                    l = new Set(Object.values(a.value).flatMap((e => Object.keys(e.colors))));
                for (const a of l) /^on-[a-z]/.test(a) ? vp(r, `.${a}`, [`color: rgb(var(--v-theme-${a})) !important`]) : (vp(n, `.bg-${a}`, [`--v-theme-overlay-multiplier: var(--v-theme-${a}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${a})) !important`, `color: rgb(var(--v-theme-on-${a})) !important`]), vp(r, `.text-${a}`, [`color: rgb(var(--v-theme-${a})) !important`]), vp(r, `.border-${a}`, [`--v-border-color: var(--v-theme-${a})`]));
                return t.push(...n, ...r), t.map(((e, t) => 0 === t ? e : `    ${e}`)).join("")
            }));

        function i() {
            return {
                style: [{
                    children: l.value,
                    id: "vuetify-theme-stylesheet",
                    nonce: t.cspNonce || !1
                }]
            }
        }
        const s = ao((() => t.isDisabled ? void 0 : `v-theme--${n.value}`));
        return {
            install(e) {
                if (t.isDisabled) return;
                const n = e._context.provides.usehead;
                if (n)
                    if (n.push) {
                        const e = n.push(i);
                        Eu && aa(l, (() => {
                            e.patch(i)
                        }))
                    } else Eu ? (n.addHeadObjs(ao(i)), ra((() => n.updateDOM()))) : n.addHeadObjs(i());
                else {
                    let e = function () {
                        if ("undefined" != typeof document && !n) {
                            const e = document.createElement("style");
                            e.type = "text/css", e.id = "vuetify-theme-stylesheet", t.cspNonce && e.setAttribute("nonce", t.cspNonce), n = e, document.head.appendChild(n)
                        }
                        n && (n.innerHTML = l.value)
                    },
                        n = Eu ? document.getElementById("vuetify-theme-stylesheet") : null;
                    Eu ? aa(l, e, {
                        immediate: !0
                    }) : e()
                }
            },
            isDisabled: t.isDisabled,
            name: n,
            themes: r,
            current: o,
            computedThemes: a,
            themeClasses: s,
            styles: l,
            global: {
                name: n,
                current: o
            }
        }
    }(r.theme), c = function (e) {
        const t = {
            svg: {
                component: sp
            },
            class: {
                component: up
            }
        },
            n = (null == e ? void 0 : e.defaultSet) ?? "mdi";
        return "mdi" !== n || t.mdi || (t.mdi = rp), tc({
            defaultSet: n,
            sets: t,
            aliases: {
                ...np,
                vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", .6]],
                "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
                "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", .6]]
            }
        }, e)
    }(r.icons), d = function (e) {
        const t = (null == e ? void 0 : e.adapter) && null != (null == e ? void 0 : e.adapter).name ? null == e ? void 0 : e.adapter : function (e) {
            const t = wt((null == e ? void 0 : e.locale) ?? "en"),
                n = wt((null == e ? void 0 : e.fallback) ?? "en"),
                r = kt({
                    en: Ad,
                    ...null == e ? void 0 : e.messages
                });
            return {
                name: "vuetify",
                current: t,
                fallback: n,
                messages: r,
                t: Ed(t, n, r),
                n: Fd(t, n),
                provide: Pd({
                    current: t,
                    fallback: n,
                    messages: r
                })
            }
        }(e),
            n = function (e, t) {
                const n = kt((null == t ? void 0 : t.rtl) ?? {
                    af: !1,
                    ar: !0,
                    bg: !1,
                    ca: !1,
                    ckb: !1,
                    cs: !1,
                    de: !1,
                    el: !1,
                    en: !1,
                    es: !1,
                    et: !1,
                    fa: !0,
                    fi: !1,
                    fr: !1,
                    hr: !1,
                    hu: !1,
                    he: !0,
                    id: !1,
                    it: !1,
                    ja: !1,
                    km: !1,
                    ko: !1,
                    lv: !1,
                    lt: !1,
                    nl: !1,
                    no: !1,
                    pl: !1,
                    pt: !1,
                    ro: !1,
                    ru: !1,
                    sk: !1,
                    sl: !1,
                    srCyrl: !1,
                    srLatn: !1,
                    sv: !1,
                    th: !1,
                    tr: !1,
                    az: !1,
                    uk: !1,
                    vi: !1,
                    zhHans: !1,
                    zhHant: !1
                }),
                    r = ao((() => n.value[e.current.value] ?? !1));
                return {
                    isRtl: r,
                    rtl: n,
                    rtlClasses: ao((() => "v-locale--is-" + (r.value ? "rtl" : "ltr")))
                }
            }(t, e);
        return {
            ...t,
            ...n
        }
    }(r.locale), p = function (e, t) {
        const n = tc({
            adapter: Wd,
            locale: {
                af: "af-ZA",
                bg: "bg-BG",
                ca: "ca-ES",
                ckb: "",
                cs: "cs-CZ",
                de: "de-DE",
                el: "el-GR",
                en: "en-US",
                et: "et-EE",
                fa: "fa-IR",
                fi: "fi-FI",
                hr: "hr-HR",
                hu: "hu-HU",
                he: "he-IL",
                id: "id-ID",
                it: "it-IT",
                ja: "ja-JP",
                ko: "ko-KR",
                lv: "lv-LV",
                lt: "lt-LT",
                nl: "nl-NL",
                no: "no-NO",
                pl: "pl-PL",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                sk: "sk-SK",
                sl: "sl-SI",
                srCyrl: "sr-SP",
                srLatn: "sr-SP",
                sv: "sv-SE",
                th: "th-TH",
                tr: "tr-TR",
                az: "az-AZ",
                uk: "uk-UA",
                vi: "vi-VN",
                zhHans: "zh-CN",
                zhHant: "zh-TW"
            }
        }, e);
        return {
            options: n,
            instance: qd(n, t)
        }
    }(r.date, d), f = function (e, t) {
        return {
            rtl: t.isRtl,
            options: tc({
                container: void 0,
                duration: 300,
                layout: !1,
                offset: 0,
                easing: "easeInOutCubic",
                patterns: {
                    linear: e => e,
                    easeInQuad: e => e ** 2,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e ** 2 : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e ** 3,
                    easeOutCubic: e => --e ** 3 + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e ** 4,
                    easeOutQuart: e => 1 - --e ** 4,
                    easeInOutQuart: e => e < .5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
                    easeInQuint: e => e ** 5,
                    easeOutQuint: e => 1 + --e ** 5,
                    easeInOutQuint: e => e < .5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
                }
            }, e)
        }
    }(r.goTo, d);
    return {
        install(e) {
            for (const t in l) e.directive(t, l[t]);
            for (const t in o) e.component(t, o[t]);
            for (const t in a) e.component(t, hd({
                ...a[t],
                name: t,
                aliasName: a[t].name
            }));
            if (u.install(e), e.provide(fd, i), e.provide(Yd, s), e.provide(cp, u), e.provide(op, c), e.provide(Vd, d), e.provide(Gd, p.options), e.provide(Zd, p.instance), e.provide(tp, f), Eu && r.ssr)
                if (e.$nuxt) e.$nuxt.hook("app:suspense:resolve", (() => {
                    s.update()
                }));
                else {
                    const {
                        mount: t
                    } = e;
                    e.mount = function () {
                        const n = t(...arguments);
                        return Zt((() => s.update())), e.mount = t, n
                    }
                } pd.reset(), e.mixin({
                    computed: {
                        $vuetify() {
                            return st({
                                defaults: Cp.call(this, fd),
                                display: Cp.call(this, Yd),
                                theme: Cp.call(this, cp),
                                icons: Cp.call(this, op),
                                locale: Cp.call(this, Vd),
                                date: Cp.call(this, Zd)
                            })
                        }
                    }
                })
        },
        defaults: i,
        display: s,
        theme: u,
        icons: c,
        locale: d,
        date: p,
        goTo: f
    }
}

function Cp(e) {
    var t, n;
    const r = this.$,
        a = (null == (t = r.parent) ? void 0 : t.provides) ?? (null == (n = r.vnode.appContext) ? void 0 : n.provides);
    if (a && e in a) return a[e]
}
xp.version = "3.7.6";
const Sp = "undefined" != typeof window,
    _p = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    Ap = e => "number" == typeof e && isFinite(e),
    Lp = e => "[object RegExp]" === jp(e),
    Tp = e => Up(e) && 0 === Object.keys(e).length,
    Ep = Object.assign,
    Fp = Object.create,
    $p = (e = null) => Fp(e);
let Pp;
const Vp = () => Pp || (Pp = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : $p());

function Mp(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Rp = {}.hasOwnProperty;

function Ip(e, t) {
    return Rp.call(e, t)
}
const Op = Array.isArray,
    Hp = e => "function" == typeof e,
    Bp = e => "string" == typeof e,
    Dp = e => "boolean" == typeof e,
    Np = e => null !== e && "object" == typeof e,
    zp = {}.toString,
    jp = e => zp.call(e),
    Up = e => "[object Object]" === jp(e);

function Wp(e, t = "") {
    return e.reduce(((e, n, r) => 0 === r ? e + n : e + t + n), "")
}

function Gp(e, t) {
    "undefined" != typeof console && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Zp = e => !Np(e) || Op(e);

function qp(e, t) {
    if (Zp(e) || Zp(t)) throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length;) {
        const {
            src: e,
            des: t
        } = n.pop();
        Object.keys(e).forEach((r => {
            "__proto__" !== r && (Np(e[r]) && !Np(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : $p()), Zp(t[r]) || Zp(e[r]) ? t[r] = e[r] : n.push({
                src: e[r],
                des: t[r]
            }))
        }))
    }
}

function Yp(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Kp = 14;

function Xp(e, t, n = {}) {
    const {
        domain: r,
        messages: a,
        args: o
    } = n, l = new SyntaxError(String(e));
    return l.code = e, t && (l.location = t), l.domain = r, l
}

function Jp(e) {
    throw e
}
const Qp = " ",
    ef = "\n",
    tf = String.fromCharCode(8232),
    nf = String.fromCharCode(8233);

function rf(e) {
    const t = e;
    let n = 0,
        r = 1,
        a = 1,
        o = 0;
    const l = e => "\r" === t[e] && t[e + 1] === ef,
        i = e => t[e] === nf,
        s = e => t[e] === tf,
        u = e => l(e) || i(e) || s(e) ? ef : t[e];

    function c() {
        return o = 0, (l(e = n) || (e => t[e] === ef)(e) || i(e) || s(e)) && (r++, a = 0), l(n) && n++, n++, a++, t[n];
        var e
    }
    return {
        index: () => n,
        line: () => r,
        column: () => a,
        peekOffset: () => o,
        charAt: u,
        currentChar: () => u(n),
        currentPeek: () => u(n + o),
        next: c,
        peek: () => (l(n + o) && o++, o++, t[n + o]),
        reset() {
            n = 0, r = 1, a = 1, o = 0
        },
        resetPeek(e = 0) {
            o = e
        },
        skipToPeek() {
            const e = n + o;
            for (; e !== n;) c();
            o = 0
        }
    }
}
const af = void 0;

function of(e, t = {}) {
    const n = !1 !== t.location,
        r = rf(e),
        a = () => r.index(),
        o = () => ({
            line: r.line(),
            column: r.column(),
            offset: r.index()
        }),
        l = o(),
        i = a(),
        s = {
            currentType: 13,
            offset: i,
            startLoc: l,
            endLoc: l,
            lastType: 13,
            lastOffset: i,
            lastStartLoc: l,
            lastEndLoc: l,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        u = () => s,
        {
            onError: c
        } = t;

    function d(e, t, r, ...a) {
        const o = u();
        if (t.column += r, t.offset += r, c) {
            const r = Xp(e, n ? Yp(o.startLoc, t) : null, {
                domain: "tokenizer",
                args: a
            });
            c(r)
        }
    }

    function p(e, t, r) {
        e.endLoc = o(), e.currentType = t;
        const a = {
            type: t
        };
        return n && (a.loc = Yp(e.startLoc, e.endLoc)), null != r && (a.value = r), a
    }
    const f = e => p(e, 13);

    function v(e, t) {
        return e.currentChar() === t ? (e.next(), t) : (d(1, o(), 0, t), "")
    }

    function g(e) {
        let t = "";
        for (; e.currentPeek() === Qp || e.currentPeek() === ef;) t += e.currentPeek(), e.peek();
        return t
    }

    function h(e) {
        const t = g(e);
        return e.skipToPeek(), t
    }

    function m(e) {
        if (e === af) return !1;
        const t = e.charCodeAt(0);
        return t >= 97 && t <= 122 || t >= 65 && t <= 90 || 95 === t
    }

    function y(e) {
        g(e);
        const t = "|" === e.currentPeek();
        return e.resetPeek(), t
    }

    function b(e, t = !0) {
        const n = (t = !1, r = "") => {
            const a = e.currentPeek();
            return "{" === a ? t : "@" !== a && a ? "|" === a ? !(r === Qp || r === ef) : a === Qp ? (e.peek(), n(!0, Qp)) : a !== ef || (e.peek(), n(!0, ef)) : t
        },
            r = n();
        return t && e.resetPeek(), r
    }

    function k(e, t) {
        const n = e.currentChar();
        return n === af ? af : t(n) ? (e.next(), n) : null
    }

    function w(e) {
        const t = e.charCodeAt(0);
        return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || 95 === t || 36 === t
    }

    function x(e) {
        return k(e, w)
    }

    function C(e) {
        const t = e.charCodeAt(0);
        return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || 95 === t || 36 === t || 45 === t
    }

    function S(e) {
        return k(e, C)
    }

    function _(e) {
        const t = e.charCodeAt(0);
        return t >= 48 && t <= 57
    }

    function A(e) {
        return k(e, _)
    }

    function L(e) {
        const t = e.charCodeAt(0);
        return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102
    }

    function T(e) {
        return k(e, L)
    }

    function E(e) {
        let t = "",
            n = "";
        for (; t = A(e);) n += t;
        return n
    }

    function F(e) {
        return "'" !== e && e !== ef
    }

    function $(e) {
        const t = e.currentChar();
        switch (t) {
            case "\\":
            case "'":
                return e.next(), `\\${t}`;
            case "u":
                return P(e, t, 4);
            case "U":
                return P(e, t, 6);
            default:
                return d(4, o(), 0, t), ""
        }
    }

    function P(e, t, n) {
        v(e, t);
        let r = "";
        for (let a = 0; a < n; a++) {
            const n = T(e);
            if (!n) {
                d(5, o(), 0, `\\${t}${r}${e.currentChar()}`);
                break
            }
            r += n
        }
        return `\\${t}${r}`
    }

    function V(e) {
        return "{" !== e && "}" !== e && e !== Qp && e !== ef
    }

    function M(e) {
        h(e);
        const t = v(e, "|");
        return h(e), t
    }

    function R(e, t) {
        let n = null;
        switch (e.currentChar()) {
            case "{":
                return t.braceNest >= 1 && d(9, o(), 0), e.next(), n = p(t, 2, "{"), h(e), t.braceNest++, n;
            case "}":
                return t.braceNest > 0 && 2 === t.currentType && d(8, o(), 0), e.next(), n = p(t, 3, "}"), t.braceNest--, t.braceNest > 0 && h(e), t.inLinked && 0 === t.braceNest && (t.inLinked = !1), n;
            case "@":
                return t.braceNest > 0 && d(7, o(), 0), n = I(e, t) || f(t), t.braceNest = 0, n;
            default: {
                let r = !0,
                    a = !0,
                    l = !0;
                if (y(e)) return t.braceNest > 0 && d(7, o(), 0), n = p(t, 1, M(e)), t.braceNest = 0, t.inLinked = !1, n;
                if (t.braceNest > 0 && (4 === t.currentType || 5 === t.currentType || 6 === t.currentType)) return d(7, o(), 0), t.braceNest = 0, O(e, t);
                if (r = function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (2 !== n) return !1;
                    g(e);
                    const r = m(e.currentPeek());
                    return e.resetPeek(), r
                }(e, t)) return n = p(t, 4, function (e) {
                    h(e);
                    let t = "",
                        n = "";
                    for (; t = S(e);) n += t;
                    return e.currentChar() === af && d(7, o(), 0), n
                }(e)), h(e), n;
                if (a = function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (2 !== n) return !1;
                    g(e);
                    const r = function (e) {
                        if (e === af) return !1;
                        const t = e.charCodeAt(0);
                        return t >= 48 && t <= 57
                    }("-" === e.currentPeek() ? e.peek() : e.currentPeek());
                    return e.resetPeek(), r
                }(e, t)) return n = p(t, 5, function (e) {
                    h(e);
                    let t = "";
                    return "-" === e.currentChar() ? (e.next(), t += `-${E(e)}`) : t += E(e), e.currentChar() === af && d(7, o(), 0), t
                }(e)), h(e), n;
                if (l = function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (2 !== n) return !1;
                    g(e);
                    const r = "'" === e.currentPeek();
                    return e.resetPeek(), r
                }(e, t)) return n = p(t, 6, function (e) {
                    h(e), v(e, "'");
                    let t = "",
                        n = "";
                    for (; t = k(e, F);) n += "\\" === t ? $(e) : t;
                    const r = e.currentChar();
                    return r === ef || r === af ? (d(3, o(), 0), r === ef && (e.next(), v(e, "'")), n) : (v(e, "'"), n)
                }(e)), h(e), n;
                if (!r && !a && !l) return n = p(t, 12, function (e) {
                    h(e);
                    let t = "",
                        n = "";
                    for (; t = k(e, V);) n += t;
                    return n
                }(e)), d(2, o(), 0, n.value), h(e), n;
                break
            }
        }
        return n
    }

    function I(e, t) {
        const {
            currentType: n
        } = t;
        let r = null;
        const a = e.currentChar();
        switch (7 !== n && 8 !== n && 11 !== n && 9 !== n || a !== ef && a !== Qp || d(10, o(), 0), a) {
            case "@":
                return e.next(), r = p(t, 7, "@"), t.inLinked = !0, r;
            case ".":
                return h(e), e.next(), p(t, 8, ".");
            case ":":
                return h(e), e.next(), p(t, 9, ":");
            default:
                return y(e) ? (r = p(t, 1, M(e)), t.braceNest = 0, t.inLinked = !1, r) : function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (7 !== n) return !1;
                    g(e);
                    const r = "." === e.currentPeek();
                    return e.resetPeek(), r
                }(e, t) || function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (7 !== n && 11 !== n) return !1;
                    g(e);
                    const r = ":" === e.currentPeek();
                    return e.resetPeek(), r
                }(e, t) ? (h(e), I(e, t)) : function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (8 !== n) return !1;
                    g(e);
                    const r = m(e.currentPeek());
                    return e.resetPeek(), r
                }(e, t) ? (h(e), p(t, 11, function (e) {
                    let t = "",
                        n = "";
                    for (; t = x(e);) n += t;
                    return n
                }(e))) : function (e, t) {
                    const {
                        currentType: n
                    } = t;
                    if (9 !== n) return !1;
                    const r = () => {
                        const t = e.currentPeek();
                        return "{" === t ? m(e.peek()) : !("@" === t || "|" === t || ":" === t || "." === t || t === Qp || !t) && (t === ef ? (e.peek(), r()) : b(e, !1))
                    },
                        a = r();
                    return e.resetPeek(), a
                }(e, t) ? (h(e), "{" === a ? R(e, t) || r : p(t, 10, function (e) {
                    const t = n => {
                        const r = e.currentChar();
                        return "{" !== r && "@" !== r && "|" !== r && "(" !== r && ")" !== r && r ? r === Qp ? n : (n += r, e.next(), t(n)) : n
                    };
                    return t("")
                }(e))) : (7 === n && d(10, o(), 0), t.braceNest = 0, t.inLinked = !1, O(e, t))
        }
    }

    function O(e, t) {
        let n = {
            type: 13
        };
        if (t.braceNest > 0) return R(e, t) || f(t);
        if (t.inLinked) return I(e, t) || f(t);
        switch (e.currentChar()) {
            case "{":
                return R(e, t) || f(t);
            case "}":
                return d(6, o(), 0), e.next(), p(t, 3, "}");
            case "@":
                return I(e, t) || f(t);
            default:
                if (y(e)) return n = p(t, 1, M(e)), t.braceNest = 0, t.inLinked = !1, n;
                if (b(e)) return p(t, 0, function (e) {
                    let t = "";
                    for (; ;) {
                        const n = e.currentChar();
                        if ("{" === n || "}" === n || "@" === n || "|" === n || !n) break;
                        if (n === Qp || n === ef)
                            if (b(e)) t += n, e.next();
                            else {
                                if (y(e)) break;
                                t += n, e.next()
                            }
                        else t += n, e.next()
                    }
                    return t
                }(e))
        }
        return n
    }
    return {
        nextToken() {
            const {
                currentType: e,
                offset: t,
                startLoc: n,
                endLoc: l
            } = s;
            return s.lastType = e, s.lastOffset = t, s.lastStartLoc = n, s.lastEndLoc = l, s.offset = a(), s.startLoc = o(), r.currentChar() === af ? p(s, 13) : O(r, s)
        },
        currentOffset: a,
        currentPosition: o,
        context: u
    }
}
const lf = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function sf(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default: {
            const e = parseInt(t || n, 16);
            return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�"
        }
    }
}

function uf(e = {}) {
    const t = !1 !== e.location,
        {
            onError: n
        } = e;

    function r(e, r, a, o, ...l) {
        const i = e.currentPosition();
        if (i.offset += o, i.column += o, n) {
            const e = Xp(r, t ? Yp(a, i) : null, {
                domain: "parser",
                args: l
            });
            n(e)
        }
    }

    function a(e, n, r) {
        const a = {
            type: e
        };
        return t && (a.start = n, a.end = n, a.loc = {
            start: r,
            end: r
        }), a
    }

    function o(e, n, r, a) {
        t && (e.end = n, e.loc && (e.loc.end = r))
    }

    function l(e, t) {
        const n = e.context(),
            r = a(3, n.offset, n.startLoc);
        return r.value = t, o(r, e.currentOffset(), e.currentPosition()), r
    }

    function i(e, t) {
        const n = e.context(),
            {
                lastOffset: r,
                lastStartLoc: l
            } = n,
            i = a(5, r, l);
        return i.index = parseInt(t, 10), e.nextToken(), o(i, e.currentOffset(), e.currentPosition()), i
    }

    function s(e, t) {
        const n = e.context(),
            {
                lastOffset: r,
                lastStartLoc: l
            } = n,
            i = a(4, r, l);
        return i.key = t, e.nextToken(), o(i, e.currentOffset(), e.currentPosition()), i
    }

    function u(e, t) {
        const n = e.context(),
            {
                lastOffset: r,
                lastStartLoc: l
            } = n,
            i = a(9, r, l);
        return i.value = t.replace(lf, sf), e.nextToken(), o(i, e.currentOffset(), e.currentPosition()), i
    }

    function c(e) {
        const t = e.context(),
            n = a(6, t.offset, t.startLoc);
        let l = e.nextToken();
        if (8 === l.type) {
            const t = function (e) {
                const t = e.nextToken(),
                    n = e.context(),
                    {
                        lastOffset: l,
                        lastStartLoc: i
                    } = n,
                    s = a(8, l, i);
                return 11 !== t.type ? (r(e, 12, n.lastStartLoc, 0), s.value = "", o(s, l, i), {
                    nextConsumeToken: t,
                    node: s
                }) : (null == t.value && r(e, Kp, n.lastStartLoc, 0, cf(t)), s.value = t.value || "", o(s, e.currentOffset(), e.currentPosition()), {
                    node: s
                })
            }(e);
            n.modifier = t.node, l = t.nextConsumeToken || e.nextToken()
        }
        switch (9 !== l.type && r(e, Kp, t.lastStartLoc, 0, cf(l)), l = e.nextToken(), 2 === l.type && (l = e.nextToken()), l.type) {
            case 10:
                null == l.value && r(e, Kp, t.lastStartLoc, 0, cf(l)), n.key = function (e, t) {
                    const n = e.context(),
                        r = a(7, n.offset, n.startLoc);
                    return r.value = t, o(r, e.currentOffset(), e.currentPosition()), r
                }(e, l.value || "");
                break;
            case 4:
                null == l.value && r(e, Kp, t.lastStartLoc, 0, cf(l)), n.key = s(e, l.value || "");
                break;
            case 5:
                null == l.value && r(e, Kp, t.lastStartLoc, 0, cf(l)), n.key = i(e, l.value || "");
                break;
            case 6:
                null == l.value && r(e, Kp, t.lastStartLoc, 0, cf(l)), n.key = u(e, l.value || "");
                break;
            default: {
                r(e, 13, t.lastStartLoc, 0);
                const i = e.context(),
                    s = a(7, i.offset, i.startLoc);
                return s.value = "", o(s, i.offset, i.startLoc), n.key = s, o(n, i.offset, i.startLoc), {
                    nextConsumeToken: l,
                    node: n
                }
            }
        }
        return o(n, e.currentOffset(), e.currentPosition()), {
            node: n
        }
    }

    function d(e) {
        const t = e.context(),
            n = a(2, 1 === t.currentType ? e.currentOffset() : t.offset, 1 === t.currentType ? t.endLoc : t.startLoc);
        n.items = [];
        let d = null;
        do {
            const a = d || e.nextToken();
            switch (d = null, a.type) {
                case 0:
                    null == a.value && r(e, Kp, t.lastStartLoc, 0, cf(a)), n.items.push(l(e, a.value || ""));
                    break;
                case 5:
                    null == a.value && r(e, Kp, t.lastStartLoc, 0, cf(a)), n.items.push(i(e, a.value || ""));
                    break;
                case 4:
                    null == a.value && r(e, Kp, t.lastStartLoc, 0, cf(a)), n.items.push(s(e, a.value || ""));
                    break;
                case 6:
                    null == a.value && r(e, Kp, t.lastStartLoc, 0, cf(a)), n.items.push(u(e, a.value || ""));
                    break;
                case 7: {
                    const t = c(e);
                    n.items.push(t.node), d = t.nextConsumeToken || null;
                    break
                }
            }
        } while (13 !== t.currentType && 1 !== t.currentType);
        return o(n, 1 === t.currentType ? t.lastOffset : e.currentOffset(), 1 === t.currentType ? t.lastEndLoc : e.currentPosition()), n
    }
    return {
        parse(n) {
            const l = of(n, Ep({}, e)),
                i = l.context(),
                s = a(0, i.offset, i.startLoc);
            return t && s.loc && (s.loc.source = n), s.body = function (e) {
                const t = e.context(),
                    {
                        offset: n,
                        startLoc: l
                    } = t,
                    i = d(e);
                return 13 === t.currentType ? i : function (e, t, n, l) {
                    const i = e.context();
                    let s = 0 === l.items.length;
                    const u = a(1, t, n);
                    u.cases = [], u.cases.push(l);
                    do {
                        const t = d(e);
                        s || (s = 0 === t.items.length), u.cases.push(t)
                    } while (13 !== i.currentType);
                    return s && r(e, 11, n, 0), o(u, e.currentOffset(), e.currentPosition()), u
                }(e, n, l, i)
            }(l), e.onCacheKey && (s.cacheKey = e.onCacheKey(n)), 13 !== i.currentType && r(l, Kp, i.lastStartLoc, 0, n[i.offset] || ""), o(s, l.currentOffset(), l.currentPosition()), s
        }
    }
}

function cf(e) {
    if (13 === e.type) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function df(e, t) {
    for (let n = 0; n < e.length; n++) pf(e[n], t)
}

function pf(e, t) {
    switch (e.type) {
        case 1:
            df(e.cases, t), t.helper("plural");
            break;
        case 2:
            df(e.items, t);
            break;
        case 6:
            pf(e.key, t), t.helper("linked"), t.helper("type");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named")
    }
}

function ff(e) {
    if (1 === e.items.length) {
        const t = e.items[0];
        3 !== t.type && 9 !== t.type || (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (3 !== r.type && 9 !== r.type) break;
            if (null == r.value) break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = Wp(t);
            for (let t = 0; t < e.items.length; t++) {
                const n = e.items[t];
                3 !== n.type && 9 !== n.type || delete n.value
            }
        }
    }
}

function vf(e) {
    switch (e.t = e.type, e.type) {
        case 0: {
            const t = e;
            vf(t.body), t.b = t.body, delete t.body;
            break
        }
        case 1: {
            const t = e,
                n = t.cases;
            for (let e = 0; e < n.length; e++) vf(n[e]);
            t.c = n, delete t.cases;
            break
        }
        case 2: {
            const t = e,
                n = t.items;
            for (let e = 0; e < n.length; e++) vf(n[e]);
            t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
            break
        }
        case 3:
        case 9:
        case 8:
        case 7: {
            const t = e;
            t.value && (t.v = t.value, delete t.value);
            break
        }
        case 6: {
            const t = e;
            vf(t.key), t.k = t.key, delete t.key, t.modifier && (vf(t.modifier), t.m = t.modifier, delete t.modifier);
            break
        }
        case 5: {
            const t = e;
            t.i = t.index, delete t.index;
            break
        }
        case 4: {
            const t = e;
            t.k = t.key, delete t.key;
            break
        }
    }
    delete e.type
}

function gf(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            ! function (e, t) {
                t.body ? gf(e, t.body) : e.push("null")
            }(e, t);
            break;
        case 1:
            ! function (e, t) {
                const {
                    helper: n,
                    needIndent: r
                } = e;
                if (t.cases.length > 1) {
                    e.push(`${n("plural")}([`), e.indent(r());
                    const a = t.cases.length;
                    for (let n = 0; n < a && (gf(e, t.cases[n]), n !== a - 1); n++) e.push(", ");
                    e.deindent(r()), e.push("])")
                }
            }(e, t);
            break;
        case 2:
            ! function (e, t) {
                const {
                    helper: n,
                    needIndent: r
                } = e;
                e.push(`${n("normalize")}([`), e.indent(r());
                const a = t.items.length;
                for (let o = 0; o < a && (gf(e, t.items[o]), o !== a - 1); o++) e.push(", ");
                e.deindent(r()), e.push("])")
            }(e, t);
            break;
        case 6:
            ! function (e, t) {
                const {
                    helper: n
                } = e;
                e.push(`${n("linked")}(`), gf(e, t.key), t.modifier ? (e.push(", "), gf(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
            }(e, t);
            break;
        case 8:
        case 7:
        case 9:
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t)
    }
}

function hf(e, t = {}) {
    const n = Ep({}, t),
        r = !!n.jit,
        a = !!n.minify,
        o = null == n.optimize || n.optimize,
        l = uf(n).parse(e);
    return r ? (o && function (e) {
        const t = e.body;
        2 === t.type ? ff(t) : t.cases.forEach((e => ff(e)))
    }(l), a && vf(l), {
        ast: l,
        code: ""
    }) : (function (e) {
        const t = function (e) {
            const t = {
                ast: e,
                helpers: new Set
            };
            return {
                context: () => t,
                helper: e => (t.helpers.add(e), e)
            }
        }(e);
        t.helper("normalize"), e.body && pf(e.body, t);
        const n = t.context();
        e.helpers = Array.from(n.helpers)
    }(l, n), ((e, t = {}) => {
        const n = Bp(t.mode) ? t.mode : "normal",
            r = Bp(t.filename) ? t.filename : "message.intl",
            a = !!t.sourceMap,
            o = null != t.breakLineCode ? t.breakLineCode : "arrow" === n ? ";" : "\n",
            l = t.needIndent ? t.needIndent : "arrow" !== n,
            i = e.helpers || [],
            s = function (e, t) {
                const {
                    sourceMap: n,
                    filename: r,
                    breakLineCode: a,
                    needIndent: o
                } = t, l = {
                    filename: r,
                    code: "",
                    column: 1,
                    line: 1,
                    offset: 0,
                    map: void 0,
                    breakLineCode: a,
                    needIndent: o,
                    indentLevel: 0
                };

                function i(e, t) {
                    l.code += e
                }

                function s(e, t = !0) {
                    const n = t ? a : "";
                    i(o ? n + "  ".repeat(e) : n)
                }
                return !1 !== t.location && e.loc && (l.source = e.loc.source), {
                    context: () => l,
                    push: i,
                    indent(e = !0) {
                        const t = ++l.indentLevel;
                        e && s(t)
                    },
                    deindent(e = !0) {
                        const t = --l.indentLevel;
                        e && s(t)
                    },
                    newline() {
                        s(l.indentLevel)
                    },
                    helper: e => `_${e}`,
                    needIndent: () => l.needIndent
                }
            }(e, {
                mode: n,
                filename: r,
                sourceMap: a,
                breakLineCode: o,
                needIndent: l
            });
        s.push("normal" === n ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(l), i.length > 0 && (s.push(`const { ${Wp(i.map((e => `${e}: _${e}`)), ", ")} } = ctx`), s.newline()), s.push("return "), gf(s, e), s.deindent(l), s.push("}"), delete e.helpers;
        const {
            code: u,
            map: c
        } = s.context();
        return {
            ast: e,
            code: u,
            map: c ? c.toJSON() : void 0
        }
    })(l, n))
}

function mf(e) {
    return t => function (e, t) {
        const n = Ef(t, yf);
        if (null == n) throw Ff(0);
        if (1 === _f(n)) {
            const t = function (e) {
                return Ef(e, bf, [])
            }(n);
            return e.plural(t.reduce(((t, n) => [...t, kf(e, n)]), []))
        }
        return kf(e, n)
    }(t, e)
}
const yf = ["b", "body"],
    bf = ["c", "cases"];

function kf(e, t) {
    const n = function (e) {
        return Ef(e, wf)
    }(t);
    if (null != n) return "text" === e.type ? n : e.normalize([n]);
    {
        const n = function (e) {
            return Ef(e, xf, [])
        }(t).reduce(((t, n) => [...t, Cf(e, n)]), []);
        return e.normalize(n)
    }
}
const wf = ["s", "static"],
    xf = ["i", "items"];

function Cf(e, t) {
    const n = _f(t);
    switch (n) {
        case 3:
        case 9:
        case 7:
        case 8:
            return function (e, t) {
                const n = Ef(e, Af);
                if (n) return n;
                throw Ff(t)
            }(t, n);
        case 4: {
            const r = t;
            if (Ip(r, "k") && r.k) return e.interpolate(e.named(r.k));
            if (Ip(r, "key") && r.key) return e.interpolate(e.named(r.key));
            throw Ff(n)
        }
        case 5: {
            const r = t;
            if (Ip(r, "i") && Ap(r.i)) return e.interpolate(e.list(r.i));
            if (Ip(r, "index") && Ap(r.index)) return e.interpolate(e.list(r.index));
            throw Ff(n)
        }
        case 6: {
            const n = t,
                r = function (e) {
                    return Ef(e, Lf)
                }(n),
                a = function (e) {
                    const t = Ef(e, Tf);
                    if (t) return t;
                    throw Ff(6)
                }(n);
            return e.linked(Cf(e, a), r ? Cf(e, r) : void 0, e.type)
        }
        default:
            throw new Error(`unhandled node on format message part: ${n}`)
    }
}
const Sf = ["t", "type"];

function _f(e) {
    return Ef(e, Sf)
}
const Af = ["v", "value"];
const Lf = ["m", "modifier"],
    Tf = ["k", "key"];

function Ef(e, t, n) {
    for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (Ip(e, n) && null != e[n]) return e[n]
    }
    return n
}

function Ff(e) {
    return new Error(`unhandled node type: ${e}`)
}
const $f = e => e;
let Pf = $p();

function Vf(e) {
    return Np(e) && 0 === _f(e) && (Ip(e, "b") || Ip(e, "body"))
}
let Mf = null;
const Rf = If("function:translate");

function If(e) {
    return t => Mf && Mf.emit(e, t)
}

function Of(e) {
    return Xp(e, null, void 0)
}
let Hf;

function Bf(e) {
    if (Bp(e)) return e;
    if (Hp(e)) {
        if (e.resolvedOnce && null != Hf) return Hf;
        if ("Function" === e.constructor.name) {
            const n = e();
            if (Np(t = n) && Hp(t.then) && Hp(t.catch)) throw Of(21);
            return Hf = n
        }
        throw Of(22)
    }
    throw Of(23);
    var t
}

function Df(e, t, n) {
    return [...new Set([n, ...Op(t) ? t : Np(t) ? Object.keys(t) : Bp(t) ? [t] : [n]])]
}

function Nf(e, t) {
    return Np(e) ? e[t] : null
}
const zf = "en-US",
    jf = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Uf;
const Wf = () => null;
let Gf = null;
const Zf = e => {
    Gf = e
};
let qf = 0;
const Yf = e => ({
    [e]: $p()
});

function Kf(e, t, n, r, a) {
    const {
        missing: o,
        onWarn: l
    } = e;
    if (null !== o) {
        const r = o(e, n, t, a);
        return Bp(r) ? r : t
    }
    return t
}

function Xf(e, t, n) {
    e.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function Jf(e, t) {
    const n = t.indexOf(e);
    if (-1 === n) return !1;
    for (let o = n + 1; o < t.length; o++)
        if ((r = e) !== (a = t[o]) && r.split("-")[0] === a.split("-")[0]) return !0;
    var r, a;
    return !1
}
const Qf = e => e,
    ev = e => "",
    tv = e => 0 === e.length ? "" : Wp(e),
    nv = e => null == e ? "" : Op(e) || Up(e) && e.toString === zp ? JSON.stringify(e, null, 2) : String(e);

function rv(e, t) {
    return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
const av = () => "",
    ov = e => Hp(e);

function lv(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: a,
        messageCompiler: o,
        fallbackLocale: l,
        messages: i
    } = e, [s, u] = uv(...t), c = (Dp(u.missingWarn) ? u.missingWarn : e.missingWarn, Dp(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, Dp(u.escapeParameter) ? u.escapeParameter : e.escapeParameter), d = !!u.resolvedMessage, p = Bp(u.default) || Dp(u.default) ? Dp(u.default) ? o ? s : () => s : u.default : n ? o ? s : () => s : null, f = n || null != p && (Bp(p) || Hp(p)), v = function (e, t) {
        return null != t.locale ? Bf(t.locale) : Bf(e.locale)
    }(e, u);
    c && function (e) {
        Op(e.list) ? e.list = e.list.map((e => Bp(e) ? Mp(e) : e)) : Np(e.named) && Object.keys(e.named).forEach((t => {
            Bp(e.named[t]) && (e.named[t] = Mp(e.named[t]))
        }))
    }(u);
    let [g, h, m] = d ? [s, v, i[v] || $p()] : iv(e, s, v, l), y = g, b = s;
    if (d || Bp(y) || Vf(y) || ov(y) || f && (y = p, b = y), !(d || (Bp(y) || Vf(y) || ov(y)) && Bp(h))) return a ? -1 : s;
    let k = !1;
    const w = ov(y) ? y : sv(e, s, h, y, b, (() => {
        k = !0
    }));
    if (k) return y;
    const x = function (e, t, n, r) {
        const {
            modifiers: a,
            pluralRules: o,
            messageResolver: l,
            fallbackLocale: i,
            fallbackWarn: s,
            missingWarn: u,
            fallbackContext: c
        } = e, d = {
            locale: t,
            modifiers: a,
            pluralRules: o,
            messages(r, a) {
                let o = l(n, r);
                if (null == o && (c || a)) {
                    const [, , n] = iv(c || e, r, t, i);
                    o = l(n, r)
                }
                if (Bp(o) || Vf(o)) {
                    let n = !1;
                    const a = sv(e, r, t, o, r, (() => {
                        n = !0
                    }));
                    return n ? av : a
                }
                return ov(o) ? o : av
            }
        };
        return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), Ap(r.plural) && (d.pluralIndex = r.plural), d
    }(e, h, m, u),
        C = function (e, t, n) {
            return t(n)
        }(0, w, function (e = {}) {
            const t = e.locale,
                n = function (e) {
                    const t = Ap(e.pluralIndex) ? e.pluralIndex : -1;
                    return e.named && (Ap(e.named.count) || Ap(e.named.n)) ? Ap(e.named.count) ? e.named.count : Ap(e.named.n) ? e.named.n : t : t
                }(e),
                r = Np(e.pluralRules) && Bp(t) && Hp(e.pluralRules[t]) ? e.pluralRules[t] : rv,
                a = Np(e.pluralRules) && Bp(t) && Hp(e.pluralRules[t]) ? rv : void 0,
                o = e.list || [],
                l = e.named || $p();

            function i(t, n) {
                return (Hp(e.messages) ? e.messages(t, !!n) : !!Np(e.messages) && e.messages[t]) || (e.parent ? e.parent.message(t) : ev)
            }
            Ap(e.pluralIndex) && function (e, t) {
                t.count || (t.count = e), t.n || (t.n = e)
            }(n, l);
            const s = Up(e.processor) && Hp(e.processor.normalize) ? e.processor.normalize : tv,
                u = Up(e.processor) && Hp(e.processor.interpolate) ? e.processor.interpolate : nv,
                c = Up(e.processor) && Bp(e.processor.type) ? e.processor.type : "text",
                d = {
                    list(e) {
                        return o[e]
                    },
                    named(e) {
                        return l[e]
                    },
                    plural(e) {
                        return e[r(n, e.length, a)]
                    },
                    linked(t, ...n) {
                        const [r, a] = n;
                        let o = "text",
                            l = "";
                        1 === n.length ? Np(r) ? (l = r.modifier || l, o = r.type || o) : Bp(r) && (l = r || l) : 2 === n.length && (Bp(r) && (l = r || l), Bp(a) && (o = a || o));
                        const s = i(t, !0)(d),
                            u = "vnode" === o && Op(s) && l ? s[0] : s;
                        return l ? (c = l, e.modifiers ? e.modifiers[c] : Qf)(u, o) : u;
                        var c
                    },
                    message: i,
                    type: c,
                    interpolate: u,
                    normalize: s,
                    values: Ep($p(), o, l)
                };
            return d
        }(x)),
        S = r ? r(C, s) : C;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const t = {
            timestamp: Date.now(),
            key: Bp(s) ? s : ov(y) ? y.key : "",
            locale: h || (ov(y) ? y.locale : ""),
            format: Bp(y) ? y : ov(y) ? y.source : "",
            message: S
        };
        t.meta = Ep({}, e.__meta, Wf() || {}), Rf(t)
    }
    return S
}

function iv(e, t, n, r, a, o) {
    const {
        messages: l,
        onWarn: i,
        messageResolver: s,
        localeFallbacker: u
    } = e, c = u(e, r, n);
    let d, p = $p(),
        f = null;
    for (let v = 0; v < c.length && (d = c[v], p = l[d] || $p(), null === (f = s(p, t)) && (f = p[t]), !(Bp(f) || Vf(f) || ov(f))); v++)
        if (!Jf(d, c)) {
            const n = Kf(e, t, d, 0, "translate");
            n !== t && (f = n)
        } return [f, d, p]
}

function sv(e, t, n, r, a, o) {
    const {
        messageCompiler: l,
        warnHtmlMessage: i
    } = e;
    if (ov(r)) {
        const e = r;
        return e.locale = e.locale || n, e.key = e.key || t, e
    }
    if (null == l) {
        const e = () => r;
        return e.locale = n, e.key = t, e
    }
    const s = l(r, function (e, t, n, r, a, o) {
        return {
            locale: t,
            key: n,
            warnHtmlMessage: a,
            onError(e) {
                throw o && o(e), e
            },
            onCacheKey: e => ((e, t, n) => {
                return r = {
                    l: e,
                    k: t,
                    s: n
                }, JSON.stringify(r).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
                var r
            })(t, n, e)
        }
    }(0, n, a, 0, i, o));
    return s.locale = n, s.key = t, s.source = r, s
}

function uv(...e) {
    const [t, n, r] = e, a = $p();
    if (!(Bp(t) || Ap(t) || ov(t) || Vf(t))) throw Of(17);
    const o = Ap(t) ? String(t) : (ov(t), t);
    return Ap(n) ? a.plural = n : Bp(n) ? a.default = n : Up(n) && !Tp(n) ? a.named = n : Op(n) && (a.list = n), Ap(r) ? a.plural = r : Bp(r) ? a.default = r : Up(r) && Ep(a, r), [o, a]
}
"boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (Vp().__INTLIFY_PROD_DEVTOOLS__ = !1), "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (Vp().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);

function cv(e, ...t) {
    return Xp(e, null, void 0)
}
const dv = _p("__setPluralRules"),
    pv = _p("__dispose");

function fv(e) {
    if (!Np(e)) return e;
    for (const t in e)
        if (Ip(e, t))
            if (t.includes(".")) {
                const n = t.split("."),
                    r = n.length - 1;
                let a = e,
                    o = !1;
                for (let e = 0; e < r; e++) {
                    if (n[e] in a || (a[n[e]] = $p()), !Np(a[n[e]])) {
                        o = !0;
                        break
                    }
                    a = a[n[e]]
                }
                o || (a[n[r]] = e[t], delete e[t]), Np(a[n[r]]) && fv(a[n[r]])
            } else Np(e[t]) && fv(e[t]);
    return e
}

function vv(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: a,
        flatJson: o
    } = t, l = Up(n) ? n : Op(r) ? $p() : {
        [e]: $p()
    };
    if (Op(r) && r.forEach((e => {
        if ("locale" in e && "resource" in e) {
            const {
                locale: t,
                resource: n
            } = e;
            t ? (l[t] = l[t] || $p(), qp(n, l[t])) : qp(n, l)
        } else Bp(e) && qp(JSON.parse(e), l)
    })), null == a && o)
        for (const i in l) Ip(l, i) && fv(l[i]);
    return l
}
let gv = 0;

function hv(e) {
    return (t, n, r, a) => e(n, r, Ga() || void 0, a)
}

function mv(e = {}) {
    const {
        __root: t,
        __injectWithOption: n
    } = e, r = void 0 === t, a = e.flatJson, o = Sp ? kt : wt;
    let l = !Dp(e.inheritLocale) || e.inheritLocale;
    const i = o(t && l ? t.locale.value : Bp(e.locale) ? e.locale : zf),
        s = o(t && l ? t.fallbackLocale.value : Bp(e.fallbackLocale) || Op(e.fallbackLocale) || Up(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : i.value),
        u = o(vv(i.value, e));
    let c = t ? t.missingWarn : !Dp(e.missingWarn) && !Lp(e.missingWarn) || e.missingWarn,
        d = t ? t.fallbackWarn : !Dp(e.fallbackWarn) && !Lp(e.fallbackWarn) || e.fallbackWarn,
        p = t ? t.fallbackRoot : !Dp(e.fallbackRoot) || e.fallbackRoot,
        f = !!e.fallbackFormat,
        v = Hp(e.missing) ? e.missing : null,
        g = Hp(e.missing) ? hv(e.missing) : null,
        h = Hp(e.postTranslation) ? e.postTranslation : null,
        m = t ? t.warnHtmlMessage : !Dp(e.warnHtmlMessage) || e.warnHtmlMessage,
        y = !!e.escapeParameter;
    const b = t ? t.modifiers : Up(e.modifiers) ? e.modifiers : {};
    let k, w = e.pluralRules || t && t.pluralRules;
    k = (() => {
        r && Zf(null);
        const t = function (e = {}) {
            const t = Hp(e.onWarn) ? e.onWarn : Gp,
                n = Bp(e.version) ? e.version : "11.0.1",
                r = Bp(e.locale) || Hp(e.locale) ? e.locale : zf,
                a = Hp(r) ? zf : r,
                o = Op(e.fallbackLocale) || Up(e.fallbackLocale) || Bp(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : a,
                l = Up(e.messages) ? e.messages : Yf(a),
                i = Up(e.datetimeFormats) ? e.datetimeFormats : Yf(a),
                s = Up(e.numberFormats) ? e.numberFormats : Yf(a),
                u = Ep($p(), e.modifiers, {
                    upper(e, t) {
                        return "text" === t && Bp(e) ? e.toUpperCase() : "vnode" === t && Np(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e
                    },
                    lower(e, t) {
                        return "text" === t && Bp(e) ? e.toLowerCase() : "vnode" === t && Np(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e
                    },
                    capitalize(e, t) {
                        return "text" === t && Bp(e) ? jf(e) : "vnode" === t && Np(e) && "__v_isVNode" in e ? jf(e.children) : e
                    }
                }),
                c = e.pluralRules || $p(),
                d = Hp(e.missing) ? e.missing : null,
                p = !Dp(e.missingWarn) && !Lp(e.missingWarn) || e.missingWarn,
                f = !Dp(e.fallbackWarn) && !Lp(e.fallbackWarn) || e.fallbackWarn,
                v = !!e.fallbackFormat,
                g = !!e.unresolving,
                h = Hp(e.postTranslation) ? e.postTranslation : null,
                m = Up(e.processor) ? e.processor : null,
                y = !Dp(e.warnHtmlMessage) || e.warnHtmlMessage,
                b = !!e.escapeParameter,
                k = Hp(e.messageCompiler) ? e.messageCompiler : Uf,
                w = Hp(e.messageResolver) ? e.messageResolver : Nf,
                x = Hp(e.localeFallbacker) ? e.localeFallbacker : Df,
                C = Np(e.fallbackContext) ? e.fallbackContext : void 0,
                S = e,
                _ = Np(S.__datetimeFormatters) ? S.__datetimeFormatters : new Map,
                A = Np(S.__numberFormatters) ? S.__numberFormatters : new Map,
                L = Np(S.__meta) ? S.__meta : {};
            qf++;
            const T = {
                version: n,
                cid: qf,
                locale: r,
                fallbackLocale: o,
                messages: l,
                modifiers: u,
                pluralRules: c,
                missing: d,
                missingWarn: p,
                fallbackWarn: f,
                fallbackFormat: v,
                unresolving: g,
                postTranslation: h,
                processor: m,
                warnHtmlMessage: y,
                escapeParameter: b,
                messageCompiler: k,
                messageResolver: w,
                localeFallbacker: x,
                fallbackContext: C,
                onWarn: t,
                __meta: L
            };
            return T.datetimeFormats = i, T.numberFormats = s, T.__datetimeFormatters = _, T.__numberFormatters = A, __INTLIFY_PROD_DEVTOOLS__ && function (e, t, n) {
                Mf && Mf.emit("i18n:init", {
                    timestamp: Date.now(),
                    i18n: e,
                    version: t,
                    meta: n
                })
            }(T, n, L), T
        }({
            version: "11.0.1",
            locale: i.value,
            fallbackLocale: s.value,
            messages: u.value,
            modifiers: b,
            pluralRules: w,
            missing: null === g ? void 0 : g,
            missingWarn: c,
            fallbackWarn: d,
            fallbackFormat: f,
            unresolving: !0,
            postTranslation: null === h ? void 0 : h,
            warnHtmlMessage: m,
            escapeParameter: y,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        });
        return r && Zf(t), t
    })(), Xf(k, i.value, s.value);
    const x = ao({
        get: () => i.value,
        set(e) {
            i.value = e, k.locale = i.value
        }
    }),
        C = ao({
            get: () => s.value,
            set(e) {
                s.value = e, k.fallbackLocale = s.value, Xf(k, i.value, e)
            }
        }),
        S = ao((() => u.value));
    return gv++, t && Sp && (aa(t.locale, (e => {
        l && (i.value = e, k.locale = e, Xf(k, i.value, s.value))
    })), aa(t.fallbackLocale, (e => {
        l && (s.value = e, k.fallbackLocale = e, Xf(k, i.value, s.value))
    }))), {
        id: gv,
        locale: x,
        fallbackLocale: C,
        get inheritLocale() {
            return l
        },
        set inheritLocale(e) {
            l = e, e && t && (i.value = t.locale.value, s.value = t.fallbackLocale.value, Xf(k, i.value, s.value))
        },
        get availableLocales() {
            return Object.keys(u.value).sort()
        },
        messages: S,
        get modifiers() {
            return b
        },
        get pluralRules() {
            return w || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return c
        },
        set missingWarn(e) {
            c = e, k.missingWarn = c
        },
        get fallbackWarn() {
            return d
        },
        set fallbackWarn(e) {
            d = e, k.fallbackWarn = d
        },
        get fallbackRoot() {
            return p
        },
        set fallbackRoot(e) {
            p = e
        },
        get fallbackFormat() {
            return f
        },
        set fallbackFormat(e) {
            f = e, k.fallbackFormat = f
        },
        get warnHtmlMessage() {
            return m
        },
        set warnHtmlMessage(e) {
            m = e, k.warnHtmlMessage = e
        },
        get escapeParameter() {
            return y
        },
        set escapeParameter(e) {
            y = e, k.escapeParameter = e
        },
        t: (...e) => ((e, n, a, o, l, c) => {
            let d;
            i.value, s.value, u.value;
            try {
                __INTLIFY_PROD_DEVTOOLS__,
                    r || (k.fallbackContext = t ? Gf : void 0),
                    d = e(k)
            }
            finally {
                __INTLIFY_PROD_DEVTOOLS__,
                    r || (k.fallbackContext = void 0)
            }
            if (Ap(d) && -1 === d || "translate exists" === a) {
                const [e, r] = n();
                return t && p ? o(t) : l(e)
            }
            if (c(d)) return d;
            throw cv(24)
        })((t => Reflect.apply(lv, null, [t, ...e])), (() => uv(...e)), "translate", (t => Reflect.apply(t.t, t, [...e])), (e => e), (e => Bp(e))),
        getLocaleMessage: e => u.value[e] || {},
        setLocaleMessage(e, t) {
            if (a) {
                const n = {
                    [e]: t
                };
                for (const e in n) Ip(n, e) && fv(n[e]);
                t = n[e]
            }
            u.value[e] = t, k.messages = u.value
        },
        mergeLocaleMessage(e, t) {
            u.value[e] = u.value[e] || {};
            const n = {
                [e]: t
            };
            if (a)
                for (const r in n) Ip(n, r) && fv(n[r]);
            qp(t = n[e], u.value[e]), k.messages = u.value
        },
        getPostTranslationHandler: () => Hp(h) ? h : null,
        setPostTranslationHandler(e) {
            h = e, k.postTranslation = e
        },
        getMissingHandler: () => v,
        setMissingHandler(e) {
            null !== e && (g = hv(e)), v = e, k.missing = g
        },
        [dv](e) {
            w = e, k.pluralRules = w
        }
    }
}
const yv = _p("global-vue-i18n");
const bv = ["locale", "fallbackLocale", "availableLocales"],
    kv = ["t"];
var wv;
if ("boolean" != typeof __VUE_I18N_FULL_INSTALL__ && (Vp().__VUE_I18N_FULL_INSTALL__ = !0), "boolean" != typeof __VUE_I18N_LEGACY_API__ && (Vp().__VUE_I18N_LEGACY_API__ = !0), "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ && (Vp().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (Vp().__INTLIFY_PROD_DEVTOOLS__ = !1), Uf = function (e, t) {
    if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Bp(e)) {
        !Dp(t.warnHtmlMessage) || t.warnHtmlMessage;
        const n = (t.onCacheKey || $f)(e),
            r = Pf[n];
        if (r) return r;
        const {
            ast: a,
            detectError: o
        } = function (e, t = {}) {
            let n = !1;
            const r = t.onError || Jp;
            return t.onError = e => {
                n = !0, r(e)
            }, {
                ...hf(e, t),
                detectError: n
            }
        }(e, {
            ...t,
            location: !1,
            jit: !0
        }), l = mf(a);
        return o ? l : Pf[n] = l
    } {
        const t = e.cacheKey;
        if (t) {
            return Pf[t] || (Pf[t] = mf(e))
        }
        return mf(e)
    }
}, __INTLIFY_PROD_DEVTOOLS__) {
    const e = Vp();
    e.__INTLIFY__ = !0, wv = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__, Mf = wv
}
var xv = -1,
    Cv = class {
        constructor() {
            r(this, "_fileData"), this._fileData = []
        }
        static get NOT_FOUND() {
            return xv
        }
        addData(e, t) {
            var n = e + t.length - 1,
                r = this._getChunkRange(e, n);
            if (r.startIx === xv) this._fileData.splice(r.insertIx || 0, 0, {
                offset: e,
                data: t
            });
            else {
                var a = this._fileData[r.startIx],
                    o = this._fileData[r.endIx],
                    l = e > a.offset,
                    i = n < o.offset + o.data.length - 1,
                    s = {
                        offset: Math.min(e, a.offset),
                        data: t
                    };
                if (l) {
                    var u = this._sliceData(a.data, 0, e - a.offset);
                    s.data = this._concatData(u, t)
                }
                i && (u = this._sliceData(s.data, 0, o.offset - s.offset), s.data = this._concatData(u, o.data)), this._fileData.splice(r.startIx, r.endIx - r.startIx + 1, s)
            }
        }
        _concatData(e, t) {
            if ("undefined" != typeof ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e)) {
                var n = new e.constructor(e.length + t.length);
                return n.set(e, 0), n.set(t, e.length), n
            }
            return e.concat(t)
        }
        _sliceData(e, t, n) {
            return e.slice ? e.slice(t, n) : e.subarray(t, n)
        }
        _getChunkRange(e, t) {
            for (var n = xv, r = xv, a = 0, o = 0; o < this._fileData.length; a = ++o) {
                var l = (i = this._fileData[o].offset) + this._fileData[o].data.length;
                if (t < i - 1) break;
                if (e <= l + 1 && t >= i - 1) {
                    n = o;
                    break
                }
            }
            if (n === xv) return {
                startIx: xv,
                endIx: xv,
                insertIx: a
            };
            for (o = n; o < this._fileData.length; o++) {
                var i;
                if (t >= (i = this._fileData[o].offset) - 1 && (r = o), t <= (l = i + this._fileData[o].data.length) + 1) break
            }
            return r === xv && (r = n), {
                startIx: n,
                endIx: r
            }
        }
        hasDataRange(e, t) {
            for (var n = 0; n < this._fileData.length; n++) {
                var r = this._fileData[n];
                if (t < r.offset) return !1;
                if (e >= r.offset && t < r.offset + r.data.length) return !0
            }
            return !1
        }
        getByteAt(e) {
            for (var t, n = 0; n < this._fileData.length; n++) {
                var r = this._fileData[n].offset,
                    a = r + this._fileData[n].data.length - 1;
                if (e >= r && e <= a) {
                    t = this._fileData[n];
                    break
                }
            }
            if (t) return t.data[e - t.offset];
            throw new Error("Offset " + e + " hasn't been loaded yet.")
        }
    },
    Sv = class {
        constructor(e, t) {
            r(this, "_value"), r(this, "bytesReadCount"), r(this, "length"), this._value = e, this.bytesReadCount = t, this.length = e.length
        }
        toString() {
            return this._value
        }
    },
    _v = new TextDecoder,
    Av = new TextDecoder("utf-16"),
    Lv = new TextDecoder("utf-16be");

function Tv(e, t) {
    const n = [];
    let r;
    for (t = t || e.length, r = 0; r < t;) {
        const t = e[r++];
        if (0 == t) break;
        n[r - 1] = String.fromCharCode(t)
    }
    return new Sv(n.join(""), r)
}
var Ev = class {
    constructor() {
        r(this, "_isInitialized"), r(this, "_size"), this._isInitialized = !1, this._size = 0
    }
    static canReadFile(e) {
        throw new Error("Must implement canReadFile function")
    }
    init(e) {
        var t = this;
        if (!this._isInitialized) return this._init({
            onSuccess() {
                t._isInitialized = !0, e.onSuccess()
            },
            onError: e.onError
        });
        setTimeout(e.onSuccess, 1)
    }
    _init(e) {
        throw new Error("Must implement init function")
    }
    loadRange(e, t) {
        throw new Error("Must implement loadRange function")
    }
    getSize() {
        if (!this._isInitialized) throw new Error("init() must be called first.");
        return this._size
    }
    getByteAt(e) {
        throw new Error("Must implement getByteAt function")
    }
    getBytesAt(e, t) {
        for (var n = new Array(t), r = 0; r < t; r++) n[r] = this.getByteAt(e + r);
        return n
    }
    isBitSetAt(e, t) {
        return !!(this.getByteAt(e) & 1 << t)
    }
    getSByteAt(e) {
        var t = this.getByteAt(e);
        return t > 127 ? t - 256 : t
    }
    getShortAt(e, t) {
        var n = t ? this.getByteAt(e) << 8 | this.getByteAt(e + 1) : this.getByteAt(e + 1) << 8 | this.getByteAt(e);
        return n < 0 && (n += 65536), n
    }
    getSShortAt(e, t) {
        var n = this.getShortAt(e, t);
        return n > 32767 ? n - 65536 : n
    }
    getLongAt(e, t) {
        var n = this.getByteAt(e),
            r = this.getByteAt(e + 1),
            a = this.getByteAt(e + 2),
            o = this.getByteAt(e + 3),
            l = t ? ((n << 8 | r) << 8 | a) << 8 | o : ((o << 8 | a) << 8 | r) << 8 | n;
        return l < 0 && (l += 4294967296), l
    }
    getSLongAt(e, t) {
        var n = this.getLongAt(e, t);
        return n > 2147483647 ? n - 4294967296 : n
    }
    getInteger24At(e, t) {
        var n = this.getByteAt(e),
            r = this.getByteAt(e + 1),
            a = this.getByteAt(e + 2),
            o = t ? (n << 8 | r) << 8 | a : (a << 8 | r) << 8 | n;
        return o < 0 && (o += 16777216), o
    }
    getStringAt(e, t) {
        for (var n = [], r = e, a = 0; r < e + t; r++, a++) n[a] = String.fromCharCode(this.getByteAt(r));
        return n.join("")
    }
    getStringWithCharsetAt(e, t, n) {
        var r, a = this.getBytesAt(e, t);
        switch ((n || "").toLowerCase()) {
            case "utf-16":
            case "utf-16le":
            case "utf-16be":
                r = function (e, t, n) {
                    return n = Math.min(n || e.length, e.length), new Sv((t ? Lv : Av).decode(new Uint8Array(e.slice(0, n))), n)
                }(a, "utf-16be" === n);
                break;
            case "utf-8":
                r = function (e, t) {
                    return t = Math.min(t || e.length, e.length), new Sv(_v.decode(new Uint8Array(e.slice(0, t))), t)
                }(a);
                break;
            default:
                r = Tv(a)
        }
        return r
    }
    getCharAt(e) {
        return String.fromCharCode(this.getByteAt(e))
    }
    getSynchsafeInteger32At(e) {
        var t = this.getByteAt(e),
            n = this.getByteAt(e + 1),
            r = this.getByteAt(e + 2);
        return 127 & this.getByteAt(e + 3) | (127 & r) << 7 | (127 & n) << 14 | (127 & t) << 21
    }
},
    Fv = class {
        constructor(e) {
            r(this, "_mediaFileReader"), r(this, "_tags"), this._mediaFileReader = e, this._tags = null
        }
        static getTagIdentifierByteRange() {
            throw new Error("Must implement")
        }
        static canReadTagFormat(e) {
            throw new Error("Must implement")
        }
        setTagsToRead(e) {
            return this._tags = e, this
        }
        read(e) {
            var t = this;
            this._mediaFileReader.init({
                onSuccess() {
                    t._loadData(t._mediaFileReader, {
                        onSuccess() {
                            try {
                                var n = t._parseData(t._mediaFileReader, t._tags);
                                e.onSuccess(n)
                            } catch (r) {
                                if (e.onError) return void e.onError({
                                    type: "parseData",
                                    info: r.message
                                })
                            }
                        },
                        onError: e.onError
                    })
                },
                onError: e.onError
            })
        }
        getShortcuts() {
            return {}
        }
        _loadData(e, t) {
            throw new Error("Must implement _loadData function")
        }
        _parseData(e, t) {
            throw new Error("Must implement _parseData function")
        }
        _expandShortcutTags(e) {
            if (!e) return null;
            for (var t, n = [], r = this.getShortcuts(), a = 0; t = e[a]; a++) n = n.concat(r[t] || [t]);
            return n
        }
    },
    $v = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "Acapella", "Euro-House", "Dance Hall"],
    Pv = class extends Ev {
        constructor(e) {
            super(), r(this, "_array"), r(this, "_size"), this._array = e, this._size = e.length, this._isInitialized = !0
        }
        static canReadFile(e) {
            return Array.isArray(e)
        }
        init(e) {
            setTimeout(e.onSuccess, 0)
        }
        loadRange(e, t) {
            setTimeout(t.onSuccess, 0)
        }
        getByteAt(e) {
            if (e >= this._array.length) throw new Error("Offset " + e + " hasn't been loaded yet.");
            return this._array[e]
        }
    },
    Vv = {
        TAL: "Album/Movie/Show title",
        TBP: "BPM (Beats Per Minute)",
        TCM: "Composer",
        TCO: "Content type",
        TCR: "Copyright message",
        TDA: "Date",
        TDY: "Playlist delay",
        TEN: "Encoded by",
        TFT: "File type",
        TIM: "Time",
        TKE: "Initial key",
        TLA: "Language(s)",
        TLE: "Length",
        TMT: "Media type",
        TOA: "Original artist(s)/performer(s)",
        TOF: "Original filename",
        TOL: "Original Lyricist(s)/text writer(s)",
        TOR: "Original release year",
        TOT: "Original album/Movie/Show title",
        TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
        TP2: "Band/Orchestra/Accompaniment",
        TP3: "Conductor/Performer refinement",
        TP4: "Interpreted, remixed, or otherwise modified by",
        TPA: "Part of a set",
        TPB: "Publisher",
        TRC: "ISRC (International Standard Recording Code)",
        TRD: "Recording dates",
        TRK: "Track number/Position in set",
        TSI: "Size",
        TSS: "Software/hardware and settings used for encoding",
        TT1: "Content group description",
        TT2: "Title/Songname/Content description",
        TT3: "Subtitle/Description refinement",
        TXT: "Lyricist/text writer",
        TXX: "User defined text information frame",
        TYE: "Year",
        TALB: "Album/Movie/Show title",
        TBPM: "BPM (beats per minute)",
        TCOM: "Composer",
        TCON: "Content type",
        TCOP: "Copyright message",
        TDAT: "Date",
        TDLY: "Playlist delay",
        TDRC: "Recording time",
        TDRL: "Release time",
        TDTG: "Tagging time",
        TENC: "Encoded by",
        TEXT: "Lyricist/Text writer",
        TFLT: "File type",
        TIME: "Time",
        TIPL: "Involved people list",
        TIT1: "Content group description",
        TIT2: "Title/songname/content description",
        TIT3: "Subtitle/Description refinement",
        TKEY: "Initial key",
        TLAN: "Language(s)",
        TLEN: "Length",
        TMCL: "Musician credits list",
        TMED: "Media type",
        TMOO: "Mood",
        TOAL: "Original album/movie/show title",
        TOFN: "Original filename",
        TOLY: "Original lyricist(s)/text writer(s)",
        TOPE: "Original artist(s)/performer(s)",
        TORY: "Original release year",
        TOWN: "File owner/licensee",
        TPE1: "Lead performer(s)/Soloist(s)",
        TPE2: "Band/orchestra/accompaniment",
        TPE3: "Conductor/performer refinement",
        TPE4: "Interpreted, remixed, or otherwise modified by",
        TPOS: "Part of a set",
        TPRO: "Produced notice",
        TPUB: "Publisher",
        TRCK: "Track number/Position in set",
        TRDA: "Recording dates",
        TRSN: "Internet radio station name",
        TRSO: "Internet radio station owner",
        TSOA: "Album sort order",
        TSOP: "Performer sort order",
        TSOT: "Title sort order",
        TSIZ: "Size",
        TSRC: "ISRC (international standard recording code)",
        TSSE: "Software/Hardware and settings used for encoding",
        TSST: "Set subtitle",
        TYER: "Year",
        TXXX: "User defined text information frame",
        WAF: "Official audio file webpage",
        WAR: "Official artist/performer webpage",
        WAS: "Official audio source webpage",
        WCM: "Commercial information",
        WCP: "Copyright/Legal information",
        WPB: "Publishers official webpage",
        WXX: "User defined URL link frame",
        WCOM: "Commercial information",
        WCOP: "Copyright/Legal information",
        WOAF: "Official audio file webpage",
        WOAR: "Official artist/performer webpage",
        WOAS: "Official audio source webpage",
        WORS: "Official internet radio station homepage",
        WPAY: "Payment",
        WPUB: "Publishers official webpage",
        WXXX: "User defined URL link frame",
        BUF: "Recommended buffer size",
        CNT: "Play counter",
        COM: "Comments",
        CRA: "Audio encryption",
        CRM: "Encrypted meta frame",
        ETC: "Event timing codes",
        EQU: "Equalization",
        GEO: "General encapsulated object",
        IPL: "Involved people list",
        LNK: "Linked information",
        MCI: "Music CD Identifier",
        MLL: "MPEG location lookup table",
        PIC: "Attached picture",
        POP: "Popularimeter",
        REV: "Reverb",
        RVA: "Relative volume adjustment",
        SLT: "Synchronized lyric/text",
        STC: "Synced tempo codes",
        UFI: "Unique file identifier",
        ULT: "Unsychronized lyric/text transcription",
        AENC: "Audio encryption",
        APIC: "Attached picture",
        ASPI: "Audio seek point index",
        CHAP: "Chapter",
        CTOC: "Table of contents",
        COMM: "Comments",
        COMR: "Commercial frame",
        ENCR: "Encryption method registration",
        EQU2: "Equalisation (2)",
        EQUA: "Equalization",
        ETCO: "Event timing codes",
        GEOB: "General encapsulated object",
        GRID: "Group identification registration",
        IPLS: "Involved people list",
        LINK: "Linked information",
        MCDI: "Music CD identifier",
        MLLT: "MPEG location lookup table",
        OWNE: "Ownership frame",
        PRIV: "Private frame",
        PCNT: "Play counter",
        POPM: "Popularimeter",
        POSS: "Position synchronisation frame",
        RBUF: "Recommended buffer size",
        RVA2: "Relative volume adjustment (2)",
        RVAD: "Relative volume adjustment",
        RVRB: "Reverb",
        SEEK: "Seek frame",
        SYLT: "Synchronized lyric/text",
        SYTC: "Synchronized tempo codes",
        UFID: "Unique file identifier",
        USER: "Terms of use",
        USLT: "Unsychronized lyric/text transcription"
    },
    Mv = class e {
        static getFrameReaderFunction(e) {
            return e in Rv ? Hv[e] ?? null : e.startsWith("T") ? jv : (e.startsWith("W"), null)
        }
        static readFrames(t, n, r, a, o) {
            for (var l = {}, i = this._getFrameHeaderSize(a); t < n - i;) {
                var s = this._readFrameHeader(r, t, a),
                    u = s.id;
                if (!u) break;
                var c = s.flags,
                    d = s.size,
                    p = t + s.headerSize,
                    f = r;
                if (t += s.headerSize + s.size, o && -1 === o.indexOf(u)) continue;
                if ("MP3e" === u || "\0MP3" === u || "\0\0MP" === u || " MP3" === u) break;
                c && c.format.unsynchronisation && !a.flags.unsynchronisation && (f = this.getUnsyncFileReader(f, p, d), p = 0, d = f.getSize()), c && c.format.data_length_indicator && (p += 4, d -= 4);
                var v = e.getFrameReaderFunction(u),
                    g = v ? v.apply(this, [p, d, f, c, a]) : null,
                    h = {
                        id: u,
                        size: d,
                        description: this._getFrameDescription(u),
                        data: g
                    };
                let n = u;
                u in l ? (l[u].id && (l[n] = [l[n]]), l[n].push(h)) : l[n] = h
            }
            return l
        }
        static _getFrameHeaderSize(e) {
            var t = e.major;
            return 2 == t ? 6 : 3 == t || 4 == t ? 10 : 0
        }
        static _readFrameHeader(e, t, n) {
            var r = n.major,
                a = null,
                o = this._getFrameHeaderSize(n);
            let l = "",
                i = 0;
            switch (r) {
                case 2:
                    l = e.getStringAt(t, 3), i = e.getInteger24At(t + 3, !0);
                    break;
                case 3:
                    l = e.getStringAt(t, 4), i = e.getLongAt(t + 4, !0);
                    break;
                case 4:
                    l = e.getStringAt(t, 4), i = e.getSynchsafeInteger32At(t + 4)
            }
            return l != String.fromCharCode(0, 0, 0) && l != String.fromCharCode(0, 0, 0, 0) || (l = ""), l && r > 2 && (a = this._readFrameFlags(e, t + 8)), {
                id: l || "",
                size: i,
                headerSize: o || 0,
                flags: a
            }
        }
        static _readFrameFlags(e, t) {
            return {
                message: {
                    tag_alter_preservation: e.isBitSetAt(t, 6),
                    file_alter_preservation: e.isBitSetAt(t, 5),
                    read_only: e.isBitSetAt(t, 4)
                },
                format: {
                    grouping_identity: e.isBitSetAt(t + 1, 7),
                    compression: e.isBitSetAt(t + 1, 3),
                    encryption: e.isBitSetAt(t + 1, 2),
                    unsynchronisation: e.isBitSetAt(t + 1, 1),
                    data_length_indicator: e.isBitSetAt(t + 1, 0)
                }
            }
        }
        static _getFrameDescription(e) {
            return e in Vv ? Vv[e] : "Unknown"
        }
        static getUnsyncFileReader(e, t, n) {
            for (var r = e.getBytesAt(t, n), a = 0; a < r.length - 1; a++) 255 === r[a] && 0 === r[a + 1] && r.splice(a + 1, 1);
            return new Pv(r)
        }
    },
    Rv = {
        APIC: Dv,
        PIC: Dv,
        CHAP(e, t, n, r, a) {
            let o = e,
                l = {},
                i = Tv(n.getBytesAt(e, t));
            if (l.id = i.toString(), e += i.bytesReadCount, l.startTime = n.getLongAt(e, !0), e += 4, l.endTime = n.getLongAt(e, !0), e += 4, l.startOffset = n.getLongAt(e, !0), e += 4, l.endOffset = n.getLongAt(e, !0), !a) return l;
            let s = t - ((e += 4) - o);
            return l.subFrames = this.readFrames(e, e + s, n, a), l
        },
        CTOC(e, t, n, r, a) {
            let o = e,
                l = {
                    childElementIds: [],
                    id: void 0,
                    topLevel: void 0,
                    ordered: void 0,
                    entryCount: void 0,
                    subFrames: void 0
                };
            var i = Tv(n.getBytesAt(e, t));
            l.id = i.toString(), e += i.bytesReadCount, l.topLevel = n.isBitSetAt(e, 1), l.ordered = n.isBitSetAt(e, 0), e++, l.entryCount = n.getByteAt(e), e++;
            for (var s = 0; s < l.entryCount; s++) {
                var u = Tv(n.getBytesAt(e, t - (e - o)));
                l.childElementIds.push(u.toString()), e += u.bytesReadCount
            }
            if (!a) return l;
            var c = t - (e - o);
            return l.subFrames = this.readFrames(e, e + c, n, a), l
        },
        COMM: Nv,
        COM: Nv,
        PCNT: zv,
        CNT: zv,
        ULT: Wv,
        USLT: Wv,
        UFID(e, t, n, r, a) {
            var o = Tv(n.getBytesAt(e, t));
            e += o.bytesReadCount;
            var l = n.getBytesAt(e, t - o.bytesReadCount);
            return {
                ownerIdentifier: o.toString(),
                identifier: l
            }
        }
    },
    Iv = {
        TCO: Uv,
        TCON: Uv,
        TXXX(e, t, n, r, a) {
            var o = Gv(n.getByteAt(e));
            return Zv(e, t, n, o)
        }
    },
    Ov = {
        WXXX(e, t, n, r, a) {
            if (0 === t) return null;
            var o = Gv(n.getByteAt(e));
            return Zv(e, t, n, o)
        }
    },
    Hv = {
        ...Rv,
        ...Iv,
        ...Ov
    },
    Bv = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"];

function Dv(e, t, n, r, a) {
    let o, l = e,
        i = Gv(n.getByteAt(e));
    switch (a && a.major) {
        case 2:
            o = n.getStringAt(e + 1, 3), e += 4;
            break;
        case 3:
        case 4:
            o = n.getStringWithCharsetAt(e + 1, t - 1), e += 1 + o.bytesReadCount;
            break;
        default:
            throw new Error("Couldn't read ID3v2 major version.")
    }
    let s = n.getByteAt(e),
        u = Bv[s],
        c = n.getStringWithCharsetAt(e + 1, t - (e - l) - 1, i);
    return e += 1 + c.bytesReadCount, {
        format: o.toString(),
        type: u,
        description: c.toString(),
        data: n.getBytesAt(e, l + t - e)
    }
}

function Nv(e, t, n, r, a) {
    var o = e,
        l = Gv(n.getByteAt(e)),
        i = n.getStringAt(e + 1, 3),
        s = n.getStringWithCharsetAt(e + 4, t - 4, l);
    e += 4 + s.bytesReadCount;
    var u = n.getStringWithCharsetAt(e, o + t - e, l);
    return {
        language: i,
        short_description: s.toString(),
        text: u.toString()
    }
}

function zv(e, t, n, r, a) {
    return n.getLongAt(e, !1)
}

function jv(e, t, n, r, a) {
    var o = Gv(n.getByteAt(e));
    return n.getStringWithCharsetAt(e + 1, t - 1, o).toString()
}

function Uv(e, t, n, r) {
    return jv.apply(this, [e, t, n, r]).replace(/^\(\d+\)/, "")
}

function Wv(e, t, n, r, a) {
    var o = e,
        l = Gv(n.getByteAt(e)),
        i = n.getStringAt(e + 1, 3),
        s = n.getStringWithCharsetAt(e + 4, t - 4, l);
    e += 4 + s.bytesReadCount;
    var u = n.getStringWithCharsetAt(e, o + t - e, l);
    return {
        language: i,
        descriptor: s.toString(),
        lyrics: u.toString()
    }
}

function Gv(e) {
    var t;
    switch (e) {
        case 0:
        default:
            t = "iso-8859-1";
            break;
        case 1:
            t = "utf-16";
            break;
        case 2:
            t = "utf-16be";
            break;
        case 3:
            t = "utf-8"
    }
    return t
}

function Zv(e, t, n, r) {
    var a = n.getStringWithCharsetAt(e + 1, t - 1, r),
        o = n.getStringWithCharsetAt(e + 1 + a.bytesReadCount, t - 1 - a.bytesReadCount, r);
    return {
        user_description: a.toString(),
        data: o.toString()
    }
}
var qv = {
    title: ["TIT2", "TT2"],
    artist: ["TPE1", "TP1"],
    album: ["TALB", "TAL"],
    year: ["TYER", "TYE"],
    comment: ["COMM", "COM"],
    track: ["TRCK", "TRK"],
    genre: ["TCON", "TCO"],
    picture: ["APIC", "PIC"],
    lyrics: ["USLT", "ULT"]
},
    Yv = {
        0: "uint8",
        1: "text",
        13: "jpeg",
        14: "png",
        21: "int",
        22: "uint"
    },
    Kv = {
        "©alb": "Album",
        "©ART": "Artist",
        aART: "Album Artist",
        "©day": "Release Date",
        "©nam": "Title",
        "©gen": "Genre",
        gnre: "Genre",
        trkn: "Track Number",
        "©wrt": "Composer",
        "©too": "Encoding Tool",
        "©enc": "Encoded By",
        cprt: "Copyright",
        covr: "Cover Art",
        "©grp": "Grouping",
        keyw: "Keywords",
        "©lyr": "Lyrics",
        "©cmt": "Comment",
        tmpo: "Tempo",
        cpil: "Compilation",
        disk: "Disc Number",
        tvsh: "TV Show Name",
        tven: "TV Episode ID",
        tvsn: "TV Season",
        tves: "TV Episode",
        tvnn: "TV Network",
        desc: "Description",
        ldes: "Long Description",
        sonm: "Sort Name",
        soar: "Sort Artist",
        soaa: "Sort Album",
        soco: "Sort Composer",
        sosn: "Sort Show",
        purd: "Purchase Date",
        pcst: "Podcast",
        purl: "Podcast URL",
        catg: "Category",
        hdvd: "HD Video",
        stik: "Media Type",
        rtng: "Content Rating",
        pgap: "Gapless Playback",
        apID: "Purchase Account",
        sfID: "Country Code",
        atID: "Artist ID",
        cnID: "Catalog ID",
        plID: "Collection ID",
        geID: "Genre ID",
        "xid ": "Vendor Information",
        flvr: "Codec Flavor"
    },
    Xv = {
        title: "©nam",
        artist: "©ART",
        album: "©alb",
        year: "©day",
        comment: "©cmt",
        track: "trkn",
        genre: "©gen",
        picture: "covr",
        lyrics: "©lyr"
    },
    Jv = [4, 132],
    Qv = [6, 134],
    eg = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"],
    tg = new TextDecoder,
    ng = (e, t, n) => String.fromCharCode.apply(String, e.slice(t, t + n)),
    rg = (e, t, n) => tg.decode(new Uint8Array(e.slice(t, t + n))),
    ag = (e, t) => e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24,
    og = (e, t) => e[t++] << 24 | e[t++] << 16 | e[t++] << 8 | e[t++],
    lg = [],
    ig = [];

function sg(e, t) {
    const n = e.offset >= 0 && e.offset + e.length >= t,
        r = e.offset < 0 && (-e.offset > t || e.offset + e.length > 0);
    return !(n || r)
}
var ug = class {
    constructor(e) {
        r(this, "_file"), r(this, "_tagsToRead", []), r(this, "_fileReader"), r(this, "_tagReader"), this._file = e
    }
    setTagsToRead(e) {
        return this._tagsToRead = e, this
    }
    setFileReader(e) {
        return this._fileReader = e, this
    }
    setTagReader(e) {
        return this._tagReader = e, this
    }
    read(e) {
        var t = new (this._getFileReader())(this._file),
            n = this;
        t.init({
            onSuccess() {
                n._getTagReader(t, {
                    onSuccess(r) {
                        new r(t).setTagsToRead(n._tagsToRead).read(e)
                    },
                    onError: e.onError
                })
            },
            onError: e.onError
        })
    }
    _getFileReader() {
        return this._fileReader ? this._fileReader : this._findFileReader()
    }
    _findFileReader() {
        for (var e = 0; e < lg.length; e++)
            if (lg[e].canReadFile(this._file)) return lg[e];
        throw new Error("No suitable file reader found for " + this._file)
    }
    _getTagReader(e, t) {
        if (this._tagReader) {
            var n = this._tagReader;
            setTimeout((function () {
                t.onSuccess(n)
            }), 1)
        } else this._findTagReader(e, t)
    }
    _findTagReader(e, t) {
        for (var n = [], r = [], a = e.getSize(), o = 0; o < ig.length; o++) {
            var l = ig[o].getTagIdentifierByteRange();
            sg(l, a) && (l.offset >= 0 && l.offset < a / 2 || l.offset < 0 && l.offset < -a / 2 ? n.push(ig[o]) : r.push(ig[o]))
        }
        var i = !1,
            s = {
                onSuccess() {
                    if (i) {
                        for (var n = 0; n < ig.length; n++) {
                            var r = ig[n].getTagIdentifierByteRange();
                            if (sg(r, a)) {
                                try {
                                    var o = e.getBytesAt(r.offset >= 0 ? r.offset : r.offset + a, r.length)
                                } catch (l) {
                                    return void (t.onError && t.onError({
                                        type: "fileReader",
                                        info: l.message
                                    }))
                                }
                                if (ig[n].canReadTagFormat(o)) return void t.onSuccess(ig[n])
                            }
                        }
                        t.onError && t.onError({
                            type: "tagFormat",
                            info: "No suitable tag reader found"
                        })
                    } else i = !0
                },
                onError: t.onError
            };
        this._loadTagIdentifierRanges(e, n, s), this._loadTagIdentifierRanges(e, r, s)
    }
    _loadTagIdentifierRanges(e, t, n) {
        if (0 !== t.length) {
            for (var r = [Number.MAX_VALUE, 0], a = e.getSize(), o = 0; o < t.length; o++) {
                var l = t[o].getTagIdentifierByteRange(),
                    i = l.offset >= 0 ? l.offset : l.offset + a,
                    s = i + l.length - 1;
                r[0] = Math.min(i, r[0]), r[1] = Math.max(s, r[1])
            }
            e.loadRange(r, n)
        } else setTimeout(n.onSuccess, 1)
    }
};
(class e {
    static addFileReader(t) {
        return lg.push(t), e
    }
    static addTagReader(t) {
        return ig.push(t), e
    }
    static removeTagReader(t) {
        var n = ig.indexOf(t);
        return n >= 0 && ig.splice(n, 1), e
    }
}).addFileReader(class extends Ev {
    constructor(e) {
        super(), r(this, "_url"), r(this, "_fileData"), this._url = e, this._fileData = new Cv
    }
    static canReadFile(e) {
        return URL.canParse(e)
    }
    _init(e) {
        fetch(this._url, {
            method: "HEAD"
        }).then((t => {
            this._size = parseInt(t.headers.get("Content-Length")), e.onSuccess()
        })).catch(e.onError)
    }
    loadRange(e, t) {
        if (this._fileData.hasDataRange(e[0], Math.min(this._size, e[1]))) return void t.onSuccess();
        const n = [e[0], Math.min(e[0] + 1024 * Math.ceil((e[1] - e[0] + 1) / 1024), this._size) - 1];
        fetch(this._url, {
            headers: {
                Range: `bytes=${n[0]}-${n[1]}`
            }
        }).then((e => {
            if (200 === e.status || 206 === e.status) return e.arrayBuffer();
            throw new Error(`Unexpected HTTP status ${e.status}.`)
        })).then((e => {
            this._fileData.addData(n[0], new Uint8Array(e)), t.onSuccess()
        })).catch(t.onError)
    }
    getByteAt(e) {
        return this._fileData.getByteAt(e)
    }
}).addTagReader(class extends Fv {
    static getTagIdentifierByteRange() {
        return {
            offset: 0,
            length: 10
        }
    }
    static canReadTagFormat(e) {
        return "ID3" === String.fromCharCode.apply(String, e.slice(0, 3))
    }
    _loadData(e, t) {
        e.loadRange([6, 9], {
            onSuccess() {
                e.loadRange([0, 10 + e.getSynchsafeInteger32At(6) - 1], t)
            },
            onError: t.onError
        })
    }
    _parseData(e, t) {
        var n = 0,
            r = e.getByteAt(n + 3);
        if (r > 4) return {
            type: "ID3",
            version: ">2.4",
            tags: {}
        };
        var a = e.getByteAt(n + 4),
            o = e.isBitSetAt(n + 5, 7),
            l = e.isBitSetAt(n + 5, 6),
            i = e.isBitSetAt(n + 5, 5),
            s = e.getSynchsafeInteger32At(n + 6);
        n += 10, l && (n += 4 === r ? e.getSynchsafeInteger32At(n) : e.getLongAt(n, !0) + 4);
        var u = {
            type: "ID3",
            version: "2." + r + "." + a,
            major: r,
            revision: a,
            flags: {
                unsynchronisation: o,
                extended_header: l,
                experimental_indicator: i,
                footer_present: !1
            },
            size: s,
            tags: {}
        };
        let c = null;
        t && (c = this._expandShortcutTags(t));
        var d = s + 10;
        u.flags.unsynchronisation && (e = Mv.getUnsyncFileReader(e, n, s), n = 0, d = e.getSize());
        var p = Mv.readFrames(n, d, e, u, c);
        for (var f in qv)
            if (qv.hasOwnProperty(f)) {
                var v = this._getFrameData(p, qv[f]);
                v && (u.tags[f] = v)
            } for (var g in p) p.hasOwnProperty(g) && (u.tags[g] = p[g]);
        return u
    }
    _getFrameData(e, t) {
        for (var n, r, a, o = 0; a = t[o]; o++)
            if (a in e) {
                if (e[a] instanceof Array) {
                    if (!(null == (n = e[a]) ? void 0 : n[0])) throw new Error("WHO THE FUCK WROTE THIS!? AND WHY WAS FLOW OK WITH IT????");
                    r = e[a][0]
                } else r = e[a];
                return r.data
            } return null
    }
    getShortcuts() {
        return qv
    }
}).addTagReader(class extends Fv {
    static getTagIdentifierByteRange() {
        return {
            offset: -128,
            length: 128
        }
    }
    static canReadTagFormat(e) {
        return "TAG" === String.fromCharCode.apply(String, e.slice(0, 3))
    }
    _loadData(e, t) {
        var n = e.getSize();
        e.loadRange([n - 128, n - 1], t)
    }
    _parseData(e, t) {
        var n = e.getSize() - 128,
            r = e.getStringWithCharsetAt(n + 3, 30).toString(),
            a = e.getStringWithCharsetAt(n + 33, 30).toString(),
            o = e.getStringWithCharsetAt(n + 63, 30).toString(),
            l = e.getStringWithCharsetAt(n + 93, 4).toString(),
            i = e.getByteAt(n + 97 + 28),
            s = e.getByteAt(n + 97 + 29);
        if (0 == i && 0 != s) var u = "1.1",
            c = e.getStringWithCharsetAt(n + 97, 28).toString();
        else u = "1.0", c = e.getStringWithCharsetAt(n + 97, 30).toString(), s = 0;
        var d = e.getByteAt(n + 97 + 30);
        if (d < 255) var p = $v[d];
        else p = "";
        var f = {
            type: "ID3",
            version: u,
            tags: {
                title: r,
                artist: a,
                album: o,
                year: l,
                comment: c,
                genre: p
            }
        };
        return s && (f.tags.track = s), f
    }
}).addTagReader(class extends Fv {
    static getTagIdentifierByteRange() {
        return {
            offset: 0,
            length: 16
        }
    }
    static canReadTagFormat(e) {
        return "ftyp" === String.fromCharCode.apply(String, e.slice(4, 8))
    }
    _loadData(e, t) {
        var n = this;
        e.loadRange([0, 16], {
            onSuccess() {
                n._loadAtom(e, 0, "", t)
            },
            onError: t.onError
        })
    }
    _loadAtom(e, t, n, r) {
        if (t >= e.getSize()) r.onSuccess();
        else {
            var a = this,
                o = e.getLongAt(t, !0);
            if (0 == o || isNaN(o)) r.onSuccess();
            else {
                var l = e.getStringAt(t + 4, 4);
                if (this._isContainerAtom(l)) {
                    "meta" == l && (t += 4);
                    var i = (n ? n + "." : "") + l;
                    "moov.udta.meta.ilst" === i ? e.loadRange([t, t + o], r) : e.loadRange([t + 8, t + 8 + 8], {
                        onSuccess() {
                            a._loadAtom(e, t + 8, i, r)
                        },
                        onError: r.onError
                    })
                } else e.loadRange([t + o, t + o + 8], {
                    onSuccess() {
                        a._loadAtom(e, t + o, n, r)
                    },
                    onError: r.onError
                })
            }
        }
    }
    _isContainerAtom(e) {
        return ["moov", "udta", "meta", "ilst"].indexOf(e) >= 0
    }
    _canReadAtom(e) {
        return "----" !== e
    }
    _parseData(e, t) {
        var n = {};
        for (var r in t = this._expandShortcutTags(t), this._readAtom(n, e, 0, e.getSize(), t), Xv)
            if (Xv.hasOwnProperty(r)) {
                var a = n[Xv[r]];
                a && (n[r] = "track" === r ? a.data.track : a.data)
            } return {
                type: "MP4",
                ftyp: e.getStringAt(8, 4),
                version: e.getLongAt(12, !0).toString(),
                tags: n
            }
    }
    _readAtom(e, t, n, r, a, o, l) {
        l = void 0 === l ? "" : l + "  ";
        for (var i = n; i < n + r;) {
            var s = t.getLongAt(i, !0);
            if (0 == s) return;
            var u = t.getStringAt(i + 4, 4);
            if (this._isContainerAtom(u)) {
                "meta" == u && (i += 4);
                var c = (o ? o + "." : "") + u;
                return void this._readAtom(e, t, i + 8, s - 8, a, c, l)
            } (!a || a.indexOf(u) >= 0) && "moov.udta.meta.ilst" === o && this._canReadAtom(u) && (e[u] = this._readMetadataAtom(t, i)), i += s
        }
    }
    _readMetadataAtom(e, t) {
        var n = e.getLongAt(t, !0),
            r = e.getStringAt(t + 4, 4),
            a = e.getInteger24At(t + 16 + 1, !0),
            o = Yv[a] ?? 0,
            l = !0;
        if ("trkn" == r) i = {
            track: e.getShortAt(t + 16 + 10, l),
            total: e.getShortAt(t + 16 + 14, l)
        };
        else if ("disk" == r) i = {
            disk: e.getShortAt(t + 16 + 10, l),
            total: e.getShortAt(t + 16 + 14, l)
        };
        else {
            var i, s = t + 24,
                u = n - 24;
            switch ("covr" === r && "uint8" === o && (o = "jpeg"), o) {
                case "text":
                    i = e.getStringWithCharsetAt(s, u, "utf-8").toString();
                    break;
                case "uint8":
                    i = e.getShortAt(s, !1);
                    break;
                case "int":
                case "uint":
                    i = ("int" == o ? 1 == u ? e.getSByteAt : 2 == u ? e.getSShortAt : 4 == u ? e.getSLongAt : e.getLongAt : 1 == u ? e.getByteAt : 2 == u ? e.getShortAt : e.getLongAt).call(e, s + (8 == u ? 4 : 0), !0);
                    break;
                case "jpeg":
                case "png":
                    i = {
                        format: "image/" + o,
                        data: e.getBytesAt(s, u)
                    }
            }
        }
        return {
            id: r,
            size: n,
            description: Kv[r] || "Unknown",
            data: i
        }
    }
    getShortcuts() {
        return Xv
    }
}).addTagReader(class extends Fv {
    constructor() {
        super(...arguments), r(this, "_commentOffset", 0), r(this, "_pictureOffset", 0)
    }
    static getTagIdentifierByteRange() {
        return {
            offset: 0,
            length: 4
        }
    }
    static canReadTagFormat(e) {
        return "fLaC" === String.fromCharCode.apply(String, e.slice(0, 4))
    }
    _loadData(e, t) {
        var n = this;
        e.loadRange([4, 7], {
            onSuccess() {
                n._loadBlock(e, 4, t)
            }
        })
    }
    _loadBlock(e, t, n) {
        var r = this,
            a = e.getByteAt(t),
            o = e.getInteger24At(t + 1, !0);
        if (-1 !== Jv.indexOf(a)) {
            var l = t + 4;
            e.loadRange([l, l + o], {
                onSuccess() {
                    r._commentOffset = l, r._nextBlock(e, t, a, o, n)
                }
            })
        } else - 1 !== Qv.indexOf(a) ? (l = t + 4, e.loadRange([l, l + o], {
            onSuccess() {
                r._pictureOffset = l, r._nextBlock(e, t, a, o, n)
            }
        })) : r._nextBlock(e, t, a, o, n)
    }
    _nextBlock(e, t, n, r, a) {
        var o, l = this;
        n > 127 ? l._commentOffset ? a.onSuccess() : null == (o = a.onError) || o.call(a, {
            type: "loadData",
            info: "Comment block could not be found."
        }) : e.loadRange([t + 4 + r, t + 4 + 4 + r], {
            onSuccess() {
                l._loadBlock(e, t + 4 + r, a)
            }
        })
    }
    _parseData(e, t) {
        var n, r, a, o, l, i, s = e.getLongAt(this._commentOffset, !1) + (this._commentOffset + 4),
            u = e.getLongAt(s, !1),
            c = s + 4;
        for (let S = 0; S < u; S++) {
            let t = e.getLongAt(c, !1),
                i = e.getStringWithCharsetAt(c + 4, t, "utf-8").toString(),
                s = i.indexOf("="),
                u = [i.slice(0, s), i.slice(s + 1)];
            switch (u[0].toUpperCase()) {
                case "TITLE":
                    n = u[1];
                    break;
                case "ARTIST":
                    r = u[1];
                    break;
                case "ALBUM":
                    a = u[1];
                    break;
                case "TRACKNUMBER":
                    o = u[1];
                    break;
                case "GENRE":
                    l = u[1]
            }
            c += 4 + t
        }
        if (this._pictureOffset) {
            var d = e.getLongAt(this._pictureOffset, !0),
                p = this._pictureOffset + 4,
                f = e.getLongAt(p, !0),
                v = p + 4,
                g = e.getStringAt(v, f),
                h = v + f,
                m = e.getLongAt(h, !0),
                y = h + 4,
                b = e.getStringWithCharsetAt(y, m, "utf-8").toString(),
                k = y + m + 16,
                w = e.getLongAt(k, !0),
                x = k + 4,
                C = e.getBytesAt(x, w);
            i = {
                format: g,
                type: eg[d],
                description: b,
                data: C
            }
        }
        return {
            type: "FLAC",
            version: "1",
            tags: {
                title: n,
                artist: r,
                album: a,
                track: o,
                genre: l,
                picture: i
            }
        }
    }
}).addTagReader(class extends Fv {
    constructor(e) {
        super(e), r(this, "offset"), r(this, "packets"), this.offset = 0, this.packets = []
    }
    static getTagIdentifierByteRange() {
        return {
            offset: 0,
            length: 4
        }
    }
    static canReadTagFormat(e) {
        return "OggS" === String.fromCharCode.apply(String, e.slice(0, 4))
    }
    _loadData(e, t) {
        (async () => {
            try {
                let n = !0;
                for (; ;) {
                    await new Promise(((t, n) => e.loadRange([this.offset, this.offset + 27 - 1], {
                        onSuccess: t,
                        onError: n
                    })));
                    const r = e.getStringAt(this.offset, 4);
                    this.offset += 26;
                    const a = e.getByteAt(this.offset);
                    this.offset += 1, await new Promise(((t, n) => e.loadRange([this.offset, this.offset + a - 1], {
                        onSuccess: t,
                        onError: n
                    })));
                    const o = e.getBytesAt(this.offset, a);
                    if (this.offset += a, "OggS" !== r) throw new Error("Incorrect OGG page header");
                    let l = 0;
                    for (let i = 0; i < o.length; i++)
                        if (n && (this.packets.push([]), n = !1, l = 0), l += o[i], o[i] < 255 || i === o.length - 1) {
                            await new Promise(((t, n) => e.loadRange([this.offset, this.offset + l - 1], {
                                onSuccess: t,
                                onError: n
                            })));
                            const r = e.getBytesAt(this.offset, l);
                            if (this.offset += l, this.packets[this.packets.length - 1] = this.packets[this.packets.length - 1].concat(r), (n = o[i] < 255) && this.packets.length >= 2) return t.onSuccess()
                        }
                }
            } catch (n) {
                t.onError(n)
            }
        })()
    }
    _parseData(e, t) {
        var n;
        const r = {
            type: "",
            tags: {}
        },
            a = this.packets[1];
        let o;
        if (3 === a[0] && "vorbis" === ng(a, 1, 6)) r.type = "Vorbis", o = 7;
        else {
            if ("OpusTags" !== ng(a, 0, 8)) throw new Error("Unknown packet data");
            r.type = "Opus", o = 8
        }
        o += 4 + ag(a, o);
        const l = ag(a, o);
        o += 4;
        for (let i = 0; i < l; i++) {
            const e = ag(a, o);
            o += 4;
            const t = rg(a, o, e);
            o += e;
            let [l, i] = t.split("=", 2);
            switch (l = l.toUpperCase(), l) {
                case "TITLE":
                case "ARTIST":
                case "ALBUM":
                case "GENRE":
                    r.tags[l.toLowerCase()] = i;
                    break;
                case "DATE":
                case "TRACKNUMBER":
                    r.tags[{
                        DATE: "year",
                        TRACKNUMBER: "track"
                    }[l]] = i;
                    break;
                case "METADATA_BLOCK_PICTURE":
                    const e = "undefined" != typeof process && (null == (n = null == process ? void 0 : process.versions) ? void 0 : n.node) ? Array.from(Buffer.from(i, "base64")) : atob(i).split("").map((e => e.charCodeAt(0)));
                    let t = 0;
                    const a = og(e, t);
                    t += 4;
                    const o = og(e, t);
                    t += 4;
                    const s = ng(e, t, o);
                    t += o;
                    const u = og(e, t);
                    t += 4;
                    const c = ng(e, t, u);
                    t += u + 16;
                    const d = og(e, t);
                    t += 4;
                    const p = e.slice(t, t + d);
                    r.tags.picture = {
                        format: s,
                        type: ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"][a],
                        description: c,
                        data: p
                    }
            }
        }
        return r
    }
});
const cg = new class {
    constructor(e = 1) {
        this.count = e, this.pending = []
    }
    acquire() {
        return new Promise((e => {
            this.count ? (this.count--, e()) : this.pending.push((() => {
                this.count--, e()
            }))
        }))
    }
    release() {
        this.count++, this.pending.length && this.pending.shift()()
    }
}(5);
class dg {
    constructor(e, t, n, r) {
        this.url = e, this.file = t, this.onSuccess = n || (() => { }), this.onError = r || (() => { }), this.loaded = 0, this.lastUptime = 0, this.speed = 0, this.uploaded = !1, this.aborted = !1, this.xhr = null, this.fail = null
    }
    upload() {
        if (this.uploaded || this.aborted) return;
        const e = new XMLHttpRequest;
        e.addEventListener("readystatechange", (() => {
            e.readyState === XMLHttpRequest.DONE && (e.status >= 400 ? this.fail = e.statusText : e.status >= 200 && e.status < 300 && (this.uploaded = !0, this.onSuccess(), cg.release()))
        })), e.addEventListener("error", (() => {
            this.fail = "dialogUploadError", this.onError(), cg.release()
        })), e.addEventListener("abort", (() => {
            this.fail = "dialogUploadAbort", this.aborted = !0, cg.release()
        })), e.upload.addEventListener("progress", (e => {
            const t = Date.now();
            this.speed = (e.loaded - this.loaded) / (t - this.lastUptime) * 1e3, this.loaded = e.loaded, this.lastUptime = t
        })), cg.acquire().then((() => {
            this.aborted ? cg.release() : (e.open("PUT", this.url), e.send(this.file), this.lastUptime = Date.now(), this.xhr = e)
        }))
    }
}
const pg = window.__DUFS_PREFIX__.match(/^(.+)__dufs_v(\d+\.\d+\.\d+)__\/$/),
    fg = pg[1],
    vg = pg[2],
    gg = {
        mp3: ["$mdiFileMusic", "#651fff"],
        flac: ["$mdiFileMusic", "#651fff"],
        ape: ["$mdiFileMusic", "#651fff"],
        wav: ["$mdiFileMusic", "#651fff"],
        ogg: ["$mdiFileMusic", "#651fff"],
        m4a: ["$mdiFileMusic", "#651fff"],
        opus: ["$mdiFileMusic", "#651fff"],
        oga: ["$mdiFileMusic", "#651fff"],
        weba: ["$mdiFileMusic", "#651fff"],
        mp4: ["$mdiFileVideo", "#d50000"],
        flv: ["$mdiFileVideo", "#d50000"],
        wmv: ["$mdiFileVideo", "#d50000"],
        rm: ["$mdiFileVideo", "#d50000"],
        rmvb: ["$mdiFileVideo", "#d50000"],
        mkv: ["$mdiFileVideo", "#d50000"],
        webm: ["$mdiFileVideo", "#d50000"],
        avi: ["$mdiFileVideo", "#d50000"],
        m3u8: ["$mdiFileVideo", "#d50000"],
        mov: ["$mdiFileVideo", "#d50000"],
        ogv: ["$mdiFileVideo", "#d50000"],
        bmp: ["$mdiImage", "#d32f2f"],
        png: ["$mdiImage", "#d32f2f"],
        gif: ["$mdiImage", "#d32f2f"],
        jpg: ["$mdiImage", "#d32f2f"],
        jpeg: ["$mdiImage", "#d32f2f"],
        psd: ["$mdiImage", "#d32f2f"],
        webp: ["$mdiImage", "#d32f2f"],
        avif: ["$mdiImage", "#d32f2f"],
        tiff: ["$mdiImage", "#d32f2f"],
        heif: ["$mdiImage", "#d32f2f"],
        heic: ["$mdiImage", "#d32f2f"],
        svg: ["$mdiSvg", "#ff9a00"],
        txt: ["$mdiScriptText", "#607d8b"],
        md: ["$mdiScriptText", "#607d8b"],
        ini: ["$mdiScriptText", "#607d8b"],
        conf: ["$mdiScriptText", "#607d8b"],
        yml: ["$mdiScriptText", "#607d8b"],
        yaml: ["$mdiScriptText", "#607d8b"],
        toml: ["$mdiScriptText", "#607d8b"],
        zip: ["$mdiZipBox", "#f9a825"],
        tar: ["$mdiZipBox", "#f9a825"],
        gz: ["$mdiZipBox", "#f9a825"],
        bz2: ["$mdiZipBox", "#f9a825"],
        xz: ["$mdiZipBox", "#f9a825"],
        zst: ["$mdiZipBox", "#f9a825"],
        rar: ["$mdiZipBox", "#f9a825"],
        "7z": ["$mdiZipBox", "#f9a825"],
        c: ["$mdiLanguageC", "#a8b9cc"],
        h: ["$mdiLanguageC", "#a8b9cc"],
        cc: ["$mdiLanguageCpp", "#004482"],
        cpp: ["$mdiLanguageCpp", "#004482"],
        cxx: ["$mdiLanguageCpp", "#004482"],
        hpp: ["$mdiLanguageCpp", "#004482"],
        cs: ["$mdiLanguageCsharp", "#189f20"],
        go: ["$mdiLanguageGo", "#16b3da"],
        java: ["$mdiLanguageJava", "#da1e21"],
        js: ["$mdiLanguageJavascript", "#f4d003"],
        jsx: ["$mdiLanguageTypescript", "#f4d003"],
        cjs: ["$mdiLanguageJavascript", "#f4d003"],
        mjs: ["$mdiLanguageTypescript", "#f4d003"],
        ts: ["$mdiLanguageTypescript", "#2f74c0"],
        tsx: ["$mdiLanguageTypescript", "#2f74c0"],
        php: ["$mdiLanguagePhp", "#777bb3"],
        py: ["$mdiLanguagePython", "#3776ab"],
        pyi: ["$mdiLanguagePython", "#3776ab"],
        pyc: ["$mdiLanguagePython", "#3776ab"],
        pyx: ["$mdiLanguagePython", "#3776ab"],
        html: ["$mdiLanguageHtml5", "#e37933"],
        css: ["$mdiLanguageCss3", "#519aba"],
        lua: ["$mdiLanguageLua", "#00007c"],
        rs: ["$mdiLanguageRust", "#000"],
        kt: ["$mdiLanguageKotlin", "#7f52ff"],
        dockerfile: ["$mdiDocker", "#2962cd"],
        gitignore: ["$mdiGit", "#e84d31"],
        ps1: ["$mdiPowershell", "#256db8"],
        json: ["$mdiCodeJson", "#cbcb41"],
        sh: ["$mdiScriptText", "#607d8b"],
        cmd: ["$mdiScriptText", "#607d8b"],
        bat: ["$mdiScriptText", "#607d8b"],
        vue: ["$mdiVuejs", "#8dc149"],
        doc: ["$mdiFileWord", "#538ce5"],
        docx: ["$mdiFileWord", "#538ce5"],
        xls: ["$mdiFileExcel", "#4caf50"],
        xlsx: ["$mdiFileExcel", "#4caf50"],
        ppt: ["$mdiFilePowerpoint", "#ef633f"],
        pptx: ["$mdiFilePowerpoint", "#ef633f"],
        pdf: ["$mdiFilePdfBox", "#f44336"],
        epub: ["$mdiBook", "#81b315"],
        torrent: ["$mdiMagnetOn", "#5c6bc0"],
        exe: ["$mdiWindowRestore", "#1a237e"],
        apk: ["$mdiAndroid", "#8bc34a"]
    },
    hg = {
        c: "c",
        h: "c",
        cc: "cpp",
        cpp: "cpp",
        cxx: "cpp",
        hpp: "cpp",
        cs: "cs",
        go: "go",
        java: "java",
        js: "js",
        jsx: "jsx",
        cjs: "js",
        mjs: "js",
        ts: "ts",
        tsx: "tsx",
        php: "php",
        py: "py",
        pyi: "py",
        pyx: "py",
        html: "html",
        css: "css",
        lua: "lua",
        rs: "rust",
        kt: "kt",
        dockerfile: "docker",
        ps1: "powershell",
        json: "json",
        sh: "sh",
        cmd: "sh",
        bat: "batch",
        vue: "html",
        ini: "ini",
        conf: "ini",
        yml: "yml",
        yaml: "yml",
        toml: "toml"
    },
    mg = e => {
        const t = e.lastIndexOf(".");
        return -1 === t ? "" : e.substring(t + 1, e.length)
    },
    yg = e => (gg[e.toLowerCase()] || ["$mdiFile", "#607d8b"])[1],
    bg = e => (gg[e.toLowerCase()] || ["$mdiFile", "#607d8b"])[0],
    kg = e => {
        const t = ["TB", "GB", "MB", "KB"];
        let n = "Bytes";
        for (; e >= 1024 && t.length;) n = t.pop(), e /= 1024;
        return `${"Bytes" === n ? e : e.toFixed(2)} ${n}`
    },
    wg = e => {
        const t = new Date(e);
        return `${t.getFullYear()}-${(t.getMonth() + 1).toString().padStart(2, 0)}-${t.getDate().toString().padStart(2, 0)} ${t.getHours().toString().padStart(2, 0)}:${t.getMinutes().toString().padStart(2, 0)}:${t.getSeconds().toString().padStart(2, 0)}`
    },
    xg = (e, t) => e.endsWith(t) ? e.substring(0, e.length - t.length) : e,
    Cg = (e, t) => {
        let n;
        return function (...r) {
            clearTimeout(n), n = setTimeout((() => e.apply(this, r)), t)
        }
    },
    Sg = ld({
        defaults: Object,
        disabled: Boolean,
        reset: [Number, String],
        root: [Boolean, String],
        scoped: Boolean
    }, "VDefaultsProvider"),
    _g = md(!1)({
        name: "VDefaultsProvider",
        props: Sg(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                defaults: r,
                disabled: a,
                reset: o,
                root: l,
                scoped: i
            } = Lt(e);
            return gd(r, {
                reset: o,
                root: l,
                scoped: i,
                disabled: a
            }), () => {
                var e;
                return null == (e = n.default) ? void 0 : e.call(n)
            }
        }
    });

function Ag(e) {
    return oc((() => {
        const t = [],
            n = {};
        if (e.value.background)
            if (qc(e.value.background)) {
                if (n.backgroundColor = e.value.background, !e.value.text && qc(r = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(r)) {
                    const t = Xc(e.value.background);
                    if (null == t.a || 1 === t.a) {
                        const e = od(t);
                        n.color = e, n.caretColor = e
                    }
                }
            } else t.push(`bg-${e.value.background}`);
        var r;
        return e.value.text && (qc(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
            colorClasses: t,
            colorStyles: n
        }
    }))
}

function Lg(e, t) {
    const n = ao((() => ({
        text: bt(e) ? e.value : t ? e[t] : null
    }))),
        {
            colorClasses: r,
            colorStyles: a
        } = Ag(n);
    return {
        textColorClasses: r,
        textColorStyles: a
    }
}

function Tg(e, t) {
    const n = ao((() => ({
        background: bt(e) ? e.value : t ? e[t] : null
    }))),
        {
            colorClasses: r,
            colorStyles: a
        } = Ag(n);
    return {
        backgroundColorClasses: r,
        backgroundColorStyles: a
    }
}
const Eg = ["x-small", "small", "default", "large", "x-large"],
    Fg = ld({
        size: {
            type: [String, Number],
            default: "default"
        }
    }, "size");

function $g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return oc((() => {
        let n, r;
        return lc(Eg, e.size) ? n = `${t}--size-${e.size}` : e.size && (r = {
            width: Ou(e.size),
            height: Ou(e.size)
        }), {
            sizeClasses: n,
            sizeStyles: r
        }
    }))
}
const Pg = ld({
    tag: {
        type: String,
        default: "div"
    }
}, "tag"),
    Vg = ld({
        color: String,
        disabled: Boolean,
        start: Boolean,
        end: Boolean,
        icon: ap,
        ...id(),
        ...Fg(),
        ...Pg({
            tag: "i"
        }),
        ...dp()
    }, "VIcon"),
    Mg = md()({
        name: "VIcon",
        props: Vg(),
        setup(e, t) {
            let {
                attrs: n,
                slots: r
            } = t;
            const a = kt(),
                {
                    themeClasses: o
                } = pp(e),
                {
                    iconData: l
                } = (e => {
                    const t = Vr(op);
                    if (!t) throw new Error("Missing Vuetify Icons provide!");
                    return {
                        iconData: ao((() => {
                            var n;
                            const r = St(e);
                            if (!r) return {
                                component: ip
                            };
                            let a = r;
                            if ("string" == typeof a && (a = a.trim(), a.startsWith("$") && (a = null == (n = t.aliases) ? void 0 : n[a.slice(1)])), Array.isArray(a)) return {
                                component: sp,
                                icon: a
                            };
                            if ("string" != typeof a) return {
                                component: ip,
                                icon: a
                            };
                            const o = Object.keys(t.sets).find((e => "string" == typeof a && a.startsWith(`${e}:`))),
                                l = o ? a.slice(o.length + 1) : a;
                            return {
                                component: t.sets[o ?? t.defaultSet].component,
                                icon: l
                            }
                        }))
                    }
                })(ao((() => a.value || e.icon))),
                {
                    sizeClasses: i
                } = $g(e),
                {
                    textColorClasses: s,
                    textColorStyles: u
                } = Lg(Ft(e, "color"));
            return Sd((() => {
                var t, c;
                const d = null == (t = r.default) ? void 0 : t.call(r);
                d && (a.value = null == (c = nc(d).filter((e => e.type === ya && e.children && "string" == typeof e.children))[0]) ? void 0 : c.children);
                const p = !(!n.onClick && !n.onClickOnce);
                return Ma(l.value.component, {
                    tag: e.tag,
                    icon: l.value.icon,
                    class: ["v-icon", "notranslate", o.value, i.value, s.value, {
                        "v-icon--clickable": p,
                        "v-icon--disabled": e.disabled,
                        "v-icon--start": e.start,
                        "v-icon--end": e.end
                    }, e.class],
                    style: [i.value ? void 0 : {
                        fontSize: Ou(e.size),
                        height: Ou(e.size),
                        width: Ou(e.size)
                    }, u.value, e.style],
                    role: p ? "button" : void 0,
                    "aria-hidden": !p,
                    tabindex: p ? e.disabled ? -1 : 0 : void 0
                }, {
                    default: () => [d]
                })
            })), {}
        }
    }),
    Rg = ld({
        height: [Number, String],
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        width: [Number, String]
    }, "dimension");

function Ig(e) {
    return {
        dimensionStyles: ao((() => {
            const t = {},
                n = Ou(e.height),
                r = Ou(e.maxHeight),
                a = Ou(e.maxWidth),
                o = Ou(e.minHeight),
                l = Ou(e.minWidth),
                i = Ou(e.width);
            return null != n && (t.height = n), null != r && (t.maxHeight = r), null != a && (t.maxWidth = a), null != o && (t.minHeight = o), null != l && (t.minWidth = l), null != i && (t.width = i), t
        }))
    }
}
const Og = ld({
    aspectRatio: [String, Number],
    contentClass: null,
    inline: Boolean,
    ...id(),
    ...Rg()
}, "VResponsive"),
    Hg = md()({
        name: "VResponsive",
        props: Og(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                aspectStyles: r
            } = function (e) {
                return {
                    aspectStyles: ao((() => {
                        const t = Number(e.aspectRatio);
                        return t ? {
                            paddingBottom: String(1 / t * 100) + "%"
                        } : void 0
                    }))
                }
            }(e), {
                dimensionStyles: a
            } = Ig(e);
            return Sd((() => {
                var t;
                return Ma("div", {
                    class: ["v-responsive", {
                        "v-responsive--inline": e.inline
                    }, e.class],
                    style: [a.value, e.style]
                }, [Ma("div", {
                    class: "v-responsive__sizer",
                    style: r.value
                }, null), null == (t = n.additional) ? void 0 : t.call(n), n.default && Ma("div", {
                    class: ["v-responsive__content", e.contentClass]
                }, [n.default()])])
            })), {}
        }
    }),
    Bg = ld({
        rounded: {
            type: [Boolean, Number, String],
            default: void 0
        },
        tile: Boolean
    }, "rounded");

function Dg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return {
        roundedClasses: ao((() => {
            const n = bt(e) ? e.value : e.rounded,
                r = bt(e) ? e.value : e.tile,
                a = [];
            if (!0 === n || "" === n) a.push(`${t}--rounded`);
            else if ("string" == typeof n || 0 === n)
                for (const e of String(n).split(" ")) a.push(`rounded-${e}`);
            else (r || !1 === n) && a.push("rounded-0");
            return a
        }))
    }
}
const Ng = ld({
    transition: {
        type: [Boolean, String, Object],
        default: "fade-transition",
        validator: e => !0 !== e
    }
}, "transition"),
    zg = (e, t) => {
        let {
            slots: n
        } = t;
        const {
            transition: r,
            disabled: a,
            group: o,
            ...l
        } = e, {
            component: i = (o ? rl : bo),
            ...s
        } = "object" == typeof r ? r : {};
        return oo(i, Na("string" == typeof r ? {
            name: a ? "" : r
        } : s, "string" == typeof r ? {} : Object.fromEntries(Object.entries({
            disabled: a,
            group: o
        }).filter((e => {
            let [t, n] = e;
            return void 0 !== n
        }))), l), n)
    };

function jg(e, t) {
    var n;
    const r = null == (n = e._observe) ? void 0 : n[t.instance.$.uid];
    r && (r.observer.unobserve(e), delete e._observe[t.instance.$.uid])
}
const Ug = {
    mounted(e, t) {
        if (!Fu) return;
        const n = t.modifiers || {},
            r = t.value,
            {
                handler: a,
                options: o
            } = "object" == typeof r ? r : {
                handler: r,
                options: {}
            },
            l = new IntersectionObserver((function () {
                var r;
                let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    l = arguments.length > 1 ? arguments[1] : void 0;
                const i = null == (r = e._observe) ? void 0 : r[t.instance.$.uid];
                if (!i) return;
                const s = o.some((e => e.isIntersecting));
                !a || n.quiet && !i.init || n.once && !s && !i.init || a(s, o, l), s && n.once ? jg(e, t) : i.init = !0
            }), o);
        e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
            init: !1,
            observer: l
        }, l.observe(e)
    },
    unmounted: jg
},
    Wg = ld({
        absolute: Boolean,
        alt: String,
        cover: Boolean,
        color: String,
        draggable: {
            type: [Boolean, String],
            default: void 0
        },
        eager: Boolean,
        gradient: String,
        lazySrc: String,
        options: {
            type: Object,
            default: () => ({
                root: void 0,
                rootMargin: void 0,
                threshold: void 0
            })
        },
        sizes: String,
        src: {
            type: [String, Object],
            default: ""
        },
        crossorigin: String,
        referrerpolicy: String,
        srcset: String,
        position: String,
        ...Og(),
        ...id(),
        ...Bg(),
        ...Ng()
    }, "VImg"),
    Gg = md()({
        name: "VImg",
        directives: {
            intersect: Ug
        },
        props: Wg(),
        emits: {
            loadstart: e => !0,
            load: e => !0,
            error: e => !0
        },
        setup(e, t) {
            let {
                emit: n,
                slots: r
            } = t;
            const {
                backgroundColorClasses: a,
                backgroundColorStyles: o
            } = Tg(Ft(e, "color")), {
                roundedClasses: l
            } = Dg(e), i = sd("VImg"), s = wt(""), u = kt(), c = wt(e.eager ? "loading" : "idle"), d = wt(), p = wt(), f = ao((() => e.src && "object" == typeof e.src ? {
                src: e.src.src,
                srcset: e.srcset || e.src.srcset,
                lazySrc: e.lazySrc || e.src.lazySrc,
                aspect: Number(e.aspectRatio || e.src.aspect || 0)
            } : {
                src: e.src,
                srcset: e.srcset,
                lazySrc: e.lazySrc,
                aspect: Number(e.aspectRatio || 0)
            })), v = ao((() => f.value.aspect || d.value / p.value || 0));

            function g(t) {
                if ((!e.eager || !t) && (!Fu || t || e.eager)) {
                    if (c.value = "loading", f.value.lazySrc) {
                        const e = new Image;
                        e.src = f.value.lazySrc, k(e, null)
                    }
                    f.value.src && Zt((() => {
                        var e;
                        n("loadstart", (null == (e = u.value) ? void 0 : e.currentSrc) || f.value.src), setTimeout((() => {
                            var e;
                            if (!i.isUnmounted)
                                if (null == (e = u.value) ? void 0 : e.complete) {
                                    if (u.value.naturalWidth || m(), "error" === c.value) return;
                                    v.value || k(u.value, null), "loading" === c.value && h()
                                } else v.value || k(u.value), y()
                        }))
                    }))
                }
            }

            function h() {
                var e;
                i.isUnmounted || (y(), k(u.value), c.value = "loaded", n("load", (null == (e = u.value) ? void 0 : e.currentSrc) || f.value.src))
            }

            function m() {
                var e;
                i.isUnmounted || (c.value = "error", n("error", (null == (e = u.value) ? void 0 : e.currentSrc) || f.value.src))
            }

            function y() {
                const e = u.value;
                e && (s.value = e.currentSrc || e.src)
            }
            aa((() => e.src), (() => {
                g("idle" !== c.value)
            })), aa(v, ((e, t) => {
                !e && t && u.value && k(u.value)
            })), qn((() => g()));
            let b = -1;

            function k(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                const n = () => {
                    if (clearTimeout(b), i.isUnmounted) return;
                    const {
                        naturalHeight: r,
                        naturalWidth: a
                    } = e;
                    r || a ? (d.value = a, p.value = r) : e.complete || "loading" !== c.value || null == t ? (e.currentSrc.endsWith(".svg") || e.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, p.value = 1) : b = window.setTimeout(n, t)
                };
                n()
            }
            Jn((() => {
                clearTimeout(b)
            }));
            const w = ao((() => ({
                "v-img__img--cover": e.cover,
                "v-img__img--contain": !e.cover
            }))),
                x = () => {
                    var t;
                    if (!f.value.src || "idle" === c.value) return null;
                    const n = Ma("img", {
                        class: ["v-img__img", w.value],
                        style: {
                            objectPosition: e.position
                        },
                        src: f.value.src,
                        srcset: f.value.srcset,
                        alt: e.alt,
                        crossorigin: e.crossorigin,
                        referrerpolicy: e.referrerpolicy,
                        draggable: e.draggable,
                        sizes: e.sizes,
                        ref: u,
                        onLoad: h,
                        onError: m
                    }, null),
                        a = null == (t = r.sources) ? void 0 : t.call(r);
                    return Ma(zg, {
                        transition: e.transition,
                        appear: !0
                    }, {
                        default: () => [an(a ? Ma("picture", {
                            class: "v-img__picture"
                        }, [a, n]) : n, [
                            [Ro, "loaded" === c.value]
                        ])]
                    })
                },
                C = () => Ma(zg, {
                    transition: e.transition
                }, {
                    default: () => [f.value.lazySrc && "loaded" !== c.value && Ma("img", {
                        class: ["v-img__img", "v-img__img--preload", w.value],
                        style: {
                            objectPosition: e.position
                        },
                        src: f.value.lazySrc,
                        alt: e.alt,
                        crossorigin: e.crossorigin,
                        referrerpolicy: e.referrerpolicy,
                        draggable: e.draggable
                    }, null)]
                }),
                S = () => r.placeholder ? Ma(zg, {
                    transition: e.transition,
                    appear: !0
                }, {
                    default: () => [("loading" === c.value || "error" === c.value && !r.error) && Ma("div", {
                        class: "v-img__placeholder"
                    }, [r.placeholder()])]
                }) : null,
                _ = () => r.error ? Ma(zg, {
                    transition: e.transition,
                    appear: !0
                }, {
                    default: () => ["error" === c.value && Ma("div", {
                        class: "v-img__error"
                    }, [r.error()])]
                }) : null,
                A = () => e.gradient ? Ma("div", {
                    class: "v-img__gradient",
                    style: {
                        backgroundImage: `linear-gradient(${e.gradient})`
                    }
                }, null) : null,
                L = wt(!1);
            {
                const e = aa(v, (t => {
                    t && (requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            L.value = !0
                        }))
                    })), e())
                }))
            }
            return Sd((() => {
                const t = Hg.filterProps(e);
                return an(Ma(Hg, Na({
                    class: ["v-img", {
                        "v-img--absolute": e.absolute,
                        "v-img--booting": !L.value
                    }, a.value, l.value, e.class],
                    style: [{
                        width: Ou("auto" === e.width ? d.value : e.width)
                    }, o.value, e.style]
                }, t, {
                    aspectRatio: v.value,
                    "aria-label": e.alt,
                    role: e.alt ? "img" : void 0
                }), {
                    additional: () => Ma(ma, null, [Ma(x, null, null), Ma(C, null, null), Ma(A, null, null), Ma(S, null, null), Ma(_, null, null)]),
                    default: r.default
                }), [
                    [sr("intersect"), {
                        handler: g,
                        options: e.options
                    }, null, {
                        once: !0
                    }]
                ])
            })), {
                currentSrc: s,
                image: u,
                state: c,
                naturalWidth: d,
                naturalHeight: p
            }
        }
    }),
    Zg = ld({
        border: [Boolean, Number, String]
    }, "border");

function qg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return {
        borderClasses: ao((() => {
            const n = bt(e) ? e.value : e.border,
                r = [];
            if (!0 === n || "" === n) r.push(`${t}--border`);
            else if ("string" == typeof n || 0 === n)
                for (const e of String(n).split(" ")) r.push(`border-${e}`);
            return r
        }))
    }
}
const Yg = [null, "default", "comfortable", "compact"],
    Kg = ld({
        density: {
            type: String,
            default: "default",
            validator: e => Yg.includes(e)
        }
    }, "density");

function Xg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return {
        densityClasses: ao((() => `${t}--density-${e.density}`))
    }
}
const Jg = ["elevated", "flat", "tonal", "outlined", "text", "plain"];

function Qg(e, t) {
    return Ma(ma, null, [e && Ma("span", {
        key: "overlay",
        class: `${t}__overlay`
    }, null), Ma("span", {
        key: "underlay",
        class: `${t}__underlay`
    }, null)])
}
const eh = ld({
    color: String,
    variant: {
        type: String,
        default: "elevated",
        validator: e => Jg.includes(e)
    }
}, "variant");

function th(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    const n = ao((() => {
        const {
            variant: n
        } = St(e);
        return `${t}--variant-${n}`
    })),
        {
            colorClasses: r,
            colorStyles: a
        } = Ag(ao((() => {
            const {
                variant: t,
                color: n
            } = St(e);
            return {
                [
                    ["elevated", "flat"].includes(t) ? "background" : "text"
                ]: n
            }
        })));
    return {
        colorClasses: r,
        colorStyles: a,
        variantClasses: n
    }
}
const nh = ld({
    start: Boolean,
    end: Boolean,
    icon: ap,
    image: String,
    text: String,
    ...Zg(),
    ...id(),
    ...Kg(),
    ...Bg(),
    ...Fg(),
    ...Pg(),
    ...dp(),
    ...eh({
        variant: "flat"
    })
}, "VAvatar"),
    rh = md()({
        name: "VAvatar",
        props: nh(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                themeClasses: r
            } = pp(e), {
                borderClasses: a
            } = qg(e), {
                colorClasses: o,
                colorStyles: l,
                variantClasses: i
            } = th(e), {
                densityClasses: s
            } = Xg(e), {
                roundedClasses: u
            } = Dg(e), {
                sizeClasses: c,
                sizeStyles: d
            } = $g(e);
            return Sd((() => Ma(e.tag, {
                class: ["v-avatar", {
                    "v-avatar--start": e.start,
                    "v-avatar--end": e.end
                }, r.value, a.value, o.value, s.value, u.value, c.value, i.value, e.class],
                style: [l.value, d.value, e.style]
            }, {
                default: () => [n.default ? Ma(_g, {
                    key: "content-defaults",
                    defaults: {
                        VImg: {
                            cover: !0,
                            src: e.image
                        },
                        VIcon: {
                            icon: e.icon
                        }
                    }
                }, {
                    default: () => [n.default()]
                }) : e.image ? Ma(Gg, {
                    key: "image",
                    src: e.image,
                    alt: "",
                    cover: !0
                }, null) : e.icon ? Ma(Mg, {
                    key: "icon",
                    icon: e.icon
                }, null) : e.text, Qg(!1, "v-avatar")]
            }))), {}
        }
    }),
    ah = {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    },
    oh = ld({
        location: String
    }, "location");

function lh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    const {
        isRtl: r
    } = Rd();
    return {
        locationStyles: ao((() => {
            if (!e.location) return {};
            const {
                side: a,
                align: o
            } = mc(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);

            function l(e) {
                return n ? n(e) : 0
            }
            const i = {};
            return "center" !== a && (t ? i[ah[a]] = `calc(100% - ${l(a)}px)` : i[a] = 0), "center" !== o ? t ? i[ah[o]] = `calc(100% - ${l(o)}px)` : i[o] = 0 : ("center" === a ? i.top = i.left = "50%" : i[{
                top: "left",
                bottom: "left",
                left: "top",
                right: "top"
            }[a]] = "50%", i.transform = {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
                center: "translate(-50%, -50%)"
            }[a]), i
        }))
    }
}
const ih = ld({
    bordered: Boolean,
    color: String,
    content: [Number, String],
    dot: Boolean,
    floating: Boolean,
    icon: ap,
    inline: Boolean,
    label: {
        type: String,
        default: "$vuetify.badge"
    },
    max: [Number, String],
    modelValue: {
        type: Boolean,
        default: !0
    },
    offsetX: [Number, String],
    offsetY: [Number, String],
    textColor: String,
    ...id(),
    ...oh({
        location: "top end"
    }),
    ...Bg(),
    ...Pg(),
    ...dp(),
    ...Ng({
        transition: "scale-rotate-transition"
    })
}, "VBadge"),
    sh = md()({
        name: "VBadge",
        inheritAttrs: !1,
        props: ih(),
        setup(e, t) {
            const {
                backgroundColorClasses: n,
                backgroundColorStyles: r
            } = Tg(Ft(e, "color")), {
                roundedClasses: a
            } = Dg(e), {
                t: o
            } = Md(), {
                textColorClasses: l,
                textColorStyles: i
            } = Lg(Ft(e, "textColor")), {
                themeClasses: s
            } = fp(), {
                locationStyles: u
            } = lh(e, !0, (t => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(t) ? +(e.offsetY ?? 0) : ["left", "right"].includes(t) ? +(e.offsetX ?? 0) : 0)));
            return Sd((() => {
                const c = Number(e.content),
                    d = !e.max || isNaN(c) ? e.content : c <= +e.max ? c : `${e.max}+`,
                    [p, f] = Uu(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
                return Ma(e.tag, Na({
                    class: ["v-badge", {
                        "v-badge--bordered": e.bordered,
                        "v-badge--dot": e.dot,
                        "v-badge--floating": e.floating,
                        "v-badge--inline": e.inline
                    }, e.class]
                }, f, {
                    style: e.style
                }), {
                    default() {
                        var f, v;
                        return [Ma("div", {
                            class: "v-badge__wrapper"
                        }, [null == (v = (f = t.slots).default) ? void 0 : v.call(f), Ma(zg, {
                            transition: e.transition
                        }, {
                            default() {
                                var f, v;
                                return [an(Ma("span", Na({
                                    class: ["v-badge__badge", s.value, n.value, a.value, l.value],
                                    style: [r.value, i.value, e.inline ? {} : u.value],
                                    "aria-atomic": "true",
                                    "aria-label": o(e.label, c),
                                    "aria-live": "polite",
                                    role: "status"
                                }, p), [e.dot ? void 0 : t.slots.badge ? null == (v = (f = t.slots).badge) ? void 0 : v.call(f) : e.icon ? Ma(Mg, {
                                    icon: e.icon
                                }, null) : d]), [
                                    [Ro, e.modelValue]
                                ])]
                            }
                        })])]
                    }
                })
            })), {}
        }
    }),
    uh = ld({
        divider: [Number, String],
        ...id()
    }, "VBreadcrumbsDivider"),
    ch = md()({
        name: "VBreadcrumbsDivider",
        props: uh(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => {
                var t;
                return Ma("li", {
                    class: ["v-breadcrumbs-divider", e.class],
                    style: e.style
                }, [(null == (t = null == n ? void 0 : n.default) ? void 0 : t.call(n)) ?? e.divider])
            })), {}
        }
    });

function dh(e, t) {
    var n, r;
    const a = ir("RouterLink"),
        o = ao((() => !(!e.href && !e.to))),
        l = ao((() => (null == o ? void 0 : o.value) || uc(t, "click") || uc(e, "click")));
    if ("string" == typeof a || !("useLink" in a)) {
        const t = Ft(e, "href");
        return {
            isLink: o,
            isClickable: l,
            href: t,
            linkProps: st({
                href: t
            })
        }
    }
    const i = ao((() => ({
        ...e,
        to: Ft((() => e.to || ""))
    }))),
        s = a.useLink(i.value),
        u = ao((() => e.to ? s : void 0)),
        c = function () {
            const e = sd("useRoute");
            return ao((() => {
                var t;
                return null == (t = null == e ? void 0 : e.proxy) ? void 0 : t.$route
            }))
        }(),
        d = ao((() => {
            var t, n, r;
            return !!u.value && (e.exact ? c.value ? (null == (r = u.value.isExactActive) ? void 0 : r.value) && Vu(u.value.route.value.query, c.value.query) : (null == (n = u.value.isExactActive) ? void 0 : n.value) ?? !1 : (null == (t = u.value.isActive) ? void 0 : t.value) ?? !1)
        })),
        p = ao((() => {
            var t;
            return e.to ? null == (t = u.value) ? void 0 : t.route.value.href : e.href
        }));
    return {
        isLink: o,
        isClickable: l,
        isActive: d,
        route: null == (n = u.value) ? void 0 : n.route,
        navigate: null == (r = u.value) ? void 0 : r.navigate,
        href: p,
        linkProps: st({
            href: p,
            "aria-current": ao((() => d.value ? "page" : void 0))
        })
    }
}
const ph = ld({
    href: String,
    replace: Boolean,
    to: [String, Object],
    exact: Boolean
}, "router");
let fh = !1;
const vh = ld({
    active: Boolean,
    activeClass: String,
    activeColor: String,
    color: String,
    disabled: Boolean,
    title: String,
    ...id(),
    ...ph(),
    ...Pg({
        tag: "li"
    })
}, "VBreadcrumbsItem"),
    gh = md()({
        name: "VBreadcrumbsItem",
        props: vh(),
        setup(e, t) {
            let {
                slots: n,
                attrs: r
            } = t;
            const a = dh(e, r),
                o = ao((() => {
                    var t;
                    return e.active || (null == (t = a.isActive) ? void 0 : t.value)
                })),
                l = ao((() => o.value ? e.activeColor : e.color)),
                {
                    textColorClasses: i,
                    textColorStyles: s
                } = Lg(l);
            return Sd((() => Ma(e.tag, {
                class: ["v-breadcrumbs-item", {
                    "v-breadcrumbs-item--active": o.value,
                    "v-breadcrumbs-item--disabled": e.disabled,
                    [`${e.activeClass}`]: o.value && e.activeClass
                }, i.value, e.class],
                style: [s.value, e.style],
                "aria-current": o.value ? "page" : void 0
            }, {
                default() {
                    var t, r;
                    return [a.isLink.value ? Ma("a", Na({
                        class: "v-breadcrumbs-item--link",
                        onClick: a.navigate
                    }, a.linkProps), [(null == (r = n.default) ? void 0 : r.call(n)) ?? e.title]) : (null == (t = n.default) ? void 0 : t.call(n)) ?? e.title]
                }
            }))), {}
        }
    }),
    hh = ld({
        activeClass: String,
        activeColor: String,
        bgColor: String,
        color: String,
        disabled: Boolean,
        divider: {
            type: String,
            default: "/"
        },
        icon: ap,
        items: {
            type: Array,
            default: () => []
        },
        ...id(),
        ...Kg(),
        ...Bg(),
        ...Pg({
            tag: "ul"
        })
    }, "VBreadcrumbs"),
    mh = md()({
        name: "VBreadcrumbs",
        props: hh(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                backgroundColorClasses: r,
                backgroundColorStyles: a
            } = Tg(Ft(e, "bgColor")), {
                densityClasses: o
            } = Xg(e), {
                roundedClasses: l
            } = Dg(e);
            gd({
                VBreadcrumbsDivider: {
                    divider: Ft(e, "divider")
                },
                VBreadcrumbsItem: {
                    activeClass: Ft(e, "activeClass"),
                    activeColor: Ft(e, "activeColor"),
                    color: Ft(e, "color"),
                    disabled: Ft(e, "disabled")
                }
            });
            const i = ao((() => e.items.map((e => "string" == typeof e ? {
                item: {
                    title: e
                },
                raw: e
            } : {
                item: e,
                raw: e
            }))));
            return Sd((() => {
                const t = !(!n.prepend && !e.icon);
                return Ma(e.tag, {
                    class: ["v-breadcrumbs", r.value, o.value, l.value, e.class],
                    style: [a.value, e.style]
                }, {
                    default() {
                        var r;
                        return [t && Ma("li", {
                            key: "prepend",
                            class: "v-breadcrumbs__prepend"
                        }, [n.prepend ? Ma(_g, {
                            key: "prepend-defaults",
                            disabled: !e.icon,
                            defaults: {
                                VIcon: {
                                    icon: e.icon,
                                    start: !0
                                }
                            }
                        }, n.prepend) : Ma(Mg, {
                            key: "prepend-icon",
                            start: !0,
                            icon: e.icon
                        }, null)]), i.value.map(((e, t, r) => {
                            var a;
                            let {
                                item: o,
                                raw: l
                            } = e;
                            return Ma(ma, null, [(null == (a = n.item) ? void 0 : a.call(n, {
                                item: o,
                                index: t
                            })) ?? Ma(gh, Na({
                                key: t,
                                disabled: t >= r.length - 1
                            }, "string" == typeof o ? {
                                title: o
                            } : o), {
                                default: n.title ? () => {
                                    var e;
                                    return null == (e = n.title) ? void 0 : e.call(n, {
                                        item: o,
                                        index: t
                                    })
                                } : void 0
                            }), t < r.length - 1 && Ma(ch, null, {
                                default: n.divider ? () => {
                                    var e;
                                    return null == (e = n.divider) ? void 0 : e.call(n, {
                                        item: l,
                                        index: t
                                    })
                                } : void 0
                            })])
                        })), null == (r = n.default) ? void 0 : r.call(n)]
                    }
                })
            })), {}
        }
    }),
    yh = ld({
        elevation: {
            type: [Number, String],
            validator(e) {
                const t = parseInt(e);
                return !isNaN(t) && t >= 0 && t <= 24
            }
        }
    }, "elevation");

function bh(e) {
    return {
        elevationClasses: ao((() => {
            const t = bt(e) ? e.value : e.elevation,
                n = [];
            return null == t || n.push(`elevation-${t}`), n
        }))
    }
}
const kh = ld({
    baseColor: String,
    divided: Boolean,
    ...Zg(),
    ...id(),
    ...Kg(),
    ...yh(),
    ...Bg(),
    ...Pg(),
    ...dp(),
    ...eh()
}, "VBtnGroup"),
    wh = md()({
        name: "VBtnGroup",
        props: kh(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                themeClasses: r
            } = pp(e), {
                densityClasses: a
            } = Xg(e), {
                borderClasses: o
            } = qg(e), {
                elevationClasses: l
            } = bh(e), {
                roundedClasses: i
            } = Dg(e);
            gd({
                VBtn: {
                    height: "auto",
                    baseColor: Ft(e, "baseColor"),
                    color: Ft(e, "color"),
                    density: Ft(e, "density"),
                    flat: !0,
                    variant: Ft(e, "variant")
                }
            }), Sd((() => Ma(e.tag, {
                class: ["v-btn-group", {
                    "v-btn-group--divided": e.divided
                }, r.value, o.value, a.value, l.value, i.value, e.class],
                style: e.style
            }, n)))
        }
    }),
    xh = ld({
        modelValue: {
            type: null,
            default: void 0
        },
        multiple: Boolean,
        mandatory: [Boolean, String],
        max: Number,
        selectedClass: String,
        disabled: Boolean
    }, "group"),
    Ch = ld({
        value: null,
        disabled: Boolean,
        selectedClass: String
    }, "group-item");

function Sh(e, t) {
    const n = [];
    return t.forEach((t => {
        const r = e.find((e => Vu(t, e.value))),
            a = e[t];
        null != (null == r ? void 0 : r.value) ? n.push(r.id) : null != a && n.push(a.id)
    })), n
}
const _h = Symbol.for("vuetify:v-btn-toggle"),
    Ah = ld({
        ...kh(),
        ...xh()
    }, "VBtnToggle");

function Lh(e, t) {
    const n = kt(),
        r = wt(!1);
    if (Fu) {
        const e = new IntersectionObserver((e => {
            r.value = !!e.find((e => e.isIntersecting))
        }), t);
        Jn((() => {
            e.disconnect()
        })), aa(n, ((t, n) => {
            n && (e.unobserve(n), r.value = !1), t && e.observe(t)
        }), {
            flush: "post"
        })
    }
    return {
        intersectionRef: n,
        isIntersecting: r
    }
}
md()({
    name: "VBtnToggle",
    props: Ah(),
    emits: {
        "update:modelValue": e => !0
    },
    setup(e, t) {
        let {
            slots: n
        } = t;
        const {
            isSelected: r,
            next: a,
            prev: o,
            select: l,
            selected: i
        } = function (e, t) {
            let n = !1;
            const r = st([]),
                a = _d(e, "modelValue", [], (e => null == e ? [] : Sh(r, Ku(e))), (t => {
                    const n = function (e, t) {
                        const n = [];
                        return t.forEach((t => {
                            const r = e.findIndex((e => e.id === t));
                            if (~r) {
                                const t = e[r];
                                n.push(null != t.value ? t.value : r)
                            }
                        })), n
                    }(r, t);
                    return e.multiple ? n : n[0]
                })),
                o = sd("useGroup");

            function l() {
                const t = r.find((e => !e.disabled));
                t && "force" === e.mandatory && !a.value.length && (a.value = [t.id])
            }

            function i(t) {
                if (e.multiple, a.value.length) {
                    const e = a.value[0],
                        n = r.findIndex((t => t.id === e));
                    let o = (n + t) % r.length,
                        l = r[o];
                    for (; l.disabled && o !== n;) o = (o + t) % r.length, l = r[o];
                    if (l.disabled) return;
                    a.value = [r[o].id]
                } else {
                    const e = r.find((e => !e.disabled));
                    e && (a.value = [e.id])
                }
            }
            Yn((() => {
                l()
            })), Jn((() => {
                n = !0
            })), Xn((() => {
                for (let e = 0; e < r.length; e++) r[e].useIndexAsValue && (r[e].value = e)
            }));
            const s = {
                register(e, n) {
                    const a = e,
                        l = ac(Symbol.for(`${t.description}:id`), null == o ? void 0 : o.vnode).indexOf(n);
                    null == St(a.value) && (a.value = l, a.useIndexAsValue = !0), l > -1 ? r.splice(l, 0, a) : r.push(a)
                },
                unregister(e) {
                    if (n) return;
                    l();
                    const t = r.findIndex((t => t.id === e));
                    r.splice(t, 1)
                },
                selected: a,
                select(t, n) {
                    const o = r.find((e => e.id === t));
                    if (!n || !(null == o ? void 0 : o.disabled))
                        if (e.multiple) {
                            const r = a.value.slice(),
                                o = r.findIndex((e => e === t)),
                                l = ~o;
                            if (n = n ?? !l, l && e.mandatory && r.length <= 1) return;
                            if (!l && null != e.max && r.length + 1 > e.max) return;
                            o < 0 && n ? r.push(t) : o >= 0 && !n && r.splice(o, 1), a.value = r
                        } else {
                            const r = a.value.includes(t);
                            if (e.mandatory && r) return;
                            a.value = n ?? !r ? [t] : []
                        }
                },
                disabled: Ft(e, "disabled"),
                prev() {
                    return i(r.length - 1)
                },
                next() {
                    return i(1)
                },
                isSelected(e) {
                    return a.value.includes(e)
                },
                selectedClass: ao((() => e.selectedClass)),
                items: ao((() => r)),
                getItemIndex(e) {
                    return function (e, t) {
                        const n = Sh(e, [t]);
                        return n.length ? e.findIndex((e => e.id === n[0])) : -1
                    }(r, e)
                }
            };
            return Pr(t, s), s
        }(e, _h);
        return Sd((() => {
            const t = wh.filterProps(e);
            return Ma(wh, Na({
                class: ["v-btn-toggle", e.class]
            }, t, {
                style: e.style
            }), {
                default() {
                    var e;
                    return [null == (e = n.default) ? void 0 : e.call(n, {
                        isSelected: r,
                        next: a,
                        prev: o,
                        select: l,
                        selected: i
                    })]
                }
            })
        })), {
            next: a,
            prev: o,
            select: l
        }
    }
});
const Th = ld({
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
        type: [Number, String],
        default: 0
    },
    rotate: {
        type: [Number, String],
        default: 0
    },
    width: {
        type: [Number, String],
        default: 4
    },
    ...id(),
    ...Fg(),
    ...Pg({
        tag: "div"
    }),
    ...dp()
}, "VProgressCircular"),
    Eh = md()({
        name: "VProgressCircular",
        props: Th(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = 40 * Math.PI,
                a = kt(),
                {
                    themeClasses: o
                } = pp(e),
                {
                    sizeClasses: l,
                    sizeStyles: i
                } = $g(e),
                {
                    textColorClasses: s,
                    textColorStyles: u
                } = Lg(Ft(e, "color")),
                {
                    textColorClasses: c,
                    textColorStyles: d
                } = Lg(Ft(e, "bgColor")),
                {
                    intersectionRef: p,
                    isIntersecting: f
                } = Lh(),
                {
                    resizeRef: v,
                    contentRect: g
                } = hp(),
                h = ao((() => Math.max(0, Math.min(100, parseFloat(e.modelValue))))),
                m = ao((() => Number(e.width))),
                y = ao((() => i.value ? Number(e.size) : g.value ? g.value.width : Math.max(m.value, 32))),
                b = ao((() => 20 / (1 - m.value / y.value) * 2)),
                k = ao((() => m.value / y.value * b.value)),
                w = ao((() => Ou((100 - h.value) / 100 * r)));
            return ra((() => {
                p.value = a.value, v.value = a.value
            })), Sd((() => Ma(e.tag, {
                ref: a,
                class: ["v-progress-circular", {
                    "v-progress-circular--indeterminate": !!e.indeterminate,
                    "v-progress-circular--visible": f.value,
                    "v-progress-circular--disable-shrink": "disable-shrink" === e.indeterminate
                }, o.value, l.value, s.value, e.class],
                style: [i.value, u.value, e.style],
                role: "progressbar",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-valuenow": e.indeterminate ? void 0 : h.value
            }, {
                default: () => [Ma("svg", {
                    style: {
                        transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: `0 0 ${b.value} ${b.value}`
                }, [Ma("circle", {
                    class: ["v-progress-circular__underlay", c.value],
                    style: d.value,
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: 20,
                    "stroke-width": k.value,
                    "stroke-dasharray": r,
                    "stroke-dashoffset": 0
                }, null), Ma("circle", {
                    class: "v-progress-circular__overlay",
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: 20,
                    "stroke-width": k.value,
                    "stroke-dasharray": r,
                    "stroke-dashoffset": w.value
                }, null)]), n.default && Ma("div", {
                    class: "v-progress-circular__content"
                }, [n.default({
                    value: h.value
                })])]
            }))), {}
        }
    }),
    Fh = ld({
        absolute: Boolean,
        active: {
            type: Boolean,
            default: !0
        },
        bgColor: String,
        bgOpacity: [Number, String],
        bufferValue: {
            type: [Number, String],
            default: 0
        },
        bufferColor: String,
        bufferOpacity: [Number, String],
        clickable: Boolean,
        color: String,
        height: {
            type: [Number, String],
            default: 4
        },
        indeterminate: Boolean,
        max: {
            type: [Number, String],
            default: 100
        },
        modelValue: {
            type: [Number, String],
            default: 0
        },
        opacity: [Number, String],
        reverse: Boolean,
        stream: Boolean,
        striped: Boolean,
        roundedBar: Boolean,
        ...id(),
        ...oh({
            location: "top"
        }),
        ...Bg(),
        ...Pg(),
        ...dp()
    }, "VProgressLinear"),
    $h = md()({
        name: "VProgressLinear",
        props: Fh(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            var n;
            let {
                slots: r
            } = t;
            const a = _d(e, "modelValue"),
                {
                    isRtl: o,
                    rtlClasses: l
                } = Rd(),
                {
                    themeClasses: i
                } = pp(e),
                {
                    locationStyles: s
                } = lh(e),
                {
                    textColorClasses: u,
                    textColorStyles: c
                } = Lg(e, "color"),
                {
                    backgroundColorClasses: d,
                    backgroundColorStyles: p
                } = Tg(ao((() => e.bgColor || e.color))),
                {
                    backgroundColorClasses: f,
                    backgroundColorStyles: v
                } = Tg(ao((() => e.bufferColor || e.bgColor || e.color))),
                {
                    backgroundColorClasses: g,
                    backgroundColorStyles: h
                } = Tg(e, "color"),
                {
                    roundedClasses: m
                } = Dg(e),
                {
                    intersectionRef: y,
                    isIntersecting: b
                } = Lh(),
                k = ao((() => parseFloat(e.max))),
                w = ao((() => parseFloat(e.height))),
                x = ao((() => Xu(parseFloat(e.bufferValue) / k.value * 100, 0, 100))),
                C = ao((() => Xu(parseFloat(a.value) / k.value * 100, 0, 100))),
                S = ao((() => o.value !== e.reverse)),
                _ = ao((() => e.indeterminate ? "fade-transition" : "slide-x-transition")),
                A = Eu && (null == (n = window.matchMedia) ? void 0 : n.call(window, "(forced-colors: active)").matches);

            function L(e) {
                if (!y.value) return;
                const {
                    left: t,
                    right: n,
                    width: r
                } = y.value.getBoundingClientRect(), o = S.value ? r - e.clientX + (n - r) : e.clientX - t;
                a.value = Math.round(o / r * k.value)
            }
            return Sd((() => Ma(e.tag, {
                ref: y,
                class: ["v-progress-linear", {
                    "v-progress-linear--absolute": e.absolute,
                    "v-progress-linear--active": e.active && b.value,
                    "v-progress-linear--reverse": S.value,
                    "v-progress-linear--rounded": e.rounded,
                    "v-progress-linear--rounded-bar": e.roundedBar,
                    "v-progress-linear--striped": e.striped
                }, m.value, i.value, l.value, e.class],
                style: [{
                    bottom: "bottom" === e.location ? 0 : void 0,
                    top: "top" === e.location ? 0 : void 0,
                    height: e.active ? Ou(w.value) : 0,
                    "--v-progress-linear-height": Ou(w.value),
                    ...e.absolute ? s.value : {}
                }, e.style],
                role: "progressbar",
                "aria-hidden": e.active ? "false" : "true",
                "aria-valuemin": "0",
                "aria-valuemax": e.max,
                "aria-valuenow": e.indeterminate ? void 0 : C.value,
                onClick: e.clickable && L
            }, {
                default: () => [e.stream && Ma("div", {
                    key: "stream",
                    class: ["v-progress-linear__stream", u.value],
                    style: {
                        ...c.value,
                        [S.value ? "left" : "right"]: Ou(-w.value),
                        borderTop: `${Ou(w.value / 2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${Ou(w.value / 4)})`,
                        width: Ou(100 - x.value, "%"),
                        "--v-progress-linear-stream-to": Ou(w.value * (S.value ? 1 : -1))
                    }
                }, null), Ma("div", {
                    class: ["v-progress-linear__background", A ? void 0 : d.value],
                    style: [p.value, {
                        opacity: parseFloat(e.bgOpacity),
                        width: e.stream ? 0 : void 0
                    }]
                }, null), Ma("div", {
                    class: ["v-progress-linear__buffer", A ? void 0 : f.value],
                    style: [v.value, {
                        opacity: parseFloat(e.bufferOpacity),
                        width: Ou(x.value, "%")
                    }]
                }, null), Ma(bo, {
                    name: _.value
                }, {
                    default: () => [e.indeterminate ? Ma("div", {
                        class: "v-progress-linear__indeterminate"
                    }, [
                        ["long", "short"].map((e => Ma("div", {
                            key: e,
                            class: ["v-progress-linear__indeterminate", e, A ? void 0 : g.value],
                            style: h.value
                        }, null)))
                    ]) : Ma("div", {
                        class: ["v-progress-linear__determinate", A ? void 0 : g.value],
                        style: [h.value, {
                            width: Ou(C.value, "%")
                        }]
                    }, null)]
                }), r.default && Ma("div", {
                    class: "v-progress-linear__content"
                }, [r.default({
                    value: C.value,
                    buffer: x.value
                })])]
            }))), {}
        }
    }),
    Ph = ld({
        loading: [Boolean, String]
    }, "loader");

function Vh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return {
        loaderClasses: ao((() => ({
            [`${t}--loading`]: e.loading
        })))
    }
}

function Mh(e, t) {
    var n;
    let {
        slots: r
    } = t;
    return Ma("div", {
        class: `${e.name}__loader`
    }, [(null == (n = r.default) ? void 0 : n.call(r, {
        color: e.color,
        isActive: e.active
    })) || Ma($h, {
        absolute: e.absolute,
        active: e.active,
        color: e.color,
        height: "2",
        indeterminate: !0
    }, null)])
}
const Rh = ["static", "relative", "fixed", "absolute", "sticky"],
    Ih = ld({
        position: {
            type: String,
            validator: e => Rh.includes(e)
        }
    }, "position");

function Oh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    return {
        positionClasses: ao((() => e.position ? `${t}--${e.position}` : void 0))
    }
}
const Hh = Symbol("rippleStop");

function Bh(e, t) {
    e.style.transform = t, e.style.webkitTransform = t
}

function Dh(e) {
    return "TouchEvent" === e.constructor.name
}

function Nh(e) {
    return "KeyboardEvent" === e.constructor.name
}
const zh = {
    show(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!(null == (n = null == t ? void 0 : t._ripple) ? void 0 : n.enabled)) return;
        const a = document.createElement("span"),
            o = document.createElement("span");
        a.appendChild(o), a.className = "v-ripple__container", r.class && (a.className += ` ${r.class}`);
        const {
            radius: l,
            scale: i,
            x: s,
            y: u,
            centerX: c,
            centerY: d
        } = function (e, t) {
            var n;
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = 0,
                o = 0;
            if (!Nh(e)) {
                const n = t.getBoundingClientRect(),
                    r = Dh(e) ? e.touches[e.touches.length - 1] : e;
                a = r.clientX - n.left, o = r.clientY - n.top
            }
            let l = 0,
                i = .3;
            (null == (n = t._ripple) ? void 0 : n.circle) ? (i = .15, l = t.clientWidth / 2, l = r.center ? l : l + Math.sqrt((a - l) ** 2 + (o - l) ** 2) / 4) : l = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
            const s = (t.clientWidth - 2 * l) / 2 + "px",
                u = (t.clientHeight - 2 * l) / 2 + "px";
            return {
                radius: l,
                scale: i,
                x: r.center ? s : a - l + "px",
                y: r.center ? u : o - l + "px",
                centerX: s,
                centerY: u
            }
        }(e, t, r), p = 2 * l + "px";
        o.className = "v-ripple__animation", o.style.width = p, o.style.height = p, t.appendChild(a);
        const f = window.getComputedStyle(t);
        f && "static" === f.position && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Bh(o, `translate(${s}, ${u}) scale3d(${i},${i},${i})`), o.dataset.activated = String(performance.now()), setTimeout((() => {
            o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Bh(o, `translate(${c}, ${d}) scale3d(1,1,1)`)
        }), 0)
    },
    hide(e) {
        var t;
        if (!(null == (t = null == e ? void 0 : e._ripple) ? void 0 : t.enabled)) return;
        const n = e.getElementsByClassName("v-ripple__animation");
        if (0 === n.length) return;
        const r = n[n.length - 1];
        if (r.dataset.isHiding) return;
        r.dataset.isHiding = "true";
        const a = performance.now() - Number(r.dataset.activated),
            o = Math.max(250 - a, 0);
        setTimeout((() => {
            r.classList.remove("v-ripple__animation--in"), r.classList.add("v-ripple__animation--out"), setTimeout((() => {
                var t;
                1 === e.getElementsByClassName("v-ripple__animation").length && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), (null == (t = r.parentNode) ? void 0 : t.parentNode) === e && e.removeChild(r.parentNode)
            }), 300)
        }), o)
    }
};

function jh(e) {
    return void 0 === e || !!e
}

function Uh(e) {
    const t = {},
        n = e.currentTarget;
    if ((null == n ? void 0 : n._ripple) && !n._ripple.touched && !e[Hh]) {
        if (e[Hh] = !0, Dh(e)) n._ripple.touched = !0, n._ripple.isTouch = !0;
        else if (n._ripple.isTouch) return;
        if (t.center = n._ripple.centered || Nh(e), n._ripple.class && (t.class = n._ripple.class), Dh(e)) {
            if (n._ripple.showTimerCommit) return;
            n._ripple.showTimerCommit = () => {
                zh.show(e, n, t)
            }, n._ripple.showTimer = window.setTimeout((() => {
                var e;
                (null == (e = null == n ? void 0 : n._ripple) ? void 0 : e.showTimerCommit) && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null)
            }), 80)
        } else zh.show(e, n, t)
    }
}

function Wh(e) {
    e[Hh] = !0
}

function Gh(e) {
    const t = e.currentTarget;
    if (null == t ? void 0 : t._ripple) {
        if (window.clearTimeout(t._ripple.showTimer), "touchend" === e.type && t._ripple.showTimerCommit) return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout((() => {
            Gh(e)
        })));
        window.setTimeout((() => {
            t._ripple && (t._ripple.touched = !1)
        })), zh.hide(t)
    }
}

function Zh(e) {
    const t = e.currentTarget;
    (null == t ? void 0 : t._ripple) && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer))
}
let qh = !1;

function Yh(e) {
    qh || e.keyCode !== Du.enter && e.keyCode !== Du.space || (qh = !0, Uh(e))
}

function Kh(e) {
    qh = !1, Gh(e)
}

function Xh(e) {
    qh && (qh = !1, Gh(e))
}

function Jh(e, t, n) {
    const {
        value: r,
        modifiers: a
    } = t, o = jh(r);
    var l;
    if (o || zh.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = a.center, e._ripple.circle = a.circle, null !== (l = r) && "object" == typeof l && !Array.isArray(l) && r.class && (e._ripple.class = r.class), o && !n) {
        if (a.stop) return e.addEventListener("touchstart", Wh, {
            passive: !0
        }), void e.addEventListener("mousedown", Wh);
        e.addEventListener("touchstart", Uh, {
            passive: !0
        }), e.addEventListener("touchend", Gh, {
            passive: !0
        }), e.addEventListener("touchmove", Zh, {
            passive: !0
        }), e.addEventListener("touchcancel", Gh), e.addEventListener("mousedown", Uh), e.addEventListener("mouseup", Gh), e.addEventListener("mouseleave", Gh), e.addEventListener("keydown", Yh), e.addEventListener("keyup", Kh), e.addEventListener("blur", Xh), e.addEventListener("dragstart", Gh, {
            passive: !0
        })
    } else !o && n && Qh(e)
}

function Qh(e) {
    e.removeEventListener("mousedown", Uh), e.removeEventListener("touchstart", Uh), e.removeEventListener("touchend", Gh), e.removeEventListener("touchmove", Zh), e.removeEventListener("touchcancel", Gh), e.removeEventListener("mouseup", Gh), e.removeEventListener("mouseleave", Gh), e.removeEventListener("keydown", Yh), e.removeEventListener("keyup", Kh), e.removeEventListener("dragstart", Gh), e.removeEventListener("blur", Xh)
}
const em = {
    mounted(e, t) {
        Jh(e, t, !1)
    },
    unmounted(e) {
        delete e._ripple, Qh(e)
    },
    updated(e, t) {
        t.value !== t.oldValue && Jh(e, t, jh(t.oldValue))
    }
},
    tm = ld({
        active: {
            type: Boolean,
            default: void 0
        },
        activeColor: String,
        baseColor: String,
        symbol: {
            type: null,
            default: _h
        },
        flat: Boolean,
        icon: [Boolean, String, Function, Object],
        prependIcon: ap,
        appendIcon: ap,
        block: Boolean,
        readonly: Boolean,
        slim: Boolean,
        stacked: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        text: String,
        ...Zg(),
        ...id(),
        ...Kg(),
        ...Rg(),
        ...yh(),
        ...Ch(),
        ...Ph(),
        ...oh(),
        ...Ih(),
        ...Bg(),
        ...ph(),
        ...Fg(),
        ...Pg({
            tag: "button"
        }),
        ...dp(),
        ...eh({
            variant: "elevated"
        })
    }, "VBtn"),
    nm = md()({
        name: "VBtn",
        props: tm(),
        emits: {
            "group:selected": e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                slots: r
            } = t;
            const {
                themeClasses: a
            } = pp(e), {
                borderClasses: o
            } = qg(e), {
                densityClasses: l
            } = Xg(e), {
                dimensionStyles: i
            } = Ig(e), {
                elevationClasses: s
            } = bh(e), {
                loaderClasses: u
            } = Vh(e), {
                locationStyles: c
            } = lh(e), {
                positionClasses: d
            } = Oh(e), {
                roundedClasses: p
            } = Dg(e), {
                sizeClasses: f,
                sizeStyles: v
            } = $g(e), g = function (e, t) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const r = sd("useGroupItem");
                if (!r) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
                const a = pd();
                Pr(Symbol.for(`${t.description}:id`), a);
                const o = Vr(t, null);
                if (!o) {
                    if (!n) return o;
                    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)
                }
                const l = Ft(e, "value"),
                    i = ao((() => !(!o.disabled.value && !e.disabled)));
                o.register({
                    id: a,
                    value: l,
                    disabled: i
                }, r), Jn((() => {
                    o.unregister(a)
                }));
                const s = ao((() => o.isSelected(a))),
                    u = ao((() => o.items.value[0].id === a)),
                    c = ao((() => o.items.value[o.items.value.length - 1].id === a)),
                    d = ao((() => s.value && [o.selectedClass.value, e.selectedClass]));
                return aa(s, (e => {
                    r.emit("group:selected", {
                        value: e
                    })
                }), {
                    flush: "sync"
                }), {
                    id: a,
                    isSelected: s,
                    isFirst: u,
                    isLast: c,
                    toggle() {
                        return o.select(a, !s.value)
                    },
                    select(e) {
                        return o.select(a, e)
                    },
                    selectedClass: d,
                    value: l,
                    disabled: i,
                    group: o
                }
            }(e, e.symbol, !1), h = dh(e, n), m = ao((() => {
                var t;
                return void 0 !== e.active ? e.active : h.isLink.value ? null == (t = h.isActive) ? void 0 : t.value : null == g ? void 0 : g.isSelected.value
            })), y = ao((() => m.value ? e.activeColor ?? e.color : e.color)), b = ao((() => {
                var t, n;
                return {
                    color: (null == g ? void 0 : g.isSelected.value) && (!h.isLink.value || (null == (t = h.isActive) ? void 0 : t.value)) || !g || (null == (n = h.isActive) ? void 0 : n.value) ? y.value ?? e.baseColor : e.baseColor,
                    variant: e.variant
                }
            })), {
                colorClasses: k,
                colorStyles: w,
                variantClasses: x
            } = th(b), C = ao((() => (null == g ? void 0 : g.disabled.value) || e.disabled)), S = ao((() => "elevated" === e.variant && !(e.disabled || e.flat || e.border))), _ = ao((() => {
                if (void 0 !== e.value && "symbol" != typeof e.value) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
            }));

            function A(e) {
                var t;
                C.value || h.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || 0 !== e.button || "_blank" === n.target) || (null == (t = h.navigate) || t.call(h, e), null == g || g.toggle())
            }
            return function (e, t) {
                aa((() => {
                    var t;
                    return null == (t = e.isActive) ? void 0 : t.value
                }), (n => {
                    e.isLink.value && n && t && Zt((() => {
                        t(!0)
                    }))
                }), {
                    immediate: !0
                })
            }(h, null == g ? void 0 : g.select), Sd((() => {
                const t = h.isLink.value ? "a" : e.tag,
                    n = !(!e.prependIcon && !r.prepend),
                    y = !(!e.appendIcon && !r.append),
                    b = !(!e.icon || !0 === e.icon);
                return an(Ma(t, Na({
                    type: "a" === t ? void 0 : "button",
                    class: ["v-btn", null == g ? void 0 : g.selectedClass.value, {
                        "v-btn--active": m.value,
                        "v-btn--block": e.block,
                        "v-btn--disabled": C.value,
                        "v-btn--elevated": S.value,
                        "v-btn--flat": e.flat,
                        "v-btn--icon": !!e.icon,
                        "v-btn--loading": e.loading,
                        "v-btn--readonly": e.readonly,
                        "v-btn--slim": e.slim,
                        "v-btn--stacked": e.stacked
                    }, a.value, o.value, k.value, l.value, s.value, u.value, d.value, p.value, f.value, x.value, e.class],
                    style: [w.value, i.value, c.value, v.value, e.style],
                    "aria-busy": !!e.loading || void 0,
                    disabled: C.value || void 0,
                    tabindex: e.loading || e.readonly ? -1 : void 0,
                    onClick: A,
                    value: _.value
                }, h.linkProps), {
                    default() {
                        var t;
                        return [Qg(!0, "v-btn"), !e.icon && n && Ma("span", {
                            key: "prepend",
                            class: "v-btn__prepend"
                        }, [r.prepend ? Ma(_g, {
                            key: "prepend-defaults",
                            disabled: !e.prependIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.prependIcon
                                }
                            }
                        }, r.prepend) : Ma(Mg, {
                            key: "prepend-icon",
                            icon: e.prependIcon
                        }, null)]), Ma("span", {
                            class: "v-btn__content",
                            "data-no-activator": ""
                        }, [!r.default && b ? Ma(Mg, {
                            key: "content-icon",
                            icon: e.icon
                        }, null) : Ma(_g, {
                            key: "content-defaults",
                            disabled: !b,
                            defaults: {
                                VIcon: {
                                    icon: e.icon
                                }
                            }
                        }, {
                            default() {
                                var t;
                                return [(null == (t = r.default) ? void 0 : t.call(r)) ?? e.text]
                            }
                        })]), !e.icon && y && Ma("span", {
                            key: "append",
                            class: "v-btn__append"
                        }, [r.append ? Ma(_g, {
                            key: "append-defaults",
                            disabled: !e.appendIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.appendIcon
                                }
                            }
                        }, r.append) : Ma(Mg, {
                            key: "append-icon",
                            icon: e.appendIcon
                        }, null)]), !!e.loading && Ma("span", {
                            key: "loader",
                            class: "v-btn__loader"
                        }, [(null == (t = r.loader) ? void 0 : t.call(r)) ?? Ma(Eh, {
                            color: "boolean" == typeof e.loading ? void 0 : e.loading,
                            indeterminate: !0,
                            width: "2"
                        }, null)])]
                    }
                }), [
                    [em, !C.value && e.ripple, "", {
                        center: !!e.icon
                    }]
                ])
            })), {
                group: g
            }
        }
    }),
    rm = md()({
        name: "VCardActions",
        props: id(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return gd({
                VBtn: {
                    slim: !0,
                    variant: "text"
                }
            }), Sd((() => {
                var t;
                return Ma("div", {
                    class: ["v-card-actions", e.class],
                    style: e.style
                }, [null == (t = n.default) ? void 0 : t.call(n)])
            })), {}
        }
    }),
    am = ld({
        opacity: [Number, String],
        ...id(),
        ...Pg()
    }, "VCardSubtitle"),
    om = md()({
        name: "VCardSubtitle",
        props: am(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => Ma(e.tag, {
                class: ["v-card-subtitle", e.class],
                style: [{
                    "--v-card-subtitle-opacity": e.opacity
                }, e.style]
            }, n))), {}
        }
    }),
    lm = yd("v-card-title"),
    im = ld({
        appendAvatar: String,
        appendIcon: ap,
        prependAvatar: String,
        prependIcon: ap,
        subtitle: [String, Number],
        title: [String, Number],
        ...id(),
        ...Kg()
    }, "VCardItem"),
    sm = md()({
        name: "VCardItem",
        props: im(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => {
                var t;
                const r = !(!e.prependAvatar && !e.prependIcon),
                    a = !(!r && !n.prepend),
                    o = !(!e.appendAvatar && !e.appendIcon),
                    l = !(!o && !n.append),
                    i = !(null == e.title && !n.title),
                    s = !(null == e.subtitle && !n.subtitle);
                return Ma("div", {
                    class: ["v-card-item", e.class],
                    style: e.style
                }, [a && Ma("div", {
                    key: "prepend",
                    class: "v-card-item__prepend"
                }, [n.prepend ? Ma(_g, {
                    key: "prepend-defaults",
                    disabled: !r,
                    defaults: {
                        VAvatar: {
                            density: e.density,
                            image: e.prependAvatar
                        },
                        VIcon: {
                            density: e.density,
                            icon: e.prependIcon
                        }
                    }
                }, n.prepend) : Ma(ma, null, [e.prependAvatar && Ma(rh, {
                    key: "prepend-avatar",
                    density: e.density,
                    image: e.prependAvatar
                }, null), e.prependIcon && Ma(Mg, {
                    key: "prepend-icon",
                    density: e.density,
                    icon: e.prependIcon
                }, null)])]), Ma("div", {
                    class: "v-card-item__content"
                }, [i && Ma(lm, {
                    key: "title"
                }, {
                    default() {
                        var t;
                        return [(null == (t = n.title) ? void 0 : t.call(n)) ?? e.title]
                    }
                }), s && Ma(om, {
                    key: "subtitle"
                }, {
                    default() {
                        var t;
                        return [(null == (t = n.subtitle) ? void 0 : t.call(n)) ?? e.subtitle]
                    }
                }), null == (t = n.default) ? void 0 : t.call(n)]), l && Ma("div", {
                    key: "append",
                    class: "v-card-item__append"
                }, [n.append ? Ma(_g, {
                    key: "append-defaults",
                    disabled: !o,
                    defaults: {
                        VAvatar: {
                            density: e.density,
                            image: e.appendAvatar
                        },
                        VIcon: {
                            density: e.density,
                            icon: e.appendIcon
                        }
                    }
                }, n.append) : Ma(ma, null, [e.appendIcon && Ma(Mg, {
                    key: "append-icon",
                    density: e.density,
                    icon: e.appendIcon
                }, null), e.appendAvatar && Ma(rh, {
                    key: "append-avatar",
                    density: e.density,
                    image: e.appendAvatar
                }, null)])])])
            })), {}
        }
    }),
    um = ld({
        opacity: [Number, String],
        ...id(),
        ...Pg()
    }, "VCardText"),
    cm = md()({
        name: "VCardText",
        props: um(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => Ma(e.tag, {
                class: ["v-card-text", e.class],
                style: [{
                    "--v-card-text-opacity": e.opacity
                }, e.style]
            }, n))), {}
        }
    }),
    dm = ld({
        appendAvatar: String,
        appendIcon: ap,
        disabled: Boolean,
        flat: Boolean,
        hover: Boolean,
        image: String,
        link: {
            type: Boolean,
            default: void 0
        },
        prependAvatar: String,
        prependIcon: ap,
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        subtitle: [String, Number],
        text: [String, Number],
        title: [String, Number],
        ...Zg(),
        ...id(),
        ...Kg(),
        ...Rg(),
        ...yh(),
        ...Ph(),
        ...oh(),
        ...Ih(),
        ...Bg(),
        ...ph(),
        ...Pg(),
        ...dp(),
        ...eh({
            variant: "elevated"
        })
    }, "VCard"),
    pm = md()({
        name: "VCard",
        directives: {
            Ripple: em
        },
        props: dm(),
        setup(e, t) {
            let {
                attrs: n,
                slots: r
            } = t;
            const {
                themeClasses: a
            } = pp(e), {
                borderClasses: o
            } = qg(e), {
                colorClasses: l,
                colorStyles: i,
                variantClasses: s
            } = th(e), {
                densityClasses: u
            } = Xg(e), {
                dimensionStyles: c
            } = Ig(e), {
                elevationClasses: d
            } = bh(e), {
                loaderClasses: p
            } = Vh(e), {
                locationStyles: f
            } = lh(e), {
                positionClasses: v
            } = Oh(e), {
                roundedClasses: g
            } = Dg(e), h = dh(e, n), m = ao((() => !1 !== e.link && h.isLink.value)), y = ao((() => !e.disabled && !1 !== e.link && (e.link || h.isClickable.value)));
            return Sd((() => {
                const t = m.value ? "a" : e.tag,
                    n = !(!r.title && null == e.title),
                    b = !(!r.subtitle && null == e.subtitle),
                    k = n || b,
                    w = !!(r.append || e.appendAvatar || e.appendIcon),
                    x = !!(r.prepend || e.prependAvatar || e.prependIcon),
                    C = !(!r.image && !e.image),
                    S = k || x || w,
                    _ = !(!r.text && null == e.text);
                return an(Ma(t, Na({
                    class: ["v-card", {
                        "v-card--disabled": e.disabled,
                        "v-card--flat": e.flat,
                        "v-card--hover": e.hover && !(e.disabled || e.flat),
                        "v-card--link": y.value
                    }, a.value, o.value, l.value, u.value, d.value, p.value, v.value, g.value, s.value, e.class],
                    style: [i.value, c.value, f.value, e.style],
                    onClick: y.value && h.navigate,
                    tabindex: e.disabled ? -1 : void 0
                }, h.linkProps), {
                    default() {
                        var t;
                        return [C && Ma("div", {
                            key: "image",
                            class: "v-card__image"
                        }, [r.image ? Ma(_g, {
                            key: "image-defaults",
                            disabled: !e.image,
                            defaults: {
                                VImg: {
                                    cover: !0,
                                    src: e.image
                                }
                            }
                        }, r.image) : Ma(Gg, {
                            key: "image-img",
                            cover: !0,
                            src: e.image
                        }, null)]), Ma(Mh, {
                            name: "v-card",
                            active: !!e.loading,
                            color: "boolean" == typeof e.loading ? void 0 : e.loading
                        }, {
                            default: r.loader
                        }), S && Ma(sm, {
                            key: "item",
                            prependAvatar: e.prependAvatar,
                            prependIcon: e.prependIcon,
                            title: e.title,
                            subtitle: e.subtitle,
                            appendAvatar: e.appendAvatar,
                            appendIcon: e.appendIcon
                        }, {
                            default: r.item,
                            prepend: r.prepend,
                            title: r.title,
                            subtitle: r.subtitle,
                            append: r.append
                        }), _ && Ma(cm, {
                            key: "text"
                        }, {
                            default() {
                                var t;
                                return [(null == (t = r.text) ? void 0 : t.call(r)) ?? e.text]
                            }
                        }), null == (t = r.default) ? void 0 : t.call(r), r.actions && Ma(rm, null, {
                            default: r.actions
                        }), Qg(y.value, "v-card")]
                    }
                }), [
                    [sr("ripple"), y.value && e.ripple]
                ])
            })), {}
        }
    }),
    fm = ld({
        disabled: Boolean,
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }, "transition");

function vm(e, t, n) {
    return md()({
        name: e,
        props: fm({
            mode: n,
            origin: t
        }),
        setup(t, n) {
            let {
                slots: r
            } = n;
            const a = {
                onBeforeEnter(e) {
                    t.origin && (e.style.transformOrigin = t.origin)
                },
                onLeave(e) {
                    if (t.leaveAbsolute) {
                        const {
                            offsetTop: t,
                            offsetLeft: n,
                            offsetWidth: r,
                            offsetHeight: a
                        } = e;
                        e._transitionInitialStyles = {
                            position: e.style.position,
                            top: e.style.top,
                            left: e.style.left,
                            width: e.style.width,
                            height: e.style.height
                        }, e.style.position = "absolute", e.style.top = `${t}px`, e.style.left = `${n}px`, e.style.width = `${r}px`, e.style.height = `${a}px`
                    }
                    t.hideOnLeave && e.style.setProperty("display", "none", "important")
                },
                onAfterLeave(e) {
                    if (t.leaveAbsolute && (null == e ? void 0 : e._transitionInitialStyles)) {
                        const {
                            position: t,
                            top: n,
                            left: r,
                            width: a,
                            height: o
                        } = e._transitionInitialStyles;
                        delete e._transitionInitialStyles, e.style.position = t || "", e.style.top = n || "", e.style.left = r || "", e.style.width = a || "", e.style.height = o || ""
                    }
                }
            };
            return () => oo(t.group ? rl : bo, {
                name: t.disabled ? "" : e,
                css: !t.disabled,
                ...t.group ? void 0 : {
                    mode: t.mode
                },
                ...t.disabled ? {} : a
            }, r.default)
        }
    })
}

function gm(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "in-out";
    return md()({
        name: e,
        props: {
            mode: {
                type: String,
                default: n
            },
            disabled: Boolean,
            group: Boolean
        },
        setup(n, r) {
            let {
                slots: a
            } = r;
            const o = n.group ? rl : bo;
            return () => oo(o, {
                name: n.disabled ? "" : e,
                css: !n.disabled,
                ...n.disabled ? {} : t
            }, a.default)
        }
    })
}

function hm() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "width" : "height",
        n = F(`offset-${t}`);
    return {
        onBeforeEnter(e) {
            e._parent = e.parentNode, e._initialStyle = {
                transition: e.style.transition,
                overflow: e.style.overflow,
                [t]: e.style[t]
            }
        },
        onEnter(r) {
            const a = r._initialStyle;
            r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
            const o = `${r[n]}px`;
            r.style[t] = "0", r.offsetHeight, r.style.transition = a.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame((() => {
                r.style[t] = o
            }))
        },
        onAfterEnter: a,
        onEnterCancelled: a,
        onLeave(e) {
            e._initialStyle = {
                transition: "",
                overflow: e.style.overflow,
                [t]: e.style[t]
            }, e.style.overflow = "hidden", e.style[t] = `${e[n]}px`, e.offsetHeight, requestAnimationFrame((() => e.style[t] = "0"))
        },
        onAfterLeave: r,
        onLeaveCancelled: r
    };

    function r(t) {
        e && t._parent && t._parent.classList.remove(e), a(t)
    }

    function a(e) {
        const n = e._initialStyle[t];
        e.style.overflow = e._initialStyle.overflow, null != n && (e.style[t] = n), delete e._initialStyle
    }
}
const mm = ld({
    target: [Object, Array]
}, "v-dialog-transition"),
    ym = md()({
        name: "VDialogTransition",
        props: mm(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = {
                onBeforeEnter(e) {
                    e.style.pointerEvents = "none", e.style.visibility = "hidden"
                },
                async onEnter(t, n) {
                    var r;
                    await new Promise((e => requestAnimationFrame(e))), await new Promise((e => requestAnimationFrame(e))), t.style.visibility = "";
                    const {
                        x: a,
                        y: o,
                        sx: l,
                        sy: i,
                        speed: s
                    } = km(e.target, t), u = Lc(t, [{
                        transform: `translate(${a}px, ${o}px) scale(${l}, ${i})`,
                        opacity: 0
                    }, {}], {
                        duration: 225 * s,
                        easing: "cubic-bezier(0.0, 0, 0.2, 1)"
                    });
                    null == (r = bm(t)) || r.forEach((e => {
                        Lc(e, [{
                            opacity: 0
                        }, {
                            opacity: 0,
                            offset: .33
                        }, {}], {
                            duration: 450 * s,
                            easing: kd
                        })
                    })), u.finished.then((() => n()))
                },
                onAfterEnter(e) {
                    e.style.removeProperty("pointer-events")
                },
                onBeforeLeave(e) {
                    e.style.pointerEvents = "none"
                },
                async onLeave(t, n) {
                    var r;
                    await new Promise((e => requestAnimationFrame(e)));
                    const {
                        x: a,
                        y: o,
                        sx: l,
                        sy: i,
                        speed: s
                    } = km(e.target, t);
                    Lc(t, [{}, {
                        transform: `translate(${a}px, ${o}px) scale(${l}, ${i})`,
                        opacity: 0
                    }], {
                        duration: 125 * s,
                        easing: "cubic-bezier(0.4, 0, 1, 1)"
                    }).finished.then((() => n())), null == (r = bm(t)) || r.forEach((e => {
                        Lc(e, [{}, {
                            opacity: 0,
                            offset: .2
                        }, {
                            opacity: 0
                        }], {
                            duration: 250 * s,
                            easing: kd
                        })
                    }))
                },
                onAfterLeave(e) {
                    e.style.removeProperty("pointer-events")
                }
            };
            return () => e.target ? Ma(bo, Na({
                name: "dialog-transition"
            }, r, {
                css: !1
            }), n) : Ma(bo, {
                name: "dialog-transition"
            }, n)
        }
    });

function bm(e) {
    var t;
    const n = null == (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) ? void 0 : t.children;
    return n && [...n]
}

function km(e, t) {
    const n = _c(e),
        r = Ac(t),
        [a, o] = getComputedStyle(t).transformOrigin.split(" ").map((e => parseFloat(e))),
        [l, i] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
    let s = n.left + n.width / 2;
    "left" === l || "left" === i ? s -= n.width / 2 : "right" !== l && "right" !== i || (s += n.width / 2);
    let u = n.top + n.height / 2;
    "top" === l || "top" === i ? u -= n.height / 2 : "bottom" !== l && "bottom" !== i || (u += n.height / 2);
    const c = n.width / r.width,
        d = n.height / r.height,
        p = Math.max(1, c, d),
        f = c / p || 0,
        v = d / p || 0,
        g = r.width * r.height / (window.innerWidth * window.innerHeight),
        h = g > .12 ? Math.min(1.5, 10 * (g - .12) + 1) : 1;
    return {
        x: s - (a + r.left),
        y: u - (o + r.top),
        sx: f,
        sy: v,
        speed: h
    }
}
vm("fab-transition", "center center", "out-in"), vm("dialog-bottom-transition"), vm("dialog-top-transition"), vm("fade-transition");
const wm = vm("scale-transition");
vm("scroll-x-transition"), vm("scroll-x-reverse-transition"), vm("scroll-y-transition"), vm("scroll-y-reverse-transition"), vm("slide-x-transition"), vm("slide-x-reverse-transition");
const xm = vm("slide-y-transition");
vm("slide-y-reverse-transition");
const Cm = gm("expand-transition", hm()),
    Sm = gm("expand-x-transition", hm("", !0));

function _m(e, t) {
    return {
        x: e.x + t.x,
        y: e.y + t.y
    }
}

function Am(e, t) {
    if ("top" === e.side || "bottom" === e.side) {
        const {
            side: n,
            align: r
        } = e;
        return _m({
            x: "left" === r ? 0 : "center" === r ? t.width / 2 : "right" === r ? t.width : r,
            y: "top" === n ? 0 : "bottom" === n ? t.height : n
        }, t)
    }
    if ("left" === e.side || "right" === e.side) {
        const {
            side: n,
            align: r
        } = e;
        return _m({
            x: "left" === n ? 0 : "right" === n ? t.width : n,
            y: "top" === r ? 0 : "center" === r ? t.height / 2 : "bottom" === r ? t.height : r
        }, t)
    }
    return _m({
        x: t.width / 2,
        y: t.height / 2
    }, t)
}
const Lm = {
    static() { },
    connected(e, t, n) {
        (Array.isArray(e.target.value) || function (e) {
            for (; e;) {
                if ("fixed" === window.getComputedStyle(e).position) return !0;
                e = e.offsetParent
            }
            return !1
        }(e.target.value)) && Object.assign(n.value, {
            position: "fixed",
            top: 0,
            [e.isRtl.value ? "right" : "left"]: 0
        });
        const {
            preferredAnchor: r,
            preferredOrigin: a
        } = oc((() => {
            const n = mc(t.location, e.isRtl.value),
                r = "overlap" === t.origin ? n : "auto" === t.origin ? bc(n) : mc(t.origin, e.isRtl.value);
            return n.side === r.side && n.align === kc(r).align ? {
                preferredAnchor: wc(n),
                preferredOrigin: wc(r)
            } : {
                preferredAnchor: n,
                preferredOrigin: r
            }
        })), [o, l, i, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((e => ao((() => {
            const n = parseFloat(t[e]);
            return isNaN(n) ? 1 / 0 : n
        })))), u = ao((() => {
            if (Array.isArray(t.offset)) return t.offset;
            if ("string" == typeof t.offset) {
                const e = t.offset.split(" ").map(parseFloat);
                return e.length < 2 && e.push(0), e
            }
            return "number" == typeof t.offset ? [t.offset, 0] : [0, 0]
        }));
        let c = !1;
        const d = new ResizeObserver((() => {
            c && p()
        }));

        function p() {
            if (c = !1, requestAnimationFrame((() => c = !0)), !e.target.value || !e.contentEl.value) return;
            const t = _c(e.target.value),
                d = function (e, t) {
                    const n = Ac(e);
                    return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n
                }(e.contentEl.value, e.isRtl.value),
                p = wd(e.contentEl.value);
            p.length || (p.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (d.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), d.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
            const f = p.reduce(((e, t) => {
                const n = t.getBoundingClientRect(),
                    r = new Cc({
                        x: t === document.documentElement ? 0 : n.x,
                        y: t === document.documentElement ? 0 : n.y,
                        width: t.clientWidth,
                        height: t.clientHeight
                    });
                return e ? new Cc({
                    x: Math.max(e.left, r.left),
                    y: Math.max(e.top, r.top),
                    width: Math.min(e.right, r.right) - Math.max(e.left, r.left),
                    height: Math.min(e.bottom, r.bottom) - Math.max(e.top, r.top)
                }) : r
            }), void 0);
            f.x += 12, f.y += 12, f.width -= 24, f.height -= 24;
            let v = {
                anchor: r.value,
                origin: a.value
            };

            function g(e) {
                const n = new Cc(d),
                    r = Am(e.anchor, t),
                    a = Am(e.origin, n);
                let {
                    x: o,
                    y: l
                } = (p = a, {
                    x: (c = r).x - p.x,
                    y: c.y - p.y
                });
                var c, p;
                switch (e.anchor.side) {
                    case "top":
                        l -= u.value[0];
                        break;
                    case "bottom":
                        l += u.value[0];
                        break;
                    case "left":
                        o -= u.value[0];
                        break;
                    case "right":
                        o += u.value[0]
                }
                switch (e.anchor.align) {
                    case "top":
                        l -= u.value[1];
                        break;
                    case "bottom":
                        l += u.value[1];
                        break;
                    case "left":
                        o -= u.value[1];
                        break;
                    case "right":
                        o += u.value[1]
                }
                return n.x += o, n.y += l, n.width = Math.min(n.width, i.value), n.height = Math.min(n.height, s.value), {
                    overflows: Sc(n, f),
                    x: o,
                    y: l
                }
            }
            let h = 0,
                m = 0;
            const y = {
                x: 0,
                y: 0
            },
                b = {
                    x: !1,
                    y: !1
                };
            let k = -1;
            for (; !(k++ > 10);) {
                const {
                    x: e,
                    y: t,
                    overflows: n
                } = g(v);
                h += e, m += t, d.x += e, d.y += t;
                {
                    const e = xc(v.anchor),
                        t = n.x.before || n.x.after,
                        r = n.y.before || n.y.after;
                    let a = !1;
                    if (["x", "y"].forEach((o => {
                        if ("x" === o && t && !b.x || "y" === o && r && !b.y) {
                            const t = {
                                anchor: {
                                    ...v.anchor
                                },
                                origin: {
                                    ...v.origin
                                }
                            },
                                r = "x" === o ? "y" === e ? kc : bc : "y" === e ? bc : kc;
                            t.anchor = r(t.anchor), t.origin = r(t.origin);
                            const {
                                overflows: l
                            } = g(t);
                            (l[o].before <= n[o].before && l[o].after <= n[o].after || l[o].before + l[o].after < (n[o].before + n[o].after) / 2) && (v = t, a = b[o] = !0)
                        }
                    })), a) continue
                }
                n.x.before && (h += n.x.before, d.x += n.x.before), n.x.after && (h -= n.x.after, d.x -= n.x.after), n.y.before && (m += n.y.before, d.y += n.y.before), n.y.after && (m -= n.y.after, d.y -= n.y.after);
                {
                    const e = Sc(d, f);
                    y.x = f.width - e.x.before - e.x.after, y.y = f.height - e.y.before - e.y.after, h += e.x.before, d.x += e.x.before, m += e.y.before, d.y += e.y.before
                }
                break
            }
            const w = xc(v.anchor);
            return Object.assign(n.value, {
                "--v-overlay-anchor-origin": `${v.anchor.side} ${v.anchor.align}`,
                transformOrigin: `${v.origin.side} ${v.origin.align}`,
                top: Ou(Em(m)),
                left: e.isRtl.value ? void 0 : Ou(Em(h)),
                right: e.isRtl.value ? Ou(Em(-h)) : void 0,
                minWidth: Ou("y" === w ? Math.min(o.value, t.width) : o.value),
                maxWidth: Ou(Fm(Xu(y.x, o.value === 1 / 0 ? 0 : o.value, i.value))),
                maxHeight: Ou(Fm(Xu(y.y, l.value === 1 / 0 ? 0 : l.value, s.value)))
            }), {
                available: y,
                contentBox: d
            }
        }
        return aa([e.target, e.contentEl], ((e, t) => {
            let [n, r] = e, [a, o] = t;
            a && !Array.isArray(a) && d.unobserve(a), n && !Array.isArray(n) && d.observe(n), o && d.unobserve(o), r && d.observe(r)
        }), {
            immediate: !0
        }), re((() => {
            d.disconnect()
        })), aa((() => [r.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight]), (() => p())), Zt((() => {
            const e = p();
            if (!e) return;
            const {
                available: t,
                contentBox: n
            } = e;
            n.height > t.y && requestAnimationFrame((() => {
                p(), requestAnimationFrame((() => {
                    p()
                }))
            }))
        })), {
            updateLocation: p
        }
    }
},
    Tm = ld({
        locationStrategy: {
            type: [String, Function],
            default: "static",
            validator: e => "function" == typeof e || e in Lm
        },
        location: {
            type: String,
            default: "bottom"
        },
        origin: {
            type: String,
            default: "auto"
        },
        offset: [Number, String, Array]
    }, "VOverlay-location-strategies");

function Em(e) {
    return Math.round(e * devicePixelRatio) / devicePixelRatio
}

function Fm(e) {
    return Math.ceil(e * devicePixelRatio) / devicePixelRatio
}
let $m = !0;
const Pm = [];
let Vm = -1;

function Mm() {
    cancelAnimationFrame(Vm), Vm = requestAnimationFrame((() => {
        const e = Pm.shift();
        e && e(), Pm.length ? Mm() : $m = !0
    }))
}
const Rm = {
    none: null,
    close(e) {
        Om(e.targetEl.value ?? e.contentEl.value, (function (t) {
            e.isActive.value = !1
        }))
    },
    block(e, t) {
        var n;
        const r = null == (n = e.root.value) ? void 0 : n.offsetParent,
            a = [...new Set([...wd(e.targetEl.value, t.contained ? r : void 0), ...wd(e.contentEl.value, t.contained ? r : void 0)])].filter((e => !e.classList.contains("v-overlay-scroll-blocked"))),
            o = window.innerWidth - document.documentElement.offsetWidth,
            l = xd(i = r || document.documentElement) && i;
        var i;
        l && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach(((e, t) => {
            e.style.setProperty("--v-body-scroll-x", Ou(-e.scrollLeft)), e.style.setProperty("--v-body-scroll-y", Ou(-e.scrollTop)), e !== document.documentElement && e.style.setProperty("--v-scrollbar-offset", Ou(o)), e.classList.add("v-overlay-scroll-blocked")
        })), re((() => {
            a.forEach(((e, t) => {
                const n = parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),
                    r = parseFloat(e.style.getPropertyValue("--v-body-scroll-y")),
                    a = e.style.scrollBehavior;
                e.style.scrollBehavior = "auto", e.style.removeProperty("--v-body-scroll-x"), e.style.removeProperty("--v-body-scroll-y"), e.style.removeProperty("--v-scrollbar-offset"), e.classList.remove("v-overlay-scroll-blocked"), e.scrollLeft = -n, e.scrollTop = -r, e.style.scrollBehavior = a
            })), l && e.root.value.classList.remove("v-overlay--scroll-blocked")
        }))
    },
    reposition(e, t, n) {
        let r = !1,
            a = -1,
            o = -1;

        function l(t) {
            var n;
            n = () => {
                var n, a;
                const o = performance.now();
                null == (a = (n = e.updateLocation).value) || a.call(n, t);
                const l = performance.now() - o;
                r = l / (1e3 / 60) > 2
            }, !$m || Pm.length ? (Pm.push(n), Mm()) : ($m = !1, n(), Mm())
        }
        o = ("undefined" == typeof requestIdleCallback ? e => e() : requestIdleCallback)((() => {
            n.run((() => {
                Om(e.targetEl.value ?? e.contentEl.value, (e => {
                    r ? (cancelAnimationFrame(a), a = requestAnimationFrame((() => {
                        a = requestAnimationFrame((() => {
                            l(e)
                        }))
                    }))) : l(e)
                }))
            }))
        })), re((() => {
            "undefined" != typeof cancelIdleCallback && cancelIdleCallback(o), cancelAnimationFrame(a)
        }))
    }
},
    Im = ld({
        scrollStrategy: {
            type: [String, Function],
            default: "block",
            validator: e => "function" == typeof e || e in Rm
        }
    }, "VOverlay-scroll-strategies");

function Om(e, t) {
    const n = [document, ...wd(e)];
    n.forEach((e => {
        e.addEventListener("scroll", t, {
            passive: !0
        })
    })), re((() => {
        n.forEach((e => {
            e.removeEventListener("scroll", t)
        }))
    }))
}
const Hm = Symbol.for("vuetify:v-menu"),
    Bm = ld({
        closeDelay: [Number, String],
        openDelay: [Number, String]
    }, "delay");
const Dm = ld({
    target: [String, Object],
    activator: [String, Object],
    activatorProps: {
        type: Object,
        default: () => ({})
    },
    openOnClick: {
        type: Boolean,
        default: void 0
    },
    openOnHover: Boolean,
    openOnFocus: {
        type: Boolean,
        default: void 0
    },
    closeOnContentClick: Boolean,
    ...Bm()
}, "VOverlay-activator");

function Nm(e, t) {
    let {
        isActive: n,
        isTop: r,
        contentEl: a
    } = t;
    const o = sd("useActivator"),
        l = kt();
    let i = !1,
        s = !1,
        u = !0;
    const c = ao((() => e.openOnFocus || null == e.openOnFocus && e.openOnHover)),
        d = ao((() => e.openOnClick || null == e.openOnClick && !e.openOnHover && !c.value)),
        {
            runOpenDelay: p,
            runCloseDelay: f
        } = function (e, t) {
            let n = () => { };

            function r(r) {
                null == n || n();
                const a = Number(r ? e.openDelay : e.closeDelay);
                return new Promise((e => {
                    n = function (e, t) {
                        if (!Eu || 0 === e) return t(), () => { };
                        const n = window.setTimeout(t, e);
                        return () => window.clearTimeout(n)
                    }(a, (() => {
                        null == t || t(r), e(r)
                    }))
                }))
            }
            return {
                clearDelay: n,
                runOpenDelay() {
                    return r(!0)
                },
                runCloseDelay() {
                    return r(!1)
                }
            }
        }(e, (t => {
            t !== (e.openOnHover && i || c.value && s) || e.openOnHover && n.value && !r.value || (n.value !== t && (u = !0), n.value = t)
        })),
        v = kt(),
        g = e => {
            e.stopPropagation(), l.value = e.currentTarget || e.target, n.value || (v.value = [e.clientX, e.clientY]), n.value = !n.value
        },
        h = e => {
            var t;
            (null == (t = e.sourceCapabilities) ? void 0 : t.firesTouchEvents) || (i = !0, l.value = e.currentTarget || e.target, p())
        },
        m = e => {
            i = !1, f()
        },
        y = e => {
            !1 !== function (e, t) {
                if (!Eu || "undefined" == typeof CSS || void 0 === CSS.supports || !CSS.supports(`selector(${t})`)) return null;
                try {
                    return !!e && e.matches(t)
                } catch (n) {
                    return null
                }
            }(e.target, ":focus-visible") && (s = !0, e.stopPropagation(), l.value = e.currentTarget || e.target, p())
        },
        b = e => {
            s = !1, e.stopPropagation(), f()
        },
        k = ao((() => {
            const t = {};
            return d.value && (t.onClick = g), e.openOnHover && (t.onMouseenter = h, t.onMouseleave = m), c.value && (t.onFocus = y, t.onBlur = b), t
        })),
        w = ao((() => {
            const t = {};
            if (e.openOnHover && (t.onMouseenter = () => {
                i = !0, p()
            }, t.onMouseleave = () => {
                i = !1, f()
            }), c.value && (t.onFocusin = () => {
                s = !0, p()
            }, t.onFocusout = () => {
                s = !1, f()
            }), e.closeOnContentClick) {
                const e = Vr(Hm, null);
                t.onClick = () => {
                    n.value = !1, null == e || e.closeParents()
                }
            }
            return t
        })),
        x = ao((() => {
            const t = {};
            return e.openOnHover && (t.onMouseenter = () => {
                u && (i = !0, u = !1, p())
            }, t.onMouseleave = () => {
                i = !1, f()
            }), t
        }));
    aa(r, (t => {
        var r;
        !t || (!e.openOnHover || i || c.value && s) && (!c.value || s || e.openOnHover && i) || (null == (r = a.value) ? void 0 : r.contains(document.activeElement)) || (n.value = !1)
    })), aa(n, (e => {
        e || setTimeout((() => {
            v.value = void 0
        }))
    }), {
        flush: "post"
    });
    const C = vc();
    ra((() => {
        C.value && Zt((() => {
            l.value = C.el
        }))
    }));
    const S = vc(),
        _ = ao((() => "cursor" === e.target && v.value ? v.value : S.value ? S.el : zm(e.target, o) || l.value)),
        A = ao((() => Array.isArray(_.value) ? void 0 : _.value));
    let L;
    return aa((() => !!e.activator), (t => {
        t && Eu ? (L = ne(), L.run((() => {
            ! function (e, t, n) {
                let {
                    activatorEl: r,
                    activatorEvents: a
                } = n;

                function o() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i(),
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.activatorProps;
                    t && function (e, t) {
                        Object.keys(t).forEach((n => {
                            var r;
                            if (Zu(n)) {
                                const a = ic(n),
                                    o = Tc.get(e);
                                if (null == t[n]) null == o || o.forEach((t => {
                                    const [n, r] = t;
                                    n === a && (e.removeEventListener(a, r), o.delete(t))
                                }));
                                else if (!o || !(null == (r = [...o]) ? void 0 : r.some((e => e[0] === a && e[1] === t[n])))) {
                                    e.addEventListener(a, t[n]);
                                    const r = o || new Set;
                                    r.add([a, t[n]]), Tc.has(e) || Tc.set(e, r)
                                }
                            } else null == t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        }))
                    }(t, Na(a.value, n))
                }

                function l() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i(),
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.activatorProps;
                    t && function (e, t) {
                        Object.keys(t).forEach((t => {
                            if (Zu(t)) {
                                const n = ic(t),
                                    r = Tc.get(e);
                                null == r || r.forEach((t => {
                                    const [a, o] = t;
                                    a === n && (e.removeEventListener(n, o), r.delete(t))
                                }))
                            } else e.removeAttribute(t)
                        }))
                    }(t, Na(a.value, n))
                }

                function i() {
                    const n = zm(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.activator, t);
                    return r.value = (null == n ? void 0 : n.nodeType) === Node.ELEMENT_NODE ? n : void 0, r.value
                }
                aa((() => e.activator), ((e, t) => {
                    if (t && e !== t) {
                        const e = i(t);
                        e && l(e)
                    }
                    e && Zt((() => o()))
                }), {
                    immediate: !0
                }), aa((() => e.activatorProps), (() => {
                    o()
                })), re((() => {
                    l()
                }))
            }(e, o, {
                activatorEl: l,
                activatorEvents: k
            })
        }))) : L && L.stop()
    }), {
        flush: "post",
        immediate: !0
    }), re((() => {
        null == L || L.stop()
    })), {
        activatorEl: l,
        activatorRef: C,
        target: _,
        targetEl: A,
        targetRef: S,
        activatorEvents: k,
        contentEvents: w,
        scrimEvents: x
    }
}

function zm(e, t) {
    var n, r;
    if (!e) return;
    let a;
    if ("parent" === e) {
        let e = null == (r = null == (n = null == t ? void 0 : t.proxy) ? void 0 : n.$el) ? void 0 : r.parentNode;
        for (; null == e ? void 0 : e.hasAttribute("data-no-activator");) e = e.parentNode;
        a = e
    } else a = "string" == typeof e ? document.querySelector(e) : "$el" in e ? e.$el : e;
    return a
}
const jm = ld({
    eager: Boolean
}, "lazy");

function Um() {
    const e = sd("useScopeId").vnode.scopeId;
    return {
        scopeId: e ? {
            [e]: ""
        } : void 0
    }
}
const Wm = Symbol.for("vuetify:stack"),
    Gm = st([]);

function Zm() {
    return !0
}

function qm(e, t, n) {
    if (!e || !1 === Ym(e, n)) return !1;
    const r = bd(t);
    if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && r.host === e.target) return !1;
    const a = ("object" == typeof n.value && n.value.include || (() => []))();
    return a.push(t), !a.some((t => null == t ? void 0 : t.contains(e.target)))
}

function Ym(e, t) {
    return ("object" == typeof t.value && t.value.closeConditional || Zm)(e)
}

function Km(e, t) {
    const n = bd(e);
    t(document), "undefined" != typeof ShadowRoot && n instanceof ShadowRoot && t(n)
}
const Xm = {
    mounted(e, t) {
        const n = n => function (e, t, n) {
            const r = "function" == typeof n.value ? n.value : n.value.handler;
            e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && qm(e, t, n) && setTimeout((() => {
                Ym(e, n) && r && r(e)
            }), 0)
        }(n, e, t),
            r = n => {
                e._clickOutside.lastMousedownWasOutside = qm(n, e, t)
            };
        Km(e, (e => {
            e.addEventListener("click", n, !0), e.addEventListener("mousedown", r, !0)
        })), e._clickOutside || (e._clickOutside = {
            lastMousedownWasOutside: !1
        }), e._clickOutside[t.instance.$.uid] = {
            onClick: n,
            onMousedown: r
        }
    },
    beforeUnmount(e, t) {
        e._clickOutside && (Km(e, (n => {
            var r;
            if (!n || !(null == (r = e._clickOutside) ? void 0 : r[t.instance.$.uid])) return;
            const {
                onClick: a,
                onMousedown: o
            } = e._clickOutside[t.instance.$.uid];
            n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", o, !0)
        })), delete e._clickOutside[t.instance.$.uid])
    }
};

function Jm(e) {
    const {
        modelValue: t,
        color: n,
        ...r
    } = e;
    return Ma(bo, {
        name: "fade-transition",
        appear: !0
    }, {
        default: () => [e.modelValue && Ma("div", Na({
            class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
            style: e.color.backgroundColorStyles.value
        }, r), null)]
    })
}
const Qm = ld({
    absolute: Boolean,
    attach: [Boolean, String, Object],
    closeOnBack: {
        type: Boolean,
        default: !0
    },
    contained: Boolean,
    contentClass: null,
    contentProps: null,
    disabled: Boolean,
    opacity: [Number, String],
    noClickAnimation: Boolean,
    modelValue: Boolean,
    persistent: Boolean,
    scrim: {
        type: [Boolean, String],
        default: !0
    },
    zIndex: {
        type: [Number, String],
        default: 2e3
    },
    ...Dm(),
    ...id(),
    ...Rg(),
    ...jm(),
    ...Tm(),
    ...Im(),
    ...dp(),
    ...Ng()
}, "VOverlay"),
    ey = md()({
        name: "VOverlay",
        directives: {
            ClickOutside: Xm
        },
        inheritAttrs: !1,
        props: {
            _disableGlobalStack: Boolean,
            ...Qm()
        },
        emits: {
            "click:outside": e => !0,
            "update:modelValue": e => !0,
            afterEnter: () => !0,
            afterLeave: () => !0
        },
        setup(e, t) {
            let {
                slots: n,
                attrs: r,
                emit: a
            } = t;
            const o = sd("VOverlay"),
                l = kt(),
                i = kt(),
                s = kt(),
                u = _d(e, "modelValue"),
                c = ao({
                    get: () => u.value,
                    set(t) {
                        t && e.disabled || (u.value = t)
                    }
                }),
                {
                    themeClasses: d
                } = pp(e),
                {
                    rtlClasses: p,
                    isRtl: f
                } = Rd(),
                {
                    hasContent: v,
                    onAfterLeave: g
                } = function (e, t) {
                    const n = wt(!1),
                        r = ao((() => n.value || e.eager || t.value));
                    return aa(t, (() => n.value = !0)), {
                        isBooted: n,
                        hasContent: r,
                        onAfterLeave() {
                            e.eager || (n.value = !1)
                        }
                    }
                }(e, c),
                h = Tg(ao((() => "string" == typeof e.scrim ? e.scrim : null))),
                {
                    globalTop: m,
                    localTop: y,
                    stackStyles: b
                } = function (e, t, n) {
                    const r = sd("useStack"),
                        a = !n,
                        o = Vr(Wm, void 0),
                        l = st({
                            activeChildren: new Set
                        });
                    Pr(Wm, l);
                    const i = wt(+t.value);
                    Tu(e, (() => {
                        var e;
                        const n = null == (e = Gm.at(-1)) ? void 0 : e[1];
                        i.value = n ? n + 10 : +t.value, a && Gm.push([r.uid, i.value]), null == o || o.activeChildren.add(r.uid), re((() => {
                            if (a) {
                                const e = ht(Gm).findIndex((e => e[0] === r.uid));
                                Gm.splice(e, 1)
                            }
                            null == o || o.activeChildren.delete(r.uid)
                        }))
                    }));
                    const s = wt(!0);
                    a && ra((() => {
                        var e;
                        const t = (null == (e = Gm.at(-1)) ? void 0 : e[0]) === r.uid;
                        setTimeout((() => s.value = t))
                    }));
                    const u = ao((() => !l.activeChildren.size));
                    return {
                        globalTop: ct(s),
                        localTop: u,
                        stackStyles: ao((() => ({
                            zIndex: i.value
                        })))
                    }
                }(c, Ft(e, "zIndex"), e._disableGlobalStack),
                {
                    activatorEl: k,
                    activatorRef: w,
                    target: x,
                    targetEl: C,
                    targetRef: S,
                    activatorEvents: _,
                    contentEvents: A,
                    scrimEvents: L
                } = Nm(e, {
                    isActive: c,
                    isTop: y,
                    contentEl: s
                }),
                {
                    teleportTarget: T
                } = {
                    teleportTarget: ao((() => {
                        const t = (() => {
                            var t, n, r;
                            const a = e.attach || e.contained;
                            if (a) return a;
                            const l = (null == (t = null == k ? void 0 : k.value) ? void 0 : t.getRootNode()) || (null == (r = null == (n = o.proxy) ? void 0 : n.$el) ? void 0 : r.getRootNode());
                            return l instanceof ShadowRoot && l
                        })();
                        if (!0 === t || !Eu) return;
                        const n = !1 === t ? document.body : "string" == typeof t ? document.querySelector(t) : t;
                        if (null == n) return;
                        let r = [...n.children].find((e => e.matches(".v-overlay-container")));
                        return r || (r = document.createElement("div"), r.className = "v-overlay-container", n.appendChild(r)), r
                    }))
                },
                {
                    dimensionStyles: E
                } = Ig(e),
                F = function () {
                    if (!Eu) return wt(!1);
                    const {
                        ssr: e
                    } = ep();
                    if (e) {
                        const e = wt(!1);
                        return Yn((() => {
                            e.value = !0
                        })), e
                    }
                    return wt(!0)
                }(),
                {
                    scopeId: $
                } = Um();
            aa((() => e.disabled), (e => {
                e && (c.value = !1)
            }));
            const {
                contentStyles: P,
                updateLocation: V
            } = function (e, t) {
                const n = kt({}),
                    r = kt();

                function a(e) {
                    var t;
                    null == (t = r.value) || t.call(r, e)
                }
                return Eu && Tu((() => !(!t.isActive.value || !e.locationStrategy)), (o => {
                    var l, i;
                    aa((() => e.locationStrategy), o), re((() => {
                        window.removeEventListener("resize", a), r.value = void 0
                    })), window.addEventListener("resize", a, {
                        passive: !0
                    }), "function" == typeof e.locationStrategy ? r.value = null == (l = e.locationStrategy(t, e, n)) ? void 0 : l.updateLocation : r.value = null == (i = Lm[e.locationStrategy](t, e, n)) ? void 0 : i.updateLocation
                })), {
                    contentStyles: n,
                    updateLocation: r
                }
            }(e, {
                isRtl: f,
                contentEl: s,
                target: x,
                isActive: c
            });

            function M(t) {
                a("click:outside", t), e.persistent ? N() : c.value = !1
            }

            function R(t) {
                return c.value && m.value && (!e.scrim || t.target === i.value || t instanceof MouseEvent && t.shadowTarget === i.value)
            }

            function I(t) {
                var n, r;
                "Escape" === t.key && m.value && (e.persistent ? N() : (c.value = !1, (null == (n = s.value) ? void 0 : n.contains(document.activeElement)) && (null == (r = k.value) || r.focus())))
            } ! function (e, t) {
                if (!Eu) return;
                let n;
                ra((async () => {
                    null == n || n.stop(), t.isActive.value && e.scrollStrategy && (n = ne(), await new Promise((e => setTimeout(e))), n.active && n.run((() => {
                        var r;
                        "function" == typeof e.scrollStrategy ? e.scrollStrategy(t, e, n) : null == (r = Rm[e.scrollStrategy]) || r.call(Rm, t, e, n)
                    })))
                })), re((() => {
                    null == n || n.stop()
                }))
            }(e, {
                root: l,
                contentEl: s,
                targetEl: C,
                isActive: c,
                updateLocation: V
            }), Eu && aa(c, (e => {
                e ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I)
            }), {
                immediate: !0
            }), Jn((() => {
                Eu && window.removeEventListener("keydown", I)
            }));
            const O = null == (B = null == (H = sd("useRouter")) ? void 0 : H.proxy) ? void 0 : B.$router;
            var H, B;
            Tu((() => e.closeOnBack), (() => {
                ! function (e, t) {
                    let n, r, a = !1;

                    function o(e) {
                        var t;
                        (null == (t = e.state) ? void 0 : t.replaced) || (a = !0, setTimeout((() => a = !1)))
                    }
                    Eu && (Zt((() => {
                        window.addEventListener("popstate", o), n = null == e ? void 0 : e.beforeEach(((e, n, r) => {
                            fh ? a ? t(r) : r() : setTimeout((() => a ? t(r) : r())), fh = !0
                        })), r = null == e ? void 0 : e.afterEach((() => {
                            fh = !1
                        }))
                    })), re((() => {
                        window.removeEventListener("popstate", o), null == n || n(), null == r || r()
                    })))
                }(O, (t => {
                    m.value && c.value ? (t(!1), e.persistent ? N() : c.value = !1) : t()
                }))
            }));
            const D = kt();

            function N() {
                e.noClickAnimation || s.value && Lc(s.value, [{
                    transformOrigin: "center"
                }, {
                    transform: "scale(1.03)"
                }, {
                    transformOrigin: "center"
                }], {
                    duration: 150,
                    easing: kd
                })
            }

            function z() {
                a("afterEnter")
            }

            function j() {
                g(), a("afterLeave")
            }
            return aa((() => c.value && (e.absolute || e.contained) && null == T.value), (e => {
                if (e) {
                    const e = function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        for (; e;) {
                            if (t ? Cd(e) : xd(e)) return e;
                            e = e.parentElement
                        }
                        return document.scrollingElement
                    }(l.value);
                    e && e !== document.scrollingElement && (D.value = e.scrollTop)
                }
            })), Sd((() => {
                var t;
                return Ma(ma, null, [null == (t = n.activator) ? void 0 : t.call(n, {
                    isActive: c.value,
                    targetRef: S,
                    props: Na({
                        ref: w
                    }, _.value, e.activatorProps)
                }), F.value && v.value && Ma(hn, {
                    disabled: !T.value,
                    to: T.value
                }, {
                    default: () => [Ma("div", Na({
                        class: ["v-overlay", {
                            "v-overlay--absolute": e.absolute || e.contained,
                            "v-overlay--active": c.value,
                            "v-overlay--contained": e.contained
                        }, d.value, p.value, e.class],
                        style: [b.value, {
                            "--v-overlay-opacity": e.opacity,
                            top: Ou(D.value)
                        }, e.style],
                        ref: l
                    }, $, r), [Ma(Jm, Na({
                        color: h,
                        modelValue: c.value && !!e.scrim,
                        ref: i
                    }, L.value), null), Ma(zg, {
                        appear: !0,
                        persisted: !0,
                        transition: e.transition,
                        target: x.value,
                        onAfterEnter: z,
                        onAfterLeave: j
                    }, {
                        default() {
                            var t;
                            return [an(Ma("div", Na({
                                ref: s,
                                class: ["v-overlay__content", e.contentClass],
                                style: [E.value, P.value]
                            }, A.value, e.contentProps), [null == (t = n.default) ? void 0 : t.call(n, {
                                isActive: c
                            })]), [
                                [Ro, c.value],
                                [sr("click-outside"), {
                                    handler: M,
                                    closeConditional: R,
                                    include: () => [k.value]
                                }]
                            ])]
                        }
                    })])]
                })])
            })), {
                activatorEl: k,
                scrimEl: i,
                target: x,
                animateClick: N,
                contentEl: s,
                globalTop: m,
                localTop: y,
                updateLocation: V
            }
        }
    }),
    ty = Symbol("Forwarded refs");

function ny(e, t) {
    let n = e;
    for (; n;) {
        const e = Reflect.getOwnPropertyDescriptor(n, t);
        if (e) return e;
        n = Object.getPrototypeOf(n)
    }
}

function ry(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return e[ty] = n, new Proxy(e, {
        get(e, t) {
            if (Reflect.has(e, t)) return Reflect.get(e, t);
            if ("symbol" != typeof t && !t.startsWith("$") && !t.startsWith("__"))
                for (const r of n)
                    if (r.value && Reflect.has(r.value, t)) {
                        const e = Reflect.get(r.value, t);
                        return "function" == typeof e ? e.bind(r.value) : e
                    }
        },
        has(e, t) {
            if (Reflect.has(e, t)) return !0;
            if ("symbol" == typeof t || t.startsWith("$") || t.startsWith("__")) return !1;
            for (const r of n)
                if (r.value && Reflect.has(r.value, t)) return !0;
            return !1
        },
        set(e, t, r) {
            if (Reflect.has(e, t)) return Reflect.set(e, t, r);
            if ("symbol" == typeof t || t.startsWith("$") || t.startsWith("__")) return !1;
            for (const a of n)
                if (a.value && Reflect.has(a.value, t)) return Reflect.set(a.value, t, r);
            return !1
        },
        getOwnPropertyDescriptor(e, t) {
            var r;
            const a = Reflect.getOwnPropertyDescriptor(e, t);
            if (a) return a;
            if ("symbol" != typeof t && !t.startsWith("$") && !t.startsWith("__")) {
                for (const e of n) {
                    if (!e.value) continue;
                    const n = ny(e.value, t) ?? ("_" in e.value ? ny(null == (r = e.value._) ? void 0 : r.setupState, t) : void 0);
                    if (n) return n
                }
                for (const e of n) {
                    const n = e.value && e.value[ty];
                    if (!n) continue;
                    const r = n.slice();
                    for (; r.length;) {
                        const e = r.shift(),
                            n = ny(e.value, t);
                        if (n) return n;
                        const a = e.value && e.value[ty];
                        a && r.push(...a)
                    }
                }
            }
        }
    })
}
const ay = ld({
    fullscreen: Boolean,
    retainFocus: {
        type: Boolean,
        default: !0
    },
    scrollable: Boolean,
    ...Qm({
        origin: "center center",
        scrollStrategy: "block",
        transition: {
            component: ym
        },
        zIndex: 2400
    })
}, "VDialog"),
    oy = md()({
        name: "VDialog",
        props: ay(),
        emits: {
            "update:modelValue": e => !0,
            afterEnter: () => !0,
            afterLeave: () => !0
        },
        setup(e, t) {
            let {
                emit: n,
                slots: r
            } = t;
            const a = _d(e, "modelValue"),
                {
                    scopeId: o
                } = Um(),
                l = kt();

            function i(e) {
                var t, n;
                const r = e.relatedTarget,
                    a = e.target;
                if (r !== a && (null == (t = l.value) ? void 0 : t.contentEl) && (null == (n = l.value) ? void 0 : n.globalTop) && ![document, l.value.contentEl].includes(a) && !l.value.contentEl.contains(a)) {
                    const e = dc(l.value.contentEl);
                    if (!e.length) return;
                    const t = e[0],
                        n = e[e.length - 1];
                    r === t ? n.focus() : t.focus()
                }
            }

            function s() {
                var e;
                n("afterEnter"), (null == (e = l.value) ? void 0 : e.contentEl) && !l.value.contentEl.contains(document.activeElement) && l.value.contentEl.focus({
                    preventScroll: !0
                })
            }

            function u() {
                n("afterLeave")
            }
            return Jn((() => {
                document.removeEventListener("focusin", i)
            })), Eu && aa((() => a.value && e.retainFocus), (e => {
                e ? document.addEventListener("focusin", i) : document.removeEventListener("focusin", i)
            }), {
                immediate: !0
            }), aa(a, (async e => {
                var t;
                e || (await Zt(), null == (t = l.value.activatorEl) || t.focus({
                    preventScroll: !0
                }))
            })), Sd((() => {
                const t = ey.filterProps(e),
                    n = Na({
                        "aria-haspopup": "dialog"
                    }, e.activatorProps),
                    i = Na({
                        tabindex: -1
                    }, e.contentProps);
                return Ma(ey, Na({
                    ref: l,
                    class: ["v-dialog", {
                        "v-dialog--fullscreen": e.fullscreen,
                        "v-dialog--scrollable": e.scrollable
                    }, e.class],
                    style: e.style
                }, t, {
                    modelValue: a.value,
                    "onUpdate:modelValue": e => a.value = e,
                    "aria-modal": "true",
                    activatorProps: n,
                    contentProps: i,
                    height: e.fullscreen ? void 0 : e.height,
                    width: e.fullscreen ? void 0 : e.width,
                    maxHeight: e.fullscreen ? void 0 : e.maxHeight,
                    maxWidth: e.fullscreen ? void 0 : e.maxWidth,
                    role: "dialog",
                    onAfterEnter: s,
                    onAfterLeave: u
                }, o), {
                    activator: r.activator,
                    default() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return Ma(_g, {
                            root: "VDialog"
                        }, {
                            default() {
                                var e;
                                return [null == (e = r.default) ? void 0 : e.call(r, ...t)]
                            }
                        })
                    }
                })
            })), ry({}, l)
        }
    }),
    ly = ld({
        color: String,
        inset: Boolean,
        length: [Number, String],
        opacity: [Number, String],
        thickness: [Number, String],
        vertical: Boolean,
        ...id(),
        ...dp()
    }, "VDivider"),
    iy = md()({
        name: "VDivider",
        props: ly(),
        setup(e, t) {
            let {
                attrs: n,
                slots: r
            } = t;
            const {
                themeClasses: a
            } = pp(e), {
                textColorClasses: o,
                textColorStyles: l
            } = Lg(Ft(e, "color")), i = ao((() => {
                const t = {};
                return e.length && (t[e.vertical ? "height" : "width"] = Ou(e.length)), e.thickness && (t[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Ou(e.thickness)), t
            }));
            return Sd((() => {
                const t = Ma("hr", {
                    class: [{
                        "v-divider": !0,
                        "v-divider--inset": e.inset,
                        "v-divider--vertical": e.vertical
                    }, a.value, o.value, e.class],
                    style: [i.value, l.value, {
                        "--v-border-opacity": e.opacity
                    }, e.style],
                    "aria-orientation": n.role && "separator" !== n.role ? void 0 : e.vertical ? "vertical" : "horizontal",
                    role: `${n.role || "separator"}`
                }, null);
                return r.default ? Ma("div", {
                    class: ["v-divider__wrapper", {
                        "v-divider__wrapper--vertical": e.vertical,
                        "v-divider__wrapper--inset": e.inset
                    }]
                }, [t, Ma("div", {
                    class: "v-divider__content"
                }, [r.default()]), t]) : t
            })), {}
        }
    }),
    sy = Symbol.for("vuetify:list");

function uy() {
    const e = Vr(sy, {
        hasPrepend: wt(!1),
        updateHasPrepend: () => null
    }),
        t = {
            hasPrepend: wt(!1),
            updateHasPrepend(e) {
                e && (t.hasPrepend.value = e)
            }
        };
    return Pr(sy, t), e
}

function cy() {
    return Vr(sy, null)
}
const dy = e => {
    const t = {
        activate(t) {
            let {
                id: n,
                value: r,
                activated: a
            } = t;
            return n = ht(n), e && !r && 1 === a.size && a.has(n) || (r ? a.add(n) : a.delete(n)), a
        },
        in(e, n, r) {
            let a = new Set;
            if (null != e)
                for (const o of Ku(e)) a = t.activate({
                    id: o,
                    value: !0,
                    activated: new Set(a),
                    children: n,
                    parents: r
                });
            return a
        },
        out: e => Array.from(e)
    };
    return t
},
    py = e => {
        const t = dy(e);
        return {
            activate(e) {
                let {
                    activated: n,
                    id: r,
                    ...a
                } = e;
                r = ht(r);
                const o = n.has(r) ? new Set([r]) : new Set;
                return t.activate({
                    ...a,
                    id: r,
                    activated: o
                })
            },
            in(e, n, r) {
                let a = new Set;
                if (null != e) {
                    const o = Ku(e);
                    o.length && (a = t.in(o.slice(0, 1), n, r))
                }
                return a
            },
            out: (e, n, r) => t.out(e, n, r)
        }
    },
    fy = {
        open(e) {
            let {
                id: t,
                value: n,
                opened: r,
                parents: a
            } = e;
            if (n) {
                const e = new Set;
                e.add(t);
                let n = a.get(t);
                for (; null != n;) e.add(n), n = a.get(n);
                return e
            }
            return r.delete(t), r
        },
        select: () => null
    },
    vy = {
        open(e) {
            let {
                id: t,
                value: n,
                opened: r,
                parents: a
            } = e;
            if (n) {
                let e = a.get(t);
                for (r.add(t); null != e && e !== t;) r.add(e), e = a.get(e);
                return r
            }
            return r.delete(t), r
        },
        select: () => null
    },
    gy = {
        open: vy.open,
        select(e) {
            let {
                id: t,
                value: n,
                opened: r,
                parents: a
            } = e;
            if (!n) return r;
            const o = [];
            let l = a.get(t);
            for (; null != l;) o.push(l), l = a.get(l);
            return new Set(o)
        }
    },
    hy = e => {
        const t = {
            select(t) {
                let {
                    id: n,
                    value: r,
                    selected: a
                } = t;
                if (n = ht(n), e && !r) {
                    const e = Array.from(a.entries()).reduce(((e, t) => {
                        let [n, r] = t;
                        return "on" === r && e.push(n), e
                    }), []);
                    if (1 === e.length && e[0] === n) return a
                }
                return a.set(n, r ? "on" : "off"), a
            },
            in(e, n, r) {
                let a = new Map;
                for (const o of e || []) a = t.select({
                    id: o,
                    value: !0,
                    selected: new Map(a),
                    children: n,
                    parents: r
                });
                return a
            },
            out(e) {
                const t = [];
                for (const [n, r] of e.entries()) "on" === r && t.push(n);
                return t
            }
        };
        return t
    },
    my = e => {
        const t = hy(e);
        return {
            select(e) {
                let {
                    selected: n,
                    id: r,
                    ...a
                } = e;
                r = ht(r);
                const o = n.has(r) ? new Map([
                    [r, n.get(r)]
                ]) : new Map;
                return t.select({
                    ...a,
                    id: r,
                    selected: o
                })
            },
            in(e, n, r) {
                let a = new Map;
                return (null == e ? void 0 : e.length) && (a = t.in(e.slice(0, 1), n, r)), a
            },
            out: (e, n, r) => t.out(e, n, r)
        }
    },
    yy = Symbol.for("vuetify:nested"),
    by = {
        id: wt(),
        root: {
            register: () => null,
            unregister: () => null,
            parents: kt(new Map),
            children: kt(new Map),
            open: () => null,
            openOnSelect: () => null,
            activate: () => null,
            select: () => null,
            activatable: kt(!1),
            selectable: kt(!1),
            opened: kt(new Set),
            activated: kt(new Set),
            selected: kt(new Map),
            selectedValues: kt([]),
            getPath: () => []
        }
    },
    ky = ld({
        activatable: Boolean,
        selectable: Boolean,
        activeStrategy: [String, Function, Object],
        selectStrategy: [String, Function, Object],
        openStrategy: [String, Object],
        opened: null,
        activated: null,
        selected: null,
        mandatory: Boolean
    }, "nested"),
    wy = (e, t) => {
        const n = Vr(yy, by),
            r = Symbol(pd()),
            a = ao((() => void 0 !== e.value ? e.value : r)),
            o = {
                ...n,
                id: a,
                open: (e, t) => n.root.open(a.value, e, t),
                openOnSelect: (e, t) => n.root.openOnSelect(a.value, e, t),
                isOpen: ao((() => n.root.opened.value.has(a.value))),
                parent: ao((() => n.root.parents.value.get(a.value))),
                activate: (e, t) => n.root.activate(a.value, e, t),
                isActivated: ao((() => n.root.activated.value.has(ht(a.value)))),
                select: (e, t) => n.root.select(a.value, e, t),
                isSelected: ao((() => "on" === n.root.selected.value.get(ht(a.value)))),
                isIndeterminate: ao((() => "indeterminate" === n.root.selected.value.get(a.value))),
                isLeaf: ao((() => !n.root.children.value.get(a.value))),
                isGroupActivator: n.isGroupActivator
            };
        return qn((() => {
            !n.isGroupActivator && n.root.register(a.value, n.id.value, t)
        })), Jn((() => {
            !n.isGroupActivator && n.root.unregister(a.value)
        })), t && Pr(yy, o), o
    };

function xy() {
    const e = wt(!1);
    return Yn((() => {
        window.requestAnimationFrame((() => {
            e.value = !0
        }))
    })), {
        ssrBootStyles: ao((() => e.value ? void 0 : {
            transition: "none !important"
        })),
        isBooted: ct(e)
    }
}
const Cy = hd({
    name: "VListGroupActivator",
    setup(e, t) {
        let {
            slots: n
        } = t;
        return (() => {
            const e = Vr(yy, by);
            Pr(yy, {
                ...e,
                isGroupActivator: !0
            })
        })(), () => {
            var e;
            return null == (e = n.default) ? void 0 : e.call(n)
        }
    }
}),
    Sy = ld({
        activeColor: String,
        baseColor: String,
        color: String,
        collapseIcon: {
            type: ap,
            default: "$collapse"
        },
        expandIcon: {
            type: ap,
            default: "$expand"
        },
        prependIcon: ap,
        appendIcon: ap,
        fluid: Boolean,
        subgroup: Boolean,
        title: String,
        value: null,
        ...id(),
        ...Pg()
    }, "VListGroup"),
    _y = md()({
        name: "VListGroup",
        props: Sy(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                isOpen: r,
                open: a,
                id: o
            } = wy(Ft(e, "value"), !0), l = ao((() => `v-list-group--id-${String(o.value)}`)), i = cy(), {
                isBooted: s
            } = xy();

            function u(e) {
                e.stopPropagation(), a(!r.value, e)
            }
            const c = ao((() => ({
                onClick: u,
                class: "v-list-group__header",
                id: l.value
            }))),
                d = ao((() => r.value ? e.collapseIcon : e.expandIcon)),
                p = ao((() => ({
                    VListItem: {
                        active: r.value,
                        activeColor: e.activeColor,
                        baseColor: e.baseColor,
                        color: e.color,
                        prependIcon: e.prependIcon || e.subgroup && d.value,
                        appendIcon: e.appendIcon || !e.subgroup && d.value,
                        title: e.title,
                        value: e.value
                    }
                })));
            return Sd((() => Ma(e.tag, {
                class: ["v-list-group", {
                    "v-list-group--prepend": null == i ? void 0 : i.hasPrepend.value,
                    "v-list-group--fluid": e.fluid,
                    "v-list-group--subgroup": e.subgroup,
                    "v-list-group--open": r.value
                }, e.class],
                style: e.style
            }, {
                default: () => [n.activator && Ma(_g, {
                    defaults: p.value
                }, {
                    default: () => [Ma(Cy, null, {
                        default: () => [n.activator({
                            props: c.value,
                            isOpen: r.value
                        })]
                    })]
                }), Ma(zg, {
                    transition: {
                        component: Cm
                    },
                    disabled: !s.value
                }, {
                    default() {
                        var e;
                        return [an(Ma("div", {
                            class: "v-list-group__items",
                            role: "group",
                            "aria-labelledby": l.value
                        }, [null == (e = n.default) ? void 0 : e.call(n)]), [
                            [Ro, r.value]
                        ])]
                    }
                })]
            }))), {
                isOpen: r
            }
        }
    }),
    Ay = ld({
        opacity: [Number, String],
        ...id(),
        ...Pg()
    }, "VListItemSubtitle"),
    Ly = md()({
        name: "VListItemSubtitle",
        props: Ay(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => Ma(e.tag, {
                class: ["v-list-item-subtitle", e.class],
                style: [{
                    "--v-list-item-subtitle-opacity": e.opacity
                }, e.style]
            }, n))), {}
        }
    }),
    Ty = yd("v-list-item-title"),
    Ey = ld({
        active: {
            type: Boolean,
            default: void 0
        },
        activeClass: String,
        activeColor: String,
        appendAvatar: String,
        appendIcon: ap,
        baseColor: String,
        disabled: Boolean,
        lines: [Boolean, String],
        link: {
            type: Boolean,
            default: void 0
        },
        nav: Boolean,
        prependAvatar: String,
        prependIcon: ap,
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        slim: Boolean,
        subtitle: [String, Number],
        title: [String, Number],
        value: null,
        onClick: sc(),
        onClickOnce: sc(),
        ...Zg(),
        ...id(),
        ...Kg(),
        ...Rg(),
        ...yh(),
        ...Bg(),
        ...ph(),
        ...Pg(),
        ...dp(),
        ...eh({
            variant: "text"
        })
    }, "VListItem"),
    Fy = md()({
        name: "VListItem",
        directives: {
            Ripple: em
        },
        props: Ey(),
        emits: {
            click: e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                slots: r,
                emit: a
            } = t;
            const o = dh(e, n),
                l = ao((() => void 0 === e.value ? o.href.value : e.value)),
                {
                    activate: i,
                    isActivated: s,
                    select: u,
                    isOpen: c,
                    isSelected: d,
                    isIndeterminate: p,
                    isGroupActivator: f,
                    root: v,
                    parent: g,
                    openOnSelect: h,
                    id: m
                } = wy(l, !1),
                y = cy(),
                b = ao((() => {
                    var t;
                    return !1 !== e.active && (e.active || (null == (t = o.isActive) ? void 0 : t.value) || (v.activatable.value ? s.value : d.value))
                })),
                k = ao((() => !1 !== e.link && o.isLink.value)),
                w = ao((() => !!y && (v.selectable.value || v.activatable.value || null != e.value))),
                x = ao((() => !e.disabled && !1 !== e.link && (e.link || o.isClickable.value || w.value))),
                C = ao((() => e.rounded || e.nav)),
                S = ao((() => e.color ?? e.activeColor)),
                _ = ao((() => ({
                    color: b.value ? S.value ?? e.baseColor : e.baseColor,
                    variant: e.variant
                })));

            function A() {
                null != g.value && v.open(g.value, !0), h(!0)
            }
            aa((() => {
                var e;
                return null == (e = o.isActive) ? void 0 : e.value
            }), (e => {
                e && A()
            })), qn((() => {
                var e;
                (null == (e = o.isActive) ? void 0 : e.value) && A()
            }));
            const {
                themeClasses: L
            } = pp(e), {
                borderClasses: T
            } = qg(e), {
                colorClasses: E,
                colorStyles: F,
                variantClasses: $
            } = th(_), {
                densityClasses: P
            } = Xg(e), {
                dimensionStyles: V
            } = Ig(e), {
                elevationClasses: M
            } = bh(e), {
                roundedClasses: R
            } = Dg(C), I = ao((() => e.lines ? `v-list-item--${e.lines}-line` : void 0)), O = ao((() => ({
                isActive: b.value,
                select: u,
                isOpen: c.value,
                isSelected: d.value,
                isIndeterminate: p.value
            })));

            function H(t) {
                var n;
                a("click", t), x.value && (null == (n = o.navigate) || n.call(o, t), f || (v.activatable.value ? i(!s.value, t) : (v.selectable.value || null != e.value) && u(!d.value, t)))
            }

            function B(e) {
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), e.target.dispatchEvent(new MouseEvent("click", e)))
            }
            return Sd((() => {
                const t = k.value ? "a" : e.tag,
                    n = r.title || null != e.title,
                    a = r.subtitle || null != e.subtitle,
                    l = !(!e.appendAvatar && !e.appendIcon),
                    i = !(!l && !r.append),
                    u = !(!e.prependAvatar && !e.prependIcon),
                    c = !(!u && !r.prepend);
                var p;
                return null == y || y.updateHasPrepend(c), e.activeColor && (p = ["color", "base-color"], p = Array.isArray(p) ? p.slice(0, -1).map((e => `'${e}'`)).join(", ") + ` or '${p.at(-1)}'` : `'${p}'`), an(Ma(t, Na({
                    class: ["v-list-item", {
                        "v-list-item--active": b.value,
                        "v-list-item--disabled": e.disabled,
                        "v-list-item--link": x.value,
                        "v-list-item--nav": e.nav,
                        "v-list-item--prepend": !c && (null == y ? void 0 : y.hasPrepend.value),
                        "v-list-item--slim": e.slim,
                        [`${e.activeClass}`]: e.activeClass && b.value
                    }, L.value, T.value, E.value, P.value, M.value, I.value, R.value, $.value, e.class],
                    style: [F.value, V.value, e.style],
                    tabindex: x.value ? y ? -2 : 0 : void 0,
                    "aria-selected": w.value ? v.activatable.value ? s.value : v.selectable.value ? d.value : b.value : void 0,
                    onClick: H,
                    onKeydown: x.value && !k.value && B
                }, o.linkProps), {
                    default() {
                        var t;
                        return [Qg(x.value || b.value, "v-list-item"), c && Ma("div", {
                            key: "prepend",
                            class: "v-list-item__prepend"
                        }, [r.prepend ? Ma(_g, {
                            key: "prepend-defaults",
                            disabled: !u,
                            defaults: {
                                VAvatar: {
                                    density: e.density,
                                    image: e.prependAvatar
                                },
                                VIcon: {
                                    density: e.density,
                                    icon: e.prependIcon
                                },
                                VListItemAction: {
                                    start: !0
                                }
                            }
                        }, {
                            default() {
                                var e;
                                return [null == (e = r.prepend) ? void 0 : e.call(r, O.value)]
                            }
                        }) : Ma(ma, null, [e.prependAvatar && Ma(rh, {
                            key: "prepend-avatar",
                            density: e.density,
                            image: e.prependAvatar
                        }, null), e.prependIcon && Ma(Mg, {
                            key: "prepend-icon",
                            density: e.density,
                            icon: e.prependIcon
                        }, null)]), Ma("div", {
                            class: "v-list-item__spacer"
                        }, null)]), Ma("div", {
                            class: "v-list-item__content",
                            "data-no-activator": ""
                        }, [n && Ma(Ty, {
                            key: "title"
                        }, {
                            default() {
                                var t;
                                return [(null == (t = r.title) ? void 0 : t.call(r, {
                                    title: e.title
                                })) ?? e.title]
                            }
                        }), a && Ma(Ly, {
                            key: "subtitle"
                        }, {
                            default() {
                                var t;
                                return [(null == (t = r.subtitle) ? void 0 : t.call(r, {
                                    subtitle: e.subtitle
                                })) ?? e.subtitle]
                            }
                        }), null == (t = r.default) ? void 0 : t.call(r, O.value)]), i && Ma("div", {
                            key: "append",
                            class: "v-list-item__append"
                        }, [r.append ? Ma(_g, {
                            key: "append-defaults",
                            disabled: !l,
                            defaults: {
                                VAvatar: {
                                    density: e.density,
                                    image: e.appendAvatar
                                },
                                VIcon: {
                                    density: e.density,
                                    icon: e.appendIcon
                                },
                                VListItemAction: {
                                    end: !0
                                }
                            }
                        }, {
                            default() {
                                var e;
                                return [null == (e = r.append) ? void 0 : e.call(r, O.value)]
                            }
                        }) : Ma(ma, null, [e.appendIcon && Ma(Mg, {
                            key: "append-icon",
                            density: e.density,
                            icon: e.appendIcon
                        }, null), e.appendAvatar && Ma(rh, {
                            key: "append-avatar",
                            density: e.density,
                            image: e.appendAvatar
                        }, null)]), Ma("div", {
                            class: "v-list-item__spacer"
                        }, null)])]
                    }
                }), [
                    [sr("ripple"), x.value && e.ripple]
                ])
            })), {
                activate: i,
                isActivated: s,
                isGroupActivator: f,
                isSelected: d,
                list: y,
                select: u,
                root: v,
                id: m
            }
        }
    }),
    $y = ld({
        color: String,
        inset: Boolean,
        sticky: Boolean,
        title: String,
        ...id(),
        ...Pg()
    }, "VListSubheader"),
    Py = md()({
        name: "VListSubheader",
        props: $y(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                textColorClasses: r,
                textColorStyles: a
            } = Lg(Ft(e, "color"));
            return Sd((() => {
                const t = !(!n.default && !e.title);
                return Ma(e.tag, {
                    class: ["v-list-subheader", {
                        "v-list-subheader--inset": e.inset,
                        "v-list-subheader--sticky": e.sticky
                    }, r.value, e.class],
                    style: [{
                        textColorStyles: a
                    }, e.style]
                }, {
                    default() {
                        var r;
                        return [t && Ma("div", {
                            class: "v-list-subheader__text"
                        }, [(null == (r = n.default) ? void 0 : r.call(n)) ?? e.title])]
                    }
                })
            })), {}
        }
    }),
    Vy = ld({
        items: Array,
        returnObject: Boolean
    }, "VListChildren"),
    My = md()({
        name: "VListChildren",
        props: Vy(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return uy(), () => {
                var t, r;
                return (null == (t = n.default) ? void 0 : t.call(n)) ?? (null == (r = e.items) ? void 0 : r.map((t => {
                    var r, a;
                    let {
                        children: o,
                        props: l,
                        type: i,
                        raw: s
                    } = t;
                    if ("divider" === i) return (null == (r = n.divider) ? void 0 : r.call(n, {
                        props: l
                    })) ?? Ma(iy, l, null);
                    if ("subheader" === i) return (null == (a = n.subheader) ? void 0 : a.call(n, {
                        props: l
                    })) ?? Ma(Py, l, null);
                    const u = {
                        subtitle: n.subtitle ? e => {
                            var t;
                            return null == (t = n.subtitle) ? void 0 : t.call(n, {
                                ...e,
                                item: s
                            })
                        } : void 0,
                        prepend: n.prepend ? e => {
                            var t;
                            return null == (t = n.prepend) ? void 0 : t.call(n, {
                                ...e,
                                item: s
                            })
                        } : void 0,
                        append: n.append ? e => {
                            var t;
                            return null == (t = n.append) ? void 0 : t.call(n, {
                                ...e,
                                item: s
                            })
                        } : void 0,
                        title: n.title ? e => {
                            var t;
                            return null == (t = n.title) ? void 0 : t.call(n, {
                                ...e,
                                item: s
                            })
                        } : void 0
                    },
                        c = _y.filterProps(l);
                    return o ? Ma(_y, Na({
                        value: null == l ? void 0 : l.value
                    }, c), {
                        activator(t) {
                            let {
                                props: r
                            } = t;
                            const a = {
                                ...l,
                                ...r,
                                value: e.returnObject ? s : l.value
                            };
                            return n.header ? n.header({
                                props: a
                            }) : Ma(Fy, a, u)
                        },
                        default: () => Ma(My, {
                            items: o,
                            returnObject: e.returnObject
                        }, n)
                    }) : n.item ? n.item({
                        props: l
                    }) : Ma(Fy, Na(l, {
                        value: e.returnObject ? s : l.value
                    }), u)
                })))
            }
        }
    }),
    Ry = ld({
        items: {
            type: Array,
            default: () => []
        },
        itemTitle: {
            type: [String, Array, Function],
            default: "title"
        },
        itemValue: {
            type: [String, Array, Function],
            default: "value"
        },
        itemChildren: {
            type: [Boolean, String, Array, Function],
            default: "children"
        },
        itemProps: {
            type: [Boolean, String, Array, Function],
            default: "props"
        },
        returnObject: Boolean,
        valueComparator: {
            type: Function,
            default: Vu
        }
    }, "list-items");

function Iy(e, t) {
    const n = Ru(t, e.itemType, "item"),
        r = function (e) {
            return "string" == typeof e || "number" == typeof e || "boolean" == typeof e
        }(t) ? t : Ru(t, e.itemTitle),
        a = Ru(t, e.itemValue, void 0),
        o = Ru(t, e.itemChildren),
        l = {
            title: r,
            value: a,
            ...!0 === e.itemProps ? Wu(t, ["children"]) : Ru(t, e.itemProps)
        };
    return {
        type: n,
        title: l.title,
        value: l.value,
        props: l,
        children: "item" === n && o ? Oy(e, o) : void 0,
        raw: t
    }
}

function Oy(e, t) {
    const n = [];
    for (const r of t) n.push(Iy(e, r));
    return n
}
const Hy = ld({
    baseColor: String,
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    expandIcon: ap,
    collapseIcon: ap,
    lines: {
        type: [Boolean, String],
        default: "one"
    },
    slim: Boolean,
    nav: Boolean,
    "onClick:open": sc(),
    "onClick:select": sc(),
    "onUpdate:opened": sc(),
    ...ky({
        selectStrategy: "single-leaf",
        openStrategy: "list"
    }),
    ...Zg(),
    ...id(),
    ...Kg(),
    ...Rg(),
    ...yh(),
    itemType: {
        type: String,
        default: "type"
    },
    ...Ry(),
    ...Bg(),
    ...Pg(),
    ...dp(),
    ...eh({
        variant: "text"
    })
}, "VList"),
    By = md()({
        name: "VList",
        props: Hy(),
        emits: {
            "update:selected": e => !0,
            "update:activated": e => !0,
            "update:opened": e => !0,
            "click:open": e => !0,
            "click:activate": e => !0,
            "click:select": e => !0
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                items: r
            } = function (e) {
                return {
                    items: ao((() => Oy(e, e.items)))
                }
            }(e), {
                themeClasses: a
            } = pp(e), {
                backgroundColorClasses: o,
                backgroundColorStyles: l
            } = Tg(Ft(e, "bgColor")), {
                borderClasses: i
            } = qg(e), {
                densityClasses: s
            } = Xg(e), {
                dimensionStyles: u
            } = Ig(e), {
                elevationClasses: c
            } = bh(e), {
                roundedClasses: d
            } = Dg(e), {
                children: p,
                open: f,
                parents: v,
                select: g,
                getPath: h
            } = (e => {
                let t = !1;
                const n = kt(new Map),
                    r = kt(new Map),
                    a = _d(e, "opened", e.opened, (e => new Set(e)), (e => [...e.values()])),
                    o = ao((() => {
                        if ("object" == typeof e.activeStrategy) return e.activeStrategy;
                        if ("function" == typeof e.activeStrategy) return e.activeStrategy(e.mandatory);
                        switch (e.activeStrategy) {
                            case "leaf":
                                return (e => {
                                    const t = dy(e);
                                    return {
                                        activate(e) {
                                            let {
                                                id: n,
                                                activated: r,
                                                children: a,
                                                ...o
                                            } = e;
                                            return n = ht(n), a.has(n) ? r : t.activate({
                                                id: n,
                                                activated: r,
                                                children: a,
                                                ...o
                                            })
                                        },
                                        in: t.in,
                                        out: t.out
                                    }
                                })(e.mandatory);
                            case "single-leaf":
                                return (e => {
                                    const t = py(e);
                                    return {
                                        activate(e) {
                                            let {
                                                id: n,
                                                activated: r,
                                                children: a,
                                                ...o
                                            } = e;
                                            return n = ht(n), a.has(n) ? r : t.activate({
                                                id: n,
                                                activated: r,
                                                children: a,
                                                ...o
                                            })
                                        },
                                        in: t.in,
                                        out: t.out
                                    }
                                })(e.mandatory);
                            case "independent":
                                return dy(e.mandatory);
                            default:
                                return py(e.mandatory)
                        }
                    })),
                    l = ao((() => {
                        if ("object" == typeof e.selectStrategy) return e.selectStrategy;
                        if ("function" == typeof e.selectStrategy) return e.selectStrategy(e.mandatory);
                        switch (e.selectStrategy) {
                            case "single-leaf":
                                return (e => {
                                    const t = my(e);
                                    return {
                                        select(e) {
                                            let {
                                                id: n,
                                                selected: r,
                                                children: a,
                                                ...o
                                            } = e;
                                            return n = ht(n), a.has(n) ? r : t.select({
                                                id: n,
                                                selected: r,
                                                children: a,
                                                ...o
                                            })
                                        },
                                        in: t.in,
                                        out: t.out
                                    }
                                })(e.mandatory);
                            case "leaf":
                                return (e => {
                                    const t = hy(e);
                                    return {
                                        select(e) {
                                            let {
                                                id: n,
                                                selected: r,
                                                children: a,
                                                ...o
                                            } = e;
                                            return n = ht(n), a.has(n) ? r : t.select({
                                                id: n,
                                                selected: r,
                                                children: a,
                                                ...o
                                            })
                                        },
                                        in: t.in,
                                        out: t.out
                                    }
                                })(e.mandatory);
                            case "independent":
                                return hy(e.mandatory);
                            case "single-independent":
                                return my(e.mandatory);
                            default:
                                return (e => {
                                    const t = {
                                        select(t) {
                                            let {
                                                id: n,
                                                value: r,
                                                selected: a,
                                                children: o,
                                                parents: l
                                            } = t;
                                            n = ht(n);
                                            const i = new Map(a),
                                                s = [n];
                                            for (; s.length;) {
                                                const e = s.shift();
                                                a.set(ht(e), r ? "on" : "off"), o.has(e) && s.push(...o.get(e))
                                            }
                                            let u = ht(l.get(n));
                                            for (; u;) {
                                                const e = o.get(u),
                                                    t = e.every((e => "on" === a.get(ht(e)))),
                                                    n = e.every((e => !a.has(ht(e)) || "off" === a.get(ht(e))));
                                                a.set(u, t ? "on" : n ? "off" : "indeterminate"), u = ht(l.get(u))
                                            }
                                            return e && !r && 0 === Array.from(a.entries()).reduce(((e, t) => {
                                                let [n, r] = t;
                                                return "on" === r && e.push(n), e
                                            }), []).length ? i : a
                                        },
                                        in(e, n, r) {
                                            let a = new Map;
                                            for (const o of e || []) a = t.select({
                                                id: o,
                                                value: !0,
                                                selected: new Map(a),
                                                children: n,
                                                parents: r
                                            });
                                            return a
                                        },
                                        out(e, t) {
                                            const n = [];
                                            for (const [r, a] of e.entries()) "on" !== a || t.has(r) || n.push(r);
                                            return n
                                        }
                                    };
                                    return t
                                })(e.mandatory)
                        }
                    })),
                    i = ao((() => {
                        if ("object" == typeof e.openStrategy) return e.openStrategy;
                        switch (e.openStrategy) {
                            case "list":
                                return gy;
                            case "single":
                                return fy;
                            default:
                                return vy
                        }
                    })),
                    s = _d(e, "activated", e.activated, (e => o.value.in(e, n.value, r.value)), (e => o.value.out(e, n.value, r.value))),
                    u = _d(e, "selected", e.selected, (e => l.value.in(e, n.value, r.value)), (e => l.value.out(e, n.value, r.value)));

                function c(e) {
                    const t = [];
                    let n = e;
                    for (; null != n;) t.unshift(n), n = r.value.get(n);
                    return t
                }
                Jn((() => {
                    t = !0
                }));
                const d = sd("nested"),
                    p = new Set,
                    f = {
                        id: wt(),
                        root: {
                            opened: a,
                            activatable: Ft(e, "activatable"),
                            selectable: Ft(e, "selectable"),
                            activated: s,
                            selected: u,
                            selectedValues: ao((() => {
                                const e = [];
                                for (const [t, n] of u.value.entries()) "on" === n && e.push(t);
                                return e
                            })),
                            register(e, t, a) {
                                if (p.has(e)) return c(e).map(String).join(" -> "), void c(t).concat(e).map(String).join(" -> ");
                                p.add(e), t && e !== t && r.value.set(e, t), a && n.value.set(e, []), null != t && n.value.set(t, [...n.value.get(t) || [], e])
                            },
                            unregister(e) {
                                if (t) return;
                                p.delete(e), n.value.delete(e);
                                const a = r.value.get(e);
                                if (a) {
                                    const t = n.value.get(a) ?? [];
                                    n.value.set(a, t.filter((t => t !== e)))
                                }
                                r.value.delete(e)
                            },
                            open(e, t, o) {
                                d.emit("click:open", {
                                    id: e,
                                    value: t,
                                    path: c(e),
                                    event: o
                                });
                                const l = i.value.open({
                                    id: e,
                                    value: t,
                                    opened: new Set(a.value),
                                    children: n.value,
                                    parents: r.value,
                                    event: o
                                });
                                l && (a.value = l)
                            },
                            openOnSelect(e, t, o) {
                                const l = i.value.select({
                                    id: e,
                                    value: t,
                                    selected: new Map(u.value),
                                    opened: new Set(a.value),
                                    children: n.value,
                                    parents: r.value,
                                    event: o
                                });
                                l && (a.value = l)
                            },
                            select(e, t, a) {
                                d.emit("click:select", {
                                    id: e,
                                    value: t,
                                    path: c(e),
                                    event: a
                                });
                                const o = l.value.select({
                                    id: e,
                                    value: t,
                                    selected: new Map(u.value),
                                    children: n.value,
                                    parents: r.value,
                                    event: a
                                });
                                o && (u.value = o), f.root.openOnSelect(e, t, a)
                            },
                            activate(t, a, l) {
                                if (!e.activatable) return f.root.select(t, !0, l);
                                d.emit("click:activate", {
                                    id: t,
                                    value: a,
                                    path: c(t),
                                    event: l
                                });
                                const i = o.value.activate({
                                    id: t,
                                    value: a,
                                    activated: new Set(s.value),
                                    children: n.value,
                                    parents: r.value,
                                    event: l
                                });
                                i && (s.value = i)
                            },
                            children: n,
                            parents: r,
                            getPath: c
                        }
                    };
                return Pr(yy, f), f.root
            })(e), m = ao((() => e.lines ? `v-list--${e.lines}-line` : void 0)), y = Ft(e, "activeColor"), b = Ft(e, "baseColor"), k = Ft(e, "color");
            uy(), gd({
                VListGroup: {
                    activeColor: y,
                    baseColor: b,
                    color: k,
                    expandIcon: Ft(e, "expandIcon"),
                    collapseIcon: Ft(e, "collapseIcon")
                },
                VListItem: {
                    activeClass: Ft(e, "activeClass"),
                    activeColor: y,
                    baseColor: b,
                    color: k,
                    density: Ft(e, "density"),
                    disabled: Ft(e, "disabled"),
                    lines: Ft(e, "lines"),
                    nav: Ft(e, "nav"),
                    slim: Ft(e, "slim"),
                    variant: Ft(e, "variant")
                }
            });
            const w = wt(!1),
                x = kt();

            function C(e) {
                w.value = !0
            }

            function S(e) {
                w.value = !1
            }

            function _(e) {
                var t;
                w.value || e.relatedTarget && (null == (t = x.value) ? void 0 : t.contains(e.relatedTarget)) || T()
            }

            function A(e) {
                const t = e.target;
                if (x.value && !["INPUT", "TEXTAREA"].includes(t.tagName)) {
                    if ("ArrowDown" === e.key) T("next");
                    else if ("ArrowUp" === e.key) T("prev");
                    else if ("Home" === e.key) T("first");
                    else {
                        if ("End" !== e.key) return;
                        T("last")
                    }
                    e.preventDefault()
                }
            }

            function L(e) {
                w.value = !0
            }

            function T(e) {
                if (x.value) return fc(x.value, e)
            }
            return Sd((() => Ma(e.tag, {
                ref: x,
                class: ["v-list", {
                    "v-list--disabled": e.disabled,
                    "v-list--nav": e.nav,
                    "v-list--slim": e.slim
                }, a.value, o.value, i.value, s.value, c.value, m.value, d.value, e.class],
                style: [l.value, u.value, e.style],
                tabindex: e.disabled || w.value ? -1 : 0,
                role: "listbox",
                "aria-activedescendant": void 0,
                onFocusin: C,
                onFocusout: S,
                onFocus: _,
                onKeydown: A,
                onMousedown: L
            }, {
                default: () => [Ma(My, {
                    items: r.value,
                    returnObject: e.returnObject
                }, n)]
            }))), {
                open: f,
                select: g,
                focus: T,
                children: p,
                parents: v,
                getPath: h
            }
        }
    }),
    Dy = ld({
        id: String,
        submenu: Boolean,
        ...Wu(Qm({
            closeDelay: 250,
            closeOnContentClick: !0,
            locationStrategy: "connected",
            location: void 0,
            openDelay: 300,
            scrim: !1,
            scrollStrategy: "reposition",
            transition: {
                component: ym
            }
        }), ["absolute"])
    }, "VMenu"),
    Ny = md()({
        name: "VMenu",
        props: Dy(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = _d(e, "modelValue"),
                {
                    scopeId: a
                } = Um(),
                {
                    isRtl: o
                } = Rd(),
                l = pd(),
                i = ao((() => e.id || `v-menu-${l}`)),
                s = kt(),
                u = Vr(Hm, null),
                c = wt(new Set);
            async function d(e) {
                var t, n, a;
                const o = e.relatedTarget,
                    l = e.target;
                await Zt(), r.value && o !== l && (null == (t = s.value) ? void 0 : t.contentEl) && (null == (n = s.value) ? void 0 : n.globalTop) && ![document, s.value.contentEl].includes(l) && !s.value.contentEl.contains(l) && (null == (a = dc(s.value.contentEl)[0]) || a.focus())
            }

            function p(e) {
                null == u || u.closeParents(e)
            }

            function f(t) {
                var n, a, l, i, u;
                if (!e.disabled)
                    if ("Tab" === t.key || "Enter" === t.key && !e.closeOnContentClick) {
                        if ("Enter" === t.key && (t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLInputElement && t.target.closest("form"))) return;
                        "Enter" === t.key && t.preventDefault(), pc(dc(null == (n = s.value) ? void 0 : n.contentEl, !1), t.shiftKey ? "prev" : "next", (e => e.tabIndex >= 0)) || (r.value = !1, null == (l = null == (a = s.value) ? void 0 : a.activatorEl) || l.focus())
                    } else e.submenu && t.key === (o.value ? "ArrowRight" : "ArrowLeft") && (r.value = !1, null == (u = null == (i = s.value) ? void 0 : i.activatorEl) || u.focus())
            }

            function v(t) {
                var n;
                if (e.disabled) return;
                const a = null == (n = s.value) ? void 0 : n.contentEl;
                a && r.value ? "ArrowDown" === t.key ? (t.preventDefault(), t.stopImmediatePropagation(), fc(a, "next")) : "ArrowUp" === t.key ? (t.preventDefault(), t.stopImmediatePropagation(), fc(a, "prev")) : e.submenu && (t.key === (o.value ? "ArrowRight" : "ArrowLeft") ? r.value = !1 : t.key === (o.value ? "ArrowLeft" : "ArrowRight") && (t.preventDefault(), fc(a, "first"))) : (e.submenu ? t.key === (o.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(t.key)) && (r.value = !0, t.preventDefault(), setTimeout((() => setTimeout((() => v(t))))))
            }
            Pr(Hm, {
                register() {
                    c.value.add(l)
                },
                unregister() {
                    c.value.delete(l)
                },
                closeParents(t) {
                    setTimeout((() => {
                        var n;
                        c.value.size || e.persistent || null != t && (!(null == (n = s.value) ? void 0 : n.contentEl) || function (e, t) {
                            const n = e.clientX,
                                r = e.clientY,
                                a = t.getBoundingClientRect(),
                                o = a.left,
                                l = a.top,
                                i = a.right,
                                s = a.bottom;
                            return n >= o && n <= i && r >= l && r <= s
                        }(t, s.value.contentEl)) || (r.value = !1, null == u || u.closeParents())
                    }), 40)
                }
            }), Jn((() => {
                null == u || u.unregister(), document.removeEventListener("focusin", d)
            })), Nn((() => r.value = !1)), aa(r, (e => {
                e ? (null == u || u.register(), Eu && document.addEventListener("focusin", d, {
                    once: !0
                })) : (null == u || u.unregister(), Eu && document.removeEventListener("focusin", d))
            }), {
                immediate: !0
            });
            const g = ao((() => Na({
                "aria-haspopup": "menu",
                "aria-expanded": String(r.value),
                "aria-owns": i.value,
                onKeydown: v
            }, e.activatorProps)));
            return Sd((() => {
                const t = ey.filterProps(e);
                return Ma(ey, Na({
                    ref: s,
                    id: i.value,
                    class: ["v-menu", e.class],
                    style: e.style
                }, t, {
                    modelValue: r.value,
                    "onUpdate:modelValue": e => r.value = e,
                    absolute: !0,
                    activatorProps: g.value,
                    location: e.location ?? (e.submenu ? "end" : "bottom"),
                    "onClick:outside": p,
                    onKeydown: f
                }, a), {
                    activator: n.activator,
                    default() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return Ma(_g, {
                            root: "VMenu"
                        }, {
                            default() {
                                var e;
                                return [null == (e = n.default) ? void 0 : e.call(n, ...t)]
                            }
                        })
                    }
                })
            })), ry({
                id: i,
                "ΨopenChildren": c
            }, s)
        }
    }),
    zy = {
        actions: "button@2",
        article: "heading, paragraph",
        avatar: "avatar",
        button: "button",
        card: "image, heading",
        "card-avatar": "image, list-item-avatar",
        chip: "chip",
        "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
        "date-picker-options": "text, avatar@2",
        "date-picker-days": "avatar@28",
        divider: "divider",
        heading: "heading",
        image: "image",
        "list-item": "text",
        "list-item-avatar": "avatar, text",
        "list-item-two-line": "sentences",
        "list-item-avatar-two-line": "avatar, sentences",
        "list-item-three-line": "paragraph",
        "list-item-avatar-three-line": "avatar, paragraph",
        ossein: "ossein",
        paragraph: "text@3",
        sentences: "text@2",
        subtitle: "text",
        table: "table-heading, table-thead, table-tbody, table-tfoot",
        "table-heading": "chip, text",
        "table-thead": "heading@6",
        "table-tbody": "table-row-divider@6",
        "table-row-divider": "table-row, divider",
        "table-row": "text@6",
        "table-tfoot": "text@2, avatar@2",
        text: "text"
    };

function jy(e) {
    return Ma("div", {
        class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
    }, [arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []])
}

function Uy(e) {
    const [t, n] = e.split("@");
    return Array.from({
        length: n
    }).map((() => Wy(t)))
}

function Wy(e) {
    let t = [];
    if (!e) return t;
    const n = zy[e];
    if (e === n);
    else {
        if (e.includes(",")) return Gy(e);
        if (e.includes("@")) return Uy(e);
        n.includes(",") ? t = Gy(n) : n.includes("@") ? t = Uy(n) : n && t.push(Wy(n))
    }
    return [jy(e, t)]
}

function Gy(e) {
    return e.replace(/\s/g, "").split(",").map(Wy)
}
const Zy = ld({
    boilerplate: Boolean,
    color: String,
    loading: Boolean,
    loadingText: {
        type: String,
        default: "$vuetify.loading"
    },
    type: {
        type: [String, Array],
        default: "ossein"
    },
    ...Rg(),
    ...yh(),
    ...dp()
}, "VSkeletonLoader"),
    qy = md()({
        name: "VSkeletonLoader",
        props: Zy(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                backgroundColorClasses: r,
                backgroundColorStyles: a
            } = Tg(Ft(e, "color")), {
                dimensionStyles: o
            } = Ig(e), {
                elevationClasses: l
            } = bh(e), {
                themeClasses: i
            } = pp(e), {
                t: s
            } = Md(), u = ao((() => Wy(Ku(e.type).join(","))));
            return Sd((() => {
                var t;
                const c = !n.default || e.loading,
                    d = e.boilerplate || !c ? {} : {
                        ariaLive: "polite",
                        ariaLabel: s(e.loadingText),
                        role: "alert"
                    };
                return Ma("div", Na({
                    class: ["v-skeleton-loader", {
                        "v-skeleton-loader--boilerplate": e.boilerplate
                    }, i.value, r.value, l.value],
                    style: [a.value, c ? o.value : {}]
                }, d), [c ? u.value : null == (t = n.default) ? void 0 : t.call(n)])
            })), {}
        }
    }),
    Yy = Symbol.for("vuetify:v-slider"),
    Ky = ld({
        disabled: {
            type: Boolean,
            default: null
        },
        error: Boolean,
        readonly: {
            type: Boolean,
            default: null
        },
        max: {
            type: [Number, String],
            default: 100
        },
        min: {
            type: [Number, String],
            default: 0
        },
        step: {
            type: [Number, String],
            default: 0
        },
        thumbColor: String,
        thumbLabel: {
            type: [Boolean, String],
            default: void 0,
            validator: e => "boolean" == typeof e || "always" === e
        },
        thumbSize: {
            type: [Number, String],
            default: 20
        },
        showTicks: {
            type: [Boolean, String],
            default: !1,
            validator: e => "boolean" == typeof e || "always" === e
        },
        ticks: {
            type: [Array, Object]
        },
        tickSize: {
            type: [Number, String],
            default: 2
        },
        color: String,
        trackColor: String,
        trackFillColor: String,
        trackSize: {
            type: [Number, String],
            default: 4
        },
        direction: {
            type: String,
            default: "horizontal",
            validator: e => ["vertical", "horizontal"].includes(e)
        },
        reverse: Boolean,
        ...Bg(),
        ...yh({
            elevation: 2
        }),
        ripple: {
            type: Boolean,
            default: !0
        }
    }, "Slider"),
    Xy = ld({
        focused: Boolean,
        max: {
            type: Number,
            required: !0
        },
        min: {
            type: Number,
            required: !0
        },
        modelValue: {
            type: Number,
            required: !0
        },
        position: {
            type: Number,
            required: !0
        },
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        name: String,
        ...id()
    }, "VSliderThumb"),
    Jy = md()({
        name: "VSliderThumb",
        directives: {
            Ripple: em
        },
        props: Xy(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                slots: n,
                emit: r
            } = t;
            const a = Vr(Yy),
                {
                    isRtl: o,
                    rtlClasses: l
                } = Rd();
            if (!a) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
            const {
                thumbColor: i,
                step: s,
                disabled: u,
                thumbSize: c,
                thumbLabel: d,
                direction: p,
                isReversed: f,
                vertical: v,
                readonly: g,
                elevation: h,
                mousePressed: m,
                decimals: y,
                indexFromEnd: b
            } = a, k = ao((() => u.value ? void 0 : h.value)), {
                elevationClasses: w
            } = bh(k), {
                textColorClasses: x,
                textColorStyles: C
            } = Lg(i), {
                pageup: S,
                pagedown: _,
                end: A,
                home: L,
                left: T,
                right: E,
                down: F,
                up: $
            } = Nu, P = [S, _, A, L, T, E, F, $], V = ao((() => s.value ? [1, 2, 3] : [1, 5, 10]));

            function M(t) {
                const n = function (t, n) {
                    if (!P.includes(t.key)) return;
                    t.preventDefault();
                    const r = s.value || .1,
                        a = (e.max - e.min) / r;
                    if ([T, E, F, $].includes(t.key)) {
                        const e = (v.value ? [o.value ? T : E, f.value ? F : $] : b.value !== o.value ? [T, $] : [E, $]).includes(t.key) ? 1 : -1,
                            a = t.shiftKey ? 2 : t.ctrlKey ? 1 : 0;
                        n += e * r * V.value[a]
                    } else t.key === L ? n = e.min : t.key === A ? n = e.max : n -= (t.key === _ ? 1 : -1) * r * (a > 100 ? a / 10 : 10);
                    return Math.max(e.min, Math.min(e.max, n))
                }(t, e.modelValue);
                null != n && r("update:modelValue", n)
            }
            return Sd((() => {
                const t = Ou(b.value ? 100 - e.position : e.position, "%");
                return Ma("div", {
                    class: ["v-slider-thumb", {
                        "v-slider-thumb--focused": e.focused,
                        "v-slider-thumb--pressed": e.focused && m.value
                    }, e.class, l.value],
                    style: [{
                        "--v-slider-thumb-position": t,
                        "--v-slider-thumb-size": Ou(c.value)
                    }, e.style],
                    role: "slider",
                    tabindex: u.value ? -1 : 0,
                    "aria-label": e.name,
                    "aria-valuemin": e.min,
                    "aria-valuemax": e.max,
                    "aria-valuenow": e.modelValue,
                    "aria-readonly": !!g.value,
                    "aria-orientation": p.value,
                    onKeydown: g.value ? void 0 : M
                }, [Ma("div", {
                    class: ["v-slider-thumb__surface", x.value, w.value],
                    style: {
                        ...C.value
                    }
                }, null), an(Ma("div", {
                    class: ["v-slider-thumb__ripple", x.value],
                    style: C.value
                }, null), [
                    [sr("ripple"), e.ripple, null, {
                        circle: !0,
                        center: !0
                    }]
                ]), Ma(wm, {
                    origin: "bottom center"
                }, {
                    default() {
                        var t;
                        return [an(Ma("div", {
                            class: "v-slider-thumb__label-container"
                        }, [Ma("div", {
                            class: ["v-slider-thumb__label"]
                        }, [Ma("div", null, [(null == (t = n["thumb-label"]) ? void 0 : t.call(n, {
                            modelValue: e.modelValue
                        })) ?? e.modelValue.toFixed(s.value ? y.value : 1)])])]), [
                            [Ro, d.value && e.focused || "always" === d.value]
                        ])]
                    }
                })])
            })), {}
        }
    }),
    Qy = ld({
        start: {
            type: Number,
            required: !0
        },
        stop: {
            type: Number,
            required: !0
        },
        ...id()
    }, "VSliderTrack"),
    eb = md()({
        name: "VSliderTrack",
        props: Qy(),
        emits: {},
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = Vr(Yy);
            if (!r) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
            const {
                color: a,
                parsedTicks: o,
                rounded: l,
                showTicks: i,
                tickSize: s,
                trackColor: u,
                trackFillColor: c,
                trackSize: d,
                vertical: p,
                min: f,
                max: v,
                indexFromEnd: g
            } = r, {
                roundedClasses: h
            } = Dg(l), {
                backgroundColorClasses: m,
                backgroundColorStyles: y
            } = Tg(c), {
                backgroundColorClasses: b,
                backgroundColorStyles: k
            } = Tg(u), w = ao((() => `inset-${p.value ? "block" : "inline"}-${g.value ? "end" : "start"}`)), x = ao((() => p.value ? "height" : "width")), C = ao((() => ({
                [w.value]: "0%",
                [x.value]: "100%"
            }))), S = ao((() => e.stop - e.start)), _ = ao((() => ({
                [w.value]: Ou(e.start, "%"),
                [x.value]: Ou(S.value, "%")
            }))), A = ao((() => i.value ? (p.value ? o.value.slice().reverse() : o.value).map(((t, r) => {
                var a;
                const o = t.value !== f.value && t.value !== v.value ? Ou(t.position, "%") : void 0;
                return Ma("div", {
                    key: t.value,
                    class: ["v-slider-track__tick", {
                        "v-slider-track__tick--filled": t.position >= e.start && t.position <= e.stop,
                        "v-slider-track__tick--first": t.value === f.value,
                        "v-slider-track__tick--last": t.value === v.value
                    }],
                    style: {
                        [w.value]: o
                    }
                }, [(t.label || n["tick-label"]) && Ma("div", {
                    class: "v-slider-track__tick-label"
                }, [(null == (a = n["tick-label"]) ? void 0 : a.call(n, {
                    tick: t,
                    index: r
                })) ?? t.label])])
            })) : []));
            return Sd((() => Ma("div", {
                class: ["v-slider-track", h.value, e.class],
                style: [{
                    "--v-slider-track-size": Ou(d.value),
                    "--v-slider-tick-size": Ou(s.value)
                }, e.style]
            }, [Ma("div", {
                class: ["v-slider-track__background", b.value, {
                    "v-slider-track__background--opacity": !!a.value || !c.value
                }],
                style: {
                    ...C.value,
                    ...k.value
                }
            }, null), Ma("div", {
                class: ["v-slider-track__fill", m.value],
                style: {
                    ..._.value,
                    ...y.value
                }
            }, null), i.value && Ma("div", {
                class: ["v-slider-track__ticks", {
                    "v-slider-track__ticks--always-show": "always" === i.value
                }]
            }, [A.value])]))), {}
        }
    });

function tb(e) {
    const {
        t
    } = Md();
    return {
        InputIcon(n) {
            let {
                name: r
            } = n;
            const a = {
                prepend: "prependAction",
                prependInner: "prependAction",
                append: "appendAction",
                appendInner: "appendAction",
                clear: "clear"
            }[r],
                o = e[`onClick:${r}`],
                l = o && a ? t(`$vuetify.input.${a}`, e.label ?? "") : void 0;
            return Ma(Mg, {
                icon: e[`${r}Icon`],
                "aria-label": l,
                onClick: o
            }, null)
        }
    }
}
const nb = ld({
    active: Boolean,
    color: String,
    messages: {
        type: [Array, String],
        default: () => []
    },
    ...id(),
    ...Ng({
        transition: {
            component: xm,
            leaveAbsolute: !0,
            group: !0
        }
    })
}, "VMessages"),
    rb = md()({
        name: "VMessages",
        props: nb(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = ao((() => Ku(e.messages))),
                {
                    textColorClasses: a,
                    textColorStyles: o
                } = Lg(ao((() => e.color)));
            return Sd((() => Ma(zg, {
                transition: e.transition,
                tag: "div",
                class: ["v-messages", a.value, e.class],
                style: [o.value, e.style],
                role: "alert",
                "aria-live": "polite"
            }, {
                default: () => [e.active && r.value.map(((e, t) => Ma("div", {
                    class: "v-messages__message",
                    key: `${t}-${r.value}`
                }, [n.message ? n.message({
                    message: e
                }) : e])))]
            }))), {}
        }
    }),
    ab = ld({
        focused: Boolean,
        "onUpdate:focused": sc()
    }, "focus");

function ob(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud();
    const n = _d(e, "focused");
    return {
        focusClasses: ao((() => ({
            [`${t}--focused`]: n.value
        }))),
        isFocused: n,
        focus() {
            n.value = !0
        },
        blur() {
            n.value = !1
        }
    }
}
const lb = Symbol.for("vuetify:form"),
    ib = ld({
        disabled: {
            type: Boolean,
            default: null
        },
        error: Boolean,
        errorMessages: {
            type: [Array, String],
            default: () => []
        },
        maxErrors: {
            type: [Number, String],
            default: 1
        },
        name: String,
        label: String,
        readonly: {
            type: Boolean,
            default: null
        },
        rules: {
            type: Array,
            default: () => []
        },
        modelValue: null,
        validateOn: String,
        validationValue: null,
        ...ab()
    }, "validation");
const sb = ld({
    id: String,
    appendIcon: ap,
    centerAffix: {
        type: Boolean,
        default: !0
    },
    prependIcon: ap,
    hideDetails: [Boolean, String],
    hideSpinButtons: Boolean,
    hint: String,
    persistentHint: Boolean,
    messages: {
        type: [Array, String],
        default: () => []
    },
    direction: {
        type: String,
        default: "horizontal",
        validator: e => ["horizontal", "vertical"].includes(e)
    },
    "onClick:prepend": sc(),
    "onClick:append": sc(),
    ...id(),
    ...Kg(),
    ... function (e) {
        const t = {};
        return ["maxWidth", "minWidth", "width"].forEach((n => t[n] = e[n])), t
    }(Rg()),
    ...dp(),
    ...ib()
}, "VInput"),
    ub = md()({
        name: "VInput",
        props: {
            ...sb()
        },
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                slots: r,
                emit: a
            } = t;
            const {
                densityClasses: o
            } = Xg(e), {
                dimensionStyles: l
            } = Ig(e), {
                themeClasses: i
            } = pp(e), {
                rtlClasses: s
            } = Rd(), {
                InputIcon: u
            } = tb(e), c = pd(), d = ao((() => e.id || `input-${c}`)), p = ao((() => `${d.value}-messages`)), {
                errorMessages: f,
                isDirty: v,
                isDisabled: g,
                isReadonly: h,
                isPristine: m,
                isValid: y,
                isValidating: b,
                reset: k,
                resetValidation: w,
                validate: x,
                validationClasses: C
            } = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ud(),
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pd();
                const r = _d(e, "modelValue"),
                    a = ao((() => void 0 === e.validationValue ? r.value : e.validationValue)),
                    o = function (e) {
                        const t = Vr(lb, null);
                        return {
                            ...t,
                            isReadonly: ao((() => !!((null == e ? void 0 : e.readonly) ?? (null == t ? void 0 : t.isReadonly.value)))),
                            isDisabled: ao((() => !!((null == e ? void 0 : e.disabled) ?? (null == t ? void 0 : t.isDisabled.value))))
                        }
                    }(e),
                    l = kt([]),
                    i = wt(!0),
                    s = ao((() => !(!Ku("" === r.value ? null : r.value).length && !Ku("" === a.value ? null : a.value).length))),
                    u = ao((() => {
                        var t;
                        return (null == (t = e.errorMessages) ? void 0 : t.length) ? Ku(e.errorMessages).concat(l.value).slice(0, Math.max(0, +e.maxErrors)) : l.value
                    })),
                    c = ao((() => {
                        var t;
                        let n = (e.validateOn ?? (null == (t = o.validateOn) ? void 0 : t.value)) || "input";
                        "lazy" === n && (n = "input lazy"), "eager" === n && (n = "input eager");
                        const r = new Set((null == n ? void 0 : n.split(" ")) ?? []);
                        return {
                            input: r.has("input"),
                            blur: r.has("blur") || r.has("input") || r.has("invalid-input"),
                            invalidInput: r.has("invalid-input"),
                            lazy: r.has("lazy"),
                            eager: r.has("eager")
                        }
                    })),
                    d = ao((() => {
                        var t;
                        return !e.error && !(null == (t = e.errorMessages) ? void 0 : t.length) && (!e.rules.length || (i.value ? !l.value.length && !c.value.lazy || null : !l.value.length))
                    })),
                    p = wt(!1),
                    f = ao((() => ({
                        [`${t}--error`]: !1 === d.value,
                        [`${t}--dirty`]: s.value,
                        [`${t}--disabled`]: o.isDisabled.value,
                        [`${t}--readonly`]: o.isReadonly.value
                    }))),
                    v = sd("validation"),
                    g = ao((() => e.name ?? St(n)));
                async function h() {
                    r.value = null, await Zt(), await m()
                }
                async function m() {
                    i.value = !0, c.value.lazy ? l.value = [] : await y(!c.value.eager)
                }
                async function y() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const n = [];
                    p.value = !0;
                    for (const r of e.rules) {
                        if (n.length >= +(e.maxErrors ?? 1)) break;
                        const t = "function" == typeof r ? r : () => r,
                            o = await t(a.value);
                        !0 !== o && (!1 === o || "string" == typeof o ? n.push(o || "") : console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))
                    }
                    return l.value = n, p.value = !1, i.value = t, l.value
                }
                return qn((() => {
                    var e;
                    null == (e = o.register) || e.call(o, {
                        id: g.value,
                        vm: v,
                        validate: y,
                        reset: h,
                        resetValidation: m
                    })
                })), Jn((() => {
                    var e;
                    null == (e = o.unregister) || e.call(o, g.value)
                })), Yn((async () => {
                    var e;
                    c.value.lazy || await y(!c.value.eager), null == (e = o.update) || e.call(o, g.value, d.value, u.value)
                })), Tu((() => c.value.input || c.value.invalidInput && !1 === d.value), (() => {
                    aa(a, (() => {
                        if (null != a.value) y();
                        else if (e.focused) {
                            const t = aa((() => e.focused), (e => {
                                e || y(), t()
                            }))
                        }
                    }))
                })), Tu((() => c.value.blur), (() => {
                    aa((() => e.focused), (e => {
                        e || y()
                    }))
                })), aa([d, u], (() => {
                    var e;
                    null == (e = o.update) || e.call(o, g.value, d.value, u.value)
                })), {
                    errorMessages: u,
                    isDirty: s,
                    isDisabled: o.isDisabled,
                    isReadonly: o.isReadonly,
                    isPristine: i,
                    isValid: d,
                    isValidating: p,
                    reset: h,
                    resetValidation: m,
                    validate: y,
                    validationClasses: f
                }
            }(e, "v-input", d), S = ao((() => ({
                id: d,
                messagesId: p,
                isDirty: v,
                isDisabled: g,
                isReadonly: h,
                isPristine: m,
                isValid: y,
                isValidating: b,
                reset: k,
                resetValidation: w,
                validate: x
            }))), _ = ao((() => {
                var t;
                return (null == (t = e.errorMessages) ? void 0 : t.length) || !m.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages
            }));
            return Sd((() => {
                var t, n, a, c;
                const d = !(!r.prepend && !e.prependIcon),
                    f = !(!r.append && !e.appendIcon),
                    v = _.value.length > 0,
                    g = !e.hideDetails || "auto" === e.hideDetails && (v || !!r.details);
                return Ma("div", {
                    class: ["v-input", `v-input--${e.direction}`, {
                        "v-input--center-affix": e.centerAffix,
                        "v-input--hide-spin-buttons": e.hideSpinButtons
                    }, o.value, i.value, s.value, C.value, e.class],
                    style: [l.value, e.style]
                }, [d && Ma("div", {
                    key: "prepend",
                    class: "v-input__prepend"
                }, [null == (t = r.prepend) ? void 0 : t.call(r, S.value), e.prependIcon && Ma(u, {
                    key: "prepend-icon",
                    name: "prepend"
                }, null)]), r.default && Ma("div", {
                    class: "v-input__control"
                }, [null == (n = r.default) ? void 0 : n.call(r, S.value)]), f && Ma("div", {
                    key: "append",
                    class: "v-input__append"
                }, [e.appendIcon && Ma(u, {
                    key: "append-icon",
                    name: "append"
                }, null), null == (a = r.append) ? void 0 : a.call(r, S.value)]), g && Ma("div", {
                    class: "v-input__details"
                }, [Ma(rb, {
                    id: p.value,
                    active: v,
                    messages: _.value
                }, {
                    message: r.message
                }), null == (c = r.details) ? void 0 : c.call(r, S.value)])])
            })), {
                reset: k,
                resetValidation: w,
                validate: x,
                isValid: y,
                errorMessages: f
            }
        }
    }),
    cb = ld({
        text: String,
        onClick: sc(),
        ...id(),
        ...dp()
    }, "VLabel"),
    db = md()({
        name: "VLabel",
        props: cb(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => {
                var t;
                return Ma("label", {
                    class: ["v-label", {
                        "v-label--clickable": !!e.onClick
                    }, e.class],
                    style: e.style,
                    onClick: e.onClick
                }, [e.text, null == (t = n.default) ? void 0 : t.call(n)])
            })), {}
        }
    }),
    pb = ld({
        ...ab(),
        ...Ky(),
        ...sb(),
        modelValue: {
            type: [Number, String],
            default: 0
        }
    }, "VSlider"),
    fb = md()({
        name: "VSlider",
        props: pb(),
        emits: {
            "update:focused": e => !0,
            "update:modelValue": e => !0,
            start: e => !0,
            end: e => !0
        },
        setup(e, t) {
            let {
                slots: n,
                emit: r
            } = t;
            const a = kt(),
                {
                    rtlClasses: o
                } = Rd(),
                l = (e => {
                    const t = ao((() => parseFloat(e.min))),
                        n = ao((() => parseFloat(e.max))),
                        r = ao((() => +e.step > 0 ? parseFloat(e.step) : 0)),
                        a = ao((() => Math.max(Ju(r.value), Ju(t.value))));
                    return {
                        min: t,
                        max: n,
                        step: r,
                        decimals: a,
                        roundValue(e) {
                            if (e = parseFloat(e), r.value <= 0) return e;
                            const o = Xu(e, t.value, n.value),
                                l = t.value % r.value,
                                i = Math.round((o - l) / r.value) * r.value + l;
                            return parseFloat(Math.min(i, n.value).toFixed(a.value))
                        }
                    }
                })(e),
                i = _d(e, "modelValue", void 0, (e => l.roundValue(e ?? l.min.value))),
                {
                    min: s,
                    max: u,
                    mousePressed: c,
                    roundValue: d,
                    onSliderMousedown: p,
                    onSliderTouchstart: f,
                    trackContainerRef: v,
                    position: g,
                    hasLabels: h,
                    readonly: m
                } = (e => {
                    let {
                        props: t,
                        steps: n,
                        onSliderStart: r,
                        onSliderMove: a,
                        onSliderEnd: o,
                        getActiveThumb: l
                    } = e;
                    const {
                        isRtl: i
                    } = Rd(), s = Ft(t, "reverse"), u = ao((() => "vertical" === t.direction)), c = ao((() => u.value !== s.value)), {
                        min: d,
                        max: p,
                        step: f,
                        decimals: v,
                        roundValue: g
                    } = n, h = ao((() => parseInt(t.thumbSize, 10))), m = ao((() => parseInt(t.tickSize, 10))), y = ao((() => parseInt(t.trackSize, 10))), b = ao((() => (p.value - d.value) / f.value)), k = Ft(t, "disabled"), w = ao((() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color)), x = ao((() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color)), C = ao((() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color)), S = wt(!1), _ = wt(0), A = kt(), L = kt();

                    function T(e) {
                        var n;
                        const r = "vertical" === t.direction,
                            a = r ? "top" : "left",
                            o = r ? "height" : "width",
                            l = r ? "clientY" : "clientX",
                            {
                                [a]: s,
                                [o]: u
                            } = null == (n = A.value) ? void 0 : n.$el.getBoundingClientRect(),
                            f = function (e, t) {
                                return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t]
                            }(e, l);
                        let v = Math.min(Math.max((f - s - _.value) / u, 0), 1) || 0;
                        return (r ? c.value : c.value !== i.value) && (v = 1 - v), g(d.value + v * (p.value - d.value))
                    }
                    const E = e => {
                        o({
                            value: T(e)
                        }), S.value = !1, _.value = 0
                    },
                        F = e => {
                            L.value = l(e), L.value && (L.value.focus(), S.value = !0, L.value.contains(e.target) ? _.value = function (e, t, n) {
                                const r = "vertical" === n,
                                    a = t.getBoundingClientRect(),
                                    o = "touches" in e ? e.touches[0] : e;
                                return r ? o.clientY - (a.top + a.height / 2) : o.clientX - (a.left + a.width / 2)
                            }(e, L.value, t.direction) : (_.value = 0, a({
                                value: T(e)
                            })), r({
                                value: T(e)
                            }))
                        },
                        $ = {
                            passive: !0,
                            capture: !0
                        };

                    function P(e) {
                        a({
                            value: T(e)
                        })
                    }

                    function V(e) {
                        e.stopPropagation(), e.preventDefault(), E(e), window.removeEventListener("mousemove", P, $), window.removeEventListener("mouseup", V)
                    }

                    function M(e) {
                        var t;
                        E(e), window.removeEventListener("touchmove", P, $), null == (t = e.target) || t.removeEventListener("touchend", M)
                    }
                    const R = e => {
                        const t = (e - d.value) / (p.value - d.value) * 100;
                        return Xu(isNaN(t) ? 0 : t, 0, 100)
                    },
                        I = Ft(t, "showTicks"),
                        O = ao((() => I.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((e => ({
                            value: e,
                            position: R(e),
                            label: e.toString()
                        }))) : Object.keys(t.ticks).map((e => ({
                            value: parseFloat(e),
                            position: R(parseFloat(e)),
                            label: t.ticks[e]
                        }))) : b.value !== 1 / 0 ? Iu(b.value + 1).map((e => {
                            const t = d.value + e * f.value;
                            return {
                                value: t,
                                position: R(t)
                            }
                        })) : [] : [])),
                        H = ao((() => O.value.some((e => {
                            let {
                                label: t
                            } = e;
                            return !!t
                        })))),
                        B = {
                            activeThumbRef: L,
                            color: Ft(t, "color"),
                            decimals: v,
                            disabled: k,
                            direction: Ft(t, "direction"),
                            elevation: Ft(t, "elevation"),
                            hasLabels: H,
                            isReversed: s,
                            indexFromEnd: c,
                            min: d,
                            max: p,
                            mousePressed: S,
                            numTicks: b,
                            onSliderMousedown(e) {
                                e.preventDefault(), F(e), window.addEventListener("mousemove", P, $), window.addEventListener("mouseup", V, {
                                    passive: !1
                                })
                            },
                            onSliderTouchstart(e) {
                                var t;
                                F(e), window.addEventListener("touchmove", P, $), null == (t = e.target) || t.addEventListener("touchend", M, {
                                    passive: !1
                                })
                            },
                            parsedTicks: O,
                            parseMouseMove: T,
                            position: R,
                            readonly: Ft(t, "readonly"),
                            rounded: Ft(t, "rounded"),
                            roundValue: g,
                            showTicks: I,
                            startOffset: _,
                            step: f,
                            thumbSize: h,
                            thumbColor: w,
                            thumbLabel: Ft(t, "thumbLabel"),
                            ticks: Ft(t, "ticks"),
                            tickSize: m,
                            trackColor: x,
                            trackContainerRef: A,
                            trackFillColor: C,
                            trackSize: y,
                            vertical: u
                        };
                    return Pr(Yy, B), B
                })({
                    props: e,
                    steps: l,
                    onSliderStart() {
                        r("start", i.value)
                    },
                    onSliderEnd(e) {
                        let {
                            value: t
                        } = e;
                        const n = d(t);
                        i.value = n, r("end", n)
                    },
                    onSliderMove(e) {
                        let {
                            value: t
                        } = e;
                        return i.value = d(t)
                    },
                    getActiveThumb() {
                        var e;
                        return null == (e = a.value) ? void 0 : e.$el
                    }
                }),
                {
                    isFocused: y,
                    focus: b,
                    blur: k
                } = ob(e),
                w = ao((() => g(i.value)));
            return Sd((() => {
                const t = ub.filterProps(e),
                    r = !!(e.label || n.label || n.prepend);
                return Ma(ub, Na({
                    class: ["v-slider", {
                        "v-slider--has-labels": !!n["tick-label"] || h.value,
                        "v-slider--focused": y.value,
                        "v-slider--pressed": c.value,
                        "v-slider--disabled": e.disabled
                    }, o.value, e.class],
                    style: e.style
                }, t, {
                    focused: y.value
                }), {
                    ...n,
                    prepend: r ? t => {
                        var r, a;
                        return Ma(ma, null, [(null == (r = n.label) ? void 0 : r.call(n, t)) ?? (e.label ? Ma(db, {
                            id: t.id.value,
                            class: "v-slider__label",
                            text: e.label
                        }, null) : void 0), null == (a = n.prepend) ? void 0 : a.call(n, t)])
                    } : void 0,
                    default(t) {
                        let {
                            id: r,
                            messagesId: o
                        } = t;
                        return Ma("div", {
                            class: "v-slider__container",
                            onMousedown: m.value ? void 0 : p,
                            onTouchstartPassive: m.value ? void 0 : f
                        }, [Ma("input", {
                            id: r.value,
                            name: e.name || r.value,
                            disabled: !!e.disabled,
                            readonly: !!e.readonly,
                            tabindex: "-1",
                            value: i.value
                        }, null), Ma(eb, {
                            ref: v,
                            start: 0,
                            stop: w.value
                        }, {
                            "tick-label": n["tick-label"]
                        }), Ma(Jy, {
                            ref: a,
                            "aria-describedby": o.value,
                            focused: y.value,
                            min: s.value,
                            max: u.value,
                            modelValue: i.value,
                            "onUpdate:modelValue": e => i.value = e,
                            position: w.value,
                            elevation: e.elevation,
                            onFocus: b,
                            onBlur: k,
                            ripple: e.ripple,
                            name: e.name
                        }, {
                            "thumb-label": n["thumb-label"]
                        })])
                    }
                })
            })), {}
        }
    }),
    vb = ld({
        fixedHeader: Boolean,
        fixedFooter: Boolean,
        height: [Number, String],
        hover: Boolean,
        ...id(),
        ...Kg(),
        ...Pg(),
        ...dp()
    }, "VTable"),
    gb = md()({
        name: "VTable",
        props: vb(),
        setup(e, t) {
            let {
                slots: n,
                emit: r
            } = t;
            const {
                themeClasses: a
            } = pp(e), {
                densityClasses: o
            } = Xg(e);
            return Sd((() => Ma(e.tag, {
                class: ["v-table", {
                    "v-table--fixed-height": !!e.height,
                    "v-table--fixed-header": e.fixedHeader,
                    "v-table--fixed-footer": e.fixedFooter,
                    "v-table--has-top": !!n.top,
                    "v-table--has-bottom": !!n.bottom,
                    "v-table--hover": e.hover
                }, a.value, o.value, e.class],
                style: e.style
            }, {
                default() {
                    var t, r, a;
                    return [null == (t = n.top) ? void 0 : t.call(n), n.default ? Ma("div", {
                        class: "v-table__wrapper",
                        style: {
                            height: Ou(e.height)
                        }
                    }, [Ma("table", null, [n.default()])]) : null == (r = n.wrapper) ? void 0 : r.call(n), null == (a = n.bottom) ? void 0 : a.call(n)]
                }
            }))), {}
        }
    }),
    hb = ld({
        active: Boolean,
        disabled: Boolean,
        max: [Number, String],
        value: {
            type: [Number, String],
            default: 0
        },
        ...id(),
        ...Ng({
            transition: {
                component: xm
            }
        })
    }, "VCounter"),
    mb = md()({
        name: "VCounter",
        functional: !0,
        props: hb(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = ao((() => e.max ? `${e.value} / ${e.max}` : String(e.value)));
            return Sd((() => Ma(zg, {
                transition: e.transition
            }, {
                default: () => [an(Ma("div", {
                    class: ["v-counter", {
                        "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
                    }, e.class],
                    style: e.style
                }, [n.default ? n.default({
                    counter: r.value,
                    max: e.max,
                    value: e.value
                }) : r.value]), [
                    [Ro, e.active]
                ])]
            }))), {}
        }
    }),
    yb = ld({
        floating: Boolean,
        ...id()
    }, "VFieldLabel"),
    bb = md()({
        name: "VFieldLabel",
        props: yb(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => Ma(db, {
                class: ["v-field-label", {
                    "v-field-label--floating": e.floating
                }, e.class],
                style: e.style,
                "aria-hidden": e.floating || void 0
            }, n))), {}
        }
    }),
    kb = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"],
    wb = ld({
        appendInnerIcon: ap,
        bgColor: String,
        clearable: Boolean,
        clearIcon: {
            type: ap,
            default: "$clear"
        },
        active: Boolean,
        centerAffix: {
            type: Boolean,
            default: void 0
        },
        color: String,
        baseColor: String,
        dirty: Boolean,
        disabled: {
            type: Boolean,
            default: null
        },
        error: Boolean,
        flat: Boolean,
        label: String,
        persistentClear: Boolean,
        prependInnerIcon: ap,
        reverse: Boolean,
        singleLine: Boolean,
        variant: {
            type: String,
            default: "filled",
            validator: e => kb.includes(e)
        },
        "onClick:clear": sc(),
        "onClick:appendInner": sc(),
        "onClick:prependInner": sc(),
        ...id(),
        ...Ph(),
        ...Bg(),
        ...dp()
    }, "VField"),
    xb = md()({
        name: "VField",
        inheritAttrs: !1,
        props: {
            id: String,
            ...ab(),
            ...wb()
        },
        emits: {
            "update:focused": e => !0,
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                emit: r,
                slots: a
            } = t;
            const {
                themeClasses: o
            } = pp(e), {
                loaderClasses: l
            } = Vh(e), {
                focusClasses: i,
                isFocused: s,
                focus: u,
                blur: c
            } = ob(e), {
                InputIcon: d
            } = tb(e), {
                roundedClasses: p
            } = Dg(e), {
                rtlClasses: f
            } = Rd(), v = ao((() => e.dirty || e.active)), g = ao((() => !(e.singleLine || !e.label && !a.label))), h = pd(), m = ao((() => e.id || `input-${h}`)), y = ao((() => `${m.value}-messages`)), b = kt(), k = kt(), w = kt(), x = ao((() => ["plain", "underlined"].includes(e.variant))), {
                backgroundColorClasses: C,
                backgroundColorStyles: S
            } = Tg(Ft(e, "bgColor")), {
                textColorClasses: _,
                textColorStyles: A
            } = Lg(ao((() => e.error || e.disabled ? void 0 : v.value && s.value ? e.color : e.baseColor)));
            aa(v, (e => {
                if (g.value) {
                    const t = b.value.$el,
                        n = k.value.$el;
                    requestAnimationFrame((() => {
                        const r = Ac(t),
                            a = n.getBoundingClientRect(),
                            o = a.x - r.x,
                            l = a.y - r.y - (r.height / 2 - a.height / 2),
                            i = a.width / .75,
                            s = Math.abs(i - r.width) > 1 ? {
                                maxWidth: Ou(i)
                            } : void 0,
                            u = getComputedStyle(t),
                            c = getComputedStyle(n),
                            d = 1e3 * parseFloat(u.transitionDuration) || 150,
                            p = parseFloat(c.getPropertyValue("--v-field-label-scale")),
                            f = c.getPropertyValue("color");
                        t.style.visibility = "visible", n.style.visibility = "hidden", Lc(t, {
                            transform: `translate(${o}px, ${l}px) scale(${p})`,
                            color: f,
                            ...s
                        }, {
                            duration: d,
                            easing: kd,
                            direction: e ? "normal" : "reverse"
                        }).finished.then((() => {
                            t.style.removeProperty("visibility"), n.style.removeProperty("visibility")
                        }))
                    }))
                }
            }), {
                flush: "post"
            });
            const L = ao((() => ({
                isActive: v,
                isFocused: s,
                controlRef: w,
                blur: c,
                focus: u
            })));

            function T(e) {
                e.target !== document.activeElement && e.preventDefault()
            }

            function E(t) {
                var n;
                "Enter" !== t.key && " " !== t.key || (t.preventDefault(), t.stopPropagation(), null == (n = e["onClick:clear"]) || n.call(e, new MouseEvent("click")))
            }
            return Sd((() => {
                var t, r, s;
                const h = "outlined" === e.variant,
                    w = !(!a["prepend-inner"] && !e.prependInnerIcon),
                    F = !(!e.clearable && !a.clear),
                    $ = !!(a["append-inner"] || e.appendInnerIcon || F),
                    P = () => a.label ? a.label({
                        ...L.value,
                        label: e.label,
                        props: {
                            for: m.value
                        }
                    }) : e.label;
                return Ma("div", Na({
                    class: ["v-field", {
                        "v-field--active": v.value,
                        "v-field--appended": $,
                        "v-field--center-affix": e.centerAffix ?? !x.value,
                        "v-field--disabled": e.disabled,
                        "v-field--dirty": e.dirty,
                        "v-field--error": e.error,
                        "v-field--flat": e.flat,
                        "v-field--has-background": !!e.bgColor,
                        "v-field--persistent-clear": e.persistentClear,
                        "v-field--prepended": w,
                        "v-field--reverse": e.reverse,
                        "v-field--single-line": e.singleLine,
                        "v-field--no-label": !P(),
                        [`v-field--variant-${e.variant}`]: !0
                    }, o.value, C.value, i.value, l.value, p.value, f.value, e.class],
                    style: [S.value, e.style],
                    onClick: T
                }, n), [Ma("div", {
                    class: "v-field__overlay"
                }, null), Ma(Mh, {
                    name: "v-field",
                    active: !!e.loading,
                    color: e.error ? "error" : "string" == typeof e.loading ? e.loading : e.color
                }, {
                    default: a.loader
                }), w && Ma("div", {
                    key: "prepend",
                    class: "v-field__prepend-inner"
                }, [e.prependInnerIcon && Ma(d, {
                    key: "prepend-icon",
                    name: "prependInner"
                }, null), null == (t = a["prepend-inner"]) ? void 0 : t.call(a, L.value)]), Ma("div", {
                    class: "v-field__field",
                    "data-no-activator": ""
                }, [
                    ["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && g.value && Ma(bb, {
                        key: "floating-label",
                        ref: k,
                        class: [_.value],
                        floating: !0,
                        for: m.value,
                        style: A.value
                    }, {
                        default: () => [P()]
                    }), g.value && Ma(bb, {
                        key: "label",
                        ref: b,
                        for: m.value
                    }, {
                        default: () => [P()]
                    }), null == (r = a.default) ? void 0 : r.call(a, {
                        ...L.value,
                        props: {
                            id: m.value,
                            class: "v-field__input",
                            "aria-describedby": y.value
                        },
                        focus: u,
                        blur: c
                    })
                ]), F && Ma(Sm, {
                    key: "clear"
                }, {
                    default: () => [an(Ma("div", {
                        class: "v-field__clearable",
                        onMousedown(e) {
                            e.preventDefault(), e.stopPropagation()
                        }
                    }, [Ma(_g, {
                        defaults: {
                            VIcon: {
                                icon: e.clearIcon
                            }
                        }
                    }, {
                        default: () => [a.clear ? a.clear({
                            ...L.value,
                            props: {
                                onKeydown: E,
                                onFocus: u,
                                onBlur: c,
                                onClick: e["onClick:clear"]
                            }
                        }) : Ma(d, {
                            name: "clear",
                            onKeydown: E,
                            onFocus: u,
                            onBlur: c
                        }, null)]
                    })]), [
                        [Ro, e.dirty]
                    ])]
                }), $ && Ma("div", {
                    key: "append",
                    class: "v-field__append-inner"
                }, [null == (s = a["append-inner"]) ? void 0 : s.call(a, L.value), e.appendInnerIcon && Ma(d, {
                    key: "append-icon",
                    name: "appendInner"
                }, null)]), Ma("div", {
                    class: ["v-field__outline", _.value],
                    style: A.value
                }, [h && Ma(ma, null, [Ma("div", {
                    class: "v-field__outline__start"
                }, null), g.value && Ma("div", {
                    class: "v-field__outline__notch"
                }, [Ma(bb, {
                    ref: k,
                    floating: !0,
                    for: m.value
                }, {
                    default: () => [P()]
                })]), Ma("div", {
                    class: "v-field__outline__end"
                }, null)]), x.value && g.value && Ma(bb, {
                    ref: k,
                    floating: !0,
                    for: m.value
                }, {
                    default: () => [P()]
                })])])
            })), {
                controlRef: w
            }
        }
    });

function Cb(e) {
    return ju(e, Object.keys(xb.props).filter((e => !Zu(e) && "class" !== e && "style" !== e)))
}
const Sb = ["color", "file", "time", "date", "datetime-local", "week", "month"],
    _b = ld({
        autofocus: Boolean,
        counter: [Boolean, Number, String],
        counterValue: [Number, Function],
        prefix: String,
        placeholder: String,
        persistentPlaceholder: Boolean,
        persistentCounter: Boolean,
        suffix: String,
        role: String,
        type: {
            type: String,
            default: "text"
        },
        modelModifiers: Object,
        ...sb(),
        ...wb()
    }, "VTextField"),
    Ab = md()({
        name: "VTextField",
        directives: {
            Intersect: Ug
        },
        inheritAttrs: !1,
        props: _b(),
        emits: {
            "click:control": e => !0,
            "mousedown:control": e => !0,
            "update:focused": e => !0,
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                emit: r,
                slots: a
            } = t;
            const o = _d(e, "modelValue"),
                {
                    isFocused: l,
                    focus: i,
                    blur: s
                } = ob(e),
                u = ao((() => "function" == typeof e.counterValue ? e.counterValue(o.value) : "number" == typeof e.counterValue ? e.counterValue : (o.value ?? "").toString().length)),
                c = ao((() => n.maxlength ? n.maxlength : !e.counter || "number" != typeof e.counter && "string" != typeof e.counter ? void 0 : e.counter)),
                d = ao((() => ["plain", "underlined"].includes(e.variant)));

            function p(t, n) {
                var r, a;
                e.autofocus && t && (null == (a = null == (r = n[0].target) ? void 0 : r.focus) || a.call(r))
            }
            const f = kt(),
                v = kt(),
                g = kt(),
                h = ao((() => Sb.includes(e.type) || e.persistentPlaceholder || l.value || e.active));

            function m() {
                var e;
                g.value !== document.activeElement && (null == (e = g.value) || e.focus()), l.value || i()
            }

            function y(e) {
                r("mousedown:control", e), e.target !== g.value && (m(), e.preventDefault())
            }

            function b(e) {
                m(), r("click:control", e)
            }

            function k(t) {
                t.stopPropagation(), m(), Zt((() => {
                    o.value = null, cc(e["onClick:clear"], t)
                }))
            }

            function w(t) {
                var n;
                const r = t.target;
                if (o.value = r.value, (null == (n = e.modelModifiers) ? void 0 : n.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
                    const e = [r.selectionStart, r.selectionEnd];
                    Zt((() => {
                        r.selectionStart = e[0], r.selectionEnd = e[1]
                    }))
                }
            }
            return Sd((() => {
                const t = !!(a.counter || !1 !== e.counter && null != e.counter),
                    r = !(!t && !a.details),
                    [i, x] = Yu(n),
                    {
                        modelValue: C,
                        ...S
                    } = ub.filterProps(e),
                    _ = Cb(e);
                return Ma(ub, Na({
                    ref: f,
                    modelValue: o.value,
                    "onUpdate:modelValue": e => o.value = e,
                    class: ["v-text-field", {
                        "v-text-field--prefixed": e.prefix,
                        "v-text-field--suffixed": e.suffix,
                        "v-input--plain-underlined": d.value
                    }, e.class],
                    style: e.style
                }, i, S, {
                    centerAffix: !d.value,
                    focused: l.value
                }), {
                    ...a,
                    default(t) {
                        let {
                            id: n,
                            isDisabled: r,
                            isDirty: i,
                            isReadonly: u,
                            isValid: c
                        } = t;
                        return Ma(xb, Na({
                            ref: v,
                            onMousedown: y,
                            onClick: b,
                            "onClick:clear": k,
                            "onClick:prependInner": e["onClick:prependInner"],
                            "onClick:appendInner": e["onClick:appendInner"],
                            role: e.role
                        }, _, {
                            id: n.value,
                            active: h.value || i.value,
                            dirty: i.value || e.dirty,
                            disabled: r.value,
                            focused: l.value,
                            error: !1 === c.value
                        }), {
                            ...a,
                            default(t) {
                                let {
                                    props: {
                                        class: n,
                                        ...l
                                    }
                                } = t;
                                const i = an(Ma("input", Na({
                                    ref: g,
                                    value: o.value,
                                    onInput: w,
                                    autofocus: e.autofocus,
                                    readonly: u.value,
                                    disabled: r.value,
                                    name: e.name,
                                    placeholder: e.placeholder,
                                    size: 1,
                                    type: e.type,
                                    onFocus: m,
                                    onBlur: s
                                }, l, x), null), [
                                    [sr("intersect"), {
                                        handler: p
                                    }, null, {
                                        once: !0
                                    }]
                                ]);
                                return Ma(ma, null, [e.prefix && Ma("span", {
                                    class: "v-text-field__prefix"
                                }, [Ma("span", {
                                    class: "v-text-field__prefix__text"
                                }, [e.prefix])]), a.default ? Ma("div", {
                                    class: n,
                                    "data-no-activator": ""
                                }, [a.default(), i]) : Ra(i, {
                                    class: n
                                }), e.suffix && Ma("span", {
                                    class: "v-text-field__suffix"
                                }, [Ma("span", {
                                    class: "v-text-field__suffix__text"
                                }, [e.suffix])])])
                            }
                        })
                    },
                    details: r ? n => {
                        var r;
                        return Ma(ma, null, [null == (r = a.details) ? void 0 : r.call(a, n), t && Ma(ma, null, [Ma("span", null, null), Ma(mb, {
                            active: e.persistentCounter || l.value,
                            value: u.value,
                            max: c.value,
                            disabled: e.disabled
                        }, a.counter)])])
                    } : void 0
                })
            })), ry({}, f, v, g)
        }
    }),
    Lb = ld({
        id: String,
        text: String,
        ...Wu(Qm({
            closeOnBack: !1,
            location: "end",
            locationStrategy: "connected",
            eager: !0,
            minWidth: 0,
            offset: 10,
            openOnClick: !1,
            openOnHover: !0,
            origin: "auto",
            scrim: !1,
            scrollStrategy: "reposition",
            transition: !1
        }), ["absolute", "persistent"])
    }, "VTooltip"),
    Tb = md()({
        name: "VTooltip",
        props: Lb(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = _d(e, "modelValue"),
                {
                    scopeId: a
                } = Um(),
                o = pd(),
                l = ao((() => e.id || `v-tooltip-${o}`)),
                i = kt(),
                s = ao((() => e.location.split(" ").length > 1 ? e.location : e.location + " center")),
                u = ao((() => "auto" === e.origin || "overlap" === e.origin || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center")),
                c = ao((() => e.transition ? e.transition : r.value ? "scale-transition" : "fade-transition")),
                d = ao((() => Na({
                    "aria-describedby": l.value
                }, e.activatorProps)));
            return Sd((() => {
                const t = ey.filterProps(e);
                return Ma(ey, Na({
                    ref: i,
                    class: ["v-tooltip", e.class],
                    style: e.style,
                    id: l.value
                }, t, {
                    modelValue: r.value,
                    "onUpdate:modelValue": e => r.value = e,
                    transition: c.value,
                    absolute: !0,
                    location: s.value,
                    origin: u.value,
                    persistent: !0,
                    role: "tooltip",
                    activatorProps: d.value,
                    _disableGlobalStack: !0
                }, a), {
                    activator: n.activator,
                    default() {
                        for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                        return (null == (t = n.default) ? void 0 : t.call(n, ...a)) ?? e.text
                    }
                })
            })), ry({}, i)
        }
    }),
    Eb = ["title"],
    Fb = {
        key: 0,
        class: "text-success"
    },
    $b = {
        key: 1,
        class: "text-error"
    },
    Pb = {
        key: 2,
        style: {
            opacity: "var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity))"
        }
    },
    Vb = {
        key: 0,
        style: {
            opacity: "var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity))"
        }
    },
    Mb = {
        key: 1,
        style: {
            opacity: "var(--v-list-item-subtitle-opacity, var(--v-medium-emphasis-opacity))"
        }
    },
    Rb = {
        class: "d-flex flex-column flex-sm-row align-sm-center"
    },
    Ib = {
        style: {
            color: "rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"
        }
    },
    Ob = {
        class: "w-100"
    },
    Hb = {
        class: "text-no-wrap text-right"
    },
    Bb = {
        class: "text-no-wrap text-right"
    },
    Db = {
        class: "text-no-wrap text-right"
    },
    Nb = ["href"],
    zb = {
        class: "text-no-wrap text-right"
    },
    jb = {
        class: "text-no-wrap text-right"
    },
    Ub = {
        class: "text-no-wrap text-right"
    },
    Wb = {
        style: {
            "white-space": "pre-wrap",
            "word-break": "keep-all"
        }
    },
    Gb = ["title"],
    Zb = {
        class: "d-none d-sm-inline"
    },
    qb = ["src", "alt"],
    Yb = ["src"],
    Kb = {
        class: "d-flex justify-center align-center rounded bg-primary-darken-1 mx-auto",
        style: {
            height: "320px",
            "max-height": "100%",
            "aspect-ratio": "1/1"
        }
    },
    Xb = {
        class: "my-4 text-center"
    },
    Jb = {
        class: "text-h5"
    },
    Qb = ["title"],
    ek = ["title"],
    tk = {
        class: "d-flex align-center"
    },
    nk = ["src"],
    rk = {
        style: {
            "white-space": "pre-wrap",
            "word-break": "keep-all"
        }
    },
    ak = ["title"],
    ok = ["wrap"],
    lk = ["src", "autoplay", "loop"],
    ik = {
        __name: "filelist",
        setup(e) {
            const {
                $dialog: t,
                $toast: n
            } = Ga().appContext.config.globalProperties, {
                t: r
            } = function (e = {}) {
                const t = Ga();
                if (null == t) throw cv(26);
                if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw cv(27);
                const n = function (e) {
                    const t = Vr(e.isCE ? yv : e.appContext.app.__VUE_I18N_SYMBOL__);
                    if (!t) throw cv(e.isCE ? 31 : 32);
                    return t
                }(t),
                    r = function (e) {
                        return "composition" === e.mode ? e.global : e.global.__composer
                    }(n),
                    a = function (e) {
                        return e.type
                    }(t),
                    o = function (e, t) {
                        return Tp(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
                    }(e, a);
                if ("global" === o) return function (e, t, n) {
                    let r = Np(t.messages) ? t.messages : $p();
                    "__i18nGlobal" in n && (r = vv(e.locale.value, {
                        messages: r,
                        __i18n: n.__i18nGlobal
                    }));
                    const a = Object.keys(r);
                    a.length && a.forEach((t => {
                        e.mergeLocaleMessage(t, r[t])
                    }))
                }(r, e, a), r;
                if ("parent" === o) {
                    let a = function (e, t, n = !1) {
                        let r = null;
                        const a = t.root;
                        let o = function (e, t = !1) {
                            return null == e ? null : t && e.vnode.ctx || e.parent
                        }(t, n);
                        for (; null != o;) {
                            const t = e;
                            if ("composition" === e.mode && (r = t.__getInstance(o)), null != r) break;
                            if (a === o) break;
                            o = o.parent
                        }
                        return r
                    }(n, t, e.__useComponent);
                    return null == a && (a = r), a
                }
                const l = n;
                let i = l.__getInstance(t);
                if (null == i) {
                    const n = Ep({}, e);
                    "__i18n" in a && (n.__i18n = a.__i18n), r && (n.__root = r), i = mv(n), l.__composerExtend && (i[pv] = l.__composerExtend(i)),
                        function (e, t, n) {
                            Yn((() => { }), t), Qn((() => {
                                const r = n;
                                e.__deleteInstance(t);
                                const a = r[pv];
                                a && (a(), delete r[pv])
                            }), t)
                        }(l, t, i), l.__setInstance(t, i)
                }
                return i
            }(), a = (e, t = {}) => fetch(e, t).then((e => {
                if (e.status >= 400) {
                    const t = new Error(e.statusText);
                    throw t.status = e.status, t
                }
                return e
            })).catch((e => {
                throw n.error(e.toString()), e
            })), o = Vr(mu), l = ep(), i = kt(!1), s = kt(!1), u = kt(!1), c = kt(!1), d = kt(""), p = kt(""), f = kt(!1), v = kt({
                paths: []
            }), g = ao((() => {
                switch (p.value) {
                    case "name":
                        const e = new Intl.Collator(void 0, {
                            numeric: !0,
                            sensitivity: "base"
                        });
                        return [...v.value.paths].sort(((t, n) => e.compare(t[p.value], n[p.value]) * (f.value ? -1 : 1)));
                    case "mtime":
                    case "size":
                        return [...v.value.paths].sort(((e, t) => (e[p.value] - t[p.value]) * (f.value ? -1 : 1)));
                    default:
                        return v.value.paths
                }
            })), h = new Set(["readme", "readme.txt", "readme.md"]), m = ao((() => v.value.paths.find((e => !e.is_dir && h.has(e.filename.toLowerCase()))))), y = ao((() => o.params.path ? o.params.path.map((e => `/${e}`)).join("") : "/")), b = ao((() => {
                return "/" + (e = y.value, t = fg, e.startsWith(t) ? e.substring(t.length) : e);
                var e, t
            })), k = e => {
                e.is_dir = "Dir" === e.path_type || "SymlinkDir" === e.path_type, e.is_symlink = "SymlinkDir" === e.path_type || "SymlinkFile" === e.path_type, e.ext = mg(e.name).toLowerCase(), e.fullpath = y.value + e.name, e.filename = e.name.split("/").pop()
            }, w = async () => {
                if (document.title = (window.__CUSTOM_DOCUMENT_TITLE__ || "Index of ${path} - dufs").replaceAll("${path}", xg(b.value, "/") || "/"), window.__INITIAL_DATA__) v.value = window.__INITIAL_DATA__, delete window.__INITIAL_DATA__;
                else {
                    const e = new URLSearchParams([
                        ["json", ""]
                    ]);
                    d.value && e.append("q", d.value);
                    const t = setTimeout((() => i.value = !0), 150);
                    v.value = await a(`${y.value}?${e}`).then((e => e.json())), i.value = !1, clearTimeout(t)
                }
                v.value.paths.forEach(k)
            }, x = ao((() => {
                const e = [{
                    title: "/",
                    href: fg
                }];
                let t = fg;
                for (const n of xg(b.value, "/").split("/").slice(1)) t += n + "/", e.push({
                    title: n,
                    href: t
                });
                return e
            })), C = kt(!1), S = kt(""), _ = kt({}), A = kt(""), L = kt(!1), T = kt(!0), E = kt({}), F = kt(""), $ = kt(!1), P = kt("");
            aa(C, (() => {
                C.value || setTimeout((() => _.value = {}), 250)
            }));
            const V = async () => {
                if (!m.value) return;
                const e = setTimeout((() => s.value = !0), 150),
                    t = await a(`${m.value.fullpath}`).then((e => e.text()));
                s.value = !1, clearTimeout(e), "md" === m.value.ext ? (P.value = xi.parse(t), $.value = !0) : (P.value = t, $.value = !1)
            }, M = async () => {
                E.value.fullpath && (L.value = !1, await a(E.value.fullpath, {
                    method: "PUT",
                    body: F.value
                }).then((e => e.text())), n.success(r("toastSaveEdit", [E.value.name])), await w())
            };
            Yn(w), Yn(V), aa(y, w), aa(d, Cg(w, 250)), aa(m, V);
            const R = kt([]),
                I = kt((() => { })),
                O = async () => {
                    const e = Array.from(await new Promise((e => {
                        document.getElementById("upload").value = null, document.getElementById("upload").click(), I.value = e
                    })));
                    e.length && e.map((e => {
                        const t = y.value;
                        return new dg(t + e.name, e, (() => y.value === t && w()))
                    })).forEach((e => {
                        const t = st(e);
                        R.value.push(t), t.upload()
                    }))
                };
            document.body.addEventListener("dragenter", (e => e.preventDefault())), document.body.addEventListener("dragover", (e => e.preventDefault())), document.body.addEventListener("drop", (async e => {
                if (e.preventDefault(), !v.value.allow_upload) return n.warning(r("toastUploadDisabled"));
                const a = async (e, t = []) => {
                    for (const n of e)
                        if (n.isDirectory) {
                            const e = await new Promise(((e, t) => n.createReader().readEntries(e, t)));
                            await a(e, t)
                        } else n.isFile && t.push(await new Promise(((e, t) => n.file((t => e([n.fullPath.replace(/^\//, ""), t])), t))));
                    return t
                }, o = await a(Array.from(e.dataTransfer.items).map((e => e.webkitGetAsEntry())));
                o.length && await t.promises.confirm(`<p>${r("dialogUploadBody", [o.length], o.length)}</p><ul style="list-style-position:inside">${o.map((([e, t]) => `<li>${e} (${kg(t.size)})</li>`)).join("")}</ul>`, r("titleUploadFile"), {
                    rawHtml: !0
                }) && o.map((([e, t]) => {
                    const n = y.value;
                    return new dg(n + e, t, (() => y.value === n && w()))
                })).forEach((e => {
                    const t = st(e);
                    R.value.push(t), t.upload()
                }))
            }));
            const H = async () => {
                const e = await t.promises.prompt(r("dialogCreateFolderLabel"), r("titleCreateFolder"));
                e && (await a(y.value + e, {
                    method: "MKCOL"
                }), n.success(r("toastCreateFolder")), await w())
            }, createFilePromptAction = async () => {
                const e = await t.promises.prompt(r("dialogCreateFileLabel"), r("titleCreateFile"));
                e && (await a(y.value + e, {
                    method: "PUT",
                    body: ""
                }), n.success(r("toastCreateFile")), await w())
            }, B = kt(!0), D = kt(!1), z = kt(!1), j = kt(0), U = kt(0), W = kt(null), Z = kt(""), q = kt(""), Y = kt(""), X = kt(null), J = e => (e = e || 0, `${Math.floor(e / 60).toString().padStart(2, 0)}:${(Math.round(e) % 60).toString().padStart(2, 0)}`);
            aa(C, (() => {
                X.value.pause()
            }));
            const Q = ao((() => g.value.filter((e => new Set(["mp3", "m4a", "ogg", "weba", "oga", "flac", "opus"]).has(e.ext))))),
                ee = e => {
                    const t = Q.value.indexOf(e);
                    return Q.value[t === Q.value.length - 1 ? 0 : t + 1]
                },
                te = async () => {
                    if (1 === Q.value.length) B.value = !0, X.value.currentTime = 0;
                    else {
                        let e, t;
                        if (D.value) {
                            const t = Q.value.filter((e => e !== _.value));
                            e = t[Math.floor(Math.random() * t.length)]
                        } else e = ee(_.value);
                        ne(_.value = e), await new Promise((e => X.value.addEventListener("loadedmetadata", t = e))), X.value.removeEventListener("loadedmetadata", t), X.value.play()
                    }
                }, ne = async e => {
                    try {
                        const t = await new Promise(((t, n) => new ug(`${location.protocol}//${location.host}${e.fullpath}`).setTagsToRead(["title", "artist", "album", "picture"]).read({
                            onSuccess: e => t(e.tags),
                            onError: n
                        })));
                        Z.value = t.title, q.value = t.artist, Y.value = t.album, URL.revokeObjectURL(W.value), W.value = t.picture ? URL.createObjectURL(new Blob([new Uint8Array(t.picture.data).buffer], {
                            type: t.picture.format
                        })) : null
                    } catch (t) {
                        n.error(r("toastFailedLoadAudioMetadata", [t.info || t])), Z.value = "", q.value = "", Y.value = "", URL.revokeObjectURL(W.value), W.value = ""
                    }
                };
            return (e, o) => {
                const h = or("router-link");
                return Ca(), La(ma, null, [(Ca(), Ta(hn, {
                    to: "#app-bar-append"
                }, [Ma(Ny, {
                    "open-delay": "0",
                    "open-on-focus": "",
                    "open-on-hover": "",
                    "close-on-content-click": !1
                }, {
                    activator: rn((({
                        props: e
                    }) => [v.value.allow_upload ? (Ca(), Ta(Tb, {
                        key: 0,
                        text: St(r)("titleUploadFile")
                    }, {
                        activator: rn((({
                            props: t
                        }) => [Ma(nm, Na(Na(e, t), {
                            class: "topbar-action-btn topbar-action-btn--pink",
                            variant: "text",
                            icon: "$mdiUpload",
                            onClick: O
                        }), {
                            default: rn((() => [R.value.filter((e => !e.uploaded && !e.aborted && !e.fail)).length ? (Ca(), Ta(sh, {
                                key: 0,
                                content: R.value.filter((e => !e.uploaded && !e.aborted && !e.fail)).length
                            }, {
                                default: rn((() => [Ma(Mg, {
                                    icon: "$mdiUpload"
                                })])),
                                _: 1
                            }, 8, ["content"])) : (Ca(), Ta(Mg, {
                                key: 1,
                                icon: "$mdiUpload"
                            }))])),
                            _: 2
                        }, 1040), Va("input", {
                            id: "upload",
                            class: "d-none",
                            type: "file",
                            multiple: "",
                            onChange: o[0] || (o[0] = e => I.value(e.target.files))
                        }, null, 32)])),
                        _: 2
                    }, 1032, ["text"])) : Oa("", !0)])),
                    default: rn((() => [an(Ma(By, {
                        lines: "two",
                        "item-props": "",
                        width: "480",
                        "max-height": "540"
                    }, {
                        default: rn((() => [(Ca(!0), La(ma, null, dr(R.value, ((e, t) => an((Ca(), Ta(Fy, null, {
                            prepend: rn((() => [Ma(rh, {
                                color: St(yg)(St(mg)(e.file.name))
                            }, {
                                default: rn((() => [Ma(Mg, {
                                    color: "white",
                                    icon: St(bg)(St(mg)(e.file.name)),
                                    class: "flex-shrink-0"
                                }, null, 8, ["icon"])])),
                                _: 2
                            }, 1032, ["color"])])),
                            append: rn((() => [Ma(nm, {
                                color: "grey",
                                icon: "$mdiClose",
                                variant: "text",
                                class: "ml-4",
                                onClick() {
                                    e.uploaded || (e.aborted = !0, e.xhr && e.xhr.abort()), R.value.splice(t, 1)
                                }
                            }, null, 8, ["onClick"])])),
                            default: rn((() => [Ma(Ty, null, {
                                default: rn((() => [Va("span", {
                                    title: e.file.name
                                }, K(e.file.name), 9, Eb)])),
                                _: 2
                            }, 1024), Ma(Ly, {
                                style: {
                                    opacity: "1"
                                }
                            }, {
                                default: rn((() => [e.uploaded ? (Ca(), La("span", Fb, K(St(r)("dialogUploadSucceed")), 1)) : e.fail ? (Ca(), La("span", $b, K(St(r)(e.fail)), 1)) : e.xhr ? (Ca(), La(ma, {
                                    key: 3
                                }, [St(l).smAndUp.value ? (Ca(), La("span", Vb, K(St(kg)(e.loaded)) + " / " + K(St(kg)(e.file.size)) + " | " + K(Math.round(e.loaded / e.file.size * 1e4) / 100 + "%") + " | " + K(St(kg)(Math.round(e.speed))) + "/s", 1)) : (Ca(), La("span", Mb, K(St(kg)(e.loaded)) + " / " + K(St(kg)(e.file.size)), 1)), Ma($h, {
                                    "model-value": e.loaded / e.file.size * 100,
                                    color: "primary",
                                    rounded: ""
                                }, null, 8, ["model-value"])], 64)) : (Ca(), La("span", Pb, K(St(r)("dialogUploadPending")), 1))])),
                                _: 2
                            }, 1024)])),
                            _: 2
                        }, 1024)), [
                            [em]
                        ]))), 256))])),
                        _: 1
                    }, 512), [
                        [Ro, R.value.length]
                    ])])),
                    _: 1
                }), v.value.allow_upload ? (Ca(), Ta(Tb, {
                    key: 0,
                    text: St(r)("titleCreateFolder")
                }, {
                    activator: rn((({
                        props: e
                        }) => [Ma(nm, Na(e, {
                            class: "topbar-action-btn topbar-action-btn--pink",
                            variant: "text",
                            icon: "$mdiFolderPlus",
                            onClick: H
                        }), null, 16)])),
                    _: 1
                }, 8, ["text"])) : Oa("", !0), v.value.allow_upload ? (Ca(), Ta(Tb, {
                    key: 1,
                    text: St(r)("titleCreateFile")
                }, {
                    activator: rn((({
                        props: e
                    }) => [Ma(nm, Na(e, {
                        class: "topbar-action-btn topbar-action-btn--pink",
                        variant: "text",
                        icon: "$mdiFilePlus",
                        onClick: createFilePromptAction
                    }), null, 16)])),
                    _: 1
                }, 8, ["text"])) : Oa("", !0), v.value.allow_archive ? (Ca(), Ta(Tb, {
                    key: 2,
                    text: St(r)("titleDownloadArchive")
                }, {
                    activator: rn((({
                        props: e
                    }) => [Ma(nm, Na(e, {
                        class: "topbar-action-btn topbar-action-btn--pink",
                        variant: "text",
                        icon: "$mdiFolderDownload",
                        href: y.value + "?zip",
                        download: ""
                    }), null, 16, ["href"])])),
                    _: 1
                }, 8, ["text"])) : Oa("", !0), v.value.auth && v.value.user ? (Ca(), La("span", {
                    key: 3,
                    class: "topbar-user-name"
                }, K(v.value.user), 1)) : Oa("", !0), v.value.auth ? (Ca(), Ta(Tb, {
                    key: 4,
                    text: v.value.user ? St(r)("titleLogout", [v.value.user]) : St(r)("titleLogin")
                }, {
                    activator: rn((({
                        props: e
                    }) => [Ma(nm, Na(e, {
                        class: "topbar-action-btn topbar-action-btn--pink",
                        variant: "text",
                        icon: v.value.user ? "$mdiLogout" : "$mdiLogin",
                        onClick: o[1] || (o[1] = e => v.value.user ? (async () => {
                            await t.promises.confirm(r("dialogLogout", [v.value.user]), r("actionLogout")) && (window.__DUFS_CUSTOM_LOGOUT__ && window.__DUFS_CUSTOM_LOGOUT__(), await new Promise(((e, t) => {
                                const n = new XMLHttpRequest;
                                n.onload = e, n.onerror = t, n.open("LOGOUT", `${y.value}`, !0, v.value.user), n.send()
                            })), await w())
                        })() : (async () => {
                            if (window.__DUFS_CUSTOM_LOGIN__) {
                                await window.__DUFS_CUSTOM_LOGIN__(`${y.value}`) && await w();
                                return
                            }
                            await a(`${y.value}`, {
                                method: "CHECKAUTH"
                            }), await w()
                        })())
                    }), null, 16, ["icon"])])),
                    _: 1
                }, 8, ["text"])) : Oa("", !0)])), Ma(pm, {
                    class: "my-4"
                }, {
                    default: rn((() => [Va("div", Rb, [Ma(mh, {
                        items: x.value,
                        class: "flex-grow-1 overflow-x-auto py-2 py-sm-4"
                    }, {
                        divider: rn((() => [Ma(Mg, {
                            icon: "$mdiChevronRight"
                        })])),
                        prepend: rn((() => [Ma(nm, {
                            variant: "text",
                            icon: "$mdiHome",
                            density: "comfortable",
                            to: x.value[0].href,
                            active: !1
                        }, null, 8, ["to"])])),
                        title: rn((({
                            item: e
                        }) => [Ma(gh, {
                            to: e.href,
                            "active-color": "primary",
                            exact: "",
                            class: "text-no-wrap px-0"
                        }, {
                            default: rn((() => [Ia(K(e.title), 1)])),
                            _: 2
                        }, 1032, ["to"])])),
                        _: 1
                    }, 8, ["items"]), v.value.allow_search ? (Ca(), La("div", {
                        key: 0,
                        class: "flex-shrink-0 px-3 py-2 py-sm-4",
                        style: N({
                            width: St(l).mdAndUp.value ? "320px" : St(l).smAndUp.value ? "240px" : "100%"
                        })
                    }, [Ma(Ab, {
                        modelValue: d.value,
                        "onUpdate:modelValue": o[2] || (o[2] = e => d.value = e),
                        density: "compact",
                        variant: "outlined",
                        color: "primary",
                        "single-line": "",
                        "hide-details": "",
                        label: St(r)("headerSearch"),
                        "append-inner-icon": d.value ? "$mdiCloseCircle" : "$mdiMagnify",
                        "onClick:appendInner": o[3] || (o[3] = e => d.value = "")
                    }, null, 8, ["modelValue", "label", "append-inner-icon"])], 4)) : Oa("", !0)]), Ma(qy, {
                        loading: i.value,
                        type: "table-tbody"
                    }, {
                        default: rn((() => [Ma(gb, {
                            class: G(["w-100", {
                                "overflow-x-auto": St(l).xs.value
                            }]),
                            style: {
                                "font-size": "1rem"
                            }
                        }, {
                            default: rn((() => [Va("thead", null, [Va("tr", Ib, [Va("th", Ob, [Va("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: o[4] || (o[4] = e => "name" === p.value ? f.value ? p.value = "" : f.value = !0 : (p.value = "name", f.value = !1))
                            }, [Ia(K(St(r)("headerName")) + " ", 1), "name" === p.value ? (Ca(), Ta(Mg, {
                                key: 0,
                                icon: f.value ? "$mdiSortAlphabeticalDescending" : "$mdiSortAlphabeticalAscending",
                                color: "grey",
                                size: "small"
                            }, null, 8, ["icon"])) : Oa("", !0)])]), Va("th", Hb, [Va("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: o[5] || (o[5] = e => "mtime" === p.value ? f.value ? p.value = "" : f.value = !0 : (p.value = "mtime", f.value = !1))
                            }, [Ia(K(St(r)("headerLastModified")) + " ", 1), "mtime" === p.value ? (Ca(), Ta(Mg, {
                                key: 0,
                                icon: f.value ? "$mdiSortClockDescending" : "$mdiSortClockAscending",
                                color: "grey",
                                size: "small"
                            }, null, 8, ["icon"])) : Oa("", !0)])]), Va("th", Bb, [Va("span", {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: o[6] || (o[6] = e => "size" === p.value ? f.value ? p.value = "" : f.value = !0 : (p.value = "size", f.value = !1))
                            }, [Ia(K(St(r)("headerSize")) + " ", 1), "size" === p.value ? (Ca(), Ta(Mg, {
                                key: 0,
                                icon: f.value ? "$mdiSortNumericDescending" : "$mdiSortNumericAscending",
                                color: "grey",
                                size: "small"
                            }, null, 8, ["icon"])) : Oa("", !0)])]), Va("th", Db, K(St(r)("headerActions")), 1)])]), Va("tbody", null, [(Ca(!0), La(ma, null, dr(g.value, (e => an((Ca(), La("tr", null, [Va("td", null, [Va("div", {
                                class: "d-flex align-center",
                                style: N({
                                    "min-width": St(l).width.value < 768 ? "min(1080px, calc(100vw - 64px))" : null
                                })
                            }, [Ma(Mg, {
                                color: e.is_dir ? "primary" : St(yg)(e.ext),
                                icon: e.is_dir ? "$mdiFolder" : St(bg)(e.ext),
                                class: "mr-2 flex-shrink-0"
                            }, null, 8, ["color", "icon"]), e.is_dir ? (Ca(), Ta(h, {
                                key: 0,
                                to: e.fullpath + "/",
                                class: "text-decoration-none",
                                style: {
                                    color: "inherit",
                                    "overflow-wrap": "anywhere"
                                }
                            }, {
                                default: rn((() => [Ia(K(e.name), 1)])),
                                _: 2
                            }, 1032, ["to"])) : (Ca(), La("a", {
                                key: 1,
                                href: e.fullpath,
                                class: "text-decoration-none",
                                style: {
                                    color: "inherit",
                                    "overflow-wrap": "anywhere"
                                }
                            }, K(e.name), 9, Nb)), e.is_symlink ? (Ca(), Ta(Mg, {
                                key: 2,
                                icon: "$mdiLinkVariant",
                                color: "grey",
                                size: "x-small",
                                class: "ml-1"
                            })) : Oa("", !0)], 4)]), Va("td", zb, K(St(wg)(e.mtime)), 1), Va("td", jb, K(e.is_dir ? St(r)("headerSizeSubdirectoryItems", [e.size], e.size) : St(kg)(e.size)), 1), Va("td", Ub, [new Set(["jpg", "jpeg", "gif", "png", "webp", "avif", "svg"]).has(e.ext) ? (Ca(), Ta(Tb, {
                                key: 0,
                                text: St(r)("actionViewImage")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiImageSearch",
                                    density: "comfortable",
                                    onClick(t) {
                                        C.value = !0, S.value = "image", _.value = e
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), new Set(["mp4", "webm", "ogv"]).has(e.ext) ? (Ca(), Ta(Tb, {
                                key: 1,
                                text: St(r)("actionPlayVideo")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiVideo",
                                    density: "comfortable",
                                    onClick(t) {
                                        C.value = !0, S.value = "video", _.value = e
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), new Set(["mp3", "m4a", "ogg", "weba", "oga", "flac", "opus"]).has(e.ext) ? (Ca(), Ta(Tb, {
                                key: 2,
                                text: St(r)("actionPlayAudio")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiDiscPlayer",
                                    density: "comfortable",
                                    onClick(t) {
                                        C.value = !0, S.value = "audio", _.value = e, ne(e), U.value = 0
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), "pdf" === e.ext ? (Ca(), Ta(Tb, {
                                key: 3,
                                text: St(r)("actionViewFile")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiFileSearch",
                                    density: "comfortable",
                                    onClick(t) {
                                        C.value = !0, S.value = "pdf", _.value = e
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), new Set(["readme", "license"]).has(e.filename.toLowerCase()) || new Set(["txt", "log", "conf", "ini", "md", "gitignore"]).has(e.ext) || St(hg)[e.ext] ? (Ca(), Ta(Tb, {
                                key: 4,
                                text: St(r)("actionViewFile")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiFileSearch",
                                    density: "comfortable",
                                    onClick(t) {
                                        C.value = !0, S.value = "text", _.value = e, A.value = "", (async () => {
                                            if (!_.value.fullpath) return;
                                            const e = setTimeout((() => u.value = !0), 150),
                                                t = await a(_.value.fullpath).then((e => e.text()));
                                            if (u.value = !1, clearTimeout(e), "md" === _.value.ext) A.value = xi.parse(t);
                                            else {
                                                const e = hg[_.value.ext];
                                                e && Bi.languages[e] ? (A.value = `<pre class="line-numbers language-${e} w-100" style="background:none"><code class="language-${e}">${Bi.highlight(t, Bi.languages[e], e)}</code></pre>`, Zt((() => Bi.highlightAll()))) : A.value = t
                                            }
                                        })()
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), v.value.allow_upload && v.value.allow_delete && e.size < 1048576 && (new Set(["readme", "license"]).has(e.filename.toLowerCase()) || new Set(["txt", "log", "conf", "ini", "md", "gitignore"]).has(e.ext) || St(hg)[e.ext]) ? (Ca(), Ta(Tb, {
                                key: 5,
                                text: St(r)("actionEditFile")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiFileDocumentEdit",
                                    density: "comfortable",
                                    onClick(t) {
                                        L.value = !0, E.value = e, F.value = "", (async () => {
                                            if (!E.value.fullpath) return;
                                            const e = setTimeout((() => c.value = !0), 150),
                                                t = await a(E.value.fullpath).then((e => e.text()));
                                            c.value = !1, clearTimeout(e), F.value = t
                                        })()
                                    }
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), v.value.allow_delete ? (Ca(), Ta(Tb, {
                                key: 6,
                                text: St(r)("actionMove")
                            }, {
                                activator: rn((({
                                    props: o
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, o, {
                                    variant: "plain",
                                    icon: "$mdiFileMove",
                                    density: "comfortable",
                                    onClick: o => (async e => {
                                        const o = await t.promises.prompt(r("dialogMoveLabel"), r("actionMove"), {
                                            value: e.name
                                        });
                                        o && (await a(e.fullpath, {
                                            method: "MOVE",
                                            headers: {
                                                Destination: encodeURI(y.value + o)
                                            }
                                        }), n.success(r(e.is_dir ? "toastMoveFolder" : "toastMoveFile")), await w())
                                    })(e)
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), v.value.allow_delete ? (Ca(), Ta(Tb, {
                                key: 7,
                                text: St(r)(e.is_dir ? "actionDeleteFolder" : "actionDeleteFile")
                            }, {
                                activator: rn((({
                                    props: n
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, n, {
                                    variant: "plain",
                                    icon: "$mdiDeleteForever",
                                    density: "comfortable",
                                    onClick: n => (async e => {
                                        await t.promises.confirm(r("dialogDeleteConfirm", [e.name]), r(e.is_dir ? "actionDeleteFolder" : "actionDeleteFile")) && (await a(e.fullpath, {
                                            method: "DELETE"
                                        }), await w())
                                    })(e)
                                }), null, 16, ["onClick"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), e.is_dir && v.value.allow_archive ? (Ca(), Ta(Tb, {
                                key: 8,
                                text: St(r)("actionDownloadArchive")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiFolderDownload",
                                    density: "comfortable",
                                    href: y.value + e.name + "/?zip",
                                    download: e.filename + ".zip"
                                }), null, 16, ["href", "download"])])),
                                _: 2
                            }, 1032, ["text"])) : Oa("", !0), e.is_dir ? Oa("", !0) : (Ca(), Ta(Tb, {
                                key: 9,
                                text: St(r)("actionDownloadFile")
                            }, {
                                activator: rn((({
                                    props: t
                                }) => [Ma(nm, Na({
                                    ref_for: !0
                                }, t, {
                                    variant: "plain",
                                    icon: "$mdiDownload",
                                    density: "comfortable",
                                    href: y.value + e.name,
                                    download: e.filename
                                }), null, 16, ["href", "download"])])),
                                _: 2
                            }, 1032, ["text"]))])])), [
                                [em]
                            ]))), 256))])])),
                            _: 1
                        }, 8, ["class"])])),
                        _: 1
                    }, 8, ["loading"])])),
                    _: 1
                }), m.value ? (Ca(), Ta(pm, {
                    key: 0,
                    class: "my-4"
                }, {
                    default: rn((() => [Ma(lm, {
                        class: "text-subtitle-1"
                    }, {
                        default: rn((() => [Ma(Mg, {
                            icon: "$mdiBookOpenVariant",
                            size: "small",
                            class: "mr-2"
                        }), Ia(K(m.value.filename), 1)])),
                        _: 1
                    }), Ma(qy, {
                        loading: s.value,
                        type: "article"
                    }, {
                        default: rn((() => [$.value ? (Ca(), Ta(cm, {
                            key: 0,
                            innerHTML: P.value,
                            class: "markdown-body w-100"
                        }, null, 8, ["innerHTML"])) : (Ca(), Ta(cm, {
                            key: 1
                        }, {
                            default: rn((() => [Va("pre", Wb, [Va("code", null, K(P.value), 1)])])),
                            _: 1
                        }))])),
                        _: 1
                    }, 8, ["loading"])])),
                    _: 1
                })) : Oa("", !0), Ma(oy, {
                    modelValue: C.value,
                    "onUpdate:modelValue": o[14] || (o[14] = e => C.value = e),
                    width: "min(960px, calc(100vw - 32px))"
                }, {
                    default: rn((() => [Ma(pm, null, {
                        default: rn((() => [Ma(lm, {
                            class: "d-flex align-center"
                        }, {
                            default: rn((() => [Ma(Mg, {
                                color: St(yg)(_.value.ext),
                                icon: St(bg)(_.value.ext),
                                class: "mr-2 flex-shrink-0"
                            }, null, 8, ["color", "icon"]), Va("span", {
                                class: "flex-grow-1 text-truncate",
                                title: _.value.name
                            }, [Ia(K(_.value.filename) + " ", 1), Va("span", Zb, "(" + K(St(kg)(_.value.size)) + ")", 1)], 8, Gb), Ma(nm, {
                                variant: "plain",
                                icon: "$mdiDownload",
                                density: "comfortable",
                                href: _.value.fullpath,
                                download: _.value.filename
                            }, null, 8, ["href", "download"]), Ma(nm, {
                                variant: "plain",
                                icon: "$mdiClose",
                                density: "comfortable",
                                onClick: o[7] || (o[7] = e => C.value = !1)
                            })])),
                            _: 1
                        }), Ma(iy), "image" === S.value ? (Ca(), Ta(cm, {
                            key: 0,
                            class: "py-4",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => [Va("img", {
                                src: _.value.fullpath,
                                alt: _.value.filename,
                                class: "d-block mx-auto rounded",
                                style: {
                                    "max-width": "100%",
                                    "max-height": "calc(100vh - 48px - 52px - 48px)"
                                }
                            }, null, 8, qb)])),
                            _: 1
                        })) : "video" === S.value ? (Ca(), Ta(cm, {
                            key: 1,
                            class: "py-4",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => [Va("video", {
                                src: _.value.fullpath,
                                controls: "",
                                autoplay: "",
                                preload: "metadata",
                                class: "d-block mx-auto rounded",
                                style: {
                                    "max-width": "100%",
                                    "max-height": "calc(100vh - 48px - 52px - 48px)"
                                }
                            }, null, 8, Yb)])),
                            _: 1
                        })) : "audio" === S.value ? (Ca(), Ta(cm, {
                            key: 2,
                            class: "py-4 d-flex flex-column align-center",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => [Ma(Gg, {
                                width: "320",
                                height: "320",
                                class: "rounded flex-shrink-1",
                                "aspect-ratio": "1",
                                src: W.value
                            }, {
                                placeholder: rn((() => [Va("div", Kb, [Ma(Mg, {
                                    icon: "$mdiMusic",
                                    size: "108",
                                    color: "white"
                                })])])),
                                _: 1
                            }, 8, ["src"]), Va("div", Xb, [Va("div", Jb, K(Z.value || St(xg)(_.value.name, `.${_.value.ext}`)), 1), q.value ? (Ca(), La("div", {
                                key: 0,
                                class: "text-subtitle-1 text-truncate",
                                style: {
                                    "max-width": "calc(min(960px, calc(100vw - 32px)) - 48px)"
                                },
                                title: q.value
                            }, K(q.value), 9, Qb)) : Oa("", !0), Y.value ? (Ca(), La("div", {
                                key: 1,
                                class: "text-subtitle-1 text-truncate",
                                style: {
                                    "max-width": "calc(min(960px, calc(100vw - 32px)) - 48px)"
                                },
                                title: Y.value
                            }, K(Y.value), 9, ek)) : Oa("", !0)]), Ma(fb, {
                                class: "flex-grow-1 mb-4 w-100",
                                color: "primary",
                                "hide-details": "",
                                min: "0",
                                max: U.value,
                                "model-value": j.value,
                                "onUpdate:modelValue": o[8] || (o[8] = e => j.value = X.value.currentTime = e)
                            }, {
                                prepend: rn((() => [Ia(K(J(X.value.currentTime)), 1)])),
                                append: rn((() => [Ia(K(J(U.value)), 1)])),
                                _: 1
                            }, 8, ["max", "model-value"]), Va("div", tk, [Ma(nm, {
                                icon: D.value ? "$mdiShuffle" : "$mdiShuffleDisabled",
                                variant: "plain",
                                class: "mx-1",
                                onClick: o[9] || (o[9] = e => D.value = !D.value)
                            }, null, 8, ["icon"]), Ma(nm, {
                                icon: "$mdiSkipPrevious",
                                variant: "plain",
                                class: "mx-1",
                                onClick: o[10] || (o[10] = e => ne(_.value = (e => {
                                    const t = Q.value.indexOf(e);
                                    return Q.value[0 === t ? Q.value.length - 1 : t - 1]
                                })(_.value)))
                            }), Ma(nm, {
                                icon: B.value ? "$mdiPlay" : "$mdiPause",
                                color: "primary",
                                elevation: "0",
                                class: "mx-1",
                                onClick: o[11] || (o[11] = e => {
                                    B.value ? X.value.play() : X.value.pause(), B.value = !B.value
                                })
                            }, null, 8, ["icon"]), Ma(nm, {
                                icon: "$mdiSkipNext",
                                variant: "plain",
                                class: "mx-1",
                                onClick: o[12] || (o[12] = e => ne(_.value = ee(_.value)))
                            }), Ma(nm, {
                                icon: z.value ? "$mdiRepeat" : "$mdiRepeatOff",
                                variant: "plain",
                                class: "mx-1",
                                onClick: o[13] || (o[13] = e => z.value = !z.value)
                            }, null, 8, ["icon"])])])),
                            _: 1
                        })) : "pdf" === S.value ? (Ca(), Ta(cm, {
                            key: 3,
                            class: "py-4",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => [Va("embed", {
                                src: _.value.fullpath,
                                type: "application/pdf",
                                class: "rounded",
                                style: {
                                    width: "100%",
                                    height: "calc(100vh - 48px - 52px - 48px)"
                                }
                            }, null, 8, nk)])),
                            _: 1
                        })) : "text" === S.value ? (Ca(), Ta(qy, {
                            key: 4,
                            loading: u.value,
                            type: "paragraph, subtitle, sentences",
                            class: "overflow-y-auto",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => ["md" === _.value.ext || St(hg)[_.value.ext] ? (Ca(), Ta(cm, {
                                key: 0,
                                innerHTML: A.value,
                                class: G(["pt-0 markdown-body", {
                                    "pb-0": "md" !== _.value.ext,
                                    "w-100": "md" === _.value.ext
                                }])
                            }, null, 8, ["innerHTML", "class"])) : (Ca(), Ta(cm, {
                                key: 1,
                                class: "py-0 markdown-body"
                            }, {
                                default: rn((() => [Va("pre", rk, [Va("code", null, K(A.value), 1)])])),
                                _: 1
                            }))])),
                            _: 1
                        }, 8, ["loading"])) : Oa("", !0)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["modelValue"]), Ma(oy, {
                    modelValue: L.value,
                    "onUpdate:modelValue": o[18] || (o[18] = e => L.value = e),
                    width: "min(960px, calc(100vw - 32px))"
                }, {
                    default: rn((() => [Ma(pm, null, {
                        default: rn((() => [Ma(lm, {
                            class: "d-flex align-center"
                        }, {
                            default: rn((() => [Ma(Mg, {
                                color: St(yg)(E.value.ext),
                                icon: St(bg)(E.value.ext),
                                class: "mr-2 flex-shrink-0"
                            }, null, 8, ["color", "icon"]), Va("span", {
                                class: "flex-grow-1 text-truncate",
                                title: E.value.name
                            }, K(E.value.filename), 9, ak), Ma(nm, {
                                variant: "plain",
                                icon: T.value ? "$mdiFormatTextWrappingWrap" : "$mdiFormatTextWrappingOverflow",
                                density: "comfortable",
                                onClick: o[15] || (o[15] = e => T.value = !T.value)
                            }, null, 8, ["icon"]), Ma(nm, {
                                variant: "plain",
                                icon: "$mdiContentSave",
                                density: "comfortable",
                                onClick: M
                            }), Ma(nm, {
                                variant: "plain",
                                icon: "$mdiClose",
                                density: "comfortable",
                                onClick: o[16] || (o[16] = e => L.value = !1)
                            })])),
                            _: 1
                        }), Ma(iy), Ma(qy, {
                            loading: c.value,
                            type: "paragraph, subtitle, sentences",
                            class: "overflow-y-auto",
                            style: {
                                "max-height": "calc(100vh - 48px - 52px - 16px)"
                            }
                        }, {
                            default: rn((() => [Ma(cm, null, {
                                default: rn((() => [an(Va("textarea", {
                                    "onUpdate:modelValue": o[17] || (o[17] = e => F.value = e),
                                    wrap: T.value ? "soft" : "off",
                                    style: {
                                        "font-family": "ui-monospace,'Cascadia Mono','Segoe UI Mono','Liberation Mono',Menlo,Monaco,Consolas,sans-serif",
                                        width: "100%",
                                        height: "calc(100vh - 48px - 52px - 16px - 34px)",
                                        resize: "none",
                                        border: "none",
                                        outline: "none",
                                        "font-size": "1rem"
                                    }
                                }, null, 8, ok), [
                                    [dl, F.value]
                                ])])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["loading"])])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["modelValue"]), Va("audio", {
                    ref_key: "previewAudio",
                    ref: X,
                    preload: "metadata",
                    class: "d-none",
                    src: Q.value.includes(_.value) ? _.value.fullpath : void 0,
                    autoplay: !B.value,
                    loop: z.value,
                    onError: o[19] || (o[19] = e => St(n).error(St(r)("toastFailedLoadAudio"))),
                    onPlay: o[20] || (o[20] = e => B.value = !1),
                    onPause: o[21] || (o[21] = e => B.value = !0),
                    onEnded: te,
                    onLoadedmetadata: o[22] || (o[22] = e => U.value = X.value.duration),
                    onTimeupdate: o[23] || (o[23] = e => j.value = X.value.currentTime)
                }, null, 40, lk)], 64)
            }
        }
    },
    sk = function (e) {
        const t = function (e, t) {
            const n = [],
                r = new Map;

            function a(e, n, r) {
                const i = !r,
                    s = ou(e);
                s.aliasOf = r && r.record;
                const u = uu(t, e),
                    c = [s];
                if ("alias" in e) {
                    const t = "string" == typeof e.alias ? [e.alias] : e.alias;
                    for (const e of t) c.push(ou(as({}, s, {
                        components: r ? r.record.components : s.components,
                        path: e,
                        aliasOf: r ? r.record : s
                    })))
                }
                let d, p;
                for (const t of c) {
                    const {
                        path: c
                    } = t;
                    if (n && "/" !== c[0]) {
                        const e = n.record.path,
                            r = "/" === e[e.length - 1] ? "" : "/";
                        t.path = n.record.path + (c && r + c)
                    }
                    if (d = ru(t, n, u), r ? r.alias.push(d) : (p = p || d, p !== d && p.alias.push(d), i && e.name && !iu(d) && o(e.name)), cu(d) && l(d), s.children) {
                        const e = s.children;
                        for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t])
                    }
                    r = r || d
                }
                return p ? () => {
                    o(p)
                } : ls
            }

            function o(e) {
                if (js(e)) {
                    const t = r.get(e);
                    t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o))
                } else {
                    const t = n.indexOf(e);
                    t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o))
                }
            }

            function l(e) {
                const t = function (e, t) {
                    let n = 0,
                        r = t.length;
                    for (; n !== r;) {
                        const a = n + r >> 1;
                        Qs(e, t[a]) < 0 ? r = a : n = a + 1
                    }
                    const a = function (e) {
                        let t = e;
                        for (; t = t.parent;)
                            if (cu(t) && 0 === Qs(e, t)) return t
                    }(e);
                    return a && (r = t.lastIndexOf(a, r - 1)), r
                }(e, n);
                n.splice(t, 0, e), e.record.name && !iu(e) && r.set(e.record.name, e)
            }
            return t = uu({
                strict: !1,
                end: !0,
                sensitive: !1
            }, t), e.forEach((e => a(e))), {
                addRoute: a,
                resolve(e, t) {
                    let a, o, l, i = {};
                    if ("name" in e && e.name) {
                        if (a = r.get(e.name), !a) throw Zs(1, {
                            location: e
                        });
                        l = a.record.name, i = as(au(t.params, a.keys.filter((e => !e.optional)).concat(a.parent ? a.parent.keys.filter((e => e.optional)) : []).map((e => e.name))), e.params && au(e.params, a.keys.map((e => e.name)))), o = a.stringify(i)
                    } else if (null != e.path) o = e.path, a = n.find((e => e.re.test(o))), a && (i = a.parse(o), l = a.record.name);
                    else {
                        if (a = t.name ? r.get(t.name) : n.find((e => e.re.test(t.path))), !a) throw Zs(1, {
                            location: e,
                            currentLocation: t
                        });
                        l = a.record.name, i = as({}, t.params, e.params), o = a.stringify(i)
                    }
                    const s = [];
                    let u = a;
                    for (; u;) s.unshift(u.record), u = u.parent;
                    return {
                        name: l,
                        path: o,
                        params: i,
                        matched: s,
                        meta: su(s)
                    }
                },
                removeRoute: o,
                clearRoutes() {
                    n.length = 0, r.clear()
                },
                getRoutes() {
                    return n
                },
                getRecordMatcher(e) {
                    return r.get(e)
                }
            }
        }(e.routes, e),
            n = e.parseQuery || du,
            r = e.stringifyQuery || pu,
            a = e.history,
            o = bu(),
            l = bu(),
            i = bu(),
            s = wt($s);
        let u = $s;
        ns && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const c = os.bind(null, (e => "" + e)),
            d = os.bind(null, Cs),
            p = os.bind(null, Ss);

        function f(e, o) {
            if (o = as({}, o || s.value), "string" == typeof e) {
                const r = _s(n, e, o.path),
                    l = t.resolve({
                        path: r.path
                    }, o),
                    i = a.createHref(r.fullPath);
                return as(r, l, {
                    params: p(l.params),
                    hash: Ss(r.hash),
                    redirectedFrom: void 0,
                    href: i
                })
            }
            let l;
            if (null != e.path) l = as({}, e, {
                path: _s(n, e.path, o.path).path
            });
            else {
                const t = as({}, e.params);
                for (const e in t) null == t[e] && delete t[e];
                l = as({}, e, {
                    params: d(t)
                }), o.params = d(o.params)
            }
            const i = t.resolve(l, o),
                u = e.hash || "";
            i.params = c(p(i.params));
            const f = function (e, t) {
                const n = t.query ? e(t.query) : "";
                return t.path + (n && "?") + n + (t.hash || "")
            }(r, as({}, e, {
                hash: (v = u, ws(v).replace(ms, "{").replace(bs, "}").replace(gs, "^")),
                path: i.path
            }));
            var v;
            const g = a.createHref(f);
            return as({
                fullPath: f,
                hash: u,
                query: r === pu ? fu(e.query) : e.query || {}
            }, i, {
                redirectedFrom: void 0,
                href: g
            })
        }

        function v(e) {
            return "string" == typeof e ? _s(n, e, s.value.path) : as({}, e)
        }

        function g(e, t) {
            if (u !== e) return Zs(8, {
                from: t,
                to: e
            })
        }

        function h(e) {
            return y(e)
        }

        function m(e) {
            const t = e.matched[e.matched.length - 1];
            if (t && t.redirect) {
                const {
                    redirect: n
                } = t;
                let r = "function" == typeof n ? n(e) : n;
                return "string" == typeof r && (r = r.includes("?") || r.includes("#") ? r = v(r) : {
                    path: r
                }, r.params = {}), as({
                    query: e.query,
                    hash: e.hash,
                    params: null != r.path ? {} : e.params
                }, r)
            }
        }

        function y(e, t) {
            const n = u = f(e),
                a = s.value,
                o = e.state,
                l = e.force,
                i = !0 === e.replace,
                c = m(n);
            if (c) return y(as(v(c), {
                state: "object" == typeof c ? as({}, o, c.state) : o,
                force: l,
                replace: i
            }), t || n);
            const d = n;
            let p;
            return d.redirectedFrom = t, !l && function (e, t, n) {
                const r = t.matched.length - 1,
                    a = n.matched.length - 1;
                return r > -1 && r === a && Ls(t.matched[r], n.matched[a]) && Ts(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
            }(r, a, n) && (p = Zs(16, {
                to: d,
                from: a
            }), F(a, a, !0, !1)), (p ? Promise.resolve(p) : w(d, a)).catch((e => qs(e) ? qs(e, 2) ? e : E(e) : T(e, d, a))).then((e => {
                if (e) {
                    if (qs(e, 2)) return y(as({
                        replace: i
                    }, v(e.to), {
                        state: "object" == typeof e.to ? as({}, o, e.to.state) : o,
                        force: l
                    }), t || d)
                } else e = C(d, a, !0, i, o);
                return x(d, a, e), e
            }))
        }

        function b(e, t) {
            const n = g(e, t);
            return n ? Promise.reject(n) : Promise.resolve()
        }

        function k(e) {
            const t = V.values().next().value;
            return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e()
        }

        function w(e, t) {
            let n;
            const [r, a, i] = function (e, t) {
                const n = [],
                    r = [],
                    a = [],
                    o = Math.max(t.matched.length, e.matched.length);
                for (let l = 0; l < o; l++) {
                    const o = t.matched[l];
                    o && (e.matched.find((e => Ls(e, o))) ? r.push(o) : n.push(o));
                    const i = e.matched[l];
                    i && (t.matched.find((e => Ls(e, i))) || a.push(i))
                }
                return [n, r, a]
            }(e, t);
            n = wu(r.reverse(), "beforeRouteLeave", e, t);
            for (const o of r) o.leaveGuards.forEach((r => {
                n.push(ku(r, e, t))
            }));
            const s = b.bind(null, e, t);
            return n.push(s), R(n).then((() => {
                n = [];
                for (const r of o.list()) n.push(ku(r, e, t));
                return n.push(s), R(n)
            })).then((() => {
                n = wu(a, "beforeRouteUpdate", e, t);
                for (const r of a) r.updateGuards.forEach((r => {
                    n.push(ku(r, e, t))
                }));
                return n.push(s), R(n)
            })).then((() => {
                n = [];
                for (const r of i)
                    if (r.beforeEnter)
                        if (is(r.beforeEnter))
                            for (const a of r.beforeEnter) n.push(ku(a, e, t));
                        else n.push(ku(r.beforeEnter, e, t));
                return n.push(s), R(n)
            })).then((() => (e.matched.forEach((e => e.enterCallbacks = {})), n = wu(i, "beforeRouteEnter", e, t, k), n.push(s), R(n)))).then((() => {
                n = [];
                for (const r of l.list()) n.push(ku(r, e, t));
                return n.push(s), R(n)
            })).catch((e => qs(e, 8) ? e : Promise.reject(e)))
        }

        function x(e, t, n) {
            i.list().forEach((r => k((() => r(e, t, n)))))
        }

        function C(e, t, n, r, o) {
            const l = g(e, t);
            if (l) return l;
            const i = t === $s,
                u = ns ? history.state : {};
            n && (r || i ? a.replace(e.fullPath, as({
                scroll: i && u && u.scroll
            }, o)) : a.push(e.fullPath, o)), s.value = e, F(e, t, n, i), E()
        }
        let S;
        let _, A = bu(),
            L = bu();

        function T(e, t, n) {
            E(e);
            const r = L.list();
            return r.length ? r.forEach((r => r(e, t, n))) : console.error(e), Promise.reject(e)
        }

        function E(e) {
            return _ || (_ = !e, S || (S = a.listen(((e, t, n) => {
                if (!M.listening) return;
                const r = f(e),
                    o = m(r);
                if (o) return void y(as(o, {
                    replace: !0,
                    force: !0
                }), r).catch(ls);
                u = r;
                const l = s.value;
                var i, c;
                ns && (i = Bs(l.fullPath, n.delta), c = Hs(), Ds.set(i, c)), w(r, l).catch((e => qs(e, 12) ? e : qs(e, 2) ? (y(as(v(e.to), {
                    force: !0
                }), r).then((e => {
                    qs(e, 20) && !n.delta && n.type === Ps.pop && a.go(-1, !1)
                })).catch(ls), Promise.reject()) : (n.delta && a.go(-n.delta, !1), T(e, r, l)))).then((e => {
                    (e = e || C(r, l, !1)) && (n.delta && !qs(e, 8) ? a.go(-n.delta, !1) : n.type === Ps.pop && qs(e, 20) && a.go(-1, !1)), x(r, l, e)
                })).catch(ls)
            }))), A.list().forEach((([t, n]) => e ? n(e) : t())), A.reset()), e
        }

        function F(t, n, r, a) {
            const {
                scrollBehavior: o
            } = e;
            if (!ns || !o) return Promise.resolve();
            const l = !r && function (e) {
                const t = Ds.get(e);
                return Ds.delete(e), t
            }(Bs(t.fullPath, 0)) || (a || !r) && history.state && history.state.scroll || null;
            return Zt().then((() => o(t, n, l))).then((e => e && function (e) {
                let t;
                if ("el" in e) {
                    const n = e.el,
                        r = "string" == typeof n && n.startsWith("#"),
                        a = "string" == typeof n ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
                    if (!a) return;
                    t = function (e, t) {
                        const n = document.documentElement.getBoundingClientRect(),
                            r = e.getBoundingClientRect();
                        return {
                            behavior: t.behavior,
                            left: r.left - n.left - (t.left || 0),
                            top: r.top - n.top - (t.top || 0)
                        }
                    }(a, e)
                } else t = e;
                "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY)
            }(e))).catch((e => T(e, t, n)))
        }
        const $ = e => a.go(e);
        let P;
        const V = new Set,
            M = {
                currentRoute: s,
                listening: !0,
                addRoute(e, n) {
                    let r, a;
                    return js(e) ? (r = t.getRecordMatcher(e), a = n) : a = e, t.addRoute(a, r)
                },
                removeRoute(e) {
                    const n = t.getRecordMatcher(e);
                    n && t.removeRoute(n)
                },
                clearRoutes: t.clearRoutes,
                hasRoute: e => !!t.getRecordMatcher(e),
                getRoutes: () => t.getRoutes().map((e => e.record)),
                resolve: f,
                options: e,
                push: h,
                replace: e => h(as(v(e), {
                    replace: !0
                })),
                go: $,
                back: () => $(-1),
                forward: () => $(1),
                beforeEach: o.add,
                beforeResolve: l.add,
                afterEach: i.add,
                onError: L.add,
                isReady: () => _ && s.value !== $s ? Promise.resolve() : new Promise(((e, t) => {
                    A.add([e, t])
                })),
                install(e) {
                    e.component("RouterLink", Cu), e.component("RouterView", Lu), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
                        enumerable: !0,
                        get: () => St(s)
                    }), ns && !P && s.value === $s && (P = !0, h(a.location).catch((e => { })));
                    const t = {};
                    for (const r in $s) Object.defineProperty(t, r, {
                        get: () => s.value[r],
                        enumerable: !0
                    });
                    e.provide(hu, this), e.provide(mu, ut(t)), e.provide(yu, s);
                    const n = e.unmount;
                    V.add(e), e.unmount = function () {
                        V.delete(e), V.size < 1 && (u = $s, S && S(), S = null, s.value = $s, P = !1, _ = !1), n()
                    }
                }
            };

        function R(e) {
            return e.reduce(((e, t) => e.then((() => k(t)))), Promise.resolve())
        }
        return M
    }({
        history: function (e) {
            const t = function (e) {
                const {
                    history: t,
                    location: n
                } = window, r = {
                    value: Ns(e, n)
                }, a = {
                    value: t.state
                };

                function o(r, o, l) {
                    const i = e.indexOf("#"),
                        s = i > -1 ? (n.host && document.querySelector("base") ? e : e.slice(i)) + r : location.protocol + "//" + location.host + e + r;
                    try {
                        t[l ? "replaceState" : "pushState"](o, "", s), a.value = o
                    } catch (u) {
                        console.error(u), n[l ? "replace" : "assign"](s)
                    }
                }
                return a.value || o(r.value, {
                    back: null,
                    current: r.value,
                    forward: null,
                    position: t.length - 1,
                    replaced: !0,
                    scroll: null
                }, !0), {
                    location: r,
                    state: a,
                    push(e, n) {
                        const l = as({}, a.value, t.state, {
                            forward: e,
                            scroll: Hs()
                        });
                        o(l.current, l, !0), o(e, as({}, zs(r.value, e, null), {
                            position: l.position + 1
                        }, n), !1), r.value = e
                    },
                    replace(e, n) {
                        o(e, as({}, t.state, zs(a.value.back, e, a.value.forward, !0), n, {
                            position: a.value.position
                        }), !0), r.value = e
                    }
                }
            }(e = function (e) {
                if (!e)
                    if (ns) {
                        const t = document.querySelector("base");
                        e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "")
                    } else e = "/";
                return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), e.replace(/\/$/, "")
            }(e)),
                n = function (e, t, n, r) {
                    let a = [],
                        o = [],
                        l = null;
                    const i = ({
                        state: o
                    }) => {
                        const i = Ns(e, location),
                            s = n.value,
                            u = t.value;
                        let c = 0;
                        if (o) {
                            if (n.value = i, t.value = o, l && l === s) return void (l = null);
                            c = u ? o.position - u.position : 0
                        } else r(i);
                        a.forEach((e => {
                            e(n.value, s, {
                                delta: c,
                                type: Ps.pop,
                                direction: c ? c > 0 ? Ms.forward : Ms.back : Ms.unknown
                            })
                        }))
                    };

                    function s() {
                        const {
                            history: e
                        } = window;
                        e.state && e.replaceState(as({}, e.state, {
                            scroll: Hs()
                        }), "")
                    }
                    return window.addEventListener("popstate", i), window.addEventListener("beforeunload", s, {
                        passive: !0
                    }), {
                        pauseListeners() {
                            l = n.value
                        },
                        listen(e) {
                            a.push(e);
                            const t = () => {
                                const t = a.indexOf(e);
                                t > -1 && a.splice(t, 1)
                            };
                            return o.push(t), t
                        },
                        destroy() {
                            for (const e of o) e();
                            o = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", s)
                        }
                    }
                }(e, t.state, t.location, t.replace),
                r = as({
                    location: "",
                    base: e,
                    go(e, t = !0) {
                        t || n.pauseListeners(), history.go(e)
                    },
                    createHref: Os.bind(null, e)
                }, t, n);
            return Object.defineProperty(r, "location", {
                enumerable: !0,
                get: () => t.location.value
            }), Object.defineProperty(r, "state", {
                enumerable: !0,
                get: () => t.state.value
            }), r
        }(),
        routes: [{
            path: "/:path(.*)*",
            component: ik
        }]
    }),
    uk = xp({
        icons: {
            defaultSet: "mdi",
            aliases: {
                mdiChevronRight: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
                mdiHome: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
                mdiFile: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",
                mdiFilePlus: "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M13,9H18.5L13,3.5V9M12,11V14H9V16H12V19H14V16H17V14H14V11H12Z",
                mdiFileMusic: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,13H11V18A2,2 0 0,1 9,20A2,2 0 0,1 7,18A2,2 0 0,1 9,16C9.4,16 9.7,16.1 10,16.3V11H13V13M13,9V3.5L18.5,9H13Z",
                mdiFileVideo: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M17,19V13L14,15.2V13H7V19H14V16.8L17,19Z",
                mdiFilePdfBox: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",
                mdiFolder: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",
                mdiImage: "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z",
                mdiLanguageC: "M15.45,15.97L15.87,18.41C15.61,18.55 15.19,18.68 14.63,18.8C14.06,18.93 13.39,19 12.62,19C10.41,18.96 8.75,18.3 7.64,17.04C6.5,15.77 5.96,14.16 5.96,12.21C6,9.9 6.68,8.13 8,6.89C9.28,5.64 10.92,5 12.9,5C13.65,5 14.3,5.07 14.84,5.19C15.38,5.31 15.78,5.44 16.04,5.59L15.44,8.08L14.4,7.74C14,7.64 13.53,7.59 13,7.59C11.85,7.58 10.89,7.95 10.14,8.69C9.38,9.42 9,10.54 8.96,12.03C8.97,13.39 9.33,14.45 10.04,15.23C10.75,16 11.74,16.4 13.03,16.41L14.36,16.29C14.79,16.21 15.15,16.1 15.45,15.97Z",
                mdiLanguageCpp: "M10.5,15.97L10.91,18.41C10.65,18.55 10.23,18.68 9.67,18.8C9.1,18.93 8.43,19 7.66,19C5.45,18.96 3.79,18.3 2.68,17.04C1.56,15.77 1,14.16 1,12.21C1.05,9.9 1.72,8.13 3,6.89C4.32,5.64 5.96,5 7.94,5C8.69,5 9.34,5.07 9.88,5.19C10.42,5.31 10.82,5.44 11.08,5.59L10.5,8.08L9.44,7.74C9.04,7.64 8.58,7.59 8.05,7.59C6.89,7.58 5.93,7.95 5.18,8.69C4.42,9.42 4.03,10.54 4,12.03C4,13.39 4.37,14.45 5.08,15.23C5.79,16 6.79,16.4 8.07,16.41L9.4,16.29C9.83,16.21 10.19,16.1 10.5,15.97M11,11H13V9H15V11H17V13H15V15H13V13H11V11M18,11H20V9H22V11H24V13H22V15H20V13H18V11Z",
                mdiLanguageCsharp: "M11.5,15.97L11.91,18.41C11.65,18.55 11.23,18.68 10.67,18.8C10.1,18.93 9.43,19 8.66,19C6.45,18.96 4.79,18.3 3.68,17.04C2.56,15.77 2,14.16 2,12.21C2.05,9.9 2.72,8.13 4,6.89C5.32,5.64 6.96,5 8.94,5C9.69,5 10.34,5.07 10.88,5.19C11.42,5.31 11.82,5.44 12.08,5.59L11.5,8.08L10.44,7.74C10.04,7.64 9.58,7.59 9.05,7.59C7.89,7.58 6.93,7.95 6.18,8.69C5.42,9.42 5.03,10.54 5,12.03C5,13.39 5.37,14.45 6.08,15.23C6.79,16 7.79,16.4 9.07,16.41L10.4,16.29C10.83,16.21 11.19,16.1 11.5,15.97M13.89,19L14.5,15H13L13.34,13H14.84L15.16,11H13.66L14,9H15.5L16.11,5H18.11L17.5,9H18.5L19.11,5H21.11L20.5,9H22L21.66,11H20.16L19.84,13H21.34L21,15H19.5L18.89,19H16.89L17.5,15H16.5L15.89,19H13.89M16.84,13H17.84L18.16,11H17.16L16.84,13Z",
                mdiLanguageGo: "M2.64,10.33L2.62,10.27L2.84,10L2.96,9.92H6.8L6.83,10L6.65,10.26L6.54,10.32L2.64,10.33M1.03,11.31L1,11.26L1.22,10.97L1.34,10.91H6.24L6.29,11L6.21,11.24L6.11,11.31H1.03M3.63,12.3L3.59,12.24L3.75,11.96L3.85,11.9H6L6.07,11.97L6.05,12.22L5.97,12.3H3.63M14.78,10.14L13,10.61C12.81,10.65 12.8,10.66 12.66,10.5C12.5,10.32 12.39,10.21 12.16,10.1C11.5,9.76 10.83,9.86 10.22,10.25C9.5,10.73 9.11,11.42 9.12,12.3C9.13,13.16 9.72,13.87 10.57,14C11.3,14.09 11.91,13.83 12.4,13.28L12.69,12.89H10.62C10.4,12.89 10.35,12.75 10.42,12.57L10.97,11.39C11,11.33 11.08,11.22 11.24,11.22H14.68C14.83,10.72 15.09,10.26 15.43,9.81C16.21,8.78 17.16,8.24 18.43,8C19.5,7.82 20.56,7.93 21.5,8.57C22.34,9.15 22.87,9.93 23,10.96C23.19,12.41 22.76,13.59 21.76,14.61C21.05,15.33 20.18,15.78 19.19,16L18.33,16.08C17.35,16.06 16.46,15.78 15.71,15.13C15.19,14.68 14.83,14.14 14.65,13.5C14.5,13.74 14.38,13.97 14.21,14.2C13.44,15.22 12.43,15.85 11.15,16C10.1,16.16 9.12,15.95 8.26,15.31C7.47,14.71 7,13.91 6.9,12.92C6.76,11.75 7.1,10.7 7.81,9.78C8.57,8.78 9.58,8.15 10.82,7.92C11.82,7.74 12.79,7.86 13.66,8.44C14.23,8.82 14.63,9.34 14.9,9.96C14.94,10.05 14.9,10.11 14.78,10.14M20.89,11.74L20.86,11.38C20.67,10.32 19.69,9.72 18.67,9.95C17.66,10.17 17,10.8 16.79,11.81C16.6,12.65 17,13.5 17.77,13.84C18.36,14.1 18.96,14.06 19.53,13.78C20.37,13.35 20.84,12.66 20.89,11.74Z",
                mdiLanguageJava: "M16.5,6.08C16.5,6.08 9.66,7.79 12.94,11.56C13.91,12.67 12.69,13.67 12.69,13.67C12.69,13.67 15.14,12.42 14,10.82C12.94,9.35 12.14,8.62 16.5,6.08M12.03,7.28C16.08,4.08 14,2 14,2C14.84,5.3 11.04,6.3 9.67,8.36C8.73,9.76 10.13,11.27 12,13C11.29,11.3 8.78,9.84 12.03,7.28M9.37,17.47C6.29,18.33 11.25,20.1 15.16,18.43C14.78,18.28 14.41,18.1 14.06,17.89C12.7,18.2 11.3,18.26 9.92,18.07C8.61,17.91 9.37,17.47 9.37,17.47M14.69,15.79C12.94,16.17 11.13,16.26 9.35,16.05C8.04,15.92 8.9,15.28 8.9,15.28C5.5,16.41 10.78,17.68 15.5,16.3C15.21,16.19 14.93,16 14.69,15.79M18.11,19.09C18.11,19.09 18.68,19.56 17.5,19.92C15.22,20.6 8.07,20.81 6.09,19.95C5.38,19.64 6.72,19.21 7.14,19.12C7.37,19.06 7.6,19.04 7.83,19.04C7.04,18.5 2.7,20.14 5.64,20.6C13.61,21.9 20.18,20 18.11,19.09M15.37,14.23C15.66,14.04 15.97,13.88 16.29,13.74C16.29,13.74 14.78,14 13.27,14.14C11.67,14.3 10.06,14.32 8.46,14.2C6.11,13.89 9.75,13 9.75,13C8.65,13 7.57,13.26 6.59,13.75C4.54,14.75 11.69,15.2 15.37,14.23M16.27,16.65C16.25,16.69 16.23,16.72 16.19,16.75C21.2,15.44 19.36,12.11 16.96,12.94C16.83,13 16.72,13.08 16.65,13.19C16.79,13.14 16.93,13.1 17.08,13.07C18.28,12.83 20,14.7 16.27,16.65M16.4,21.26C13.39,21.78 10.31,21.82 7.28,21.4C7.28,21.4 7.74,21.78 10.09,21.93C13.69,22.16 19.22,21.8 19.35,20.1C19.38,20.11 19.12,20.75 16.4,21.26Z",
                mdiLanguageJavascript: "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z",
                mdiLanguageTypescript: "M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z",
                mdiLanguagePhp: "M12,18.08C5.37,18.08 0,15.36 0,12C0,8.64 5.37,5.92 12,5.92C18.63,5.92 24,8.64 24,12C24,15.36 18.63,18.08 12,18.08M6.81,10.13C7.35,10.13 7.72,10.23 7.9,10.44C8.08,10.64 8.12,11 8.03,11.47C7.93,12 7.74,12.34 7.45,12.56C7.17,12.78 6.74,12.89 6.16,12.89H5.29L5.82,10.13H6.81M3.31,15.68H4.75L5.09,13.93H6.32C6.86,13.93 7.3,13.87 7.65,13.76C8,13.64 8.32,13.45 8.61,13.18C8.85,12.96 9.04,12.72 9.19,12.45C9.34,12.19 9.45,11.89 9.5,11.57C9.66,10.79 9.55,10.18 9.17,9.75C8.78,9.31 8.18,9.1 7.35,9.1H4.59L3.31,15.68M10.56,7.35L9.28,13.93H10.7L11.44,10.16H12.58C12.94,10.16 13.18,10.22 13.29,10.34C13.4,10.46 13.42,10.68 13.36,11L12.79,13.93H14.24L14.83,10.86C14.96,10.24 14.86,9.79 14.56,9.5C14.26,9.23 13.71,9.1 12.91,9.1H11.64L12,7.35H10.56M18,10.13C18.55,10.13 18.91,10.23 19.09,10.44C19.27,10.64 19.31,11 19.22,11.47C19.12,12 18.93,12.34 18.65,12.56C18.36,12.78 17.93,12.89 17.35,12.89H16.5L17,10.13H18M14.5,15.68H15.94L16.28,13.93H17.5C18.05,13.93 18.5,13.87 18.85,13.76C19.2,13.64 19.5,13.45 19.8,13.18C20.04,12.96 20.24,12.72 20.38,12.45C20.53,12.19 20.64,11.89 20.7,11.57C20.85,10.79 20.74,10.18 20.36,9.75C20,9.31 19.37,9.1 18.54,9.1H15.79L14.5,15.68Z",
                mdiLanguagePython: "M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.29C14.46,19.29 14.14,19.59 14.14,20.18C14.14,20.77 14.46,20.89 14.86,20.89A0.71,0.71 0 0,0 15.57,20.18C15.57,19.59 15.25,19.29 14.86,19.29M4.86,17.5C3.28,17.5 2,16.22 2,14.64V10.86C2,9.28 3.28,8 4.86,8H12C12,7.61 11.68,7.04 11.29,7.04H7V5.36C7,3.78 8.28,2.5 9.86,2.5H14.14C15.72,2.5 17,3.78 17,5.36V9.11C17,10.69 15.72,11.96 14.14,11.96H8.89C7.31,11.96 6.04,13.24 6.04,14.82V17.5H4.86M9.14,5.71C9.54,5.71 9.86,5.41 9.86,4.82C9.86,4.23 9.54,4.11 9.14,4.11C8.75,4.11 8.43,4.23 8.43,4.82C8.43,5.41 8.75,5.71 9.14,5.71Z",
                mdiLanguageHtml5: "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z",
                mdiLanguageCss3: "M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z",
                mdiLanguageLua: "M10.5,5A8.5,8.5 0 0,0 2,13.5A8.5,8.5 0 0,0 10.5,22A8.5,8.5 0 0,0 19,13.5A8.5,8.5 0 0,0 10.5,5M13.5,13A2.5,2.5 0 0,1 11,10.5A2.5,2.5 0 0,1 13.5,8A2.5,2.5 0 0,1 16,10.5A2.5,2.5 0 0,1 13.5,13M19.5,2A2.5,2.5 0 0,0 17,4.5A2.5,2.5 0 0,0 19.5,7A2.5,2.5 0 0,0 22,4.5A2.5,2.5 0 0,0 19.5,2",
                mdiLanguageRust: "M21.9 11.7L21 11.2V11L21.7 10.3C21.8 10.2 21.8 10 21.7 9.9L21.6 9.8L20.7 9.5C20.7 9.4 20.7 9.3 20.6 9.3L21.2 8.5C21.3 8.4 21.3 8.2 21.1 8.1C21.1 8.1 21 8.1 21 8L20 7.8C20 7.7 19.9 7.7 19.9 7.6L20.3 6.7V6.4C20.2 6.3 20.1 6.3 20 6.3H19C19 6.3 19 6.2 18.9 6.2L19.1 5.2C19.1 5 19 4.9 18.9 4.9H18.8L17.8 5.1C17.8 5 17.7 5 17.6 4.9V3.9C17.6 3.7 17.5 3.6 17.3 3.6H17.2L16.3 4H16.2L16 3C16 2.8 15.8 2.7 15.7 2.8H15.6L14.8 3.4C14.7 3.4 14.6 3.4 14.6 3.3L14.3 2.4C14.2 2.3 14.1 2.2 13.9 2.2C13.9 2.2 13.8 2.2 13.8 2.3L13 3H12.8L12.3 2.2C12.2 2 12 2 11.8 2L11.7 2.1L11.2 3H11L10.3 2.3C10.2 2.2 10 2.2 9.9 2.3L9.8 2.4L9.5 3.3C9.4 3.3 9.3 3.3 9.3 3.4L8.5 2.8C8.3 2.7 8.1 2.7 8 2.9V3L7.8 4C7.8 4 7.7 4 7.6 4.1L6.7 3.7C6.6 3.6 6.4 3.7 6.3 3.8V4.9C6.3 5 6.2 5 6.2 5.1L5.2 4.9C5 4.8 4.9 4.9 4.9 5.1V5.2L5.1 6.2C5 6.2 5 6.3 4.9 6.3H3.9C3.7 6.3 3.6 6.4 3.6 6.6V6.7L4 7.6V7.8L3 8C2.8 8 2.7 8.2 2.7 8.3V8.4L3.3 9.2C3.3 9.3 3.3 9.4 3.2 9.4L2.4 9.8C2.3 9.9 2.2 10 2.2 10.2C2.2 10.2 2.2 10.3 2.3 10.3L3 11V11.2L2.2 11.7C2 11.8 2 12 2 12.1L2.1 12.2L3 12.8V13L2.3 13.7C2.2 13.8 2.2 14 2.3 14.1L2.4 14.2L3.3 14.5C3.3 14.6 3.3 14.7 3.4 14.7L2.8 15.5C2.7 15.6 2.7 15.8 2.9 15.9C2.9 15.9 3 15.9 3 16L4 16.2C4 16.3 4.1 16.3 4.1 16.4L3.7 17.3C3.6 17.4 3.7 17.6 3.8 17.7H4.9C5 17.7 5 17.8 5.1 17.8L4.9 18.8C4.9 19 5 19.1 5.1 19.1H5.2L6.2 18.9C6.2 19 6.3 19 6.4 19.1V20.1C6.4 20.3 6.5 20.4 6.7 20.4H6.8L7.7 20H7.8L8 21C8 21.2 8.2 21.3 8.3 21.2H8.4L9.2 20.6C9.3 20.6 9.4 20.6 9.4 20.7L9.7 21.6C9.8 21.7 9.9 21.8 10.1 21.8C10.1 21.8 10.2 21.8 10.2 21.7L11 21H11.2L11.7 21.8C11.8 21.9 12 22 12.1 21.9L12.2 21.8L12.7 21H12.9L13.6 21.7C13.7 21.8 13.9 21.8 14 21.7L14.1 21.6L14.4 20.7C14.5 20.7 14.6 20.7 14.6 20.6L15.4 21.2C15.5 21.3 15.7 21.3 15.8 21.1C15.8 21.1 15.8 21 15.9 21L16.1 20C16.2 20 16.2 19.9 16.3 19.9L17.2 20.3C17.3 20.4 17.5 20.3 17.6 20.2V19.1L17.8 18.9L18.8 19.1C19 19.1 19.1 19 19.1 18.9V18.8L18.9 17.8L19.1 17.6H20.1C20.3 17.6 20.4 17.5 20.4 17.3V17.2L20 16.3C20 16.2 20.1 16.2 20.1 16.1L21.1 15.9C21.3 15.9 21.4 15.7 21.3 15.6V15.5L20.7 14.7L20.8 14.5L21.7 14.2C21.8 14.1 21.9 14 21.9 13.8C21.9 13.8 21.9 13.7 21.8 13.7L21 13V12.8L21.8 12.3C22 12.2 22 12 21.9 11.7C21.9 11.8 21.9 11.8 21.9 11.7M16.2 18.7C15.9 18.6 15.7 18.3 15.7 18C15.8 17.7 16.1 17.5 16.4 17.5C16.7 17.6 16.9 17.9 16.9 18.2C16.9 18.6 16.6 18.8 16.2 18.7M16 16.8C15.7 16.7 15.4 16.9 15.4 17.2L15 18.6C14.1 19 13.1 19.2 12 19.2C10.9 19.2 9.9 19 8.9 18.5L8.6 17.1C8.5 16.8 8.3 16.6 8 16.7L6.8 17C6.6 16.8 6.4 16.5 6.2 16.3H12.2C12.3 16.3 12.3 16.3 12.3 16.2V14.1C12.3 14 12.3 14 12.2 14H10.5V12.7H12.4C12.6 12.7 13.3 12.7 13.6 13.7C13.7 14 13.8 15 14 15.3C14.1 15.6 14.6 16.3 15.1 16.3H18.2C18 16.6 17.8 16.8 17.5 17.1L16 16.8M7.7 18.7C7.4 18.8 7.1 18.6 7 18.2C6.9 17.9 7.1 17.6 7.5 17.5S8.1 17.6 8.2 18C8.2 18.3 8 18.6 7.7 18.7M5.4 9.5C5.5 9.8 5.4 10.2 5.1 10.3C4.8 10.4 4.4 10.3 4.3 10C4.2 9.7 4.3 9.3 4.6 9.2C5 9.1 5.3 9.2 5.4 9.5M4.7 11.1L6 10.6C6.3 10.5 6.4 10.2 6.3 9.9L6 9.3H7V14H5C4.7 13 4.6 12.1 4.7 11.1M10.3 10.7V9.3H12.8C12.9 9.3 13.7 9.4 13.7 10C13.7 10.5 13.1 10.7 12.6 10.7H10.3M19.3 11.9V12.4H18.5C18.4 12.4 18.4 12.4 18.4 12.5V12.8C18.4 13.6 17.9 13.8 17.5 13.8C17.1 13.8 16.7 13.6 16.6 13.4C16.4 12.1 16 11.9 15.4 11.4C16.1 10.9 16.9 10.2 16.9 9.3C16.9 8.3 16.2 7.7 15.8 7.4C15.1 7 14.4 6.9 14.2 6.9H6.6C7.7 5.7 9.1 4.9 10.7 4.6L11.6 5.6C11.8 5.8 12.1 5.8 12.4 5.6L13.4 4.6C15.5 5 17.3 6.3 18.4 8.2L17.7 9.8C17.6 10.1 17.7 10.4 18 10.5L19.3 11.1V11.9M11.6 3.9C11.8 3.7 12.2 3.7 12.4 3.9C12.6 4.1 12.6 4.5 12.4 4.7C12.1 5 11.8 5 11.5 4.7C11.3 4.5 11.4 4.2 11.6 3.9M18.5 9.5C18.6 9.2 19 9.1 19.3 9.2C19.6 9.3 19.7 9.7 19.6 10C19.5 10.3 19.1 10.4 18.8 10.3C18.5 10.2 18.4 9.8 18.5 9.5Z",
                mdiLanguageKotlin: "M2 2H22L12 12L22 22H2Z",
                mdiDocker: "M21.81 10.25C21.75 10.21 21.25 9.82 20.17 9.82C19.89 9.82 19.61 9.85 19.33 9.9C19.12 8.5 17.95 7.79 17.9 7.76L17.61 7.59L17.43 7.86C17.19 8.22 17 8.63 16.92 9.05C16.72 9.85 16.84 10.61 17.25 11.26C16.76 11.54 15.96 11.61 15.79 11.61H2.62C2.28 11.61 2 11.89 2 12.24C2 13.39 2.18 14.54 2.58 15.62C3.03 16.81 3.71 17.69 4.58 18.23C5.56 18.83 7.17 19.17 9 19.17C9.79 19.17 10.61 19.1 11.42 18.95C12.54 18.75 13.62 18.36 14.61 17.79C15.43 17.32 16.16 16.72 16.78 16C17.83 14.83 18.45 13.5 18.9 12.35H19.09C20.23 12.35 20.94 11.89 21.33 11.5C21.59 11.26 21.78 10.97 21.92 10.63L22 10.39L21.81 10.25M3.85 11.24H5.61C5.69 11.24 5.77 11.17 5.77 11.08V9.5C5.77 9.42 5.7 9.34 5.61 9.34H3.85C3.76 9.34 3.69 9.41 3.69 9.5V11.08C3.7 11.17 3.76 11.24 3.85 11.24M6.28 11.24H8.04C8.12 11.24 8.2 11.17 8.2 11.08V9.5C8.2 9.42 8.13 9.34 8.04 9.34H6.28C6.19 9.34 6.12 9.41 6.12 9.5V11.08C6.13 11.17 6.19 11.24 6.28 11.24M8.75 11.24H10.5C10.6 11.24 10.67 11.17 10.67 11.08V9.5C10.67 9.42 10.61 9.34 10.5 9.34H8.75C8.67 9.34 8.6 9.41 8.6 9.5V11.08C8.6 11.17 8.66 11.24 8.75 11.24M11.19 11.24H12.96C13.04 11.24 13.11 11.17 13.11 11.08V9.5C13.11 9.42 13.05 9.34 12.96 9.34H11.19C11.11 9.34 11.04 9.41 11.04 9.5V11.08C11.04 11.17 11.11 11.24 11.19 11.24M6.28 9H8.04C8.12 9 8.2 8.91 8.2 8.82V7.25C8.2 7.16 8.13 7.09 8.04 7.09H6.28C6.19 7.09 6.12 7.15 6.12 7.25V8.82C6.13 8.91 6.19 9 6.28 9M8.75 9H10.5C10.6 9 10.67 8.91 10.67 8.82V7.25C10.67 7.16 10.61 7.09 10.5 7.09H8.75C8.67 7.09 8.6 7.15 8.6 7.25V8.82C8.6 8.91 8.66 9 8.75 9M11.19 9H12.96C13.04 9 13.11 8.91 13.11 8.82V7.25C13.11 7.16 13.04 7.09 12.96 7.09H11.19C11.11 7.09 11.04 7.15 11.04 7.25V8.82C11.04 8.91 11.11 9 11.19 9M11.19 6.72H12.96C13.04 6.72 13.11 6.65 13.11 6.56V5C13.11 4.9 13.04 4.83 12.96 4.83H11.19C11.11 4.83 11.04 4.89 11.04 5V6.56C11.04 6.64 11.11 6.72 11.19 6.72M13.65 11.24H15.41C15.5 11.24 15.57 11.17 15.57 11.08V9.5C15.57 9.42 15.5 9.34 15.41 9.34H13.65C13.57 9.34 13.5 9.41 13.5 9.5V11.08C13.5 11.17 13.57 11.24 13.65 11.24",
                mdiGit: "M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z",
                mdiPowershell: "M21.83,4C22.32,4 22.63,4.4 22.5,4.89L19.34,19.11C19.23,19.6 18.75,20 18.26,20H2.17C1.68,20 1.37,19.6 1.5,19.11L4.66,4.89C4.77,4.4 5.25,4 5.74,4H21.83M15.83,16H11.83C11.37,16 11,16.38 11,16.84C11,17.31 11.37,17.69 11.83,17.69H15.83C16.3,17.69 16.68,17.31 16.68,16.84C16.68,16.38 16.3,16 15.83,16M5.78,16.28C5.38,16.56 5.29,17.11 5.57,17.5C5.85,17.92 6.41,18 6.81,17.73C14.16,12.56 14.21,12.5 14.26,12.47C14.44,12.31 14.53,12.09 14.54,11.87C14.55,11.67 14.5,11.5 14.38,11.31L9.46,6.03C9.13,5.67 8.57,5.65 8.21,6C7.85,6.32 7.83,6.88 8.16,7.24L12.31,11.68L5.78,16.28Z",
                mdiCodeJson: "M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z",
                mdiScriptText: "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z",
                mdiZipBox: "M14,17H12V15H10V13H12V15H14M14,9H12V11H14V13H12V11H10V9H12V7H10V5H12V7H14M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",
                mdiMagnetOn: "M3,7V13A9,9 0 0,0 12,22A9,9 0 0,0 21,13V7H17V13A5,5 0 0,1 12,18A5,5 0 0,1 7,13V7M17,5H21V2H17M3,5H7V2H3M13,1.5L9,9H11V14.5L15,7H13V1.5Z",
                mdiWindowRestore: "M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z",
                mdiAndroid: "M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z",
                mdiFileWord: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,20H13.8L12,13.2L10.2,20H8.8L6.6,11H8.1L9.5,17.8L11.3,11H12.6L14.4,17.8L15.8,11H17.3L15.2,20M13,9V3.5L18.5,9H13Z",
                mdiFileExcel: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.8,20H14L12,16.6L10,20H8.2L11.1,15.5L8.2,11H10L12,14.4L14,11H15.8L12.9,15.5L15.8,20M13,9V3.5L18.5,9H13Z",
                mdiFilePowerpoint: "M12.6,12.3H10.6V15.5H12.7C13.3,15.5 13.6,15.3 13.9,15C14.2,14.7 14.3,14.4 14.3,13.9C14.3,13.4 14.2,13.1 13.9,12.8C13.6,12.5 13.2,12.3 12.6,12.3M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,16C14.6,16.5 14.1,16.7 12.8,16.7H10.6V20H9V11H12.8C14.1,11 14.7,11.3 15.2,11.8C15.8,12.4 16,13 16,13.9C16,14.8 15.8,15.5 15.2,16M13,9V3.5L18.5,9H13Z",
                mdiVuejs: "M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z",
                mdiSvg: "M5.13,10.71H8.87L6.22,8.06C5.21,8.06 4.39,7.24 4.39,6.22A1.83,1.83 0 0,1 6.22,4.39C7.24,4.39 8.06,5.21 8.06,6.22L10.71,8.87V5.13C10,4.41 10,3.25 10.71,2.54C11.42,1.82 12.58,1.82 13.29,2.54C14,3.25 14,4.41 13.29,5.13V8.87L15.95,6.22C15.95,5.21 16.76,4.39 17.78,4.39C18.79,4.39 19.61,5.21 19.61,6.22C19.61,7.24 18.79,8.06 17.78,8.06L15.13,10.71H18.87C19.59,10 20.75,10 21.46,10.71C22.18,11.42 22.18,12.58 21.46,13.29C20.75,14 19.59,14 18.87,13.29H15.13L17.78,15.95C18.79,15.95 19.61,16.76 19.61,17.78A1.83,1.83 0 0,1 17.78,19.61C16.76,19.61 15.95,18.79 15.95,17.78L13.29,15.13V18.87C14,19.59 14,20.75 13.29,21.46C12.58,22.18 11.42,22.18 10.71,21.46C10,20.75 10,19.59 10.71,18.87V15.13L8.06,17.78C8.06,18.79 7.24,19.61 6.22,19.61C5.21,19.61 4.39,18.79 4.39,17.78C4.39,16.76 5.21,15.95 6.22,15.95L8.87,13.29H5.13C4.41,14 3.25,14 2.54,13.29C1.82,12.58 1.82,11.42 2.54,10.71C3.25,10 4.41,10 5.13,10.71Z",
                mdiBook: "M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z",
                mdiDownload: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",
                mdiFolderDownload: "M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19.25,13H16V9H14V13H10.75L15,17.25",
                mdiImageSearch: "M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.21 19.31,8.9L22.39,12L21,13.39L17.88,10.32C17.19,10.75 16.37,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4A2.5,2.5 0 0,0 13,6.5A2.5,2.5 0 0,0 15.5,9A2.5,2.5 0 0,0 18,6.5A2.5,2.5 0 0,0 15.5,4M7.5,14.5L4,19H18L13.5,13L10,17.5L7.5,14.5M20,20A2,2 0 0,1 18,22H4A2,2 0 0,1 2,20V6A2,2 0 0,1 4,4H9.5C9.18,4.77 9,5.61 9,6.5A6.5,6.5 0 0,0 15.5,13C16.18,13 16.84,12.89 17.46,12.7L20,15.24V20Z",
                mdiVideo: "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z",
                mdiDiscPlayer: "M14.5,10.37C15.54,10.37 16.38,9.53 16.38,8.5C16.38,7.46 15.54,6.63 14.5,6.63C13.46,6.63 12.63,7.46 12.63,8.5A1.87,1.87 0 0,0 14.5,10.37M14.5,1A7.5,7.5 0 0,1 22,8.5C22,10.67 21.08,12.63 19.6,14H9.4C7.93,12.63 7,10.67 7,8.5C7,4.35 10.36,1 14.5,1M6,21V22H4V21H2V15H22V21H20V22H18V21H6M4,18V19H13V18H4M15,17V19H17V17H15M19,17A1,1 0 0,0 18,18A1,1 0 0,0 19,19A1,1 0 0,0 20,18A1,1 0 0,0 19,17Z",
                mdiFileSearch: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H13C12.59,21.75 12.2,21.44 11.86,21.1C9.22,18.67 9.05,14.56 11.5,11.92C13.69,9.5 17.33,9.13 20,11V8L14,2M13,9V3.5L18.5,9H13M20.31,18.9C21.64,16.79 21,14 18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 14.09,20.3C15.55,21.23 17.41,21.23 18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19A2.5,2.5 0 0,1 14,16.5A2.5,2.5 0 0,1 16.5,14A2.5,2.5 0 0,1 19,16.5A2.5,2.5 0 0,1 16.5,19Z",
                mdiLinkVariant: "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",
                mdiBookOpenVariant: "M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z",
                mdiMagnify: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
                mdiClose: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
                mdiCloseCircle: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
                mdiSortAlphabeticalAscending: "M19 17H22L18 21L14 17H17V3H19M11 13V15L7.67 19H11V21H5V19L8.33 15H5V13M9 3H7C5.9 3 5 3.9 5 5V11H7V9H9V11H11V5C11 3.9 10.11 3 9 3M9 7H7V5H9Z",
                mdiSortAlphabeticalDescending: "M19 7H22L18 3L14 7H17V21H19M11 13V15L7.67 19H11V21H5V19L8.33 15H5V13M9 3H7C5.9 3 5 3.9 5 5V11H7V9H9V11H11V5C11 3.9 10.11 3 9 3M9 7H7V5H9Z",
                mdiSortClockAscending: "M20 17H23L19 21L15 17H18V3H20V17M8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5M10.19 14.53L7 12.69V9H8.5V11.82L10.94 13.23L10.19 14.53Z",
                mdiSortClockDescending: "M18 7H15L19 3L23 7H20V21H18V7M8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5M10.19 14.53L7 12.69V9H8.5V11.82L10.94 13.23L10.19 14.53Z",
                mdiSortNumericAscending: "M19 17H22L18 21L14 17H17V3H19V17M9 13H7C5.9 13 5 13.9 5 15V16C5 17.11 5.9 18 7 18H9V19H5V21H9C10.11 21 11 20.11 11 19V15C11 13.9 10.11 13 9 13M9 16H7V15H9V16M9 3H7C5.9 3 5 3.9 5 5V9C5 10.11 5.9 11 7 11H9C10.11 11 11 10.11 11 9V5C11 3.9 10.11 3 9 3M9 9H7V5H9V9Z",
                mdiSortNumericDescending: "M19 7H22L18 3L14 7H17V21H19M9 21H5V19H9V18H7C5.9 18 5 17.11 5 16V15C5 13.9 5.9 13 7 13H9C10.11 13 11 13.9 11 15V19C11 20.11 10.11 21 9 21M9 15H7V16H9M7 3H9C10.11 3 11 3.9 11 5V9C11 10.11 10.11 11 9 11H7C5.9 11 5 10.11 5 9V5C5 3.9 5.9 3 7 3M7 9H9V5H7Z",
                mdiDeleteForever: "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z",
                mdiFileMove: "M14,17H18V14L23,18.5L18,23V20H14V17M13,9H18.5L13,3.5V9M6,2H14L20,8V12.34C19.37,12.12 18.7,12 18,12A6,6 0 0,0 12,18C12,19.54 12.58,20.94 13.53,22H6C4.89,22 4,21.1 4,20V4A2,2 0 0,1 6,2Z",
                mdiFileDocumentEdit: "M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z",
                mdiContentSave: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z",
                mdiFormatTextWrappingOverflow: "M7,21H5V3H7V21M14,3H12V9H14V3M14,15H12V21H14V15M19,12L16,9V11H9V13H16V15L19,12Z",
                mdiFormatTextWrappingWrap: "M7,21H5V3H7V21M19,3H17V21H19V3M13,8H9V10H12.97C13.14,10 14,10.16 14,12C14,13.84 13.14,14 13,14H11V12L8,15L11,18V16H13C14.04,16 16,15.16 16,12C16,8.84 14.04,8 13,8Z",
                mdiUpload: "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z",
                mdiFolderPlus: "M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z",
                mdiMusic: "M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z",
                mdiPlay: "M8,5.14V19.14L19,12.14L8,5.14Z",
                mdiPause: "M14,19H18V5H14M6,19H10V5H6V19Z",
                mdiSkipPrevious: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z",
                mdiSkipNext: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z",
                mdiRepeat: "M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z",
                mdiRepeatOff: "M2,5.27L3.28,4L20,20.72L18.73,22L15.73,19H7V22L3,18L7,14V17H13.73L7,10.27V11H5V8.27L2,5.27M17,13H19V17.18L17,15.18V13M17,5V2L21,6L17,10V7H8.82L6.82,5H17Z",
                mdiShuffle: "M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z",
                mdiShuffleDisabled: "M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16",
                mdiLogin: "M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7M20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z",
                mdiLogout: "M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
            },
            sets: {
                mdi: {
                    component: sp
                }
            }
        },
        theme: {
            variations: {
                colors: ["primary", "secondary"],
                lighten: 2,
                darken: 2
            },
            themes: {
                light: {
                    colors: {
                        primary: "#0288d1",
                        secondary: "#00b0ff",
                        ...(null == (e = window.__CUSTOM_THEME__) ? void 0 : e.light) || {}
                    }
                },
                dark: {
                    dark: !0,
                    colors: {
                        background: "#0f0f0f",
                        primary: "#0288d1",
                        secondary: "#00b0ff",
                        ...(null == (t = window.__CUSTOM_THEME__) ? void 0 : t.dark) || {}
                    }
                }
            }
        }
    }),
    ck = {
        en: {
            dialogButtonConfirmText: "OK",
            dialogButtonDismissText: "Cancel",
            headerName: "Name",
            headerSize: "Size",
            headerLastModified: "Last Modified",
            headerActions: "Actions",
            headerSearch: "Search",
            headerSizeSubdirectoryItems: "{0} item | {0} items",
            actionViewImage: "View image",
            actionPlayVideo: "Play video",
            actionPlayAudio: "Play audio",
            actionViewFile: "View file",
            actionEditFile: "Edit file",
            actionMove: "Move to new path",
            actionDeleteFolder: "Delete folder",
            actionDeleteFile: "Delete file",
            actionDownloadArchive: "Download folder as a .zip file",
            actionDownloadFile: "Download file",
            actionLogout: "Logout",
            titleUploadFile: "Upload files",
            titleCreateFolder: "Create folder",
            titleCreateFile: "Create file",
            titleDownloadArchive: "Download root folder as a .zip file",
            titleLogin: "Login",
            titleLogout: "Logout ({0})",
            toastFailedLoadAudio: "Failed to load audio.",
            toastSaveEdit: "{0} has been saved.",
            toastMoveFolder: "Folder moved.",
            toastMoveFile: "File moved.",
            toastUploadDisabled: "File uploading is disabled.",
            toastCreateFolder: "New folder created.",
            toastCreateFile: "New file created.",
            toastFailedLoadAudioMetadata: "Failed to read audio metadata: {0}",
            dialogDeleteConfirm: "Are you sure to delete {0}?",
            dialogMoveLabel: "Path",
            dialogUploadBody: "Are you sure to upload this file? | Are you sure to upload these {0} files?",
            dialogCreateFolderLabel: "Folder name",
            dialogCreateFileLabel: "File name",
            dialogUploadPending: "Pending",
            dialogUploadSucceed: "Uploaded",
            dialogUploadError: "Failed to upload",
            dialogLogout: "Are you sure to logout {0}?"
        },
        "zh-CN": {
            dialogButtonConfirmText: "确定",
            dialogButtonDismissText: "取消",
            headerName: "名称",
            headerSize: "大小",
            headerLastModified: "修改日期",
            headerActions: "操作",
            headerSearch: "搜索",
            headerSizeSubdirectoryItems: "{0} 个项目",
            actionViewImage: "查看图像",
            actionPlayVideo: "播放视频",
            actionPlayAudio: "播放音频",
            actionViewFile: "查看文件",
            actionEditFile: "编辑文件",
            actionMove: "移动到路径",
            actionDeleteFolder: "删除文件夹",
            actionDeleteFile: "删除文件",
            actionDownloadArchive: "下载为 ZIP 压缩包",
            actionDownloadFile: "下载文件",
            actionLogout: "注销",
            titleUploadFile: "上传文件",
            titleCreateFolder: "新建文件夹",
            titleCreateFile: "新建文件",
            titleDownloadArchive: "下载当前目录为 ZIP 压缩包",
            titleLogin: "登录",
            titleLogout: "注销（{0}）",
            toastFailedLoadAudio: "无法加载音频",
            toastSaveEdit: "已保存 {0}",
            toastMoveFolder: "已移动文件夹",
            toastMoveFile: "已移动文件",
            toastUploadDisabled: "文件上传已禁用",
            toastCreateFolder: "已新建文件夹",
            toastCreateFile: "已新建文件",
            toastFailedLoadAudioMetadata: "加载音频元数据失败：{0}",
            dialogDeleteConfirm: "确定要删除 {0} 吗？",
            dialogMoveLabel: "路径",
            dialogUploadBody: "确定要上传这个文件吗？ | 确定要上传以下 {0} 个文件吗？",
            dialogCreateFolderLabel: "文件夹名称",
            dialogCreateFileLabel: "文件名",
            dialogUploadPending: "等待上传",
            dialogUploadSucceed: "上传成功",
            dialogUploadError: "上传失败",
            dialogLogout: " {0} 是否要注销？"
        }
    };
ck["zh-HK"] = {
    ...ck["zh-CN"],
    dialogButtonConfirmText: "確定",
    headerName: "名稱",
    headerSizeSubdirectoryItems: "{0} 個項目",
    actionViewImage: "查看圖像",
    actionPlayVideo: "播放影片",
    actionPlayAudio: "播放音頻",
    actionEditFile: "編輯文件",
    actionMove: "移動到路徑",
    actionDeleteFolder: "刪除文件夾",
    actionDeleteFile: "刪除文件",
    actionDownloadArchive: "下載為 ZIP 壓縮包",
    actionDownloadFile: "下載文件",
    actionLogout: "登出",
    titleUploadFile: "上傳文件",
    titleCreateFolder: "新建文件夾",
    titleDownloadArchive: "下載當前目錄為 ZIP 壓縮包",
    titleLogin: "登入",
    titleLogout: "登出（{0}）",
    toastFailedLoadAudio: "無法加載音頻",
    toastMoveFolder: "已移動文件夾",
    toastMoveFile: "已移動文件",
    toastUploadDisabled: "文件上傳已禁用",
    toastCreateFolder: "已新建文件夾",
    toastFailedLoadAudioMetadata: "加載音頻元數據失敗：{0}",
    dialogDeleteConfirm: "確定要刪除 {0} 嗎？",
    dialogMoveLabel: "路徑",
    dialogUploadBody: "確定要上傳這個文件嗎？ | 確定要上傳以下 {0} 個文件嗎？",
    dialogCreateFolderLabel: "文件夾名稱",
    dialogUploadPending: "等待上傳",
    dialogUploadSucceed: "等待成功",
    dialogUploadError: "上傳失敗",
    dialogLogout: "{0} 是否要登出？"
}, ck["zh-TW"] = {
    ...ck["zh-HK"],
    toastFailedLoadAudio: "無法載入音訊",
    toastFailedLoadAudioMetadata: "載入音訊元數據失敗：{0}"
};
const dk = function (e = {}) {
    const t = !Dp(e.globalInjection) || e.globalInjection,
        n = new Map,
        [r, a] = function (e) {
            const t = ne(),
                n = t.run((() => mv(e)));
            if (null == n) throw cv(32);
            return [t, n]
        }(e),
        o = _p(""),
        l = {
            get mode() {
                return "composition"
            },
            async install(e, ...n) {
                if (e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, l), Up(n[0])) {
                    const e = n[0];
                    l.__composerExtend = e.__composerExtend, l.__vueI18nExtend = e.__vueI18nExtend
                }
                let r = null;
                t && (r = function (e, t) {
                    const n = Object.create(null);
                    bv.forEach((e => {
                        const r = Object.getOwnPropertyDescriptor(t, e);
                        if (!r) throw cv(32);
                        const a = bt(r.value) ? {
                            get() {
                                return r.value.value
                            },
                            set(e) {
                                r.value.value = e
                            }
                        } : {
                            get() {
                                return r.get && r.get()
                            }
                        };
                        Object.defineProperty(n, e, a)
                    })), e.config.globalProperties.$i18n = n, kv.forEach((n => {
                        const r = Object.getOwnPropertyDescriptor(t, n);
                        if (!r || !r.value) throw cv(32);
                        Object.defineProperty(e.config.globalProperties, `$${n}`, r)
                    }));
                    return () => {
                        delete e.config.globalProperties.$i18n, kv.forEach((t => {
                            delete e.config.globalProperties[`$${t}`]
                        }))
                    }
                }(e, l.global));
                const a = e.unmount;
                e.unmount = () => {
                    r && r(), l.dispose(), a()
                }
            },
            get global() {
                return a
            },
            dispose() {
                r.stop()
            },
            __instances: n,
            __getInstance: e => n.get(e) || null,
            __setInstance(e, t) {
                n.set(e, t)
            },
            __deleteInstance(e) {
                n.delete(e)
            }
        };
    return l
}({
    legacy: !1,
    locale: navigator.language,
    fallbackLocale: "en",
    messages: ck
}),
    pk = ld({
        ...id(),
        ...bp({
            fullHeight: !0
        }),
        ...dp()
    }, "VApp"),
    fk = md()({
        name: "VApp",
        props: pk(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = pp(e),
                {
                    layoutClasses: a,
                    getLayoutItem: o,
                    items: l,
                    layoutRef: i
                } = function (e) {
                    const t = Vr(mp, null),
                        n = ao((() => t ? t.rootZIndex.value - 100 : 1e3)),
                        r = kt([]),
                        a = st(new Map),
                        o = st(new Map),
                        l = st(new Map),
                        i = st(new Map),
                        s = st(new Map),
                        {
                            resizeRef: u,
                            contentRect: c
                        } = hp(),
                        d = ao((() => {
                            const t = new Map,
                                n = e.overlaps ?? [];
                            for (const e of n.filter((e => e.includes(":")))) {
                                const [n, l] = e.split(":");
                                if (!r.value.includes(n) || !r.value.includes(l)) continue;
                                const i = a.get(n),
                                    s = a.get(l),
                                    u = o.get(n),
                                    c = o.get(l);
                                i && s && u && c && (t.set(l, {
                                    position: i.value,
                                    amount: parseInt(u.value, 10)
                                }), t.set(n, {
                                    position: s.value,
                                    amount: -parseInt(c.value, 10)
                                }))
                            }
                            return t
                        })),
                        p = ao((() => {
                            const e = [...new Set([...l.values()].map((e => e.value)))].sort(((e, t) => e - t)),
                                t = [];
                            for (const n of e) {
                                const e = r.value.filter((e => {
                                    var t;
                                    return (null == (t = l.get(e)) ? void 0 : t.value) === n
                                }));
                                t.push(...e)
                            }
                            return ((e, t, n, r) => {
                                let a = {
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0
                                };
                                const o = [{
                                    id: "",
                                    layer: {
                                        ...a
                                    }
                                }];
                                for (const l of e) {
                                    const e = t.get(l),
                                        i = n.get(l),
                                        s = r.get(l);
                                    if (!e || !i || !s) continue;
                                    const u = {
                                        ...a,
                                        [e.value]: parseInt(a[e.value], 10) + (s.value ? parseInt(i.value, 10) : 0)
                                    };
                                    o.push({
                                        id: l,
                                        layer: u
                                    }), a = u
                                }
                                return o
                            })(t, a, o, i)
                        })),
                        f = ao((() => !Array.from(s.values()).some((e => e.value)))),
                        v = ao((() => p.value[p.value.length - 1].layer)),
                        g = ao((() => ({
                            "--v-layout-left": Ou(v.value.left),
                            "--v-layout-right": Ou(v.value.right),
                            "--v-layout-top": Ou(v.value.top),
                            "--v-layout-bottom": Ou(v.value.bottom),
                            ...f.value ? void 0 : {
                                transition: "none"
                            }
                        }))),
                        h = ao((() => p.value.slice(1).map(((e, t) => {
                            let {
                                id: n
                            } = e;
                            const {
                                layer: r
                            } = p.value[t], l = o.get(n), i = a.get(n);
                            return {
                                id: n,
                                ...r,
                                size: Number(l.value),
                                position: i.value
                            }
                        })))),
                        m = e => h.value.find((t => t.id === e)),
                        y = sd("createLayout"),
                        b = wt(!1);
                    return Yn((() => {
                        b.value = !0
                    })), Pr(mp, {
                        register(e, t) {
                            let {
                                id: u,
                                order: c,
                                position: v,
                                layoutSize: g,
                                elementSize: m,
                                active: k,
                                disableTransitions: w,
                                absolute: x
                            } = t;
                            l.set(u, c), a.set(u, v), o.set(u, g), i.set(u, k), w && s.set(u, w);
                            const C = ac(yp, null == y ? void 0 : y.vnode).indexOf(e);
                            C > -1 ? r.value.splice(C, 0, u) : r.value.push(u);
                            const S = ao((() => h.value.findIndex((e => e.id === u)))),
                                _ = ao((() => n.value + 2 * p.value.length - 2 * S.value));
                            return {
                                layoutItemStyles: ao((() => {
                                    const e = "left" === v.value || "right" === v.value,
                                        t = "right" === v.value,
                                        r = "bottom" === v.value,
                                        a = m.value ?? g.value,
                                        o = 0 === a ? "%" : "px",
                                        l = {
                                            [v.value]: 0,
                                            zIndex: _.value,
                                            transform: `translate${e ? "X" : "Y"}(${(k.value ? 0 : -(0 === a ? 100 : a)) * (t || r ? -1 : 1)}${o})`,
                                            position: x.value || 1e3 !== n.value ? "absolute" : "fixed",
                                            ...f.value ? void 0 : {
                                                transition: "none"
                                            }
                                        };
                                    if (!b.value) return l;
                                    const i = h.value[S.value];
                                    if (!i) throw new Error(`[Vuetify] Could not find layout item "${u}"`);
                                    const s = d.value.get(u);
                                    return s && (i[s.position] += s.amount), {
                                        ...l,
                                        height: e ? `calc(100% - ${i.top}px - ${i.bottom}px)` : m.value ? `${m.value}px` : void 0,
                                        left: t ? void 0 : `${i.left}px`,
                                        right: t ? `${i.right}px` : void 0,
                                        top: "bottom" !== v.value ? `${i.top}px` : void 0,
                                        bottom: "top" !== v.value ? `${i.bottom}px` : void 0,
                                        width: e ? m.value ? `${m.value}px` : void 0 : `calc(100% - ${i.left}px - ${i.right}px)`
                                    }
                                })),
                                layoutItemScrimStyles: ao((() => ({
                                    zIndex: _.value - 1
                                }))),
                                zIndex: _
                            }
                        },
                        unregister(e) {
                            l.delete(e), a.delete(e), o.delete(e), i.delete(e), s.delete(e), r.value = r.value.filter((t => t !== e))
                        },
                        mainRect: v,
                        mainStyles: g,
                        getLayoutItem: m,
                        items: h,
                        layoutRect: c,
                        rootZIndex: n
                    }), {
                        layoutClasses: ao((() => ["v-layout", {
                            "v-layout--full-height": e.fullHeight
                        }])),
                        layoutStyles: ao((() => ({
                            zIndex: t ? n.value : void 0,
                            position: t ? "relative" : void 0,
                            overflow: t ? "hidden" : void 0
                        }))),
                        getLayoutItem: m,
                        items: h,
                        layoutRect: c,
                        layoutRef: u
                    }
                }(e),
                {
                    rtlClasses: s
                } = Rd();
            return Sd((() => {
                var t;
                return Ma("div", {
                    ref: i,
                    class: ["v-application", r.themeClasses.value, a.value, s.value, e.class],
                    style: [e.style]
                }, [Ma("div", {
                    class: "v-application__wrap"
                }, [null == (t = n.default) ? void 0 : t.call(n)])])
            })), {
                getLayoutItem: o,
                items: l,
                theme: r
            }
        }
    }),
    vk = ld({
        text: String,
        ...id(),
        ...Pg()
    }, "VToolbarTitle"),
    gk = md()({
        name: "VToolbarTitle",
        props: vk(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => {
                const t = !!(n.default || n.text || e.text);
                return Ma(e.tag, {
                    class: ["v-toolbar-title", e.class],
                    style: e.style
                }, {
                    default() {
                        var r;
                        return [t && Ma("div", {
                            class: "v-toolbar-title__placeholder"
                        }, [n.text ? n.text() : e.text, null == (r = n.default) ? void 0 : r.call(n)])]
                    }
                })
            })), {}
        }
    }),
    hk = [null, "prominent", "default", "comfortable", "compact"],
    mk = ld({
        absolute: Boolean,
        collapse: Boolean,
        color: String,
        density: {
            type: String,
            default: "default",
            validator: e => hk.includes(e)
        },
        extended: Boolean,
        extensionHeight: {
            type: [Number, String],
            default: 48
        },
        flat: Boolean,
        floating: Boolean,
        height: {
            type: [Number, String],
            default: 64
        },
        image: String,
        title: String,
        ...Zg(),
        ...id(),
        ...yh(),
        ...Bg(),
        ...Pg({
            tag: "header"
        }),
        ...dp()
    }, "VToolbar"),
    yk = md()({
        name: "VToolbar",
        props: mk(),
        setup(e, t) {
            var n;
            let {
                slots: r
            } = t;
            const {
                backgroundColorClasses: a,
                backgroundColorStyles: o
            } = Tg(Ft(e, "color")), {
                borderClasses: l
            } = qg(e), {
                elevationClasses: i
            } = bh(e), {
                roundedClasses: s
            } = Dg(e), {
                themeClasses: u
            } = pp(e), {
                rtlClasses: c
            } = Rd(), d = wt(!(!e.extended && !(null == (n = r.extension) ? void 0 : n.call(r)))), p = ao((() => parseInt(Number(e.height) + ("prominent" === e.density ? Number(e.height) : 0) - ("comfortable" === e.density ? 8 : 0) - ("compact" === e.density ? 16 : 0), 10))), f = ao((() => d.value ? parseInt(Number(e.extensionHeight) + ("prominent" === e.density ? Number(e.extensionHeight) : 0) - ("comfortable" === e.density ? 4 : 0) - ("compact" === e.density ? 8 : 0), 10) : 0));
            return gd({
                VBtn: {
                    variant: "text"
                }
            }), Sd((() => {
                var t;
                const n = !(!e.title && !r.title),
                    v = !(!r.image && !e.image),
                    g = null == (t = r.extension) ? void 0 : t.call(r);
                return d.value = !(!e.extended && !g), Ma(e.tag, {
                    class: ["v-toolbar", {
                        "v-toolbar--absolute": e.absolute,
                        "v-toolbar--collapse": e.collapse,
                        "v-toolbar--flat": e.flat,
                        "v-toolbar--floating": e.floating,
                        [`v-toolbar--density-${e.density}`]: !0
                    }, a.value, l.value, i.value, s.value, u.value, c.value, e.class],
                    style: [o.value, e.style]
                }, {
                    default: () => [v && Ma("div", {
                        key: "image",
                        class: "v-toolbar__image"
                    }, [r.image ? Ma(_g, {
                        key: "image-defaults",
                        disabled: !e.image,
                        defaults: {
                            VImg: {
                                cover: !0,
                                src: e.image
                            }
                        }
                    }, r.image) : Ma(Gg, {
                        key: "image-img",
                        cover: !0,
                        src: e.image
                    }, null)]), Ma(_g, {
                        defaults: {
                            VTabs: {
                                height: Ou(p.value)
                            }
                        }
                    }, {
                        default() {
                            var t, a, o;
                            return [Ma("div", {
                                class: "v-toolbar__content",
                                style: {
                                    height: Ou(p.value)
                                }
                            }, [r.prepend && Ma("div", {
                                class: "v-toolbar__prepend"
                            }, [null == (t = r.prepend) ? void 0 : t.call(r)]), n && Ma(gk, {
                                key: "title",
                                text: e.title
                            }, {
                                text: r.title
                            }), null == (a = r.default) ? void 0 : a.call(r), r.append && Ma("div", {
                                class: "v-toolbar__append"
                            }, [null == (o = r.append) ? void 0 : o.call(r)])])]
                        }
                    }), Ma(_g, {
                        defaults: {
                            VTabs: {
                                height: Ou(f.value)
                            }
                        }
                    }, {
                        default: () => [Ma(Cm, null, {
                            default: () => [d.value && Ma("div", {
                                class: "v-toolbar__extension",
                                style: {
                                    height: Ou(f.value)
                                }
                            }, [g])]
                        })]
                    })]
                })
            })), {
                contentHeight: p,
                extensionHeight: f
            }
        }
    }),
    bk = ld({
        scrollTarget: {
            type: String
        },
        scrollThreshold: {
            type: [String, Number],
            default: 300
        }
    }, "scroll"),
    kk = ld({
        scrollBehavior: String,
        modelValue: {
            type: Boolean,
            default: !0
        },
        location: {
            type: String,
            default: "top",
            validator: e => ["top", "bottom"].includes(e)
        },
        ...mk(),
        ...kp(),
        ...bk(),
        height: {
            type: [Number, String],
            default: 64
        }
    }, "VAppBar"),
    wk = md()({
        name: "VAppBar",
        props: kk(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = kt(),
                a = _d(e, "modelValue"),
                o = ao((() => {
                    var t;
                    const n = new Set((null == (t = e.scrollBehavior) ? void 0 : t.split(" ")) ?? []);
                    return {
                        hide: n.has("hide"),
                        fullyHide: n.has("fully-hide"),
                        inverted: n.has("inverted"),
                        collapse: n.has("collapse"),
                        elevate: n.has("elevate"),
                        fadeImage: n.has("fade-image")
                    }
                })),
                l = ao((() => {
                    const e = o.value;
                    return e.hide || e.fullyHide || e.inverted || e.collapse || e.elevate || e.fadeImage || !a.value
                })),
                {
                    currentScroll: i,
                    scrollThreshold: s,
                    isScrollingUp: u,
                    scrollRatio: c
                } = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const {
                        canScroll: n
                    } = t;
                    let r = 0,
                        a = 0;
                    const o = kt(null),
                        l = wt(0),
                        i = wt(0),
                        s = wt(0),
                        u = wt(!1),
                        c = wt(!1),
                        d = ao((() => Number(e.scrollThreshold))),
                        p = ao((() => Xu((d.value - l.value) / d.value || 0))),
                        f = () => {
                            const e = o.value;
                            if (!e || n && !n.value) return;
                            r = l.value, l.value = "window" in e ? e.pageYOffset : e.scrollTop;
                            const t = e instanceof Window ? document.documentElement.scrollHeight : e.scrollHeight;
                            a === t ? (c.value = l.value < r, s.value = Math.abs(l.value - d.value)) : a = t
                        };
                    return aa(c, (() => {
                        i.value = i.value || l.value
                    })), aa(u, (() => {
                        i.value = 0
                    })), Yn((() => {
                        aa((() => e.scrollTarget), (e => {
                            var t;
                            const n = e ? document.querySelector(e) : window;
                            n && n !== o.value && (null == (t = o.value) || t.removeEventListener("scroll", f), o.value = n, o.value.addEventListener("scroll", f, {
                                passive: !0
                            }))
                        }), {
                            immediate: !0
                        })
                    })), Jn((() => {
                        var e;
                        null == (e = o.value) || e.removeEventListener("scroll", f)
                    })), n && aa(n, f, {
                        immediate: !0
                    }), {
                        scrollThreshold: d,
                        currentScroll: l,
                        currentThreshold: s,
                        isScrollActive: u,
                        scrollRatio: p,
                        isScrollingUp: c,
                        savedScroll: i
                    }
                }(e, {
                    canScroll: l
                }),
                d = ao((() => o.value.hide || o.value.fullyHide)),
                p = ao((() => e.collapse || o.value.collapse && (o.value.inverted ? c.value > 0 : 0 === c.value))),
                f = ao((() => e.flat || o.value.fullyHide && !a.value || o.value.elevate && (o.value.inverted ? i.value > 0 : 0 === i.value))),
                v = ao((() => o.value.fadeImage ? o.value.inverted ? 1 - c.value : c.value : void 0)),
                g = ao((() => {
                    var e, t;
                    if (o.value.hide && o.value.inverted) return 0;
                    const n = (null == (e = r.value) ? void 0 : e.contentHeight) ?? 0,
                        a = (null == (t = r.value) ? void 0 : t.extensionHeight) ?? 0;
                    return d.value ? i.value < s.value || o.value.fullyHide ? n + a : n : n + a
                }));
            Tu(ao((() => !!e.scrollBehavior)), (() => {
                ra((() => {
                    d.value ? o.value.inverted ? a.value = i.value > s.value : a.value = u.value || i.value < s.value : a.value = !0
                }))
            }));
            const {
                ssrBootStyles: h
            } = xy(), {
                layoutItemStyles: m
            } = function (e) {
                const t = Vr(mp);
                if (!t) throw new Error("[Vuetify] Could not find injected layout");
                const n = e.id ?? `layout-item-${pd()}`,
                    r = sd("useLayoutItem");
                Pr(yp, {
                    id: n
                });
                const a = wt(!1);
                Nn((() => a.value = !0)), Dn((() => a.value = !1));
                const {
                    layoutItemStyles: o,
                    layoutItemScrimStyles: l
                } = t.register(r, {
                    ...e,
                    active: ao((() => !a.value && e.active.value)),
                    id: n
                });
                return Jn((() => t.unregister(n))), {
                    layoutItemStyles: o,
                    layoutRect: t.layoutRect,
                    layoutItemScrimStyles: l
                }
            }({
                id: e.name,
                order: ao((() => parseInt(e.order, 10))),
                position: Ft(e, "location"),
                layoutSize: g,
                elementSize: wt(void 0),
                active: a,
                absolute: Ft(e, "absolute")
            });
            return Sd((() => {
                const t = yk.filterProps(e);
                return Ma(yk, Na({
                    ref: r,
                    class: ["v-app-bar", {
                        "v-app-bar--bottom": "bottom" === e.location
                    }, e.class],
                    style: [{
                        ...m.value,
                        "--v-toolbar-image-opacity": v.value,
                        height: void 0,
                        ...h.value
                    }, e.style]
                }, t, {
                    collapse: p.value,
                    flat: f.value
                }), n)
            })), {}
        }
    }),
    xk = md()({
        name: "VAppBarTitle",
        props: vk(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return Sd((() => Ma(gk, Na(e, {
                class: "v-app-bar-title"
            }), n))), {}
        }
    }),
    Ck = ld({
        fluid: {
            type: Boolean,
            default: !1
        },
        ...id(),
        ...Rg(),
        ...Pg()
    }, "VContainer"),
    Sk = md()({
        name: "VContainer",
        props: Ck(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                rtlClasses: r
            } = Rd(), {
                dimensionStyles: a
            } = Ig(e);
            return Sd((() => Ma(e.tag, {
                class: ["v-container", {
                    "v-container--fluid": e.fluid
                }, r.value, e.class],
                style: [a.value, e.style]
            }, n))), {}
        }
    }),
    _k = yd("v-spacer", "div", "VSpacer"),
    Ak = ld({
        scrollable: Boolean,
        ...id(),
        ...Rg(),
        ...Pg({
            tag: "main"
        })
    }, "VMain"),
    Lk = md()({
        name: "VMain",
        props: Ak(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const {
                dimensionStyles: r
            } = Ig(e), {
                mainStyles: a
            } = wp(), {
                ssrBootStyles: o
            } = xy();
            return Sd((() => Ma(e.tag, {
                class: ["v-main", {
                    "v-main--scrollable": e.scrollable
                }, e.class],
                style: [a.value, o.value, r.value, e.style]
            }, {
                default() {
                    var t, r;
                    return [e.scrollable ? Ma("div", {
                        class: "v-main__scroller"
                    }, [null == (t = n.default) ? void 0 : t.call(n)]) : null == (r = n.default) ? void 0 : r.call(n)]
                }
            }))), {}
        }
    }),
    Tk = {
        class: "text-caption text-grey text-center mt-8 mb-4"
    },
    Ek = {
        __name: "app",
        setup(e) {
            const t = window.__CUSTOM_PAGE_TITLE__ || location.host + ("/" === fg ? "" : fg),
                n = fp(),
                r = matchMedia("(prefers-color-scheme:dark)"),
                a = () => n.global.name.value = r.matches ? "dark" : "light";
            return a(), r.addEventListener("change", a), (e, n) => {
                const r = or("router-view");
                return Ca(), Ta(fk, null, {
                    default: rn((() => [Ma(wk, {
                        color: "primary"
                    }, {
                        append: rn((() => n[0] || (n[0] = [Va("div", {
                            id: "app-bar-append"
                        }, null, -1)]))),
                        default: rn((() => [Ma(xk, null, {
                            default: rn((() => [Ia(K(St(t)), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }), Ma(Lk, null, {
                        default: rn((() => [Ma(Sk, {
                            style: {
                                "max-width": "1080px"
                            }
                        }, {
                            default: rn((() => [Ma(r, null, {
                                default: rn((({
                                    Component: t
                                }) => {
                                    var n, r, a, o;
                                    return [(Ca(), Ta(Hn, null, [(null == (r = null == (n = e.$route) ? void 0 : n.meta) ? void 0 : r.keepAlive) ? (Ca(), Ta(ir(t), {
                                        key: e.$route.fullPath
                                    })) : Oa("", !0)], 1024)), (null == (o = null == (a = e.$route) ? void 0 : a.meta) ? void 0 : o.keepAlive) ? Oa("", !0) : (Ca(), Ta(ir(t), {
                                        key: 0
                                    }))]
                                })),
                                _: 1
                            })
                                // , Va("div", Tk, [n[1] || (n[1] = Ia("Powered by ")), n[2] || (n[2] = Va("a", {
                                //     href: "https://github.com/sigoden/dufs",
                                //     target: "_blank",
                                //     rel: "noopener noreferrer",
                                //     style: {
                                //         color: "unset"
                                //     }
                                // }, "dufs", -1)), Ia(" V" + K(St(vg)) + " ", 1), n[3] || (n[3] = Va("a", {
                                //     href: "https://github.com/wawmb/dufs.git",
                                //     target: "_blank",
                                //     rel: "noopener noreferrer",
                                //     style: {
                                //         color: "unset"
                                //     }
                                // }, "theme", -1))])
                            ])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                })
            }
        }
    },
    Fk = e => e.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replace(/&#x([\da-f]+);/gi, ((e, t) => String.fromCharCode(parseInt(t, 16)))).replace(/&#(\d+);/gi, ((e, t) => String.fromCharCode(parseInt(t, 10)))).replace(/\\\s+/g, "\\\\ "),
    $k = {};
["listitem", "paragraph", "tablecell", "text"].forEach((e => {
    $k[e] = function (t) {
        return t.text = t.text.replace(/\$\$([\s\S]+?)\$\$/g, ((e, t) => `<p style="text-align:center"><img class="math" src="https://i.upmath.me/svg/${encodeURIComponent(Fk(t))}" alt="${t}" referrerpolicy="no-referrer"></p>`)).replace(/\$([^\n]+?)\$/g, ((e, t) => `<img class="math" style="vertical-align:middle" src="https://i.upmath.me/svg/${encodeURIComponent(Fk(t))}" alt="${t}" referrerpolicy="no-referrer">`)), mi.prototype[e].apply(this, [t])
    }
})), $k.code = function (e) {
    return mi.prototype.code.apply(this, [e]).replace(/^<pre><code/, '<pre class="line-numbers"><code')
};
const Pk = ld({
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    noResize: Boolean,
    rows: {
        type: [Number, String],
        default: 5,
        validator: e => !isNaN(parseFloat(e))
    },
    maxRows: {
        type: [Number, String],
        validator: e => !isNaN(parseFloat(e))
    },
    suffix: String,
    modelModifiers: Object,
    ...sb(),
    ...wb()
}, "VTextarea"),
    Vk = md()({
        name: "VTextarea",
        directives: {
            Intersect: Ug
        },
        inheritAttrs: !1,
        props: Pk(),
        emits: {
            "click:control": e => !0,
            "mousedown:control": e => !0,
            "update:focused": e => !0,
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                attrs: n,
                emit: r,
                slots: a
            } = t;
            const o = _d(e, "modelValue"),
                {
                    isFocused: l,
                    focus: i,
                    blur: s
                } = ob(e),
                u = ao((() => "function" == typeof e.counterValue ? e.counterValue(o.value) : (o.value || "").toString().length)),
                c = ao((() => n.maxlength ? n.maxlength : !e.counter || "number" != typeof e.counter && "string" != typeof e.counter ? void 0 : e.counter));

            function d(t, n) {
                var r, a;
                e.autofocus && t && (null == (a = null == (r = n[0].target) ? void 0 : r.focus) || a.call(r))
            }
            const p = kt(),
                f = kt(),
                v = wt(""),
                g = kt(),
                h = ao((() => e.persistentPlaceholder || l.value || e.active));

            function m() {
                var e;
                g.value !== document.activeElement && (null == (e = g.value) || e.focus()), l.value || i()
            }

            function y(e) {
                m(), r("click:control", e)
            }

            function b(e) {
                r("mousedown:control", e)
            }

            function k(t) {
                t.stopPropagation(), m(), Zt((() => {
                    o.value = "", cc(e["onClick:clear"], t)
                }))
            }

            function w(t) {
                var n;
                const r = t.target;
                if (o.value = r.value, null == (n = e.modelModifiers) ? void 0 : n.trim) {
                    const e = [r.selectionStart, r.selectionEnd];
                    Zt((() => {
                        r.selectionStart = e[0], r.selectionEnd = e[1]
                    }))
                }
            }
            const x = kt(),
                C = kt(+e.rows),
                S = ao((() => ["plain", "underlined"].includes(e.variant)));

            function _() {
                e.autoGrow && Zt((() => {
                    if (!x.value || !f.value) return;
                    const t = getComputedStyle(x.value),
                        n = getComputedStyle(f.value.$el),
                        r = parseFloat(t.getPropertyValue("--v-field-padding-top")) + parseFloat(t.getPropertyValue("--v-input-padding-top")) + parseFloat(t.getPropertyValue("--v-field-padding-bottom")),
                        a = x.value.scrollHeight,
                        o = parseFloat(t.lineHeight),
                        l = Xu(a ?? 0, Math.max(parseFloat(e.rows) * o + r, parseFloat(n.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * o + r || 1 / 0);
                    C.value = Math.floor((l - r) / o), v.value = Ou(l)
                }))
            }
            let A;
            return ra((() => {
                e.autoGrow || (C.value = +e.rows)
            })), Yn(_), aa(o, _), aa((() => e.rows), _), aa((() => e.maxRows), _), aa((() => e.density), _), aa(x, (e => {
                e ? (A = new ResizeObserver(_), A.observe(x.value)) : null == A || A.disconnect()
            })), Jn((() => {
                null == A || A.disconnect()
            })), Sd((() => {
                const t = !!(a.counter || e.counter || e.counterValue),
                    r = !(!t && !a.details),
                    [i, _] = Yu(n),
                    {
                        modelValue: A,
                        ...L
                    } = ub.filterProps(e),
                    T = Cb(e);
                return Ma(ub, Na({
                    ref: p,
                    modelValue: o.value,
                    "onUpdate:modelValue": e => o.value = e,
                    class: ["v-textarea v-text-field", {
                        "v-textarea--prefixed": e.prefix,
                        "v-textarea--suffixed": e.suffix,
                        "v-text-field--prefixed": e.prefix,
                        "v-text-field--suffixed": e.suffix,
                        "v-textarea--auto-grow": e.autoGrow,
                        "v-textarea--no-resize": e.noResize || e.autoGrow,
                        "v-input--plain-underlined": S.value
                    }, e.class],
                    style: e.style
                }, i, L, {
                    centerAffix: 1 === C.value && !S.value,
                    focused: l.value
                }), {
                    ...a,
                    default(t) {
                        let {
                            id: n,
                            isDisabled: r,
                            isDirty: i,
                            isReadonly: u,
                            isValid: c
                        } = t;
                        return Ma(xb, Na({
                            ref: f,
                            style: {
                                "--v-textarea-control-height": v.value
                            },
                            onClick: y,
                            onMousedown: b,
                            "onClick:clear": k,
                            "onClick:prependInner": e["onClick:prependInner"],
                            "onClick:appendInner": e["onClick:appendInner"]
                        }, T, {
                            id: n.value,
                            active: h.value || i.value,
                            centerAffix: 1 === C.value && !S.value,
                            dirty: i.value || e.dirty,
                            disabled: r.value,
                            focused: l.value,
                            error: !1 === c.value
                        }), {
                            ...a,
                            default(t) {
                                let {
                                    props: {
                                        class: n,
                                        ...a
                                    }
                                } = t;
                                return Ma(ma, null, [e.prefix && Ma("span", {
                                    class: "v-text-field__prefix"
                                }, [e.prefix]), an(Ma("textarea", Na({
                                    ref: g,
                                    class: n,
                                    value: o.value,
                                    onInput: w,
                                    autofocus: e.autofocus,
                                    readonly: u.value,
                                    disabled: r.value,
                                    placeholder: e.placeholder,
                                    rows: e.rows,
                                    name: e.name,
                                    onFocus: m,
                                    onBlur: s
                                }, a, _), null), [
                                    [sr("intersect"), {
                                        handler: d
                                    }, null, {
                                        once: !0
                                    }]
                                ]), e.autoGrow && an(Ma("textarea", {
                                    class: [n, "v-textarea__sizer"],
                                    id: `${a.id}-sizer`,
                                    "onUpdate:modelValue": e => o.value = e,
                                    ref: x,
                                    readonly: !0,
                                    "aria-hidden": "true"
                                }, null), [
                                    [dl, o.value]
                                ]), e.suffix && Ma("span", {
                                    class: "v-text-field__suffix"
                                }, [e.suffix])])
                            }
                        })
                    },
                    details: r ? n => {
                        var r;
                        return Ma(ma, null, [null == (r = a.details) ? void 0 : r.call(a, n), t && Ma(ma, null, [Ma("span", null, null), Ma(mb, {
                            active: e.persistentCounter || l.value,
                            value: u.value,
                            max: c.value,
                            disabled: e.disabled
                        }, a.counter)])])
                    } : void 0
                })
            })), ry({}, p, f, g)
        }
    }),
    Mk = ["innerHTML"],
    Rk = {
        key: 1
    },
    Ik = {
        class: "d-flex flex-row align-end"
    },
    Ok = {
        __name: "dialog",
        setup(e, {
            expose: t
        }) {
            const n = kt(!1),
                r = kt(""),
                a = kt(0),
                o = kt(0),
                l = kt(!1),
                i = kt(!1),
                s = kt(""),
                u = kt(""),
                c = kt(!1),
                d = kt(""),
                p = kt(!1),
                f = kt(0),
                v = kt(""),
                g = kt(0),
                h = kt(""),
                m = kt(""),
                y = kt(""),
                b = kt(""),
                k = kt((() => { })),
                w = kt((() => { })),
                x = kt((() => { }));
            return t({
                active: n,
                value: r,
                width: a,
                maxHeight: o,
                persistent: l,
                rawHtml: i,
                title: s,
                content: u,
                prompt: c,
                label: d,
                password: p,
                rows: f,
                placeholder: v,
                maxLength: g,
                buttonConfirmText: h,
                buttonDismissText: m,
                buttonConfirmColor: y,
                buttonDismissColor: b,
                onConfirm: k,
                onDismiss: w,
                onClose: x
            }), (e, t) => (Ca(), Ta(fk, null, {
                default: rn((() => [Ma(oy, {
                    modelValue: n.value,
                    "onUpdate:modelValue": t[4] || (t[4] = e => n.value = e),
                    persistent: l.value,
                    scrollable: "",
                    width: "auto"
                }, {
                    default: rn((() => [Ma(pm, {
                        style: N({
                            width: `${a.value}px`,
                            maxHeight: `${o.value}px`
                        })
                    }, {
                        default: rn((() => [s.value ? (Ca(), Ta(lm, {
                            key: 0,
                            class: "headline pt-4"
                        }, {
                            default: rn((() => [Ia(K(s.value), 1)])),
                            _: 1
                        })) : Oa("", !0), Ma(cm, {
                            class: "px-4 pt-0"
                        }, {
                            default: rn((() => [i.value ? (Ca(), La("div", {
                                key: 0,
                                innerHTML: u.value
                            }, null, 8, Mk)) : (Ca(), La("div", Rk, K(u.value), 1)), c.value ? (Ca(), La(ma, {
                                key: 2
                            }, [f.value > 1 ? (Ca(), Ta(Vk, {
                                key: 0,
                                modelValue: r.value,
                                "onUpdate:modelValue": t[0] || (t[0] = e => r.value = e),
                                "hide-details": "",
                                color: "primary",
                                "no-resize": "",
                                label: d.value,
                                rows: f.value,
                                counter: g.value || !1,
                                placeholder: v.value
                            }, null, 8, ["modelValue", "label", "rows", "counter", "placeholder"])) : (Ca(), Ta(Ab, {
                                key: 1,
                                modelValue: r.value,
                                "onUpdate:modelValue": t[1] || (t[1] = e => r.value = e),
                                "hide-details": "",
                                color: "primary",
                                label: d.value,
                                type: p.value ? "password" : "text",
                                counter: g.value || !1,
                                placeholder: v.value
                            }, null, 8, ["modelValue", "label", "type", "counter", "placeholder"]))], 64)) : Oa("", !0)])),
                            _: 1
                        }), Ma(rm, null, {
                            default: rn((() => [Ma(_k), Va("div", Ik, [m.value ? (Ca(), Ta(nm, {
                                key: 0,
                                color: b.value,
                                text: "",
                                class: "d-block",
                                onClick: t[2] || (t[2] = e => {
                                    w.value(), n.value = !1
                                })
                            }, {
                                default: rn((() => [Ia(K(m.value), 1)])),
                                _: 1
                            }, 8, ["color"])) : Oa("", !0), h.value ? (Ca(), Ta(nm, {
                                key: 1,
                                color: y.value,
                                text: "",
                                class: "d-block",
                                onClick: t[3] || (t[3] = e => {
                                    k.value(r.value), n.value = !1
                                })
                            }, {
                                default: rn((() => [Ia(K(h.value), 1)])),
                                _: 1
                            }, 8, ["color"])) : Oa("", !0)])])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 8, ["modelValue", "persistent"])])),
                _: 1
            }))
        }
    },
    Hk = {
        install(e, t) {
            const n = document.createElement("div");
            n.style.position = "absolute";
            const r = vl(Ok).use(t.vuetify).use(dk).mount(n),
                a = {
                    value: "",
                    width: 540,
                    maxHeight: null,
                    persistent: !1,
                    rawHtml: !1,
                    title: "",
                    content: "",
                    prompt: !1,
                    label: "",
                    password: !1,
                    rows: 1,
                    placeholder: "",
                    maxLength: null,
                    buttonConfirmText: dk.global.t("dialogButtonConfirmText"),
                    buttonDismissText: dk.global.t("dialogButtonDismissText"),
                    buttonConfirmColor: "primary-darken-1",
                    buttonDismissColor: "primary-darken-1",
                    onClickConfirmButton() { },
                    onClickDismissButton() { },
                    onClose() { }
                },
                o = [],
                l = () => {
                    o.length && !r.active && (Object.assign(r, o.shift()), r.active = !0)
                };
            r.$watch("active", (e => {
                e || (r.onClose(), setTimeout(l, 150))
            }));
            const i = (e = {}) => {
                o.push({
                    ...a,
                    ...e
                }), l()
            };
            i.alert = (e, t, n, r = {}) => i({
                content: e,
                title: t,
                onConfirm: n,
                ...r
            }), i.confirm = (e, t, n, r, a = {}) => i({
                content: e,
                title: t,
                onConfirm: n,
                onDismiss: r,
                ...a
            }), i.prompt = (e, t, n, r, a = {}) => i({
                prompt: !0,
                label: e,
                title: t,
                onConfirm: n,
                onDismiss: r,
                ...a
            }), i.promises = {
                alert: (e, t, n = {}) => new Promise((r => i.alert(e, t, r, n))),
                confirm: (e, t, n = {}) => new Promise((r => i.confirm(e, t, (() => r(!0)), (() => r(!1)), n))),
                prompt: (e, t, n = {}) => new Promise((r => i.prompt(e, t, r, (() => r(null)), n)))
            }, e.config.globalProperties.$dialog = i
        }
    },
    Bk = ld({
        multiLine: Boolean,
        text: String,
        timer: [Boolean, String],
        timeout: {
            type: [Number, String],
            default: 5e3
        },
        vertical: Boolean,
        ...oh({
            location: "bottom"
        }),
        ...Ih(),
        ...Bg(),
        ...eh(),
        ...dp(),
        ...Wu(Qm({
            transition: "v-snackbar-transition"
        }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
    }, "VSnackbar"),
    Dk = md()({
        name: "VSnackbar",
        props: Bk(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = _d(e, "modelValue"),
                {
                    positionClasses: a
                } = Oh(e),
                {
                    scopeId: o
                } = Um(),
                {
                    themeClasses: l
                } = pp(e),
                {
                    colorClasses: i,
                    colorStyles: s,
                    variantClasses: u
                } = th(e),
                {
                    roundedClasses: c
                } = Dg(e),
                d = function (e) {
                    const t = wt(e());
                    let n = -1;

                    function r() {
                        clearInterval(n)
                    }
                    return re(r), {
                        clear: r,
                        time: t,
                        start(a) {
                            const o = a ? getComputedStyle(a) : {
                                transitionDuration: .2
                            },
                                l = 1e3 * parseFloat(o.transitionDuration) || 200;
                            if (r(), t.value <= 0) return;
                            const i = performance.now();
                            n = window.setInterval((() => {
                                const n = performance.now() - i + l;
                                t.value = Math.max(e() - n, 0), t.value <= 0 && r()
                            }), l)
                        },
                        reset() {
                            r(), Zt((() => t.value = e()))
                        }
                    }
                }((() => Number(e.timeout))),
                p = kt(),
                f = kt(),
                v = wt(!1),
                g = wt(0),
                h = kt(),
                m = Vr(mp, void 0);
            Tu((() => !!m), (() => {
                const e = wp();
                ra((() => {
                    h.value = e.mainStyles.value
                }))
            })), aa(r, b), aa((() => e.timeout), b), Yn((() => {
                r.value && b()
            }));
            let y = -1;

            function b() {
                d.reset(), window.clearTimeout(y);
                const t = Number(e.timeout);
                if (!r.value || -1 === t) return;
                const n = Bu(f.value);
                d.start(n), y = window.setTimeout((() => {
                    r.value = !1
                }), t)
            }

            function k() {
                v.value = !0, d.reset(), window.clearTimeout(y)
            }

            function w() {
                v.value = !1, b()
            }

            function x(e) {
                g.value = e.touches[0].clientY
            }

            function C(e) {
                Math.abs(g.value - e.changedTouches[0].clientY) > 50 && (r.value = !1)
            }

            function S() {
                v.value && w()
            }
            const _ = ao((() => e.location.split(" ").reduce(((e, t) => (e[`v-snackbar--${t}`] = !0, e)), {})));
            return Sd((() => {
                const t = ey.filterProps(e),
                    g = !!(n.default || n.text || e.text);
                return Ma(ey, Na({
                    ref: p,
                    class: ["v-snackbar", {
                        "v-snackbar--active": r.value,
                        "v-snackbar--multi-line": e.multiLine && !e.vertical,
                        "v-snackbar--timer": !!e.timer,
                        "v-snackbar--vertical": e.vertical
                    }, _.value, a.value, e.class],
                    style: [h.value, e.style]
                }, t, {
                    modelValue: r.value,
                    "onUpdate:modelValue": e => r.value = e,
                    contentProps: Na({
                        class: ["v-snackbar__wrapper", l.value, i.value, c.value, u.value],
                        style: [s.value],
                        onPointerenter: k,
                        onPointerleave: w
                    }, t.contentProps),
                    persistent: !0,
                    noClickAnimation: !0,
                    scrim: !1,
                    scrollStrategy: "none",
                    _disableGlobalStack: !0,
                    onTouchstartPassive: x,
                    onTouchend: C,
                    onAfterLeave: S
                }, o), {
                    default() {
                        var t, a;
                        return [Qg(!1, "v-snackbar"), e.timer && !v.value && Ma("div", {
                            key: "timer",
                            class: "v-snackbar__timer"
                        }, [Ma($h, {
                            ref: f,
                            color: "string" == typeof e.timer ? e.timer : "info",
                            max: e.timeout,
                            "model-value": d.time.value
                        }, null)]), g && Ma("div", {
                            key: "content",
                            class: "v-snackbar__content",
                            role: "status",
                            "aria-live": "polite"
                        }, [(null == (t = n.text) ? void 0 : t.call(n)) ?? e.text, null == (a = n.default) ? void 0 : a.call(n)]), n.actions && Ma(_g, {
                            defaults: {
                                VBtn: {
                                    variant: "text",
                                    ripple: !1,
                                    slim: !0
                                }
                            }
                        }, {
                            default: () => [Ma("div", {
                                class: "v-snackbar__actions"
                            }, [n.actions({
                                isActive: r
                            })])]
                        })]
                    },
                    activator: n.activator
                })
            })), ry({}, p)
        }
    }),
    Nk = {
        __name: "snackbar",
        setup(e, {
            expose: t
        }) {
            const n = kt(!1),
                r = kt(!1),
                a = kt(!1),
                o = kt(!1),
                l = kt(!1),
                i = kt(0),
                s = kt(""),
                u = kt(""),
                c = kt(""),
                d = kt(""),
                p = kt((() => { })),
                f = kt((() => { }));
            return t({
                active: n,
                bottom: r,
                top: a,
                left: o,
                right: l,
                timeout: i,
                color: s,
                buttonColor: u,
                content: c,
                buttonText: d,
                onClickButton: p,
                onClose: f
            }), (e, t) => (Ca(), Ta(fk, null, {
                default: rn((() => [Ma(Dk, {
                    modelValue: n.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => n.value = e),
                    color: s.value,
                    bottom: r.value,
                    top: a.value,
                    left: o.value,
                    right: l.value,
                    timeout: i.value
                }, {
                    actions: rn((() => [d.value ? (Ca(), Ta(nm, {
                        key: 0,
                        color: u.value,
                        text: "",
                        onClick: t[0] || (t[0] = e => {
                            n.value = !1, p.value()
                        })
                    }, {
                        default: rn((() => [Ia(K(d.value), 1)])),
                        _: 1
                    }, 8, ["color"])) : Oa("", !0)])),
                    default: rn((() => [Ia(K(c.value) + " ", 1)])),
                    _: 1
                }, 8, ["modelValue", "color", "bottom", "top", "left", "right", "timeout"])])),
                _: 1
            }))
        }
    },
    zk = {
        install(e, t) {
            const n = document.createElement("div");
            n.style.position = "absolute", document.body.appendChild(n);
            const r = vl(Nk).use(t.vuetify).mount(n),
                a = {
                    bottom: !0,
                    top: !1,
                    left: !1,
                    right: !1,
                    timeout: 5e3,
                    color: null,
                    buttonColor: "primary-lighten-2",
                    content: null,
                    buttonText: "OK",
                    onClickButton() { },
                    onClose() { }
                },
                o = [],
                l = () => {
                    o.length && !r.active && (Object.assign(r, o.shift()), r.active = !0)
                };
            r.$watch("active", (e => {
                e || (r.onClose(), setTimeout(l, 150))
            }));
            const i = (e, t = {}) => {
                o.push({
                    ...a,
                    ...t,
                    content: e
                }), l()
            };
            for (const s of ["success", "info", "error", "warning"]) i[s] = (e, t = {}) => i(e, {
                color: s,
                buttonColor: "white",
                ...t
            });
            e.config.globalProperties.$toast = i
        }
    };
xi.use(function (e) {
    if ("function" == typeof e && (e = {
        highlight: e
    }), !e || "function" != typeof e.highlight) throw new Error("Must provide highlight function");
    return "string" != typeof e.langPrefix && (e.langPrefix = "language-"), "string" != typeof e.emptyLangClass && (e.emptyLangClass = ""), {
        async: !!e.async,
        walkTokens(t) {
            if ("code" !== t.type) return;
            const n = Ci(t.lang);
            if (e.async) return Promise.resolve(e.highlight(t.text, n, t.lang || "")).then(Si(t));
            const r = e.highlight(t.text, n, t.lang || "");
            if (r instanceof Promise) throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
            Si(t)(r)
        },
        useNewRenderer: !0,
        renderer: {
            code(t, n, r) {
                "object" == typeof t && (r = t.escaped, n = t.lang, t = t.text);
                const a = Ci(n),
                    o = a ? e.langPrefix + $i(a) : e.emptyLangClass,
                    l = o ? ` class="${o}"` : "";
                return t = t.replace(/\n$/, ""), `<pre><code${l}>${r ? t : $i(t, !0)}\n</code></pre>`
            }
        }
    }
}({
    highlight(e, t) {
        return Bi.languages[t] ? (setTimeout(Bi.highlightAll), Bi.highlight(e, Bi.languages[t], t)) : e
    }
})), xi.use({
    useNewRenderer: !0,
    renderer: $k
}), vl(Ek).use(sk).use(uk).use(Hk, {
    vuetify: uk
}).use(zk, {
    vuetify: uk
}).use(dk).mount("#app");
const jk = (e, t, n) => console.log(`%c ${e} %c ${t} `, "color:#fff;background-color:#555;border-radius:3px 0 0 3px", `color:#fff;background-color:${n};border-radius:0 3px 3px 0`);
jk("Project", "dufs-material-assets", "#07c"), jk("Author", "TransparentLC", "#f84"), jk("Build Time", "2025-01-09T14:20:34.100Z", "#f48"), jk("Build With", "Vue 3.5.13 + Vite 6.0.7", "#4b8"), jk("Build With", "Vuetify 3.7.6", "#16b");
