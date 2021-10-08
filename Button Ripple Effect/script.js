const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        const buttonLeft = e.target.offsetLeft;
        const buttonTop = e.target.offsetTop;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const span = document.createElement('span');
        span.classList.add('circle');

        span.style.top = yInside + 'px';
        span.style.left = xInside + 'px';

        this.appendChild(span);

        setTimeout(() => span.remove(), 500)
    })
})