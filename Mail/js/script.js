// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedo l'email all'uetnete
const userEmail = prompt('Dimmi la tua email');

// arrey
const emailList = [ 'pippo@email.it', 'mario@email.it', 'luca@email.it', 'luigi@email.it','lucia@email.it', 'claudia@email.it', 'davide@email.it', ]; 

// uso emailFound come seganlino  
let emailFound = false;

// scorro l'arrey
for(let i = 0; i < emailList.length; i++) {
    const thisEmail =  emailList[i];

// controllo se la mail fa parte dell'arrey
    if( thisEmail === userEmail ) {
        emailFound = true;
    }
}

// tampo con un alert se l'email è presenrte o meno
if (emailFound){
        alert('Email accettata, puoi accedere')

} else{
        alert(`Email non trovata nel sistema, REGISTRALA (in futuro)`)
}