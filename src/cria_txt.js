const fs = require('fs');

function criaTxt(array, nomeArquivo) {
    const cadaLinhaMap = array.map(linha => linha.join(','))
    fs.writeFileSync(nomeArquivo, cadaLinhaMap.join('\n'))
}

let numberOne = 30;
let numberTwo = 45;
let cnl = 7777;
let tipoDeLinha = 'basic'

const array = [];
for (let index = `${numberOne}`; index <= `${numberTwo}`; index++) {
    array.push([index, `${cnl}`, `${tipoDeLinha}`]);
}

criaTxt(array, 'arquivo.txt')
