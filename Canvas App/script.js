const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizeId = document.getElementById('size');
const decreaseId = document.getElementById('decrease');
const increaseId = document.getElementById('increase');
const clearId = document.getElementById('clear');
const colorId = document.getElementById('color');

let size = 20;
let isPressed = false;
let color;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;

    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

decreaseId.addEventListener('click', (e) => {
    if(size > 5) {
        size -= 5;
    }

    sizeId.innerText = size;
})

increaseId.addEventListener('click', (e) => {
    if(size < 50) {
        size += 5;
    }
    
    sizeId.innerText = size;

})

clearId.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorId.addEventListener('input', (e) => {
    color = e.target.value;
})





