const familia = [
  {
    firstName: 'Alejandra',
    lastName: 'Arana',
    age: 36
  },
  {
    firstName: 'Vivian',
    lastName: 'Chavez',
    age: 1
  },
  {
    firstName: 'Samuel',
    lastName: 'Chavez',
    age: 31
  },
];

// Operacion MAP
const resultado = familia.map(
  function(familiar) {
    return familiar.lastName;
  }
);

console.log("RESULTADO", resultado);



