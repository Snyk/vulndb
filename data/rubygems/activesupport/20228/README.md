## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Rails does not perform adequate escaping when a `Hash` containing user-controlled data is encoded as JSON

## Details

When a `Hash` containing user-controlled data is encoded as JSON (either through `Hash#to_json` or `ActiveSupport::JSON.encode`), Rails does not perform adequate escaping that matches the guarantee implied by the `escape_html_entities_in_json` option (which is enabled by default). If this resulting JSON string is subsequently inserted directly into an HTML page, the page will be vulnerable to XSS attacks.

For example, the following code snippet is vulnerable to this attack:

    <%= javascript_tag "var data = #{user_supplied_data.to_json};" %>

Similarly, the following is also vulnerable:

    <script>
      var data = <%= ActiveSupport::JSON.encode(user_supplied_data).html_safe %>;
    </script>

All applications that renders JSON-encoded strings that contains user-controlled data in their views should either upgrade to one of the FIXED versions or use the suggested workaround immediately.

## References
- http://rubysec.com/advisories/CVE-2015-3226
- https://groups.google.com/forum/#!topic/ruby-security-ann/7VlB_pck3hU
