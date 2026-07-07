let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please type a task..."); 
        return; 
    }
    tasks.push(task);
    displayTasks();
    
    taskInput.value = "";
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function(task, index) {

        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        
        deleteBtn.addEventListener("click", function(){
            deleteTasks(index)
        });

        li.appendChild(deleteBtn);


        taskList.appendChild(li);

    });
}

function deleteTasks(index) {
    tasks.splice(index,1);
     displayTasks();
}
