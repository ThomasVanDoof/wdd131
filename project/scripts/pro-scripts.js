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

document.addEventListener("DOMContentLoaded", function() {
  const sliderImages = document.querySelectorAll('.slider-image');
  const leftBtn = document.querySelector('.slider-btn-left');
  const rightBtn = document.querySelector('.slider-btn-right');
  let current = 0;

  function showImage(idx) {
    sliderImages.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
  }

  leftBtn && leftBtn.addEventListener('click', function() {
    current = (current - 1 + sliderImages.length) % sliderImages.length;
    showImage(current);
  });

  rightBtn && rightBtn.addEventListener('click', function() {
    current = (current + 1) % sliderImages.length;
    showImage(current);
  });


  let startX = null;
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', function(e) {
      if (startX !== null) {
        let endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) {
          current = (current - 1 + sliderImages.length) % sliderImages.length;
          showImage(current);
        } else if (startX - endX > 50) {
          current = (current + 1) % sliderImages.length;
          showImage(current);
        }
        startX = null;
      }
    });
  }

  showImage(current);
});