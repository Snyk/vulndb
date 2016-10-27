## Overview

The [`wicked`] gem is a Rails engine for producing easy wizard controllers.

Affected versions of this gem contain a Directory Traversal vulnerability. This is due to the gem failing to properly sanitize input passed via the `the_step` parameter upon submission to the `render_redirect.rb` script. This may allow a remote attacker to gain access to unintended files via an escaped slash character `%2e`.

## References

- https://github.com/schneems/wicked/commit/fe31bb2533fffc9d098c69ebeb7afc3b80509f53
