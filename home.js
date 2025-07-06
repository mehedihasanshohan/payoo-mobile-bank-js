const addMoneyBtn = document.getElementById('add-money-btn-1');
const addMoneyForm = document.getElementById('add-money-form');
const cashOutBtn = document.getElementById('cash-out-btn');
const cashOutForm = document.getElementById('cash-out-form');
const operatorSection = document.getElementById('operator-section');
const rechargeFormSection = document.getElementById('recharge-form-section');
const rechargeBtn = document.getElementById('recharge-btn');
const initialBalanceElement = document.getElementById('initial-balance');

// hide all section
function hideAllSections() {
  addMoneyForm.classList.add('hidden');
  cashOutForm.classList.add('hidden');
  rechargeFormSection.classList.add('hidden');
  operatorSection.classList.add('hidden');
}

// Toggle between forms starts here
addMoneyBtn.addEventListener('click', function () {
  hideAllSections();
  addMoneyForm.classList.remove('hidden')
});
cashOutBtn.addEventListener('click', function () {
  hideAllSections();
  cashOutForm.classList.remove('hidden')
});
rechargeBtn.addEventListener('click', function () {
  hideAllSections();
  operatorSection.classList.remove('hidden')
});
// toggle between forms ends here

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

let selectedOperator = null;

const operatorCards = document.querySelectorAll('[data-operator]');

operatorCards.forEach(card => {
  card.addEventListener('click', () => {
    // Store selected operator
    selectedOperator = card.getAttribute('data-operator');

    // Remove highlight from all cards
    operatorCards.forEach(c => c.classList.remove('ring-4', 'ring-white', 'scale-105'));
    operatorSection.classList.add('hidden');
    // Highlight selected card
    card.classList.add('ring-4', 'ring-white', 'scale-105');

    // Show recharge form
    rechargeFormSection.classList.remove('hidden');
  });
});



const confirmBtn = document.getElementById('recharge-confirm-btn');
const balanceElement = document.getElementById('initial-balance');

confirmBtn.addEventListener('click', function () {
  const mobile = document.getElementById('mobile-number').value.trim();
  const amount = parseFloat(document.getElementById('recharge-amount').value);
  const pin = document.getElementById('recharge-pin').value;

  const currentBalance = parseFloat(balanceElement.innerText);

  // Operator prefix rules
  const operatorPrefixes = {
    gp: '017',
    robi: '018',
    bl: '019',
    teletalk: '015'
  };

  // ✅ Validations
  if (!selectedOperator) {
    alert("Please select an operator.");
    return;
  }

  if (!mobile.startsWith(operatorPrefixes[selectedOperator])) {
    alert(`Mobile number must start with ${operatorPrefixes[selectedOperator]} for ${selectedOperator.toUpperCase()}.`);
    return;
  }

  if (pin !== '1234') {
    alert("Invalid PIN.");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  if (amount > currentBalance) {
    alert("Insufficient balance.");
    return;
  }

  // recharge success and update initial balance
  const newBalance = currentBalance - amount;
  initialBalanceElement.innerText = newBalance.toFixed(2);
  alert(`Recharge successful to ${mobile} of ৳${amount}`);

  // Reset form
  document.getElementById('mobile-number').value = '';
  document.getElementById('recharge-amount').value = '';
  document.getElementById('recharge-pin').value = '';
});
