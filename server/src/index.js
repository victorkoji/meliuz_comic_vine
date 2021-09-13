const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const routes = require('./routes');
const PORT= process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);
app.set('PORT', PORT);

module.exports = app;