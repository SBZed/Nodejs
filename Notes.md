# Node Js

- Javascript used for server side.

1. Express
	1.1. Structure of Express file
	1.2. Routing
	1.3. Applying Css
	1.4. EJS
	1.5. Advantage of EJS
	1.6. Middlewares
2. REST
	2.1. Stateless Server
3. Database
	3.1. SQL Databases
	3.2. NoSQL Databases
	3.3. MongoDB
	3.4. Mongoose ODM

## 1. Express

- It is a framework for developing web apps with Node.js.
  Using frameworks helps make development a lot more efficient.

	```sh
	npm install express
	```

	```js
	const express = require('express');
	const app = express();
	```

- To start the server, we need to add the listen method to app.js, then run it in the terminal using the following command: node `file_name`.

### 1.1 Structure of Express file

- To review, the typical structure of an Express.js app fig(which is usually a server.js or app.js file) roughly consists of these parts, in the order shown:

1. Dependencies : A set of statements to import dependencies
2. Instantiations : A set of statements to create objects
3. Configurations : A set of statements to configure system and custom settings
4. Middleware : A set of statements that is executed for every incoming request
5. Routes : A set of statements that defines server routes, endpoints, and pages
6. Bootup : A set of statements that starts the server and makes it listen on a specific port for incoming requests

### 1.2 Routing

- Determining how the app responds to a request to a particular URL is called routing.

	```js
	// /top : page we need to access
	// () => {} : Route Handler/ route handling function which take two parameters req(requst), res(response)
	app.get('/top', (req, res) => {
		// Display the top page
		res.render('top.ejs');
	});
	```

- You can specify which view file to show on the browser using the res.render function.

### 1.3 Applying Css

- store Css and image in folder
- and use below line to access in code:

	```js
	app.use(express.static('public')))
	```

### 1.4 EJS

- Embedded JavaScript
- EJS is a Node.js package that lets you embed JavaScript code in your HTML file.
	```sh
	npm install ejs
	```
- To embed JavaScript code, we can use <% %> or <%= %>.
- <% %> is used in cases like defining a variable as it won't be displayed.
- <%= %>, on the other hand, is used for cases like printing a variable as it will be displayed.
  ![<% %>](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362864374.png)
  ![<%= %>](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362877243.png)

### 1.5 Advantage of EJS

- With EJS, you will be able to use the forEach method, which will make the code much simpler and easier to manage than plain HTML.
  ![using HTML](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362891591.png)
  ![using EJS](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362898355.png)

### 1.6. Middlewares
 - **Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.**

	```js
		// Middleware
		app.use(logger('dev'));
		app.use(express.json());
		app.use(express.urlencoded({ extended: false }));
		app.use(cookieParser());
		app.use(auth);
		app.use(express.static(path.join(__dirname, 'public')));
	```

 - Middleware literally means anything you put in the middle of one layer of the software and another
 - Express middleware are functions that execute during the lifecycle of a request to the Express server.
 - Each middleware has access to the HTTP request and response for each route (or path) it’s attached to.
 Middleware functions can perform the following tasks:
	- Execute any code.
	- Make changes to the request and the response objects.
	- End the request-response cycle.
	- Call the next middleware in the stack.
 ![Middleware](./Resources/Imgs/Middleware.PNG)

## 2. REST (Representational Statr Transfer)

- two common approaches to support web services

  1.  SOAP (Simple Object Access Protocol) / in XML format
  2.  REST (XML/JSON)

- Four Basic design principles:
  1.  Use HTTP Methods explicitly
  2.  Be stateless - don't store any info about state after communication is completed. (received request and replies and don't store any info about this transaction)
  3.  Expose directory structure-like URLs (Uniform Resource Locator)
  4.  Transfer using XML(Extensible Markup Language), JSON (Javascript Object Notation)
- REST Concept
  1.  Noun - Resource/URL
  2.  Verb - GET, PUT, POST, DELETE
  3.  Representations: XML/JSON

#### 2.1 Stateless Server

- Server side should not track client state, if server does those thing server WILL NOT BE SCALABLE.
- for scalable implementation server on serve side should be stateless

## 3. Database

### 3.1 SQL Databases

- Structural database, tabular
- like MySQL

	```sh
	npm install mysql
	```

#### Setup

- We'll store the required information in a constant called connection

	```js
	const mysql = require('mysql');
	const connection = mysql.createConnection({
		// database name, password,etc
	});
	```

### 3.2 NoSQL Databases

- NoSQL bases database, address some challenges encountered with SQL databases
- Four broad categories:
  - Document databases (MongoDB)
  - Key-value databases (Redis)
  - Column-family databases (Cassandra)
  - Graph databases (Neo4J)
- **why NoSQL**

  - Scalability
    - Availability
    - Consistency
    - Partition tolerance
  - Ease of deployment
    - No object-relation mapping required

- **Structure of document database**
- Document: A self-contained piece of information (e.g. json document)
- collection: collection of documents
- Database: A set of collections

### 3.3 MongoDB

- Document database
- MongoDB stores document in More compact form, BSON (Binary JSON)
- BSON supports
  - length prefix on each value
  - information about type of field value
  - Additional primitives types not supported by raw json like UTC date time, raw binary, ObjectId
- MongoDB ObjectId:
  - Every document must have "_id" (unique primary field)
  - Default ObjectId created by Mongo
  - ObjectId is a 12 byte field
  ***
  | Timestamp(4) | Machine Id(3) | ProcessId(2) | Increment(3) |
  ***
  - e.g.
  ```bson
  {
  	"_id"	:	ObjectId("56ce74c0b02806eff4558f1f"),
  	"name"	:	"Uthapizza",
  	"description"	:	"Test"
  }
  ```
  - Install MongoDB in your pc
  - After that to run mongo server
  ```sh
  mongod --dbpath="D:\Learning\Full-Stack\mongodb\data" --bind_ip 127.0.0.1
  mongo
  ```
  - then install mongoDB driver in nodejs
  ```sh
  npm install mongodb --save
  npm install assert --save
  ```

### 3.4 Mongoose ODM

- Adds sturcture to MongoDB documents through schema
- Mongoose internally use MongoDB Driver
- Means you can use all MongoDB driver method through Mongoose modules
- people refers as:
  - Object Data Model (ODM)
  - Object Document Mapping (ODM)
  - Object relational Mapping (ORM)
- **Mongoose Schema**
  - Structure of the data to be stored
  - Defines all the fields of your document and their types (Can do validation)
  - Schema types:
    - string
    - number
    - date
    - buffer
    - boolean
    - Mixed
    - ObjectId
    - Array
  - Schema is used to create a model function
  - Schema can be nested
- **Process**

  - Define the schema in Nodejs application

	```js
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const dishSchema = new Schema(
		{
			name: {
				type: String,
				required: true,
				unique: true,
			},
			description: {
				type: String,
				required: true,
			},
		},
		{
			timestamps: true,
		}
	);
	```

  - NOTE: Mongoose can automatically createdAt, updatedAt like field in documents by using `timestamps: true` parameter
  - Create a model from that schema

	```js
	var Dishes = mongoose.model('Dish', dishSchema);
	```

  - you will also give a name to the model e.g. Dish
  - When you use this model in our node application where we are making use of Mongoose, then this will be transformed and mapped into a collection in MongoDB database.
  - Mongoose automatically construct the plural of that name and then give the collection the name, which is the plural of the model name that you specify in this example here.
  - Then exports this model

	```js
	module.exports = Dishes;
	```