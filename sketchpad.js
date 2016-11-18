$(document).ready(function(){
    var height = 16;
    var width = 16;
    for (i=0; i < height; i++){
   		$('<div>').addClass('square-line').appendTo(".container");
   	};
    
    for (j=0; j < width; j++){
    	$('<div>').addClass('square').appendTo(".square-line");	
	};
	
	$('.button').on('click', function() {
		$('.square').removeAttr( 'style');
		$('.container').find('.change').removeClass('change');
		$('.container').off('mouseenter', '.square');

	});

	$('.colorButton').on('click', function() {
		$('.container').on('mouseenter', '.square', function(){
			var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background",color);
		});

	});

	$('.BWbutton').on('click', function() {
		$('.container').on('mouseenter', '.square', function(){	
			$(this).addClass('change');
		});
	});

	$('.newGrid').on('click', function() {
		
		$('.square-line').remove();
		var value = prompt('How many Squares per size do you want?');
		var height = value;
    	var width =value;
    	for (i=0; i < height; i++){
   			$('<div>').addClass('square-line').appendTo(".container");
   		};
    
    	for (j=0; j < width; j++){
    		$('<div>').addClass('square').appendTo(".square-line");	
		};
		
	});

	//function drawGrid (height, width){

	//	for (i=0; i < height; i++){
   	//		$('<div>').addClass('square-line').appendTo(".container");
   	//	};
    
    //	for (j=0; j < width; j++){
    //		$('<div>').addClass('square').appendTo(".square-line");	
	//	};

	//}


});