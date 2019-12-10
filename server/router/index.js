const router = require('express').Router();
const dbcontroller = require('../db/controllers');

router.route('/api/all_products')
  .get(dbcontroller.getAll);

// router.route('/api/recommended_products')
//   .get(dbcontroller.getRecommended);

// router.route('/api/recently_viewed')
//   .get(dbcontroller.getRecent);

router.route('/api/related_products')
  .get(dbcontroller.getRelatedProducts);

module.exports = router;