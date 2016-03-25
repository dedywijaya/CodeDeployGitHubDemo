var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
  product: String,
  category: String
});

mongoose.model('Product', ProductSchema);