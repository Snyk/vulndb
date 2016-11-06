## Overview
[`colorscore`](https://rubygems.org/gems/colorscore) finds the dominant colors in an image and scores them against a user-defined palette.

The contents of the `image_path`, `colors`, and `depth` variables generated
from possibly user-supplied input are passed directly to the shell via
`convert ...`.

If a user supplies a value that includes shell metacharacters such as `;`, an
attacker may be able to execute shell commands on the remote system as the
user id of the Ruby process.

To resolve this issue, the aforementioned variables (especially `image_path`)
must be sanitized for shell metacharacters.

```ruby
  module Colorscore
    class Histogram
      def initialize(image_path, colors=16, depth=8)
        output = `convert #{image_path} -resize 400x400 -format %c -dither
None -quantize YIQ -colors #{colors} -depth #{depth} histogram:info:-`
        @lines = output.lines.sort.reverse.map(&:strip).reject(&:empty?)
      end
```


## References
- http://rubysec.com/advisories/CVE-2015-7541
- http://seclists.org/oss-sec/2016/q1/17
