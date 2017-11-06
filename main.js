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

/**
 * @description BuscarAlumno busca un objeto de tipo alumno dentro de una coleccion de objetos, devuelve true si lo encuentra y false si no lo hace
 * @param {Array} listaAlumnos Es una coleccion de objetos (alumnos)
 * @param {Alumno} alumno El alumno que queremos comprobar si está o no
 * @return {Boolean} Devuelve true si lo encuentra, y false si no lo hace
 */
function BuscarAlumno(listaAlumnos, alumno) {
    let encontrado = false
    for (let al of listaAlumnos) {
        if (al.nombre == alumno.nombre &&
            al.apellidos && alumno.apellidos) {
            encontrado = true
        }
    }
    return encontrado
}

let alumnos = [
    {
        nombre: "Pe",
        apellidos: "Rb"
    },
    {
        nombre: "Le",
        apellidos: "La"
    },
    {
        nombre: "Lo",
        apellidos: "La"
    }
];

let alumno = {
    nombre: "dzd",
    apellidos: "fhbhxg"
}
console.log(BuscarAlumno(alumnos,alumno));