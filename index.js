require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure:true,
  port :465,
  auth: {
    user: "diamcolor@gmail.com", 
    pass: "qsyv oiwx wfmf omox", 
  },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "admin@dialumin.com", // Change to your email
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message || "No message provided."}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Your request has been sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
