document.addEventListener('mousemove', fishing);
document.addEventListener('touchmove', fishingAlt);

var fish = 0;

function fishing() {
    line = document.getElementById("line");
    position = (event.pageY) - 175;
    line.style.height = position + 'px';
}

function fishingAlt() {
    line = document.getElementById("line");
    var n = 0.002 * window.innerHeight;
    scrollPosition = (window.scrollY * n) + 200;
    line.style.height = scrollPosition + 'px';
}

function catchFish() {

    var hook = document.getElementById("hook");

    if (!fish) {
        // Hook change
        hook.style.background = "url('img/site/index/hook.png') 195px 0";

        // Cursor change
        hook.style.cursor = "url('img/site/cursor/worm2.png'), pointer";
        document.body.style.cursor = "url('img/site/cursor/worm.png'), pointer";

        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.cursor = "url('img/site/cursor/worm2.png'), pointer";
        }

        fish = 1;

    } else {
        // Hook change
        hook.style.background = "url('img/site/index/hook.png') 0 0";

        // Cursor Change
        hook.style.cursor = "url('img/site/cursor/fish2.png'), pointer";
        document.body.style.cursor = "url('img/site/cursor/fish.png'), pointer";
        var links = document.getElementsByTagName("a");

        for (var i = 0; i < links.length; i++) {
            links[i].style.cursor = "url('img/site/cursor/fish2.png'), pointer";
        }

        fish = 0;
    }
}
