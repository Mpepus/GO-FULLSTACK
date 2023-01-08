//cette const definit notre protcole de communication qui est le http
const http = require('http'); //this command permit to import the package http
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

if(isNaN(port)){
    return val;
}
if(port>=0){
    return port;
}
return false;
};
//cette fonction renvoie un port valide étant un numéro ou une chaîne 
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


//recherche et gère les erreurs de la façon la plus appropriée
const errorHandler = error =>{
    if(error.syscall !== 'listen'){
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
    switch(error.code){
        case 'EACCCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};


const server = http.createServer(app);


server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('listening on' + bind);
});

server.listen(port);
