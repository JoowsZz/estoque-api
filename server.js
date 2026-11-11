const express = require('express');
const app = express();
const port = 3000;

    app.get('/', function(req,res){
        res.send('ola mundo, meu nome é ' + process.env.nome)
    });
app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
})
