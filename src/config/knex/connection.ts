import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'nWKqPp80OWcc0hJhC2HxssC5vyn+YFB1',
    database: 'sakila',
    port: 3308,
  },
  pool: { min: 1, max: 3 },
};

export default config;
