// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Create a div in HTML
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Now adding LI
  const newToDo = document.createElement('li');
  newToDo.classList.add('todo-item');
  newToDo.innerText = todoInput.value;
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

  //after adding the values we dont need it on the input bar
  todoInput.value='';
}

function deleteCheck(e){
  const item=e.target;
  
  //this is for deleting
  if(item.classList[0] === "trash-btn"){
    const todo=item.parentElement;

    //fallout animation
    todo.classList.add('fall');
    
    //wait for a brief moment before removing the todo
    setTimeout(function() {
      todo.remove();
    }, 500); // Adjust the delay as needed
  }

  //this is for the check button
  if(item.classList[0] === "complete-btn"){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
  }
}
