function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}

function contarSomenteVogaisNaLista(lista) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let item of lista) {
    if (typeof item === 'string') {
      for (let letra of item) {
        if (vogais.includes(letra)) {
          contador++;
        }
      }
    }
  }

  return contador;
}

const entrada = [1, 'Antonia', 2, 'Joao', 3, 'Maria', 4];

const somenteNumeros = filtrarNumeros(entrada);
const totalVogais = contarSomenteVogaisNaLista(entrada);

console.log('Números:', somenteNumeros);
console.log('Total de vogais nas strings:', totalVogais);
