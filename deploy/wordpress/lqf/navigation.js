// Match the reference's fixed header and reading progress without a UI library.
function updateHeader() {
  document.documentElement.classList.toggle('lqf-scrolled', scrollY > 24);
  document.documentElement.style.setProperty('--lqf-progress', scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight));
}
addEventListener('scroll', updateHeader, {passive: true});
addEventListener('resize', updateHeader, {passive: true});
updateHeader();
