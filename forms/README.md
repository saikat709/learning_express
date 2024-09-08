#### What we did
```npm
npm init -y
npm install express ejs --save
npm install nodemon --save-dev
```

#### How to run
```npm
npm install
nodemon index.js
```

### Parsing form data
For express 4.16+ versions, express has its own body parser to parse data that comes from form submition.
Till  express version 4.16 we need external middleware to parse data, that is body-parser
```
npm install --save body-parser
```
```js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
```


### Validations
We can validate submitted form in different ways
1. Manual validation in routes handling
2. Manual validation in specific middleware
3. External validtion library i.e express-validator

Usage:
* **express-validator**
```
npm install express-validator --save
```