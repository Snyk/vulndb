## Overview
Old versions of `bassmaster`, a Hapi server plugin used to process batches of requests, use the `eval` method as part of its processing and validation of user input.

An attacker can therefore provide arbitrary javascript in this input, which will be executed by this `eval` function without limitation.

This is a very severe remote JavaScript code execution, and depending on the node process permissions can turn into [Arbitrary Remote Code Execution](https://en.wikipedia.org/wiki/Arbitrary_code_execution) on the operating system level as well.

## Remediation
Update to bassmaster version 1.5.2 or greater.

## References
- https://www.npmjs.org/package/bassmaster
- https://github.com/hapijs/bassmaster/commit/b751602d8cb7194ee62a61e085069679525138c4
