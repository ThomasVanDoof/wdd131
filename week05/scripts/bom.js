const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  
  deleteButton.addEventListener('click', () => {
    deleteChapter(item + '❌');
    list.removeChild(li);
  });
  
  li.append(deleteButton);
  list.append(li);
}

function setChapterList() {
  localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('bomChapters'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
