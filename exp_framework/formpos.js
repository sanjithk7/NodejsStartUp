const express = require('express');
const Joi = require('joi');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body, schema, (err, res) =>{
        if(err) {
            console.error(err);
            res.send('Error is occurred');
        } else {
            console.log(res);
            res.send('Successfully data is posted');        
        }
    });
    res.send('Successfully data is posted');
    // res.json({success: true});
});

app.listen(3000);