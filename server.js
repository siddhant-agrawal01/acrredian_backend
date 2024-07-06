const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

app.post('/referrals', async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  // Validation logic here

  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:'smtp.gmail.com',
      auth: {
        user: 'sidanace@gmail.com',
        pass: 'mbcu smof nesr sjio',
      },
    });

    const mailOptions = {
      from: 'sidanace@gmail.com',
      to: refereeEmail,
      subject: 'You have been referred!',
      text: `Hi ${refereeName},\n\nYou have been referred by ${referrerName}. Check out our programs!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(error);
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(201).json(newReferral);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create referral' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
