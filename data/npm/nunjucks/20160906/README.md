## Overview
`nunjucks` is a powerful templating engine.

Like many templating engines, it automatically HTML encodes any `string` value included in the template using the `{{ some-variable }}` notation. These variables are often user-generated, but the HTML Encoding protects the application from Cross-Site Scripting (XSS) attacks.

However, if the variable passed in is an array, no HTML encoding is applied, exposing an easy path to XSS. The risk of exploit is especially high given the fact `express`, `koa` and many other Node.js servers allow users to force a query parameter to be an array using the `param[]=value` notation.

## Details

The [issue](https://github.com/mozilla/nunjucks/issues/835) opened by [Matt Austin](https://github.com/matt-) explains the vulnerability very well:

> The following string works as expected:
```
var res = nunjucks.renderString('Hello {{ username }}', { username: '<s>Matt</s>' });
console.log(res); //Hello &lt;s&gt;Matt&lt;/s&gt;
```

> If however the variable passed to the template is an array autoescape does nothing:
```
var res = nunjucks.renderString('Hello {{ username }}', { username: ['<s>Matt</s>'] });
console.log(res); // Hello <s>Matt</s>
```
...
> In express / Koa / (anything else using qs or body-parser) is is trivial to coerce query params types. See the following simple example in express:
```
var app = express();
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/', function(req, res) {     
    // This should be fine autoescape is on...
    res.send(nunjucks.renderString('Hello {{ username }}', { username: req.query.name }));
    //res.render('index.html', { username: req.query.name });
});
```

> Attack URL:
`http://127.0.0.1:3000/?name[]=<script>alert(1)</script>matt`

A more complete proof of concept (POC) can be found here: https://github.com/matt-/nunjucks_test

## Remediation
Upgrade to `nunjucks` version 2.4.3 or newer.

## References
- https://github.com/mozilla/nunjucks/issues/835
- https://github.com/mozilla/nunjucks/pull/836
- https://github.com/matt-/nunjucks_test
