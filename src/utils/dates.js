// src/utils/dates.js

/**
 * Formate une date pour l'affichage SEO-friendly
 * @param {string} dateString - La date au format ISO (ex: "2024-10-12")
 * @returns {string} La date formatée (ex: "2024-10-12")
 */
export function formatDateSEO(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // Retourne "YYYY-MM-DD"
}

/**
 * Génère une balise time HTML optimisée pour le SEO
 * @param {string} dateString - La date au format ISO (ex: "2024-10-12")
 * @returns {string} Balise time HTML avec datetime et contenu formaté
 */
export function generateTimeTag(dateString) {
  const date = new Date(dateString);
  const isoDate = date.toISOString(); // Format ISO 8601 complet
  const displayDate = formatDateSEO(dateString);
  return `<time datetime="${isoDate}">${displayDate}</time>`;
}