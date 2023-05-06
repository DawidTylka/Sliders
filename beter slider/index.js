const ilefoto = 5;
const ilefotoinside = document.getElementById("get").childElementCount;
var ktore = (Math.floor(ilefoto/2) + Math.ceil(ilefotoinside/2));
function cofnij(){
	cofnijnext();
}
function cofnijnext(){
	var i = 0;
		if(ktore == (ilefotoinside-Math.ceil(ilefotoinside/2)+Math.floor(ilefotoinside/2)-(Math.ceil((ilefotoinside-1)/2)- 1 + Math.ceil((ilefotoinside+1)%2)))){return;}
		var x = document.getElementsByName("obraz");
			ktore-=ilefotoinside;
			while(x.length > i){
				if(i != 0){ktore++;}
					x[i].src = "OIP"+ktore+".jpg";
					if(ktore > ilefoto || ktore < 1){
						x[i].style.opacity="0";
					}else{
						x[i].style.opacity="100";
					}
					if(i == Math.floor(x.length/2)){
					document.getElementById("big").src= "OIP"+ktore+".jpg";
				}
				i++;
				}
}


function dalej(){
	dalejnext();
}

function dalejnext(){
	var i = 0;
		var x = document.getElementsByName("obraz");
		if(ktore >= ilefoto+(Math.ceil(ilefotoinside/2)-1)){return;}
		ktore-=(ilefotoinside - 2);
			while(x.length > i){
				if(i != 0){ktore++;}
				console.log(ktore);
					x[i].src = "OIP"+ktore+".jpg";
					if(ktore > ilefoto || ktore < 1){
						x[i].style.opacity="0";
					}else{
						x[i].style.opacity="100";
					}
					if(i == Math.floor(x.length/2)){
					document.getElementById("big").src= "OIP"+ktore+".jpg";
					}
				i++;

			}
}

