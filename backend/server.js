const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validate email configuration on startup
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;
const emailConfigured = emailUser && emailPass && emailTo;

if (!emailConfigured) {
  console.warn(
    "⚠️  Email not configured. Update .env with EMAIL_USER, EMAIL_PASS, and EMAIL_TO for the contact form to work."
  );
}

// Nodemailer Transporter
const transporter =
  emailUser && emailPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      })
    : null;

// Contact Form Email Endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email, and message are required." });
  }

  if (!transporter || !emailConfigured) {
    return res.status(500).json({
      success: false,
      message:
        "Email service is not configured. Please set EMAIL_USER, EMAIL_PASS, and EMAIL_TO in the .env file.",
    });
  }

  const mailOptions = {
    from: emailUser,
    to: emailTo,
    subject: `New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">New Gym Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <h3 style="color: #333; margin-top: 20px;">Message:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">${message}</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">Sent from Iron Forge Gym Website Contact Form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully! We'll get back to you soon." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send email. Please check your email credentials and try again." });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
