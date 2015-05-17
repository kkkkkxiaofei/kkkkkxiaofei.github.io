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
	    				  '其实我更喜欢老萧的版本～',
					      '老萧的《爱的自选时刻》太好听了～',
					      '郝云天生的民谣嗓子，这首活着也是让我醉了很久～',
					      '是你，第一眼就认出来，这是命运的安排～',
					      '太喜欢Tanya了，慵懒的嗓音让人爱到不行～',
					      '小琥姐的暖心歌曲，歌词很是不错～',
					      '可是怎么说，怎么说，我们之间留了太多空白格',
					      '新逆袭的小眼男生，算是最近比较火了～',
					      '简直就是高逼格的神曲，第一次听完就直接被洗脑两星期～',
					      '李宗盛的经典作品，小女人的演绎～'
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
	

	musics.click(function() {
		var index = getChildIndex(musics, this);
		$('#player').attr('src',musicSrcs[index]);
	});

	function play() {
		$('#player').attr('src','/music/阴天.mp3');
	}
});