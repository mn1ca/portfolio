import data from './logs/about.json' with { type: 'json' };

document.addEventListener('DOMContentLoaded', load);


function load() {
    buttons();
    lippies();
    statusCafe();
}

// Adds list of buttons to wall
function buttons() {

    const buttons = data['buttons'];
    const display = document.getElementById('button-display');

    for (let i = 0; i < buttons.length; i++) {

        const newButton = document.createElement('span');
        newButton.innerHTML = `<a href='${buttons[i].link}' target='_blank' style='text-decoration: none'>
                    <img src='../img/buttons/${buttons[i].img}' style='image-rendering: pixelated; width: 88px;'></a>`
        display.appendChild(newButton);
    }

    return;
}


// Generates 3 random lip products
function lippies() {
    const lippies = data['lippies'];
    const print = document.getElementById('lippies');

    const i = Math.floor(Math.random() * (lippies.length));
    print.innerHTML = `the ${lippies[i].name} <i style='font-size: 75%; text-transform: uppercase'>(${lippies[i].shade})</i>`;

    // Generate 3 random
    /*
    const random = new Set();
    while (random.size < 3) {
        const num = Math.floor(Math.random() * (lippies.length));
        random.add(num);
    }


    const text = [];
    for (const i of random) {
        text.push(`${lippies[i].name} <i style='font-size: 75%; text-transform: uppercase'>(${lippies[i].shade})</i>`);
    }

    print.innerHTML = `the ${text[0]}, ${text[1]}, and ${text[2]}`;
    */

    return;
}


// Statuscafe update
function statusCafe() {

    fetch("https://status.cafe/users/mn1ca/status.json")
      .then( r => r.json() )
      .then( r => {
        if (!r.content.length) {
          document.getElementById("statuscafe-content").innerHTML = "nothing to say";
          return;
        }
        document.getElementById("statuscafe-time").innerHTML = r.face + ' • ' +r.timeAgo;
        document.getElementById("statuscafe-content").innerHTML = r.content;
      })

}
