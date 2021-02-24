function show_x_and_y(event) {
 alert(event.pageX + ", " + event.pageY); return false; 
}

Event.addBehavior({
		'#hyperlink:click' : show_x_and_y,
		'#hyperlink:mouseover' : function() { $( 'the_form' ).hide() },
		'#hyperlink:mouseout' : function() { $( 'the_form' ).show() } 
});
