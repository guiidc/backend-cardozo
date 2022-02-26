const express = require('express');
const routes = require('./routes');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || '3333';
app.listen(port, () => console.log('Server is on!'))