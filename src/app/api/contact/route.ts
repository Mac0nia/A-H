import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

// Expect these environment variables to be set in .env.local
// EMAIL_HOST=smtp.yourprovider.com
// EMAIL_PORT=587
// EMAIL_USER=your_smtp_username
// EMAIL_PASS=your_smtp_password_or_app_password
// EMAIL_TO=gianluca.galli9519@gmail.com

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || 'gianluca.galli9519@gmail.com';

    if (!host || !user || !pass) {
      return NextResponse.json({ error: 'Email environment variables are not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    const subject = `New enquiry from ${name}${service ? ` · ${service}` : ''}`;

    const textBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Service: ${service || '-'}

Message:
${message}
`;

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New enquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Service:</strong> ${service || '-'}</p>
        <hr/>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: { name: 'A&H Website', address: user },
      replyTo: email,
      to,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
