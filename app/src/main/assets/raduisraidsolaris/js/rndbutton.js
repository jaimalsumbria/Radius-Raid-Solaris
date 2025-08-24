
/*==============================================================================
Init
==============================================================================*/
$.RndButton = function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
	var text = $.text( {
		ctx: $.ctxmg,
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

$.RndButton.prototype.update = function( i ) {
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
   if(i == -2){
	   	this.mouse.sx = -1;
        this.mouse.sy = -1;
   }
    
	if( $.util.pointInCircle( this.mouse.sx, this.mouse.sy, this.sx, this.sy, this.width/2 + this.width/4 ) ){
		this.hovering = 1;
		this.touch.down = $.touch.down;
		if( !this.ohovering ) {
			//$.audio.play( 'hover' );
		}
	} else {
		this.hovering = 0;
	    this.touch.down = 0;
		$.hero.do_move=0;
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
	
       /* if(this.mouse.sy < this.sy + 60 && this.mouse.sy > this.sy - 60 ){
            	if(this.mouse.sx > this.sx ) {
    	            	$.keys.state.up = 0;
    	            	$.keys.state.right = 1;
    	            	$.keys.state.down = 0; 
    	            	$.keys.state.left = 0;
        		}else if(this.mouse.sx< this.sx){
        				$.keys.state.up = 0;
    	            	$.keys.state.right = 0;
    	            	$.keys.state.down = 0; 
    	            	$.keys.state.left = 1; 
        		}
        }
    	
    	if(this.mouse.sx < this.sx + 60 && this.mouse.sx > this.sx - 60 ){
    		if(this.mouse.sy< this.sy){
    					$.keys.state.up = 1;
    	            	$.keys.state.right = 0;
    	            	$.keys.state.down = 0; 
    	            	$.keys.state.left = 0;
    		}else if(this.mouse.sy > this.sy){
    				$.keys.state.up = 0;
    	            $.keys.state.right = 0;
    	            $.keys.state.down = 1; 
    	            $.keys.state.left = 0;
    		}
    	    
    	}*/
	
	    var dx = this.mouse.sx - this.sx;
		var	dy = this.mouse.sy - this.sy;
		var direction_to_go = Math.atan2( dy, dx ) * 180 / Math.PI;
		$.hero.do_move=1;
		
		
        if(direction_to_go < 45 && direction_to_go > -45 ) {
    	            	$.keys.state.up = 0;
    	            	$.keys.state.right = 1;
    	            	$.keys.state.down = 0; 
    	            	$.keys.state.left = 0;
        }else if(direction_to_go > 45 && direction_to_go < 135){
        				$.keys.state.up = 0;
    	            	$.keys.state.right = 0;
    	            	$.keys.state.down = 1; 
    	            	$.keys.state.left = 0; 
        } else if (direction_to_go > 135 || direction_to_go <  -135){
    					$.keys.state.up = 0;
    	            	$.keys.state.right = 0;
    	            	$.keys.state.down = 0; 
    	            	$.keys.state.left = 1;
    	}else if(direction_to_go > -135 && direction_to_go < -45){
						$.keys.state.up = 1;
						$.keys.state.right = 0;
						$.keys.state.down = 0; 
						$.keys.state.left = 0;
    	}
		
		this.action();
	}
};

/*==============================================================================
Render
==============================================================================*/
$.RndButton.prototype.render = function( i ) {	
	if( this.hovering ) {
		$.ctxmg.fillStyle = 'hsla(0, 0%, 10%, 1)';
		//$.ctxmg.fillRect( Math.floor( this.sx ), Math.floor( this.sy ), this.width, this.height );
		//$.util.fillCircle( $.ctxmg, this.sx,  this.sy, this.width/2, $.ctxmg.fillStyle ) ;
		
		$.ctxmg.strokeStyle = 'hsla(0, 0%, 0%, 1)';
		//$.ctxmg.strokeRect( Math.floor( this.sx ) + 0.5, Math.floor( this.sy ) + 0.5, this.width - 1, this.height - 1, 1 );
		$.util.strokeCircle( $.ctxmg, Math.floor( this.sx ) + 0.5,  Math.floor( this.sy ) + 0.5, this.width/2-1, $.ctxmg.fillStyle ) 
		
		$.ctxmg.strokeStyle = 'hsla(0, 0%, 100%, 0.2)';
		//$.ctxmg.strokeRect( Math.floor( this.sx ) + 1.5, Math.floor( this.sy ) + 1.5, this.width - 3, this.height - 3, 1 );
		//$.util.strokeCircle( $.ctxmg, Math.floor( this.sx ) + 1.5,  Math.floor( this.sy ) + 1.5, this.width/2-3, $.ctxmg.fillStyle ) 
	} else {
		$.ctxmg.fillStyle = 'hsla(0, 0%, 0%, 1)';
		//$.ctxmg.fillRect( Math.floor( this.sx ), Math.floor( this.sy ), this.width, this.height );
		//$.util.fillCircle( $.ctxmg, this.sx,  this.sy, this.width/2, $.ctxmg.fillStyle ) ;
		
		$.ctxmg.strokeStyle = 'hsla(0, 0%, 0%, 1)';
		//$.ctxmg.strokeRect( Math.floor( this.sx ) + 0.5, Math.floor( this.sy ) + 0.5, this.width - 1, this.height - 1, 1 );
		$.util.strokeCircle( $.ctxmg, Math.floor( this.sx ) + 0.5,  Math.floor( this.sy ) + 0.5, this.width/2-1, $.ctxmg.fillStyle ) 
		
		$.ctxmg.strokeStyle = 'hsla(0, 0%, 100%, 0.15)';
		//$.ctxmg.strokeRect( Math.floor( this.sx ) + 1.5, Math.floor( this.sy ) + 1.5, this.width - 3, this.height - 3, 1 );
		//$.util.strokeCircle( $.ctxmg, Math.floor( this.sx ) + 1.5,  Math.floor( this.sy ) + 1.5, this.width/2-3, $.ctxmg.fillStyle )
	}

	/* $.ctxmg.beginPath();
	$.text( {
		ctx: $.ctxmg,
		x: this.cx, //- this.width/2,
		y: this.cy, //- this.width/6,
		text: this.title,
		hspacing: 1,
		vspacing: 0,
		halign: 'center',
		valign: 'center',
		scale: this.scale,
		snap: 1,
		render: true
	} );	

	
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.7)';
	if( this.hovering ) {
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 1)';
	}
	$.ctxmg.fill();
*/
    if( this.hovering ) {
	
    	$.ctxmg.fillStyle = 'hsla(0, 0%, 10%, 0.5)';
        $.util.fillCircle( $.ctxmg, this.mouse.sx,  this.mouse.sy, this.width/16, $.ctxmg.fillStyle ) ;
	}
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.07)';
	$.util.fillCircle($.ctxmg, Math.floor( this.sx ), Math.floor( this.sy ), this.width/2 + 2);
	
	$.ctxmg.drawImage($.move_dir, this.sx - this.width/4,  this.sy - this.width/4, this.width/2, this.width/2);
		
	$.ctxbigbgd.fillStyle = 'hsla(300, 100%, 8%, 0.07)';
	$.util.fillCircle($.ctxbigbgd, Math.floor( this.sx + 250), Math.floor( this.sy + 50), this.width/2 + 2);
	$.ctxbigbgd.strokeStyle = 'hsla(0, 0%, 10%, 0.30)';
	$.util.strokeCircle($.ctxbigbgd, Math.floor( this.sx + 250), Math.floor( this.sy + 50), this.width/2-1, $.ctxbigbgd.strokeStyle );
		$.ctxbigbgd.beginPath();
    
	/*$.text( {
		ctx: $.ctxbigbgd,
		x: this.cx+250, //- this.width/2,
		y: this.cy+50, //- this.width/6,
		text: this.title,
		hspacing: 1,
		vspacing: 0,
		halign: 'center',
		valign: 'center',
		scale: this.scale,
		snap: 1,
		render: true
	} );
		$.ctxbigbgd.fillStyle = 'hsla(0, 0%, 100%, 0.7)';
	if( this.hovering ) {
		$.ctxbigbgd.fillStyle = 'hsla(0, 0%, 100%, 1)';
	}
	$.ctxbigbgd.fill(); */

	$.ctxbigbgd.drawImage($.move_dir, this.cx+190 - this.width/4, this.cy+10 - this.width/4, this.width/2, this.width/2);
	
};