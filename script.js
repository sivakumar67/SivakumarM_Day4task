<<<<<<< HEAD
let input = document.getElementById('input');
let button = document.getElementById('add');
let todoList = document.getElementById('todoList');

let todos=[];
window.onload = ()=>{
  todos = JSON.parse(localStorage.getItem('todoskey')) || []
  todos.forEach(todo => {
    addtodo(todo)
  });
}

button.addEventListener("click",()=>{
  todos.push(input.value)
  localStorage.setItem('todoskey',JSON.stringify(todos))
  addtodo(input.value)
  input.value="";
})

function addtodo(todo){
  let para = document.createElement('p')
  para.innerText = todo
  todoList.appendChild(para)

  para.addEventListener('click',()=>{
    para.style.textDecoration='line-through'
    remove(todo)
  })
  para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
  })
}
function remove(todo){
  let index = todos.indexOf(todo)
  if(index>-1)
    todos.splice(index,1)

  localStorage.setItem('todoskey',JSON.stringify(todos))
}
=======
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task.text, task.completed));
}

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    saveTask(taskText, false);
    taskInput.value = "";
  }
});

function addTaskToDOM(taskText, isCompleted = false) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  if (isCompleted) taskItem.classList.add("completed");

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <input type="checkbox" ${isCompleted ? "checked" : ""}>
      <button>Delete</button>
    </div>
  `;

  const checkbox = taskItem.querySelector("input[type='checkbox']");
  const deleteBtn = taskItem.querySelector("button");

  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
    updateTask(taskText, checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
    deleteTask(taskText);
  });

  taskList.appendChild(taskItem);
}

function saveTask(taskText, isCompleted) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: isCompleted });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTask(taskText, isCompleted) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const task = tasks.find((t) => t.text === taskText);
  if (task) task.completed = isCompleted;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const updatedTasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
>>>>>>> 48ea83b82ddbc0cac3fba396f21c88a6765cf15f
