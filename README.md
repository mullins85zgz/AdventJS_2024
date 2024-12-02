# AdventJS 2024

AdventaJS de MiduDEV
Directorio de retos `src/days`

## Project Structure

```
js-challenges
├── src
│   ├── index.js          # Entry point of the application
│   └── days
│       └── day01.js # Implementation of the first challenge
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd js-challenges
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the challenges:
   ```
   node src/index.js
   ```

## Challenges

- **Day 1**: Details about the first challenge will be provided in `src/days/day01.js'

Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.


- **Day 2**: Details about the first challenge will be provided in `src/days/day102.js'
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
