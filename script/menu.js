const home = `<a href='https://mn1ca.neocities.org'><div id='menu-img'></div></a>`;

const illustDropdown =
     ` <span id="dropdown">
        <a href='https://mn1ca.neocities.org/illust'><div class='choice'>2025</div></a>
        <a href='https://mn1ca.neocities.org/archive/illust/2024.html'><div class='choice'>2024</div></a>
        <a href='https://mn1ca.neocities.org/archive/illust/2023.html'><div class='choice'>2023</div></a>
    </span>`;

const illust = `<details><summary>illust</summary>${illustDropdown}</details>`;


const design = `<a href='https://mn1ca.neocities.org/design'>design</a>`;
const three = `<a href='https://mn1ca.neocities.org/three'>3d</a>`;
const web = `<a href='https://mn1ca.neocities.org/web'>web</a>`;
const about = `<a href='https://mn1ca.neocities.org/about'>about</a>`;

document.addEventListener('DOMContentLoaded', function() {

document.getElementById('menu').innerHTML = home + illust + design + three + web + about;


document.getElementById('mini-menu').innerHTML = home + `<details><summary>≡</summary>
${illustDropdown}</details>`;



});
