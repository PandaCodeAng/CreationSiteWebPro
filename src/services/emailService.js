import nodemailer from 'nodemailer';

export const sendEmail = async ({ to, subject, html }) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: import.meta.env.EMAIL_USER,
    to,
    subject,
    html,
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
