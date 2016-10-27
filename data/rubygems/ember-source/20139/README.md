## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to `innerHTML`. Affected versions of this gem contain a vulnerability that could lead to unescaped content being inserted into the `innerHTML` string without being sanitized.

When a primitive value is used as the Handlebars context, that value is not properly escaped. An example of this would be using the `{{each}}` helper to iterate over an array of user-supplied strings and using `{{this}}` inside the block to display each string.

In applications that contain templates whose context is a primitive value and use the `{{this}}` keyword to display that value, a specially-crafted payload could execute arbitrary JavaScript in the context of the current domain ("XSS").

This vulnerability affects applications that contain templates whose context is set to a user-supplied primitive value (such as a string or number) and also contain the `{{this}}` special Handlebars variable to display the value.

## References

- http://rubysec.com/advisories/CVE-2014-0013
- https://groups.google.com/forum/#!topic/ember-security/2kpXXCxISS4
