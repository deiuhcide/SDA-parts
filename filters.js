
var links = document.querySelectorAll('.filters a');
var crtLink = document.querySelector('.selected');

for (var i = 0 ; i< links.length; i++){
	links[i].addEventListener('click', filterImages);
}

function filterImages(event){
	event.preventDefault();
	crtLink.className = '';
	crtLink = this ;
	crtLink.className = 'selected';
	//console.dir(this);
	var filter = this.dataset.filter;

	if(!filter){

		var showImages =document.querySelectorAll('.col img');
		var hideImages = [];
	}

	else{
		var showImages = document.querySelectorAll ('[data-category*="' + filter + '"]');
		var hideImages = document.querySelectorAll('.col img:not([data-category *="' + filter +'"]'); 
	}

	for(var i = 0; i<hideImages.length;i++){
		hideImages[i].parentNode.parentNode.style.display = 'none';
	}
	
	for(i=0 ; i<showImages.length;i++){
		showImages[i].parentNode.parentNode.style.display ="block";
	}
}