## Overview:

All versions of the static file server module nhouston are vulnerable to directory traversal. An attacker can provide input such as `../` to read files outside of the served directory.

## Recommendations:

It is recommended that a different module be used, as we have been unable to reacher the maintainer of this module. We will continue to reach out to them, and if an update becomes available that fixes the issue, we will update this advisory accordingly.

## References:
- http://en.wikipedia.org/wiki/Directory_traversal_attack
