document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // Function to create a new task item
    const createTaskItem = (taskText) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = '✖';

        // Event listener to toggle task completion
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Event listener to remove the task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append elements to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeButton);

        return listItem;
    };

    // Function to add a new task to the list
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = createTaskItem(taskText);
            taskList.appendChild(newTask);
            taskInput.value = ''; // Clear the input field
        }
    };

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on "Enter" key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});