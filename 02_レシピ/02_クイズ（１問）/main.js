const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

//クイズの内容
const quiz = {
  text: "この星の名前はなんでしょう",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは旧約聖書に登場するダビデに石で殺される巨人だよ",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメはクサガメまたはニホンイシガメの幼体だよ",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは木製の第三惑星だよ！",
    },
  ],
}
//クイズを画面に表示する関数
const reloadQuiz = function() {
  //問題文を表示
  quizText.textContent = "Q. " + quiz.text

  //画像を表示
  quizImage.src = "./images/" + quiz.image

  //選択肢（ボタン）の中身を表示

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}
//choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
reloadQuiz()
