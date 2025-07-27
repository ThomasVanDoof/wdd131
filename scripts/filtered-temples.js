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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Hartford Connecticut",
    location: "Hartford, Connecticut, United States",
    dedicated: "2016, November, 20",
    area: 32246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/hartford-connecticut-temple/hartford-connecticut-temple-11050.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167.jpg"
  }
];


const templeGallery = document.querySelector(".temple-gallery");

// Helper to parse year from "YYYY, Month, DD"
function getYear(dedicated) {
  return parseInt(dedicated.split(",")[0], 10);
}

// Create a card for a single temple
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // Native lazy loading

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  figure.appendChild(img);
  figure.appendChild(caption);
  return figure;
}

// Display array of temples
function displayTemples(filteredTemples) {
  templeGallery.innerHTML = ""; // Clear current content
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    templeGallery.appendChild(card);
  });
}

// Define filters
const filters = {
  home: () => temples,
  old: () => temples.filter(t => getYear(t.dedicated) < 1900),
  new: () => temples.filter(t => getYear(t.dedicated) > 2000),
  large: () => temples.filter(t => t.area > 90000),
  small: () => temples.filter(t => t.area < 10000),
};

// Set up menu item event listeners
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filterKey = link.textContent.trim().toLowerCase();
    const filteredTemples = filters[filterKey] ? filters[filterKey]() : temples;
    displayTemples(filteredTemples);
  });
});

// Show all temples on initial page load
displayTemples(temples);
