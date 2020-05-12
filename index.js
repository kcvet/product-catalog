const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const Products = require('./api/products/');

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'product-catalog',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('Connected to database'));

app.use(bodyParser.json({
    extended: true
  }));

app.use('/api/products', Products);

app.listen(8000, () => {
    console.log('Server has started running on port 8000!')
});
