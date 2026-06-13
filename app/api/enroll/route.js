import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const {
      courseName,
      fullName,
      email,
      phone,
      city,
      ageGroup,
      priorExperience,
      preferredBatch,
      coursePrice
    } = await request.json();

    // Validate required fields
    if (!courseName || !fullName || !email || !phone || !city || !ageGroup || !priorExperience || !preferredBatch) {
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

    const recipientEmail = process.env.RECIPIENT_EMAIL || "sakthikumaran.dsinventek@gmail.com";

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: recipientEmail,
      subject: `[DS Inventek] Course Enrollment Request — ${courseName} — ${fullName}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 1.5rem;">New Course Enrollment Request</h2>
          
          <div style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <p style="margin: 0.5rem 0;"><strong>Course:</strong> ${courseName} ${coursePrice ? `(${coursePrice})` : ""}</p>
            <p style="margin: 0.5rem 0;"><strong>Student Name:</strong> ${fullName}</p>
            <p style="margin: 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p style="margin: 0.5rem 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #06b6d4;">${phone}</a></p>
            <p style="margin: 0.5rem 0;"><strong>City:</strong> ${city}</p>
            <p style="margin: 0.5rem 0;"><strong>Age Group:</strong> ${ageGroup}</p>
            <p style="margin: 0.5rem 0;"><strong>Prior Experience:</strong> ${priorExperience}</p>
            <p style="margin: 0.5rem 0;"><strong>Preferred Batch:</strong> ${preferredBatch}</p>
          </div>

          <div style="border-top: 1px solid rgba(124, 58, 237, 0.3); padding-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
            <p style="margin: 0.5rem 0;">✓ This is an automated email from DS Inventek Course Enrollment System.</p>
            <p style="margin: 0.5rem 0;">Please reply directly to ${email} or call ${phone} to follow up with the user.</p>
          </div>
        </div>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Enrollment Confirmation: ${courseName} | DS Inventek`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 1.5rem;">Thank you, ${fullName}!</h2>
          
          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            We have received your enrollment request for the **${courseName}** course. A team member will contact you within **24 hours** to confirm batch availability, scheduling, and payment options.
          </p>

          <div style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <h3 style="color: #7c3aed; margin-top: 0;">Enrollment Summary:</h3>
            <p style="margin: 0.5rem 0;"><strong>Course:</strong> ${courseName}</p>
            <p style="margin: 0.5rem 0;"><strong>Preferred Batch:</strong> ${preferredBatch}</p>
            <p style="margin: 0.5rem 0;"><strong>Reference ID:</strong> ENR-${Date.now()}</p>
          </div>

          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            For immediate support or questions, feel free to reach out to us at:<br/>
            📧 Email: info@dsinventek.com<br/>
            📞 WhatsApp: +91 99433 36712<br/>
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
      JSON.stringify({ success: true, message: "Enrollment request sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Enrollment sending error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process enrollment", 
        details: error.message || "Unknown error occurred"
      }),
      { status: 500 }
    );
  }
}
