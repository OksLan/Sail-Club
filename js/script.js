let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}

let serifButton = document.querySelector('.font-button-serif');
let sansSerifButton = document.querySelector('.font-button-sans-serif');

serifButton.onclick = function () {
    document.body.classList.add('serif');

    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
}

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');

    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
}

let articles = document.querySelectorAll('.blog-article');

for (let article of articles) {
    let moreButton = article.querySelector('.more');

    moreButton.onclick = function () {
      article.classList.remove('short');
    }
}

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();

        activePhoto.src = preview.href;

        let currentItem = document.querySelector('.preview-list .active-item');
        currentItem.classList.remove('active-item');

        preview.classList.add('active-item');
    }
}

let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
    cardsList.classList.add('list');

    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
  };

listViewButton.onclick = function () {
    cardsList.classList.remove('list');

    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
  };