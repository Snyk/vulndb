## Overview
In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to innerHTML. However, the `tagName` property of an `Ember.View` was inserted into such a string without being sanitized. This means that if an application assigns a view's `tagName` to user-supplied data, a specially-crafted payload could execute arbitrary JavaScript in the context of the current domain (XSS).

## References
- https://groups.google.com/forum/#!topic/ember-security/dokLVwwxAdM
