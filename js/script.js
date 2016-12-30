var i, c=7;
var dest;
var Z;

function loadIMG(dest){
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

var wsize=200, l;
window.onscroll = function(){
	if ((document.body.scrollTop > wsize || document.documentElement.scrollTop > wsize)&&(c<=77)){
		for (l=1;l<=3;l++){
			loadIMG("items"+l);
		}
		wsize+=900;
	document.getElementById("up").style.position="fixed";}
};

function fullscr(z){
Z = z;
if (window.matchMedia( "(orientation:portrait)" ).matches) {
	downloadIMG();
} else {
	document.getElementById("fullscr_img").src="img/null.gif";	
	document.getElementById("fullscr").style.visibility="visible";
	document.getElementById("fullscr_img").src="img/preview/preview ("+z+").jpg";	
}
};

function closePRW(){
document.getElementById("fullscr").style.visibility="hidden";
};

function downloadIMG(){
document.location.href = "img/big/big"+Z+".jpg";
};

function showIT(target){
hideAll();
document.getElementById(target).style.visibility="visible";
document.getElementById(target).style.height="300px";
};

function hideAll(){
document.getElementById("contact").style.visibility="hidden";
document.getElementById("contact").style.height="0px";
document.getElementById("about").style.visibility="hidden";
document.getElementById("about").style.height="0px";
};
