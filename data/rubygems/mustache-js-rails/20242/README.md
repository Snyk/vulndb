## Overview
[`mustache-js-rails`](https://rubygems.org/gems/mustache-js-rails) provides mustache.js and jQuery.mustache.js for Rails 3.1+.

The upstream 'mustache.js' node.js module was found to not properly escape backtick (\`) and  equals (=) signs, leading to possible content injection via attributes in templates. For example, `<a href={{foo}}/>` rendered with `{ foo: 'test.com onload=alert(1)' }` results in `<a href=test.com onload=alert(1)/>`.

## References
- http://rubysec.com/advisories/OSVDB-131671
