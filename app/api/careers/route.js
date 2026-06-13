import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, position, skills, coverLetter, portfolioUrl } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !position || !skills || !coverLetter) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || "sakthikumaran.dsinventek@gmail.com",
      subject: `[DS Inventek Careers] Application for ${position} — ${name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; margin-bottom: 1.5rem;">New Job Application Received</h2>
          
          <div style="background: rgba(6, 182, 212, 0.1); border-left: 4px solid #06b6d4; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <p style="margin: 0.5rem 0;"><strong>Position Applied:</strong> <span style="color: #22d3ee; font-weight: bold;">${position}</span></p>
            <p style="margin: 0.5rem 0;"><strong>Candidate Name:</strong> ${name}</p>
            <p style="margin: 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p style="margin: 0.5rem 0;"><strong>Phone:</strong> ${phone}</p>
            ${portfolioUrl ? `<p style="margin: 0.5rem 0;"><strong>Resume / Portfolio Link:</strong> <a href="${portfolioUrl}" target="_blank" style="color: #a78bfa;">${portfolioUrl}</a></p>` : ""}
          </div>

          <div style="background: rgba(124, 58, 237, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid rgba(167, 139, 250, 0.15);">
            <h3 style="color: #a78bfa; margin-top: 0;">Skill Sets & Core Technologies:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap; color: #f1f5f9;">${skills}</p>
          </div>

          <div style="background: rgba(6, 182, 212, 0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid rgba(6, 182, 212, 0.15);">
            <h3 style="color: #06b6d4; margin-top: 0;">Cover Letter / Bio:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap; color: #f1f5f9;">${coverLetter}</p>
          </div>

          <div style="border-top: 1px solid rgba(124, 58, 237, 0.3); padding-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
            <p style="margin: 0.5rem 0;">✓ This is an automated email from DS Inventek Careers portal.</p>
            <p style="margin: 0.5rem 0;">Please reply directly to ${email} to contact the applicant.</p>
          </div>
        </div>
      `,
    };

    // Email to candidate (confirmation)
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Application Received — ${position} | DS Inventek`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background: #06040f; color: #f8fafc; padding: 2rem; border-radius: 12px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; margin-bottom: 1.5rem;">Thank you for applying, ${name}!</h2>
          
          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            We have received your job application for the <strong>${position}</strong> position. Our recruiting team will review your skillsets and qualifications and reach out if there is a potential match.
          </p>

          <div style="background: rgba(124, 58, 237, 0.1); border-left: 4px solid #7c3aed; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px;">
            <h3 style="color: #7c3aed; margin-top: 0;">Application Overview:</h3>
            <p style="margin: 0.5rem 0;"><strong>Applied Position:</strong> ${position}</p>
            <p style="margin: 0.5rem 0;"><strong>Status:</strong> Under Review</p>
            <p style="margin: 0.5rem 0;"><strong>Reference ID:</strong> DSI-CAR-${Date.now().toString().slice(-6)}</p>
          </div>

          <p style="line-height: 1.6; margin-bottom: 1.5rem;">
            Keep building, learning, and innovating! You can discover more about our latest work on our website or follow us on our social platforms.
          </p>

          <p style="margin-top: 2rem; color: #94a3b8; font-size: 0.9rem;">
            Best regards,<br/>
            <strong>DS Inventek Careers</strong><br/>
            World Champions 🏆 Games of the Future 2024
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Application sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Careers form error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to submit application", 
        details: error.message || "Unknown error occurred"
      }),
      { status: 500 }
    );
  }
}
