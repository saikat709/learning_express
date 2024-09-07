## # View Engine OR Template Engine
To render a dymanic html file we need engine in express, we have install those separately. Many view engines are available there. Example: ejs, jade etc.

If we want to render a html file with the contents of it. We can use-
```js
res.sendFile('home.html', {
    root: './views'
});
```
But if we want to render dynamic content, i.e. pass data to template and render that along with the html, we must use template engine.

We can check the setup [documentation](https://ejs.co/) here.
Step 1:
```js
app.set('view engine' 'ejs');
app.set('views', path.join('./', 'views'));
```
Step 2:
```shell
npm install ejs --save
npm install path --save
```
Step 3:
```js
res.render("home", {name: 'name'});
```

### Locals
We can set and use locals using three method `app.locals`, `req.locals`, `res.locals`
- Once set, the value of app.locals properties persist throughout the life of the application.
- In contrast with res.locals properties that are valid only for the lifetime of the request. When you handle the route where you have a res object, you won't have an app object there and vice-versa for app.locals.

Set: 
```
app.locals.email = "saikat..@..com;
res.locals.password_error = "Password is too small";
```

Uage:
```js
someMethod(app.locals.email);
//or in template
<%- app.locals.email %>
<% if (password_error) { %>
    <p1 class='error'> <%- password_error %>
<% } %>
```

Note: We can check form filds in a middleware, then add the errors as local. If we do so, we does not need to pass those errors in dictionary. 