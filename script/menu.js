const home = `<a href='/'><div id='menu-img'></div></a>`;

const illust = `<details><summary><span style='font-weight:1000'>illust</span></summary><span id='dropdown'></span></details>`;
const illustAlt = `<a href='/illust'>illust</a>`;

const design = `<a href='../design'><span style='font-weight:1000'>design</span></a>`;
const designAlt = `<a href='../design'>design</a>`;

const three = `<a href='../threedee'>3d</a>`;
const about = `<a href='../about'>about</a>`;

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('design-menu'))
        document.getElementById('design-menu').innerHTML =  home + `<div id='menu-text'>` + illustAlt + design + three + about + `</div>`;

    if (document.getElementById('illust-menu'))
        document.getElementById('illust-menu').innerHTML =  home + `<div id='menu-text'>` + illust + designAlt + three + about + `</div>`;
});
