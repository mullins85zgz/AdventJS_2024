/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, 
debes devolver una lista con los tamaños disponibles después de emparejar las botas.
*/

function organizeShoes(shoes) {
    //Recorre el arreglo de zapatos y almacena en un objeto por cada talla, cuantas botas izquierdas y derechas hay
    const pairedShoes = shoes.reduce((acc, shoe) => {
        if (!acc[shoe.size]) {
            acc[shoe.size] = { I: 0, R: 0 }
        }
        acc[shoe.size][shoe.type]++
        return acc
    }, {})
    

    //Recorre el objeto de botas emparejadas y por cada talla, si hay botas izquierdas y derechas, las empareja
    Object.keys(pairedShoes).forEach(size => {
        if (pairedShoes[size].I && pairedShoes[size].R) {
            const min = Math.min(pairedShoes[size].I, pairedShoes[size].R)
            pairedShoes[size].I = min
            pairedShoes[size].R = min
        }
    }    )


    //Saca de los objetos emparejados, las tallas que tienen botas emparejadas. Si el valor es mas de 1, saca la talla tantas veces como el valor
    const result = Object.keys(pairedShoes).reduce((acc, size) => {
        if (pairedShoes[size].I && pairedShoes[size].R) {
            acc.push(...Array(pairedShoes[size].I).fill(parseInt(size)))
        }
        return acc
    }, [])

    console.log(result)
    return result
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  organizeShoes(shoes)
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  organizeShoes(shoes2)
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  organizeShoes(shoes3)
  // []