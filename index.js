import {createServer} from 'http';
import { url } from 'inspector';

const server = createServer((req, res) => {
    console.log({metodo: req.method});
    console.log({url: req.url});
    console.log({headers: req.headers});
    console.log("Mensaje en Servidor");
    res.end("Mensaje al Usuario");
});

server.listen(3000,() => {
    console.log("Servidor escuchando en el puerto 3000");
})