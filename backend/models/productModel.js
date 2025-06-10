const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    imageUrl: String,
    stock: { type: String, default: 0 },
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collections' }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
