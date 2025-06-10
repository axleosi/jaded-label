const mongoose = require("mongoose");

const collectionsSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

const Collections = mongoose.model('Collections', collectionsSchema);
module.exports = Collections;
