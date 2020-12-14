const express = require('express');
const mongoose = require('mongoose');
const categoryController = require('./controllers/categoryController');
const itemController = require('./controllers/itemController');
const cors = require('cors');

const app = express();

const dbURI = 'mongodb+srv://distraff:oidk3uYzroAmq4De@nodetuts.3lpjz.mongodb.net/linkorganizer?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(8090))
.catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/categories', categoryController);

app.use('/items', itemController);