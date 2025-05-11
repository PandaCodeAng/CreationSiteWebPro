// Fonction Netlify pour envoyer des emails via Web3Forms
const axios = require('axios');

exports.handler = async (event, context) => {
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
    
    // Clé API Web3Forms
    const apiKey = "6dd0e0c5-9129-4e26-8c0b-dfd03c4b2e96";
    
    // Préparer le payload pour la requête
    const payload = {
      ...formData,
      access_key: apiKey,
      to_email: "creationsitewebpromo@gmail.com", // Adresse email destinataire
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
      console.error("Échec d'envoi de l'email", response.data);
      
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Échec d'envoi de l'email",
          errors: {
            details: response.data
          }
        })
      };
    }  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Une erreur est survenue",
        error: error.message
      })
    };
  }
};
