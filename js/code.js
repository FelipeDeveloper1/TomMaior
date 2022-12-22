const Arrow = document.querySelector('.arrow');
const arrowLeft = document.getElementById('left-arrow')
const arrowRight = document.getElementById('right-arrow')

let currentArrow = 0;

function hideArrow() {
    Arrow.forEach(item => item.classList.remove('on'))
}

function showArrow() {
    Arrow[currentArrow].classList.add('on')
}

function nextArrow() {
    hideArrow()
        if(currentArrow === Arrow.lenght -1){
            currentArrow = 0
        } else{
            currentArrow = currentArrow + 1
        }
        showArrow()
}
function prevArrow() {
    hideArrow()
    if(currentArrow === 0){
        currentArrow = Arrow.lenght -1
    } else {
        currentArrow = currentArrow - 1
    }
    showArrow()
}

arrowLeft.addEventListener('click', nextArrow)
arrowRight.addEventListener('click', prevArrow)

console.log(Arrow)

currentArrow = currentArrow + 1
currentArrow = currentArrow - 1