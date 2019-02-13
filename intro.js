module.exports = {
  historia: function(personaje, edad, lugar) {
    if(edad > 18 && edad < 80) {
      return `${personaje} vivía  una triste\n
existencia porque no lograba encontrar\n
el amor, llevaba ${edad} años en este mundo,\n
y nunca había logrado salir de ${lugar}.`
    }
    else if(edad > 80) {
      return `Después de viajar por el mundo por\n
${edad} años, ${personaje} había encontrado\n
la sabiduría suficiente como para saber\n
que el secreto de la felicidad es tener una\n
vaca mascota.`
    } else {
      return `Había una vez un niño que se llamaba\n
${personaje} y él vivía en ${lugar}.`
    }
  }
}
//comentario
