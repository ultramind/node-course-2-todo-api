const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongos');
const {Todo} = require('../server/models/todos');
const {Users} = require('../server/models/users');


// Todo.remove({_id: '5ea9eb5c2fff4c11b462055c'}).then((todo) =>{
//     console.log(todo);
// });

// Todo.findOneAndRemove({_id: '5ea9ebf664697b3798b3130d'}).then((result) =>{
//     console.log(result);
// })

Todo.findByIdAndRemove({_id: '5ea9ecf6262cb02dc81ee9ac'}).then((result)=>{
    console.log(result);
})