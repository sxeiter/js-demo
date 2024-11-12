const positionLatitude = 4;
const positionLongitude = 2;

const destinationLatitude = 3;
const destinationLongitude = 5;

let distance = (positionLatitude - positionLongitude)**2 + (destinationLatitude - destinationLongitude)**2;
console.log(distance)