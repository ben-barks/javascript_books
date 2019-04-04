document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  const handleFormSubmit = function(evt) {
    evt.preventDefault()

    const title = evt.target.title.value;
    const author = evt.target.author.value;
    const category = evt.target.category.value;

    const bookDetails = document.createElement('div');

    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(bookDetails);

    const detailsList = document.createElement('ul');
    bookDetails.appendChild(detailsList);

    const titleItem = document.createElement('li');
    titleItem.textContent = `Title: ${title}`;
    detailsList.appendChild(titleItem);

    const authorItem = document.createElement('li')
    authorItem.textContent = `Author: ${author}`;
    detailsList.appendChild(authorItem);


    const categoryItem = document.createElement('li')
    categoryItem.textContent = `Category: ${category}`;
    detailsList.appendChild(categoryItem);


    const form = document.querySelector('#new-item-form');
    form.reset()
  };

  form.addEventListener('submit', handleFormSubmit);


  const deleteButton = document.querySelector('#delete-button');
  const handleDelete = function (evt) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';


  };


  deleteButton.addEventListener('click', handleDelete);
});
