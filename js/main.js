$( function() {
	var props = ['bgColor', 0, 0, 0]
    $( "#slider-red" ).slider({
        max: 255,
		slide: function(e, ui) {
			props[1] = ui.value
			onColorText()
			
		}
    });
	    $( "#slider-blue" ).slider({
        max: 255,
		slide: function(e, ui) {
			props[3] = ui.value
			onColorText()
			
		}
    });
	    $( "#slider-green" ).slider({
        max: 255,
		slide: function(e, ui) {
			props[2] = ui.value
			onColorText()
		}
    });
	
	$( "#tabs" ).tabs({
		activate: function( e, ui ) {
			console.log(ui);
			props[0] = ui.newTab.context.innerHTML
		}
	})
	
	function onColorText () {
		if (props[0] === 'Text'){
			$('.bg').css({'color': `rgb(${props[1]}, ${props[2]}, ${props[3]})`})
		} else if (props[0] === 'bgColor') {
			$('.bg').css({'background': `rgb(${props[1]}, ${props[2]}, ${props[3]})`})
		}
		
		
	}
	
});
