module.exports = {
  historia: function(personaje, lugar, edad) {
    if(edad > 18 && edad < 80) {
      return `${personaje} vivía una triste
      existencia porque no lograba encontrar
      el amor, llevaba ${edad} años en este mundo,
      y nunca había logrado salir de ${lugar}.`
    }
    else if(edad > 80) {
      return `Después de viajar por el mundo por
      ${edad} años, ${personaje} había encontrado
      la sabiduría suficiente como para saber
      que el secreto de la felicidad es tener una
      vaca mascota.`
    } else {
      return `Había una vez un niño que se llamaba
      ${personaje} y él vivía en ${lugar}.`
    }
  }
}
//comentario
