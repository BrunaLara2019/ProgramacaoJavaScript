/**
&& -  E / AND
|| - OU / OR
! - NÃO / NOT
*/

//&& - E / AND
const nomoDog = "Pipoca"
const nomoPossuiApenasUmaPalavra = nomeDog.split (" ").lenght ===1
const nomePossuiAteDezCaracteres = nomeDog.lenght <= 10

console.log (nomePossuiApenasUmaPalavra && nomoPossuiAteDezCaracteres) // true

// || - ou / or
const dog = {
    adotado: false,
    peso: 5.3
}

console.log (!dog.adotado || dog.peso < 10) // verdadeiro

console.log (true || true) // verdadeiro
console.log (true || false) // verdadeiro
console.log (false || true) // verdadeiro
console.log (false || false) // falso

