const to_doForm = document.querySelector("form");
const to_doInput = document.getElementById("todo-input");
const to_doList = document.getElementById("todo-list");

let todos = [];


to_doForm.addEventListener("submit" , function (e){
    e.preventDefault();
    addToDo();
});

function addToDo() {
    const toDoText = to_doInput.value.trim();
    if (toDoText.length > 0) {
        todos.push(toDoText);
        updateTodo(toDoText);
        to_doInput.value = "";
    }
    
}

function updateTodo(toDoText){
    to_doList.innerHTML = "";
    todos.forEach(( todo , todoIndex )=>{
        todoItem = createTodo(todo,todoIndex);
        to_doList.append(todoItem);
    })
}

function createTodo(todo , todoIndex) {
    const todoId = `todo-${todoIndex}`;
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
    <input type="checkbox" id="${todoId}" />
          <label for="${todoId}" class="custom-checkbox">
            <svg
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <label for="${todoId}" class="todo-text">${todo}</label>
          <button class="delete-btn">
            <svg
              fill="var(--background-color)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"
              />
            </svg>
          </button>
    `
    return todoItem;

}

function greeting() {
    console.log("Hello, World!");
    console.log("Hello, Everyone!");
}