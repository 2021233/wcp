let id = 0;
let pages = document.querySelectorAll('.page');
let dots = document.querySelectorAll('.page-dot');

let prev = document.querySelector('.prev');
let next = document.querySelector('.next')

const paging = () => {
    for (let j = 0; j < dots.length; j++) {
        dots[j].firstElementChild.removeAttribute('class');
    }
    dots[id].firstElementChild.setAttribute('class', 'current');
}

const page_switch = () => {
    for (let j = 0; j < pages.length; j++){
        pages[j].classList.add('hidden');
    }
    
    pages[id].classList.remove('hidden');
}

const prev_paging = () => {
    id--;
    if(id <= 0) {
        id = 0;
        prev.classList.add('hidden');
    }
    if(id == pages.length - 2) next.classList.remove('hidden');
    paging();
    page_switch();
}

const next_paging = () => {
    id++;
    if(id >= pages.length -1) {
        id = pages.length - 1;
        next.classList.add('hidden');
    }
    if(id == 1) prev.classList.remove('hidden');
    paging();
    page_switch();
}

prev.addEventListener('click', prev_paging);

next.addEventListener('click', next_paging);