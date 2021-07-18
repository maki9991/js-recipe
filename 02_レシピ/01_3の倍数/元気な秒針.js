const genkiByousin = function() {
  //nを1からnumberまで1ずつ増やしながらfor文の中身を繰り返す
  /* for (let n = 1; n <= number; n++) {
    if (n % 3 == 0) {
      console.log(n + "!!!!!!")
    } else if (/3/.test(n)) {
      console.log(n + "!!!!!")
    } else {
      console.log(n)
    }
  }
}*/
  countUp()
  for (let count = 1; count <= Number; count++) {
    if (count % 3 == 0) {
      console.log(count + "!!!!!!")
    } else if (/3/.test(count)) {
      console.log(count + "!!!!!")
    } else {
      console.log(count)
    }
  }
}

let count = 0
const countUp = function() {
  count++
  setInterval(1000)
}

genkiByousin(12)
