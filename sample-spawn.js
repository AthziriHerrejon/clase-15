const {spawn} = require ('child_process');
const result = spawn ('git branch') ;

const callback= (data) => {
    console.log (´stdout: ${data}´);

};

//opcion resumida
result.stddout.on ('data', callback);

result.stdout.on('data', function (data) {
    console.log (´stdout; $ "{ data") ; 
}

//proceso asincrono , puede ser bloqueante o no bloqueante
//