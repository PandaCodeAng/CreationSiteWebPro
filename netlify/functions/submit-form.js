const { sendEmail } = require('../../src/services/emailService');

exports.handler = async (event, context) => {
  console.log('Fonction Netlify appelée');

  if (event.httpMethod !== 'POST') {
    console.log('Méthode non autorisée');
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  console.log('Corps de la requête:', event.body);

  const data = JSON.parse(event.body);
  const { name, email, phone, projectType, message } = data;

  if (!name || !email || !message) {
    console.log('Champs manquants');
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Tous les champs obligatoires ne sont pas remplis.' })
    };
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
    console.log('Tentative d\'envoi d\'email');
    await sendEmail({
      to: process.env.EMAIL_TO,
      subject: `Nouvelle demande de devis de ${name}`,
      html: htmlContent,
    });
    console.log('Email envoyé avec succès');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Votre demande a été reçue et est en cours de traitement.' })
    };
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Une erreur s'est produite lors du traitement de votre demande." })
    };
  }
};