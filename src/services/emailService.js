import nodemailer from 'nodemailer';

export const sendEmail = async ({ to, subject, html }) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "creationsitewebpromo@gmail.com",
      pass: "qbbz iynw eegp vohs"
    },
  });

  const mailOptions = {
    from: "creationsitewebpromo@gmail.com",
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
