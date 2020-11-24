function getRandomNumber(size){
  return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Caliente como cura en una guardería(casi casi)";
  } else if (distance < 40) {
    return "Caliente como culo de monja(caliente)";
  } else if (distance < 60) {
    return "Calentito como chori peronista";
  } else if (distance < 100) {
    return "Tibio como gorila en un banderazo";
  } else if (distance < 200) {
    return "Más frío que el corazón de tu ex";
  } else if (distance < 360) {
    return "Más frío que el ginecólogo de Frozen";
  } else {
    return "Seguí participando";
  }
}
