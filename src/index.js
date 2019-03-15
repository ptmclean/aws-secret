import AWS from 'aws-sdk';

// eslint-disable-next-line import/prefer-default-export
export async function getSecret(secretKey, region = 'ap-southeast-2') {
  const client = new AWS.SecretsManager({
    region
  });
  let secret;
  const data = await client.getSecretValue({ SecretId: secretKey }).promise();
  if ('SecretString' in data) {
    secret = data.SecretString;
  } else {
    const buff = Buffer.from(data.SecretBinary, 'base64');
    secret = buff.toString('ascii');
  }
  return secret;
}
