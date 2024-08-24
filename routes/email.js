var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('email', {
    title: 'Escribinos para más información',
  });
});

module.exports = router;

