//Modulos
var cowsay = require('cowsay');
const fs = require('fs');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const constantes = require('./constantes');

//Variables
let personaje = "Vaquita";
let edad = Math.floor(Math.random() * 100);
let viajeEnElTiempo = (Math.floor(Math.random() * 10));
let villano = "suegra";
let lugar = "Ningún lugar";
let hobby = "programar";


fs.readFile('personajes.txt', 'utf-8', leerArchivo)

function leerArchivo(err, contenido){
  if(err) {
    throw err;
  }


  const personajes = contenido.toUpperCase().split(',');
  const personajesRandom = personajes[Math.floor(Math.random() * (personajes.length))];
  console.log('Personaje random: ' + personajesRandom);
  // console.log(personajes.length);
  // console.log(personajes[personajes.length -1]);
  var historiaCompleta = juntarHistoria(personajesRandom);
  // return historiaCompleta;
  console.log(historiaCompleta);
  // return console.log(historiaCompleta);

  fs.writeFile('historia_final.txt', historiaCompleta, escribirArchivo);
  function escribirArchivo(err){
    if(err) {
      throw err;
    }
  }
}

// Partes de la historia

function juntarHistoria(personaje) {
  const introHistoria = intro.historia(personaje, edad, lugar);
  const nudoHistoria = nudo.nudo(personaje, edad, villano, lugar, hobby);
  const finalHistoria = final.historia(personaje);
  const vaquita = cowsay.say({
    text : 'hola',
    e : "x-o",
    T : "v "
  });
  const historiaCompleta = introHistoria + nudoHistoria + finalHistoria + '\n' + vaquita;
  return historiaCompleta;
  // return console.log(juntarHistoria);
}

// Escribir historia

// Math.round();
// Math.floor();
// Math.ceil();
