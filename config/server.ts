export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Pega o HOST da variável de ambiente ou usa '0.0.0.0' como padrão.
  port: env.int('PORT', 1337), // Pega a PORT da variável de ambiente ou usa 1337 como padrão.
  app: {
    keys: env('APP_KEYS', '').split(','), // Pega as APP_KEYS da variável de ambiente e as divide em um array.
  },
  // Outras configurações
  apiTokenSalt: env('API_TOKEN_SALT', ''), // Pega o salt para API_TOKEN.
  adminJwtSecret: env('ADMIN_JWT_SECRET', ''), // Pega o segredo para JWT do admin.
  transferTokenSalt: env('TRANSFER_TOKEN_SALT', ''), // Pega o salt para o token de transferência.
  
  // Configurações de banco de dados
  database: {
    client: env('DATABASE_CLIENT', 'sqlite'), // Pega o tipo de cliente do banco de dados (sqlite por padrão).
    host: env('DATABASE_HOST', ''), // Pega o host do banco de dados.
    port: env.int('DATABASE_PORT', 5432), // Pega a porta do banco de dados, usando 5432 como padrão se não especificado.
    database: env('DATABASE_NAME', ''), // Pega o nome do banco de dados.
    username: env('DATABASE_USERNAME', ''), // Pega o nome de usuário do banco de dados.
    password: env('DATABASE_PASSWORD', ''), // Pega a senha do banco de dados.
    ssl: env.bool('DATABASE_SSL', false), // Pega a configuração SSL do banco de dados.
    filename: env('DATABASE_FILENAME', '.tmp/data.db'), // Pega o caminho do arquivo de banco de dados (para SQLite).
  },
});
