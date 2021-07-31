//Vueを使う
new Vue({
  el: "#atm",
  data: {
    nyuuryoku: 0,
    zandaka: 0,
    date: 0, //new Date(),
    move: 0,
    money: 0,
  },

  methods: {
    nyuukin: function() {
      this.zandaka += Number(this.nyuuryoku) //Number型に変換する
      let nowTime = new Date() //現在時刻
      console.log(nowTime)
    },

    syukkin: function() {
      this.zandaka -= Number(this.nyuuryoku)
    },
  },
})
