module.exports = {
  historia: function(personaje, lugar, edad) {
    if(edad - viajeEnElTiempo) {
      return `${personaje} viajó en el tiempo ${viajeEnElTiempo}
      años al pasado y
      ahora tenía ${edad} años, pero ahora sabía
      que su felicidad en ${lugar} no dependía de otros.`
    }
    else if(edad + viajeEnElTiempo) {
      return `${personaje} viajó en el tiempo ${viajeEnElTiempo}
      años al futuro y
      ahora tenía ${edad} años y se dio cuenta de que
      lograría ser feliz a pesar de que su ${villano}
      le había causado problemas.`
    } else {
      return `${personaje} tenía ${edad} años y vivió su
      presente día a día, esforzándosey se esforzó por
      ser feliz en ${lugar}.`
    }
  }
}
//comentario
