import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      fullName,
      organisationName,
      email,
      phone,
      serviceInterest,
      budgetRange,
      message
    } = await request.json();

    // Validate required fields
    if (!fullName || !email || !phone || !serviceInterest || !budgetRange || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    if (fullName.length < 2) {
      return new Response(
        JSON.stringify({ error: "Full Name must be at least 2 characters" }),
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return new Response(
        JSON.stringify({ error: "Message/Requirements must be at least 20 characters" }),
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

    const recipientEmail = process.env.RECIPIENT_EMAIL || "sakthikumaran.dsinventek@gmail.com";

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: recipientEmail,
      subject: `[DS Inventek] Quotation Request — ${serviceInterest} — ${fullName}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; margin-bottom: 1.5rem;">New Service Quotation Request</h2>
          
          <div style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <p style="margin: 0.5rem 0;"><strong>Service Interest:</strong> ${serviceInterest}</p>
            <p style="margin: 0.5rem 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="margin: 0.5rem 0;"><strong>Organisation:</strong> ${organisationName || "Not specified"}</p>
            <p style="margin: 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p style="margin: 0.5rem 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #06b6d4;">${phone}</a></p>
            <p style="margin: 0.5rem 0;"><strong>Budget Range:</strong> ${budgetRange}</p>
          </div>

          <div style="background: rgba(124, 58, 237, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; margin-top: 0;">Requirements / Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid rgba(6, 182, 212, 0.3); padding-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
            <p style="margin: 0.5rem 0;">✓ This is an automated email from DS Inventek B2B Quotation System.</p>
            <p style="margin: 0.5rem 0;">Please reply directly to ${email} or call ${phone} to follow up on this B2B lead.</p>
          </div>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Quotation Request Received: ${serviceInterest} | DS Inventek`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; margin-bottom: 1.5rem;">Quotation Request Acknowledged</h2>
          
          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            Hello ${fullName},<br/>
            Thank you for requesting a quotation for **${serviceInterest}**. Our consulting team has received your brief and is currently preparing a custom scope response based on your requirements.
          </p>

          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            A business development representative will contact you within **24 hours** to schedule a direct consultation call or share the initial proposal.
          </p>

          <div style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <h3 style="color: #06b6d4; margin-top: 0;">Inquiry Reference:</h3>
            <p style="margin: 0.5rem 0;"><strong>Requested Service:</strong> ${serviceInterest}</p>
            <p style="margin: 0.5rem 0;"><strong>Reference ID:</strong> QUO-${Date.now()}</p>
          </div>

          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            For urgent requests or to share additional site/architectural layouts, please reach us directly at:<br/>
            📧 Email: info@dsinventek.com<br/>
            📞 WhatsApp: +91 99433 36712<br/>
            📍 Location: Chennai / Pondicherry, Tamil Nadu, India
          </p>

          <p style="margin-top: 2rem; color: #94a3b8; font-size: 0.9rem;">
            Best regards,<br/>
            <strong>DS Inventek B2B Solutions Team</strong><br/>
            World Champions 🏆 Games of the Future 2024
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Quotation request submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Quotation sending error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process quotation request", 
        details: error.message || "Unknown error occurred"
      }),
      { status: 500 }
    );
  }
}
