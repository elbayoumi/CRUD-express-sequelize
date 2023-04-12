const Sequelize = require('sequelize');
const env = process.env.NODE_ENV||'development';
const config = require('./config')[env];
module.exports = new Sequelize(config.database,
    config.username, config.password,
    config
);
console.log(config.dialect)
// module.exports = new Sequelize(config.database, config.username, config.password, {
//     host: 'localhost',
//     dialect: config.dialect||'mysql',
//   });