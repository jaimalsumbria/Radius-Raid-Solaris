
/*==============================================================================
Init
==============================================================================*/
$.Themebutton= function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
    this.theme = this.theme;
	this.width = this.lockedWidth;
	this.height = this.lockedHeight;
	
	this.sx = this.x;// - this.width / 2;
	this.sy = this.y;// - this.height / 2;
	this.cx = this.x;
	this.cy = this.y;
	this.ex = this.x + this.width / 2;
	this.ey = this.y + this.height / 2;
	this.hovering = 0;
	this.ohovering = 0;
	this.title = this.title;
	
	this.mouse = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
	
	this.touch = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
};


/*==============================================================================
Update
==============================================================================*/

$.Themebutton.prototype.update = function( i ) {
	/*==============================================================================
	Check Hover State
	==============================================================================*/
	
	if( $.util.pointInCircle( $.mouse.sx, $.mouse.sy, this.sx, this.sy, this.width/2 + this.width/32) && i==-1) {
    	this.mouse.sx = $.mouse.sx;
        this.mouse.sy = $.mouse.sy;
        this.touch.down = $.touch.down;
   } else {
       	this.hovering = 0;
       	this.touch.down = 0;
   }
    
	if( $.util.pointInCircle( this.mouse.sx, this.mouse.sy, this.sx, this.sy, this.width/2 + this.width/32 ) ){
		this.hovering = 1;
		if( !this.ohovering ) {
			//$.audio.play( 'hover' );
		}
	} else {
		this.hovering = 0;
		
	}
	this.ohovering = this.hovering;
	
	/*==============================================================================
	Check Click
	==============================================================================*/


	if( this.hovering && this.touch.down ) {
		this.action();
	}
};

/*==============================================================================
Render
==============================================================================*/
$.Themebutton.prototype.render = function( i ) {	
    var ctx = $.ctxbg0;	

	ctx.fillStyle = $.definitions.theme[this.theme].fillStyleButton;
	$.util.fillCircle(ctx, Math.floor( this.sx ), Math.floor( this.sy ), this.width/2 - 6);
	
	//ctx.fillStyle = $.definitions.theme[$.theme].fillStyleButton;
	//$.util.fillCircle(ctx, Math.floor( this.sx ), Math.floor( this.sy ), this.width/2 - 10);

	ctx.fillStyle = $.definitions.theme[this.theme].fillStyleButton2;

	$.util.strokeCircle( ctx, Math.floor( this.sx ), Math.floor( this.sy ), this.width /2- this.width /32, ctx.fillStyle, 10 );
	
};