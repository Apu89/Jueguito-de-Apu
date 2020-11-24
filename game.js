const WIDTH = 500;
const HEIGHT = 500;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;
$map.addEventListener("click" , function (e) {
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`

  if (distance < 20){
    alert("No hay tesoro , el tesoro es todo mi amor, te quiero mucho , nunca cambies. " + ` Encontraste el tesoro en ${clicks} clicks!`);
    location.reload();
  }
})
