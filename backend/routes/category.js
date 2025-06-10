const express = require("express");
const Category = require("../models/categoryModel.js");
const requireAdmin = require("../middleware/requireAdmin.js");
const Product = require("../models/productModel.js");

const router = express.Router();

router.post('/category', requireAdmin, async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
    }

    try {
        const newCategory = new Category({ name: name.trim() });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/category', async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/category/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/category/:name/products', async (req, res) => {
    const { name } = req.params;

    console.log('Received request for category:', name);

    try {
        const category = await Category.findOne({ name: new RegExp(`^${name}$`, 'i') });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const products = await Product.find({ category: category._id });

        res.status(200).json({ products });
    } catch (error) {
        console.error("API error:", error);
        res.status(500).json({
            error: 'Failed to fetch products by category',
            details: error.message
        });
    }
});

router.put('/category/:id', requireAdmin, async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { name: name.trim() },
            { new: true, runValidators: true }
        );
        if (!updatedCategory) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/category/:id', requireAdmin, async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ error: 'Category not found' });
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
