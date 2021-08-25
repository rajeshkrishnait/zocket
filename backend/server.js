const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mysql=require("mysql");
const cors=require("cors");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
const db=mysql.createPool({
host: "localhost",
user: "root",
password: "1234",
database: "zocket",
port: 3306,
});

app.post("/api/insertEmail",(req,res)=>{
    const email=req.body.curEmail;
    const sqlFetch="select email_id as present from zocket where email_id=?";
    const sqlInsert="insert into zocket(email_id) values(?)";
    db.query(sqlFetch, [email], (error, result) =>{
        if(result.length == 1){
            res.send(false);
        }else{
            db.query(sqlInsert,[email],(error,result) =>{
                res.send(true);
            });
        }
    });
})
app.listen(3001,()=>{
    console.log("Started at locolhost 3001");
});