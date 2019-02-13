module.exports = {
    nudo:function (personaje, edad, villano, lugar, hobby) {
        if (edad > 20 && edad < 50) {
            return `Durante la noche ${personaje} tuvo un sueño donde la secuestraba ${villano} en una nave espacial. Ahí la forzaban a ${hobby} por horas y horas mientras sufría un gran dolor.`
        } else if (edad > 50) {
            return `Algunas veces, ${personaje} debia dejar de ${hobby} porque en ${lugar} tenían prohibido hacerlo.`
        }
        return `Como ${personaje} solo tiene ${edad} años, entonces ${villano} le impedía ${hobby}, y eso le molestaba mucho`
    }
}
