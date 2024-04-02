/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In primo luogo i datype possono essere divisi in due gruppi fondamentali: il primo gruppo sono i cosidetti "dati primitivi", il secondo gruppo è formato dai "dati complessi".
All'interno dei "dati primitivi" troviamo 5 tipi di dati principali.
1 Numeri = i numeri sono dati numerici e vengono iseriti in una variabile immediatamente dopo l'= (ricordare di non mettere gli apici altrimenti il dato diverrà di tipo stringa)
2 stringa = i dati di tipo stringa sono delle vere e proprie stringhe di testo e vengono scritte dopo l'= ma questa volta la stringa di testo deve essere racchiusa in doppi apici o apice singolo
3 valori booleani = un valore booleano rappresenta un valore di verità infatti gli unici valori che questo dato può prendere sono due True o False 
4 null = Il valore null rappresenta l'assenza di qualsiasi valore dell'oggetto e ciò viene fatto intenzionalmente
5 undefined = un dato indefinito si viene a creare quando non viene specificato il valore della variabile.

del secondo gruppo dei dati complessi fanno parte gli oggetti.
Gli oggetti in JS sono entità più complesse delle variabili, solitamente sono costituiti dall'unione di più variabili.*/


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var myName="Alessandro";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var y= 12+20;
console.log(y);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var myName= "Polioni";
console.log(myName);
/*const Z= 2;
Z=3;
console.log(Z);*/
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 var sottrazione= x-4;
 console.log(sottrazione)



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 ="john";
var name2 = "John";
var minuscolo= name2.toLowerCase();
console.log(minuscolo)
alert(name1 === name2)
alert(name1=== minuscolo)
console.log(name1==name2)
console.log(name1==minuscolo)