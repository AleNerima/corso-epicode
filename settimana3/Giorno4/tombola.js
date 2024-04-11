/*genero un array di numeri per il tabellone e, forse le cartelle*/


let numeri = [];

for (let i = 1; i <= 90; i++) {
  numeri.push(i);
}

/*********************************Le mie funzioni *****************************/
  
function maintab(x){
const tabellone = document.getElementById('tabellone')
 for(i=0; i<x; i++){
        const caselleDiv = document.createElement('div');
        caselleDiv.className('caselle');
        const casella= document.createElement('h3')
        casella.innerText= i+1;
        caselleDiv.appendChild(casella)
        tabellone.appendChild(caselleDiv)       
        
    }
}    

/*********************************richiamo funzioni****************************/
maintab(numeri)