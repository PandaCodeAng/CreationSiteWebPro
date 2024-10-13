/// <reference path="../.astro/types.d.ts" />
declare module 'nodemailer';

// Déclarations pour Google Analytics
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

// Déclaration pour Axeptio
interface Window {
  axeptioSettings: {
    clientId: string;
    cookiesVersion: string;
    googleConsentMode: {
      default: {
        analytics_storage: string;
        ad_storage: string;
        ad_user_data: string;
        ad_personalization: string;
        wait_for_update: number;
      }
    }
  };
}