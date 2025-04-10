# Aura

## Overview

The Aura glow effect allows you to easily create glowing, blurred blobs on your webpage using a custom syntax. Simply add `:aura{}` markup in your HTML to position and style the glowing effect dynamically with just a few attributes.

---

## Usage

### 1. Include the CSS and JS Files

To use the Aura effect, you need to include the following two files on your page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cascadesite/aura/aura.css">
<script src="https://cdn.jsdelivr.net/gh/cascadesite/aura/aura.js"></script>
```

---

### 2. Use the Aura Effect with `:aura{}` Syntax

Now, you can add glowing aura blobs anywhere in your HTML using the custom `:aura{}` syntax.

#### Example:

```html
<body>
  <h1>Check out the glowing aura effect!</h1>

  <!-- This will create a glowing aura with custom properties -->
  :aura{right=30px top=50px width=200px height=200px blur=60px color1=rgba(255,0,150,0.3) color2=rgba(0,200,255,0.3) color3=rgba(0,255,150,0.3)}

  <!-- Another example with different properties -->
  :aura{top=100px left=20px width=250px blur=100px color1=rgba(255,255,0,0.2) color2=rgba(255,0,0,0.2) color3=rgba(0,0,255,0.2)}
</body>
```

#### Available Properties:

- **`right`**: Position from the right edge (e.g., `right=30px`)
- **`top`**: Position from the top edge (e.g., `top=50px`)
- **`left`**: Position from the left edge (e.g., `left=20px`)
- **`width`**: Set the width of the aura (e.g., `width=200px`, `width=50%`)
- **`height`**: Set the height of the aura (e.g., `height=200px`)
- **`blur`**: Set the blur effect (e.g., `blur=60px`)
- **`color1`, `color2`, `color3`, ..., `colorN`**: Set the colors for the gradient background (e.g., `color1=rgba(255,0,150,0.3)` or `color4=rgba(0,255,255,0.3)`)

---

### 3. Customization & Advanced Use

You can mix and match any combination of properties to create different glowing effects across your page.

#### Example of a More Complex Aura:

```html
:aura{top=100px left=50px width=100px height=100px blur=80px color1=rgba(255,0,150,0.5) color2=rgba(0,200,255,0.5) color3=rgba(0,255,150,0.5)}
```

This would create a small, glowing aura with a soft, colorful gradient.

---

## Full Example

Here’s a simple example combining everything together:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aura Glow Effect</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cascadesite/aura/aura.css">
  <script src="https://cdn.jsdelivr.net/gh/cascadesite/aura/aura.js"></script>
</head>
<body>

  <h1>Welcome to the Aura Effect!</h1>
  
  <!-- Apply Aura effect -->
  :aura{right=30px top=50px width=200px height=200px blur=60px color1=rgba(255,0,150,0.3) color2=rgba(0,200,255,0.3) color3=rgba(0,255,150,0.3)}

  <p>This is a glowing aura effect added to the page using just a line of markup.</p>

</body>
</html>
```

---

## Advanced Notes

- **Compatibility**: This will work in all modern browsers.
- **Performance**: The glow effect uses the `filter: blur()` CSS property, which can be GPU-intensive for large areas or many effects on screen.
- **Customization**: You can override the default colors and sizes by specifying your own values within the `:aura{}` markup.