## Overview
[`mysql2`](https://rubygems.org/gems/mysql2) is a simple, fast Mysql library for Ruby, binding to libmysql
Affected versions of this gem do not sanitize input passed into the `quoted_column_names` function, allowing malicious users to perform SQL Injection attacks.


## References
- [Github Release Notes](https://github.com/brianmario/mysql2/releases/tag/0.2.12)
- [Github Commit](https://github.com/brianmario/mysql2/commit/00fc49b9c247a1fef079bea1570b5767b1803e4c)
