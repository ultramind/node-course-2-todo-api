var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    email: {
        type: String,
        minLength: 1,
        required: true,
        trim: true
    }, 
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {Users};  