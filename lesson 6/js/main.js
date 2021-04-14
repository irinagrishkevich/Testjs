let btn = document.getElementById('start'),
  budget = document.getElementsByClassName('budget-value'),
  daybudget = document.getElementsByClassName('daybudget-value'),
  level = document.getElementsByClassName('level-value'),
  expenses = document.getElementsByClassName('expenses-value'),
  optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
  income = document.getElementsByClassName('income-value'),
  monthsavings = document.getElementsByClassName('monthsavings-value'),
  yearsavings = document.getElementsByClassName('yearsavings-value'),
  expensesItem = document.getElementsByClassName('expenses-item'),
  countBudgetBtn = document.getElementsByTagName('button'), //countBudgetBtn[2]
  expensesItemBtn = document.getElementsByTagName('button'), //expensesItemBtn[0]
  optionalexpensesBtn = document.getElementsByTagName('button'), //optionalexpensesBtn[1]
  optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('.choose-income'),
  savings = document.querySelector('.savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value')

console.log(chooseSum)

// console.log(countBudgetBtn[2])
// console.log(expensesItemBtn[0])
// console.log(optionalexpensesBtn[1])
