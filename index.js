const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

const personaje = "Vaquita";
const edad = Math.floor(Math.random() * 100);
const villano = "Suegra";
const lugar = "Ningún lugar";
const hobby = "Programar";

console.log(intro.historia(personaje, edad, lugar));

console.log(cowsay.say({
  text : 'hola',
  e : "x-o",
  T : "v "
}));

Math.round();
Math.floor();
Math.ceil();
