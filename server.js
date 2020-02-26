const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/licenses', (req, res) => {
    console.log(req.body, '======');
    res.json({
        one: 1
    });
});

app.listen(process.env.PORT || 8080);