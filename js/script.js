let emails = ['primo@mail.com', 'secondo@mail.com', 'terzo@mail.com', 'quarto@mail.com', 'quinto@mail.com', 'sesto@mail.com', 'settimo@mail.com', 'ottavo@mail.com', 'nono@mail.com', 'decimo@mail.com',];

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
}