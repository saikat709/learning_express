import express from 'express';

import { query, validationResult, body, matchedData } from 'express-validator';
// query for get request, body for post request.

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search/', (req, res) => {
    console.log('Body: '); console.log(req.body);
    console.log('Query: '); console.log(req.query.search_text);
    res.send(`Searching for <b>${req.query.search_text}</b>`);
});

app.post('/sign-up', (req, res)=>{
    console.log(req.body);
    res.send('Sucessfully received');
});


app.post('/create-profile',
    body('name').notEmpty().trim(),
    body('email').trim().notEmpty().isEmail(),
    (req, res)=>{
        const errors = validationResult(req);
        if(errors.notEmpty){
            errors.array.forEach(err => {
              res.locals[err.get('path')] = err.get('msg')
            });
            res.send(errors.array);
        }
        const data = matchedData(req);
        res.send(matchedData.array);
});

app.get('/search/',
     query('s').trim().notEmpty(),
    (req, res)=>{
        const queryParam = req.query.q;
        console.log(`Query parameter: ${queryParam}`);
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.send(errors);
        }
        const data = matchedData(req);
        res.send(data);   
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});