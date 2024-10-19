// finding the html elements

const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");

// here create function for showMessage() -this function show message for creating and deleting element
const showMessage = (text, status) => {
  messageElement.textContent = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

// create Todo function
const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = ` <span> ${todoValue} </span> 
  <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"></i> </button> </span>
  `;
  todoLists.appendChild(todoElement);
};

//getTodosFromLocalStorage function
const getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

// addTodo function
const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;
  // console.log(todoInput.value);

  // generate Unique id
  const todoId = Date.now().toString();
  createTodo(todoId, todoValue);
  // here call show message function
  showMessage("Todo is added", "success");

  //Adding todo to local Storage
  const todos = getTodosFromLocalStorage();
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));

  todoInput.value = "";
};

//Here Adding listeners
todoForm.addEventListener("submit", addTodo);
