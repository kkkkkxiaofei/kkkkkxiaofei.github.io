$().ready(function(){
	var MAX = 9;
	var MIN = 0;
	var LEN = MAX - MIN + 1;
	var currentIndex = 1;
    var bigPhotos = $('ul#big-photo li');
    var photoDescriptions = $('ul#photo-descriotion li');
    var thumbPhotos = $('span.mask');
   	var photoDescription = $('ul#photo-descriotion a');
    var descriptions = [
	    				'王力宏，永远的男神0',
					    '王力宏，永远的男神1',
					    '王力宏，永远的男神2',
					    '王力宏，永远的男神3',
					    '王力宏，永远的男神4',
					    '王力宏，永远的男神5',
					    '王力宏，永远的男神6',
					    '王力宏，永远的男神7',
					    '王力宏，永远的男神8',
					    '王力宏，永远的男神9'
					 ];

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
		photoDescription.text(descriptions[index]);
	}

	function unActiveThumbPhoto(index) {
		thumbPhotos.eq(index).addClass('mask');
	}

	setInterval(function() {
		
	}, 1000);

	$('.focus_switch').click(autoSelect);

	(function initThumbAndBigPhoto(){
		activeThumbPhoto(MIN);
		bigPhotoDisplay(MIN);
	})();

	setInterval(autoSelect, 1500);

	function autoSelect() {
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
});