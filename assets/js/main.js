(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Language ---------- */
  var LANG_KEY = "kk-lang";
  function store(k, v) { try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); return v; } catch (e) { return null; } }

  function setLang(lang) {
    if (lang !== "te") lang = "en";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
    store(LANG_KEY, lang);
  }
  var urlLang = new URLSearchParams(location.search).get("lang");
  var initialLang = urlLang === "te" || urlLang === "en" ? urlLang : (store(LANG_KEY) || "en");
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
  });

  setLang(initialLang);

  /* ---------- Close calendar menus when tapping elsewhere ---------- */
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.cal[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });

  /* ---------- Gentle reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ioAlive = false;
    var io = new IntersectionObserver(function (entries) {
      ioAlive = true;
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".card-sheet, .event, .kalyanam, .hosts").forEach(function (el) {
      el.classList.add("reveal"); io.observe(el);
    });
    // Fail-safe: if the observer never reports (some in-app browsers), show everything.
    setTimeout(function () {
      if (!ioAlive) document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }, 1500);
  }
  /* ---------- Petal shower on first visit ---------- */
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function sess(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } }
  function showerPetals(count) {
    if (reduceMotion) return;
    var box = $("petals"), kinds = ["marigold", "marigold", "jasmine", "jasmine", "rose"];
    for (var i = 0; i < count; i++) {
      var p = document.createElement("span");
      p.className = "petal " + kinds[i % kinds.length];
      p.style.left = (Math.random() * 100) + "vw";
      p.style.setProperty("--sway", (Math.random() * 80 - 40) + "px");
      p.style.animationDuration = (4 + Math.random() * 3.5) + "s";
      p.style.animationDelay = (Math.random() * 1.8) + "s";
      p.addEventListener("animationend", function () { this.remove(); });
      box.appendChild(p);
    }
  }

  if (sess("kk-petals") !== "1") {
    sess("kk-petals", "1");
    setTimeout(function () { showerPetals(28); }, 900);
  }
})();
