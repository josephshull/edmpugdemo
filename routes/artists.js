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

pageData.artists[1].name = "Steve Aoki"

/* GET home page. */
router.get('/', function(req, res, next) {
  pageData.user = req.session.user
  res.render('artists', pageData);
});

module.exports = router;
