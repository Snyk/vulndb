## Overview
Potential XSS Exploit With User-Supplied Data When Binding Primitive Values

This vulnerability has been assigned the CVE identifier CVE-2014-0013.

In general, Ember.js escapes or strips any user-supplied content before
inserting it in strings that will be sent to innerHTML.  However, we have
identified a vulnerability that could lead to unescaped content being inserted
into the innerHTML string without being sanitized.

When a primitive value is used as the Handlebars context, that value is not
properly escaped.  An example of this would be using the `{{each}}` helper to
iterate over an array of user-supplied strings and using `{{this}}` inside the
block to display each string.

In applications that contain templates whose context is a primitive value and
use the `{{this}}` keyword to display that value, a specially-crafted payload
could execute arbitrary JavaScript in the context of the current domain
("XSS").

## Impact

This vulnerability affects applications that contain templates whose context is
set to a user-supplied primitive value (such as a string or number) and also
contain the `{{this}}` special Handlebars variable to display the value.

