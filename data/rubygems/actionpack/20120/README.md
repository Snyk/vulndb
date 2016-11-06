## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks via the `simple_format` helper in Ruby on Rails meaning that any user provided HTML attributes will not be escaped correctly.

## Details
The simple_format helper converts user supplied text into html text
which is intended to be safe for display. A change made to the
implementation of this helper means that any user provided HTML
attributes will not be escaped correctly. As a result of this error,
applications which pass user-controlled data to be included as html
attributes will be vulnerable to an XSS attack.

## References
- http://rubysec.com/advisories/CVE-2013-6416
- https://groups.google.com/forum/#!topic/ruby-security-ann/5ZI1-H5OoIM
