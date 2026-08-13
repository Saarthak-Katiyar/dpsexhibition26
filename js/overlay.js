(function () {
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var overlay, panel, current, lastFocus, callbacks = {};

  window.Overlay = {
    init: function (cb) {
      callbacks = cb || {};
      overlay = document.getElementById("overlay");
      panel = overlay.querySelector(".overlay-panel");
      bind();
    },
    open: open,
    close: close,
    current: function () { return current; }
  };

  function getList() {
    return window.EXHIBITIONS;
  }

  function open(id) {
    current = id;
    render();
    document.body.classList.add("no-scroll");
    overlay.hidden = false;
    requestAnimationFrame(function () {
      overlay.classList.add("open");
    });
    if (callbacks.onOpen) callbacks.onOpen(id);
    lastFocus = document.activeElement;
    setTimeout(function () {
      document.getElementById("ovClose").focus();
    }, 80);
  }

  function close() {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.add("closing");
    overlay.classList.remove("open");
    var focusBack = lastFocus;
    setTimeout(function () {
      overlay.classList.remove("closing");
      overlay.hidden = true;
      document.body.classList.remove("no-scroll");
      if (callbacks.onClose) callbacks.onClose(current);
      if (focusBack && focusBack.focus) focusBack.focus();
    }, RM ? 10 : 550);
  }

  function render() {
    var ex = getList().filter(function (e) { return e.id === current; })[0];
    if (!ex) return;
    overlay.querySelector(".overlay-scroll").scrollTop = 0;
    panel.style.setProperty("--ov-c", ex.color);
    document.getElementById("ovNumber").textContent = ex.number;
    document.getElementById("ovTitle").textContent = ex.name;
    document.getElementById("ovRoom").textContent = (ex.rooms && ex.rooms.length) ? ex.rooms.join(" · ") : ex.location;
    var ph = document.getElementById("ovPhoto");
    if (ph) {
      if (ex.image) { ph.src = ex.image; ph.style.display = ""; ph.alt = ex.name; }
      else { ph.removeAttribute("src"); ph.style.display = "none"; }
    }
  }

  function bind() {
    overlay.querySelector("[data-close-overlay]").addEventListener("click", close);
    document.getElementById("ovClose").addEventListener("click", close);
    panel.querySelectorAll("[data-ov-back]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = current;
        close();
        if (callbacks.onBack) callbacks.onBack(id);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (overlay.hidden || !overlay.classList.contains("open")) return;
      if (e.key === "Escape") { e.preventDefault(); close(); }
    });

    panel.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var list = Array.prototype.slice.call(panel.querySelectorAll("button:not([disabled])"));
      if (!list.length) return;
      var first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }
})();
