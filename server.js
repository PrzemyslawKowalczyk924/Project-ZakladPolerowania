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
    res.send("success");

    const transporter = nodemailer.createTransport({
        service: '',
        auth: {
            user: '',
            pass: ''
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'kowalczy.przemek@wp.pl',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent' + info.response);
            res.send('success');
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})