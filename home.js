const addMoneyBtn = document.getElementById('add-money-btn-1');
const addMoneyForm = document.getElementById('add-money-form');
const cashOutBtn = document.getElementById('cash-out-btn');
const cashOutForm = document.getElementById('cash-out-form');
const operatorSection = document.getElementById('operator-section');

const initialBalanceElement = document.getElementById('initial-balance');

// Toggle between forms
addMoneyBtn.addEventListener('click', function () {
  addMoneyForm.classList.remove('hidden');
  cashOutForm.classList.add('hidden');
});

cashOutBtn.addEventListener('click', function () {
  cashOutForm.classList.remove('hidden');
  addMoneyForm.classList.add('hidden');
});

// Add money
document.getElementById('add-money-btn').addEventListener('click', function () {
  const addMoneyInput = document.getElementById('str-amount');
  const addMoneyValue = parseFloat(addMoneyInput.value);

  const pinInput = document.getElementById('pin');
  const pin = pinInput.value;

  let currentBalance = parseFloat(initialBalanceElement.innerText);

  if (pin === '1234' && addMoneyValue > 0) {
    currentBalance += addMoneyValue;
    initialBalanceElement.innerText = currentBalance.toFixed(2);
  } else {
    alert('Wrong PIN or invalid amount');
  }

  pinInput.value = '';
  addMoneyInput.value = '';
});

// Cash out
document.getElementById('cash-out-btn-2').addEventListener('click', function () {
  const cashOutInput = document.getElementById('str-amount-2');
  const cashOutValue = parseFloat(cashOutInput.value);

  const pinInput = document.getElementById('pin-2');
  const pin = pinInput.value;

  let currentBalance = parseFloat(initialBalanceElement.innerText);

  if (pin === '1234' && cashOutValue > 0 && cashOutValue <= currentBalance) {
    currentBalance -= cashOutValue;
    initialBalanceElement.innerText = currentBalance.toFixed(2);
  } else {
    alert('Wrong PIN, invalid amount, or insufficient funds');
  }

  pinInput.value = '';
  cashOutInput.value = '';
});


// reacharge button
document.getElementById('recharge-btn').addEventListener('click', function(){
  operatorSection.classList.remove('hidden');
})