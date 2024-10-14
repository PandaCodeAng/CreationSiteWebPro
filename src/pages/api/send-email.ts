import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  
  const transporter = nodemailer.createTransport({
    host: import.meta.env.EMAIL_HOST,
    port: Number(import.meta.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire de contact" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.EMAIL_USER,
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
    console.log('Tentative d\'envoi d\'email');

    return new Response(JSON.stringify({ message: "Email envoyé avec succès" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }), {
      status: 500,
    });
  }
};