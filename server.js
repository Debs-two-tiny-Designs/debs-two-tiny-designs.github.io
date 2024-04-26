const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'prodipto2004@gmail.com', // Replace with your Gmail email
      pass: 'Volkswagen1@1984' // Replace with your Gmail password
    }
  });

  // Email message options
  let mailOptions = {
    from: 'your-email@gmail.com', // Replace with your Gmail email
    to: 'recipient@example.com', // Replace with recipient email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Oops! Something went wrong. Please try again later.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Thank you for your message! We will get back to you soon.' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
