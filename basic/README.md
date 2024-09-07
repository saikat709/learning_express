## Different Route Management

Express has methods on `app` instance to work with or handle routes. 

```js
app.get('/', (re, res)=>{ });
app.post('/', (re, res)=>{ });
app.delete(....);
app.all('/', (re, res)=>{ });
// and etc.
```
The 2nd param is route handing function, and it will not return something. But we will call methods on res param received in the function call.
like `res.send(something)` or `res.render(something)`.


### Parameter from url
We can retrive param from url that user writes on their browser. E.g if we want to show details of a user. We need the user id as a parameter in the url. For this, the url will be `/details/2452`, where 2452 is the id a user. Note that, we can use more than one parameters a single route.
In our app, we need to retrive and use the id --
```js
app.get('/details]/:id', (req, res)=>{
    //The id will be available in req.params
    const id = req.params.id;
    // use id
    console.log(id);
    res.send('Result...');
});
```

### Response
We send response using the res parameter.
```js
res.send("Simple text");
res.send('<h1> html text string<h1>');
res.json({
    name: 'Saikat',
    age: 18,
});
// we can specify the status code
res.status(200).send("hjj");
```
Rendering template is the next part.

### Redirect

```js
res.redirect('details/29');
```

### Notes
* `
The 7,8 no line helps express to parse jsons and data submitted through post request.
`
```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```
* If *type="module"* in package.json file then we can use **import** state else we have to use **require** statement 

* Through import we get **module.exports** of a file, and through import we get **export default** or **export** 