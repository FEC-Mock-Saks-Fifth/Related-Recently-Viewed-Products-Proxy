const mongoose = require('mongoose');
const random = require('mongoose-simple-random')
mongoose.Promise = require('bluebird');

const productSchema = new mongoose.Schema({
  product_image: String,
  product_brand: String,
  product_description: String,
  product_long_description: String,
  product_price: {type: Number, default: 0},
  product_rating_avg: String,
  product_rating_num: {type: Number, default: 0}
  // product_reviews: [],
  // product_details: []
});
productSchema.plugin(random);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;