/*
Traccia

Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
- Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
  
Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:

- Che ci sia un array da qualche parte?
- Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:

scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
  si ma noi cosa vogliamo fare?
- torniamo a scrivere in italiano
  proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//Strumenti

//variables
//function
//getElementById
//array
//console.log
//inner.HTML
//Math.floor
//Math.random

//Procedimento

//Mail

// Chiedo all' utente la mail e la salvo in una variabile.
// creo un' array di mail.
// controllo se la mail inserita è presente nell' array e inserisco l' output testuale adatto nel DOM.

//Dadi

// Genero un numero casuale da 1 a 6 per il giocatore e per il computer e lo salvo in una variabile
// Confronto i due numeri, stabilisco il vincitore e inserisco l'output testuale adatto nel DOM.



//Codice
function takeValue() {
//Chiedo all' utente la mail e la salvo in una variabile.
const insertMail = document.getElementById("mail").value;
console.log(insertMail);

// creo un' array di mail.
let maiList = ["rosso@hotmail.com","bianco@hotmail.com","blu@hotmail.com"]
console.log (maiList)

// controllo se la mail inserita è presente nell' array e inserisco l'output testuale adatto nel DOM.
if (maiList.includes(insertMail)) {
  // Email autorizzata
  document.getElementById("output").innerHTML = "L'accesso è consentito.";
} else {
  // Email non autorizzata
  document.getElementById("output").innerHTML = "L'accesso non è consentito.";
}
}

// Dadi

// Genero un numero casuale da 1 a 6 per il giocatore e per il computer e lo salvo in una variabile
// Confronto i due numeri, stabilisco il vincitore e inserisco l'output testuale adatto nel DOM.


function gioca() {
  // Genero un numero casuale da 1 a 6 per il giocatore e per il computer e lo salvo in una variabile
  const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
  const dadoComputer = Math.floor(Math.random() * 6) + 1;
  
  // Confronto i due numeri, stabilisco il vincitore e inserisco l' output testuale adatto nel DOM.
  if (dadoGiocatore > dadoComputer) {
    document.getElementById("risultato").innerHTML = `Hai vinto! <br> Il tuo dado ha fatto ${dadoGiocatore} <br> il dado del computer ha fatto ${dadoComputer}.`;
  } else if (dadoGiocatore < dadoComputer) {
    document.getElementById("risultato").innerHTML = `Hai perso! <br> Il tuo dado ha fatto ${dadoGiocatore} <br> il dado del computer ha fatto ${dadoComputer}.`;
  } else {document.getElementById("risultato").innerHTML = `Pareggio!`
  }
}
