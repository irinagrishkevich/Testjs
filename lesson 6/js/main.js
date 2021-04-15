let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue = document.getElementsByClassName(
    'optionalexpenses-value',
  )[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item'),
  countBtn = document.getElementsByTagName('button')[2], //countBudgetBtn[2]
  expensesBtn = document.getElementsByTagName('button')[0], //expensesItemBtn[0]
  optionalexpensesBtn = document.getElementsByTagName('button')[1], //optionalexpensesBtn[1]
  optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value')

let money, time
expensesBtn.disabled = true
countBtn.disabled = true
optionalexpensesBtn.disabled = true
checkSavings.disabled = true
startBtn.addEventListener('click', () => {
  money = +prompt('Ваш бюджет на месяц?', '')
  time = prompt('Введите дату в формате YYYY-MM-DD', '')

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '')
  }
  appData.budget = money
  appData.timeData = time
  budgetValue.textContent = money.toFixed()
  yearValue.value = new Date(Date.parse(time)).getFullYear()
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1
  dayValue.value = new Date(Date.parse(time)).getDate()
  expensesBtn.disabled = false
  countBtn.disabled = false
  optionalexpensesBtn.disabled = false
  checkSavings.disabled = false
})

expensesBtn.addEventListener('click', () => {
  let sum = 0

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value
    if (
      typeof a === 'string' &&
      typeof a != null &&
      typeof b != null &&
      a != '' &&
      b != '' &&
      a.length < 10
    ) {
      console.log('good')
      appData.expenses[a] = b
      sum += +b
    } else {
      console.log('bad result')
      i--
    }
  }
  expensesValue.textContent = sum
})

optionalexpensesBtn.addEventListener('click', () => {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let opt = optionalexpensesItem[i].value
    appData.optionalExpenses[i] = opt
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + '   '
  }
})

countBtn.addEventListener('click', () => {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed()
    daybudgetValue.textContent = appData.moneyPerDay

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'минимальный уровень достатка'
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка'
    } else if (appData.moneyPerDay >= 2000) {
      levelValue.textContent = 'Высокий уровень достатка'
    } else {
      levelValue.textContent = 'Введите правильные данные'
    }
  } else {
    daybudgetValue.textContent = 'Произошла ошибка'
  }
})

incomeItem.addEventListener('input', () => {
  let items = incomeItem.value
  appData.income = items.split(', ')
  incomeValue.textContent = appData.income
})

checkSavings.addEventListener('click', () => {
  if (appData.savings == true) {
    appData.savings = false
  } else {
    appData.savings = true
  }
})

sumValue.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value
    appData.monthIncome = (sum / 100 / 12) * percent
    appData.yearIncome = (sum / 100) * percent

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1)
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
  }
})

percentValue.addEventListener('input', () => {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value
    appData.monthIncome = (sum / 100 / 12) * percent
    appData.yearIncome = (sum / 100) * percent

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1)
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1)
  }
})
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
}
