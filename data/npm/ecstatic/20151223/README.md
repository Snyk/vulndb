## Overview
Sending a purposefully crafted invalid date in the `If-Modified-Since` header will cause the `Ecstatic` server to crash, enabling an easily exploited `Denial of Service` attack. 

The vulnerability is caused by the combination of two bugs. 
First, the underlying V8 engine throws an exception when processing the specially crafted date, instead of stating the date is invalid as it should. Second, the ecstatic server does not handle the exception, triggering the crash.

Upgrading `Ecstatic` will address the second issue and thus fix the vulnerability.

## References
- Ecstatic fix: https://github.com/jfhbrook/node-ecstatic/pull/179
- V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=4640

