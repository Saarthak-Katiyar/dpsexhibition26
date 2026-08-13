(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function scrollToPlan() {
      var sec = document.getElementById("explore");
      if (sec) sec.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
    }

    Overlay.init({
      onBack: function () {
        scrollToPlan();
      }
    });

    Directory.init({
      onSelect: function (id) { Overlay.open(id); }
    });

    Motion.init();

    /* ── Floor Plan Inline Zoom ───────────────── */
    var mapWrap   = document.getElementById("floorPlanWrap");
    var mapImg    = document.getElementById("floorPlanImg");
    var mapZoom   = document.getElementById("mapZoomCtl");
    var mapTag    = document.getElementById("mapImgTag");
    var zoomInBtn = document.getElementById("mapZoomIn");
    var zoomOutBtn = document.getElementById("mapZoomOut");
    var zoomResetBtn = document.getElementById("mapZoomReset");

    var scale = 1, panX = 0, panY = 0;
    var dragging = false, dragStartX = 0, dragStartY = 0, lastPanX = 0, lastPanY = 0;

    function applyMap() {
      mapImg.style.transform = "translate(" + panX + "px," + panY + "px) scale(" + scale + ")";
    }

    function clampPan() {
      var sw = mapWrap.clientWidth;
      var sh = mapWrap.clientHeight;
      var iw = mapImg.naturalWidth || sw;
      var ih = mapImg.naturalHeight || (sw * 583 / 1077);
      var rw = sw;
      var rh = sw * ih / iw;
      var maxX = Math.max(0, (rw * scale - sw) / 2);
      var maxY = Math.max(0, (rh * scale - sh) / 2);
      panX = Math.max(-maxX, Math.min(maxX, panX));
      panY = Math.max(-maxY, Math.min(maxY, panY));
    }

    function setMapScale(s) {
      scale = Math.max(1, Math.min(6, s));
      clampPan();
      applyMap();
    }

    function activate() {
      mapWrap.classList.add("zoomed");
      mapZoom.hidden = false;
      mapTag.textContent = "DRAG TO PAN · TAP TO RESET";
      setMapScale(2.5);
    }

    function deactivate() {
      mapWrap.classList.remove("zoomed");
      mapZoom.hidden = true;
      mapTag.textContent = "TAP TO ZOOM";
      scale = 1; panX = 0; panY = 0;
      applyMap();
    }

    if (mapWrap) {
      mapWrap.addEventListener("click", function (e) {
        if (e.target.closest("button")) return;
        if (mapWrap.classList.contains("zoomed")) {
          deactivate();
        } else {
          activate();
        }
      });

      mapWrap.addEventListener("wheel", function (e) {
        if (!mapWrap.classList.contains("zoomed")) return;
        e.preventDefault();
        setMapScale(scale * (e.deltaY > 0 ? 0.9 : 1.1));
      }, { passive: false });

      mapWrap.addEventListener("pointerdown", function (e) {
        if (!mapWrap.classList.contains("zoomed")) return;
        if (e.target.closest("button")) return;
        dragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        lastPanX = panX;
        lastPanY = panY;
        mapWrap.setPointerCapture(e.pointerId);
      });

      mapWrap.addEventListener("pointermove", function (e) {
        if (!dragging) return;
        panX = lastPanX + (e.clientX - dragStartX);
        panY = lastPanY + (e.clientY - dragStartY);
        clampPan();
        applyMap();
      });

      mapWrap.addEventListener("pointerup", function () { dragging = false; });
      mapWrap.addEventListener("pointercancel", function () { dragging = false; });
    }

    if (zoomInBtn)    zoomInBtn.addEventListener("click", function () { setMapScale(scale * 1.5); });
    if (zoomOutBtn)   zoomOutBtn.addEventListener("click", function () { setMapScale(scale / 1.5); });
    if (zoomResetBtn) zoomResetBtn.addEventListener("click", function () {
      scale = 1; panX = 0; panY = 0;
      applyMap();
    });
  });
})();
