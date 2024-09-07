import express from 'express';

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

app.listen(port, () => {
    console.log(`Server running on port port`);
});