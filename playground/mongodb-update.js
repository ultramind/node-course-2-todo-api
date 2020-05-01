//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');
    // Updating the record
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ea459bea33b2d794d6b2b5b')
    },{
        $set: {
            name: 'Offor Chiom'
        },
        $inc:{
            age: 2
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    })
})