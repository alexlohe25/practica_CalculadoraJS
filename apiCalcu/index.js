const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.options('*', cors());

const port = 8085;

app.get('/', (req, res, next) => {
    res.send('welcome to my api ...');
});

app.get('/suma', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = parseFloat(num1) + parseFloat(num2);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/resta', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = parseFloat(num1) - parseFloat(num2);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/multiplicacion', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = parseFloat(num1) * parseFloat(num2);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/division', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = parseFloat(num1) / parseFloat(num2);
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/exp', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = Math.pow(parseFloat(num1), parseFloat(num2));
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.get('/mod', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var result = num1 % num2;
    var objResult = {
        result: result
    }
    res.send(objResult);
});

app.listen(port, () => 
    console.log('listening on port ' + port)
);