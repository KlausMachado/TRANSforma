let secretNumber = parseInt(Math.random() * 10) 

function Kick() {
  let kick = parseInt(document.getElementById("value").value);
  console.log(kick);

  if (kick == secretNumber) {
    let result = document.getElementById("result");
    result.innerHTML = kick + " É o número correto ";
  } else if (kick > 10 || kick < 0) {
    result.innerHTML = " Digite um numero de 0 a 10 ";
  } else if (kick < secretNumber) {
    result.innerHTML = kick + " Que tal um numero maior?";
  } else if (kick > secretNumber) {
    result.innerHTML = kick + " Que tal um número menor?";
  }
}
