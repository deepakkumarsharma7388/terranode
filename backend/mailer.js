import nodemailer from 'nodemailer'

let transporter

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  return transporter
}

export async function sendContactEmail({ name, email, company, industry, message }) {
  const transport = getTransporter()
  const receiver = process.env.CONTACT_RECEIVER || process.env.SMTP_USER

  const html = `
    <h2>New demo request — Terranode</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
    <p><strong>Industry:</strong> ${escapeHtml(industry || '-')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || '-').replace(/\n/g, '<br/>')}</p>
  `

  await transport.sendMail({
    from: `"Terranode Website" <${process.env.SMTP_USER}>`,
    to: receiver,
    replyTo: email,
    subject: `New demo request from ${name}`,
    html,
  })
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
