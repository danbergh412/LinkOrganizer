const Category = require('../models/category');

const getAll = () => {
    return Category.find();
}

module.exports = {
    getAll: getAll
};