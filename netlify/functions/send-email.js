const nodemailer = require('nodemailer');

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body)
});

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Méthode non autorisée.' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return jsonResponse(400, { error: 'Requête invalide.' });
  }

  const { name, email, phone, projectType, message } = data;
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return jsonResponse(400, { error: 'Tous les champs obligatoires ne sont pas remplis.' });
  }

  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipient = process.env.EMAIL_TO || user;
  const port = Number(process.env.EMAIL_PORT || 587);

  if (!host || !user || !pass || !recipient) {
    console.error('Configuration SMTP incomplète');
    return jsonResponse(500, { error: "Le service d'envoi n'est pas configuré." });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Formulaire de contact" <${user}>`,
      to: recipient,
      replyTo: String(email),
      subject: 'Nouveau message du formulaire de contact',
      text: [
        `Nom : ${String(name)}`,
        `Email : ${String(email)}`,
        `Téléphone : ${String(phone || 'Non renseigné')}`,
        `Type de projet : ${String(projectType || 'Non spécifié')}`,
        `Message : ${String(message)}`
      ].join('\n'),
      html: `
        <h2>Nouveau message du formulaire de contact</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || 'Non renseigné')}</p>
        <p><strong>Type de projet :</strong> ${escapeHtml(projectType || 'Non spécifié')}</p>
        <p><strong>Message :</strong> ${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    return jsonResponse(200, { message: 'Email envoyé avec succès.' });
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    return jsonResponse(500, { error: "Une erreur est survenue lors de l'envoi." });
  }
};
