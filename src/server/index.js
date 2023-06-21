const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

//console.log(__dirname)

async function makeRequest(arg) {
    const {text, type} = arg;
    const endPointUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.APPLICATION_KEY}&${type}=${text}&lang=auto`;
    
    const response = await fetch(endPointUrl);
    
    try {
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.get('/analyze', function (req, res) {
    makeRequest(req.body)
    .then(data => {
        res.send(data);
    });
})
