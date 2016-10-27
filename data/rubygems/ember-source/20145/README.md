## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

In general, Ember.js escapes or strips any user-supplied content before inserting it in strings that will be sent to `innerHTML`. However, a change made to the implementation of the `{{link-to}}` helper means that any user-supplied data bound to the `{{link-to}}` helper's title attribute will not be escaped correctly.

In applications that use the `{{link-to}}` helper in non-block form and bind the title attribute to user-supplied content, a specially-crafted payload could execute arbitrary JavaScript in the context of the current domain ("XSS").

## References

- http://rubysec.com/advisories/CVE-2014-0046
- https://groups.google.com/forum/#!topic/ember-security/1h6FRgr8lXQ
