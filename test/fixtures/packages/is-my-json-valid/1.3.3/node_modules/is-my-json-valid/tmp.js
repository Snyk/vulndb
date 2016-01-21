var validator = require('is-my-json-valid')

var validate = validator({
  type: 'object',
  properties: {
    hello: {
      type: 'string',
      required: true
    },
    age: {
      required: true,
      type: 'integer',
      minimum: 18,
      maximum: 65
    },
    gender: {
      required: true,
      type: 'string',
      enum: ['male', 'female']
    }
  }
})

//console.log(validate.toString())
console.log(validate({}))
console.log(validate.errors)
console.log(validate.error)