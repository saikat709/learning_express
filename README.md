# Let's learn Express Js

## Lets create our first app
To create a app of express in nodejs, first of all we need to create a project.
```
npm init
```
This command will create a package.json file. That file manages our project dependencies.
After that, we need to install express.
```
npm install express --save
```
THis command installs express in our project and saves the dependency in package.json file.

In express, we create app, and the app handles everything we need i.e routing, listening to requests etc.

So, the structure of our simple server side app would be - (index.js) 

```js
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('THIS text will be loaded on browser');
});

app.listen(300, ()=>{
    console.log('Listening to localhost at port 3000');
});
```
Now, what we have to do is start the server and open our website on browser.
```
node index.js
```
Open the browser and type the adress `localhost:3000/`


## Extra but import
`nodemon` npm package watches our file changes and whenever we save the file it restarts the server automatically.
Usage-
```nodejs
npm install nodemon --save-dev
```
We run our code using nodemon instead of node, i.e `nodemon index.js`
But in windows this command may fail saying -
```
nodemon : File C:\Users\User\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running      
scripts is disabled on this system. For more information, see about_Execution_Policies at 
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon index.js
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
if This happen, open windows powershel as administrator. And run -
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```