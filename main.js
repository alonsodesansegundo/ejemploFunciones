"use strict"
/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Lucas Alonso
 * @version 1.0 
 */

/**
 * @description sumaArray suma los numeros de una coleccion
 * @param {Array} numeros Coleccion de numeros que queremos sumar
 * @return {Number} La suma de los numeros de la coleccion
 */

function sumaArray(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma = suma + numero
    }
    return suma;
}

let sumaValor = sumaArray3([2, 3]);
console.log(sumaValor)

function sumaArray2(numeros) {
    let suma = 0
    for (let pos in numeros) {
        suma = suma + numeros[pos]
    }
    return suma
}

function sumaArray3(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
    }
    return suma
}