var express = require('express');
var router = express.Router();

const pageData = {
    title: 'Artists',
    artists: [
        {name: "The Fat Rat"},
        {name: "Avicci"},
        {name: "Excision"}
    ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('artists', pageData);
});

module.exports = router;
