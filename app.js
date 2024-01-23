// Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo); // Changed from 'click' to 'change'

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

  //add todo to local storage
  saveLocalTodos(todoInput.value);
  
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
    removeLocalTodos(todo);
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

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display='flex';
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display='flex';
        }else{
          todo.style.display='none';
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display='flex';
        }else{
          todo.style.display='none';
        }
        break;
    }
  });
}

function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos')); // assign the parsed data back to todos
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  } 
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todoItem){ // rename the parameter to todoItem
    // Create a div in HTML
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Now adding LI
    const newToDo = document.createElement('li');
    newToDo.classList.add('todo-item');
    newToDo.innerText = todoItem; // use todoItem here
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
  }); 
}

function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  } 
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex=todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem('todos', JSON.stringify(todos));
}