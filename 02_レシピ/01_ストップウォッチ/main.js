const display = document.getElementById("display")
const button = document.getElementById("button")
const button = document.getElementsById("nullbutton")

let count = 0
const countUp = function() {
  //countを更新
  count += 1
  //countを秒単位にして表示
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    //****************************START
    //10msごとにcountUpを実行するように登録する
    id = setInterval(countUp, 10)
    //setInterval(関数,間隔)//間隔の単位は1/1000秒(=1ms)
    button.textContent = "stop"
  } else {
    //****************************STOP
    clearInterval(id)
    id = nullbutton.textContent = "start"
  }
}
