document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

document.getElementById("last-modified") && (document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`);

const menuButton = document.getElementById('menu');
const navList = document.querySelector('nav ul');

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    if (navList.classList.contains('open')) {
      menuButton.innerHTML = '&times;';
      menuButton.setAttribute('aria-label', 'Close navigation');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      menuButton.innerHTML = '&#9776;';
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}