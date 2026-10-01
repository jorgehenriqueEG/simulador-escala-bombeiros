const bombeiros = ["Ana", "Bruno", "Carla", "Diego"];
const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const escala = {};
let contador = 0;
for (let dia of dias) {
  escala[dia] = [];
  for (let i = 0; i < 2; i++) {
    escala[dia].push(bombeiros[contador % bombeiros.length]);
    contador++;
  }
}
let valido = true;
for (let dia in escala) {
  if (escala[dia].length < 2) valido = false;
}
let diasTrabalhados = {};
for (let dia in escala) {
  for (let b of escala[dia]) {
    diasTrabalhados[b] = (diasTrabalhados[b] || 0) + 1;
  }
}
for (let b in diasTrabalhados) {
  if (diasTrabalhados[b] > 5) valido = false;
}
console.log("Escala gerada:");
for (let dia in escala) {
  console.log(dia + " [" + escala[dia].join(", ") + "]");
}
console.log("Está válida: " + valido);