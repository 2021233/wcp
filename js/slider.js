if (typeof id == 'undefinded') { let id = 0; }
else { id = 0 };
if (typeof pages == 'undefinded') { let pages = document.querySelectorAll('.page'); }
else { pages = document.querySelectorAll('.page'); };
if (typeof dots == 'undefinded') { let dots = document.querySelectorAll('.page-dot'); }
else { dots = document.querySelectorAll('.page-dot'); };

if (typeof prev == 'undefinded') { let prev = document.querySelector('.prev'); }
else { prev = document.querySelector('.prev'); };
if (typeof next == 'undefinded') { let next = document.querySelector('.next') }
else { next = document.querySelector('.next') };


function paging() {
    for (let j = 0; j < dots.length; j++) {
        dots[j].firstElementChild.removeAttribute('class');
    }
    dots[id].firstElementChild.setAttribute('class', 'current');
    console.log('paging : ' + id);
}

function page_switch() {
    for (let j = 0; j < pages.length; j++) {
        pages[j].classList.add('hidden');
    }
    pages[id].classList.remove('hidden');
    if(pages.length > dots.length) { 
        pages[pages.length/2 + id].classList.remove('hidden');
    }
    console.log('page_switch : ' + id);
}

function prev_paging() {
    id--;
    if (id <= 0) {
        id = 0;
        prev.classList.add('hidden');
    }
    if (id == dots.length - 2) next.classList.remove('hidden');
    paging();
    page_switch();
    console.log('prev_paging : ' + id);
}

function next_paging() {
    id++;
    if (id >= dots.length - 1) {
        id = dots.length - 1;
        next.classList.add('hidden');
    }
    if (id == 1) prev.classList.remove('hidden');
    paging();
    page_switch();
    console.log('next_paging : ' + id);
}

prev.addEventListener('click', prev_paging);

next.addEventListener('click', next_paging);

console.log('loaded : ' + id);