const timer = document.getElementById('timer');

const timerCallback = () => {
    if (Number(timer.textContent) > 0) {
        timer.textContent = (Number(timer.textContent) - 1).toString();
    } else {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
};

const timerId = setInterval(timerCallback,1000);