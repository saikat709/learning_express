import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World! Nodemon!!!!');
});

app.post('/create-user', (req, res)=>{
    //user creation codes here.
    res.status(201).send("New user created");
});

app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    // delete instance of id
    res.send(`<h3> User deleted of id <em>${id}<em><h3>`);
});

app.listen(port, () => {
    console.log(`Server running on port 3000`);
});
