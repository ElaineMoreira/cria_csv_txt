const fs = require('fs');
const readline = require('readline-sync');

//let numberOne = 10;
//let numberTwo = 30;
//let cnl = 7779;
//let tipoDeLinha = 'DDR';
const numberOne = parseFloat(readline.question('Digite o primeiro número:'))
const numberTwo = parseFloat(readline.question('Digite o segundo número:'))
const cnl = parseFloat(readline.question('Digite o CNL:'))
const tipoDeLinha = readline.question('Digite o tipo de linha, "DDR" ou "basic":')

function criaTxt(array, nomeArquivo) {
    const cadaLinhaMap = array.map(linha => linha.join(','))
    fs.writeFileSync(nomeArquivo, cadaLinhaMap.join('\n'), 'utf-8')
}

const array = [];
for (let index = `${numberOne}`; index <= `${numberTwo}`; index++) {
    array.push([index, `${cnl}`, `${tipoDeLinha}`]);
}

criaTxt(array, 'arquivo.txt', 'utf-8')
