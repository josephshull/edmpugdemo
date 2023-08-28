var express = require('express');
var router = express.Router();
var userModel = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  try {
    let user = req.body
    userModel.CreateUser(user.username, user.password, user.email)
    res.sendStatus(200)
  }
  catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router;
