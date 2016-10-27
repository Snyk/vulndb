## Overview
The [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks and unsafe object creation vulnerabilities. When parsing certain JSON documents, the JSON gem tricked into creating Ruby symbols in a target system.

## Details

When parsing certain JSON documents, the JSON gem can be coerced in to creating Ruby symbols in a target system.  Since Ruby symbols are not garbage collected, this can result in a denial of service attack.

The same technique can be used to create objects in a target system that act like internal objects.  These "act alike" objects can be used to bypass certain security mechanisms and can be used as a spring board for SQL injection attacks in Ruby on Rails.

Impacted code looks like this:
```js
JSON.parse(user_input)
```
Where the `user_input` variable will have a JSON document like this:
```json
{"json_class":"foo"}
```
The JSON gem will attempt to look up the constant "foo".  Looking up this constant will create a symbol.

In JSON version 1.7.x, objects with arbitrary attributes can be created using JSON documents like this:
```json
{"json_class":"JSON::GenericObject","foo":"bar"}
```
This document will result in an instance of `JSON::GenericObject`, with the attribute "foo" that has the value "bar".  Instantiating these objects will result in arbitrary symbol creation and in some cases can be used to bypass security measures.

PLEASE NOTE: this behavior *does not change* when using `JSON.load`.  `JSON.load` should *never* be given input from unknown sources.  If you are processing JSON from an unknown source, *always* use `JSON.parse`.

## References
- https://www.ruby-lang.org/en/news/2013/02/22/json-dos-cve-2013-0269/
- https://gist.github.com/rsierra/4943505
