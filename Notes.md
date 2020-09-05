# Node Js
-   Javascript used for server side.
1. Express
2. REST
3. Database


## 1. Express
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
### Structure of Express file
- To review, the typical structure of an Express.js app fig(which is usually a server.js or app.js file) roughly consists of these parts, in the order shown:
1. Dependencies : A set of statements to import dependencies
2. Instantiations : A set of statements to create objects
3. Configurations : A set of statements to configure system and custom settings
4. Middleware : A set of statements that is executed for every incoming request
5. Routes : A set of statements that defines server routes, endpoints, and pages
5. Bootup : A set of statements that starts the server and makes it listen on a specific port for incoming requests

## Routing
-   Determining how the app responds to a request to a particular URL is called routing.
```js
// /top : page we need to access
// () => {} : Route Handler/ route handling function which take two parameters req(requst), res(response)
app.get('/top', (req, res) => {
	// Display the top page
	res.render('top.ejs');
});
```
- You can specify which view file to show on the browser using the res.render function.

## Applying Css
-   store Css and image in folder
-   and use below line to access in code:
```js
app.use(express.static('public')))
```
## EJS
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
### Advantage of EJS
-   With EJS, you will be able to use the forEach method, which will make the code much simpler and easier to manage than plain HTML.
    ![using HTML](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362891591.png)
    ![using EJS](https://d2aj9sy12tbpym.cloudfront.net/progate/shared/images/slide/nodejs/study/1/1580362898355.png)

## 2. REST (Representational Statr Transfer)
- two common approaches to support web services
	1. SOAP (Simple Object Access Protocol) / in XML format
	2. REST (XML/JSON)

- Four Basic design principles:
	1. Use HTTP Methods explicitly
	2. Be stateless - don't store any info about state after communication is completed. (received request and replies and don't store any info about this transaction)
	3. Expose directory structure-like URLs (Uniform Resource Locator)
	4. Transfer using XML(Extensible Markup Language), JSON (Javascript Object Notation)
- REST Concept
	1. Noun - Resource/URL
	2. Verb - GET, PUT, POST, DELETE
	3. Representations: XML/JSON

## Stateless Server
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
-   We'll store the required information in a constant called connection

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
	 ____________________________________________________________
	| Timestamp(4) | Machine Id(3) | ProcessId(2) | Increment(3) |
	 ------------------------------------------------------------
	- e.g. 
	```bson
	{
		"_id"	:	ObjectId("56ce74c0b02806eff4558f1f"),
		"name"	:	"Uthapizza",
		"description"	:	"Test"
	}
	```
