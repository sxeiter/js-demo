const hasLicence = true;
const age = 23;
const isDrunk = false;
const canDrive = (age >= 18 && hasLicence && !isDrunk);


console.log(`Вы ${canDrive ? 'можете' : 'не можете'} сесть за машину? `)