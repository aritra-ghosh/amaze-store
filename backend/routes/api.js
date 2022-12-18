const app = require('express')();
const Book = require('../models/bookModel');
const Order = require('../models/orderModel');

app.get('/books', function (req, res) {

	Book.find({}, function (err, books) {
		if (err) throw err;

		res.send(books);
	});
});

app.get('/book', function (req, res) {
	const id = req.query.bookId;

	Book.find({ _id: id }, function (err, book) {
		if (err) throw err;

		res.send(book[0]);
	});
});

app.delete('/book', function (req, res) {
	const bookId = req.query.bookId;
	console.log(bookId)

	Book.findByIdAndRemove(bookId, function (err, book) {
		if (err) {
			console.log(err);
			res.send({
				success: false,
				message: "The request was not completed. Book with id " + book._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully deleted",
				id: book._id
			});
		}
	});
});

app.post('/book', function (req, res) {
	const bookData = req.body.bookData;
	const book = new Book(bookData);
	book.save(function (err, createdBookObject) {
		if (err) {
			res.send({
				success: false,
				message: "Book not added"
			});
		} else {
			res.send({
				success: true,
				message: "Book successfully added",
				book: createdBookObject
			});
		}
	});
});

app.put('/book', function (req, res) {
	const bookData = req.body.bookData;

	Book.findById(bookData.id, function (err, book) {
		if (err) {
			res.send(err);
		} else {
			book.title = bookData.title;
			book.author = bookData.author;
			book.publisher = bookData.publisher;
			book.price = bookData.price;
			book.description = bookData.description;
			book.category = bookData.category;
			book.cover = bookData.cover;

			book.save(function (err, book) {
				if (err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "Book successfully updated"
					});
				}
			});
		}
	});
});

app.post('/admin-login', async (req, res, next) => {
	const { username, password } = req.body
	// Check if username and password is provided
	if (!username || !password) {
		return res.json({
			success: false,
			message: "Username or Password not present",
		})
	} else {
		if (username == 'admin' && password == 'admin') {
			return res.json({
				success: true,
				message: "Authenticated"
			});
		} else {
			return res.json({
				success: false,
				message: "Invalid login information provided",
			})
		}
	}
});

app.post('/create-order', async (req, res, next) => {
	const orderInfo = {};
	orderInfo.useName = req.body.useName;
	orderInfo.userEmail = req.body.userEmail;
	orderInfo.userPhone = req.body.userPhone;
	orderInfo.billingAddress = req.body.billingAddress;
	orderInfo.billingPincode = req.body.billingPincode;
	const productItems = [];
	if (req.body.items) {
		req.body.items.forEach(element => {
			productItems.push({
				product: element.product,
				quantity: element.quantity
			})
		});
	}
	orderInfo.products = productItems;
	console.log(orderInfo);
	const order = new Order(orderInfo);
	order.save(function (err, order) {
		if (err) {
			res.send(err);
		} else {
			res.send({
				success: true,
				message: "Order successfully placed"
			});
		}
	});
});

app.get('/orders', function (req, res) {

	Order.find({}, function (err, orders) {
		if (err) throw err;

		res.send(orders);
	});
});

module.exports = app;