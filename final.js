const constantes = require('./constantes');

module.exports = {
  historia: function(personaje) {
    if(constantes.edad > 18 && constantes.edad < 80) {
      return `\n${personaje} viajó en el tiempo ${constantes.viajeEnElTiempo}\n
años al pasado y ahora tenía ${constantes.edad - constantes.viajeEnElTiempo} años,\n
pero ahora sabía que su felicidad en ${constantes.lugar} no dependía de otros.`
    }
    else if(constantes.edad > 80) {
      return `\n${personaje} viajó en el tiempo ${constantes.viajeEnElTiempo}\n
años al futuro y ahora tenía ${constantes.edad - constantes.viajeEnElTiempo}\n
años y se dio cuenta de que lograría ser feliz a pesar\n
de que su ${constantes.villano} le había causado problemas.`
    } else {
      return `\n${personaje} tenía ${constantes.edad} años y vivió su\n
presente día a día, esforzándosey se esforzó por\n
ser feliz en ${constantes.lugar}.`
    }
  }
}
//comentario
