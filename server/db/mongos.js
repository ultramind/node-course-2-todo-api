var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Exporting connection

module.exports = {mongoose}