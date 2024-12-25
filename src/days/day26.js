/*
¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. 
Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. 
Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. 
Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:
*/
/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    const [hoursWorked, minutesWorked, secondsWorked] = timeWorked.split(':').map(Number)
    const [hoursTotal, minutesTotal, secondsTotal] = totalTime.split(':').map(Number)
    const totalSecondsWorked = hoursWorked * 3600 + minutesWorked * 60 + secondsWorked
    const totalSecondsTotal = hoursTotal * 3600 + minutesTotal * 60 + secondsTotal
    const percentage = Math.round((totalSecondsWorked / totalSecondsTotal) * 100)
    return `${percentage}%`
}

console.log(getCompleted('01:00:00', '03:00:00')) // 33%
console.log(getCompleted('02:00:00', '04:00:00')) // 50%
console.log(getCompleted('01:00:00', '01:00:00')) // 100%
console.log(getCompleted('00:10:00', '01:00:00')) // 17%
console.log(getCompleted('01:10:10', '03:30:30')) // 33%
console.log(getCompleted('03:30:30', '05:50:50')) // 60%
    