const express = require("express");
const Collections = require("../models/collectionModel.js");
const requireAdmin = require("../middleware/requireAdmin.js");
const Product = require("../models/productModel.js");

const router = express.Router();

router.post('/collections', requireAdmin, async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
    }

    try {
        const newCollection = new Collections({ name: name.trim() });
        const savedCollection = await newCollection.save();
        res.status(201).json(savedCollection);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/collections', async (req, res) => {
    try {
        const collections = await Collections.find();
        res.status(200).json(collections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/collections/:id', async (req, res) => {
    try {
        const collection = await Collections.findById(req.params.id);
        if (!collection) return res.status(404).json({ error: 'Collection not found' });
        res.status(200).json(collection);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/collections/:name/products', async (req, res) => {
    const { name } = req.params;

    console.log('Received request for collection:', name);

    try {
        const collection = await Collections.findOne({ name: new RegExp(`^${name}$`, 'i') });

        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        const products = await Product.find({ collections: collection._id });

        res.status(200).json({ products });
    } catch (error) {
        console.error("API error:", error);
        res.status(500).json({
            error: 'Failed to fetch products by collection',
            details: error.message
        });
    }
});

router.put('/collections/:id', requireAdmin, async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
    }

    try {
        const updatedCollection = await Collections.findByIdAndUpdate(
            req.params.id,
            { name: name.trim() },
            { new: true, runValidators: true }
        );
        if (!updatedCollection) return res.status(404).json({ error: 'Collection not found' });
        res.status(200).json(updatedCollection);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/collections/:id', requireAdmin, async (req, res) => {
    try {
        const deletedCollection = await Collections.findByIdAndDelete(req.params.id);
        if (!deletedCollection) return res.status(404).json({ error: 'Collection not found' });
        res.status(200).json({ message: 'Collection deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
