import { load } from './gallery.js';

const year = 2025;
const home = `<a href='https://mn1ca.neocities.org'><div id='menu-img'></div></a>`;

const illust = `<details><summary>illust</summary><span id='dropdown'></span></details>`;

const design = `<a href='/design.html'>design</a>`;
const three = `<a href='/three.html'>3d</a>`;
const web = `<a href='/web.html'>web</a>`;
const about = `<a href='/about.html'>about</a>`;

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('menu').innerHTML = home + illust + design + three + web + about;

    document.getElementById('mini-menu').innerHTML = home /*+ `≡`*/;

    // Fish on bottom
    const fish = document.createElement('div');
    fish.id ='navfish';
    fish.innerHTML = `<img src='/img/site/fish.gif'>`;
    document.getElementById('nav').append(fish);
    nav();

    for (let i = 2023; i < year + 1; i++) {
        const selection = document.createElement('span');
        selection.classList.add('choice');

        selection.innerHTML = i;
        selection.addEventListener('click', () => changeYear(i));
        document.getElementById('dropdown').append(selection);
    }
});

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


function changeYear(year, removed = false) {

    // Set new year
    document.getElementById('working-year').innerHTML = year;

    // Reset nav if necessary
    if (!removed) clearNav();
    nav();

    // Reload grid
    var grid = document.querySelector('.grid');
    grid.innerHTML = '';
    load();

    // Reset scroll
    window.scroll(0,0);

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

        changeYear(currYear + dir, true);

    }, 1500);
}
