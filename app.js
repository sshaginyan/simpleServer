const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/licenses', (req, res) => {
    const data = Object.keys(req.body).reduce((accum, key) => {
        accum[key] = parseInt(req.body[key]) + 1;
        return accum;
    }, {});

    res.json(data);
});

app.listen(process.env.PORT || 8080);