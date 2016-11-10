## Overview
[`breadcrumbs_on_rails`](https://rubygems.org/gems/breadcrumbs_on_rails) is a  Ruby on Rails plugin for creating and managing a breadcrumb navigation for a Rails project.
Affected versions of this gem are vulnerable to Cross-site Scripting (XSS) attacks due to unescaped user input in the breadcrumb. This was solved by passing the elements through Rails `SafeBuffer`.

## References
- [Github Issue](https://github.com/weppos/breadcrumbs_on_rails/pull/63#issue-44847693)
- [Github Commit](https://github.com/weppos/breadcrumbs_on_rails/pull/63/commits/9d4705088b6c8635f767e58bef817861410944d8)
