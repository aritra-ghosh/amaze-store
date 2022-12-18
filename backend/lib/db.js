'use strict';

var mongoose = require("mongoose");
var MONGODB_URL = "mongodb+srv://<user>:<pass>@cluster0.3utuxwz.mongodb.net/ngBookStore?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("Connected to %s", MONGODB_URL);
	console.log("App is running ... \n");
	console.log("Press CTRL + C to stop the process. \n");
}).catch(err => {
	console.error("App starting error:", err.message);
	process.exit(1);
});
var db = mongoose.connection;

module.exports = db;