//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    // adding data into mongoDB
    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert into todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Somtochukwu',
        age: 19,
        location: 'Nigeria Abia'
    }, (err, result) =>{
        if (err) {
            return console.log('Unable to insert into todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
})