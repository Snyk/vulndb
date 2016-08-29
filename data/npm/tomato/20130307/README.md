## Overview
Tomato is a Node.js web framework.

The tomato API has an admin service that is enabled by setting up an access_key in the config options. This access_key is intended to protect the API admin from unauthorized access.

The key is checked by checking to see if the access_key provided in the request is within the configured access_key string, not equal to. So a single character that's within the access key is sufficient to bypass this control.

_Source: [Node Security Project](https://nodesecurity.io/advisories/38)_

## Details

**Example:**

This is the snippet of code that does the comparison to authorize requests.

```
if (access_key && config.master.api.access_key.indexOf(access_key) !== -1) {
```

For an access_key that is set to anything that includes the letter 'a' the following request would be authorized.

```
$ curl -X POST "http://localhost:8081/api/exec" -H "Content-Type: application/json" -d @test -H "access-key: a"
{
 "cmd": "ls",
 "path": ".",
 "stdout": "app.js\nconfig.js\nlog\nnode_modules\nserver.js\n",
 "stderr": ""
}
```

**Mitigating factors:**

The admin interface is disabled by default. The module author confirmed that the access_key should really be an array of access_keys, however based on variable name and documentation it was not clear that it should be an array. The vulnerability exists only if a string access_key is set.

Module version 0.0.6 has been updated to ensure an array of keys is provided as well as documentation updates.

## References

