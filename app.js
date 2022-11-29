const express=require('express')
const router = express.Router()
const {createProduct,getProduct,updateProduct,deleteProduct} = require('./controllers/product')
router.post("/createproduct",createProduct)
router.get("/create",(req,res)=>{
    res.render('create',{errmsg:'',succmsg:''});
})
router.get("/getproduct",getProduct)
// router.get("/getproduct/:id",getProductById)
router.put("/updateproduct/:id",updateProduct)
router.delete("/deleteproduct/:id",deleteProduct)
module.exports=router