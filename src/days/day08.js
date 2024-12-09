/*
¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
*/

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let raceTrack = '';

    for (let i = 0; i < indices.length; i++) {
        let totalEspacios = indices.length - i - 1;
        let track = ' '.repeat(totalEspacios) + '~'.repeat(length);
        if (indices[i] > 0 && indices[i] < length) {
            track = track.substring(0, indices[i]  + totalEspacios) + 'r' + track.substring(indices[i] + 1 + totalEspacios);
        } else if (indices[i] < 0 && length + indices[i] > 0) {
            track = track.substring(0, length + indices[i] + totalEspacios) + 'r' + track.substring(length + indices[i] + 1 + totalEspacios);
        }
        raceTrack += track + ` /${i + 1}`;
        if (i < indices.length - 1) {
            raceTrack += '\n';
        }
    }
    console.log(raceTrack);
    return raceTrack;
}

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/