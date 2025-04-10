// aura.js

document.addEventListener("DOMContentLoaded", () => {
  const syntaxRegex = /:aura{([^}]+)}/g;
  const attrRegex = /([\w-]+)=([^s]+)/g;

  document.body.innerHTML = document.body.innerHTML.replace(syntaxRegex, (_, attrString) => {
      const props = {};
      let match;

      while ((match = attrRegex.exec(attrString)) !== null) {
          props[match[1]] = match[2];
      }

      let style = `
        --top: ${props.top || '0'};
        --left: ${props.left || 'auto'};
        --right: ${props.right || 'auto'};
        --width: ${props.width || '10rem'};
        --height: ${props.height || '10rem'};
        --z: ${props.z || '10'};
        --blur: ${props.blur || '50px'};
      `.trim();

      Object.keys(props).forEach((key) => {
          if (key.startsWith("color")) {
              style += `--${key}: ${props[key]};`;
          }
      });

      return `<div class="aura-blob" style="${style}"></div>`;
  });
});