//get pin 
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin
    }else{
        return getPin();
    }
}
//generate pin
function genaratePin(){
    const genaratePin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = genaratePin;
}

//get number display
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            displayNumber.value = '';
        }else if( number == '<'){
            displayNumber.value = displayNumber.value.slice(0, -1);
        }
    }else{
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number;
        displayNumber.value = newNumber;
    }
})

//verifay Pin matched
function verifyPin(){
    const displayPin = document.getElementById('display-pin').value;
    const displayNumbers =  document.getElementById('display-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-error');
    if(displayPin == displayNumbers){
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }else{
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
    document.getElementById('display-numbers').value = '';
}