/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.
*/
/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let value = 0
    let index = 0
    const stack = []
    let total = 0;
    while (index < code.length) {
        const instruction = code[index]
        if (instruction === '>') {
            index++
        } else if (instruction === '+') {
            value++
            index++
        } else if (instruction === '-') {
            value--
            index++
        } else if (instruction === '[') {
            stack.push(index)
            index++
        } else if (instruction === ']') {
            if (value === 0) {
                stack.pop()
                index++
            } else {
                if (stack.length > 0) {
                    index = stack[stack.length - 1]
                } else {
                    index++
                }
            }
        } else if (instruction === '{') {
            stack.push(index)
            index++
            if(value === 0){
                index = code.indexOf('}', index)
                stack.pop()
            }
        } else if (instruction === '}') {
            if (value === 0) {
                index++
            } else {
                stack.pop()
                index++
            }
        }
        total++;
        if(total > 1000){
            break;
        }
    }
    return value
}

// console.log(execute('+++')) // 3
// console.log(execute('+--')) // -1
// console.log(execute('>+++[-]')) // 0
// console.log(execute('>>>+{++}')) // 3
// console.log(execute('+{[-]+}+')) // 2
// console.log(execute('{+}{+}{+}')) // 0
// console.log(execute('------[+]++')) // 2
// console.log(execute('-[++{-}]+{++++}')) // 5
console.log(execute('{>++>++}')) // 0
    