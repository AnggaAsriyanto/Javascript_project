const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counters');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

runAnimation();

function replayDOM() {
    nums.forEach(num => {
        num.classList.value = '';
    })

    nums[0].classList.add('in');

    counter.classList.remove('hide');
    final.classList.remove('show')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if(e.animationName == 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        })
    })
}

replay.addEventListener('click', () => {
    replayDOM();
    runAnimation();
})