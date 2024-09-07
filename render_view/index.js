import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join('./', 'views'));

app.get('/', (req, res) => {
    res.sendFile('home.html', {
        root: './views'
    });
    app.locals.my_err = "THere is a errrior";
});

app.get('/home', (req, res) => {
    res.render('home', {name: "Saikat"});
});


app.listen(port, () => {
    console.log(`Server running on port port`);
});