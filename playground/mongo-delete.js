const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

    db.collection('Todos').deleteMany({text: 'eat banana'}).then((result) => {
      console.log(result);
    });
});
