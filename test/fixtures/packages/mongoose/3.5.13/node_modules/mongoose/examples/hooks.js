
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/example-hooks');

var schema = Schema({ name: String });
schema.post('save', function () {
  console.log('post save hook', arguments);
})

schema.pre('save', function (next) {
  console.log('pre save');
  next();
})

var M = mongoose.model('Hooks', schema);

var doc = new M({ name: 'hooooks' });
doc.save(function (err) {
  console.log('save callback');
  mongoose.disconnect();
})

