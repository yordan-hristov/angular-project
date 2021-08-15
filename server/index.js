require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors')

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(cors({
    origin: ['http://localhost:4200'],
    credentials: true
}))
app.use(express.json());

app.use('/api', apiRouter)

app.listen(3000, () => console.log('Server started'))