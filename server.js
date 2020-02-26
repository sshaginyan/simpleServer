const express = require('express');

const app = express();

app.post('/licenses', (req, res) => {
    res.json({
        one: 1
    });
});

app.listen(process.env.PORT || 8080);