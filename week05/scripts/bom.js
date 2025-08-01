const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Retrieve or initialize chapter list
let chaptersArray = getChapterList() || [];

// Display existing chapters from storage
chaptersArray.forEach(chapter => displayList(chapter));

// Add Chapter Button Event
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// Display list item with delete button
function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  
  deleteButton.addEventListener('click', () => {
    deleteChapter(item + '❌'); // matches what's visually in the list
    list.removeChild(li);
  });
  
  li.append(deleteButton);
  list.append(li);
}

// Save chaptersArray to localStorage
function setChapterList() {
  localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

// Load chaptersArray from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('bomChapters'));
}

// Delete a chapter from storage and update list
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
