const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const itemSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
},
{
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;