const maki = {
  name: "まっきー",
  university: "奈良女子大学",
  age: 21,
  hobby: ["明石焼", "散歩"],
  familly: {
    sister: "妹",
    mama: "母",
  },
  isMentor: false,
  sayHello: function() {
    alert(`こんにちは${this.name}です!!`)
  },
}
console.log(maki.name)
maki.sayHello()
