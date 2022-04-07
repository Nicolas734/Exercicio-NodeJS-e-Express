const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')



app.get('/',(req,res) => {
    res.render("index")
})

app.post('/enviar', (req,res) =>{
    res.render("texto",{titulo:req.body.titulo,texto:req.body.texto})
    
})

app.listen(5000, function(erro){
    if(erro){
    console.log('Ocorreu um erro') 
}   
    else{
        console.log('Servidor Rodando na Porta 5000.')
}

})