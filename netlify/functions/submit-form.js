const { sendEmail } = require('../../src/services/emailService');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    const contentType = event.headers?.['content-type'] || event.headers?.['Content-Type'] || '';
    data = contentType.includes('application/json')
      ? JSON.parse(event.body || '{}')
      : Object.fromEntries(new URLSearchParams(event.body || ''));
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Requête invalide.' })
    };
  }
  const { name, email, phone, projectType, message, botcheck } = data;
  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  if (botcheck) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  const normalizedName = String(name ?? '').trim().slice(0, 100);
  const normalizedEmail = String(email ?? '').trim().slice(0, 254);
  const normalizedPhone = String(phone ?? '').trim().slice(0, 50);
  const normalizedProjectType = String(projectType ?? '').trim().slice(0, 100);
  const normalizedMessage = String(message ?? '').trim().slice(0, 5000);

  if (
    !normalizedName ||
    !normalizedMessage ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Tous les champs obligatoires ne sont pas remplis.' })
    };
  }

  const htmlContent = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom :</strong> ${escapeHtml(normalizedName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(normalizedEmail)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(normalizedPhone || 'Non renseigné')}</p>
    <p><strong>Type de projet :</strong> ${escapeHtml(normalizedProjectType || 'Non spécifié')}</p>
    <h2>Message :</h2>
    <p>${escapeHtml(normalizedMessage).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;
    if (!recipient) {
      console.error('EMAIL_TO ou EMAIL_USER doit être configuré');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Le service d'envoi n'est pas configuré." })
      };
    }

    await sendEmail({
      to: recipient,
      subject: `Nouvelle demande de devis de ${normalizedName.replace(/[\r\n]/g, ' ')}`,
      html: htmlContent,
      replyTo: normalizedEmail,
    });

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
