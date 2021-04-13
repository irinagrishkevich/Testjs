let menu = document.getElementsByClassName('menu'),
  menuItem = document.getElementsByClassName('menu-item'),
  elmnt = menuItem[1],
  listFive = document.createElement('li')
listFive.classList.add('menu-item')
listFive.textContent = 'Пятый пункт'

quest = document.getElementById('prompt')
answer = prompt('Ваше отвношение к технике apple?', '')
quest.textContent = answer
adver = document.getElementsByClassName('adv')
document.body.children[2].removeChild(adver[0])

title = document.getElementById('title')
title.textContent = 'Мы продаем только подлинную технику Apple'
// elmnt.appendChild(textNode)
// menu.replaceChild(elmnt, menuItem[0])

document.body.children[0].children[0].children[0].insertBefore(
  menuItem[2],
  elmnt,
)
document.body.children[0].children[0].children[0].replaceChild(
  menuItem[2],
  elmnt,
)
document.body.children[0].children[0].children[0].insertBefore(
  menuItem[2],
  elmnt,
)
document.body.children[0].children[0].children[0].insertBefore(
  listFive,
  menuItem[4],
)

document.body.style.backgroundImage = "url('../img/apple_true.jpg')"
console.log(document.body.children[2].children[0])
