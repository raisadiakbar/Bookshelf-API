module.exports = {
    development: {
    username: process.env.USERNAME_SECRET,
    password: process.env.PASSWORD_SECRET,
    database: process.env.DATABASE_SECRET,
    host: process.env.HOST_SECRET,
    dialect: process.env.DIALECT_SECRET,
    }
}