var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
res.render('index', { title: 'Upload Avatar', avatar_field: process.env.AVATAR_FIELD });
});

module.exports = router;
