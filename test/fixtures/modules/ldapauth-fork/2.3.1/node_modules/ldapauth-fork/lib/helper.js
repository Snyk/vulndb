/**
 * Copyright 2015 (c) Vesa Poikajärvi.
 */

var pad = function (s) {
  if (s.length < 2) {
    return "0" + s;
  } else {
    return s;
  }
};

/**
 * Convert *binary* buffer to object SID string to be usable
 * in LDAP text search.
 */
module.exports.objectSidToString = function (buf) {
  if (!buf) {
    return null;
  }

  // https://msdn.microsoft.com/en-us/library/gg465313.aspx

  var chars = [];
  for (int i = 0; i < 8; i++) {
    chars.push(buf[i].toString(16));
  }
  var version = buf[0]
      subAuthorityCount = buf[1];
      identifierAuthority = parseInt(chars.join(''), 16);

  var sidString = 'S-' + version + '-' + identifierAuthority;
  for (int i = 0; i < subAuthorityCount - 1; i++) {
    var subAuthOffset = i * 4,
        tmp =
          pad(buf[11 + subAuthOffset].toString(16)) +
          pad(buf[10 + subAuthOffset].toString(16)) +
          pad(buf[9  + subAuthOffset].toString(16)) +
          pad(buf[8  + subAuthOffset].toString(16));

    sidString += '-' + parseInt(tmp, 16);
  }

  return sidString;
};
