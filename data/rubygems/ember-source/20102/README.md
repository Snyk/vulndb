## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to `innerHTML`. However, the `tagName` property of an `Ember.View` was inserted into such a string without being sanitized. This means that if an application assigns a view's `tagName` to user-supplied data, a specially-crafted payload could execute arbitrary JavaScript in the context of the current domain ("XSS").

This vulnerability only affects applications that assign or bind user-provided content to `tagName`.

## References

- http://rubysec.com/advisories/CVE-2013-4170/
- https://groups.google.com/forum/#!topic/ember-security/dokLVwwxAdM
