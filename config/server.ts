export default ({ env }) => {
  // Imprime "phelipe" no log
  console.log('phelipe1 ' + process.env.TESTE_T);
  console.log('phelipe2 ' + env('TESTE_T'));
  
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: [
        '23U8nm7HILiV7349ZLHCTA==',
        'wRyvSH+9R+2aiKQrz5fknw==',
        '9qajpTG7Icfb+Lywd3IdHg==',
        'NO8c99QL8i8q7hKea9Ymmg=='
      ]      
    },
  };
};
