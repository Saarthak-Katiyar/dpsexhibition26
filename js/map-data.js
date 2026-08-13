/*
  MAP GEOMETRY — the fictional sample campus.
  viewBox 0 0 1440 960. Replace buildings/rooms/corridors with the real
  floor plan later; the same data powers the main map and every mini-map.
*/
window.MAP_DATA = {
  viewBox: [0, 0, 1440, 960],
  entrance: { x: 720, y: 908, label: "MAIN ENTRANCE" },
  hall: { x: 720, y: 480, r: 116 },

  corridors: [
    { id: "spine-s", pts: [[720, 940], [720, 596]] },
    { id: "spine-n", pts: [[720, 364], [720, 320]] },
    { id: "lab-walk", pts: [[720, 320], [1160, 320]] },
    { id: "cl-door", pts: [[720, 320], [720, 240]] },
    { id: "il-door", pts: [[1160, 320], [1160, 240]] },
    { id: "garden-walk", pts: [[720, 360], [300, 360]] },
    { id: "garden-door", pts: [[300, 360], [300, 340]] },
    { id: "main-walk", pts: [[140, 600], [1280, 600]] },
    { id: "main-door", pts: [[410, 600], [410, 620]] },
    { id: "main-inner", pts: [[240, 620], [580, 620]] },
    { id: "art-door", pts: [[240, 600], [240, 620]] },
    { id: "b-door", pts: [[1060, 600], [1060, 620]] }
  ],

  buildings: [
    {
      id: "main-block", x: 200, y: 620, w: 420, h: 280, name: "MAIN BLOCK",
      rooms: [
        { x: 220, y: 640, w: 200, h: 220, num: "101" },
        { x: 440, y: 640, w: 160, h: 220, num: "102" }
      ]
    },
    {
      id: "block-b", x: 860, y: 620, w: 420, h: 280, name: "BLOCK B",
      rooms: [
        { x: 920, y: 700, w: 320, h: 160, num: "204" }
      ]
    },
    {
      id: "computer-lab", x: 560, y: 140, w: 320, h: 180, name: "COMPUTER LAB",
      rooms: []
    },
    {
      id: "innovation-lab", x: 1000, y: 140, w: 320, h: 180, name: "INNOVATION LAB",
      rooms: []
    },
    {
      id: "art-studio", x: 120, y: 620, w: 240, h: 280, name: "ART STUDIO",
      rooms: []
    },
    {
      id: "garden", x: 140, y: 120, w: 320, h: 240, name: "GARDEN ZONE", outdoor: true
    }
  ],

  entrancePlaza: { x: 640, y: 880, w: 160, h: 80 }
};

window.MapGeom = (function () {
  function d(points) {
    return "M" + points.map(function (p) { return p.join(" "); }).join(" L");
  }
  function octagon(cx, cy, r) {
    var pts = [];
    for (var i = 0; i < 8; i++) {
      var a = Math.PI * (0.5 + i / 4);
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    return pts;
  }
  return { d: d, octagon: octagon };
})();
