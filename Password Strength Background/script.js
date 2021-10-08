const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const lengthValue = e.target.value.length;
    background.style.filter = `blur(${20 - lengthValue * 2}px)`
})