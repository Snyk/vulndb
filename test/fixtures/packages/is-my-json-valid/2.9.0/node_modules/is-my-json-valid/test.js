  var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "minLength": 100
      },
      "slug": {
        "type": "string",
        "minLength": 100
      }
    },
    "required": ["title", "slug"],
    "additionalProperties": false
  };

  var validate = require('./')(schema)

validate({title:'lol'})
console.log(validate.errors)