//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function (r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r),
                a = (o || r).length,
                c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
        }
    }

    function t(n) {
        return function (t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t)) return i;
            return -1
        }
    }

    function r(n, t, r) {
        return function (e, u, i) {
            var o = 0,
                a = O(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
            if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u) return i;
            return -1
        }
    }

    function e(n, t) {
        var r = I.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || a,
            i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        g = c.bind,
        y = Object.create,
        d = function () {},
        m = function (n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function (n, t, r) {
            if (t === void 0) return n;
            switch (null == r ? 3 : r) {
                case 1:
                    return function (r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function (r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function (r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function (r, e, u, i) {
                        return n.call(t, r, e, u, i)
                    }
            }
            return function () {
                return n.apply(t, arguments)
            }
        },
        x = function (n, t, r) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
        };
    m.iteratee = function (n, t) {
        return x(n, t, 1 / 0)
    };
    var _ = function (n, t) {
            return function (r) {
                var e = arguments.length;
                if (2 > e || null == r) return r;
                for (var u = 1; e > u; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                        var f = o[c];
                        t && r[f] !== void 0 || (r[f] = i[f])
                    }
                return r
            }
        },
        j = function (n) {
            if (!m.isObject(n)) return {};
            if (y) return y(n);
            d.prototype = n;
            var t = new d;
            return d.prototype = null, t
        },
        w = function (n) {
            return function (t) {
                return null == t ? void 0 : t[n]
            }
        },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function (n) {
            var t = O(n);
            return "number" == typeof t && t >= 0 && A >= t
        };
    m.each = m.forEach = function (n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))
            for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
        }
        return n
    }, m.map = m.collect = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
    }, m.filter = m.select = function (n, t, r) {
        var e = [];
        return t = x(t, r), m.each(n, function (n, r, u) {
            t(n, r, u) && e.push(n)
        }), e
    }, m.reject = function (n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }, m.every = m.all = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n)) return !1
        }
        return !0
    }, m.some = m.any = function (n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n)) return !0
        }
        return !1
    }, m.contains = m.includes = m.include = function (n, t, r, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
    }, m.invoke = function (n, t) {
        var r = l.call(arguments, 2),
            e = m.isFunction(t);
        return m.map(n, function (n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }, m.pluck = function (n, t) {
        return m.map(n, m.property(t))
    }, m.where = function (n, t) {
        return m.filter(n, m.matcher(t))
    }, m.findWhere = function (n, t) {
        return m.find(n, m.matcher(t))
    }, m.max = function (n, t, r) {
        var e, u, i = -1 / 0,
            o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, m.min = function (n, t, r) {
        var e, u, i = 1 / 0,
            o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e)
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
        });
        return i
    }, m.shuffle = function (n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u
    }, m.sample = function (n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }, m.sortBy = function (n, t, r) {
        return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function (n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function (n) {
        return function (t, r, e) {
            var u = {};
            return r = x(r, e), m.each(t, function (e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function (n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }), m.indexBy = F(function (n, t, r) {
        n[r] = t
    }), m.countBy = F(function (n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }), m.toArray = function (n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }, m.size = function (n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }, m.partition = function (n, t, r) {
        t = x(t, r);
        var e = [],
            u = [];
        return m.each(n, function (n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }), [e, u]
    }, m.first = m.head = m.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }, m.initial = function (n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }, m.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }, m.rest = m.tail = m.drop = function (n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }, m.compact = function (n) {
        return m.filter(n, m.identity)
    };
    var S = function (n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                // t || (c = S(c, t, r)
            }
        }
    };
});