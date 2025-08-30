console.log('Hola desde js'); /*Muestra el mensaje por consola*/
console.error('ok 2'); /*indica os errores de consola ambos datos son string y no hay diferencia entre las comillas simples y dobles*/
console.log(`ok 3`); /*concate variables*/
/**
 * Bloque
 */
//Linea
/**
 * Variables: var let const (Definir variables)
 */

let nombre ="Pepe"; //Definir string
let apellido ="Perez";

const nombreCompleto= `${nombre} ${apellido}`; //concate, el const una vez asignado el valor no cambia o constantes
//nombreComplete = nombre + ''+apellido; //otra forma de concatenacion
alert(nombreCompleto);

let edad = 25;//let define una variable que se le puede cambiar su valor
let salario= 12.5;
let mayorEdad = true; //false
let a = null;
let b = undefined; //no tiene un valor exacto
console.log(apellido);
let numeros = []; //Definir arrylist no tiene limite
numeros = new Array(12); //Definir el tamaño del arraylist
numeros = [1,2,3,4,5,6,7,8,9,10]; //crea el arraylist y define los elementos
let otro = ['asdf', 12, 12.5, true, [1,2,3], null];
let persona = {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 30,
    mayorEdad: true,
    jobs: []
}; //Crear objetos en java
console.log(numeros[1]);//posicion
console.log(persona.nombre);//el nombre del objeto
persona.nombre = 'Ana Maria';
console.log(persona.nombre, persona.apellido);

//Ciclos, definir cuales son pares e impares
console.log('Ciclos---------------');
console.log('for-------------');
for(let index=0;index<numeros.length; index++){
    const mod = numeros[index] % 2; 
    if(mod == 0) {
        console.log(numeros[index],'par');
    }else{
        console.log(numeros[index], 'impar');
    }
}

console.log('for in-------------');//Recorre todo los elementos existentes en un arraylist, captura la posicion
for(let index in numeros){
    const mod = numeros[index] % 2; 
    if(mod == 0) {
        console.log(numeros[index],'par');
    }else{
        console.log(numeros[index], 'impar');
    }
}

console.log('for of-------------');//captura el valor del elemento
for(let numero of numeros){
    const mod = numero % 2; 
    if(mod == 0) {
        console.log(numero,'par');
    }else{
        console.log(numero, 'impar');
    }
}

console.log('while------------------------');
let index = 0;
while (index < numeros.length) {
    const mod = numeros [index] % 2;
    if (mod == 0){
        console.log(numeros[index], 'par');
    }else{
        console.log(numeros[index, 'impar']);
    }
    index++;
}

console.log('do while--------------------');

index = 0;
do {
    const mod = numeros[index] % 2;
    if (mod==0) {
        console.log(numeros[index], 'par');
    }else{
        console.log(numeros[index], 'impar');
    }
    index++
}while (index < numeros.length);

console.log('foreach-----------------');

numeros.forEach((val, pos) => {
    //console.log(pos, ":", val);
    const mod = val % 2;
    if (mod==0) {
        console.log(numeros[index], 'par');
    }else{
        console.log(numeros[index], 'impar');
    }
});

if (numeros[0] < 0){
    //codigo...
}else if (numeros[0]<5){
    //codigo...
}else{
    //codigo...
}

/**
 * && and
 * || or
 * ! negacion
 * != diferente
 * > mayor
 * >= mayor o igual
 * < menor
 * <= menor o igual
 * == igual
 * ===igual valor y el tipo de dato
 */
console.log(1=='1');
console.log(1==='1');

const categoria = 'a';
switch (categoria){
    case 'a':
        //codigo.....
        break;
    case 'b' :
        //codigo.....
        break;
    case 'c' : 
        //codigo.....
        break;
}