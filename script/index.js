$().ready(function(){

	var currentIndex = 0;
    var bigPhotos = $('ul#big-photo li');
    var photoDescriptions = $('ul#photo-descriotion li');


	// $('ul#thumb-photo li').hover(function()	{
	// 	var index = getChildIndex($(this).parent().children(), this);
	// 	bigPhotoDisplayNone(currentIndex);
	// 	bigPhotoDisplay(index);
	// 	currentIndex = index;
	// });

	function getChildIndex (children, ele){
		for(var i = 0;i < children.length;i ++) {
			if(children[i] === ele) {
				return i;
			}
		}
		return current_index;
	}

	function bigPhotoDisplayNone(index) {
		bigPhotos.eq(index).css("display","none");
	}

	function bigPhotoDisplay(index) {
		bigPhotos.eq(index).css("display","list-item");
	}


})