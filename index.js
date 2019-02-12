const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

const personaje = "Vaquita";
const edad = Math.floor(Math.random() * 100);
const viajeEnElTiempo = (Math.floor(Math.random() * 10));
const villano = "Suegra";
const lugar = "Ningún lugar";
const hobby = "Programar";

console.log(intro.historia(personaje, edad, lugar));
console.log(nudo.nudo(personaje,edad,villano,lugar,hobby));
console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));

console.log(final.historia(personaje, edad, villano, lugar, hobby));

// Math.round();
// Math.floor();
// Math.ceil();
