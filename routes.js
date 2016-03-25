module.exports = function(app){
    var products = require('./controllers/products');
    app.get('/products', products.findAll);
    app.get('/products/:id', products.findById);
    app.post('/products', products.add);
    app.put('/products/:id', products.update);
    app.delete('/products/:id', products.delete);
    app.get('/import', products.import);
}
