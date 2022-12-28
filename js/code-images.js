const expends = document.querySelector('.container-slider')
const type = document.querySelector('.text-nav')
expends.addEventListener('click', 
    () =>{
    expends.classList.toggle('expends-active')
    type.classList.toggle('active-block')
}) 
