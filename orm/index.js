const express = require('express');
const authRoute = require('./routes/auth');
const sequelize = require('./db/sequelize');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);

sequelize.authenticate()
    .then(msg =>{
        console.log('Sequelize acquired the onnection.');   
    })
    .catch(err=>{
        console.log('Could not connect: ', err.json);
        process.exit(0);
        
    });

sequelize.sync({force:true})
    .then(msg=>{
        console.log("All models synchrononized."); 
    });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}).addListener('close',
    sequelize.close
);