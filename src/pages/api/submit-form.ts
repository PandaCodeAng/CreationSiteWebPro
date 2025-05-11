import type { APIRoute } from 'astro';
import { sendEmail } from '../../services/emailService';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { name, email, phone, projectType, message } = data;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Tous les champs obligatoires ne sont pas remplis.' }),
      { status: 400 }
    );
  }

  const htmlContent = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
    <p><strong>Type de projet :</strong> ${projectType || 'Non spécifié'}</p>
    <h2>Message :</h2>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  try {
    await sendEmail({
      to: 'contact@creationsitewebpro.com',
      subject: `Nouvelle demande de devis de ${name}`,
      html: htmlContent
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Votre message a été envoyé avec succès.'
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Une erreur est survenue lors de l\'envoi de votre message.'
      }),
      { status: 500 }
    );
  }
}
