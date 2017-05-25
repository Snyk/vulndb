## Overview
[`haml`](https://rubygems.org/gems/haml) is a layer on top of HTML or XML that's designed to express the structure of documents in an elegant way.

When using user input to perform tasks on the server, characters like \< \> \" \' must be escaped properly. In this case, the \' character was missed. An attacker can manipulate the input to introduce additional attributes, potentially executing code.

```ruby
engine = Haml::Engine.new("%p&= foo")
engine.render(Object.new,:foo => 'h"i"')
# => "&lt;p&gt;h&amp;quot;i&amp;quot;&lt;/p&gt;"
engine.render(Object.new,:foo => "h'i'")
# => "&lt;p&gt;h'i'&lt;/p&gt;\n"
```

## Disclosure Timeline
- February 6th, 2017 - Reported the issue to package owner.
- February 8th, 2017 - Issue fixed.
- February 26th, 2017 - Version `v5.0.0.beta.2` released.

## Remediation
Upgrade `haml` to version 5.0.0 or higher.

## References
- [Github Commit #1](https://github.com/haml/haml/commit/18576ae6e9bdcb4303fdbe6b3199869d289d67c2)
- [Github Commit #2](https://github.com/haml/haml/commit/e1dbf817e7bd03f825ad4da943c3b7d80053c63d)
- [Github Commit #3](https://github.com/haml/haml/commit/d0086ec86df3b26012a7b38b532b56b7eb60cbfc)
