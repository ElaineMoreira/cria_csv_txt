const readline = require("readline-sync");

const primeiraPergunta = () => {
    return readline.questionFloat('Digite o primeiro número tronco da linha:')
}

const segundaPergunta = () => {
    return readline.questionFloat('Digite o último número:')
}

const terceiraPergunta = () => {
    return readline.questionFloat('Digite o CNL em número')
}

const quartaPergunta = () => {
    return readline.question('Digite se é "DDR" ou "basic":')
}

module.exports = {primeiraPergunta, segundaPergunta, terceiraPergunta, quartaPergunta};
