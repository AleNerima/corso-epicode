/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a=7
let b=4
if(a>b) {console.log("il numero più grande è",a)
} else if(b>a){
  console.log("il numero più grande è",b)
} else{
  console.log("i numeri sono uguali")}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let x= 6
if(x!==5){ console.log("not equal")}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let divisione=10
if(divisione%5==0){console.log("divisibile per 5")}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let  y = 7
let z = 1
if(y==8||z==8){console.log("uno dei due valori è 8")} else{console.log("nessuno dei due è 8")}
if(y+z==8||y-z==8){console.log("la somma/sottrazione è 8")} else{console.log("la somma/sottrazione non è 8")}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart=30
if(totalShoppingCart>50){console.log("spedizione gratuita")} else{console.log("costo spedizione 10")}
if(totalShoppingCart>50){console.log(totalShoppingCart)} else {console.log(totalShoppingCart+10)}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let day= new Date("3/4/2024")
const SCONTO= "3/4/2024"
if((day=SCONTO)&& (totalShoppingCart>50)) {console.log(totalShoppingCart*0.8)}
if((day=SCONTO)&&(totalShoppingCart<50)){console.log((totalShoppingCart+10)*0.8)}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let n1 = 6
let n2 = 14
let n3 = 10

if (n1 >= n2) {
  if (n3 >= n1) {
    console.log(n3, n1, n2)
  } else {
    if (n3 >= n2) {
      console.log(n1, n3, n2)
    } else {
      console.log(n1, n2, n3)
    }
  }
} else {
  if (n3 >= n2) {
    console.log(n3, n2, n1)
  } else {
    if (n3 >= n1) {
      console.log(n2, n3, n1)
    } else {
      console.log(n2, n1, n3)
    }
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
var testo = '3'

if (typeof testo === 'number') {
  console.log('è un numero!')
} else {
  console.log('non è un numero!')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var numero = 15;

if (numero % 2 === 0) {
	console.log(numero + " è un numero pari.");
} else {
	console.log(numero + " è un numero dispari.");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 3
  if ((val < 10)&&(val>5)) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city="Toronto"
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete(me.lastName)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/ 
let myArray1 = []
myArray1.push(1)
myArray1.push(2)
myArray1.push(3)
myArray1.push(4)
myArray1.push(5)
myArray1.push(6)
myArray1.push(7)
myArray1.push(8)
myArray1.push(9)
myArray1.push(10)
console.log(myArray1)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
myArray1[9] = 100
console.log(myArray1)

/* SCRIVI QUI LA TUA RISPOSTA */
