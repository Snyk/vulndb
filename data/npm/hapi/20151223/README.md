## Overview
Sending a purposefully crafted invalid date in the `If-Modified-Since` or `Last-Modified` header will cause the `Hapi` server to err but keep the socket open (the socket will time out after 2 minutes by default). This allows an attacker to quickly exhaust the sockets on the server, making it unavailable (a `Denial of Service` attack).

The vulnerability is caused by the combination of two bugs. 
First, the underlying V8 engine throws an exception when processing the specially crafted date, instead of stating the date is invalid as it should. Second, the `Hapi` server does not handle the exception well, leading to the socket remaining open.

Upgrading `Hapi` will address the second issue and thus fix the vulnerability.

## References
- Hapi fix: https://github.com/hapijs/hapi/commit/aab2496e930dce5ee1ab28eecec94e0e45f03580
- V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=4640
