// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    }, 
    useNullAsDefault: true
  }, 
    pool: {
      min: 2,
      max: 10
    }
};
