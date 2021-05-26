const express = require('express');
const app = express();
const route  = require('./src/routes');

app.use(express.json());

app.use(route);

app.listen(3001, () => console.log('Server created at https://localhost:3001'));