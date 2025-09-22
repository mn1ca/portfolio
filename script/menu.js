const year = 2025;
const home = `<a href='../index.html'><div id='menu-img'></div></a>`;

const illust = `<details><summary><span style='font-weight:1000'>illust</span></summary><span id='dropdown'></span></details>`;
const illustAlt = `<a href='../illust/index.html'>illust</a>`;

const design = `<a href='../design/index.html'><span style='font-weight:1000'>design</span></a>`;
const designAlt = `<a href='../design/index.html'>design</a>`;

const three = `<a href='../threedee.html'>3d</a>`;
const about = `<a href='../about.html'>about</a>`;

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('menu-design'))
        document.getElementById('menu-design').innerHTML =  home + `<div id='menu-text'>` + illustAlt + design + three + about + `</div>`;

    if (document.getElementById('menu-illust'))
        document.getElementById('menu-illust').innerHTML =  home + `<div id='menu-text'>` + illust + designAlt + three + about + `</div>`;

    // Fish on bottom
    if (document.getElementById('nav')) {
        const fish = document.createElement('div');
        fish.id ='navfish';
        fish.innerHTML = `<img src='../img/site/fish.gif'>`;
        document.getElementById('nav').append(fish);
        nav();
    }

    if (document.getElementById('dropdown')) {
        for (let i = 2023; i < year + 1; i++) {
            const selection = document.createElement('span');
            selection.classList.add('choice');

            if (i === year) selection.innerHTML = `<a href='../illust/index.html'>${i}</a>`;
            else selection.innerHTML = `<a href='../illust/${i}.html'>${i}</a>`;

            document.getElementById('dropdown').append(selection);
        }
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

        if (currYear + dir == year) window.location.href = '../illust/index.html';
        else window.location.href = `../illust/${currYear + dir}.html`;

    }, 1500);
}
