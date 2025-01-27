const addTaskButton = document.getElementById('addTask');

addTaskButton.addEventListener('click',()=> {
    const taskAdder = document.getElementById('tasks');
    taskAdder.innerHTML = taskAdder.innerHTML + "<li>" + document.getElementById('task').value + "</li>"});
