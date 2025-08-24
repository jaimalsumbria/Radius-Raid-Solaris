/*==============================================================================
Init
==============================================================================*/
$.Powerup = function( opt ) {
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
		halign: 'top',
		valign: 'left',
		scale: 1,
		snap: 0,
		render: 0
	} );
	this.hpadding = 4;
	this.vpadding = 4;
	this.width = 60;
	this.height = 60;
	this.x = this.x - this.width / 2;
	this.y = this.y - this.height / 2;
	this.direction = $.util.rand( 0, $.twopi );
	this.speed = $.util.rand( 0.5, 2 );
};

/*==============================================================================
Update
==============================================================================*/
$.Powerup.prototype.update = function( i ) {
	/*==============================================================================
	Apply Forces
	==============================================================================*/
	this.x += Math.cos( this.direction ) * this.speed * $.dt;
	this.y += Math.sin( this.direction ) * this.speed * $.dt;

	/*==============================================================================
	Check Bounds
	==============================================================================*/
	if( !$.util.rectInRect( this.x, this.y, this.width, this.height, 0, 0, $.ww, $.wh ) ){
		$.powerups.splice( i, 1 );
	}

	/*==============================================================================
	Check Collection Collision
	==============================================================================*/
	if( $.hero.life > 0 && $.util.arcIntersectingRect( $.hero.x, $.hero.y, $.hero.radius + 2, this.x, this.y, this.width, this.height ) ){
		$.audio.play( 'powerup' );
		$.powerupTimers[ this.type ] = this.timer;
		$.particleEmitters.push( new $.ParticleEmitter( {
			x: this.x + this.width / 2,
			y: this.y + this.height / 2,
			count: 15,
			spawnRange: 0,
			friction: 0.85,
			minSpeed: 2,
			maxSpeed: 15,
			minDirection: 0,
			maxDirection: $.twopi,
			hue: 0,
			saturation: 0
		} ) );
		$.powerups.splice( i, 1 );
		$.powerupsCollected++;
	}
};

/*==============================================================================
Render
==============================================================================*/
$.Powerup.prototype.render = function( i ) {
		
	//$.ctxmg.fillStyle = '#000';
	//$.ctxmg.fillRect( this.x - 2, this.y - 2, this.width + 4, this.height + 4 );
	//$.ctxmg.fillStyle = '#555';
	//$.ctxmg.fillRect( this.x - 1, this.y - 1, this.width + 2, this.height + 2 );
	//$.ctxmg.fillStyle = '#111';
	//$.ctxmg.fillRect( this.x, this.y, this.width, this.height );
    $.ctxmg.drawImage(this.pic, this.x, this.y, this.width, this.height);
 

	//$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.1)';
	//$.util.fillCircle( $.ctxmg,  this.x + this.width/2, this.y + this.height/2, this.width/2, this.fillStyle );
	//$.ctxmg.fillRect( this.x, this.y, this.width, this.height / 2 );
	
}