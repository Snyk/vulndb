## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Arbitrary Code Execution via unsafe svg animation tags.

## Details
Exploit Example:

```html
<svg>
  <a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="?">
    <circle r="400"></circle>
    <animate attributeName="xlink:href" begin="0" from="javascript:alert(1)" to="&" />
  </a>
</svg>
```

Here the anchor's href is animated, starting from a value that's a javascript URI. This allows execution of arbitrary javascript in the process.
Preventing only the animation of links is tricky, as SVG is weird and namespaces aren't predictable.
The fix is to have the sanitizer filter out svg animation tags instead.

## Remediation
Upgrade `angular` to version 1.5.0-beta.2 or higher.

## References
- [GitHub PR](https://github.com/angular/angular.js/pull/11290)
- [GitHub Commit](https://github.com/angular/angular.js/commit/67688d5ca00f6de4c7fe6084e2fa762a00d25610)
