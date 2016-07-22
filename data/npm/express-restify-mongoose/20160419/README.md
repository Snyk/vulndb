## Overview
`express-restify-mongoose` is a module to easily create a flexible REST interface for mongoose models.

If you have a user model that you want to protect:
```
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    password: String,
}));
```

You would normally do something such as:
```
restify.serve(router, User, {
    private: ['password'], // Set the password part of User as private, so outside people can't read it
})
```

This would hide the password field from people that send your application a `GET /User` and `GET /User/some-user-id` request. 

But a malicious user could go to your application and send a request for `GET /User?distinct=password` and get all the passwords for all the users in the database, despite the field being set to private. This could also be used for other private data if the malicious user knew what was set as private for specific routes. 

Source: Node Security Project

## Remediation
Update to at least version 3.1.0 or 2.5.0

## References
- https://github.com/florianholzapfel/express-restify-mongoose/issues/252

