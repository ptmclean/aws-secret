# aws-secret
A javascript function that makes getting of a secret from secret manager a one liner.

## Installation
To install simply...
```
npm i aws-secret
```

## Assumptions
The function takes the key and optionally a region. The AWS key and secret are assumed to be gathered from the role executing, the environment variables or the shared credentials file(~/.aws/credentials).

## API

The following is an example of the use of the function...
```
const getSecret = require('aws-secret').default;
const secretValue = getSecret('secretKey', 'ap-southeast-2'); // Note region defaults to 'ap-southeast-2'
```

The function will throw an exception if it fails to get or decrypt the key provided.

