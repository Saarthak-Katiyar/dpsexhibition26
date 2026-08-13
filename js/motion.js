(function () {
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.Motion = {
    init: function () {
      initLoader();
      initHeader();
      initReveals();
      initHeroCta();
    }
  };

  function initLoader() {
    var loader = document.getElementById("loader");
    if (!loader) return;
    function done() {
      document.body.classList.add("is-ready");
      loader.classList.add("out");
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 800);
    }
    if (RM) { done(); return; }
    setTimeout(done, 900);
  }

  function initHeader() {
    var header = document.getElementById("siteHeader");
    var ticking = false;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();
  }

  function initReveals() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || RM) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in-view");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function initHeroCta() {
    var btn = document.getElementById("heroCta");
    if (btn) {
      btn.addEventListener("click", function () {
        var map = document.getElementById("explore");
        if (map) {
          map.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
          var shell = document.querySelector(".map-shell");
          if (shell) {
            shell.classList.remove("entering");
            void shell.offsetWidth;
            shell.classList.add("entering");
          }
        }
      });
    }
  }
})();
