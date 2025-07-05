const addMoneyBtn = document.getElementById('add-money-btn-1');
const addMoneyForm = document.getElementById('add-money-form');

addMoneyBtn.addEventListener('click', function(){
  addMoneyForm.classList.remove('hidden');
})



const initialBalanceElement = document.getElementById('initial-balance');
const initialBalance = Number(initialBalanceElement.innerHTML);

document.getElementById('add-money-btn').addEventListener('click', function () {
  const addMoneyQuantityStringInput = document.getElementById('str-amount');
  const addMoneyQuantityString = addMoneyQuantityStringInput.value;
  const addMoneyQuantity = Number(addMoneyQuantityString);
  const pinInput = document.getElementById('pin');
  const pin = pinInput.value;
  console.log(pin, addMoneyQuantity, typeof(addMoneyQuantity));

  if(pin=== '1234' && addMoneyQuantity>0){
    const currentBalance = initialBalance + addMoneyQuantity ;
    initialBalanceElement.innerHTML = currentBalance;

    //  clear inputs
    pinInput.value='';
    addMoneyQuantityStringInput.value='';
  }
  else{
    alert('wrong pin or amount');
    //  clear inputs
    pinInput.value='';
    addMoneyQuantityStringInput.value='';
  }


});
