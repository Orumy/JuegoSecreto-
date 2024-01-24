
/*
let parrafo = document.querySelector('p');// asigna  texto a elementos dentro del html 
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos =1;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //crea una variable y le asigna un selector  de objeto  con  etiqueta "h1"
    elementoHTML.innerHTML = texto;// con esta llamada podemos definirle un titulo a este elemento, los elementos que ya no son  palabras en texto , se dejan sin  
    return;
}
function verificarIntento(){// Crea una funcion 
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  /* console.log(typeof(numeroDeUsuario));
   console.log(numeroDeUsuario);
  */ console.log(numeroSecreto);
   /*console.log(typeof(numeroSecreto));*/
   //console.log(numeroDeUsuario == numeroSecreto); comparacion booleana
 //  console.log(numeroDeUsuario === numeroSecreto);
 console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
         asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);//template strings 
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else{
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p', 'El numerp es menor ');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();

    }
   //alert('click desde el boton function');
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;// genera un numero pseudoaleatorio
    //return numeroSecreto;
    // si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles' );
    }else {

    
    // si el numero genrado esta incluido en la lista

   if(listaNumeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto;
   }  else {
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
   limpiarCaja();   // limpiar caja
   condicionesIniciales(); //mostrar mensaje de inicio 
     // generar el numero aleatorio 
   // inicar intentos 
   // deshabilitar boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', true);
} 
function limpiarCaja(){
   // let valorCaja = document.querySelector('#valorUsuario');
   document.querySelector('#valorUsuario').value = ' ';
   //valorCaja.value =' ';// limpia el espacio de la caja 
}
 condicionesIniciales();