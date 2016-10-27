## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to `innerHTML`.  However, we have identified a vulnerability that could lead to unescaped content being inserted into the innerHTML string without being sanitized.

When using the `{{group}}` helper, user supplied content in the template was not being sanitized. Though the vulnerability exists in Ember.js proper, it is only exposed via the use of an experimental plugin.

In applications that use the `{{group}}` helper, a specially-crafted payload could execute arbitrary JavaScript in the context of the current domain ("XSS").

This vulnerability only affects applications that use the `{{group}}` helper to display user-provided content.

## References

- http://rubysec.com/advisories/CVE-2014-0014
- https://groups.google.com/forum/#!topic/ember-security/PSE4RzTi6l4
