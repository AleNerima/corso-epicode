/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let removePriEle= pets.shift();
pets.push(removePriEle);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]



for(let i=0; i<cars.length; i++){
  let carsplate=cars[i];
  carsplate.licensePlate=""
}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let macchina= {
  brand: 'Volkswagen',
  model: 'Berlina',
  color: 'white',
  trims: ['life','r-line'],
  licensePlate: "",         //aggiungo license plate a mano poichè trovandosi al di sotto del ciclo for, la proprietà non viene aggiunta in automatico.
  }
cars.push(macchina)

for(let i=0; i<cars.length; i++){
  let remove=cars[i];
  remove.trims.pop();  
}
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i=0; i<cars.length; i++){
  let elemento1=cars[i];
  let trims1=elemento1.trims.shift();
  justTrims.push(trims1);
}

console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i=0; i<cars.length; i++){
  let colori=cars[i];  
  if(colori.color.charAt(0)=== 'b') {console.log('Fizz')} else {console.log('Buzz')}
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i=0
while(numericArray[i]!= 66){
  console.log(numericArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd',]
let letterenumeri=[]
for(let i=0;i<charactersArray.length;i++){
  switch(charactersArray[i]){
    case 'a': letterenumeri.push(1)
    break;
    case 'b': letterenumeri.push(2)
    break;
    case 'c': letterenumeri.push(3)
    break;
    case 'd': letterenumeri.push(4)
    break;
    case 'e': letterenumeri.push(5)
    break;
    case 'f': letterenumeri.push(6)
    break;
    case 'g': letterenumeri.push(7)
    break;
    case 'h': letterenumeri.push(8)
    break;
    case 'i': letterenumeri.push(9)
    break;
    case 'l': letterenumeri.push(10)
    break;
    case 'm': letterenumeri.push(11)
    break;
    case 'n': letterenumeri.push(12)
    break;
    case 'o': letterenumeri.push(13)
    break;
    case 'p': letterenumeri.push(14)
    break;
    case 'q': letterenumeri.push(15)
    break;
    case 'r': letterenumeri.push(16)
    break;
    case 's': letterenumeri.push(17)
    break;
    case 't': letterenumeri.push(18)
    break;
    case 'u': letterenumeri.push(19)
    break;
    case 'v': letterenumeri.push(20)
    break;
    case 'z': letterenumeri.push(21)
    break;
  };
   
}
console.log(letterenumeri)

