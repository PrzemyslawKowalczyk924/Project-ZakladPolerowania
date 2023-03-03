const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Midleware

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static('src'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})