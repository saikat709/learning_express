### MySql database in express (mysql2)
```nodejs
npm install express mysql2 dotenv --save
npm install nodemon --save-dev
```
Then we connect and use direct SQL query codes using the connection  for our CRUD operations.

## # mysql (cli) windows command
* change password ( for 'root' user )
    ```mysql
    ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';
    //or
    SET PASSWORD FOR 'root'@'localhost' = PASSWORD('password_txt');
    ```
* for not root users
    ```mysql
    GRANT INSERT, SELECT, DELETE, UPDATE ON database.*
    TO 'user name'@'localhost' IDENTIFIED BY 'password';
    ```
    or ALL
* see all available users on mysql
    ```mysql
    select Host, User from mysql.user;
    ```
* create user
    ```mysql
    CREATE user user-name@localhost IDENTIFIED BY 'password_txt';
    ```