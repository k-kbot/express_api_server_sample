var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ text: "hello world" })
});

module.exports = router;
