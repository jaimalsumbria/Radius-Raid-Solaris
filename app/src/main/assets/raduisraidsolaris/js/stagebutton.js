
/*==============================================================================
Init
==============================================================================*/
$.StageButton = function( opt ) {
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
	this.isEnabled = false;
	this.mod = 0;
	this.width = this.lockedWidth;
	this.height = this.lockedHeight;
	var min = Math.ceil(180);
    var max = Math.floor(240);
    var randomx = Math.floor(Math.random() * (max - min + 1)) + min; 
	
	if ($.stageButtonCount % 2 == 0) {
		randomx = 0-randomx;
	}
	$.stageButtonCount++;
	this.sx = this.x + randomx; 
	this.sy = this.y;// - this.height / 2;
	this.cx = this.x + randomx; 
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

$.StageButton.prototype.update = function( i ) {
	/*==============================================================================
	Check Hover State
	==============================================================================*/
	
	 var time = new Date();
	 
    if(this.isEnabled == true) {
		this.mod = time.getMilliseconds()/200;
	}
	if( $.util.pointInCircle( $.mouse.sx, $.mouse.sy, this.sx, this.sy, this.width/2 ) ){
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
    this.touch.down = $.mouse.down;

	if( this.hovering && $.clickDone == 1 && this.isEnabled == true) {
		$.clickDone = 0;
		$.audio.play( 'click' );
		this.action(this.shape);
	}
};

/*==============================================================================
Render
==============================================================================*/
$.StageButton.prototype.render = function( i ) {	

	if(this.isEnabled != true ) {
		$.ctxmg.strokeStyle = $.definitions.theme[$.theme].fillStyleButton2;
		$.util.strokeCircle( $.ctxmg, Math.floor( this.sx ) + 0.5,  Math.floor( this.sy ) + 0.5, this.width/2-5, $.ctxmg.strokeStyle,2 ) ; 
	}

	$.ctxmg.fillStyle = $.definitions.theme[$.theme].fillStyleButton;
	$.util.fillCircle($.ctxmg, Math.floor( this.sx ), Math.floor( this.sy ), this.width/2 - 6);
	
	//$.ctxmg.fillStyle = $.definitions.theme[$.theme].fillStyleButton;
	//$.util.fillCircle($.ctxmg, Math.floor( this.sx ), Math.floor( this.sy ), this.width/2 - 10);

	$.ctxmg.beginPath();
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


	$.ctxmg.fillStyle = $.definitions.theme[$.theme].fillStyleButton2;
	if( this.hovering ) {
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 1)';
	}
	$.ctxmg.fill();
	
	if(this.isEnabled == true && $.currentstage == this.title){
	 $.util.strokeCircle( $.ctxmg, Math.floor( this.sx ), Math.floor( this.sy ), this.width /2- this.width /32 + Math.sin(this.mod) * this.width / 32, $.ctxmg.fillStyle, 10 );
	} else if (this.isEnabled == true){
	 $.util.strokeCircle( $.ctxmg, Math.floor( this.sx ), Math.floor( this.sy ), this.width /2- this.width /32, $.ctxmg.fillStyle, 10 );
	}
	
};