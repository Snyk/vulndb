## Overview

[`uglifier`](https://rubygems.org/gems/uglifier) is a gem that minifies and compresses JavaScript files. Versions 2.4.23 and earlier are affected by a vulnerability that slightly alters the functionality of a JavaScript file after the minification process.

This bug was demonstrated to allow potentially malicious code to be hidden within secure code, and activated by the minification process. "[Backdooring your JavaScript using minifier bugs](https://diracdeltas.github.io/blog/backdooring-js/)" explains how this works.

## References
- http://rubysec.com/advisories/OSVDB-126747
- https://github.com/mishoo/UglifyJS2/issues/751
- https://zyan.scripts.mit.edu/blog/backdooring-js/
