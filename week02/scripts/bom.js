const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('bom.html');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation'); // or use the correct selector

menuButton.addEventListener('click', () => {
  // 1. Toggle a class on the navigation
  navigation.classList.toggle('open');
  // 2. Toggle a class on the menu button (for animation, optional)
  menuButton.classList.toggle('open');
  // 3. Optionally, set aria-expanded for accessibility
  menuButton.setAttribute('aria-expanded', menuButton.classList.contains('open'));
});