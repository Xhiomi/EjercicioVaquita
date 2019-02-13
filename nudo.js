module.exports = {
    nudo:function (personaje, edad, villano, lugar, hobby) {
        if (edad > 20 && edad < 50) {
          return `\nDurante la noche ${personaje} tuvo un\n
sueño donde la secuestraba ${villano} en una\n
nave espacial. Ahí la forzaban a ${hobby} por\n
horas y horas mientras sufría un gran dolor.`
        } else if (edad > 50) {
          return `\nAlgunas veces, ${personaje} debia dejar\n
de ${hobby} porque en ${lugar} tenían prohibido\n
hacerlo.`
        }
        return `\nComo ${personaje} solo tiene ${edad} años,\n
entonces ${villano} le impedía ${hobby}, y eso le\n
molestaba mucho`
    }
}
