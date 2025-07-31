function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
  let popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;
