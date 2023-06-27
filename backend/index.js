const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const cors = require('cors')

const app = express();
const PORT = 8001
connectToMongoDB("mongodb://0.0.0.0:27017/short-url")
    .then(() => console.log("mongodb connect"));

app.use(express.json());
app.use(cors())
app.use('/url', urlRoute);
app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));