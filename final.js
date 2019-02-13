const constantes = require('./constantes');

module.exports = {
  historia: function() {
    // if(edad > 18 && edad < 80) {
      return `${constantes.personaje} viajó en el tiempo ${constantes.viajeEnElTiempo}
      años al pasado y ahora tenía ${constantes.edad - constantes.viajeEnElTiempo} años,
      pero ahora sabía que su felicidad en ${constantes.lugar} no dependía de otros.`
    // }
    // else if(edad > 80) {
    //   return `${personaje} viajó en el tiempo ${viajeEnElTiempo}
    //   años al futuro y ahora tenía ${edad - viajeEnElTiempo}
    //   años y se dio cuenta de que lograría ser feliz a pesar
    //   de que su ${villano} le había causado problemas.`
    // } else {
    //   return `${personaje} tenía ${edad} años y vivió su
    //   presente día a día, esforzándosey se esforzó por
    //   ser feliz en ${lugar}.`
    // }
  }
}
//comentario
