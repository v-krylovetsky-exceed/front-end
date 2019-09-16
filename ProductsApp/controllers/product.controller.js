const Product = require('../models/product.model');

exports.findAll = (req, res, next) => {
  Product.find()
  .then(obj => {
      res.send(obj);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};

exports.itemCreate = (req, res, next) => {
    let product = new Product(
        {
            id: req.body.id,
            text: req.body.text,
            status: req.body.status
        }
    );
    product.save(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send({message: 'Product Created successfully', result: result})
    })
};

exports.itemDelete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.itemDeleteAllDone = (req, res, next) => {
    Product.deleteMany({status:true},
    (function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    }))
};

exports.itemDone = (req, res, next) => {;
    Product.findByIdAndUpdate(req.params.id, {status: req.body.status}, function (err) {
            if (err) return next(err);
            res.send('item done.');
    });
};

exports.itemUpdate = (req, res, next) => {;
    Product.findByIdAndUpdate(req.params.id, {text: req.body.text}, function (err) {
            if (err) return next(err);
            res.send('item udpated.');
    });
};

exports.statusChangeAll = (req, res, next) => {
    Product.updateMany(req.params.status,{$set:{status:req.params.status}},function (err) {
        if (err) return next(err);
        res.send('item udpated.');
    });
};
