// Main JavaScript entry for the VeloceCSS documentation site.

// State
let currentAnim = 'vel-bounce';
const target = document.getElementById('anim-target');
const displayClass = document.getElementById('display-class');

// --- 1. Animation Logic ---
function trigger(animName) {
  target.classList.remove('vel-animated', currentAnim);
  void target.offsetWidth; // Reflow
  target.classList.add('vel-animated', animName);
  currentAnim = animName;
  if (displayClass) displayClass.textContent = animName;
}

// --- 2. Sidebar Interaction ---
document.querySelectorAll('.anim-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Highlight logic
    document.querySelectorAll('.anim-btn').forEach(b => {
      b.classList.remove('active');
    });
    e.target.classList.add('active');

    // Trigger
    trigger(e.target.getAttribute('data-anim'));

    // Close mobile menu if open
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  });
});

// Replay on click
if (target) {
  target.addEventListener('click', () => {
    // Add a small scale effect on click
    target.style.transform = "scale(0.95)";
    setTimeout(() => target.style.transform = "", 150);
    trigger(currentAnim);
  });
}

// --- 3. Configuration Panel (Sliders) ---
const durationSlider = document.getElementById('duration-slider');
const root = document.documentElement;

if (durationSlider) {
  durationSlider.addEventListener('input', (e) => {
    const val = e.target.value + 's';
    document.getElementById('duration-val').textContent = val;
    root.style.setProperty('--vel-duration', val);
    trigger(currentAnim); // Re-trigger to see effect
  });
}

// --- 4. Search Functionality ---
const searchInput = document.getElementById('search-input');
const allCats = document.querySelectorAll('.anim-category');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    allCats.forEach(cat => {
      let hasMatch = false;
      const btns = cat.querySelectorAll('.anim-btn');

      btns.forEach(btn => {
        const txt = btn.textContent.toLowerCase();
        if (txt.includes(query)) {
          btn.style.display = 'block';
          hasMatch = true;
        } else {
          btn.style.display = 'none';
        }
      });

      // Show/Hide category based on children matches
      if (hasMatch) {
        cat.style.display = 'block';
        if (query.length > 0) {
          cat.querySelector('div').style.maxHeight = '500px';
          const arrow = cat.querySelector('svg');
          if (arrow) arrow.style.transform = 'rotate(90deg)';
        }
      } else {
        cat.style.display = 'none';
      }
    });
  });
}

// --- 5. Accordion Logic (Animated Arrow) ---
window.toggleCategory = function (header) {
  const content = header.nextElementSibling;
  const arrow = header.querySelector('svg');

  if (!content || !arrow) return;

  // Get current max-height value (inline style)
  const currentMaxHeight = content.style.maxHeight;
  
  // Check if currently open:
  // - If maxHeight is empty/null/undefined, it's open (no inline style = default open)
  // - If maxHeight is 0 or 0px, it's closed
  // - If maxHeight has a value > 0, it's open
  const isOpen = !currentMaxHeight || 
                 (currentMaxHeight !== '0px' && 
                  currentMaxHeight !== '0' && 
                  parseFloat(currentMaxHeight) > 0);

  if (isOpen) {
    // Close it
    content.style.maxHeight = '0px';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    // Open it - use a large value to show all content
    content.style.maxHeight = content.scrollHeight + 50 + "px";
    arrow.style.transform = 'rotate(90deg)';
  }
}

// --- 6. Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  sidebarOverlay.classList.remove('hidden');
  setTimeout(() => sidebarOverlay.classList.remove('opacity-0'), 10);
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  sidebarOverlay.classList.add('opacity-0');
  setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', openSidebar);
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', closeSidebar);
}

// --- 7. Utilities ---
window.copyCode = function () {
  navigator.clipboard.writeText(`<div class="vel-animated ${currentAnim}"></div>`);
  showToast("HTML Copiato!");
}

window.copyInstall = function (type) {
  const text = type === 'npm' ? 'npm install veloce-css' : '<link rel="stylesheet" href="...">';
  navigator.clipboard.writeText(text);
  showToast(type === 'npm' ? 'Comando NPM Copiato!' : 'Link CDN Copiato!');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!t || !msgEl) return;

  msgEl.textContent = msg;

  // Reset animation
  t.classList.remove('toast-enter');
  void t.offsetWidth; // force reflow

  t.classList.remove('translate-x-20', 'opacity-0');
  t.classList.add('toast-enter');

  setTimeout(() => {
    t.classList.add('translate-x-20', 'opacity-0');
    t.classList.remove('toast-enter');
  }, 2500);
}

// --- 8. Reduced Motion Simulator ---
let isReduced = false;
window.toggleMotion = function () {
  isReduced = !isReduced;
  const btn = document.getElementById('motion-toggle');
  const knob = document.getElementById('motion-knob');

  if (isReduced) {
    btn.classList.replace('bg-slate-700', 'bg-accent');
    knob.classList.add('translate-x-5');
    document.body.classList.add('simulate-reduced-motion');
    showToast("Riduzione Movimento Attiva");
  } else {
    btn.classList.replace('bg-accent', 'bg-slate-700');
    knob.classList.remove('translate-x-5');
    document.body.classList.remove('simulate-reduced-motion');
  }
  trigger(currentAnim);
}

// Tab switching for documentation sections
window.switchTab = function(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active', 'text-white', 'border-accent');
    btn.classList.add('text-slate-400', 'border-transparent');
  });
  
  // Show selected tab content
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
  }
  
  // Activate clicked button
  event.target.classList.add('active', 'text-white', 'border-accent');
  event.target.classList.remove('text-slate-400', 'border-transparent');
};

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    trigger('vel-bounce');
    // No need to auto-open first category since all are open by default now
  }, 500);
});
