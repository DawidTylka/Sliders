var ktore = 4;
const ilefoto = 5;
function cofnij(){
	var i = 0;
	if(ktore == 2){return;}
	var x = document.getElementsByName("obraz");
		ktore-=3;
		while(x.length > i){
			if(i != 0){
			ktore++;}
				x[i].src = "OIP"+ktore+".jpg";
				if(ktore < 1){
					x[i].style.opacity="0";
				}else{
					x[i].style.opacity="100";
				}
				if(i == 1){
				document.getElementById("big").src= "OIP"+ktore+".jpg";
			}
			i++;
			}
}

function dalej(){
	var i = 0;
	var x = document.getElementsByName("obraz");
	if(ktore >= ilefoto+1){return;}
	ktore--;
		while(x.length > i){
			if(i != 0){
			ktore++;}
				x[i].src = "OIP"+ktore+".jpg";
				if(ktore > 5){
					x[i].style.opacity="0";
				}else{
					x[i].style.opacity="100";
				}
				if(i == 1){
				document.getElementById("big").src= "OIP"+ktore+".jpg";
				}
			i++;

		}
}



