import "./jquery.js";

const MOBSO = {
  canvas: $(),
  character1: null,
  character2: null,
  //currency: null,
};
const settings = {
  canvas: "mobso-game",
  //character1: "img.png",
};

function initMOBSO(settingsParam) {
  MOBSO.canvas = $("#" + settingsParam.canvas);
 // MOBSO.character1 = settingsParam.character1;
  //MOBSO.character2 = settingsParam.character2;
  //Create Bar space, character spaces, main frame, currency frame
}

function makeBar(textParam, idParam, charParam) {
  var bar = $("<div></div>");
  bar
    .attr({
      id: "textBar" + idParam,
      style: "background: black; color: white; height: 100px;",
    })
    .text(textParam)
    .appendTo(MOBSO.canvas);
}
initMOBSO(settings);
makeBar("hi", 8, character1);
