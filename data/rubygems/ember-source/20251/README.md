## Overview

[`ember`](https://rubygems.org/gems/ember-source) is an Ember.js source code wrapper for use with Ruby libs.

Affected versions of this gem allow an attacker to execute a Cross-site Scripting (XSS) attack.

## Details

By default, Ember will escape any values in Handlebars templates that use double curlies (`{{value}}`). Developers can specifically opt out of this escaping behavior by passing an instance of `SafeString` rather than a raw string, which tells Ember that it should not escape the string because the developer has taken responsibility for escapement.

It is possible for an attacker to create a specially-crafted payload that causes a non-sanitized string to be treated as a `SafeString`, and thus bypass Ember's normal escaping behavior.

## References

- http://rubysec.com/advisories/CVE-2015-7565
- https://groups.google.com/forum/#!topic/ember-security/OfyQkoSuppY
