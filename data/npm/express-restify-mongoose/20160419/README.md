## Overview
`express-restify-mongoose` is a module to easily create a flexible REST interface for mongoose models.

It supports marking certain fields as private, to keep from exposing them to users, but fails to remove those fields from certain output scenarios, resulting in potential private data exposure.

For instance, if you have the following User model:

```
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    password: String,
}));
```

To keep from exposing the password, you'll likely to want to call it out as a private field like so:

```
restify.serve(router, User, {
    private: ['password'],
})
```

This will indeed result in the password field not showing when you request an item, for instance via `GET /User` or `GET /User/some-id`.

However, when querying on that field, using `GET /User?distinct=password`, ALL passwords for ALL the users in the DB would be shown.

## Remediation
Update to version `3.1.0` or newer on the `3.x` branch, or to version `2.5.0` or newer on the `2.x` branch.

## References
- https://github.com/florianholzapfel/express-restify-mongoose/issues/252
- https://github.com/florianholzapfel/express-restify-mongoose/pull/253
