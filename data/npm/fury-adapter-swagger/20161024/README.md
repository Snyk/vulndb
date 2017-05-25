## Overview
[`fury-adapter-swagger`](https://www.npmjs.com/package/fury-adapter-swagger) is Swagger 2.0 parser for Fury.js.
[`Fury`](https://github.com/apiaryio/fury.js/) is an SDK that helps loading and HTTP API description format (like [`swagger`](http://swagger.io/)) and creates a uniformed format which is easy to work with. The swagger description document is a JSON or YAML file and per specification allows inclusion of other documents by reference. Fury takes this JSON file and outputs it as a JS object. This may allow any user and in particular a malicious user to edit the swagger document in an online editor and write and file into it's references, and in particular any file on the applications hosting server (e.g. `/etc/passwrd`). The document will try to include the contents of the referenced file during parsing and may expose confidential information like passwords, environment variables, DB Connection credentials, etc. Also, a possible Denial of service may occur due to `/dev/zero` consuming all available memory.

Thanks to [Adam Kliment](https://github.com/netmilk) and [Honza Javorek](https://github.com/honzajavorek) for finding and reporting this vulnerability to us.

## Remediation
Upgrade `fury-adapter-swagger` to version 0.9.7 or higher.

## References
- [GitHub Commit](https://github.com/apiaryio/fury-adapter-swagger/commit/777e2d68f03546a88f3203bbd4725df8b1f662a7)
- [DWF Request](https://github.com/distributedweaknessfiling/DWF-Database-Artifacts/blob/master/DWF/2016/1000249/CVE-2016-1000249.json)
