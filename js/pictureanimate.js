$(document).ready(function(){
	$(".card").hover(function(){
	  	$(this).css("background-color", "#f0f0f0");
	  }, function(){
	 	 $(this).css("background-color", "white");
	});
});

$(document).ready(function() {
    $(".image-frame").hover(function(){
		$(".image-caption",this).slideToggle("slow");
	}, function(){
		$(".image-caption",this).slideToggle("slow");
    });
});
