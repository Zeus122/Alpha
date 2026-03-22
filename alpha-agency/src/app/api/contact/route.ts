import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL: RESEND_API_KEY is missing. Add it to your Netlify Environment Variables.");
      return NextResponse.json(
        { error: "Server configuration missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, brandName, websiteLink, email, phoneNumber, serviceDescription } = body;

    // 1. Basic validation (Name, Email, Service Description are required)
    if (!name || !email || !serviceDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 3. Email HTML Design (Dark Theme)
    const htmlTemplate = `
      <div style="background-color: #0D0D0D; color: #F2F2F2; font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 30px; background-color: #141414;">
          <h2 style="color: #E21B1B; margin-top: 0; font-size: 24px; text-transform: uppercase;">🔥 New Lead Received</h2>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Name</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;"><strong>${name}</strong></p>
          </div>

          ${brandName ? `
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Brand Name</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;"><strong>${brandName}</strong></p>
          </div>
          ` : ''}

          ${websiteLink ? `
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Website Link</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">
              <a href="${websiteLink.startsWith('http') ? websiteLink : `https://${websiteLink}`}" style="color: #E21B1B; text-decoration: none;">${websiteLink}</a>
            </p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Email</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">
              <a href="mailto:${email}" style="color: #E21B1B; text-decoration: none;">${email}</a>
            </p>
          </div>

          ${phoneNumber ? `
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Phone Number</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">
              <a href="tel:${phoneNumber}" style="color: #F2F2F2; text-decoration: none;">${phoneNumber}</a>
            </p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 0; color: rgba(242,242,242,0.5); font-size: 12px; text-transform: uppercase;">Service Needed / Description</p>
            <div style="margin: 5px 0 0 0; font-size: 16px; background-color: #0D0D0D; padding: 15px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); color: #F2F2F2;">
              ${serviceDescription.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0 20px 0;">
          <p style="color: rgba(242,242,242,0.3); font-size: 12px; text-align: center; margin: 0;">
            Received at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' })} from Alpha Agency Website
          </p>
        </div>
      </div>
    `;

    // 4. Send Email via Resend
    const data = await resend.emails.send({
      from: "Alpha Agency <onboarding@resend.dev>", // Required for Resend free tier
      to: ["alphamediaagency.eg@gmail.com"],
      replyTo: email,
      subject: "🔥 New Lead from Website",
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
