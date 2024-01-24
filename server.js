require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // Use environment variables
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send', (req, res) => {
  const { name, email, description } = req.body;
  // Add validation for name, email, and description here
  console.log("Received request on /send endpoint");

  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: `New message from ${name}`,
    text: description,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'There was a problem sending the email.' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
