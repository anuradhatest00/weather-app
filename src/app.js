const path = require('path');
const express = require('express');
const weather = require('./utils/weather');
const geo = require('./utils/geo');
const hbs = require('hbs');

const app =express();


//console.log(publicDirPath);
const tempalePath = path.join(__dirname,"../templates");
const partialsPath = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',tempalePath);
hbs.registerPartials(partialsPath);

const publicDirPath = path.join(__dirname,"../public");
app.use(express.static(publicDirPath));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/help',(req,res)=>{
    res.render('help')
});

app.get('/about',(req,res)=>{
    res.render('about')
});

app.get('/weather',(req,res)=>{
    if (!req.query.address){
        res.send({error:'address on found!'})
    }
        geo(req.query.address)
        .then((data)=>{
            return weather(data.lat,data.lon)
        })
        .then((data)=>{
            res.send(data)
        })
        .catch((error)=>{
            res.send(error);
        })
    
});

app.get('*',(req,res)=>{
    res.render('404')
});




app.listen(3000,()=>console.log('server is on port 3000'));

