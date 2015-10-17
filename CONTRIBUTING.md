# Guidelines

## Vulnerability data
When adding new vulnerabilities, follow the directory structure and naming convention, stick to the [schema](test/fixtures/schema/vulnerability-data-schema.json) and please make sure all tests pass when running `npm test`.

## Patch files
### Creating patch files from Github commits
Conveniently, Github lets us get the patch file from any commit by appending `.patch` to the commit url.
For example, while looking at the [diff between two releases](https://github.com/rauchg/ms.js/compare/0.7.0...0.7.1) we can choose a [single commit that addresses a vulnerability in the package](https://github.com/rauchg/ms.js/commit/48701f029417faf65e6f5e0b61a3cebe5436b07b). Appending [`.patch` to the url](https://github.com/rauchg/ms.js/commit/48701f029417faf65e6f5e0b61a3cebe5436b07b.patch) will get us the non-formatted unified diff file.

### Creating patch files using git diff
There are a few different ways to create patch files using the `git diff` command. When executed without any arguments in the context of a git repository, a unified diff file for all the unstaged changes will be printed. A file or folder can be specified to get selected differences instead.
We can also get the differences between two commits or branches.

Example (diff between two releases):
```
$ git diff 0.1.5..0.1.6
diff --git a/.gitignore b/.gitignore
index f96c7db..856407e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -2,3 +2,4 @@
 node_modules
 examples/extract/
 test/tmp/
```

### Creating patch files using GNU diff
Unified diff files can be created for a file or a folder by running `diff` with the following options:
- `-N` treat absent files as empty
- `-a` treat all files as text
- `-u` unified format output (can optionally set the number of lines of unified context, default is 3)
- `-r` recursively compare any subdirectories found

Example (diff between two files):
```
$ diff -Naur ./0.6.2/node_modules/ms/index.js ./0.7.0/node_modules/ms/index.js
--- ./0.6.2/node_modules/ms/index.js	2013-12-05 17:57:12.000000000 +0200
+++ ./0.7.0/node_modules/ms/index.js	2014-11-24 09:57:02.000000000 +0200
@@ -38,13 +38,15 @@
  */

 function parse(str) {
-  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
+  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
.
.
```

## Contributor Agreement
A patch will only be considered for merging into the upstream codebase after you have signed our contributor agreement, assigning us the rights to the contributed code and granting you a license to use it in return. Our agreement (based on [MongoDB's agreement](https://www.mongodb.com/legal/contributor-agreement)) will be posted here soon, in the meantime we'll send it to you via email when needed.

