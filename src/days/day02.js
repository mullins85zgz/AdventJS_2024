/*

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

*/


function createFrame(names) {

    //Paso 1: Encontrar el nombre más largo y la longitud del marco
    let max = 0
    names.forEach(name => {
        if (name.length > max) {
        max = name.length
        }
    })
    
    //Paso 2: Crear el marco
    let width = max + 4
    let frame = '*'.repeat(width) + '\n'
    
    // Paso 3: Añadir los nombres al marco
    names.forEach(name => {
        let spaces = ' '.repeat(max - name.length)
        frame += `* ${name}${spaces} *\n`
    })
    
    frame += '*'.repeat(width)
    
    return(frame)
}

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(['midu'])

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(['a', 'bb', 'ccc', 'dddd'])