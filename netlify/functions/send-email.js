const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire de contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nouveau message du formulaire de contact",
      text: `
        Nom: ${data.name}
        Email: ${data.email}
        Téléphone: ${data.phone}
        Type de projet: ${data.projectType}
        Message: ${data.message}
      `,
      html: `
        <h2>Nouveau message du formulaire de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Type de projet:</strong> ${data.projectType}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email envoyé avec succès" })
    };
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur lors de l'envoi de l'email" })
    };
  }
};