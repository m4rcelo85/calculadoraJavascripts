let numeros = document.querySelectorAll("button[ class = 'numero']")
let pantalla = document.querySelector('#pantalla')
let resultado = document.querySelector('.resultado')
let operador = document.querySelectorAll('.operador')
let clear = document.querySelector('.clear')
let valorAnterior = '';
let valorActual = '';
let operacion = '';
let memoria = document.querySelector('.memoria')
let valorMemoria = '';
let opuesto = document.querySelector('.opuesto');
let memoriaRecall = document.querySelector('.memoriaRecall');
let clearError = document.querySelector('.clearError');

for (let i = 0; i < numeros.length; i++) {

    numeros[i].addEventListener('click', () => {
        if(numeros[i].textContent === '.' && !pantalla.innerHTML.includes('.')) {
            pantalla.innerHTML += numeros[i].textContent;
        }else if(numeros[i].textContent != '.'){
            pantalla.innerHTML += numeros[i].textContent;
        }else{
            null;
        }
    })

}

for (const i of operador) {

    i.addEventListener('click', () => {

        valorAnterior =condicionCero( pantalla.innerHTML);
        borrar()
        operacion = i.textContent;

    })

}

resultado.addEventListener('click', () => {
    valorActual = condicionCero( pantalla.innerHTML);

    if (operacion === '/') {
        if (valorAnterior === '') {
            valorAnterior = 0;
        }
        if (valorActual === '' || valorActual === '0') {
            pantalla.innerHTML = 'Error';
            setTimeout(() => {
               alert("No se puede dividir por 0"); 
            }, 3000);
        } else {
            pantalla.innerHTML = dividir(valorAnterior, valorActual);
        }
    }
    if (operacion === 'x') {
        pantalla.innerHTML = multiplicar(valorAnterior, valorActual)
    }
    if (operacion === '-') {
        pantalla.innerHTML = restar(valorAnterior, valorActual)
    }
    if (operacion === '+') {
        pantalla.innerHTML = sumar(valorAnterior, valorActual)
    }

})


clear.addEventListener('click', () => {
    borrar();
    valorMemoria = '';
    memoria.style.backgroundColor = ''
    memoria.style.color = ''
})

memoria.addEventListener('click', () => {
    valorMemoria = pantalla.innerHTML;
    borrar();
    memoria.style.backgroundColor = 'black';
    memoria.style.color = 'white';
})
opuesto.addEventListener('click', () => {
    pantalla.innerHTML = -(pantalla.innerHTML);
})
memoriaRecall.addEventListener('click', () => {
    pantalla.innerHTML = valorMemoria;
})
clearError.addEventListener('click', () => {
    pantalla.innerHTML = '';
})

function sumar(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function dividir(a, b) {
    return parseFloat(a) / parseFloat(b)
}
function multiplicar(a, b) {
    return parseFloat(a) * parseFloat(b);

}
function restar(a, b) {
    return parseFloat(a) - parseFloat(b)
}
function borrar() {
    pantalla.innerHTML = '';

}
function condicionCero(valor){
        if(valor === ''){
             valor = '0'
        }  
        return valor; 
}





