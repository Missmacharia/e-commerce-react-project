const express= require('express')
const {getAllProducts, getProduct, addProduct, updateProduct, softDeleteProducts}= require('../controllers/index')
const router= express.Router()

router.get('/', getAllProducts)
router.get('/:id',getProduct)
router.post('/', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id',softDeleteProducts)

module.exports= router