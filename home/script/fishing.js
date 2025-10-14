document.addEventListener('mousemove', fishing);
document.addEventListener('touchmove', fishingAlt);

var fish = 0;

function fishing() {
    line = document.getElementById("line");
    position = (event.pageY) - 150;
    line.style.height = position + 'px';
}

function fishingAlt() {
    line = document.getElementById("line");
    var n = 0.002 * window.innerHeight;
    scrollPosition = (window.scrollY * n) + 200;
    line.style.height = scrollPosition + 'px';
}

function catchFish() {

    let hook = document.getElementById("hook");
    let hookStyle, cursorStyle;

    if (!fish) {

        hookStyle = '195px';
        cursorStyle = 'worm';

        fish = 1;

    } else {

        hookStyle = 0;
        cursorStyle = 'fish';

        fish = 0;
    }

        // Hook change
        hook.style.background = `url('/home/img/hook.png') ${hookStyle} 0`;

        // Cursor change
        hook.style.cursor = `url('/img/cursor/${cursorStyle}2.png'), pointer`;
        document.body.style.cursor = `url('/img/cursor/${cursorStyle}.png'), pointer`;

        const links = document.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.cursor = `url('/img/cursor/${cursorStyle}2.png'), pointer`;
        }
}
