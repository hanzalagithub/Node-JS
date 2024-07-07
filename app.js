const express = require('express');

const app = express();

app.listen(3000);
app.get('/', (req, res) => {
    res.sendFile('./Views/index.html',{root: __dirname})
    });
    app.get('/about', (req, res) => {
        res.sendFile('./Views/About.html',{root: __dirname})
        });