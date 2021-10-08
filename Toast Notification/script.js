const button = document.getElementById('button');
const toast  = document.getElementById('toast');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click', () => changeNotif('Invalid data', 'error'));

function changeNotif(message = null, type = null){
    const notif = document.createElement('div');
    toast.appendChild(notif);
    notif.classList.add('toast');
    notif.classList.add(type ? type : 'info');

    notif.innerText = message ? message : randomMessage();

    setTimeout(() => {
        notif.remove();
    }, 3000)
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}