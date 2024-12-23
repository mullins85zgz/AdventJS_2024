/*
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. 
Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n
(donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1
*/
/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const n = Math.max(...nums)
    const allNumbers = Array.from({ length: n }, (_, i) => i + 1)
    return allNumbers.filter(num => !nums.includes(num))
}  

console.log(findMissingNumbers([1, 2, 4, 6])) // [3, 5]
console.log(findMissingNumbers([4, 8, 7, 2])) // [1, 3, 5, 6]
console.log(findMissingNumbers([3, 2, 1, 1])) // []
console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])) // [4]
