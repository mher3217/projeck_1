/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("m_1").classList.toggle("show");
}
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("m_1").classList.toggle("show");
}

/*var myImage = document.getElementById("myPhoto");
var imageArray = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];
var imageIndex = 0;
function change_photo(){
	myPhoto.setAttribute("src", imageArray [imageIndex]);
	imageIndex ++;
	if(imageIndex >= imageArray.length){
		imageIndex = 0;
	}
}
var intervalHandle = setInterval(change_photo, 2000);
function slyder_stop(){
	clearInterval(intervalHandle);
}*/

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
