const tariffa = (0.21)
const Prezzo = ( userKm.value * tariffa)
const userName = document.querySelector('#UserName')
const userAge = document.querySelector('#UserAge')
const userKm = document.querySelector('#UserKm')
const myButton = document.querySelector('.btn')
const ScontoJunior = (Prezzo * 20 / 100)
const ScontoSenior = (Prezzo * 40 / 100)

myButton.addEventListener('click', function() {
    console.log(userAge.value);
    console.log(parseInt(userAge.value));
    console.log(userKm.value);
    console.log(parseInt(userKm.value));
    if(userAge.value < 18) {
        console.log(Prezzo - ScontoJunior)
    }
})

