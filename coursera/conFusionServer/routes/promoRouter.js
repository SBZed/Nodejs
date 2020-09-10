const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Promotions = require('../models/promotions');
const Dishes = require('../models/dishes');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
	.route('/')
	// .all((req, res, next) => {
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	next();
	// })
	.get((req, res, next) => {
		Promotions.find({})
			.then(
				(promotions) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotions);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
		// res.end('Will send all the promotions to you!');
	})
	.post((req, res, next) => {
		Promotions.create(req.body)
			.then(
				(promotion) => {
					console.log('Promotion created: ', promotion);
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
		// res.end(
		// 	'Will add the promotion: ' +
		// 		req.body.name +
		// 		' with details: ' +
		// 		req.body.description
		// );
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /promotions');
	})
	.delete((req, res, next) => {
		Promotions.remove({})
			.then(
				(resp) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(resp);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
		// res.end('Deleteing all promotions');
	});

promoRouter
	.route('/:promoId')
	// .all((req, res, next) => {
	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	next();
	// })
	.get((req, res, next) => {
		Promotions.findById(req.params.promoId)
			.then(
				(promotion) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
		// res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end(
			'POST operation not supported on /promotions/' + req.params.promoId
		);
	})
	.put((req, res, next) => {
		// res.write('Updating the promotion: ' + req.params.promoId + '\n');
		// res.end('Will update the propmotion: ' + req.body.name + ' with details: ' + req.body.description );
		Promotions.findByIdAndUpdate(
			req.params.promoId,
			{ $set: req.body },
			{ new: true }
		)
			.then(
				(promotion) => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.json(promotion);
				},
				(err) => next(err)
			)
			.catch((err) => next(err));
	})
	.delete((req, res, next) => {
		// res.end('Deleting promotion: ' + req.params.promoId);
		Promotions.findByIdAndRemove(req.params.promoId)
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

module.exports = promoRouter;
