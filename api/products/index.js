const { Router } = require('express');
const {
  getProducts, getSingleProduct, create, update, deleteProduct
} = require('./products');

const router = Router();

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProduct);





module.exports = router;