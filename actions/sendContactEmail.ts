"use server";

import { Resend } from "resend";

export type ContactFormValues = {
  fullName: string;
  email: string;
  social?: string;
  purpose: string;
};

export async function sendContactEmail(data: ContactFormValues) {
  // Move initialization inside the function to ensure process.env is ready
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing Resend configuration in environment variables.");
    return { success: false, error: "Server configuration error" };
  }

  const resend = new Resend(apiKey);

  try {
    const { fullName, email, social, purpose } = data;

    const result = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry — ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Social:</strong> ${social || "N/A"}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <p><strong>Message:</strong></p>
            <p>${purpose}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #666">Sent from akshatmahadeva.com</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend API Error:", result.error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return { success: false };
  }
}
