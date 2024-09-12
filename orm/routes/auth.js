const auth = require('express').Router();
const User = require('../db/models/user')
const { Op } = require('sequelize');



app.get('/signin', async (req, res) => {
    const user = await User.findOne({
        attributes: ['name', 'email', ],
        where: {
           name: 'saikat'
        }
    });
    res.send('GET request to the homepage');
});



auth.post('/signin', (req, res) => {
    res.send('POST request to the homepage');
});


app.get('/signup', (req, res) => {
    res.send('GET request to the homepage');
});

auth.post('/signup', (req, res) => {
    res.send('POST request to the homepage');
});

module.exports = auth;