const jwt = require('jsonwebtoken');

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

const payload = {
  iss: clientId,
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (60 * 60), // Token valid for 1 hour
  aud: 'https://api.bigcommerce.com'
};

const token = jwt.sign(payload, clientSecret);

console.log(token);


