document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault();

  const phnNumber = document.getElementById('phn-number').value;
  const password = document.getElementById('password').value;
  console.log(phnNumber,  password);

  if(phnNumber ==='019' && password=== '1234'){
    console.log('logged in');
  // window.location.href = '/home.html'
  window.location.href = 'pages/home.html';

  // window.location.href = '/https://mehedihasanshohan.github.io/payoo-mobile-bank-js/home.html'

  }
  else{
    alert('something wrong here');
  }





})