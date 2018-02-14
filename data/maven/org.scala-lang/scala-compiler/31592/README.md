## Overview
Affected versions of [`org.scala-lang:scala-compiler`](https://scala-lang.org) are vulnerable to Arbitrary Code Execution.

The compilation daemon in Scala before 2.10.7, 2.11.x before 2.11.12, and 2.12.x before 2.12.4 uses weak permissions for private files in /tmp/scala-devel/${USER:shared}/scalac-compile-server-port, which allows local users to write to arbitrary class files and consequently gain privileges.

## Remediation
Upgrade `org.scala-lang:scala-compiler` to version 2.12.4 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15288)
- [GitHub PR #1](https://github.com/scala/scala/pull/6108)
- [GitHub PR #2](https://github.com/scala/scala/pull/6120)
- [GitHub PR #3](https://github.com/scala/scala/pull/6128)
- [GitHub Commit #1](https://github.com/scala/scala/commit/f3419fc358a8ea6e366538126279da88d4d1fb1f)
- [GitHub Commit #2](https://github.com/scala/scala/commit/67fcf5ce4496000574676d81ed72e4a6cb9e7757)
- [GitHub Commit #3](https://github.com/scala/scala/commit/0f624c5e5bdb39967e208c7c16067c3e6c903f1f)
