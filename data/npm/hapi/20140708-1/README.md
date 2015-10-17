## Overview:

This description taken from the pull request provided by Patrick Kettner.

[Background from the vulnerabilty finder](http://miki.it/blog/2014/7/8/abusing-jsonp-with-rosetta-flash/)

tl:dr - someone created a alphanum only swf converter, which means that they can in theory use it as a callback at a JSONP endpoint, and as a result, send data across domains.

Prepending callbacks with an empty inline comment breaks the flash parser, and prevents the issue. This is a fairly common solution currently being implemented by Google, Facebook, and Github.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:
- Update to the latest version of hapi.js

## References:
[PR #1766 - prepend jsonp callbacks with a comment to prevent the rosetta-flash vulnerability](https://github.com/spumko/hapi/pull/1766)

Thanks to [Patrick Kettner](https://github.com/patrickkettner) for submitting a pull request to address this in hapi.
