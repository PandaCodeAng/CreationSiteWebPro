import { sendEmail } from '../../services/emailService';

export async function POST({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const projectType = data.get('project-type');
  const message = data.get('message');

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Tous les champs obligatoires ne sont pas remplis.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
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
    // Envoyer l'email de manière asynchrone
    sendEmail({
      to: 'creationsitewebpromo@gmail.com',
      subject: `Nouvelle demande de devis de ${name}`,
      html: htmlContent,
    }).catch(error => console.error('Erreur d\'envoi d\'email:', error));

    // Répondre immédiatement à l'utilisateur
    return new Response(JSON.stringify({ message: 'Votre demande a été reçue et est en cours de traitement.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return new Response(JSON.stringify({ error: "Une erreur s'est produite lors du traitement de votre demande." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}