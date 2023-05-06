var pos = 0;
var ilefotoxmax = (document.getElementById("get").children[0].childElementCount - 1) * 100 * -1;
function cofnij(){
	cofnijnext();
}
function cofnijnext(){
	var how = pos;
 var elem = document.getElementById("get").children[0];   
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == how + 100 || pos == 100) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}


function dalej(){
	dalejnext();
}

function dalejnext(){
var how = pos;
 var elem = document.getElementById("get").children[0];   
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == how - 100 || pos == ilefotoxmax) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.left = pos + "px"; 
    }
  }
}

