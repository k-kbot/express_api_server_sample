const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ text: "hello world" });
});

router.post('/', (req, res) => {
  if (req.headers['content-type'] === "application/json") {
    res.status(201).json(req.body);
  } else {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;
