"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSecret;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getSecret(secretKey, region = 'ap-southeast-2') {
  const client = new _awsSdk.default.SecretsManager({
    region
  });
  let secret;
  const data = await client.getSecretValue({
    SecretId: secretKey
  }).promise();

  if ('SecretString' in data) {
    [secret] = Object.values(JSON.parse(data.SecretString));
  } else {
    const buff = Buffer.from(data.SecretBinary, 'base64');
    secret = buff.toString('ascii');
  }

  return secret;
}