$().ready(function(){
	var MAX = 9;
	var MIN = 0;
	var LEN = MAX - MIN + 1;
	var currentIndex = 1;
    var bigPhotos = $('ul#big-photo li');
    var photoDescriptions = $('ul#photo-descriotion li');
    var thumbPhotos = $('span.mask');
   	var photoDescription = $('ul#photo-descriotion a');
   	var musics = $('.music-part');
   	var musicSrcs = [
	   				'/music/我怀念的.mp3',
				   	'/music/如果没有你.mp3', 
				   	'/music/如果没有你.mp3',
				   	'/music/世界唯一的你.mp3', 
				   	'/music/原点.mp3',
				   	'/music/空白格.mp3', 
				   	'/music/顺其自然.mp3',
				   	'/music/模特.mp3',
				   	'/music/我在人民广场吃炸鸡.mp3',
				   	'/music/阴天.mp3'
   	 			];
    var descriptions = [
	    				  '我怀念的是无话不说，我怀念的是一起做梦～',
					      'Hey，我真的好想你～',
					      '我不想这样活着～',
					      '是你，第一眼就认出来，这是命运的安排～',
					      '太喜欢Tanya了，慵懒的嗓音让人爱到不行～',
					      '小琥姐的暖心歌曲，歌词很是不错～',
					      '可是怎么说，怎么说，我们之间留了太多空白格',
					      '新逆袭的小眼男生，算是最近比较火了～',
					      '我在人民广场吃炸鸡呀～',
					      '阴天，在不开灯的房间～'
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

	setInterval(autoSelect, 3500);

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
	
	function palyMusic(index) {
		$('.music-play-icon').css('display','none');
		$('.music-part .music-play-icon').eq(index).css('display','block');
		$('#player').attr('src', musicSrcs[index]);
	}

	musics.click(function() {
		var index = getChildIndex(musics, this);
		palyMusic(index);
	});

	palyMusic(0);


	


	
});