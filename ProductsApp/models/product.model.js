const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  id: { type: String, required: true, max: 8 },
  text: { type: String, required: true, max: 100 },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
