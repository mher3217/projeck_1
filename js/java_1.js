/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("m_1").classList.toggle("show");
}

var index = 1;
function plusIndex(){
	index = index + 1;
	show_image(index);
	}	
show_image(1);
function show_image(n){
	var i;
	var x = document.getElementsByClassName("slyder_fade");
	if(n > x.length){
		index = 1;
	}
	if(n < 1){
		index = x.length;
	}
	for(var i = 0; i < x.length; ++i){
		x[i].style.display = "none";
	}
	x[index - 1].style.display = "block";
}

auto_change();
function auto_change(){
	var i;
	var x = document.getElementsByClassName("slyder_fade");
	for(var i = 0; i < x.length; ++i){
		x[i].style.display = "none";
	}
	if(index > x.length){
		index = 1;
	}
	x[index - 1].style.display = "block";	
	index ++;
	setTimeout(auto_change,2000);
}

function topFunction_1() {
    document.body.scrollTop = 500; 
}
function topFunction_2() {
    document.body.scrollTop = 1800; 
}
function topFunction_3() {
    document.body.scrollTop = 3000; 
}

window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
