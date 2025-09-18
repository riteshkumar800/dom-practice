// ===== [1] Grab elements once (querying the DOM) =====
const decBtn   = document.getElementById('dec');        // [1a]
const incBtn   = document.getElementById('inc');        // [1b]
const resetBtn = document.getElementById('reset');      // [1c]
const themeBtn = document.getElementById('theme');      // [1d]
const countOut = document.getElementById('count');      // [1e]

const msgInput = document.getElementById('msg');        // [1f]
const safeSpan = document.getElementById('safe');       // [1g]
const unsafeSpan = document.getElementById('unsafe');   // [1h]
const unsafeToggle = document.getElementById('unsafe-toggle'); // [1i]

// ===== [2] State (JS memory separate from DOM) =====
let count = 0;                                          // [2a]

// ===== [3] Render functions (single responsibility) =====
function renderCount() {                                // [3a]
  countOut.textContent = String(count);                 // [3b] SAFE: no HTML parsing
}

function renderTheme() {                                // [3c]
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'; // [3d]
  themeBtn.textContent = isDark ? 'Switch to Light' : 'Switch to Dark';          // [3e]
}

function renderSafeEcho(value) {                        // [3f]
  // SAFETY RULE: prefer textContent to avoid XSS
  safeSpan.textContent = value;                         // [3g]
}

// ===== [4] Event handlers =====
decBtn.addEventListener('click', () => {                // [4a]
  count--;                                              // [4b]
  renderCount();                                        // [4c]
});

incBtn.addEventListener('click', () => {                // [4d]
  count++;                                              // [4e]
  renderCount();                                        // [4f]
});

resetBtn.addEventListener('click', () => {              // [4g]
  count = 0;                                            // [4h]
  renderCount();                                        // [4i]
});

themeBtn.addEventListener('click', () => {              // [4j]
  const root = document.documentElement;                // [4k]
  const now = root.getAttribute('data-theme');          // [4l]
  const next = now === 'dark' ? 'light' : 'dark';       // [4m]
  root.setAttribute('data-theme', next);                // [4n]
  renderTheme();                                        // [4o]
});

// Input echo: update while typing (input event fires on each change)
msgInput.addEventListener('input', (e) => {             // [4p]
  const value = e.target.value;                         // [4q]
  renderSafeEcho(value);                                // [4r]
});

// ===== [5] UNSAFE demo (what *not* to do) =====
unsafeToggle.addEventListener('click', () => {          // [5a]
  const value = msgInput.value;                         // [5b]
  // DANGER: innerHTML parses tags & runs event handlers (onerror, onclick)
  unsafeSpan.innerHTML = value;                         // [5c] intentionally unsafe demo
  // Immediately clear after a tick so the page won’t stay dangerous
  setTimeout(() => { unsafeSpan.textContent = ''; }, 1000); // [5d]
});

// ===== [6] First paint =====
renderCount();                                          // [6a]
renderTheme();                                          // [6b]
renderSafeEcho('');                                     // [6c]
