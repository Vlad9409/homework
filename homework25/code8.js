let hh = +prompt("h");
let mm = +prompt("m");
let ss = +prompt("s");
function secund(hh, mm, ss) {
  return hh * 3600 + mm * 60 + ss;
}
alert(secund(hh, mm, ss));
