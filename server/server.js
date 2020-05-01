const express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongos');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());


// app.get('/', (req, res)=>{
//     res.send("Hello World");
// });


app.post('/todos', (req, res)=>{
    console.log(req.body);
});


var port = 3000;
app.listen(port, ()=>{
    console.log('Server Connected Succeffully on port ' + port);
})