const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'msilveus', 
     password: '',
     connectionLimit: 5,
     database : 'Wedding_Planning_1',
     port: '/var/run/mysqld/mysqld.sock'

});

module.exports = pool