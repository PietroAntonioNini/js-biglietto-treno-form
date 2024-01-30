
let userName;
let km;
let age;
let amount;

const submitElement = document.querySelector("#submit");

submitElement.addEventListener("click", 
    function(event) {

        document.querySelector(".ticket-box").style.display = `block`;
        submitElement.style.border = "2px solid orange";

        event.preventDefault();
        
        userName = document.getElementById(`userName`).value;
        km = document.getElementById(`km`).value;
        age = document.getElementById(`age`).value;

        age = parseInt(age);
        km = parseInt(km);

        amount = Math.floor(km) * 0.21;
        console.log(amount);

        if (age < 18) {
            amount = `${amount}` - ((`${amount}` * 20) / 100);
            amount = amount.toFixed(2);
            document.querySelector("#offert").innerText = "Scontato del 20%"

        } 
        else if (age >= 65) {
            amount = `${amount}` - ((`${amount}` * 40) / 100);
            amount = amount.toFixed(2);
            document.querySelector("#offert").innerText = "Scontato del 40%"

        } else {
            amount = amount.toFixed(2);
            document.querySelector("#offert").innerText = "Biglietto standard"
        }

        document.getElementById("price").innerText = `${amount} €`;
        document.querySelector("#ticket-name").innerText = userName;
        document.querySelector("#number-carriage").innerText = Math.floor (Math.random() * 9) + 1;
        document.querySelector("#cp").innerText = Math.floor (Math.random() * (99999 - 10000 + 1) + 10000);
    }

)