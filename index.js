// MODULOS
const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs')

// VARIABLES DE LA HISTORIA
const personaje = "Vaquita";
const edad = Math.floor(Math.random() * 100);
const viajeEnElTiempo = (Math.floor(Math.random() * 10));
const villano = "Suegra";
const lugar = "Ningún lugar";
const hobby = "Programar";

fs.readFile('personajes.txt', 'utf-8', function (err, contenido) {
  if (err) {
    throw err; //detiene la ejecución del programa e imprime en consola el mensaje
  }
  const personajes = contenido.split(',');
  const posicionPersonaje = Math.floor(Math.random() * personajes.length)
  const personajeRandom = personajes[posicionPersonaje];

  const historiaCompleta = juntarHistoria(personajeRandom);

  // ESCRIBIR HISTORIA
  console.log(historiaCompleta);
  console.log(personajeRandom);

  //  CREAR UN NUEVO ARCHIVO CON LA HISTORIA COMPLETA
  fs.writeFile('historia.txt', historiaCompleta, function (err) {
    if (err) {
      throw err;
    }
  });
});

// PARTES DE LA HISTORIA
function juntarHistoria(personaje) {
  const introHistoria = intro.historia(personaje, edad, lugar);
  const nudoHistoria = nudo.nudo(personaje,edad,villano,lugar,hobby);
  const finalHistoria = final.historia(personaje, edad, viajeEnElTiempo, villano, lugar, hobby);

  const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;
  
  return historiaCompleta;
}

// DIBUJO DE LA VACA
//console.log(nudo.nudo(personaje,edad,villano,lugar,hobby));
console.log(cowsay.say({
  text : 'hola',
  e : "Xo",
  T : "v "
}));

// console.log(final.historia(personaje, edad, viajeEnElTiempo, villano, lugar, hobby));

// Math.round();
// Math.floor();
// Math.ceil();
