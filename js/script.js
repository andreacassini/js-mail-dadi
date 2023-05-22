//primo esercizio

/* let emails = ['primo@mail.com', 'secondo@mail.com', 'terzo@mail.com', 'quarto@mail.com', 'quinto@mail.com', 'sesto@mail.com', 'settimo@mail.com', 'ottavo@mail.com', 'nono@mail.com', 'decimo@mail.com',];

let input_email = prompt("Inserire l'email da cercare");
let flag = false;

for(let i=0; i<emails.length; i++){
    if(emails[i].toLowerCase() === input_email.toLowerCase()){
        flag = true;
    }
}

if(flag === true){
    console.log('Email trovata')
}
else{
    console.log("Email non presente");
} */

//secondo esercizio

let user_number;
let computer_number;
let message = '';

document.getElementById('generate').onclick = function(){
    user_number = Math.floor(Math.random() * 6) + 1;
    computer_number = Math.floor(Math.random() * 6) + 1;
    if(user_number > computer_number){
        message = 'Hai vinto';
    }
    else{
        message = 'Computer vince';
    }
    document.getElementById('user_label').innerText = user_number;
    document.getElementById('computer_label').innerText = computer_number;
    document.getElementById('result').innerText = message;


}