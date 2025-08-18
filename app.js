const express = require('express')

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

//home page
app.get('/',(req, res) => {

    res.render('index', {titulo: 'Home'})
});

app.get('/sobre',(req, res) => {
    res.render('sobre',{titulo: 'sobre'})
})

//error 404
app.use((req,res) => {
    res.status(404).render('404',{titulo:'404'})
})