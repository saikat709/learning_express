const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

//console.log(process.env);

const connection = mysql.createConnection({
    host: process.env.HOST,
   // port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
connection.connect((err)=>{
    if (err) console.log(err.message);
});


connection.query('SHOW TABLES', function(err, res, fields){
    if(err) console.log(err.message);
    console.log(res);
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
connection.end();