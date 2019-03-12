const exprees = require('express');
const path = require('path');
const app = exprees();

app.use('/public', exprees.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

const people = require('./routes/people');
app.use('/people', people);

app.listen(3000);