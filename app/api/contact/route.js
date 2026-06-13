import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message, source } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 1.5rem;">New Contact Form Submission</h2>
          
          <div style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <p style="margin: 0.5rem 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            ${phone ? `<p style="margin: 0.5rem 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
            <p style="margin: 0.5rem 0;"><strong>Subject:</strong> ${subject || "Not specified"}</p>
            ${source ? `<p style="margin: 0.5rem 0;"><strong>How they heard about us:</strong> ${source}</p>` : ""}
          </div>

          <div style="background: rgba(6, 182, 212, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <h3 style="color: #06b6d4; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid rgba(124, 58, 237, 0.3); padding-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
            <p style="margin: 0.5rem 0;">✓ This is an automated email from DS Inventek contact form.</p>
            <p style="margin: 0.5rem 0;">Please reply directly to ${email} to respond to the user.</p>
          </div>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting DS Inventek",
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 1.5rem;">Thank you, ${name}!</h2>
          
          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            We have received your message and appreciate your interest in DS Inventek. Our team typically responds within <strong>24 hours</strong> on business days.
          </p>

          <div style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <h3 style="color: #7c3aed; margin-top: 0;">Your Message Summary:</h3>
            <p style="margin: 0.5rem 0;"><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
            <p style="margin: 0.5rem 0;"><strong>Reference ID:</strong> ${Date.now()}</p>
          </div>

          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            For urgent inquiries, you can reach us at:<br/>
            📧 Email: info@dsinventek.com<br/>
            📍 Location: Chennai / Pondicherry, Tamil Nadu, India
          </p>

          <p style="margin-top: 2rem; color: #94a3b8; font-size: 0.9rem;">
            Best regards,<br/>
            <strong>DS Inventek Team</strong><br/>
            World Champions 🏆 Games of the Future 2024
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    
    // Check for missing environment variables
    if (!process.env.SMTP_PASSWORD || process.env.SMTP_PASSWORD === "your_app_password_here") {
      return new Response(
        JSON.stringify({ 
          error: "Email service not configured",
          details: "SMTP_PASSWORD is missing or not configured. Please check your .env.local file and add your Gmail app password."
        }),
        { status: 500 }
      );
    }

    // Check for SMTP authentication errors
    if (error.message && error.message.includes("Invalid login")) {
      return new Response(
        JSON.stringify({ 
          error: "Email authentication failed",
          details: "Gmail authentication failed. Please verify your SMTP credentials in .env.local"
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ 
        error: "Failed to send email", 
        details: error.message || "Unknown error occurred"
      }),
      { status: 500 }
    );
  }
}
