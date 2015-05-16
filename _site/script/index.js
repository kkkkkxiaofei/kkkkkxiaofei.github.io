$().ready(function(){
	var MAX = 9;
	var MIN = 0;
	var LEN = MAX - MIN + 1;
	var currentIndex = 1;
    var bigPhotos = $('ul#big-photo li');
    var photoDescriptions = $('ul#photo-descriotion li');
    var thumbPhotos = $('span.mask');

	$('ul#thumb-photo li').hover(function()	{
		// var index = getChildIndex($(this).parent().children(), this);
		// bigPhotoDisplayNone(currentIndex);
		// bigPhotoDisplay(index);
		// currentIndex = index;
	});

	function getChildIndex (children, ele){
		for(var i = 0;i < children.length;i ++) {
			if(children[i] === ele) {
				return i;
			}
		}
		return currentIndex;
	}


	function bigPhotoDisplayNone(index) {
		bigPhotos.eq(index).css("display","none");
	}

	function bigPhotoDisplay(index) {
		bigPhotos.eq(index).css("display","block");
	}

	function activeThumbPhoto(index) {
		thumbPhotos.eq(index).removeClass('mask');
	}

	function unActiveThumbPhoto(index) {
		thumbPhotos.eq(index).addClass('mask');
	}

	setInterval(function() {
		
	}, 1000);

	$('.focus_switch').click(test);

	(function initThumbAndBigPhoto(){
		activeThumbPhoto(MIN);
		bigPhotoDisplay(MIN);
	})();

	setInterval(test, 1500);

	function test(){
		if(currentIndex > MIN){
			unActiveThumbPhoto(currentIndex -1);
			bigPhotoDisplayNone(currentIndex -1);
		}else {
			unActiveThumbPhoto(MAX);
			bigPhotoDisplayNone(MAX);
		}

		activeThumbPhoto(currentIndex);
		bigPhotoDisplay(currentIndex);
		if(currentIndex < MAX){
			currentIndex++;
		}else{
			currentIndex = MIN;
		}
	}

})