//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB server');

    // Deleccting the data in mongodb
    // db.collection('Users').deleteOne({name: 'Somtochukwu'}).then((res)=>{
    //     console.log(res);
    // });

    // db.collection('Users').deleteMany({age: 19}).then((res)=>{
    //     console.log(res);
    // })
    // db.close();
    db.collection('Users').findOneAndDelete({name: 'Akachukwu'}).then((res)=>{
        console.log(res);
    })
})