/* Standalone menu; no Webnode backend, tracking, or cookies. */
(() => {
  const toggle = document.getElementById('menu-submit');
  if (!toggle) return;
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('aria-controls', 'menu-block');
  toggle.setAttribute('aria-expanded', 'false');
  const setOpen = open => {
    document.body.classList.toggle('portable-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', event => {
    event.preventDefault();
    setOpen(!document.body.classList.contains('portable-menu-open'));
  });
  toggle.addEventListener('keydown', event => {
    if (event.key === ' ') { event.preventDefault(); toggle.click(); }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
  document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => setOpen(false)));
})();
