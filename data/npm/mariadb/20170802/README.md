## Overview
`mariadb` is a one of 37 malicious packages that use [typosquatting](http://incolumitas.com/2016/06/08/typosquatting-package-managers/) to bait unknowing users to install them.
These packages, which carry similar names to an original package, offer all the functionality of their original, but also include a code snippet that sends all your environment variables to a remote server controlled by malicious operators when your code is running.

This is especially dangerous in production runtime environments, where environment variables tend to consist of keys, passwords, tokens and other secrets.

On August 1st, 2017 npm deprecated all malicious typosquatting libraries from this list.

The full list of packages are:
```
babelcli - v1.0.1 - Babel CLI for Nodejs
crossenv - v6.1.1 - Run scripts that set and use environment variables across platforms
cross-env.js - v5.0.1
d3.js - v1.0.1 - d3.js for Nodejs
fabric-js - v1.7.18 - Object model for HTML5 canvas, and SVG-to-canvas parser. Backed by jsdom and node-canvas.
ffmepg - v0.0.1 - FFmpeg for Nodejs
gruntcli - v1.0.1 - Grunt CLI for Nodejs
http-proxy.js - v0.11.3 - Node.js proxy tools
jquery.js - v3.2.2-pre - jquery.js for Nodejs
mariadb - v2.13.0 - A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
mongose - v4.11.3 - Mongoose MongoDB ODM
mssql.js - v4.0.5 - Microsoft SQL Server client for Node.js.
mssql-node - v4.0.5 - Microsoft SQL Server client for Node.js.
mysqljs - v2.13.0 - A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
nodecaffe - v0.0.1 - caffe for Nodejs
nodefabric - v1.7.18 - Object model for HTML5 canvas, and SVG-to-canvas parser. Backed by jsdom and node-canvas.
node-fabric - v1.7.18 - Object model for HTML5 canvas, and SVG-to-canvas parser. Backed by jsdom and node-canvas.
nodeffmpeg - v0.0.1 - FFmpeg for Nodejs
nodemailer-js - v4.0.1 - Easy as cake e-mail sending from your Node.js applications
nodemailer.js - v4.0.1 - Easy as cake e-mail sending from your Node.js applications
nodemssql - v4.0.5 - Microsoft SQL Server client for Node.js.
node-opencv - v1.0.1 - OpenCV for Nodejs
node-opensl - v1.0.1 - OpenSSL for Nodejs
node-openssl - v1.0.1 - OpenSSL for Nodejs
noderequest - v2.81.0 - Simplified HTTP request client.
nodesass - v4.5.3 - Wrapper around libsass
nodesqlite - v2.8.1 - SQLite client for Node.js applications with SQL-based migrations API
node-sqlite - v2.8.1 - SQLite client for Node.js applications with SQL-based migrations API
node-tkinter - v1.0.1 - Tkinter for Nodejs
opencv.js - v1.0.1 - OpenCV for Nodejs
openssl.js - v1.0.1 - OpenSSL for Nodejs
proxy.js - v0.11.3 - Node.js proxy tools
shadowsock - v2.0.1 - A tunnel proxy that help you get through firewalls
smb - v1.5.1 - A Pure JavaScript SMB Server Implementation
sqlite.js - v2.8.1 - SQLite client for Node.js applications with SQL-based migrations API
sqliter - v2.8.1 - SQLite client for Node.js applications with SQL-based migrations API
sqlserver - v4.0.5 - Microsoft SQL Server client for Node.js.
tkinter - v1.0.1 - Tkinter for Nodejs
```

## Remediation
Avoid usage of this package altogether.

## References
- [Malicious packages published on npm](https://iamakulov.com/notes/npm-malicious-packages/)
- [Typosquatting programming language package managers](http://incolumitas.com/2016/06/08/typosquatting-package-managers/)