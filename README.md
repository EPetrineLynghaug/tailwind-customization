# Lecture notes,

## Introduction

This project is built with Tailwind CSS and provides a customizable platform for using colors, fonts, and dark/light modes in your web application. We have created a repository where we define color palettes, fonts, and dark mode in the Tailwind configuration, allowing you to use `:dark` for elements that should have a different style in dark mode.

## Tailwind Configuration

In the `tailwind.config.js` file, you can define various settings, including fonts and sizes. Here’s an example:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primaryTeal: '#008080',
        darkCharcoal: '#333333',
        softWhite: '#F5F5F5',
        // Add more colors here
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        slab: ['Roboto Slab', 'serif'],
        // Add more fonts here
      },
    },
  },
  plugins: [],
};
```

### Scripts

In the project, we have defined the following scripts in package.json:

```json
"scripts": {
  "build": "npx tailwindcss -i ./styles.css -o ./output.css --minify",
  "watch": "npx tailwindcss -i ./styles.css -o ./output.css --watch",
  "start": "npx live-server --wait=500",
  "dev": "npm-run-all --parallel start watch"
}
```

•	 build: Compiles Tailwind CSS and minifies the output file.
•	watch: Compiles Tailwind CSS and listens for changes.
•	start: Starts a local server for development with a short wait time for updates.
•	dev: Runs both start and watch in parallel.

### HTML Structure

We have added support for light and dark modes in the body class:
```html
<body class="bg-softWhite dark:bg-darkCharcoal text-darkCharcoal dark:text-softWhite font-sans">
````
In the header, we also transition between light and dark modes when necessary:
```html
<header class="flex items-center justify-between p-4 bg-primaryTeal dark:bg-tealDark">
```
### Hero Section

The hero section is positioned relatively, and elements within it are also positioned. The overlay element is positioned absolutely to cover the entire background:
```html
<section class="relative bg-primaryTeal dark:bg-tealDark h-80 flex items-center justify-center text-center">
  <div class="absolute inset-0 bg-tealDark opacity-50 dark:bg-primaryTeal dark:opacity-60"></div>
</section>
```

### Theme Management

In toggle.js, we have a function to set the theme. We store the user’s selection in localStorage so that the theme persists between sessions.

Theme Function

```javascript
function setTheme(theme) {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');

  if (theme === 'dark') {
    html.classList.add('dark');
  } else if (theme === 'light') {
    html.classList.add('light');
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.add(systemPrefersDark ? 'dark' : 'light');
  }

  if (theme !== 'system') {
    localStorage.setItem('theme', theme);
  } else {
    localStorage.removeItem('theme');
  }

  updateToggleButtonText(theme);
}
````

### Theme Initialization

The theme is initialized by checking user preferences:

```Javascript
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme('dark');
  } else if (savedTheme === 'light') {
    setTheme('light');
  } else {
    setTheme('system');
  }
}
```

### Bonus Feature

To enhance typography, we have included Roboto Slab as a serif font instead of a standard sans-serif font. This provides a more unique reading experience.

Conclusion

This project serves as a starting point for building responsive web applications with Tailwind CSS. 



