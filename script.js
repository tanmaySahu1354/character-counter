
const inputText = document.getElementById("input-text");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const excludeSpacesCheckbox = document.getElementById("exclude-spaces");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");


inputText.addEventListener("input", updateCounts);
excludeSpacesCheckbox.addEventListener("change", updateCounts);
themeToggle.addEventListener("click", toggleTheme);

function updateCounts() {
  let text = inputText.value;
  let processedText = excludeSpacesCheckbox.checked ? text.replace(/\s/g, "") : text;

  charCount.textContent = processedText.length;
  wordCount.textContent = text.trim().split(/\s+/).filter(w => w).length;
  sentenceCount.textContent = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
}


function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeIcon.src = isDark ? "./assets/sun-icon.png" : "./assets/moon-icon.png";
}
