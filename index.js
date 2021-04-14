//funcrion

// let num = 20
// function showFirstMessage(text) {
//   alert(text)
//   let num = 10
//   console.log(num)
// }
// showFirstMessage('HelloWorld')
// console.log(num)

// //function declaration
// console.log(calc)
// console.log(calc('hello', 8))
// function calc(a, b) {
//   return a + b
// }

// //function expression
// // console.log(calc)
// // console.log(calc('hello', 8)) // dont work
// let calc = function (a, b) {
//   return a + b
// }
// console.log(calc)
// console.log(calc('hello', 8))

// //let calc = (a,b) => a+b

// function retVar() {
//   let num = 50
//   return num
// }
// let anotherNum = retVar()
// console.log(anotherNum)

// let str = 'test'
// console.log(str.length)

//Callback function
// function first() {
//   setTimeout(function () {
//     console.log(1)
//   }, 500)
// }
// function second() {
//   console.log(2)
// }
// first()
// second()

// function learnJS(lang, callback) {
//   console.log('я учу ' + lang)
//   callback()
// }

// function done() {
//   console.log('я прошел все')
// }
// learnJS('JavaScripte', done)

//Object
// let options = {
//   width: 1024,
//   height: 1024,
//   name: 'test',
// }
// console.log(options.name)

// options.bool = false
// options.colors = {
//   border: 'black',
//   background: ' red',
// }
// delete options.bool
// console.log(options)

// for (let key in options) {
//   console.log('свойство ' + key + ' значения' + options[key])
// }
// console.log(Object.keys(options).length)

//Массивы и псевдомассивы

// let arr = [1, 2, 3, 4, 5]

// arr.pop()
// arr.push('6')
// arr.shift()
// arr.unshift('8')

// arr[99]=99
// console.log(arr.length)

// let arr = ['first', 2, 3, 'four', '6']
// for(let i=1;i<arr.length;i++){
//     console.log(arr[i])
// }
// let arr = ['first', 2, 3, 'four', '6']
// arr.forEach(function (item, i, mass) {
//   console.log(i + ': ' + item + ' (массив: ' + mass + ' )')
// })
// console.log(arr)

// let mass = [1,3,4,6,7]

// for(let key in mass) {
//     console.log(key)
// }
// //значения из масиива
// let mass = [1,3,4,6,7]

// for(let key of mass) {
//     console.log(key)
// }

// let ans = prompt('', ''),
//   arr = []

// arr = ans.split(',')
// console.log(arr)

// let arr = ['aerr', 'dgg', 'hjdhd', 'Hello', 'world', 'joop'],
//   i = arr.join(', ')

// console.log(i)

// let arr = ['aerr', 'dgg', 9, 'Hello', 'world', 7],
//   i = arr.sort()

// console.log(i)

// let arr = [44, 4, 9, 8, 'world', 7],
//   i = arr.sort(compareNum)
//  function compareNum(a,b){
//      return a-b;
//  }
// console.log(i)

// let soldier = {
//   health: 400,
//   armor: 100,
// }
// let john = {
//   healht: 100,
// }
// john.__proto__ = soldier

// console.log(john)
// console.log(john.armor)

// /// ///// /////// работа с действиями с элементами на странице
// let box = document.getElementById('box'),
//   btn = document.getElementsByTagName('button'),
//   circle = document.getElementsByClassName('circle'),
//   heart = document.querySelectorAll('.heart'),
//   oneHeart = document.querySelector('.heart')
// wrapper = document.querySelector('.wrapper')

// // console.log(oneHeart)
// // console.log(box)
// // console.log(heart)
// // console.log(circle[2])
// // console.log(btn)
// // console.log(btn[0])

// box.style.backgroundColor = 'blue'
// btn[1].style.borderRadius = '100%'

// circle[0].style.backgroundColor = 'red'
// circle[1].style.backgroundColor = 'yellow'
// circle[2].style.backgroundColor = 'green'

// // for (let i = 0; i < heart.length; i++) {
// //   heart[i].style.backgroundColor = 'black'
// // }

// // heart.forEach((item, i, array) => (item.style.backgroundColor = 'blue'))

// let div = document.createElement('div'),
//   text = document.createTextNode('Тут был я !')

// div.classList.add('black')

// // document.body.appendChild(div)
// // wrapper.appendChild(div)
// let ara = prompt('hello')

// div.textContent = ara
// // div.innerHTML = '<h2>hello world!</h2>'

// document.body.insertBefore(div, btn[0])
// document.body.removeChild(circle[1])
// wrapper.removeChild(heart[1])
// document.body.replaceChild(btn[1], circle[1])

// console.log(div)
// console.log(text)

//DOM для событий
// let btn = document.querySelectorAll('button'),
//   wrapper = document.querySelector('.wrapper'),
//   link = document.querySelector('a')

// btn[0].onclick = () => alert('вы нажали')

// btn[0].addEventListener('click', (e) => {
//   let target = e.target
//   target.style.display = 'none'
//   console.log('cobytie ' + e.type + ' na elemente ' + e.target)
// })

// wrapper.addEventListener('click', (e) => {
//   console.log('cobytie ' + e.type + ' na elemente ' + e.target)
// })

// link.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log('cobytie ' + e.type + ' na elemente ' + e.target)
// })

// btn.forEach((item) => {
//   item.addEventListener('mouseleave', () => {
//     console.log('Вышли !')
//   })
// })
// btn[0].addEventListener('mouseenter', () => {
//   alert('ret')
//   alert('ret22')
// })

//MOBILE

//События
//touchstart, touchmove,touchend, touchenter, touchleave,touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//   let box = document.getElementById('btn')

//   box.addEventListener('touchstart', (e) => {
//     e.preventDefault()
//     console.log('Red box')
//   })
//   box.addEventListener('touchmove', (e) => {
//     e.preventDefault()
//     console.log('Red box move')
//   })
//   box.addEventListener('touchend', (e) => {
//     e.preventDefault()
//     console.log('Red box end')
//   })
//   console.log(box)
// })


new RegExp('pattern','flags')
/pattern/