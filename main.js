function $(selector, root = document) {
  return root.querySelector(selector);
}

function setupModal() {
  let lastTrigger = null;

  function openModal(id, trigger) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastTrigger = trigger || null;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const opener = event.target.closest('[data-modal-open]');
    if (opener) {
      openModal(opener.dataset.modalOpen, opener);
      return;
    }
    const closer = event.target.closest('[data-modal-close]');
    if (closer) {
      closeModal(closer.dataset.modalClose);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const visibleModal = document.querySelector('.modal:not([hidden])');
      if (visibleModal) closeModal(visibleModal.id);
    }
  });
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

window.addEventListener('scroll', setHeaderElevation, { passive: true });
window.addEventListener('load', () => {
  setHeaderElevation();
  setupMobileNav();
  setupModal();
});
