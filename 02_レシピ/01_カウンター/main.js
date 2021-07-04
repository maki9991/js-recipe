const deisplay = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0
//letなので後から変化できる
//ボタンをクリックした時の処理を登録する
//ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  //クリックした時の処理
  //countを更新する
  count += 1
  //countを表示する
  deisplay.textContent = count
}
