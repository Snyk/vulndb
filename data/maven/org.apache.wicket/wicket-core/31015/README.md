## Overview
[`org.apache.wicket:wicket-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wicket-core%22)
Affected versions of the package are vulnerable to Information Exposure during the Session Handling process.

## Details
When rendering a web page Wicket checks the request url against the one at the render time. It is possible the application to change the page parameters (this includes both the query parameters and parameters encoded into the request path). When the requested url differs with the one at the rendering time Wicket stores the response (i.e. the page markup) at the server side and issues an HTTP redirect to the new url. When the second request comes Wicket just flushes the stored response from the first request into the http output stream. This way the browser address bar shows the updated page parameters. When storing the page markup at the server side Wicket uses as an identifier a pair of the current session id plus the new url. However, Wicket does not check if user session is temporary (i.e. sessionId is null). This could lead to a security issue if two or more users with a temporary session are redirected to the same url at the same time. Then user1 might see the markup for user2 which has overridden the markup for user1 while user1 was following the HTTP redirect. In this way user-sensitive informations can be seen by other users.

## References
- [Apache Security Advisory](https://wicket.apache.org/news/2014/09/22/cve-2014-3526.html)
