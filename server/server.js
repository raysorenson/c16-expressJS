const express = require('express');
const path = require('path')
let fs = require('fs')
let app = express()

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello from the web server side...')
})


app.get('/css/style.css', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/css/style.css'))
})

app.get('/js/app.js', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/js/app.js'))
})


//middleware logger made by Matt
app.use((req, res, next) => {
    fs.appendFileSync(console.log(`${req.url}\n`))
    next()
})







app.listen(3000)