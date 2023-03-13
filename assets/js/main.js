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

//Procedimento

// Chiedo all' utente la mail e la salvo in una variabile.
// creo un' array di mail.
// controllo se la mail inserita è presente nell' array e inserisco un' output testuale adatto.


//Codice

//Chiedo all' utente la mail e la salvo in una variabile.
const insertMail =prompt("Inserisci la tua mail")
console.log(insertMail);

// creo un' array di mail.
let maiList = ["rosso@hotmail.com","bianco@hotmail.com","blu@hotmail.com"]
console.log (maiList)

// controllo se la mail inserita è presente nell' array e inserisco un' output testuale adatto.

if(maiList.includes(insertMail)){
console.log("La mail è presente")    
} else {
console.log("La mail non è presente")
}

