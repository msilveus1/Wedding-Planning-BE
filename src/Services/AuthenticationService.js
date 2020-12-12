var jwt = require('jsonwebtoken');

const pool = require('../db')

module.exports = {
    checkAuthentication : async function(body, callback){ 
        let conn;
        try {
            conn = await pool.getConnection();
            query = `SELECT * FROM api_authentication WHERE username=${conn.escape(body.username)} AND password=${conn.escape(body.password)}`
            console.log(query)
            const rows = await conn.query(query);	        
            
            if(rows.length == 1){
                callback(200,"token",this.generateToken())
            }else{
                callback(403, "message" ,"Invalid Credentials")
            }

        } catch (err) {
            console.log(err)
        } finally {
            if (conn) return conn.end();
        }
    },

    generateToken : () => {
        //TODO: Possibly make this much more advance
        return jwt.sign({ data: 'curtain'}, 'salamander', { expiresIn: '1h' });
    },
    verifyToken : (Token) => {
        //TODO: Verify this works
        var decoded = jwt.verify(Token, 'curtain')
    }



}