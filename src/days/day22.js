/*
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. 
Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.
*/
/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = []
    function generateCombinations(size, start, current) {
        if (current.length === size) {
            result.push([...current])
            return
        }
        for (let i = start; i < gifts.length; i++) {
            current.push(gifts[i])
            generateCombinations(size, i + 1, current)
            current.pop()
        }
    }
    for (let i = 1; i <= gifts.length; i++) {
        generateCombinations(i, 0, [])
    }
    return result
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
// ]
      