/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 
en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha 
dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un 
número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
*/

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let result = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j]) {
          for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
              if (x >= 0 && x < rows && y >= 0 && y < cols && !(x === i && y === j)) {
                result[x][y]++;
              }
            }
          }
        }
      }
    }
    return result;
}

console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]))
  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
  console.log(detectBombs([
    [true, false],
    [false, false]
  ]))
  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
  console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ]))
  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]
    