const inputBox= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask(){
    if(inputBox.value === '') {
        alert('Devi scrivere qualcosa')
    } else{
        let li= document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement('span'); //aggiungo icona per cancellare task
        span.innerHTML= "\u00d7"; // icona croce
        li.appendChild(span)
        
        inputBox.value=''
    }
}

/*****************aggiungo funzioni per ul*********************/

listContainer.addEventListener("click", function (e){ 
    if(e.target.tagName==="LI"){e.target.classList.toggle("checked")}
    else if(e.target.tagName==="SPAN"){e.target.parentElement.remove()}

}, false);