import express from 'express';
import router from './routes/main_routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public')); // .com/a.jpg
//app.set('styles/', '/public/')


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});