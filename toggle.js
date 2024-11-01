// toggle.js

// 3.1:
function setTheme(theme) {
  const html = document.documentElement;
  html.classList.remove("light", "dark");

  if (theme === "dark") {
    html.classList.add("dark");
  } else if (theme === "light") {
    html.classList.add("light");
  }

  localStorage.setItem("theme", theme);
}

// 3.2:
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    setTheme("dark");
  } else if (savedTheme === "light") {
    setTheme("light");
  } else {
    setTheme("system");
  }
}

// 3.3:
document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    setTheme("light");
  } else if (currentTheme === "light") {
    setTheme("system");
  } else {
    setTheme("dark");
  }
});

// 3.4:
initializeTheme();
