import nodemailer from 'nodemailer';

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export const sendEmail = async ({ to, subject, html, replyTo }: EmailPayload) => {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    throw new Error('La configuration SMTP est incomplète.');
  }

  const port = Number(process.env.EMAIL_PORT || 587);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM || user,
    to,
    subject,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé :', info.response);
    return info;
  } catch (error) {
    console.error('Erreur détaillée lors de l\'envoi de l\'email :', error);
    throw error;
  }
};
