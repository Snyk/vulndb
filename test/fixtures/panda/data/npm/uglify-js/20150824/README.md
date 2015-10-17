## Overview:
[Tom MacWright](https://github.com/mishoo/UglifyJS2/issues/751) discovered that UglifyJS versions 2.4.23 and earlier are affected by a vulnerability which allows a specially crafted Javascript file to have altered functionality after minification. This bug was [demonstrated](https://zyan.scripts.mit.edu/blog/backdooring-js/) by [Yan](https://twitter.com/bcrypt) to allow potentially malicious code to be hidden within secure code, activated by minification.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_


### Details:

In Boolean algebra, DeMorgan's laws describe the relationships between conjunctions ( && ), disjunctions ( || ) and negations ( ! ).
In Javascript form, they state that:
 !(a && b) === (!a) || (!b)
 !(a || b) === (!a) && (!b)

The law does not hold true when one of the values is not a boolean however.

Vulnerable versions of UglifyJS do not account for this restriction, and erroneously apply the laws to a statement if it can be reduced in length by it.

Consider this authentication function:

```
function isTokenValid(user) {
    var timeLeft =
        !!config && // config object exists
        !!user.token && // user object has a token
        !user.token.invalidated && // token is not explicitly invalidated
        !config.uninitialized && // config is initialized
        !config.ignoreTimestamps && // don't ignore timestamps
        getTimeLeft(user.token.expiry); // > 0 if expiration is in the future

    // The token must not be expired
    return timeLeft > 0;
}

function getTimeLeft(expiry) {
  return expiry - getSystemTime();
}
```
When minified with a vulnerable version of UglifyJS, it will produce the following insecure output, where a token will never expire:

( Formatted for readability )

```
function isTokenValid(user) {
    var timeLeft = !(                       // negation
        !config                             // config object does not exist
        || !user.token                      // user object does not have a token
        || user.token.invalidated           // token is explicitly invalidated
        || config.uninitialized             // config isn't initialized
        || config.ignoreTimestamps          // ignore timestamps
        || !getTimeLeft(user.token.expiry)  // > 0 if expiration is in the future
    );
    return timeLeft > 0
}

function getTimeLeft(expiry) {
    return expiry - getSystemTime()
}
```

## Recommendations:

Upgrade UglifyJS to version >= 2.4.24.

## References:
- https://zyan.scripts.mit.edu/blog/backdooring-js/
- https://github.com/mishoo/UglifyJS2/issues/751
