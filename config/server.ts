export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env('APP_KEYS', '').split(','), // Garante que as chaves sejam convertidas para um array
  },
});
