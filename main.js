const tariffa = (0.21)
const userName = document.querySelector('#UserName')
const userAge = document.querySelector('#UserAge')
const userKm = document.querySelector('#UserKm')
const myButton = document.querySelector('.btn')

myButton.addEventListener('click', function() {
    console.log(userName.value);
    let Nome = (userName.value)
    document.getElementById('User').innerHTML = Nome
    console.log(userAge.value);
    console.log(parseInt(userAge.value));
    console.log(userKm.value);
    console.log(parseInt(userKm.value));
    const Prezzo = (userKm.value * tariffa)
    const ScontoJunior = (Prezzo * 20 / 100)
    const ScontoSenior = (Prezzo * 40 / 100)
    let randomN = Math.floor(Math.random() * 10) + 1;
    document.getElementById('SlotN').innerHTML = randomN
    if(userAge.value < 18) {
        console.log(Prezzo - ScontoJunior)
        let prezzosconto = (Prezzo - ScontoJunior)
        let n = prezzosconto.toFixed(2)
        console.log(n)
        document.getElementById('Costo').innerHTML = n + "€"
        document.getElementById('TicketType').innerHTML = "Junior"
    }  else if (userAge.value > 65) {
        console.log(Prezzo - ScontoSenior)
        let prezzosconto = (Prezzo - ScontoSenior)
        let n = prezzosconto.toFixed(2)
        console.log(n)
        document.getElementById('Costo').innerHTML = n + "€"
        document.getElementById('TicketType').innerHTML = "Senior"
    } else if (userAge.value >= 18 && userAge.value < 65) {
        console.log(Prezzo)
        let n = Prezzo.toFixed(2)
        console.log(n)
        document.getElementById('Costo').innerHTML = n + "€"
        document.getElementById('TicketType').innerHTML = "Standard"
    }
}) 

