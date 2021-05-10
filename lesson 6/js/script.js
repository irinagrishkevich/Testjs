class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.textAlign = textAlign

    function newDiv() {
      let newDiv = document.createElement('div')
      newDiv.innerHTML = '<h1>Привет!</h1>'

      my_div = document.getElementById('org_div1')
      document.body.insertBefore(newDiv, my_div)
    }
  }
}
