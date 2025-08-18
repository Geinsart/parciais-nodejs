const express = require('express')

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

//home page
app.get('/',(req, res) => {

    const conteudoBlog = [
        {titulo:'Cuidando da sua saúde dos pés com profissionalismo e dedicação', 
            conteudo: "A podologia é a área da saúde especializada no cuidado, prevenção e tratamento de alterações nos pés, como calosidades, unhas encravadas, micoses, rachaduras nos calcanhares, entre outras condições que afetam o bem-estar e a mobilidade. O trabalho do podólogo vai além da estética — ele é fundamental para manter a saúde dos pés, especialmente em pessoas com diabetes, má circulação ou problemas ortopédicos. Nosso objetivo é oferecer um atendimento humanizado, seguro e personalizado, promovendo alívio de desconfortos, orientação preventiva e qualidade de vida. Com técnicas modernas e um ambiente acolhedor, garantimos um cuidado completo para que você caminhe com mais conforto e confiança todos os dias." }
    ]

    res.render('index', {titulo: 'Home', conteudoBlog})
});

app.get('/sobre',(req, res) => {
    res.render('sobre',{titulo: 'sobre'})
})

//error 404
app.use((req,res) => {
    res.status(404).render('404',{titulo:'404'})
})