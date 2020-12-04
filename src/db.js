const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'msilveus', 
     password: '',
     connectionLimit: 5,
     database : 'WeddingPlanning',
     port: '/var/run/mysqld/mysqld.sock'

});

module.exports = pool