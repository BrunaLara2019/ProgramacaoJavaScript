const teste = "42"

console.log (teste)

//Concatenação exemplo:

const turma = "02"

console.log ("Está é a turma " + turma + " na Segunda no dia 12 de maio")

//INTERPOLAÇÃO - é quando é utilizado a crase , neste caso não precisa utilizar + para realizar a concatenação
// coloca a variável na interpolação com ${}

//const turma = "02"

//console.log (`Está é a turma  ${turma}  na Segunda no dia 12 de maio`)

//Função que retona o tamanho dos caracteres é .length

const nome = "Bruna "

console.log(nome.length)

//split serve para separar a string (exemplo uma lista de palavras)

const nomesDeAlunos = "Bruna Antonio Rafael Antoni João"

const nomesDeAlunosSplit = nomesDeAlunos.split (" ")

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase ())
console.log(nomesDeAlunos.toUpperCase())

//toLowercase deixa minusculo as letras
// toUpperCase deixa maiuscula as letras

console.log(nomesDeAlunos.includes ("Denys"))

nomesDeAlunos.replaceAll('a', 'i') // muda um campo para outro

const conceitosLogica = "                teste Bruna    "

console.log(conceitosLogica.trim())