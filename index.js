const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs')

const personaje = "Vaquita";
const edad = Math.floor(Math.random() * 100);
const viajeEnElTiempo = (Math.floor(Math.random() * 10));
const villano = "Suegra";
const lugar = "Ningún lugar";
const hobby = "Programar";

const introHistoria = intro.historia(personaje, edad, lugar);
const nudoHistoria = nudo.nudo(personaje,edad,villano,lugar,hobby);
const finalHistoria = final.historia(personaje, edad, viajeEnElTiempo, villano, lugar, hobby);

const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;

console.log(historiaCompleta);

//console.log(nudo.nudo(personaje,edad,villano,lugar,hobby));
console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));

console.log(final.historia(personaje, edad, viajeEnElTiempo, villano, lugar, hobby));

// Math.round();
// Math.floor();
// Math.ceil();
