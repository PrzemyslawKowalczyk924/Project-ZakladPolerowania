const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static('src'));
app.use(express.json());

//RateLimitation func

//Define map to keep track of the number of requests per IP address
const requestLCount = new Map();
const bannedIPs = new Map();

//Define the rate limit in requests per minute
const rateLimit = 5; // 10 requests per minute


//Define middleware function to enforce the rate limit
const rateLimitMiddleware = (req, res, next) => {
    const ipAddress = req.ip;

    //Get current request count for the IP address
    const count = requestLCount.get(ipAddress) || 0;

    //Check if the IP address has exceeded the rate limit
    if (count >= rateLimit) {
        return res.status(429).send('To many requests');
    }

    //Increment the request count for the IP address
    requestLCount.set(ipAddress, count + 1);

    //Reset the request count after 1 minute
    setTimeout(() => {
        requestLCount.delete(ipAddress);
    }, 60000); //60000 miliseconds = 1 minute

    //Call the next middleware function
    next();
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/', rateLimitMiddleware, (req, res) => {
    console.log(req.body);
    
    try {
        const email = req.body.email;
        console.log('poczta: ', email)
        const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\\.)+[a-zA-Z]{2,6}$", "gi");

        let testedEmail = emailRegex.test(email);
        if (testedEmail == false) {
            throw new Error('Incorrect email address')
        } else {
            if (testedEmail == true) {
                
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'appTesterAccEmail@gmail.com',
                        
                    }
                })
            
                const mailOptions = {
                    from: req.body.email,
                    to: 'appTesterAccEmail@gmail.com',
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
            }
        }
        //console.log('testedEmail: ', testedEmail)
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }

    //res.send("success");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})