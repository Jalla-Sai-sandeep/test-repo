const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList"); // Fixed typo
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim(); // Fixed `.Value` → `.value`
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Ensure 'completed' property is added
        taskInput.value = ""; // Fixed `.Value` → `.value`
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
displayTasks();
