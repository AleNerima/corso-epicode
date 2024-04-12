/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum= 10+20;
console.log('esercizioA',sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random= Math.floor(Math.random() * 21);
console.log('eserczioB',random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me={
  name:'Alessandro',
  surname: 'Polioni',
  age:29,
};

console.log('esercizioC', me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/*****oppure anche ********/

delete me['age'];

console.log('esercizioD', me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills=['javascript', 'HTML','CSS'];

console.log('esercizioE', me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('PHP')

console.log('esercizioF', me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()

console.log('esercizioG', me)

// Funzioni
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(1 + Math.random() * 6);
}
const mioDado= dice();
console.log('esercizio1', mioDado)


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(x,y){
  let comparazione=0;
  if(y>x){comparazione=y} else if (x>y) { comparazione=x} else {comparazione='i numeri sono uguali'}; 
  return comparazione
}
console.log('esercizio2',whoIsBigger(9,3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(inputString) {
  return inputString.split(" ");
}
const fraseSpezzata= splitMe("I love coding");
console.log('esercizio3', fraseSpezzata)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa,booleano){
  if(booleano) { return stringa.substring(1);} else { 
    return stringa.substring(0,stringa.length-1)};
};

let stringa_1='javascript';
console.log('esercizio4_casoVero', deleteOne(stringa_1,true));
console.log('esercizio4_casoFalso', deleteOne(stringa_1,false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters2(testo2){
  let testoSenzaNumeri='';
  for(let i=0; i<testo2.length;i++){
    if(isNaN(testo2[i])){testoSenzaNumeri+=testo2[i]};
  };
  return testoSenzaNumeri;
}
let frase_2='ho 34 cani';
console.log('esercizio5',onlyLetters2(frase_2))

/* soluzione alternativa esercizio 5*/

function onlyLetters(testo){
  return testo.replace(/[0-9]/g, '');
}
let frase= 'ho un cesto di frutta con 16 mele'
console.log('esercizio5_alternativo',onlyLetters(frase))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringaEmail) {
  let contaSimboloChiocciola = 0;
  for (let i = 0; i < stringaEmail.length; i++) {
    if (stringaEmail[i] === '@') {
      contaSimboloChiocciola++;
    }
  }
  return contaSimboloChiocciola === 1;
}
let email_1= 'alessandr@gmail.com'
let email_2= 'alessandroògmail.com'
console.log('esercizio6', isThisAnEmail(email_1));
console.log('esercizio6_controprova',isThisAnEmail(email_2));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const giorniSettimana= ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const oggi = new Date().getDay();
  return giorniSettimana[oggi];
}

let giornoCorrente = whatDayIsIt();
console.log('esercizio7',giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numero) {
  let valori = [];
  let somma = 0;
  for (let i = 0; i < numero; i++) {
    let risultato = dice();
    valori.push(risultato);
    somma += risultato;
  }
  return {
    somma: somma,
    valori: valori
  };
};

let risultatofinale = rollTheDices(3);
console.log('esercizio8',risultatofinale);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  const dataIniziale = new Date(data);
  const dataCorrente = new Date();
  const differenzaInMillisecondi = dataCorrente - dataIniziale;
  const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
  const giorniTrascorsi = Math.floor(differenzaInMillisecondi / millisecondiInUnGiorno);
  return giorniTrascorsi;}

const dataDiPartenza = '2024-04-01'; // formato 'YYYY-MM-DD'
const giorniTrascorsi = howManyDays(dataDiPartenza);
console.log('esercizio9',giorniTrascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const giornoCorrente = new Date();
  const compleanno = new Date('1995-04-10'); // Inserisci la tua data di compleanno nel formato 'YYYY-MM-DD'
  return (giornoCorrente.getMonth() === compleanno.getMonth() && giornoCorrente.getDate() === compleanno.getDate());
}


const ilMioCompleanno = isTodayMyBirthday();
console.log('esercizio10',ilMioCompleanno);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, prop) {
  const nuovOgg= { ...oggetto };
  delete nuovOgg[prop];
  return nuovOgg;
}

const oggettoIniziale = { nome: 'Alessandro', cognome: 'Polioni', anni: 29 };
const nuovoOggetto = deleteProp(oggettoIniziale, 'cognome');
console.log('esercizio11',nuovoOggetto)

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  if (movies.length === 0) {
    return "Nessun film nella lista";
  };
  return movies.reduce((anno, annoConfronto) => (anno.year > annoConfronto.year) ? anno : annoConfronto);
}
const filmPiuRecente = newestMovie(movies);
console.log('esercizio12',filmPiuRecente);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {  
  return movies.length;
}

const numeroDeiFilm = countMovies(movies);
console.log('esercizio13', numeroDeiFilm)

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  return movies.map(movie => movie.Year);
}
const arrayAnni= onlyTheYears(movies);
console.log('esercizio14', arrayAnni);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  const filmUltimoMillennio = movies.filter(movie => {
    const anno = parseInt(movie.Year);
    return anno >= 2000 && anno <= 3000;
  });
  return filmUltimoMillennio;
}

const filmUltimoMillennio = onlyInLastMillennium(movies);
console.log('esercizio15', filmUltimoMillennio)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  const somma_anni= movies.reduce((totale, movie) => totale + parseInt(movie.Year), 0);
  return somma_anni;
}
const totaleAnni = sumAllTheYears(movies);
console.log('esercizio16', totaleAnni)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(movies, stringa_3) {
  const filmCorrispondente = movies.filter(movie => movie.Title.toLowerCase().includes(stringa_3.toLowerCase()));
  return filmCorrispondente;
}

