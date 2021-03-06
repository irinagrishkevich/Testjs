let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd')

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest()

  // request.open(method, url, async, login, pass)
  request.open('GET', 'current.json')
  request.setRequestHeader('Content-type', 'application/json; charset=utsf-8 ')
  request.send(body)

  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response)

      inputUsd.value = inputRub.value / data.usd
    } else {
      inputUsd.value = 'что-то пошло не так'
    }
  })
})
