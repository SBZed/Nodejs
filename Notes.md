# Node Js

-   Javascript used for server side.

## Intro

### Express

-   It is a framework for developing web apps with Node.js.
    Using frameworks helps make development a lot more efficient.

```sh
npm install express
```

```js
const express = require('express');
const app = express();
```

-   To start the server, we need to add the listen method to app.js, then run it in the terminal using the following command: node `file_name`.

### Routing

-   Determining how the app responds to a request to a particular URL is called routing.

```js
// /top : page we need to access
// () => {} : Route Handler/ route handling function which take two parameters req(requst), res(response)
app.get('/top', (req, res) => {
	// Display the top page
	res.render('top.ejs');
});
```

-   You can specify which view file to show on the browser using the res.render function.

### Applying Css

-   store Css and image in folder
-   and use below line to access in code:

```js
app.use(express.static('public')))
```

### EJS

-   Embedded JavaScript
-   EJS is a Node.js package that lets you embed JavaScript code in your HTML file.

```sh
npm install ejs
```

-   To embed JavaScript code, we can use <% %> or <%= %>.
-   <% %> is used in cases like defining a variable as it won't be displayed.
-   <%= %>, on the other hand, is used for cases like printing a variable as it will be displayed.
    ![<% %>](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362864374.png)
    ![<%= %>](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362877243.png)

#### Advantage of EJS

-   With EJS, you will be able to use the forEach method, which will make the code much simpler and easier to manage than plain HTML.
    ![using HTML](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362891591.png)
    ![using EJS](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362898355.png)

## Database

### Installing

```sh
npm install mysql
```

### Setup

-   We'll store the required information in a constant called connection

```js
const mysql = require('mysql');
const connection = mysql.createConnection({
	// database name, password,etc
});
```
