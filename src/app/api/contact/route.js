// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // Create transporter with detailed configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: 'waseemmd907@gmail.com', // Your sending email
        pass: process.env.GMAIL_APP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify SMTP connection
    await transporter.verify();

    const mailOptions = {
      from: '"Your Website Contact" <waseemmd907@gmail.com>',
      to: 'strwaseem285@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email with detailed error handling
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully', id: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });

    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}