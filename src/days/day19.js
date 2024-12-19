/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y 
para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, 
las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
*/

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    
    let boxes = [10, 5, 2, 1];
    let result = '';
    let giftBoxes = []
    
    let remainingWeight = weight;
    for (let box of boxes) {
        let count = Math.floor(remainingWeight / box);
        for (let i = 0; i < count; i++) {
            giftBoxes.push(box);
        }
        remainingWeight = remainingWeight % box;
    }

    giftBoxes.sort((a, b) => a - b);

    for (let i = 0; i < giftBoxes.length; i++) {
        let box = giftBoxes[i];
        let boxRepresentation = boxRepresentations[box];
        if (i === 0) {
            result = boxRepresentation.join('\n') + '\n';
        } else {
            console.log(giftBoxes[i-1])
            let prevBox = boxRepresentations[giftBoxes[i - 1]];
            let prevLength = prevBox[0].length;
            console.log(prevBox)
            console.log(prevBox[0].length)
            let newBox = [...boxRepresentation];
            newBox[0] = newBox[0].slice(prevLength);
            result = result.slice(0, -1) + newBox.map(line => line.trim()).join('\n') + '\n';
        }
    }
    
    result = result.slice(0, -1)

    return result;
}

// console.log(distributeWeight(1))
// // Devuelve:
// //  _
// // |_|

// console.log(distributeWeight(2))
// // Devuelve:
// //  ___
// // |___|

// console.log(distributeWeight(3))
// // Devuelve:
// //  _
// // |_|_
// // |___|

// console.log(distributeWeight(4))
// // Devuelve:
// //  ___
// // |___|
// // |___|

// console.log(distributeWeight(5))
// // Devuelve:
// //  _____
// // |     |
// // |_____|

// console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
        
console.log(distributeWeight(18))
