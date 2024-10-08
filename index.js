// finding the html elements

const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");

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

// addTodo function
const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;
  // console.log(todoInput.value);

  // generate Unique id
  const todoId = Date.now().toString();
  createTodo(todoId, todoValue);
};

//Here Adding listeners
todoForm.addEventListener("submit", addTodo);
