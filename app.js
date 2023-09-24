let taskList = [
    {
        text: 'This is a first text task',
        id: 1,
        checked: false
    },
    {
        text: 'This is a second text task',
        id: 2,
        checked: false
    },
    {
        text: 'This is a third text task',
        id: 3,
        checked: true
    }
];

window.onload = function() {
    displayAllTasks();
};


function getInputValue(event) {
    event.preventDefault();
    if (document.getElementById("inputId").value.trim() === '') {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
    } else {
    newlist = {
        text: document.getElementById("inputId").value,
        id: taskList.length + 1,
        checked: false,
    };
    taskList.push(newlist);
    const fieldInput = document.getElementById('inputId');
    fieldInput.value = '';
    displayAllTasks();
}
}


function displayAllTasks() {
    let taskListHTML = '';

    taskList.forEach(function(task) {
        taskListHTML += `
            <div>
                <input type="checkbox" ${task.checked ? 'checked' : ''} onchange="toggleTask(this, ${task.id})" />
                <span class="${task.checked ? 'task-checked' : ''}">${task.text}</span>
                <button id="close" onclick="removeTask(${task.id})">Remove</button>
            </div>
        `;
    });

    document.querySelector(".output").innerHTML = taskListHTML;
}

function toggleTask(checkbox, taskId) {
    const taskText = checkbox.nextElementSibling;

    if (checkbox.checked) {
        taskText.classList.add('task-checked');
        taskList.find(task => task.id === taskId).checked = true;
    } else {
        taskText.classList.remove('task-checked');
        taskList.find(task => task.id === taskId).checked = false;
    }
}

function removeTask(taskId) {
    taskList = taskList.filter(task => task.id !== taskId);
    displayAllTasks();
}


