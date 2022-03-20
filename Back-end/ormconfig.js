require('dotenv/config');

const devConfig = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_NAME,
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    authSource: 'admin',
    port: 27017,
    database: process.env.MONGO_NAME,
    useUnifiedTopology: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  },
];

module.exports = devConfig;
