# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 Configuration du Formulaire de Contact

Le site utilise [Web3Forms](https://web3forms.com/) pour le traitement des formulaires de contact et l'envoi d'emails.

### Configuration des Emails

1. Le formulaire est configuré pour envoyer les notifications à l'email principal via la clé API principale
2. Une copie est également envoyée à une adresse secondaire via le champ `cc`

### Tests en Environnement Local

Pour tester le formulaire en développement local :

1. Le formulaire est configuré pour rediriger vers `/merci` en relatif plutôt qu'avec une URL absolue
2. Un champ honeypot `botcheck` est ajouté pour la validation CORS
3. Si vous rencontrez des erreurs CORS en développement local, vous pouvez :
   - Désactiver temporairement JavaScript pour soumettre le formulaire
   - Utiliser l'extension [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) sur Chrome
   - Tester uniquement en production

### Dépannage

Si vous recevez les emails sur l'adresse principale mais pas sur l'adresse en CC :
- Vérifiez que l'adresse email en CC est correctement orthographiée
- Web3Forms peut parfois retarder les emails en CC, attendez quelques minutes
- Vérifiez les dossiers spam/indésirables
