// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



alert('Stai per giocare al gioco dei dadi!!!')


// generare 2 numeri random uno per il giocatore uno per il pc
const userNumber = Math.floor(Math.random() * 6) 
console.log(userNumber)
const pcNumber = Math.floor(Math.random() * 6)
console.log(pcNumber)

if(userNumber > pcNumber){
    alert('Hai vinto con il numero' + ' ' + userNumber )

} else {
    alert('Ha vinto il PC con il numero' + ' ' + pcNumber )
}
