const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongos');
const {Todo} = require('./../server/models/todos');
const {Users} = require('./../server/models/users');

var id = '5eaa9af2ce2c673254b3417b';
var userId = '5ea9ef7e651fba2264a6f005';

// if (!ObjectID.isValid(id)) {
//     console.log('ID Not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// }, (e) => {
//     console.log(e);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos Find One', todo);
// }, (e) => {
//     console.log(e);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//        return console.log('Id Not Found');
//     }
//     console.log('Todos Find by ID', todo);
// }).catch((e) => console.log(e));

// fetching the user
Users.findById(userId).then((users) => {
    if (!users) {
       return console.log('User Id Not Found');
    }
    console.log('users Find by ID', JSON.stringify(users, undefined, 2));
}).catch((e) => console.log(e));