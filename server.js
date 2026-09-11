// ==========================================
// Portfolio Website - Backend Server
// ==========================================

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const { Resend } = require("resend");

const app = express();

// ==========================================
// Configuration
// ==========================================

const PORT = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ==========================================
// Middleware
// ==========================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname)));

// ==========================================
// Test Route
// ==========================================

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is working!"
  });
});

// ==========================================
// Contact Form API
// ==========================================

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message
    } = req.body;

    // ------------------------------------------
    // Validate required fields
    // ------------------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    // ------------------------------------------
    // Check Resend API key
    // ------------------------------------------

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured."
      });
    }

    // ------------------------------------------
    // Send email
    // ------------------------------------------

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject || `New Portfolio Contact from ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Portfolio Contact</title>
        </head>

        <body style="
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          padding: 20px;
        ">

          <div style="
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
          ">

            <h2>New Contact Form Message</h2>

            <hr>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(subject || "No subject")}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              background: #f1f1f1;
              padding: 15px;
              border-radius: 5px;
              white-space: pre-wrap;
            ">
              ${escapeHtml(message)}
            </div>

          </div>

        </body>
        </html>
      `
    });

    // ------------------------------------------
    // Resend returned an error
    // ------------------------------------------

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        success: false,
        message: "Email delivery failed.",
        error: error.message || error
      });
    }

    // ------------------------------------------
    // Success
    // ------------------------------------------

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error) {

    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message."
    });
  }
});

// ==========================================
// Escape HTML
// Prevent HTML injection in email
// ==========================================

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {
  console.log("------------------------------------------");
  console.log("Portfolio server started successfully!");
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log("------------------------------------------");
});