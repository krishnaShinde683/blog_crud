const pool=require('../Controller/mysql_connection_controller')
const bcrypt=require('bcryptjs')


exports.sign_up= async(req,res)=>{

    
    let f_name=req.body.f_name
    let l_name=req.body.l_name
    let email=req.body.email
    let password=req.body.password
    let dob=req.body.dob
    let salt=await bcrypt.genSalt(10)
    let hash_password= await bcrypt.hash(password,salt)
    
    
        let sql="select * from user where email='"+email+"'";
        pool.query(sql,(err,result)=>{
            
            if(err) throw err;

            if(result!=""){
            res.status(400).json({messege:"user alredy exist"})
            }
            else if(result=="")
            {
                let sql="insert into user (f_name,l_name,email,password,dob) values('"+f_name+"','"+l_name+"','"+email+"','"+hash_password+"','"+dob+"')"
                pool.query(sql,(err,result)=>{
                    if(err) throw err
                    res.status(200).json({data:result,messege:"user register"})
                })
            
            }
        }) 
   
}

exports.login_user= (req,res)=>{
    let email=req.body.email
    let sql="select * from user where email='"+email+"'"
    pool.query(sql,async(err,result)=>{
        if(err) throw err;
        if(result!=''){
          let p = await bcrypt.compare(req.body.password,result[0].password)
          console.log(p,"===p")
        if(p==true){
            res.status(200).json({
                messege:"user login successfull"
            })
        }
        else{
            res.status(400).json({
                messege:"email and password wrong"
            })
        }
    }else{
        res.status(400).json({messege:"email does not exist"})
    }
    })
}


exports.admin_login=(req,res)=>{
    let email =req.body.email
    let password= req.body.password
    let sql ="select * from user where email='"+email+"'";
    pool.query(sql,async(err,result)=>{
        if (err) throw err;
       
        if(result!=""){
          let p=await  bcrypt.compare(password,result[0].password)
          if(p==true && result[0].type==1){
            res.status(200).json({messege:"admin login successfull"})
          }
          else{
            res.status(400).json({messege:"email and password incorrect"})
          }
        
    }else{
        res.status(400).json({messege:"email does not exist"})
    }
    })
}