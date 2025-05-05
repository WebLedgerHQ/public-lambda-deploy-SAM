const getSecrets = require('/opt/nodejs/secret-loader');

exports.handler = async (event) => {
  // Fetch secrets
  const secrets = await getSecrets('lambda/common/env/secret');

  // Use them like environment variables
  const dbHost = secrets.MYSQL_DB;
  const dbUser = secrets.MYSQL_USER;
  const dbPass = secrets.MYSQL_PASSWORD;
  console.log('check done', dbHost,dbUser,dbPass,secrets)
  // Use them in your logic
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Using secrets as env vars',
      dbHost: process.env.DB_HOST,
    }),
  };
};
