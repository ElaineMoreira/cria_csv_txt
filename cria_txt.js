const fs = require('fs');

function criaTxt(array, nomeArquivo) {
    const cadaLinhaMap = array.map(linha => linha.join(','))
    fs.writeFileSync(nomeArquivo, cadaLinhaMap.join('\n'))
}

let numberOne = 300;
let numberTwo = 450;

const array = [];
for (let index = `${numberOne}`; index <= `${numberTwo}`; index++) {
    array.push([index, 7777, 'DDR']);
}

criaTxt(array, 'arquivo.txt')
