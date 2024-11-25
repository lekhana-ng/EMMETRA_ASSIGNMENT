let currentTime = new Date();

function updateClock() {
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

function changeTime(action) {
    if (action === 'add') {
        currentTime.setSeconds(currentTime.getSeconds() + 1);
    } else if (action === 'subtract') {
        currentTime.setSeconds(currentTime.getSeconds() - 1);
    }
    updateClock();
}

document.getElementById('add-task').addEventListener('click', () => {
    const task = prompt("Enter a new task:");
    if (task) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }
});

// Initialize the clock
setInterval(() => {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    updateClock();
}, 1000);

updateClock();
