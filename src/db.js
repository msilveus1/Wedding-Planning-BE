const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'msilveus', 
     password: '',
     connectionLimit: 5,
     
     port: '/var/run/mysqld/mysqld.sock'

});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}