const genkiFunction = function(number) {
  //nを1からnumberまで1ずつ増やしながらfor文の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (/*n % 3 == 0 || */ /3/.test(n)) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(34)
