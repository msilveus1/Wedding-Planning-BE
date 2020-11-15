const pool = require('../db')

modules.exports = {
    authentication : async function authentication(request,callback){
        let conn;
        try{
            conn = await pool.getConnection();
        }catch (err){
            console.log(err)
        } finally {
            if(conn)  conn.release();
        }
    }

}