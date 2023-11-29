const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Replace with your email config
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  auth: {
    user: 'abdulrahman.alhakim91@gmail.com', // Your email address
    pass: 'yourpassword', // Your email password
  },
});

app.post('/send', (req, res) => {
  const { name, email, description } = req.body;
  
  const mailOptions = {
    from: email,
    to: 'abdulrahman.alhakim91@gmail.com', // Your email where you'll receive messages
    subject: `New message from ${name}`,
    text: description,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
