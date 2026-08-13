(function () {
  var list, callbacks = {};

  window.Directory = {
    init: init
  };

  function init(cb) {
    callbacks = cb || {};
    list = document.getElementById("directoryList");
    render();
  }

  function rowHTML(ex) {
    return '' +
      '<button class="dir-row" data-id="' + ex.id + '" role="listitem" style="--dr-c:' + ex.color + '">' +
      '<span class="dir-num">' + ex.number + '</span>' +
      '<span class="dir-name">' + ex.name + '</span>' +
      '<span class="dir-loc">' + (ex.rooms && ex.rooms.length ? ex.rooms.join(" · ") : ex.location) + '</span>' +
      '<span class="dir-arrow">→</span>' +
      '</button>';
  }

  function render() {
    list.innerHTML = window.EXHIBITIONS.map(rowHTML).join("");
    list.querySelectorAll(".dir-row").forEach(function (row) {
      var id = row.getAttribute("data-id");
      row.addEventListener("mouseenter", function () { row.classList.add("hovered"); });
      row.addEventListener("mouseleave", function () { row.classList.remove("hovered"); });
      row.addEventListener("click", function () {
        if (callbacks.onSelect) callbacks.onSelect(id);
      });
    });
  }
})();
