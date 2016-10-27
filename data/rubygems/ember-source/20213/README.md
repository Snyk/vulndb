## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to `innerHTML`. However, a change made to the implementation of the select view means that any user-supplied data bound to an option's label will not be escaped correctly.

## References

- http://rubysec.com/advisories/CVE-2015-1866
- https://groups.google.com/forum/#!topic/ember-security/nbntfs2EbRU
