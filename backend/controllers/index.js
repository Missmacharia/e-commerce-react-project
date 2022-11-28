const mssql= require('mssql')
const {v4}=require('uuid')
const sqlConfig= require('../Config/index')

const getAllProducts= async(req, res)=>{
    try {
        //connecting to the databse
        const pool = await mssql.connect(sqlConfig)
        const response = await pool.request().execute('getAllProducts')

        const productsTable = await response.recordset
        if(productsTable.length){
            return res.status(202).json(productsTable)
        } else{
            return res.status(404).json({
                message: 'No products found'
            })
        }
        
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

const getProduct= async(req, res)=>{
    try {

        const {id}= req.params
        const pool = await mssql.connect(sqlConfig)
        const product= await( await pool.request()
        .input('productID', mssql.VarChar, productID)
        .execute('getProduct')
        )

        if(product.length){
            res.status(200).json(product)
        } else{
            res.status(404).json({
                message: `Product with ${id} does't exist`
            })
        } 
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

const addProduct= async(req, res)=>{
    try {
        const id= v4
        const {productImage, produtName, productDescription, price, discountRate}=req.body
        const productID = id()
        const pool= await mssql.connect(sqlConfig)
        await pool.request()
        .input('productID', mssql.VarChar, productID)
        .input('productImage', mssql.VarChar, productImage)
        .input('produtName', mssql.VarChar, produtName)
        .input('productDescription', mssql.VarChar, productDescription)
        .input('price', mssql.VarChar, price)
        .input('discountRate', mssql.VarChar,discountRate)
        .execute('addProduct')

        res.json({
            message: 'New product added successfully'
        })
    } catch (error) {
        res.status(404).json({
            message: 'unable to add new product'
        })
        
    }
}

const updateProduct= async(req, res)=>{
    try {
        const {id}= req.params
        const pool = await mssql.connect(sqlConfig)
        const product = await (await pool.request()
        .input('productID', mssql.VarChar, productID)
        .input('productImage', mssql.VarChar, productImage)
        .input('produtName', mssql.VarChar, produtName)
        .input('productDescription', mssql.VarChar,productDescription)
        .input('price', mssql.VarChar, price)
        .input('discountRate', mssql.VarChar, discountRate)
        .execute('updateProduct')
        )

        res.status(202).json({
            message: `Product with id ${id} has been successfully updated`
        })
        
    } catch (error) {

        res.status(404).json({
            message: `Product with id ${id} has failed`
        })

    }
}

const softDeleteProducts= async(req, res)=>{
    try {
      
        
    } catch (error) {
        
    }
}

module.exports={
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    softDeleteProducts
};