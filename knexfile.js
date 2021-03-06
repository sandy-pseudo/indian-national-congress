module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './model/indian_local.db3',
    },
    migrations: {
      directory: './model/migrations'
    },
    seeds: {
      directory: './model/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './model/migrations',
    },
    seeds: { directory: './model/seeds' },
  },
};
