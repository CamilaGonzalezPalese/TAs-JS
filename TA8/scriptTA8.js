
const people = [
  { name: "Carly", 
    yearOfBirth: 1942, 
    yearOfDeath: 1970 
  }, // Murió a los 28 años
  { name: "Ray", 
    yearOfBirth: 1962, 
    yearOfDeath: 2011 
  },  // Murió a los 49 años
  { name: "Jane", 
    yearOfBirth: 1912, 
    yearOfDeath: 1941 
  }, // Murió a los 29 años
  { name: "Albert", 
    yearOfBirth: 1879, 
    yearOfDeath: 1955 
  }, // Murió a los 76 años
  { name: "Marie", 
    yearOfBirth: 1867, 
    yearOfDeath: 1934 
  }, // Murió a los 67 años
  { name: "Isaac", 
    yearOfBirth: 1643, 
    yearOfDeath: 1727 
  }, // Murió a los 84 años
  { name: "Ada", 
    yearOfBirth: 1815, 
    yearOfDeath: 1852 
  },   // Murió a los 37 años
  { name: "Nikola", 
    yearOfBirth: 1856, 
    yearOfDeath: 1943 
  }, // Murió a los 87 años
  { name: "Leo", 
    yearOfBirth: 1911, 
    yearOfDeath: 1998 
  },  // Murió a los 87 años

  { name: "Frank", 
    yearOfBirth: 1920, 
    yearOfDeath: 2001 
  },  // Murió a los 81 años
  { name: "Dorothy", 
    yearOfBirth: 1880, 
    yearOfDeath: 1965 
  }, // Murió a los 85 años
  { name: "William", 
    yearOfBirth: 1925, 
    yearOfDeath: 1995 
  }, // Murió a los 70 años
  { name: "Hannah", 
    yearOfBirth: 1899, 
    yearOfDeath: 1985 
  }, // Murió a los 86 años
  { name: "James", 
    yearOfBirth: 1935, 
    yearOfDeath: 2000 
  },  // Murió a los 65 años
];
function findTheOldest(people){
  let arr = people.map(person => ({
    ...person,
    edad: person.yearOfDeath - person.yearOfBirth
}));
const maxEdad = Math.max(...arr.map(person => person.edad));
const personaMasVieja = arr
  .filter(person => person.edad === maxEdad)
  .map(({ name, yearOfBirth, yearOfDeath }) => ({ name, yearOfBirth, yearOfDeath }));


  console.log(personaMasVieja);
}findTheOldest(people);

