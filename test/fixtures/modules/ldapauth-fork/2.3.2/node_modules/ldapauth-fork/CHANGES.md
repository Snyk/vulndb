# node-ldapauth-fork Changelog

## 2.3.2

- [issue #19] Added messages to options asserts

## 2.3.1

- [issue #14] Use bcryptjs instead of the C++ version.

## 2.3.0

- [passport-ldapauth issue #10] Added support for fetching user groups. If `groupSearchBase` and `groupSearchFilter` are defined, a group search is conducted after the user has succesfully authenticated. The found groups are stored to `user._groups`:

```javascript
new LdapAuth({
  "url": "ldaps://ldap.example.com:636",
  "adminDn": "cn=LdapAdmin,dc=local",
  "adminPassword": "LdapAdminPassword",
  "searchBase": "dc=users,dc=local",
  "searchFilter": "(&(objectClass=person)(sAMAccountName={{username}}))",
  "searchAttributes": [
    "dn", "cn", "givenName", "name", "memberOf", "sAMAccountName"
  ],
  "groupSearchBase": "dc=groups,dc=local",
  "groupSearchFilter": "(member={{dn}})",
  "groupSearchAttributes": ["dn", "cn", "sAMAccountName"]
});
```

## 2.2.19

- [issue #9] Configurable bind parameter. Thanks to @oanuna

## 2.2.18

- [issue #8] Fix options to actually work as documented

## 2.2.17

- Added `bindCredentials` option. Now defaulting to same names as ldapjs.

## 2.2.16

- Added option `includeRaw` for including `entry.raw` to the returned object (relates to ldapjs issue #238)

## 2.2.15

- [issue #5] Handle missing bcrypt and throw a explanatory exception instead

## 2.2.14

- [issue #4] Log error properties code, name, and message instead of the object

## 2.2.12

- [issue #1] Add more ldapjs options

## 2.2.11

- [passport-ldapauth issue #3] Update to ldapjs 0.7.0 fixes unhandled errors when using anonymous binding

## 2.2.10

- Try to bind with empty `adminDn` string (undefined/null equals no admin bind)

## 2.2.9

- [ldapauth issue #13] bcrypt as an optional dependency

## 2.2.8

- [ldapauth issue #2] support anonymous binding
- [ldapauth issue #3] unbind clients in `close()`
- Added option `searchScope`, default to `sub`

## 2.2.7

- Renamed to node-ldapauth-fork

## 2.2.6

- Another readme fix

## 2.2.5

- Readme updated

## 2.2.4

- [ldapauth issues #11, #12] update to ldapjs 0.6.3
- [ldapauth issue #10] use global search/replace for {{username}}
- [ldapauth issue #8] enable defining attributes to fetch from LDAP server

# node-ldapauth Changelog

## 2.2.3 (not yet released)

(nothing yet)


## 2.2.2

- [issue #5] update to bcrypt 0.7.5 (0.7.3 fixes potential mem issues)


## 2.2.1

- Fix a bug where ldapauth `authenticate()` would raise an example on an empty
  username.


## 2.2.0

- Update to latest ldapjs (0.5.6) and other deps.
  Note: This makes ldapauth only work with node >=0.8 (because of internal dep
  in ldapjs 0.5).


## 2.1.0

- Update to ldapjs 0.4 (from 0.3). Crossing fingers that this doesn't cause breakage.


## 2.0.0

- Add `make check` for checking jsstyle.
- [issue #1] Update to bcrypt 0.5. This means increasing the base node from 0.4
  to 0.6, hence the major version bump.


## 1.0.2

First working version.


