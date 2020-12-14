const Item = require('../models/item');

const getAll = () => {
    return Item.find().populate('categories');
}

module.exports = {
    getAll: getAll
};