window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  function taby(a, b, c) {
    let tab = document.querySelectorAll(a), //class with tabs
      info = document.querySelector(b), //block with tabs
      tabContent = document.querySelectorAll(c) //tab content

    function hideTabContetn(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show')
        tabContent[i].classList.add('hide')
      }
    }

    hideTabContetn(1)

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide')
        tabContent[b].classList.add('show')
      }
    }

    info.addEventListener('click', (event) => {
      let target = event.target
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContetn(0)
            showTabContent(i)
            break
          }
        }
      }
    })
  }
  taby('.info-header-tab', '.info-header', '.info-tabcontent')

  //timer

  let deadLine = '2021-05-07'

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60))

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000)

    function updateClock() {
      let t = getTimeRemaining(endtime)
      hours.textContent = t.hours
      minutes.textContent = t.minutes
      seconds.textContent = t.seconds

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds
      }
      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes
      }
      if (t.hours < 10) {
        hours.textContent = '0' + t.hours
      }

      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
  setClock('timer', deadLine)

  //Modal

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close')

  more.addEventListener('click', () => {
    overlay.style.display = 'block'
    document.body.style.overflow = 'hidden'
    this.classList.add('more-splash')
  })
  close.addEventListener('click', () => {
    overlay.style.display = 'none'
    more.classList.remove('more-splash')
    document.body.style.overflow = ''
  })
  ;('use strict')
  function hello() {
    console.log(this)
  }
  hello()
})
