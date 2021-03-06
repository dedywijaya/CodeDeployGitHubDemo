var mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.findAll = function(req, res){
  Product.find({},function(err, results) {
    return res.send(results);
  });
};

exports.import = function(req, res){
  Product.create(
    { "product": "Gatorade", "category": "Beverages"},
    { "product": "Fanta", "category": "Beverages" },
    { "product": "Lemonade", "category": "Beverages"},
    { "product": "Lemper", "category": "Food"},
    { "product": "Dorayaki", "category": "Food"},
    { "product": "Tart", "category": "Food" }
  , function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Product.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};


exports.add = function(req, res) {
  Product.create(req.body, function (err, product) {
    if (err) return console.log(err);
    return res.send(product);
  });
}


exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Product.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d products', numberAffected);
      return res.send(202);
  });
}


exports.delete = function(req, res){
  var id = req.params.id;
  Product.remove({'_id':id},function(result) {
    return res.send(result);
  });
};
