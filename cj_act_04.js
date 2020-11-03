const MisNotas = [
    {
        titulo: 'truco de VSCode',
        cuerpo: 'usar snippets para todo'
    },
    {
        titulo: 'Mercadona',
        cuerpo: 'comprar huevos y pan'
    },
    {
        titulo: 'Valorant',
        cuerpo: 'Partido ofical el dia 26 a las 17h'
    },
    {
        titulo: 'EscolaTic Horario',
        cuerpo: 'Lunes-Viernes 09h-14h'
    }

]

/*
/////////////////////////////////////////////////// SOLUCION 1 EJ.1 ///////////////////////////////////////////////////

// realizamos un PRINT de la array iniciañ
MisNotas.forEach(elemento => console.log('ANTES', elemento))

    // añadiendo objeto a la array
    MisNotas.push({titulo: 'Javasript', cuerpo: 'Terminar el ej. de JS'})

// reallizamos un PRINT para ver si el cambio se ha llevado a cabo
MisNotas.forEach(elemento => console.log('DESPUES', elemento))

/////////////////////////////////////////////////// FIN ---- SOLUCION 1 EJ.1 /////////////////////////////////////////////////// */

/*
/////////////////////////////////////////////////// SOLUCION 2 EJ.1 /////////////////////////////////////////////////// 

// Mostramos las notas iniciales
MisNotas.forEach(elemento=> console.log('-antes-', elemento))

// Funcion para añadir objetos dentro de la array
const crearNota = function(lasNotas, tituloNota, cuerpoNota){
     lasNotas.push( { titulo: tituloNota, cuerpo: cuerpoNota } )
        
} 

// Envaiamos a la funcion los datos de los parametros necesarios para la creación del objeto dentro de la array
crearNota(MisNotas, 'Javasript', 'Terminar el ej. de JS');

// Volvemos a leer la array para ver el resultado de la funcion
MisNotas.forEach(elemento => console.log('--DESPUES--', elemento)) 

///////////////////////////////////////////////////  FIN ---- SOLUCION 2 EJ.1 /////////////////////////////////////////////////// */

/*
/////////////////////////////////////////////////// SOLUCION 1 EJ.2 ///////////////////////////////////////////////////

// Mostramos las notas iniciales
MisNotas.forEach(elemento => console.log('-antes-', elemento));

const borrarNota = function (lasNotas, titulo) {

    // localizamos el indice del objeto y comprobamos que el campo titulo coresponda con
    // el parametro 
    let i = lasNotas.findIndex(function (e) { return e.titulo == titulo });
    // si el objeto  existe realizamos procedemos con el proceso, de lo contrario informaremos
    // que el valor buscado no tiene un objeto.
    if (i == -1) {
        console.log('La nota no existe');
    } else {
        lasNotas.splice(i, 1);
    }
}

// Envaiamos a la funcion los datos de los parametros necesarios para la creación del objeto dentro de la array
borrarNota(MisNotas, 'Mercadona');


// Volvemos a leer la array para ver el resultado de la funcion
console.log('---DESPUES---', MisNotas);

///////////////////////////////////////////////////  FIN ---- SOLUCION 1 EJ.2 /////////////////////////////////////////////////// */



/////////////////////////////////////////////////// SOLUCION 1 EJ.3 ///////////////////////////////////////////////////


//console.table('---AnteS---', MisNotas);

const ordenarNotas = function (lasNotas, opcion) {
   

        

    
  
}

ordenarNotas(MisNotas, 'titulo');
//console.log('---DESPUES---', MisNotas);

///////////////////////////////////////////////////  FIN ---- SOLUCION 1 EJ.3 /////////////////////////////////////////////////// */






/////////////////////////////////////////////////// SOLUCION 1 EJ.4 ///////////////////////////////////////////////////

const buscarTextoEnNotas = function (lasNotas) {

}

///////////////////////////////////////////////////  FIN ---- SOLUCION 1 EJ.4 /////////////////////////////////////////////////// */


