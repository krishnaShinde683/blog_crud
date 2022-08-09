const mysql=require('mysql')

let pool=mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"blogger",
    password:""
})
pool.connect((err)=>{
if(err)throw err;
console.log("connection establish")
})

module.exports=pool;