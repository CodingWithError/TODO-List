// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Create a div in HTML
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Now adding LI
  const newToDo = document.createElement('li');
  newToDo.classList.add('todo-item');
  newToDo.innerText = 'hey';
  todoDiv.appendChild(newToDo);

  // Check Mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  // Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Append to List
  todoList.appendChild(todoDiv);
}
