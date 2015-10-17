## Overview
Potential XSS Exploit With User-Supplied Data When Using {{group}} Helper

This vulnerability has been assigned the CVE identifier CVE-2014-0014.

In general, Ember.js escapes or strips any user-supplied content before
inserting it in strings that will be sent to innerHTML.  However, we have
identified a vulnerability that could lead to unescaped content being inserted
into the innerHTML string without being sanitized.

When using the `{{group}}` helper, user supplied content in the template was not
being sanitized. Though the vulnerability exists in Ember.js proper, it is only
exposed via the use of an experimental plugin.

In applications that use the `{{group}}` helper, a specially-crafted payload
could execute arbitrary JavaScript in the context of the current domain
("XSS").

## Impact

This vulnerability only affects applications that use the `{{group}}` helper
to display user-provided content.

