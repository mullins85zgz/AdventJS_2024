/*

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

*/

/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let x = 0;
    let y = 0;
    let invert = false;
    let lastMove = '';
    let uMovementDone = false;
    let dMovementDone = false;
    let lMovementDone = false;
    let rMovementDone = false;
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        if (move === 'R') {
            if (invert) {
                x--;
                lMovementDone = true;
            } else {
                x++;
                rMovementDone = true;
            }
        } else if (move === 'L') {
            if (invert) {
                x++;
                rMovementDone = true;
            } else {
                x--;
                lMovementDone = true;
            }
        } else if (move === 'U') {
            if (invert) {
                y--;
                dMovementDone = true;
            } else {
                y++;
                uMovementDone = true;
            }
        } else if (move === 'D') {
            if (invert) {
                y++;
                uMovementDone = true;
            } else {
                y--;
                dMovementDone = true;
            }
            dMovementDone = true;
        } else if (move === '*') {
            let nextMove = moves[++i];
                if (nextMove === 'R') {
                    if (invert) {
                        x -= 2;
                        lMovementDone = true;
                    } else {
                        x += 2;
                        rMovementDone = true;
                    }
                } else if (nextMove === 'L') {
                    if (invert) {
                        x += 2;
                        rMovementDone = true;
                    } else {
                        x -= 2;
                        lMovementDone = true;
                    }
                } else if (nextMove === 'U') {
                    if (invert) {
                        y -= 2;
                        dMovementDone = true;
                    } else {
                        y += 2;
                        uMovementDone = true;
                    }
                } else if (nextMove === 'D') {
                    if (invert) {
                        y += 2;
                        uMovementDone = true;
                    } else {
                        y -= 2;
                        dMovementDone = true;
                    }
                }
        } else if (move === '!') {
            invert = !invert;
        } else if (move === '?') {
            let nextMove = moves[++i];
            if (nextMove === 'R' && rMovementDone === false) {
                if (invert) {
                    x--;
                } else {
                    x++;
                }
            } else if (nextMove === 'L' && lMovementDone === false) {
                if (invert) {
                    x++;
                } else {
                    x--;
                }
            } else if (nextMove === 'U' &&  uMovementDone === false) {
                if (invert) {
                    y--;
                } else {
                    y++;
                }
            } else if (nextMove === 'D' &&  dMovementDone === false) {
                if (invert) {
                    y++;
                } else {
                    y--;
                }
            }
        }
        if (move === '*') {
            let nextMove = moves[i];
            lastMove = nextMove;
        }else{
            lastMove = move;
        }

        if(move !== '!' && invert==true){
            invert = false;
        }
    }
    if (x === 0 && y === 0) {
        return true;
    } else {
        return [x, y];
    }


}

// console.log(isRobotBack('R'));     // [1, 0]
// console.log(isRobotBack('RL'));    // true
// console.log(isRobotBack('RLUD'));  // true
// console.log(isRobotBack('*RU'));   // [2, 1]
// console.log(isRobotBack('R*U'));   // [1, 2]
// console.log(isRobotBack('LLL!R')); // [-4, 0]
// console.log(isRobotBack('R?R'));   // [1, 0]
// console.log(isRobotBack('U?D'));   // true
// console.log(isRobotBack('R!L'));   // [2,0]
// console.log(isRobotBack('U!D'));   // [0,2]
// console.log(isRobotBack('R?L'));   // true
// console.log(isRobotBack('U?U'));   // [0,1]
console.log(isRobotBack('*U?U'));  // [0,2]
// console.log(isRobotBack('U?D?U')); // true

// Ejemplos paso a paso:
// console.log(isRobotBack('R!U?U')); // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

// console.log(isRobotBack('UU!U?D')); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'