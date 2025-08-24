
/*==============================================================================
Init
==============================================================================*/
$.Themestage = function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
	var logo = new Image();
	logo.src = 'yutani2.png';
	 
	this.themebuttons = [];
	for( var i = 0; i < $.definitions.theme.length; i++ ){
		
		var sBtn = new $.Themebutton( {
			x: $.cw * 0.124 + i*200,
			y: $.ch/2,
			lockedWidth: $.cw/5,
			lockedHeight: 49,
			scale: 8,
			title: '' +i,
			theme: i,
			action: function(theme) {
			  $.theme = this.theme;
			  $.storage['theme'] = this.theme;
			  $.updateStorage();
			  $.reset();			 
		      $.audio.play( 'levelup' );
			  $.clickDone = 0 ;	
			  $.mouse.down = 0;
			  $.touch.down = 0;
			  $.init0(-1);
			}
		} );
		
		this.themebuttons.push( sBtn );	
	}
};


/*==============================================================================
Update
==============================================================================*/

$.Themestage.prototype.update = function( i ) {
	/*==============================================================================
	Check Hover State
	==============================================================================*/
	
	 var i = this.themebuttons.length; while( i-- ){ this.themebuttons[ i ].update( -1 )}

};

/*==============================================================================
Render
==============================================================================*/
$.Themestage.prototype.render = function( i ) {	
          
		 // var ctx = $.ctxbg0;		
		 // ctx.fillStyle = $.definitions.theme[$.theme].fillStyle;
	      //ctx.fillRect( 0, 0, $.cw, $.ch );
		  //ctx.drawImage(logo,  $.cw/2-150, $.ch/2-150, 300, 300);
		  
		  
		for( var i = 0; i < $.definitions.theme.length; i++ ){
				
		    this.themebuttons[ i ].render( i );
				
		}

};