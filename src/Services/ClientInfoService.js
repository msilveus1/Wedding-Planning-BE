const pool = require('../db')

module.exports = {
    insertClientInfo : async function(body, callback){
        if(body.name === undefined || body.email === undefined || body.phoneNumber === undefined || 
            body.email === undefined || body.city === undefined || body.state === undefined){

            callback(400,"message","Incorrect Formating")
        
        }else{
            let conn;
            try {
                conn = await pool.getConnection();
                var query
                if(body.description === 'undefined'){
                    query = `
                        INSERT INTO clientInfo(Name,Email,PhoneNumber,City,State,Description) 
                        VALUES(${conn.escape(body.name)},${conn.escape(body.email)},${conn.escape(body.phoneNumber)}
                        ,${conn.escape(body.city)},${conn.escape(body.state)}, NULL)
                    `;
                }else{
                    query = `
                        INSERT INTO clientInfo(Name,Email,PhoneNumber,City,State,Description) 
                        VALUES(${conn.escape(body.name)},${conn.escape(body.email)},${conn.escape(body.phoneNumber)}
                        ,${conn.escape(body.city)},${conn.escape(body.state)}, ${conn.escape(body.description)})
                    `;
                }
                await conn.query(query)
                callback(200,"message","Client Info added successfully")
            } catch (err) {
                console.log(err)
                callback(500,"message","Internal Server Error")
            } finally {
                if (conn) return conn.end();
            }
        }


    }
}