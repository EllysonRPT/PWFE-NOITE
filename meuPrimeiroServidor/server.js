const http = require('http');
const fs = require('fs');
//importa os módulos http e fs(ler artigos) para o servidor
const server = http.createServer((req, res) => {
    //createServer cria o servidor local (http://localHost)
    //crindo função de requisição e respostas em http
    if (req.url === '/') {
        // se for solicitado / vai abrir o arquivo index.html
        fs.readFile('index.html', (err, data) => {
            if (err) {//caso de erro
                res.writeHead(500);//mensagem de erro
                res.end("erro Server");
            } else {//caso tudo ok
                res.writeHead(200);
                res.end(data);//retorna index
            }
        })
    }else if (req.url ==="/sobre" ) {
        fs.readFile('sobre.html', (err, data) => {
            if (err) {//caso de erro
                res.writeHead(500);//mensagem de erro
                res.end("erro Server");
            } else {//caso tudo ok
                res.writeHead(200);
                res.end(data);//retorna index
            }
        })
    } 
    else {//pagina nao encontrada
        res.writeHead(404);
        res.end("Pagina não encontrada");
    }

});
server.listen(3000, ()=>{
    console.log("servidor Conectado na porta 3000")
})