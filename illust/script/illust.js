import data from './illust.json' with { type: 'json' };
const year = 2025;

document.addEventListener('DOMContentLoaded', () => { load(); loadNav();});

function load() {
    const grid = document.querySelector('.grid'); // Select your Masonry container

    // Populate with info from json
    const version = document.getElementById('working-year').innerHTML;
    const use = data[version];

    for (let i = 0; i < use.length; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        const current = use[i];

        // Handle multiple images
        if (use[i].multiple) {

            if (use[i].thumbnail) {
                newDiv.innerHTML = `<img src='/illust/img/${current.id}.png'>
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`;

            } else {

                let images = '';

                for (let j = 0; j < use[i].multiple; j++) {
                    images += `<img src='/illust/img/${current.id}-${j}.png'>`;
                }

                newDiv.innerHTML = `${images}
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`
            }

            newDiv.onclick = function() {openMultipleImg(current)};

        } else {
            newDiv.onclick = function() {openImg(current);};
            newDiv.innerHTML =
                `<img src='/illust/img/${current.id}.png'>
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`;
        }
            grid.appendChild(newDiv);
    }
}


function format(s) {
    return s.replace(/(..)(?=.)/g, `$1.`);
}

function header(s) {
    return `<div id='date'>${s.substring(2,4)}<br>${s.substring(4,8)}</div>`;
}

function openImg(img) {

    document.getElementById('zoom').style.display = 'inline-flex'; // Show pop-out

    // Change pop-out contents
    document.getElementById('content').innerHTML = `<div><img src='/illust/img/${img.id}.png'></div>
        <div id='caption'>
        <h1>${header(img.id)}${img.title}</h1>
        <div id='caption-text'>${img.caption}</div></div>`;

    const container = document.getElementById('content')
}

function openMultipleImg(img) {

    let currentOpen = 0;

    document.getElementById('zoom').style.display = 'inline-flex'; // Show pop-out

    // Change pop-out contents
    document.getElementById('content').innerHTML = `<div id='currentDisplay'>
        <img src='/illust/img/${img.id}-${currentOpen}.png'></div>
        <div id='caption'>
            <h1>${header(img.id)}${img.title}</h1>
        <div id='caption-text'>
            <div id='arrow-menu'>
                <span id='left-arrow' class='arrows'></span>
                <span id='open'>(1)</span>
                <span id='right-arrow' class='arrows'></span>
            </div>

            ${img.caption}
        </div>
    </div>`;

    document.getElementById('left-arrow').onclick = function() {

        currentOpen -= 1;
        if (currentOpen < 0) { currentOpen = img.multiple - 1; }

        document.getElementById('currentDisplay').innerHTML = `<img src='/illust/img/${img.id}-${currentOpen}.png'>`;
        document.getElementById('open').innerHTML = `(${currentOpen + 1})`;

    }

    document.getElementById('right-arrow').onclick = function() {

        currentOpen += 1;
        if (currentOpen > img.multiple - 1) { currentOpen = 0; }

        document.getElementById('currentDisplay').innerHTML = `<img src='/illust/img/${img.id}-${currentOpen}.png'>`;
        document.getElementById('open').innerHTML = `(${currentOpen + 1})`;

    }
}

function closeImg() {
    document.getElementById('zoom').style.display = 'none';
}


function loadNav() {
    // Fish on bottom
    if (document.getElementById('nav')) {
        const fish = document.createElement('div');
        fish.id ='navfish';
        fish.innerHTML = `<img src='/img/fish.gif'>`;
        document.getElementById('nav').append(fish);
        nav();
    }

    if (document.getElementById('dropdown')) {
        for (let i = 2023; i < year + 1; i++) {
            const selection = document.createElement('span');
            selection.classList.add('choice');

            if (i === year) selection.innerHTML = `<a href='/illust/'>${i}</a>`;
            else selection.innerHTML = `<a href='/illust/${i}'>${i}</a>`;

            document.getElementById('dropdown').append(selection);
        }
    }
}



function nav() {

    const fish = document.getElementById('navfish');
    const currYear = Number(document.getElementById('working-year').innerHTML);

    const navyear = document.createElement('div');
    navyear.id = 'navyear';
    navyear.innerHTML = currYear;

    const prev = document.createElement('span');
    prev.id = 'prev';

    // First year
    if (currYear !== 2023) {
        prev.classList.add('dir');
        prev.innerHTML = currYear - 1;
        prev.addEventListener('click', () => navYear(-1));
        prev.addEventListener('mouseover', () => fish.style.transform = 'scaleX(1)');

    } else {
        fish.style.transform = 'scaleX(-1) translateX(100%)';
        prev.innerHTML = '|';
    }

    const next = document.createElement('span');
    next.id = 'next';


    // Current year
    if (currYear !== year) {
        next.classList.add('dir');
        next.innerHTML = currYear + 1;

        next.addEventListener('click', () => navYear(1));
        next.addEventListener('mouseover', () => fish.style.transform = 'scaleX(-1) translateX(100%)');

    } else {
        fish.style.transform = 'scaleX(1)';
        next.innerHTML = '|';
    }

    document.getElementById('nav').append(navyear);
    document.getElementById('nav').append(prev);
    document.getElementById('nav').append(next);
    return;
}

function clearNav() {
    document.getElementById('navyear').remove();

    if (document.getElementById('prev'))
        document.getElementById('prev').remove();

    if (document.getElementById('next'))
        document.getElementById('next').remove();

    return;
}

function navYear(dir = 0) {

    console.log(dir);
    const currYear = Number(document.getElementById('working-year').innerHTML);

    clearNav();

    if (dir == -1)
        document.getElementById('navfish').classList.add('move-left');
    else
        document.getElementById('navfish').classList.add('move-right');

    setTimeout( ()=> {

        if (dir == -1)
            document.getElementById('navfish').classList.remove('move-left');
        else
            document.getElementById('navfish').classList.remove('move-right');

        document.getElementById('navfish').remove();

        if (currYear + dir == year) window.location.href = '/illust';
        else window.location.href = `/illust/${currYear + dir}`;

    }, 1500);
}


