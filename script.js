document.addEventListener('wheel', (e) => {
  e.preventDefault();
  document.getElementById('main-content').scrollBy({
    top: e.deltaY,
    behavior: 'smooth'
  });
}, { passive: false });