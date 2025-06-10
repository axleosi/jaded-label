const express = require("express");
const Product = require("../models/productModel.js");
const authenticateToken = require("../middleware/authenticateToken.js");
const requireAdmin= require('../middleware/requireAdmin.js')

const router = express.Router();

router.post('/product',requireAdmin, async (req, res) => {
    const { name, description, price, imageUrl, stock, collections, category } = req.body;

    try {
        if (!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }

        const product = new Product({
            name,
            description,
            price,
            imageUrl,
            stock: stock !== undefined ? stock : undefined,
            collections,
            category
        });

        const saved = await product.save();

        res.status(201).json({
            message: "Product created successfully",
            product: saved,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.patch('/product/:id',requireAdmin, async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, update, { new: true });

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product updated', product });
  } catch (err) {
    res.status(500).json({ message: 'Patch failed', error: err.message });
  }
});

// routes/product.js
router.put('/product/:id',requireAdmin, async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    imageUrl,
    stock,
    collections,
    category
  } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        imageUrl,
        stock,
        collections,
        category
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
});

router.get('/product', async (req, res) => {
    try {
        const products = await Product.find()
            .populate('category', 'name')
            .populate('collections', 'name');
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
});

router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    console.log('get the product', id);

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product', details: error.message });
    }
});


router.delete('/product/:id',requireAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});


module.exports = router;
