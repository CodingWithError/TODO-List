//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo());

//Functions

function addTodo(event){
  event.preventDefault();
  //to create a div in html.
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");//in this we added class to it.
  //Now adding LI
  const newToDo= document.createElement("li");
  newToDo.classList("todo-item");
  newToDo.innerText='hey';
  todoDiv.appendChild(newToDo);
}
