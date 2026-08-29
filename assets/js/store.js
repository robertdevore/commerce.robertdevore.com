const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');

function setMenu(open) {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.hidden = !open;
  document.body.toggleAttribute('data-menu-open', open);
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 720) setMenu(false);
});

const mockPortal = document.querySelector('a[href="#mock-portal"]');
if (mockPortal) {
  const portalError = document.createElement('p');
  portalError.setAttribute('role', 'alert');
  portalError.setAttribute('aria-live', 'assertive');
  mockPortal.insertAdjacentElement('afterend', portalError);
  mockPortal.addEventListener('click', async event => {
    event.preventDefault();
    portalError.textContent = '';
    try {
      const response = await fetch('/_kujo/commerce/portal', { method: 'POST' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Mock portal could not be opened');
      location.assign(result.portal_url);
    } catch (failure) {
      portalError.textContent = failure.message;
    }
  });
}
