import dotenv from 'dotenv';
import BigCommerce from 'node-bigcommerce';

dotenv.config();

const bigCommerce = new BigCommerce({
  logLevel: 'info',
  clientId: process.env.BIGCOMMERCE_CLIENT_ID,
  secret: process.env.BIGCOMMERCE_SECRET,
  callback: process.env.BIGCOMMERCE_CALLBACK,
  responseType: 'json',
  headers: { 'Accept-Encoding': '*' },
  apiVersion: 'v3'
});

export { bigCommerce };

