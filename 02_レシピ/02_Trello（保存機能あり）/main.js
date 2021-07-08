/*//要素を取得する
const inputElement = document.getElementById("input-todo") //追加ボタン
const container = document.getElementById("cards-container") //入力欄
const addButton = document.getElementById("add-button") //カードを追加する場所

//カードを追加する
//JavaScriptで要素を作成し、次に要素を追加する必要がある

//追加ボタンを押したら
addButton.onclick = function() {
  //入力欄の値を取り出して、textにいれる
  const text = inputElement.value

  //cardを作成
  const card = document.createElement("div")
  card.className = "card" //クラス名を変更
  //document.createElementで要素を作成する！

  //todoを作成
  const todo = document.createElement("div")
  todo.className = "todo" //クラス名を変更
  todo.textContent = text //textContentを変更

  //todoをcardのなかに追加する(cardはJaveScriptの世界にしかない)
  card.append(todo)

 
  //入れたいところ.append(入れたいもの)

  //削除ボタンを作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを押した時の処理
  deleteButton.onclick = function() {
    //カードを削除する
    card.remove()
    //要素.remove()
  }
  //削除ボタンをcardのなかに追加する
  card.append(deleteButton)

  //cardをcontainerの中に追加する（containerは画面上（DOMツリー上）にある）
  container.append(card)

  //入力欄をからにする
  inputElement.nodeValue = " "
}
*/

//最終的なコード
const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

//追加ボタンを押した時の処理
addButton.onclick = function() {
  //カードを作成する
  const card = creatCard(inputElement.value)
  container.append(card)

  //入力欄を空にする
  inputElement.value = " "
}

//共通の処理：テキストからカードを作成する
const creatCard = function(text) {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを押した時の処理を登録
  deleteButton.onclick = function() {
    //カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
