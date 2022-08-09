const express=require('express')
const routes=express.Router()

const authcontroller=require('../Controller/auth_contoller')
const authblogcontroller=require('../Controller/blog_controller')

routes.post('/sign/up',authcontroller.sign_up)
routes.post('/user/login',authcontroller.login_user)
routes.post('/admin/login',authcontroller.admin_login)

routes.post('/category/insert',authblogcontroller.insert_blog_category)

routes.post('/blog/insert',authblogcontroller.insert_blog)



module.exports=routes