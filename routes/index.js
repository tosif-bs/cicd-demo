var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var SECRETNAME = `${process.env.NAME} ${process.env.SURNAME}`;
  res.render('index', { title: SECRETNAME });
});

module.exports = router;
