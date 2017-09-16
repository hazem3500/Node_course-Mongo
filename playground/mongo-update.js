const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("59bac9bc826b1b2a7479199f")
    },{
      $set: {
        name: 'banana cipher'
      },
      $inc: {
        age: 1
      }
    },{
        returnOriginal: false
      }
    ).then((result) => {
      console.log(result);
    });
});
