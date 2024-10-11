module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE
  },
  test: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE
  },
  production: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE
  }
}
