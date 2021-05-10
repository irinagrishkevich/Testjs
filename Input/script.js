// let age = document.getElementById('age')

// function showUser(surname, name) {
//   alert(
//     'Пользователь ' + surname + ' ' + name + ', его возраст ' + this.age.value,
//   )
// }

// showUser('Smit', 'Jack')

class Options {
  constructor(height, width, bg = 'red', fontSize = 10, textAlign = 'center') {
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.textAlign = textAlign
  }
  newDiv() {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    newDiv.innerHTML = prompt('Что хотите написать?', '')
    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`
    newDiv.style.cssText = param
  }
}

const item = new Options(300, 350, 'red', 14, 'center')

item.newDiv()
