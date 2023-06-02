module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "optima1234",
  DB: "bookdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
