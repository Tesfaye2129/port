const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tesfudad@gmail.com', // Your email
            pass: 'jyaq lguj sper yzzn', // Use your App Password here
        },
    });

    const mailOptions = {
        from: email, // User's email
        to: 'tesfudad@gmail.com', // Your email
        subject: `New message from ${name}`, // Subject
        text: message, // Message content
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            return res.status(500).send('Error sending message.');
        }
        console.log('Message sent:', info.response);
        res.status(200).send('Message sent successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});