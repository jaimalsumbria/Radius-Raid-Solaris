
/*==============================================================================
Init
==============================================================================*/
$.SmallButton = function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
	var text = $.text( {
		ctx: $.ctxbigbgd,
		x: 0,
		y: 0,
		text: this.title,
		hspacing: 1,
		vspacing: 0,
		halign: 'center',
		valign: 'center',
		scale: this.scale,
		snap: 1,
		render: 0
	} );
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

$.SmallButton.prototype.update = function( i ) {
	/*==============================================================================
	Check Hover State
	==============================================================================*/
	
	if( $.util.pointInCircle( $.mouse.sx, $.mouse.sy, this.sx, this.sy, this.width/2 + this.width/4) && i==-1) {
    	this.mouse.sx = $.mouse.sx;
        this.mouse.sy = $.mouse.sy;
        this.touch.down = $.touch.down;
   } else {
       	this.hovering = 0;
       	this.touch.down = 0;
   }
    
	if( $.util.pointInCircle( this.mouse.sx, this.mouse.sy, this.sx, this.sy, this.width/2 + this.width/4 ) ){
		this.hovering = 1;
		if( !this.ohovering ) {
			//$.audio.play( 'hover' );
		}
	} else {
		this.hovering = 0;

		$.keys.state.up = 0;
		$.keys.state.right = 0;
		$.keys.state.down = 0; 
		$.keys.state.left = 0; 
		
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
$.SmallButton.prototype.render = function( i ) {	
    
	if( this.hovering ) {
	
    	$.ctxbigbgd.fillStyle = 'hsla(0, 0%, 10%, 0.5)';
        $.util.fillCircle( $.ctxbigbgd, this.mouse.sx+190,  this.mouse.sy+190, this.width/16, $.ctxbigbgd.fillStyle ) ;
	}
	$.ctxbigbgd.fillStyle = 'hsla(0, 0%, 50%, 0.2)';
	$.util.fillCircle($.ctxbigbgd, Math.floor( this.sx +190), Math.floor( this.sy +10), this.width/2 + 2);
	
	$.ctxbigbgd.fillStyle = 'hsla(300, 100%, 8%, 0.07)';
	$.util.fillCircle($.ctxbigbgd, Math.floor( this.sx + 190), Math.floor( this.sy + 10), this.width/2 + 2);
	$.ctxbigbgd.strokeStyle = 'hsla(0, 0%, 10%, 0.30)';
	$.util.strokeCircle($.ctxbigbgd, Math.floor( this.sx + 190), Math.floor( this.sy + 10), this.width/2-1, $.ctxbigbgd.strokeStyle );

    if($.mute) {
		$.ctxbigbgd.drawImage(this.button_img1, this.cx+190 - this.width/4, this.cy+10 - this.width/4, this.width/2, this.width/2);
	} else {
		$.ctxbigbgd.drawImage(this.button_img2, this.cx+190 - this.width/4, this.cy+10 - this.width/4, this.width/2, this.width/2);
	}
	
	
};