const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

router.get('/all', (req, res) => {
	TodoItem.find((err, items) => {
		if (err) {
			console.log(err);
		} else {
			res.json(items);
		}
	});
});

router.post('/add', (req, res) => {
	const testTodo = new TodoItem({
		task: req.body.task
	});

	testTodo.save()
	.then(response => {
		res.send(response);
	})
	.catch(err => {
		res.send(err);
	});
});

router.post('/remove', (req, res) => {
	TodoItem.findByIdAndDelete(req.body.id, (err, item) => {
		if (err) {
			console.log(err);
		} else {
			res.json(item);
		}
	});
});

router.post('/toggle', (req, res) => {
	new Promise((resolve, reject) => {
		TodoItem.findById(req.body.id, (err, item) => {
			if (err) {
				reject(err);
			} else {
				resolve({ completed: !item.completed });
			}
		});
	})
	.then(completed => {
		TodoItem.findByIdAndUpdate(req.body.id, completed, {
			new: true
		}, (err, item) => {
			if (err) {
				console.log(err);
			} else {
				res.json(item);
			}
		});
	})
	.catch(err => console.log(err));
});

module.exports = router;
