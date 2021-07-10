const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    //データを取得した後に実行する処理
    return res.json() // 結果を json として読み込んで、次の then に渡す//JSONはデータを表す文字列
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
