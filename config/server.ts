module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 3000),
  url: env('VERCEL_URL') ? `https://${env('VERCEL_URL')}` : 'http://localhost:3000',
});
