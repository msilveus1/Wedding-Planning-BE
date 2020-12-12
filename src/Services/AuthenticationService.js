const { query } = require('express');
const pool = require('../db')

modules.exports = {
    authentication : async function authentication(req,callback){
        let conn;
        try{
            conn = await pool.getConnection();
            query = `SELECT username,password FROM DB.table WHERE username = ${req.body.username} AND password = ${req.body.pass}`
            const rows = await conn.query(query);
        }catch (err){
            console.log(err)
        } finally {
            if(conn)  conn.release();
        }
    }

}