<a href="https://github.com/spumko"><img src="https://raw.github.com/spumko/spumko/master/images/from.png" align="right" /></a>
![bassmaster Logo](https://raw.github.com/spumko/bassmaster/master/images/bassmaster.png)

The batch endpoint makes it easy to combine requests into a single one.  It also supports pipelining so you are able to take the result of one of the endpoints in the batch request and use it in a subsequent endpoint.  The batch endpoint only responds to POST requests.

## Getting Started
Install **bassmaster** by either running `npm install bassmaster` in your sites working directory or add 'bassmaster' to the dependencies section of the 'package.json' file and run `npm install`.

### Required permissions
**bassmaster** requires the following permissions to be granted on the server for the plugin to work correctly:
- route

### Available options
At this time the options object supports the following configuration:
- `batchEndpoint` - the path where batch requests will be served from.  Default is '/batch'.

As an example to help explain the use of the endpoint, assume that the server has a route at '/currentuser' and '/users/{id}/profile/'.  You can make a POST request to the batch endpoint with the following body:
`{ "requests": [ {"method": "get", "path": "/currentuser"}, {"method": "get", "path": "/users/$0.id/profile"} ] }` and it will return an array with the current user and their profile.

The response body to the batch endpoint is an ordered array of the response to each request.  Therefore, if you make a request to the batch endpoint that looks like `{ "requests": [ {"method": "get", "path": "/users/1"}, {"method": "get", "path": "/users/2"} ] }` the response might look like:
`[{"userId": "1", "username": "bob"}, {"userId": "2", "username": "billy" }]` where the first item in the response array is the result of the request from the first item in the request array.

If an error occurs as a result of one the requests to an endpoint it will be included in the response in the same location in the array as the request causing the issue.  The error object will include an error property that you can interrogate.  At this time the response is a 200 even when a request in the batch returns a different code.

*** At this time batch only supports requests to routes that use the GET method.
