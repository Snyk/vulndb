## Overview
[`express-graphql`](https://www.npmjs.com/package/express-graphql) is a GraphQL HTTP middleware.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
When the initial page loads, the HTML was was not properly escaped in queries or variables causing GraphiQL to break.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `express-graphql` to version 0.4.11 or higher.

## References
- [Github PR](https://github.com/graphql/express-graphql/pull/56)
- [Github Issue](https://github.com/graphql/express-graphql/issues/47)
- [Github Commit](https://github.com/graphql/express-graphql/compare/41a07b7d960a94be9a72cd1bffe5a1cc7bde2702...43391173338b29ab19396e94e147cf00fd92d0ff)
