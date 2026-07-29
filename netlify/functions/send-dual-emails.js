// Fonction Netlify pour envoyer des emails via Web3Forms
const axios = require('axios');

exports.handler = async (event) => {
  // S'assurer que la méthode est POST
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Méthode non autorisée" }) 
    };
  }

  try {
    // Analyser les données du formulaire
    const formData = JSON.parse(event.body);
    
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      console.error("WEB3FORMS_ACCESS_KEY n'est pas configurée");
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Le service d'envoi n'est pas configuré"
        })
      };
    }
    
    // Préparer le payload pour la requête
    const payload = {
      ...formData,
      access_key: apiKey,
      to_email: process.env.EMAIL_TO || "creationsitewebpromo@gmail.com",
      redirect: false // Ne pas rediriger après soumission
    };

    // Envoyer la requête à Web3Forms
    const response = await axios.post('https://api.web3forms.com/submit', payload);

    // Vérifier si la requête a réussi
    if (response.data.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message: "Email envoyé avec succès",
          details: {
            emailStatus: "envoyé"
          }
        })
      };
    } else {
      console.error("Échec d'envoi de l'email via Web3Forms");
      
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Échec d'envoi de l'email",
          errors: {}
        })
      };
    }  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Une erreur est survenue",
        error: "Erreur interne"
      })
    };
  }
};
