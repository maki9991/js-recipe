const person = document.getElementById("person")
//html上の"person"というidの要素を取得する
//document.getElementById(取得したい要素のid)

//ある男性の状態
//let age = 26
let isWorking = true //仕事をしているか
let isInSpace = false //宇宙にいるか
//let isBeardShaved = false //髭を剃ってるか

const draw = function() {
  if (isWorking) {
    person.textContent = "🧑‍💻"
  } else {
    person.textContent = "😄"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡️🌏"
  }
}

draw()
//引数で表示する
//🧑‍💻🈁➡️🌏

//ワンクリックで仕事を終了するボタンと、宇宙へいけるボタンを作ろう
const quitWorkingButton = document.getElementById("quit-working-button")
const LaunchButton = document.getElementById("launch-button")

//退勤ボタン
quitWorkingButton.onclick = function() {
  isWorking = false
  draw()
}

//打ち上げボタン
LaunchButton.onclick = function() {
  isInSpace = true
  draw()
}
