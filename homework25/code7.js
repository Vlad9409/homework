function setTime(h) {
  return function setMinutes(m = 0) {
    return function setSeconds(s = 0) {
      return `${h}:${m}:${s}`;
    };
  };
}

let time = setTime(22)()(10);
console.log(time);
