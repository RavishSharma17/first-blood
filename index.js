const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const bodyParser = require('body-parser');

const router = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/static', express.static('uploads'))

app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT)