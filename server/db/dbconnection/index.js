const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/recommended_recent_products';

mongoose.connect(mongoUri, {useNewUrlParser: true});

const db = mongoose.connection;

module.exports = db;