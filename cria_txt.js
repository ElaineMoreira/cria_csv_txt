const fs = require('fs');

function criaTxt(array, nomeArquivo) {
    const cadaLinhaMap = array.map(linha => linha.join(','))
    fs.writeFileSync(nomeArquivo, cadaLinhaMap.join('\n'))
}

let numberOne = 10;
let numberTwo = 100;
let cnl = 7779;
let tipoDeLinha = 'DDR';

const array = [];
for (let index = `${numberOne}`; index <= `${numberTwo}`; index++) {
    array.push([index, `${cnl}`, `${tipoDeLinha}`]);
}

criaTxt(array, 'arquivo.txt')
