const fs = require('fs');
const readline = require('readline-sync');

let numberOne = 10;
let numberTwo = 30;
let cnl = 7779;
let tipoDeLinha = 'DDR';

function criaTxt(array, nomeArquivo) {
    const cadaLinhaMap = array.map(linha => linha.join(','))
    fs.writeFileSync(nomeArquivo, cadaLinhaMap.join('\n'))
}

const array = [];
for (let index = `${numberOne}`; index <= `${numberTwo}`; index++) {
    array.push([index, `${cnl}`, `${tipoDeLinha}`]);
}

criaTxt(array, 'arquivo.txt')
