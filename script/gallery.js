import data from './logs/illust.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', load);

export function load() {
    var grid = document.querySelector('.grid'); // Select your Masonry container

    // Populate with info from json
    let version = document.getElementById('working-year').innerHTML;
    var use = data[version];

    for (let i = 0; i < use.length; i++) {

        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        const current = use[i];

        if (use[i].multiple) {


            if (use[i].thumbnail) {
                newDiv.innerHTML = `<img src='/img/illust/${current.id}.png'>
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`;

            } else {

                let images = '';

                for (let j = 0; j < use[i].multiple; j++) {
                    images += `<img src='/img/illust/${current.id}-${j}.png'>`;
                }

                newDiv.innerHTML = `${images}
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`


            }

            newDiv.onclick = function() {openMultipleImg(current)};

        } else {
            newDiv.onclick = function() {openImg(current);};
            newDiv.innerHTML =
                `<img src='/img/illust/${current.id}.png'>
                <div class='title'><b>${format(current.id)}</b> ${current.title}</div>`;
        }
            grid.appendChild(newDiv);


    }



    // Masonry stuff
    if (grid) {
        imagesLoaded(grid, function() {
            // Initialize Masonry after all images in the grid are loaded
            var msnry = new Masonry(grid, {
                itemSelector: '.grid-item', // Select your grid items
                percentPosition: true, // Optional: for responsive layouts
            });
        });
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
    document.getElementById('content').innerHTML = `<div><img src='/img/illust/${img.id}.png'></div>
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
        <img src='/img/illust/${img.id}-${currentOpen}.png'></div>
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

        document.getElementById('currentDisplay').innerHTML = `<img src='/img/illust/${img.id}-${currentOpen}.png'>`;
        document.getElementById('open').innerHTML = `(${currentOpen + 1})`;

    }

    document.getElementById('right-arrow').onclick = function() {

        currentOpen += 1;
        if (currentOpen > img.multiple - 1) { currentOpen = 0; }

        document.getElementById('currentDisplay').innerHTML = `<img src='/img/illust/${img.id}-${currentOpen}.png'>`;
        document.getElementById('open').innerHTML = `(${currentOpen + 1})`;

    }


}

function closeImg() {
    document.getElementById('zoom').style.display = 'none';
}


