var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello on main');
})

app.listen(3000, () => console.log('listening on 3000')
)