const Products = require('../../models/product/product')

exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(404).send('Error occured while getting products from the database.')
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).send('Error occured while getting product from the database.')
    }
}

exports.create = async (req, res) => {
    try {
        const product = await Products.create(req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).send('Error occured while creating product.')
    }
  };

  exports.update = async (req, res) => {
    try {
        const product = await Products.updateOne({ _id: req.params.id }, req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).send('Error occured while updating product.')
    }
  };

  exports.deleteProduct = async (req, res) => {
    try {
        const product = await Products.deleteOne({ _id: req.params.id })
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).send('Error occured while deleting product.')
    }
  };