const Product = require('../dbconnection/Product.js');

var dbcontrollers = {
  getAll: (req, res) => {
    Product.findRandom({}, {}, {limit: 6}, function(err, results) {
      if (err) {
        res.status(404).send('error finding related products', err)
      } else {
        res.json(results)
      }
    })
  },

  // getRecommended: (req, res) => {
  //   // Product.find({}).limit(6)
    //   .then((products) => {
    //     res.json(products)
    //   })
    //   .catch((err) => {
    //     res.status(404).send('error finding all products: ', err)
    //   })
  // },

  // getRecent: (req, res) => {
  // Product.find({}).limit(6)
    //   .then((products) => {
    //     res.json(products)
    //   })
    //   .catch((err) => {
    //     res.status(404).send('error finding all products: ', err)
    //   })
  // },

  getRelatedProducts: (req, res) => {
    Product.findRandom({}, {}, {limit: 3}, function(err, results) {
      if (err) {
        res.status(404).send('error finding related products', err)
      } else {
        res.json(results)
      }
    })
  }
}

module.exports = dbcontrollers;