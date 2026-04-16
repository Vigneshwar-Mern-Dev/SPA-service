"use server";

import nodemailer from "nodemailer";

export async function submitLead(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const duration = formData.get("duration") as string;
  const location = formData.get("location") as string;

  console.log("Lead Received:");
  console.log({ name, phone, email, service, duration, location });

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;

  if (!webhookUrl) {
    console.error("Missing GOOGLE_SHEETS_WEBHOOK environment variable.");
    return { success: false, message: "Server configuration error" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone: phone ? `'${phone}` : "",
        email,
        service,
        duration,
        location
      })
    });

    if (!response.ok) {
      throw new Error(`Google Sheets Webhook failed with status ${response.status}`);
    }

    // --- NODEMAILER INTEGRATION ---
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const ownerEmail = process.env.OWNER_EMAIL || smtpUser;

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: Number(smtpPort) === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Send email to owner
      if (ownerEmail) {
        await transporter.sendMail({
          from: `"SPA Crane Service" <${smtpUser}>`,
          to: ownerEmail,
          subject: "New Lead Received from Website",
          text: `New lead received:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nDuration: ${duration}\nLocation: ${location}`,
          html: `<p><strong>New lead received:</strong></p><ul><li>Name: ${name}</li><li>Phone: ${phone}</li><li>Email: ${email}</li><li>Service: ${service}</li><li>Duration: ${duration}</li><li>Location: ${location}</li></ul>`,
        }).catch(err => console.error("Error sending email to owner:", err));
      }

      // 2. Send email to client
      if (email) {
        await transporter.sendMail({
          from: `"SPA Crane Service" <${smtpUser}>`,
          to: email,
          subject: "Thank you for contacting SPA Crane Service!",
          text: `Hi ${name},\n\nThank you for reaching out to us. We have received your request and our team will get back to you within 1-2 hours.\n\nFor faster response, you can directly call our website number: +91 97872 96480\n\nBest regards,\nSPA Crane Service`,
          html: `<p>Hi ${name},</p><p>Thank you for reaching out to us. We have received your request and our team will get back to you within <strong>1-2 hours</strong>.</p><p>For faster response, you can directly call our website number: <a href="tel:+919787296480"><strong>+91 97872 96480</strong></a></p><p>Best regards,<br/>SPA Crane Service</p>`,
        }).catch(err => console.error("Error sending email to client:", err));
      }
    } else {
      console.warn("Nodemailer environment variables not fully configured. Skipping email sending.");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead to Google Sheets or sending email:", error);
    return { success: false, message: "Failed to submit lead" };
  }
}
