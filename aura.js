// aura.js

document.addEventListener("DOMContentLoaded", () => {
    const syntaxRegex = /:aura{([^}]+)}/g;
    const attrRegex = /([\w-]+)=([^\s]+)/g;
  
    document.body.innerHTML = document.body.innerHTML.replace(syntaxRegex, (_, attrString) => {
      const props = {};
      let match;
      while ((match = attrRegex.exec(attrString)) !== null) {
        props[match[1]] = match[2];
      }
  
      const style = `
        --top: ${props.top || '0'};
        --left: ${props.left || 'auto'};
        --right: ${props.right || 'auto'};
        --width: ${props.width || '10rem'};
        --height: ${props.height || '10rem'};
        --z: ${props.z || '10'};
        --blur: ${props.blur || '50px'};
        --color1: ${props.color1 || 'rgba(0, 71, 225, 0.22)'};
        --color2: ${props.color2 || 'rgba(26, 214, 255, 0.22)'};
        --color3: ${props.color3 || 'rgba(0, 220, 130, 0.22)'};
      `.trim();
  
      return `<div class="aura-blob" style="${style}"></div>`;
    });
  });
  