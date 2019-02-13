var cowsay = require('cowsay');
const fs = require('fs');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const constantes = require('./constantes');

let personaje = "Vaquita";
let edad = Math.floor(Math.random() * 100);
let viajeEnElTiempo = (Math.floor(Math.random() * 10));
let villano = "suegra";
let lugar = "Ningún lugar";
let hobby = "programar";

const introHistoria = intro.historia(personaje, edad, lugar)
const nudoHistoria = nudo.nudo(personaje, edad, villano, lugar, hobby)
const finalHistoria = final.historia()
const historiaCompleta = introHistoria + nudoHistoria + finalHistoria

console.log(historiaCompleta);

console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));

// Math.round();
// Math.floor();
// Math.ceil();
