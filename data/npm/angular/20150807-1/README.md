## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Clickjacking.

## Details
By enabling the SVG setting without taking other precautions, you might expose your application to click-hijacking attacks. In these attacks, sanitized SVG elements could be positioned outside of the containing element and be rendered over other elements on the page (e.g. a login link). Such behavior can then result in phishing incidents.

To protect against these, explicitly setup `overflow: hidden` css rule for all potential SVG tags within the sanitized content:

```ruby
.rootOfTheIncludedContent svg {
  overflow: hidden !important;
}
```

## Remediation
Upgrade `angular` to version 1.5.0-beta.2 or higher.

## References
- [Github PR](https://github.com/angular/angular.js/pull/12524)
- [Github Commit](https://github.com/angular/angular.js/commit/181fc567d873df065f1e84af7225deb70a8d2eb9)
