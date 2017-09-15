const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  db.collection('Users').find({name: 'banana'}).toArray().then((user) => {
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('unable to find user', err);
  });

});
