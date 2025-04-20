
// Смена темы
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// Инициализация карты
function initMap() {
  const center = { lat: 50.4501, lng: 30.5234 }; // Киев
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center,
  });
  new google.maps.Marker({ position: center, map: map });
}

// Drag & drop
document.querySelector(".file-upload").addEventListener("click", () => {
  const input = document.querySelector(".file-upload input");
  input.click();
});

// Свайпы между экранами (1 свайп = 1 экран)
let lastScrollTop = 0;
window.addEventListener('wheel', (e) => {
  const direction = e.deltaY > 0 ? 1 : -1;
  window.scrollBy({ top: window.innerHeight * direction, behavior: 'smooth' });
}, { passive: false });
