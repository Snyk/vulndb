## Overview
[`auto_select2`](https://rubygems.org/gems/auto_select2) provides scripts and helpers for initialize different select2 elements: static, ajax and multi-ajax.
Affected versions of this gem are vulnerable to arbitrary command execution via the `params[:default_class_name]` option. This allows users to search any object
of all given ActiveRecord classes.

## References
- http://rubysec.com/advisories/OSVDB-132800
- https://github.com/Loriowar/auto_select2/issues/4
