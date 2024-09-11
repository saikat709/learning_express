const express = require('express');
const {authenticate} = require('./db/sequelize');
const sequelize = require('./db/sequelize');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.authenticate()
    .then()
    .catch(err=>{
        console.log(err);
    });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

sequelize.close();