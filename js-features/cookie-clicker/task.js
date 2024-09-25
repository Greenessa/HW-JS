const cookie = document.getElementsByTagName("img")[0];
let n=0;
let now = (new Date().getTime())/1000;
let newDiv=document.createElement('div');
newDiv.textContent = 'Скорость клика:';
let block = document.createElement('span');
block.id = 'clicker__speed';
let speed = 0;
block.textContent=speed;

let parent = document.querySelector(".clicker");
// parent.prepend(newDiv);
// parent.append(newDiv);
// document.getElementById("clicker__speed").innerHTML = speed;
parent.insertBefore(newDiv,cookie);
newDiv.append(block);
cookie.addEventListener('click', function(event) {
    let timeClick = (new Date().getTime())/1000;
    let timePassed = timeClick-now;
    n+=event.detail;
    speed = (n/timePassed).toFixed(2);
    // speed = n/timePassed;
    document.getElementById("clicker__speed").innerHTML = speed;
    document.getElementById("clicker__counter").innerHTML = n;
    if (n%2===0) {
        document.getElementById("cookie").width=200;
    }   else {
        document.getElementById("cookie").width=300;
    }
})
