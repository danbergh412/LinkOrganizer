const express = require('express');
const itemRepository = require('../repositories/itemRepository');
const router = express.Router();

router.get('/', (req, res) => {
    itemRepository.getAll()
    .then(result => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = router;