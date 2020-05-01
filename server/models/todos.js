var mongoose = require('mongoose');

var Todo = mongoose.model('Todos', {
    text: {
        type: String,
        required: true,
        minLength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// var newTodo = new Todo({
//     text: 'Is really raining in Enugu'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved Todo', doc);
// },(e)=>{
//     console.log('Unable to save todo',  e);
// });

module.exports = {Todo}
