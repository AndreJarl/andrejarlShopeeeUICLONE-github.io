


function changeBg(){

var container = document.getElementById("container");


var scrollValue = window.scrollY;

if(scrollValue < 200) {
				container.classList.remove("Bgcolor")
			 
}
else {
				container.classList.add("Bgcolor")
				
}
}

 window.addEventListener( 'scroll', changeBg);
 
