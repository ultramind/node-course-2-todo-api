const {ObjectID} = require('mongodb');
const express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongos');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());


// app.get('/', (req, res)=>{
//     res.send("Hello World");
// });


app.post('/todos', (req, res)=>{
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        req.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find({}).then((todos) =>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    })
});

// GET/todos/3833774
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validation 
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) =>{
        if (todo) {
            res.send({todo});
        }else{
            res.status(400).send();
        }
    }, (e) => {
        res.status(404).send();
    })
});

// delecting records
app.delete('/todos/:id', (req, res) => {
    var id  = req.params.id;
    // validating the id

    if (!ObjectID.isValid(id)) {
       return res.status(404).send()
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            res.status(400).send();
        }
        res.send(todo);
    }, (e) => {
        res.status(400).send();
    });
});



app.listen(port, ()=>{
    console.log(`Server Connected Succeffully on port ${port} `);
})