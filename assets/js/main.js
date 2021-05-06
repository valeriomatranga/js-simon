//un allert espone 5 numeri generati casualmente
function numeriGenerati(min,max){
    return Math.floor(Math.random()*(max - min) + min);
}

var numeriPc = [];
var numero;

while(numeriPc.length < 5){

    numero = numeriGenerati(1,100);

    if(!numeriPc.includes (numero)){
        numeriPc.push(numero);
    }
}
console.log(numeriPc);
alert("I numeri generati sono: " + numeriPc);


//dopo la generazione dei numeri parte un timer di 30 secondi
var tempo = 6;

var timer = setInterval(function(){

    if(tempo === 0){
        clearInterval(timer);
    }else{
        tempo--;
    }

    document.getElementById("tempo").innerHTML = "tempo rimanente:" + tempo;
}, 1000);

    

//alla fine dei 30 secondi chiedere di inserire i numeri generati uno alla volta
var numeriUtente = [];
var sceltaNumeri;

setTimeout(function(){

    sceltaNumeri = prompt("Inserisci i numeri visti in precedenza!");
    
    while(numeriUtente.length < 5){

        if(!numeriUtente.includes(sceltaNumeri)){
            numeriUtente.push(sceltaNumeri);
        }
        
    }
}, 6500);
console.log(numeriUtente);

//verificare i numeri inseriti da user se corrispondono a quelli generati casualmente
