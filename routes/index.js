var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index', {
    title : 'Budget Grocery App',
    header: 'Welcome',
    tagline: 'Keep track of the things you need to shop'
  });
});

module.exports = router;
