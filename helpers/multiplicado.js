const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, option=false,hasta=10 ) => {
    try{
        let salida ='';

    
        


        for (let i = 1; i <= hasta;i++){
            salida += `${base} x ${i}= ${base * i} \n`;

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        if (option == true){
            console.log('==================='.green);
            console.log(`Tabla del ${base}: `.green);
            console.log('===================' .green);
            console.log(salida .red);
        }
        

        return (`tabla-${base}.txt`);
    } catch(err){
        throw err;
    }

        

    
}

module.exports = {
    crearArchivo

}