'use strict';
const fileFilter = require('./mymodule');
const dir = process.argv[ 2 ];
const ext = process.argv[ 3 ];

fileFilter(dir, ext, (err, list) => {
	if (err) return console.error('There was an error: ', err);
	list.forEach(element => console.log(element));
});