const stringaCercata = "Avengers"; // mi aspetto di trovare 4 elementi che contengano questa stringa.
const filmCorrispondente = searchByTitle(movies, stringaCercata);
console.log('esercizio17', filmCorrispondente);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies, stringa_4) {
  const corrispondeTitolo = movies.filter(movie => movie.Title.toLowerCase().includes(stringa_4.toLowerCase()));
  const nonCorrispondeTitolo = movies.filter(movie => !movie.Title.toLowerCase().includes(stringa_4.toLowerCase()));

  return { corrispondeTitolo, nonCorrispondeTitolo }; // li inserisco in un oggetto diviso in due array.
}

const stringaCercata_1= "Avengers"; // La stringa da cercare
const filmDivisi = searchAndDivide(movies, stringaCercata_1);
console.log('esercizio18', filmDivisi);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(movies, indice) {
  const nuovoArray_film = movies.filter((movie, i) => i !== indice);
  return nuovoArray_film;
}

const posizioneDaRimuovere = 1; 
const arrayAggiornato = removeIndex(movies, posizioneDaRimuovere);
console.log('esercizio19', arrayAggiornato);





// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let elementoId= document.getElementById('container')
/*oppure*/
let elementoid1= document.querySelector('#container')
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let cellaTabella= document.getElementsByTagName('td')
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTestoTagTD() {
  const celle = document.getElementsByTagName('td'); 
  for (let i = 0; i < celle.length; i++) {
    console.log(celle[i].textContent); 
  }
}
/*richiamo la funzione per stampare il testo*/
stampaTestoTagTD();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function aggiungiSfondoRossoAiLink() {
  const linkElements = document.querySelectorAll('a'); // mettiamo caso tutti i tag <a> avessero classe .link, potrei selezionare document.querySelectorAll('.link')
  linkElements.forEach(link => {
    link.style.backgroundColor = 'red';})
}

/*richiamo la funzione*/
aggiungiSfondoRossoAiLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiElementoALista() {
  const myList = document.getElementById('myList'); 
  const nuovoElemento = document.createElement('li'); 
  nuovoElemento.textContent = 'Nuovo elemento';
  myList.appendChild(nuovoElemento); 
}

/*richiamo la funzione*/

aggiungiElementoALista();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  const myList = document.getElementById('myList'); 
  myList.innerHTML = ''; 
}

/*richiamo la funzione*/

svuotaLista();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClasseATagTR() {
  const elementiTr = document.getElementsByTagName('tr'); // Seleziona tutti gli elementi <tr>

  for (let i = 0; i < elementiTr.length; i++) {
    elementiTr[i].classList.add('test'); // Aggiunge la classe "test" a ciascun elemento <tr>
  }
}

/*richiamo la funzione*/

aggiungiClasseATagTR()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(altezza) {
  for (let i = 1; i <= altezza; i++) {
    let riga = '';
    for (let j = 1; j <= i; j++) {
      riga += '*';
    }
    console.log('esercizio27',riga);
  }
}

/*richiamo funzione*/
halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(altezza_1) {
  for (let i = 0; i < altezza_1; i++) {
    let riga_1 = ' '.repeat(altezza_1 - i - 1) + '*'.repeat(2 * i + 1);
    console.log('esercizio28',riga_1);
  }
}

/*richiamo funzione*/
tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {      // i numeri non primi hanno almeno un divisore compreso tra 2 e la loro radice quadrata 
    if (x % i === 0) {                           // se ottengo resto 0 significa che il numero non è primo quindi false
      return false;
    }
  }
  return true;                                  // se tra i divisori compresi tra due e radice quadrata del numero non c'e nessun numero escluso il numero stesso e 1 che da resto zero allora il numero sarà primo. 
}


console.log('esercizio29_caso1_numeroprimo',isItPrime(7));  
console.log('esercizio29_caso2_nonPrimo',isItPrime(12));


