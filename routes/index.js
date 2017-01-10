var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});
router.get('/other', function(req, res) {
  res.render('other', { title: 'Other' });
});

router.get('/errortest', function(req, res) {
  res.render('errortest', { title: 'errortest' });
});


module.exports = router;
