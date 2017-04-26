console.log('fair trade connected');
//document.body.appendChild(formdiv);
const firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var enterEmail = document.getElementById('inputEmail4');
var enterPassword = document.getElementById('inputPassword4');
var createbutton = document.getElementById('createbutton');
var messageboard= document.getElementById('messageboard');


createbutton.addEventListener('click', function() {
    messageboard.innerHTML = 'Hello ' + firstName.value +' ' + lastName.value +'. Thank you for Creating your account with us. Would you like to donate some to the cause?';
    alert('hello ' + firstName.value);
    createDonate();
});

function createDonate() {
        
//    document.body.removeChild(firstName);
//    document.body.removeChild(lastName);
//    document.body.removeChild(enterEmail);
//    document.body.removeChild(enterPassword);
    document.body.removeChild(createbutton);
    yesDonate = document.createElement('button');
    yesDonate.setAttribute('class', 'yesDonate');
    yesDonate.innerHTML = 'YES';
    document.body.appendChild(yesDonate);
    yesDonate.addEventListener('click', startDonate); 
    noDonate = document.createElement('button');
    noDonate.setAttribute('class', 'noDonate');
    noDonate.innerHTML = 'No';
    document.body.appendChild(noDonate);
    noDonate.addEventListener('click', noDonateFunction);
}
function noDonateFunction () {
    var pleaseDonate = document.createElement('div');    
    document.body.appendChild(pleaseDonate);
      var sadface = document.createElement('img');
    sadface.setAttribute('class', 'sadface');
        sadface.setAttribute('src', 'sadface.jpg');
    pleaseDonate.appendChild(sadface);
}



function startDonate() {
    var donatingForm = document.createElement('div');
    document.body.appendChild(donatingForm);
    donatingForm.innerHTML = 'Please enter how much you would like to donate';
    let donateAmount = document.createElement('input');
    donateAmount.setAttribute('class', 'donateAmount');
    donatingForm.appendChild(donateAmount);
    let submitDonationButton =  document.createElement('button');
    submitDonationButton.setAttribute('class', 'submitDonationButton');
    submitDonationButton.style.color ='red';
    submitDonationButton.innerHTML = 'Submit Donation';
    donatingForm.appendChild(submitDonationButton);
    submitDonationButton.addEventListener('click', checkAmount);
        function checkAmount () {
            if (donateAmount.value < 5) {
                donatingForm.innerHTML = 'Hey! please donate more ' + firstName.value + '.';
                yesDonate.style.display = 'none';
                noDonate.style.display = 'none';
                var acceptdonate = document.createElement('button');
                acceptdonate.innerHTML = 'okay!';
                donatingForm.appendChild(acceptdonate);
                acceptdonate.addEventListener('click', startDonate);
            }
            else if(donateAmount.value > 5) {
                var receipt = document.createElement('div');
                receipt.setAttribute('class', 'receipt');
                donatingForm.appendChild(receipt);
                receipt.innerHTML = 'Thank you For your Donation, Here is your Receipt';
                    let printReceipt = document.createElement('h2');
                    printReceipt.innerHTML = firstName.value + ' ' + lastName.value + ': Donated Amount: $' + donateAmount.value;
                    printReceipt.style.color = 'brown';
                    printReceipt.style.background = 'cyan';
                    printReceipt.style.textDecoration = 'underline';
                    printReceipt.setAttribute('class', 'printReceipt');
                    receipt.appendChild(printReceipt);
                    var imagebar = document.createElement('img');
                    imagebar.setAttribute('class', 'imagebar');
                    imagebar.setAttribute('src', 'barcode.png');
                    receipt.appendChild(imagebar);
//                    var redirectdonate =document.createElement('a');
//                    redirectdonate.setAttribute('class', 'redirectdonate');
//                receipt.innerHTML = 'index.html';
//                    receipt.appendChild(redirectdonate);
            }
        }
}