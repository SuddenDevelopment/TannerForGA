function $(selector, root = document) {
  return root.querySelector(selector);
}

function setHeaderElevation() {
  const header = $('.site-header');
  if (!header) return;
  header.dataset.elevate = String(window.scrollY > 4);
}

function setupMobileNav() {
  const toggle = $('.nav-toggle');
  const nav = $('#site-nav');
  if (!toggle || !nav) return;

  function close() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
  }

  function open() {
    toggle.setAttribute('aria-expanded', 'true');
    nav.dataset.open = 'true';
  }

  close();

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) close();
    else open();
  });

  nav.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function setupCopyLink() {
  const button = $('#copy-link');
  if (!button) return;

  button.addEventListener('click', async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      button.textContent = 'Copied!';
      window.setTimeout(() => {
        button.textContent = 'Copy page link';
      }, 1500);
    } catch {
      button.textContent = 'Copy failed';
      window.setTimeout(() => {
        button.textContent = 'Copy page link';
      }, 1500);
    }
  });
}

window.addEventListener('scroll', setHeaderElevation, { passive: true });
window.addEventListener('load', () => {
  setHeaderElevation();
  setupMobileNav();
  setupCopyLink();
});
