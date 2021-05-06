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

    document.getElementById("tempo").innerHTML = "tempo rimanente: " + tempo;
}, 1000);

    

//alla fine dei 30 secondi chiedere di inserire i numeri generati uno alla volta
var numeriUtente = [];
var sceltaNumeri;
var numeriErrati = [];
var i = 0;

setTimeout(function(){

    for(i = 0; i < 5; i++){

        sceltaNumeri = Number(prompt("Inserisci i numeri visti in precedenza!"));

        if(numeriPc.includes(sceltaNumeri)){
            numeriUtente.push(sceltaNumeri);
        }else{
            numeriErrati.push(sceltaNumeri);
        }
        
    }
    console.log(numeriUtente);
    console.log(numeriErrati);
    document.getElementById('numeri_pc').innerHTML = "I numeri da indovinare erano: " + numeriPc;
    document.getElementById('numeri_utente').innerHTML = "I numeri indovinati sono: " + numeriUtente;
    document.getElementById('numeri_errati').innerHTML = "I numeri non corretti sono:" + numeriErrati;
}, 6500);

//verificare i numeri inseriti da user se corrispondono a quelli generati casualmente
