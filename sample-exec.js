const { exec } = require ('child_process');
const command = exec ('git branch') ;

const handle = (err, stdout, stderr) => {
    console.log (stdout);
};

exec( 'git branch', (err,stdout,stderr) => {
    console.log (stdout);
}) ;

//crea un shell aparte en el que corre su propio proceso