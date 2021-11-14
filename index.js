'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');

const app = express();

app.engine("html",require('ejs').renderFile)

app.get('/',(req,res)=> {
    res.render('index.html')
})

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/student', studentRoutes);

app.listen(config.port, () => console.log(`App is listening on url http://localhost:${config.port}`));