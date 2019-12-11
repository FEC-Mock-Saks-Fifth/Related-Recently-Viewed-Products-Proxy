const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const path = require('path');
const db = require('./db/dbconnection/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/search', express.static('/Users/huntertreadaway/code_projects/hack_reactor/hrla33/FEC/Nav-Search/client/dist/'));
app.use('/', router);

var port = 3003;
app.listen(port, () => {console.log(`app is listening on port: ${port}`)});

module.exports = app;