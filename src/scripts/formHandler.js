/**
 * Gestionnaire de formulaire pour l'envoi d'emails
 * Utilise Web3Forms directement pour l'envoi d'emails
 */

/**
 * Initialise le gestionnaire de formulaire
 * @param {string} formId - ID du formulaire HTML
 */
export function initFormHandler(formId = 'contact-form') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById(formId);
    const formStatus = document.getElementById('form-status');
    
    if (!form || !formStatus) {
      console.error("Le formulaire ou l'élément de statut n'a pas été trouvé");
      return;
    }
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Afficher un indicateur de chargement
      formStatus.innerHTML = '<div class="loading-indicator">Envoi en cours...</div>';
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Envoi en cours...';
      
      try {
        // Récupérer les données du formulaire
        const formData = new FormData(form);
        
        // Ajouter la clé API de Web3Forms si elle n'est pas déjà dans le formulaire
        if (!formData.get('access_key')) {
          formData.append('access_key', '6dd0e0c5-9129-4e26-8c0b-dfd03c4b2e96');
        }
        
        // S'assurer que l'adresse email est configurée
        if (!formData.get('to_email')) {
          formData.append('to_email', 'creationsitewebpromo@gmail.com');
        }
        
        // Configurer pour afficher un message de confirmation au lieu de rediriger
        formData.append('redirect', 'false');
        
        // Envoyer les données directement à Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
          
        const data = await response.json();
        
        // Si Web3Forms a réussi l'envoi
        if (response.ok && data.success) {
          // Afficher le message de succès
          form.style.display = 'none';
          formStatus.innerHTML = `
            <div class="success-message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Votre message a bien été envoyé !</h3>
              <p>Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 heures ouvrables.</p>
              <div class="next-steps">
                <h4>Et maintenant ?</h4>
                <ul>
                  <li>Nous allons analyser votre demande</li>
                  <li>Un expert vous contactera personnellement</li>
                  <li>Nous vous proposerons des solutions adaptées à vos besoins</li>
                </ul>
              </div>
            </div>
          `;
          
          // Faire défiler jusqu'au message de confirmation
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Réinitialiser le formulaire
          form.reset();
            // Journal des résultats pour le débogage
          console.log("Email envoyé avec succès", data.details);
        } else {
          // La soumission a échoué
          formStatus.innerHTML = '<div class="alert alert-danger">Une erreur est survenue. Veuillez réessayer.</div>';
          submitBtn.disabled = false;
          submitBtn.innerText = 'Envoyer';
          console.error("Échec d'envoi de l'email", data);
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
        formStatus.innerHTML = '<div class="alert alert-danger">Une erreur est survenue. Veuillez réessayer plus tard.</div>';
        submitBtn.disabled = false;
        submitBtn.innerText = 'Envoyer';
      }
    });
  });
}

/**
 * Version pour le développement local
 * Utilise également la fonction serverless, mais en local via Netlify Dev
 */
export function initDevFormHandler(formId = 'contact-form') {
  // En mode développement, on utilise la même fonction que pour la production
  // car Netlify Dev permet de tester localement les fonctions serverless
  initFormHandler(formId);
}
