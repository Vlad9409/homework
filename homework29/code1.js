// Создать страницу, которая выводит нумерованный список песен:
var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
let ul = document.createElement(`ul`);
let mainDiv = document.getElementById(`content`);
mainDv.append(ul);
for (let i in playList) {
  let li = document.createElement(`li`);
  let pBtn = document.createElement(`p`);
  pBtn.append(playList[i].author);
  pBtn.append(` : `);
  pBtn.append(playList[i].song);
  li.append(pBtn);
  ul.append(li);
}
