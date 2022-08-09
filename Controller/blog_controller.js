const pool=require('../Controller/mysql_connection_controller')


exports.insert_blog_category=(req,res)=>{

    let type=req.body.type
    let sql="insert into blogcatego (type)values('"+type+"')"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json({data:result,messege:"category inserted"})
    })
}

exports.insert_blog=(req,res)=>{

    let category_id=req.body.category_id
    let title=req.body.title
    let description=req.body.description
    let publish_date=req.body.publish_date
    let modify_date=req.body.modify_date
    let status=req.body.status
    let author=req.body.author
    
    let sql="insert into blog (category_id,title,description,publish_date,modify_date,status,author) values('"+category_id+"','"+title+"','"+description+"','"+publish_date+"','"+modify_date+"','"+status+"','"+author+"')"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json({data:result,messege:"blog created"})
    })
}