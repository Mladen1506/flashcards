const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function delFlashcards(){
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
}

function showCreateCardBox(){
  createBox.style.display = 'block';
}

function hideCreateBox(){
  createBox.style.display = 'none';
}