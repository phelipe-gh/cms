export default ({ env }) => {
  // Imprime "phelipe" no log
  console.log('phelipe');
  console.log('phelipe ' + process.env.TESTE_T);
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env('APP_KEYS', '').split(','), // Converte a variável APP_KEYS para um array de chaves.
    },
  };
};
