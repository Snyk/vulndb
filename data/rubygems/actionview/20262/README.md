## Overview
[`actionview`](https://rubygems.org/gems/actionview) is a conventions and helpers gem for building web pages.
Affected versions of this Gem are vulnerable to directory traversal and information leaks.

# Details
Applications that pass unverified user input to the `render` method in a controller may be vulnerable to an information leak vulnerability.

Impacted code will look something like this:

```ruby
def index
  render params[:id]
end
```

Carefully crafted requests can cause the above code to render files from unexpected places like outside the application's view directory, and can possibly escalate this to a remote code execution attack.

All users running an affected release should either upgrade or use one of the workarounds immediately.

A workaround to this issue is to not pass arbitrary user input to the `render` method.  Instead, verify that data before passing it to the `render` method.

For example, change this:

```ruby
def index
  render params[:id]
end
```

To this:

```ruby
def index
  render verify_template(params[:id])
end

private
def verify_template(name)
  # add verification logic particular to your application here
end
```

## References
- http://rubysec.com/advisories/CVE-2016-0752
- https://groups.google.com/forum/#!topic/rubyonrails-security/335P1DcLG00
