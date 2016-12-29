var i, c=7;
var dest;
var Z;

function load(dest){
var items = document.getElementById(dest);
for (i=0;i<3;i++){
		c++;
		var div = document.createElement("DIV");
		div.setAttribute('class', 'img');
		div.style.backgroundImage = "url('img/preview/preview ("+c+").jpg')";
		div.setAttribute('onclick', "fullscr("+c+");");	
		items.appendChild(div);
}
};

var wsize=300, l;
window.onscroll = function(){
	if ((document.body.scrollTop > wsize || document.documentElement.scrollTop > wsize)&&(c<=77)){
		for (l=1;l<=3;l++){
			load("items"+l);
		}
		wsize+=800;
	document.getElementById("up").style.position="fixed";}
};

function fullscr(z){
Z = z;
if (window.matchMedia( "(max-width: 800px)" ).matches) {
	download();
} else {
	document.getElementById("fullscr_img").src="img/null.gif";	
	document.getElementById("fullscr").style.visibility="visible";
	document.getElementById("fullscr_img").src="img/preview/preview ("+z+").jpg";	
}
};

function exit(){
document.getElementById("fullscr").style.visibility="hidden";
};

function download(){
document.location.href = "img/big/big"+Z+".jpg";
};
