function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === "M";
}


function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}


function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === "pequeno") {
    return "brincar dentro de casa";
  } else {
    return "livre pra praticar atividades fora de casa";
  }
}


async function buscarDado() {
  return "Pipoca";
}

async function buscarDadoAsync() {
  const resultado = await buscarDado();
  return resultado;
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}
