// Toggling section descriptions

var toggled = [false, false, false, false];

function toggle(i, showDesc = false) {
    const element = document.getElementById(i);
    element.classList.toggle('down');

    if (!toggled[i]) {
        document.getElementById('text' + i).style.display = 'block';

        for (let j = 0; j < 4; j++) {
            if (toggled[j]) {
                document.getElementById(j).classList.toggle('down');
                document.getElementById('text' + j).style.display = 'none';
                toggled[j] = false;

                document.getElementById('desc' + j).classList.remove('show');
            }
        }

        if (showDesc)
            document.getElementById('desc' + i).classList.add('show');

        document.getElementById('hide-while-active').style.display = 'block';

    } else {
        document.getElementById('text' + i).style.display = 'none';
        document.getElementById('desc' + i).classList.remove('show');

        document.getElementById('hide-while-active').style.display = 'none';
    }

    toggled[i] = !(toggled[i]);

    // Close buttons dropdown
    if (!(toggled[1]))
        document.getElementById("buttons").open = false;
}


// Toggle all off (used when clicking shadow during narrow view)
function toggleOff() {
    for (let i = 0; i < 4; i++) {
        document.getElementById('text' + i).style.display = 'none';
        document.getElementById('desc' + i).classList.remove('show');
        document.getElementById(i).classList.remove('down');
        toggled[i] = false;
    }

    document.getElementById("buttons").open = false;
    document.getElementById('hide-while-active').style.display = 'none';

}


