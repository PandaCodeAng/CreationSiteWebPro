export async function get() {
    return {
      body: `
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <select name="projectType">
            <option value="site-vitrine">Site Vitrine</option>
            <option value="e-commerce">E-commerce</option>
            <option value="application-web">Application Web</option>
            <option value="refonte-site">Refonte de Site</option>
            <option value="autre">Autre</option>
          </select>
          <textarea name="message"></textarea>
        </form>
      `,
    };
  }