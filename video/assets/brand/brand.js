/* SINI AKU CERITAIN — reusable motion, caption and brand utilities.
   Linked once from video/index.html, after GSAP, so every scene can call
   window.NPL.*. Deterministic only: no Date.now(), no unseeded random. */

(function () {
  "use strict";

  var NPL = {};

  /* Easing standards: camera, type, entrance, exit, comic. */
  NPL.EASE = {
    camera: "power2.inOut",
    type: "power3.out",
    enter: "back.out(1.4)",
    exit: "power2.in",
    comic: "elastic.out(1, 0.5)"
  };

  /* Deterministic pseudo-random. Same seed -> same film, every render. */
  NPL.rng = function (seed) {
    var s = seed || 1;
    return function () {
      s = (s * 16807) % 2147483647;
      return s / 2147483647;
    };
  };

  /* Typography reveal: blur + rise, optional word stagger. */
  NPL.reveal = function (tl, target, at, opts) {
    var o = opts || {};
    return tl.fromTo(
      target,
      {
        opacity: 0,
        y: o.y == null ? 26 : o.y,
        filter: "blur(" + (o.blur == null ? 10 : o.blur) + "px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: o.duration == null ? 0.5 : o.duration,
        ease: o.ease || NPL.EASE.type,
        stagger: o.stagger == null ? 0 : o.stagger
      },
      at
    );
  };

  /* Object entrance: scale overshoot. */
  NPL.enter = function (tl, target, at, opts) {
    var o = opts || {};
    return tl.fromTo(
      target,
      {
        opacity: 0,
        scale: o.scale == null ? 0.88 : o.scale,
        y: o.y == null ? 30 : o.y,
        transformOrigin: o.origin || "50% 50%"
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: o.duration == null ? 0.55 : o.duration,
        ease: o.ease || NPL.EASE.enter
      },
      at
    );
  };

  /* Dramatic exit. */
  NPL.exit = function (tl, target, at, opts) {
    var o = opts || {};
    return tl.fromTo(
      target,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: o.y == null ? -34 : o.y,
        filter: "blur(" + (o.blur == null ? 6 : o.blur) + "px)",
        duration: o.duration == null ? 0.3 : o.duration,
        ease: o.ease || NPL.EASE.exit
      },
      at
    );
  };

  /* Continuous micro-motion so a beat never sits dead. */
  NPL.drift = function (tl, target, duration, opts) {
    var o = opts || {};
    return tl.fromTo(
      target,
      { x: 0, y: 0 },
      {
        x: o.x == null ? 0 : o.x,
        y: o.y == null ? -18 : o.y,
        duration: duration,
        ease: o.ease || "sine.inOut"
      },
      0
    );
  };

  /* Horror camera drift (user-approved deviation): slow deterministic push/drift.
     Target a dedicated image wrapper; do not combine with CSS transform. */
  NPL.horrorCamera = function (tl, target, duration, opts) {
    var o = opts || {};
    return tl.fromTo(
      target,
      {
        scale: o.fromScale == null ? 1 : o.fromScale,
        x: o.fromX == null ? 0 : o.fromX,
        y: o.fromY == null ? 0 : o.fromY,
        transformOrigin: o.origin || "50% 50%"
      },
      {
        scale: o.toScale == null ? 1.08 : o.toScale,
        x: o.toX == null ? 0 : o.toX,
        y: o.toY == null ? -10 : o.toY,
        duration: duration,
        ease: o.ease || "power1.inOut"
      },
      o.at == null ? 0 : o.at
    );
  };

  /* Controlled horror hit (user-approved deviation). No gore/graphic violence.
     Use sparingly at climax; keep short and readable. */
  NPL.jumpscare = function (tl, opts) {
    var o = opts || {};
    var at = o.at == null ? 0 : o.at;
    var flash = o.flash;
    var target = o.target;
    var punch = o.punch == null ? 1.04 : o.punch;
    var dur = o.dur == null ? 0.18 : o.dur;
    if (target) {
      tl.fromTo(target, { scale: 1 }, { scale: punch, duration: 0.04, ease: "power2.out" }, at);
      tl.to(target, { scale: 1, duration: dur, ease: "power2.out" }, at + 0.04);
    }
    if (flash) {
      tl.fromTo(flash, { opacity: 0 }, { opacity: o.flashMax == null ? 0.35 : o.flashMax, duration: 0.03, ease: "steps(1)" }, at);
      tl.to(flash, { opacity: 0, duration: 0.2, ease: "power2.out" }, at + 0.03);
      tl.set(flash, { opacity: 0 }, at + 0.24);
    }
  };

  /* ------------------------------------------------------------
     Phrase-level captions, authored in the scene HTML so Studio can
     edit them. Each group is written as:

       <div class="npl-cap" id="cap-1" data-cap-start="1.2"
            data-cap-duration="2.4" style="top:1320px">
         <span class="npl-cap-line">Eropa nggak punya<br>
           <em class="npl-cap-key">musim panas</em></span>
       </div>

     The attributes are data-cap-* on purpose: data-start/data-duration
     are the framework's clip contract, and a caption group is not a clip.
     One call per scene wires them all. Rules enforced by review, not
     by code: max two lines, 2-7 words, one group on screen at a time.
     ------------------------------------------------------------ */
  NPL.captions = function (tl, scope) {
    var root = scope ? document.querySelector(scope) : document;
    if (!root) return;
    var groups = root.querySelectorAll(".npl-cap[data-cap-start]");

    Array.prototype.forEach.call(groups, function (el) {
      var start = parseFloat(el.getAttribute("data-cap-start")) || 0;
      var dur = parseFloat(el.getAttribute("data-cap-duration")) || 2;
      var end = start + dur;
      /* Entrance 120-180ms: short enough to keep pace, long enough to read. */
      var inDur = Math.min(0.18, Math.max(0.12, dur * 0.3));
      var sel = "#" + el.id;

      tl.fromTo(
        sel,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: inDur, ease: "power2.out" },
        start
      );
      /* Hard kill, so a stale group never lingers past its slot. */
      tl.to(sel, { opacity: 0, duration: 0.1, ease: "power2.in" }, end - 0.1);
      tl.set(sel, { opacity: 0, visibility: "hidden" }, end);
    });
  };

  /* ------------------------------------------------------------
     REALITY SKIP — the channel's recurring transition.
     1 micro-freeze -> 2 horizontal displacement -> 3 RGB split
     4 mask/hard cut -> 5 static tick.
     Use for significant reality distortion, not every cut.
     ------------------------------------------------------------ */
  NPL.realitySkip = function (tl, opts) {
    var o = opts || {};
    var at = o.at == null ? 0 : o.at;
    var target = o.target;
    var layer = o.layer;
    var dur = o.duration == null ? 0.42 : o.duration;
    var punch = o.punch == null ? 26 : o.punch;

    if (target) {
      /* 1 — micro-freeze then snap sideways. */
      tl.fromTo(target, { x: 0 }, { x: -punch, duration: 0.06, ease: "steps(1)" }, at);
      tl.to(target, { x: punch * 0.6, duration: 0.05, ease: "steps(1)" }, at + 0.06);
      tl.to(target, { x: 0, duration: 0.1, ease: "power2.out" }, at + 0.11);
      /* 3 — RGB channel separation. */
      tl.fromTo(
        target,
        { filter: "none" },
        {
          filter:
            "drop-shadow(-14px 0 0 rgba(255,0,51,.55)) drop-shadow(14px 0 0 rgba(0,229,255,.55))",
          duration: 0.09,
          ease: "steps(2)"
        },
        at
      );
      tl.to(target, { filter: "none", duration: 0.12, ease: "power2.out" }, at + 0.12);
    }

    if (layer) {
      /* 5 — static tick bands sweep the frame. */
      tl.fromTo(layer, { opacity: 0 }, { opacity: 1, duration: 0.04, ease: "steps(1)" }, at);
      tl.fromTo(
        layer + " .npl-skip-band",
        { xPercent: -100 },
        { xPercent: 100, duration: dur, ease: "steps(7)" },
        at
      );
      tl.to(layer, { opacity: 0, duration: 0.08, ease: "power2.in" }, at + dur - 0.08);
      tl.set(layer, { opacity: 0 }, at + dur);
    }
  };

  /* Watermark: inject the shared lockup into a host element. */
  NPL.watermark = function (hostSel, opts) {
    var host = document.querySelector(hostSel);
    if (!host) return;
    var o = opts || {};
    host.innerHTML =
      '<div class="npl-wm">' +
      '<img src="assets/brand/logo-symbol.svg" alt="">' +
      '<img src="assets/brand/logo-wordmark-compact.svg" alt="SINI AKU CERITAIN">' +
      "</div>";
    if (o.opacity != null) host.querySelector(".npl-wm").style.opacity = String(o.opacity);
  };

  window.NPL = NPL;

  /* ------------------------------------------------------------
     LAB REPORT LAYER (v2, additive). All deterministic.
     ------------------------------------------------------------ */

  /* Claim stamp slam: lands hard, one micro-shake, no bounce. */
  NPL.stamp = function (tl, target, at, opts) {
    var o = opts || {};
    var rot = o.rotate == null ? -4 : o.rotate;
    tl.fromTo(
      target,
      { opacity: 0, scale: 1.7, rotation: rot - 7, transformOrigin: "50% 50%" },
      { opacity: 1, scale: 1, rotation: rot, duration: 0.17, ease: "power3.in" },
      at
    );
    tl.fromTo(target, { x: 0 }, { x: 7, duration: 0.05, ease: "steps(1)" }, at + 0.17);
    tl.to(target, { x: -5, duration: 0.05, ease: "steps(1)" }, at + 0.22);
    tl.to(target, { x: 0, duration: 0.06, ease: "steps(1)" }, at + 0.27);
  };

  /* mm:ss from seconds. */
  NPL.clock = function (v) {
    var t = Math.max(0, Math.round(v));
    var m = Math.floor(t / 60);
    var s = t % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  };

  /* Counter: text is a pure function of the tween, so it is seek-safe. */
  NPL.counter = function (tl, sel, at, dur, from, to, fmt) {
    var el = document.querySelector(sel);
    var f = fmt || NPL.clock;
    var st = { v: from };
    if (el) el.textContent = f(from);
    return tl.fromTo(
      st,
      { v: from },
      {
        v: to, duration: dur, ease: "none",
        onUpdate: function () { if (el) el.textContent = f(st.v); }
      },
      at
    );
  };

  /* Film grain: seeded jitter on steps, alive without motion spam. */
  NPL.grain = function (tl, sel, duration, opts) {
    var o = opts || {};
    var rnd = NPL.rng(o.seed || 7);
    var step = o.step || 0.12;
    for (var t = 0; t < duration; t += step) {
      tl.set(sel, { x: Math.round((rnd() - 0.5) * 60), y: Math.round((rnd() - 0.5) * 60) }, t);
    }
  };

  /* Star field: seeded circles injected into an <svg>. */
  NPL.stars = function (svgSel, n, seed, w, h) {
    var svg = document.querySelector(svgSel);
    if (!svg) return;
    var rnd = NPL.rng(seed || 3);
    var out = "";
    for (var i = 0; i < n; i++) {
      var r = (0.8 + rnd() * 1.7).toFixed(1);
      out += '<circle cx="' + Math.round(rnd() * w) + '" cy="' + Math.round(rnd() * h) +
        '" r="' + r + '" fill="#f5f3ef" fill-opacity="' + (0.18 + rnd() * 0.5).toFixed(2) + '"/>';
    }
    svg.innerHTML = out;
  };
})();
