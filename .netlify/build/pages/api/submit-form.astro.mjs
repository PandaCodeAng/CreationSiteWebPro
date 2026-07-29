import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const sendEmail = async ({ to, subject, html, replyTo }) => {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!host || !user || !pass) {
    throw new Error("La configuration SMTP est incomplète.");
  }
  const port = Number(process.env.EMAIL_PORT || 587);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
  const mailOptions = {
    from: process.env.EMAIL_FROM || user,
    to,
    subject,
    html,
    replyTo
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé :", info.response);
    return info;
  } catch (error) {
    console.error("Erreur détaillée lors de l'envoi de l'email :", error);
    throw error;
  }
};

const prerender = false;
const POST = async ({ request }) => {
  let data;
  try {
    const contentType = request.headers.get("content-type") || "";
    data = contentType.includes("application/json") ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    return new Response(JSON.stringify({ error: "Requête invalide." }), { status: 400 });
  }
  const { name, email, phone, projectType, message, botcheck } = data;
  const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  if (botcheck) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
  const normalizedName = String(name ?? "").trim().slice(0, 100);
  const normalizedEmail = String(email ?? "").trim().slice(0, 254);
  const normalizedPhone = String(phone ?? "").trim().slice(0, 50);
  const normalizedProjectType = String(projectType ?? "").trim().slice(0, 100);
  const normalizedMessage = String(message ?? "").trim().slice(0, 5e3);
  if (!normalizedName || !normalizedMessage || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return new Response(
      JSON.stringify({ error: "Tous les champs obligatoires ne sont pas remplis." }),
      { status: 400 }
    );
  }
  const htmlContent = `
    <h1>Nouvelle demande de devis</h1>
    <p><strong>Nom :</strong> ${escapeHtml(normalizedName)}</p>
    <p><strong>Email :</strong> ${escapeHtml(normalizedEmail)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(normalizedPhone || "Non renseigné")}</p>
    <p><strong>Type de projet :</strong> ${escapeHtml(normalizedProjectType || "Non spécifié")}</p>
    <h2>Message :</h2>
    <p>${escapeHtml(normalizedMessage).replace(/\n/g, "<br>")}</p>
  `;
  try {
    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || "contact@creationsitewebpro.com",
      subject: `Nouvelle demande de devis de ${normalizedName.replace(/[\r\n]/g, " ")}`,
      html: htmlContent,
      replyTo: normalizedEmail
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre message a été envoyé avec succès."
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return new Response(
      JSON.stringify({
        error: "Une erreur est survenue lors de l'envoi de votre message."
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
