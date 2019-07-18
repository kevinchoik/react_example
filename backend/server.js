const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbRoutes = require('./routes/databaseAccess.js');

if (!process.env.MONGODB_URI) {
	console.log('Source .env to add variables');
}

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});

// Make build folder publicly available
app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
