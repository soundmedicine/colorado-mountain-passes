require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///colorado-passes'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
    }

};
