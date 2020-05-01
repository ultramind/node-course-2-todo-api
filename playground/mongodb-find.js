//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
//     fetching data from the monogodb
    // db.collection('Users').find().count().then((count) =>{
    //     console.log(`Users count: ${count}`);
    // },(err)=>{
    //     console.log('Could not fetch data form the database');
    // })

    // querring for specified data
    db.collection('Users').find({name: 'Somtochukwu'}).toArray().then((doc)=>{
        console.log('Users in Year One');
        console.log(JSON.stringify(doc, undefined, 2));

    },(err)=>{
        console.log('No record with such name');
    })
    // db.close();
})