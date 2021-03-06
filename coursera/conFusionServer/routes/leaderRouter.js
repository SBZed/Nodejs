const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');
const Leaders = require('../models/leaders');
var authenticate = require('../authenticate');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
	.route('/')
	.options(cors.corsWithOptions, (req, res) => {
		res.sendStatus(200);
	})
	// .all((req, res, next) => {
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	next();
	// })
	.get(cors.cors, (req, res, next) => {
		// res.end('Will send all the leaders to you!');
		Leaders.find({})
			.then(
				(leaders) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leaders);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
		// res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description );
		Leaders.create(req.body)
			.then(
				(leader) => {
					console.log('Leader Creared: ', leader);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	})
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /leaders');
	})
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
		// res.end('Deleteing all leaders');
		Leaders.remove({})
			.then(
				(resp) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	});

leaderRouter
	.route('/:leaderId')
	.options(cors.corsWithOptions, (req, res) => {
		res.sendStatus(200);
	})
	// .all(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	next();
	// })
	.get(cors.cors, (req, res, next) => {
		// res.end( 'Will send details of the leader: ' + req.params.leaderId + ' to you!');
		Leaders.findById(req.params.leaderId)
			.then(
				(leader) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
		res.statusCode = 403;
		res.end('POST operation not supported on /leaders/' + req.params.leaderId);
	})
	.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
		// res.write('Updating the leader: ' + req.params.leaderId + '\n');
		// res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description );
		Leaders.findByIdAndUpdate(
			req.params.leaderId,
			{ $set: req.body },
			{ new: true }
		)
			.then(
				(leader) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(leader);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	})
	.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
		// res.end('Deleting leader: ' + req.params.leaderId);
		Leaders.findByIdAndRemove(req.params.leaderId)
			.then(
				(resp) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	});

module.exports = leaderRouter;
