/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, 
representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.
*/

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let inBox = false;
    for (let i = 1; i < box.length - 1; i++) {
        for (let j = 1; j < box[i].length - 1; j++) {
            if (box[i][j] === "*") {
                inBox = true;
            }
        }
    }
    return inBox;
}

inBox([
    "###",
    "#*#",
    "###"
  ]) // ➞ true
  
  inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ]) // ➞ true
  
  inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ]) // ➞ false
  
  inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ]) // ➞ false