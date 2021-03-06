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

  more.addEventListener('click', function () {
    overlay.style.display = 'block'
    this.classList.add('more-splash')
    document.body.style.overflow = 'hidden'
  })
  close.addEventListener('click', function () {
    overlay.style.display = 'none'
    more.classList.remove('more-splash')
    document.body.style.overflow = ''
  })
  //form

  let message = {
    loading: '????????????????...',
    success: '??????????????! ???? ?????????? ?? ???????? ????????????????!',
    failure: '??????-???? ?????????? ???? ??????...',
  }

  let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div')

  statusMessage.classList.add('status')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    form.appendChild(statusMessage)

    let request = new XMLHttpRequest()
    request.open('POST', 'server.php')

    // form php
    // request.setRequestHeader(
    //   'Content-Type',
    //   'application/x-www-form-urlencoded',
    // )

    //from json
    request.setRequestHeader(
      'Content-type',
      'application/json; charset=utsf-8 ',
    )
    let formData = new FormData(form)

    let obj = {}
    formData.forEach(function (value, key) {
      obj[key] = value
    })
    let json = JSON.stringify(obj)
    request.send(json)
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success
      } else {
        statusMessage.innerHTML = message.failure
      }
    })

    for (let i = 0; i < input.length; i++) {
      input[i].value = ''
    }
  })
  // Slider

  let slideIndex = 1, //param slide
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot'),
    timeId

  showSlides(slideIndex)

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    slides.forEach((item) => {
      item.style.display = 'none'
    })

    // for (let i = 0; i<slides.length;i++){
    //   slides[i].style.display = 'none'
    // }
    dots.forEach((item) => item.classList.remove('dot-active'))

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].classList.add('dot-active')

    clearInterval(timeId)
    timeId = setInterval(function () {
      if (slideIndex == slides.length) {
        slideIndex = 0
      }
      slideIndex++
      showSlides()
    }, 8000)
  }

  function plusSlides(n) {
    showSlides((slideIndex += n))
  }

  function currentSlide(n) {
    showSlides((slideIndex = n))
  }

  prev.addEventListener('click', function () {
    plusSlides(-1)
  })
  next.addEventListener('click', function () {
    plusSlides(1)
  })

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains('dot') &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i)
      }
    }
  })
  //calc

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0

  totalValue.innerHTML = 0

  persons.addEventListener('change', function () {
    personsSum = +this.value
    total = (daysSum + personsSum) * 4000

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0
    } else {
      totalValue.innerHTML = total
    }
  })
  restDays.addEventListener('change', function () {
    daysSum = +this.value
    total = (daysSum + personsSum) * 4000

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0
    } else {
      totalValue.innerHTML = total
    }
  })

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0
    } else {
      let a = total
      totalValue.innerHTML = a * this.options[this.selectedIndex].value
    }
  })
})
