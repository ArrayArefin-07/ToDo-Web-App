// finding the html elements

const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");

// addTodo function
const addTodo = (event) => {
  event.preventDefault();
  console.log(todoInput.value);
};

//Here Adding listeners
todoForm.addEventListener("submit", addTodo);
