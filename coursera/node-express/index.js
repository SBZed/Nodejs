const express = require('express'),
	http = require('http'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	dishRouter = require('./routes/dishRouter'),
	promoRouter = require('./routes/promoRouter'),
	leaderRouter = require('./routes/leaderRouter'),
	port = 3000,
	app = express(),
	hostname = 'localhost',
	server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
