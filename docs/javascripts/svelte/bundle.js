var te = Object.defineProperty;
var ne = (e, t, n) => t in e ? te(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var I = (e, t, n) => ne(e, typeof t != "symbol" ? t + "" : t, n);
function w() {
}
function oe(e, t) {
  for (const n in t) e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function V(e) {
  return e();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function C(e) {
  e.forEach(V);
}
function F(e) {
  return typeof e == "function";
}
function O(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function re(e) {
  return Object.keys(e).length === 0;
}
function se(e, t, n, o) {
  if (e) {
    const r = G(e, t, n, o);
    return e[0](r);
  }
}
function G(e, t, n, o) {
  return e[1] && o ? oe(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function ie(e, t, n, o) {
  return e[2], t.dirty;
}
function ce(e, t, n, o, r, s) {
  if (r) {
    const c = G(t, n, o, s);
    e.p(c, r);
  }
}
function ae(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let o = 0; o < n; o++)
      t[o] = -1;
    return t;
  }
  return -1;
}
function m(e, t) {
  e.appendChild(t);
}
function H(e, t, n) {
  const o = le(e);
  if (!o.getElementById(t)) {
    const r = p("style");
    r.id = t, r.textContent = n, de(o, r);
  }
}
function le(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function de(e, t) {
  return m(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function p(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function S() {
  return J(" ");
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ue(e) {
  return Array.from(e.childNodes);
}
function fe(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Y(e, t, n, o) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, "");
}
function j(e, t, n) {
  e.classList.toggle(t, !!n);
}
let k;
function $(e) {
  k = e;
}
function K() {
  if (!k) throw new Error("Function called outside component initialization");
  return k;
}
function B(e) {
  K().$$.on_mount.push(e);
}
function Q(e) {
  K().$$.on_destroy.push(e);
}
const _ = [], R = [];
let b = [];
const W = [], me = /* @__PURE__ */ Promise.resolve();
let T = !1;
function he() {
  T || (T = !0, me.then(X));
}
function D(e) {
  b.push(e);
}
const q = /* @__PURE__ */ new Set();
let y = 0;
function X() {
  if (y !== 0)
    return;
  const e = k;
  do {
    try {
      for (; y < _.length; ) {
        const t = _[y];
        y++, $(t), pe(t.$$);
      }
    } catch (t) {
      throw _.length = 0, y = 0, t;
    }
    for ($(null), _.length = 0, y = 0; R.length; ) R.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const n = b[t];
      q.has(n) || (q.add(n), n());
    }
    b.length = 0;
  } while (_.length);
  for (; W.length; )
    W.pop()();
  T = !1, q.clear(), $(e);
}
function pe(e) {
  if (e.fragment !== null) {
    e.update(), C(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(D);
  }
}
function ge(e) {
  const t = [], n = [];
  b.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), b = t;
}
const E = /* @__PURE__ */ new Set();
let ve;
function Z(e, t) {
  e && e.i && (E.delete(e), e.i(t));
}
function we(e, t, n, o) {
  if (e && e.o) {
    if (E.has(e)) return;
    E.add(e), ve.c.push(() => {
      E.delete(e);
    }), e.o(t);
  }
}
function ye(e, t, n) {
  const { fragment: o, after_update: r } = e.$$;
  o && o.m(t, n), D(() => {
    const s = e.$$.on_mount.map(V).filter(F);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : C(s), e.$$.on_mount = [];
  }), r.forEach(D);
}
function _e(e, t) {
  const n = e.$$;
  n.fragment !== null && (ge(n.after_update), C(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function be(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), he(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function A(e, t, n, o, r, s, c = null, f = [-1]) {
  const l = k;
  $(e);
  const i = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: w,
    not_equal: r,
    bound: P(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: P(),
    dirty: f,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  c && c(i.root);
  let h = !1;
  if (i.ctx = n ? n(e, t.props || {}, (d, a, ...u) => {
    const x = u.length ? u[0] : a;
    return i.ctx && r(i.ctx[d], i.ctx[d] = x) && (!i.skip_bound && i.bound[d] && i.bound[d](x), h && be(e, d)), a;
  }) : [], i.update(), h = !0, C(i.before_update), i.fragment = o ? o(i.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = ue(t.target);
      i.fragment && i.fragment.l(d), d.forEach(L);
    } else
      i.fragment && i.fragment.c();
    t.intro && Z(e.$$.fragment), ye(e, t.target, t.anchor), X();
  }
  $(l);
}
class z {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    _e(this, 1), this.$destroy = w;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!F(n))
      return w;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const r = o.indexOf(n);
      r !== -1 && o.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !re(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const xe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xe);
function $e(e) {
  H(e, "svelte-16fi7xx", ".reading-progress.svelte-16fi7xx{position:fixed;top:0;left:0;right:0;height:3px;background:rgba(0, 0, 0, 0.1);z-index:1000;transition:opacity 0.3s ease}.reading-progress-bar.svelte-16fi7xx{height:100%;background:linear-gradient(90deg, #103DC2, #ECB7B7);width:var(--progress);transition:width 0.1s ease-out;box-shadow:0 0 8px rgba(236, 183, 183, 0.5)}.md-content h1:first-child~.reading-progress.svelte-16fi7xx{opacity:0}");
}
function ke(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = p("div"), g(n, "class", "reading-progress-bar svelte-16fi7xx"), g(t, "class", "reading-progress svelte-16fi7xx"), Y(
        t,
        "--progress",
        /*progress*/
        e[0] + "%"
      );
    },
    m(o, r) {
      M(o, t, r), m(t, n);
    },
    p(o, [r]) {
      r & /*progress*/
      1 && Y(
        t,
        "--progress",
        /*progress*/
        o[0] + "%"
      );
    },
    i: w,
    o: w,
    d(o) {
      o && L(t);
    }
  };
}
function Se(e, t, n) {
  let { selector: o = ".md-content" } = t, r = 0, s;
  return B(() => {
    document.querySelector(o) && (s = () => {
      const f = window.innerHeight, l = document.documentElement.scrollHeight, i = window.pageYOffset || document.documentElement.scrollTop, h = l - f;
      h > 0 && n(0, r = i / h * 100);
    }, window.addEventListener("scroll", s), s());
  }), Q(() => {
    s && window.removeEventListener("scroll", s);
  }), e.$$set = (c) => {
    "selector" in c && n(1, o = c.selector);
  }, [r, o];
}
class Ee extends z {
  constructor(t) {
    super(), A(this, t, Se, ke, O, { selector: 1 }, $e);
  }
}
function Ce(e) {
  H(e, "svelte-50w7dm", ".animated-hero.svelte-50w7dm{text-align:center;padding:2rem 0;animation:svelte-50w7dm-fadeIn 0.8s ease-out}@keyframes svelte-50w7dm-fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.hero-title.svelte-50w7dm{font-size:2.5rem;margin-bottom:1rem;font-weight:700}.gradient-text.svelte-50w7dm{background:linear-gradient(135deg, #103DC2, #ECB7B7, #103DC2);background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:svelte-50w7dm-gradientShift 4s ease infinite}@keyframes svelte-50w7dm-gradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}.hero-subtitle.svelte-50w7dm{font-size:1.25rem;color:#666;margin-bottom:2rem;min-height:1.5em}.cursor.svelte-50w7dm{opacity:0;transition:opacity 0.1s}.cursor.visible.svelte-50w7dm{opacity:1}.hero-description.svelte-50w7dm{max-width:600px;margin:0 auto 2rem;color:#555;line-height:1.6}.cta-buttons.svelte-50w7dm{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}.cta-primary.svelte-50w7dm,.cta-secondary.svelte-50w7dm{padding:0.75rem 1.5rem;border-radius:6px;text-decoration:none;transition:all 0.3s ease;display:inline-flex;align-items:center;gap:0.5rem}.cta-primary.svelte-50w7dm{background:#103DC2;color:white;box-shadow:0 4px 12px rgba(16, 61, 194, 0.3)}.cta-primary.svelte-50w7dm:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(16, 61, 194, 0.4)}.cta-secondary.svelte-50w7dm{border:2px solid #103DC2;color:#103DC2}.cta-secondary.svelte-50w7dm:hover{background:#103DC2;color:white}");
}
function Le(e) {
  let t, n, o, r, s, c, f, l, i, h, d;
  return {
    c() {
      t = p("div"), n = p("h1"), n.innerHTML = 'Welcome to <span class="gradient-text svelte-50w7dm">Servando Torres&#39;s</span> Blog', o = S(), r = p("p"), s = J(
        /*typewriterText*/
        e[0]
      ), c = S(), f = p("span"), f.textContent = "|", l = S(), i = p("div"), i.innerHTML = "<p>I&#39;m a technology enthusiast passionate about building innovative solutions.</p> <p>Welcome to my space where I share insights and learnings.</p>", h = S(), d = p("div"), d.innerHTML = '<a href="/writing/" class="cta-primary svelte-50w7dm"><span>Explore Writing</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14m-7-7l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a> <a href="https://x.com/vandotorres" class="cta-secondary svelte-50w7dm">Connect on Twitter</a>', g(n, "class", "hero-title svelte-50w7dm"), g(f, "class", "cursor svelte-50w7dm"), j(
        f,
        "visible",
        /*showCursor*/
        e[1]
      ), g(r, "class", "hero-subtitle svelte-50w7dm"), g(i, "class", "hero-description svelte-50w7dm"), g(d, "class", "cta-buttons svelte-50w7dm"), g(t, "class", "animated-hero svelte-50w7dm");
    },
    m(a, u) {
      M(a, t, u), m(t, n), m(t, o), m(t, r), m(r, s), m(r, c), m(r, f), m(t, l), m(t, i), m(t, h), m(t, d);
    },
    p(a, [u]) {
      u & /*typewriterText*/
      1 && fe(
        s,
        /*typewriterText*/
        a[0]
      ), u & /*showCursor*/
      2 && j(
        f,
        "visible",
        /*showCursor*/
        a[1]
      );
    },
    i: w,
    o: w,
    d(a) {
      a && L(t);
    }
  };
}
const U = "AI, machine learning, and technology insights";
function Ie(e, t, n) {
  let o = "", r = !0, s = 0;
  return B(() => {
    const c = setInterval(
      () => {
        s < U.length ? (n(0, o = U.slice(0, s + 1)), s++) : (clearInterval(c), setInterval(
          () => {
            n(1, r = !r);
          },
          500
        ));
      },
      50
    );
    return () => clearInterval(c);
  }), [o, r];
}
class qe extends z {
  constructor(t) {
    super(), A(this, t, Ie, Le, O, {}, Ce);
  }
}
function Te(e) {
  H(e, "svelte-907pvk", ".toc-active{font-weight:600;transition:all 0.3s ease}.md-nav--secondary a{transition:all 0.3s ease;position:relative}.md-nav--secondary a:hover{background:rgba(16, 61, 194, 0.05);padding-left:1rem}.toc-active::after{content:'';position:absolute;right:0;top:50%;transform:translateY(-50%);width:6px;height:6px;border-radius:50%;background:#103DC2;animation:svelte-907pvk-pulse 2s ease-in-out infinite}@keyframes svelte-907pvk-pulse{0%,100%{opacity:1;transform:translateY(-50%) scale(1)}50%{opacity:0.5;transform:translateY(-50%) scale(1.2)}}");
}
function De(e) {
  let t, n;
  const o = (
    /*#slots*/
    e[2].default
  ), r = se(
    o,
    e,
    /*$$scope*/
    e[1],
    null
  );
  return {
    c() {
      t = p("div"), r && r.c(), g(t, "class", "enhanced-toc");
    },
    m(s, c) {
      M(s, t, c), r && r.m(t, null), n = !0;
    },
    p(s, [c]) {
      r && r.p && (!n || c & /*$$scope*/
      2) && ce(
        r,
        o,
        s,
        /*$$scope*/
        s[1],
        n ? ie(
          o,
          /*$$scope*/
          s[1],
          c,
          null
        ) : ae(
          /*$$scope*/
          s[1]
        ),
        null
      );
    },
    i(s) {
      n || (Z(r, s), n = !0);
    },
    o(s) {
      we(r, s), n = !1;
    },
    d(s) {
      s && L(t), r && r.d(s);
    }
  };
}
function Oe(e, t, n) {
  let { $$slots: o = {}, $$scope: r } = t, { tocSelector: s = ".md-nav--secondary" } = t, c = "", f;
  return B(() => {
    const l = document.querySelector(s);
    if (!l) return;
    const i = document.querySelectorAll(".md-content h2[id], .md-content h3[id]");
    f = new IntersectionObserver(
      (a) => {
        a.forEach((u) => {
          u.isIntersecting && (c = u.target.id, d());
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    ), i.forEach((a) => f.observe(a));
    const h = l.querySelectorAll('a[href^="#"]');
    h.forEach((a) => {
      a.addEventListener("click", (u) => {
        u.preventDefault();
        const x = a.getAttribute("href").slice(1), N = document.getElementById(x);
        N && (N.scrollIntoView({ behavior: "smooth", block: "start" }), c = x, d());
      });
    });
    function d() {
      h.forEach((u) => {
        u.classList.remove("toc-active"), u.style.borderLeft = "", u.style.background = "";
      });
      const a = l.querySelector(`a[href="#${c}"]`);
      a && (a.classList.add("toc-active"), a.style.borderLeft = "3px solid #103DC2", a.style.background = "rgba(16, 61, 194, 0.1)");
    }
  }), Q(() => {
    f && f.disconnect();
  }), e.$$set = (l) => {
    "tocSelector" in l && n(0, s = l.tocSelector), "$$scope" in l && n(1, r = l.$$scope);
  }, [s, r, o];
}
class He extends z {
  constructor(t) {
    super(), A(this, t, Oe, De, O, { tocSelector: 0 }, Te);
  }
}
function Me() {
  const e = document.querySelector(".md-header");
  e && document.querySelector(".md-content") && !document.querySelector(".reading-progress") && new Ee({
    target: e,
    props: {
      selector: ".md-content"
    }
  });
  const t = document.querySelector("#svelte-hero");
  t && t.children.length === 0 && new qe({
    target: t
  });
  const n = document.querySelector(".md-sidebar--secondary .md-sidebar__scrollwrap");
  n && document.querySelector(".md-nav--secondary") && new He({
    target: n,
    props: {
      tocSelector: ".md-nav--secondary"
    }
  });
  const o = document.querySelector(".md-content");
  o && ee.add(o.innerHTML.slice(0, 100));
}
let ee = /* @__PURE__ */ new Set();
function Be() {
  ee.clear();
  const e = document.querySelector("#svelte-hero .animated-hero");
  e && e.remove();
  const t = document.querySelector(".reading-progress");
  t && t.remove();
}
function v() {
  Be(), Me();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", v) : v();
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("location-changed", v), document.addEventListener("page:load", v), window.addEventListener("popstate", () => {
    setTimeout(v, 100);
  });
  let e = window.location.href;
  setInterval(() => {
    window.location.href !== e && (e = window.location.href, setTimeout(v, 200));
  }, 100);
  const t = new MutationObserver(() => {
    document.querySelector(".md-content") && setTimeout(v, 100);
  }), n = document.querySelector(".md-content");
  n && t.observe(n, { childList: !0, subtree: !0 });
});
