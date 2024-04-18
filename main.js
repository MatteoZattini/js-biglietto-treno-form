const tariffa = (0.21)
const userName = document.querySelector('#UserName')
const userAge = document.querySelector('#UserAge')
const userKm = document.querySelector('#UserKm')
const myButton = document.querySelector('.btn')

myButton.addEventListener('click', function() {
    console.log(userAge.value);
    console.log(parseInt(userAge.value));
    console.log(userKm.value);
    console.log(parseInt(userKm.value));
    const Prezzo = (userKm.value * tariffa)
    const ScontoJunior = (Prezzo * 20 / 100)
    const ScontoSenior = (Prezzo * 40 / 100)
    if(userAge.value < 18) {
        console.log(Prezzo - ScontoJunior)
    }  else if (userAge.value > 65) {
        console.log(Prezzo - ScontoSenior)
    } else if (userAge.value >= 18 && userAge.value < 65) {
        console.log(Prezzo)
    }
}) 

