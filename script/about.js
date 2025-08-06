// Toggling section descriptions

var toggled = [false, false, false, false];

function toggle(i, showDesc = false) {
    var element = document.getElementById(i);
    element.classList.toggle('down');

    if (!toggled[i]) {
        document.getElementById('text' + i).style.display = 'block';

        for (var j = 0; j < 4; j++) {
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
    for (var i = 0; i < 4; i++) {
        document.getElementById('text' + i).style.display = 'none';
        document.getElementById('desc' + i).classList.remove('show');
        document.getElementById(i).classList.remove('down');
        toggled[i] = false;
    }

    document.getElementById("buttons").open = false;
    document.getElementById('hide-while-active').style.display = 'none';

}

// Hitcount
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var site_data = JSON.parse(this.responseText);
      var num_arr = site_data.info.views.toString().split("");
      var num_str = "";
      for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
      }
        document.getElementById("hitcount").innerHTML = num_str;
        document.getElementById("hitcount2").innerHTML = num_str;
    }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=mn1ca", true);
  xhttp.send();


// Statuscafe
fetch("https://status.cafe/users/mn1ca/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-time").innerHTML = r.face + ' • ' +r.timeAgo;
    document.getElementById("statuscafe-content").innerHTML = r.content
  })
