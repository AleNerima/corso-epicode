//var, func
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  var numPocket = [];//1-90
  var extractedN = [];
  const value = document.querySelector(".value");
  const extraction = document.querySelector(".extraction");
  const extracted = document.querySelector(".extracted");
  const restart = document.querySelector(".rigiocare");
  const plus = document.querySelector(".plus");
  const less = document.querySelector(".less");
  const casto = document.querySelector(".betN .bet input");
  let table = [];
  
  //init
  //init table
  function initExtracted(){
    var html = "";
    for(let i=0; i<3; i++){
      for(let j=0; j<2; j++){
        html += '<table class="cartella">';
        for(let l=0; l<3; l++){
          html += '<tr class="row">';
          for(let t=0; t<5; t++){
            var n;
            if(j<1){
              n = (((t+1) + l*10 + i*30)<10) ? '0'+((t+1) + l*10 + i*30) : (t+1) + l*10 + i*30;
            }
            else{
              n = (((t+6) + l*10 + i*30)<10) ? '0'+((t+6) + l*10 + i*30) : (t+6) + l*10 + i*30;
            }
            html += '<th class="n" id="'+ n +'">'+n+'</th>'
          }
          html += '</tr>'
        }
      }
      html += '</table>';
    }
    extracted.innerHTML = html;
  }
  
  //init game
  function initGame(){
    $(".case").css("background","#0000");
    $(".value").html("00");
    extraction.innerHTML = "0";
    initExtracted();
    for(let i=0; i<90; i++){
      if(i<9){
        numPocket[i] = "0"+(i+1);
      }
      else{
        numPocket[i] = i+1;
      }
    }
  }
  initGame();
  
  //fxs
  //shake fx
  function shake(){
    for(let i=numPocket.length; i>0; i--){
      var randN = rand(0,numPocket.length);
      var temp = numPocket[randN];
      numPocket[randN] = numPocket[i];
      numPocket[i] = temp;
    }
    var filtered = numPocket.filter(x => x !== undefined);
    numPocket = filtered;
  }
  
  //extraction fx
  function extract(){
    var randN = rand(0,numPocket.length);
    extractedN[extractedN.length-1] = numPocket[randN];
    extraction.innerHTML = extractedN[extractedN.length-1];
    var removedNArray = numPocket.filter(x => x !== extractedN[extractedN.length-1]);
    numPocket = removedNArray;
  }
  
  //extracted update fx
  function updateExtracted(){
    const extrN = document.getElementById(extractedN[extractedN.length-1]);
    extrN.className += " extractedN";
  }
  
  //drop bets
  var circleColor = $(".circle").css("border-color");
  $(".bets").click(function(){
    $(this).parent().css("background-color",($(this).parent().css("background-color") == circleColor) ? "#0000" : circleColor);
    $(this).css("border-color",($(this).css("border-color") == circleColor) ? "#0000" : circleColor);
  });
  
  //extraction click
  extraction.addEventListener('click', () => {
    if(numPocket.length > 0){
      extract();
      updateExtracted();
    }
    else{
      extraction.innerHTML = "sacchetto vuoto";
    }
  });
  
  //restart click
  restart.addEventListener("click", () => {
    initGame();
  });