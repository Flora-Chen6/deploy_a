// require('dotenv').config()
import jsforce from 'jsforce';
import dotenv from 'dotenv';
dotenv.config();


const SF_LOGIN_URL = process.env.SF_LOGIN_URL

export const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
});



//  conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, userInfo) => {
//     if (err){
//         console.log(err)
//     } else {
//         console.log("User ID: "+ userInfo.id)
//         console.log("Org ID: " + userInfo.organizationId)
//     }
// })

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password: process.env.DB_PASSWORD, 
//   database:"Login"
// })