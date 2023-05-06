var pos = 0;
const sped = 20;
var przesuniece = 500;
var ilefotoxmax = (document.getElementById("get").children[0].childElementCount - 1) * przesuniece * -1;
var tabela = [];
let zabezpieczenie = true;
window.onload = function() {
	var ilefoto = document.getElementById("get").children[0].childElementCount;
	var polowa = (Math.floor(ilefoto/2) -1 )*-1;
	var i = 0;
	while(i < ilefoto){
	tabela.push(document.getElementById("get").children[0].children[i]);
	
	tabela[i].style.left = (i + polowa)*przesuniece +"px";
	tabela[i].style.top = 0+"px";
	i++;
	}
}

function cofnij(){
	if(zabezpieczenie){
		zabezpieczenie=false;
	cofnijnext();
	}
}
function cofnijnext(){
	var how = pos;
 var elem = document.getElementById("get").children[0]; 
  var id = setInterval(frame, 1);
  function frame() {
    if (pos >= how + przesuniece) {
		var i=0;
		while(tabela.length > i){ 
		tabela[i].style.zIndex="-"+przesuniece+""; 
		i++;
		}
		var pocz = tabela[0];
		var koniec = tabela[(tabela.length-1)];
		tabela.splice(0, 0, koniec); //dodaje na początek
		tabela.pop(); // usuwa ostatni
		zabezpieczenie = true;
      clearInterval(id);
    } else {
      pos+=sped; 
      var i=0;
	  while(tabela.length > i){
		  var x = 0;
		  if(i == tabela.length-1){x = tabela.length*-1; tabela[i].style.zIndex="-100"; }
	  x*=sped;
      tabela[i].style.left = (tabela[i].style.left.replace("px","")-0)+sped+x+ "px"; 
	  i++;
	  }
    }
  }
}


function dalej(){
	if(zabezpieczenie){
		zabezpieczenie=false;
	dalejnext();
	}
}

function dalejnext(){
var how = pos;
 var elem = document.getElementById("get").children[0];   
  var id = setInterval(frame, 1);
  function frame() {
    if (pos <= how - przesuniece) {
		var i=0;
		while(tabela.length > i){ 
		tabela[i].style.zIndex=""+przesuniece+""; 
		i++;
		}
		var pocz = tabela[0];
		var koniec = tabela[(tabela.length-1)];
		tabela.shift();
		tabela.push(pocz);
		zabezpieczenie = true;
      clearInterval(id);
    } else {
      pos-=sped; 
	  var i=0;
	  while(tabela.length > i){
		  var x = 0;
		  if(i == 0){x = tabela.length; tabela[i].style.zIndex="-100"; }
		  x*=sped;
      tabela[i].style.left = (tabela[i].style.left.replace("px","")-0)-sped+x+ "px"; 
	  i++;
	  }
	  
    }
  }
}

