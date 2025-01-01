function menuHover(i) {
    switch(i) {
        case 0:
            document.getElementById('menu-art').innerHTML = '[畫]';
            return;
        
        case 1:
            document.getElementById('menu-clay').innerHTML = '[陶]';
            return;
        
        case 2:
            document.getElementById('menu-web').innerHTML = '[網]';
            return;
            
    }
        
}


function menuReset(n = 0) {
    
    if (!n) {
        document.getElementById('menu-art').innerHTML = '&nbsp;art';
        document.getElementById('menu-clay').innerHTML = 'clay';
        document.getElementById('menu-web').innerHTML = '&nbsp;web'; 
    } else {
        document.getElementById('menu-art').innerHTML = 'art';
        document.getElementById('menu-clay').innerHTML = 'clay';
        document.getElementById('menu-web').innerHTML = 'web';
    }
    
    
}


function openImg(i, n = 0) {
    document.getElementById('zoom').style.display = 'inline-flex';
    document.getElementById(i).style.display = 'flex';
    
    if (n) {
        var curr = 0;
        
        // Reset to 0 if necessary
        document.getElementById(i + '_0').style.display = 'inline';
        document.getElementById(i + '_N').innerHTML = 1;
        for (var j = 1; j < n; j++) {
            document.getElementById(i + '_' + j).style.display = 'none';
        }
        //
        
        var left = document.getElementById(i + '_L');
        var right = document.getElementById(i + '_R');
        
        left.onclick = function() {
            
            document.getElementById(i + '_' + curr).style.display = 'none';
            curr -= 1;
            if (curr < 0) { curr = n - 1; }
            
            document.getElementById(i + '_' + curr).style.display = 'inline';
            document.getElementById(i + '_N').innerHTML = curr + 1;
            
        }
        
        right.onclick = function() {
            
            document.getElementById(i + '_' + curr).style.display = 'none';
            curr += 1;
            if (curr > n - 1) { curr = 0; }
            
            document.getElementById(i + '_' + curr).style.display = 'inline';
            document.getElementById(i + '_N').innerHTML = curr + 1;
            
        }
        
    
    }
}


function closeImg() {
    document.getElementById('zoom').style.display = 'none';
    
    var content = document.querySelectorAll(".content");

    content.forEach(c => {
       c.style.display = 'none';
    });
}