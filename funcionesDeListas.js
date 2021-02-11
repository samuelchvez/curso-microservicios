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


// Operacion Filter
const adults = familia.filter(
  function(familiar) {
    return familiar.age >= 18;
  }
);

console.log("adults", adults);


const avgAge = familia.reduce(
  function(acc, familiar) {
    return acc + familiar.age;
  },
  0
) / familia.length;


console.log("avgAge", avgAge);

