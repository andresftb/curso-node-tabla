
const { crearArchivo } = require('./helpers/multiplicado');
const argv = require('./config/yargs');




console.clear();
//console.log(argv);

console.log('base: yargs',argv.base);


crearArchivo(argv.base,argv.list,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo,'creado AQUI!!'))
    .catch(err => console.log(err));