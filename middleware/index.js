import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error handler ( can have multiple )
app.use((err, req, res, next)=>{
    if (err) next(err);
    next();
});


function authentication_needed(req, res, rext){
    // check is looged in.
    // if logged in: call next()
    // else: res.redirect('/login)
}


// midleware for all routes
app.use('*', (req, res, next)=>{
    // check
    next(); // proceeding to the url
});

// middleware for specific route
app.use('/', (req, res, next)=>{
    // check domething of the request. If no error, proceed to the url
    next();
});

app.use('/delete-article', authentication_needed);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server running on port port`);
});