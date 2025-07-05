document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault();
  console.log('clicked');

  const phnNumber = document.getElementById('phn-number').value;
  const password = document.getElementById('password').value;
  console.log(phnNumber,  password);
})