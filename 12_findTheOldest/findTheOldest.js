let currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    let age = calcAge(person);
    if (age > calcAge(oldest))
      return person;
    return oldest;
  }, {yearOfBirth: currentYear})
};

function calcAge(person)
{
  let yod = 0;
    if(!("yearOfDeath" in person))
      yod = currentYear;
    else
      yod = person.yearOfDeath;
    return yod - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;