// aura.js

document.addEventListener("DOMContentLoaded", () => {
  const syntaxRegex = /:aura{([^}]+)}/g;
  const attrRegex = /([\w-]+)=([^ ]+)/g;

  document.body.innerHTML = document.body.innerHTML.replace(syntaxRegex, (_, attrString) => {
      const props = {};
      let match;

      // Parse attributes
      while ((match = attrRegex.exec(attrString)) !== null) {
          props[match[1]] = match[2];
      }

      // Dynamically construct gradient colors
      const gradientColors = Object.keys(props)
          .filter(key => key.startsWith("color"))
          .sort((a, b) => parseInt(a.slice(5)) - parseInt(b.slice(5)))
          .map(key => props[key])
          .join(", ");

      // Generate style attributes
      const style = `
        --top: ${props.top || 'auto'};
        --left: ${props.left || 'auto'};
        --right: ${props.right || 'auto'};
        --width: ${props.width || '10rem'};
        --height: ${props.height || '10rem'};
        --z: ${props.z || '10'};
        --blur: ${props.blur || '50px'};
        --gradient-colors: ${gradientColors};
      `.trim();

      return `<div class="aura-blob" style="${style.replace(/\s+/g, " ")}"></div>`;
  });
});