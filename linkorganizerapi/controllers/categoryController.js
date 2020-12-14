const express = require('express');
const categoryRepository = require('../repositories/categoryRepository');
const router = express.Router();

router.get('/', (req, res) => {
    categoryRepository.getAll()
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = router;