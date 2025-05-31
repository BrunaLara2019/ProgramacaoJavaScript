
function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

const listaOriginal = [1, "dois", 3, "quatro", 5];
const somenteNumeros = filtrarNumeros(listaOriginal);

console.log(somenteNumeros); // Saída: [1, 3, 5]
