/*==============================================================================
Init
==============================================================================*/
$.Enemy = function( opt, shape ) {
	// set always and optional
	for( var k in opt ) {
		this[k] = opt[k];
	}

	this.shape = shape;
	// set optional and defaults
	this.lightness = $.util.isset( this.lightness ) ? this.lightness : 50;
	this.saturation = $.util.isset( this.saturation ) ? this.saturation : 100;
	this.setup = this.setup || function(){};
	this.death = this.death || function(){};

	// set same for all objects
	this.index = $.indexGlobal++;
	this.inView = this.hitFlag = this.vx = this.vy = 0;
	this.lifeMax = opt.life;
	this.fillStyle ='hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, 0.1)';
	this.strokeStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, 1)';
	/*==============================================================================
	Run Setup
	==============================================================================*/
	this.setup();

	/*==============================================================================
	Adjust Level Offset Difficulties
	==============================================================================*/
	if( $.levelDiffOffset > 0 ){
		this.life += $.levelDiffOffset * 0.25;
		this.lifeMax = this.life;
		this.speed += Math.min( $.hero.vmax, $.levelDiffOffset * 0.25 );
		this.value += $.levelDiffOffset * 5;
	}
};

/*==============================================================================
Update
==============================================================================*/
$.Enemy.prototype.update = function( i ) {
	/*==============================================================================
	Apply Behavior
	==============================================================================*/
	this.behavior();

	/*==============================================================================
	Apply Forces
	==============================================================================*/
	this.x += this.vx * $.dt;
	this.y += this.vy * $.dt;

	/*==============================================================================
	Lock Bounds
	==============================================================================*/
	if( this.lockBounds && !$.util.arcInRect( this.x, this.y, this.radius + 10, 0, 0, $.ww, $.wh ) ) {
		$.enemies.splice( i, 1 );
	}

	/*==============================================================================
	Update View
	==============================================================================*/
	if( $.util.arcInRect( this.x, this.y, this.radius, -$.screen.x, -$.screen.y, $.cw, $.ch ) ) {
		this.inView = 1;
	} else {
		this.inView = 0;
	}
};

/*==============================================================================
Receive Damage
==============================================================================*/
$.Enemy.prototype.receiveDamage = function( i, val ) {
	if( this.inView ) {
		$.audio.play( 'hit' );		
	}
	this.life -= val;
	this.hitFlag = 10;
	if( this.life <= 0 ) {
		if( this.inView ) {						
			$.explosions.push( new $.Explosion( {
				x: this.x,
				y: this.y,
				radius: this.radius,
				hue: this.hue,
				saturation: this.saturation
			} ) );
			$.particleEmitters.push( new $.ParticleEmitter( {
				x: this.x,
				y: this.y,
				count: 10,
				spawnRange: this.radius,
				friction: 0.85,
				minSpeed: 5,
				maxSpeed: 20,
				minDirection: 0,
				maxDirection: $.twopi,
				hue: this.hue,
				saturation: this.saturation
			} ) );
			$.textPops.push( new $.TextPop( {
				x: this.x,
				y: this.y,
				value: this.value,
				hue: this.hue,
				saturation: this.saturation,
				lightness: 60
			} ) );			
			$.rumble.level = 6;
		}
		this.death();
		$.spawnPowerup( this.x, this.y );
		$.score += this.value;
		$.level.kills++;
		$.kills++;
		$.enemies.splice( i, 1 );
	} 
};

/*==============================================================================
Render Health
==============================================================================*/
$.Enemy.prototype.renderHealth = function( i ) {
	if( this.inView && this.life > 0 && this.life < this.lifeMax ) {
		$.ctxmg.fillStyle = 'hsla(0, 0%, 0%, 0.75)';
		$.ctxmg.fillRect( this.x - this.radius, this.y - this.radius - 6, this.radius * 2, 4 );
		$.ctxmg.fillStyle = 'hsla(' + ( this.life / this.lifeMax ) * 120 + ', 100%, 50%, 0.75)';	
		$.ctxmg.fillRect( this.x - this.radius, this.y - this.radius - 6, ( this.radius * 2 ) * ( this.life / this.lifeMax ), 4 );
	}
};

/*==============================================================================
Render
==============================================================================*/
$.Enemy.prototype.render = function( i ) {
	if( this.inView ) {
		var mod = $.enemyOffsetMod / 8;

		//this.shape = 19; // for testing 
	
	    if(this.shape >= $.enemy_list_size){
			
			var ran_no =    this.shape%3;
			if(ran_no == 1) {
				$.util.fillCircle( $.ctxmg, this.x, this.y, this.radius/2 - 3, this.fillStyle );			
				$.ctxmg.save();
				$.ctxmg.translate( this.x, this.y );
				$.ctxmg.rotate( this.direction - $.pi / 4 );
				$.ctxmg.fillStyle = this.fillStyle;
				$.ctxmg.fillRect( 0, 0, this.radius/2, this.radius/2 );
				$.ctxmg.restore();

				$.ctxmg.save();
				$.ctxmg.translate( this.x, this.y );	
				$.ctxmg.rotate( this.direction - $.pi / 4 + $.twopi / 3 );
				$.ctxmg.fillStyle = this.fillStyle;
				$.ctxmg.fillRect( 0, 0, this.radius/2, this.radius/2 );
				$.ctxmg.restore();

				$.ctxmg.save();
				$.ctxmg.translate( this.x, this.y );	
				$.ctxmg.rotate( this.direction - $.pi / 4 - $.twopi / 3 );
				$.ctxmg.fillStyle = this.fillStyle;
				$.ctxmg.fillRect( 0, 0, this.radius/2, this.radius/2 );
				$.ctxmg.restore();
			 } else if (ran_no == 2) {
			    $.util.fillRect( $.ctxmg, this.x - this.radius/2, this.y - this.radius/2, this.radius, this.radius, this.fillStyle );
			    $.util.strokeRect( $.ctxmg, this.x - (this.radius / 4 + Math.cos( mod ) * this.radius / 4)/2, this.y - (this.radius / 4 + Math.cos( mod ) * this.radius / 4)/2, this.radius / 4 + Math.cos( mod ) * this.radius / 4, this.radius / 4 + Math.cos( mod ) * this.radius / 4, this.strokeStyle, 1.5 );
			    $.util.strokeRect( $.ctxmg, this.x - this.radius/2, this.y - this.radius/2, this.radius , this.radius, this.strokeStyle, 1 );
			 } else {
			    $.util.fillCircle( $.ctxmg, this.x, this.y, this.radius, this.fillStyle );
			    $.util.strokeCircle( $.ctxmg, this.x, this.y, this.radius / 4 + Math.cos( mod ) * this.radius / 4, this.strokeStyle, 1.5 );
			    $.util.strokeCircle( $.ctxmg, this.x, this.y, this.radius - 0.5, this.strokeStyle, 1 );
			}
		} else{
			//this.shape=5; // for testing
			//$.enemy_pic_list[this.shape].crossOrigin = "Anonymous";
			if(this.type < 14) {
				    $.ctxmg.save();
					$.ctxmg.translate( this.x, this.y );
					$.ctxmg.rotate( this.direction  + $.pi / 2);
					var multiplier = this.radius/$.enemy_pic_list[$.enemy_per_stage_pic_list[this.shape]].width; 
					$.ctxmg.globalAlpha = 0.9;
					$.ctxmg.drawImage($.enemy_pic_list[$.enemy_per_stage_pic_list[this.shape]], 0- multiplier*$.enemy_pic_list[$.enemy_per_stage_pic_list[this.shape]].width/2, 0- multiplier*$.enemy_pic_list[$.enemy_per_stage_pic_list[this.shape]].width/2, this.radius, this.radius);
					$.ctxmg.globalAlpha = 1.0;
					$.ctxmg.restore();
			} else {
				    $.ctxmg.save();
					$.ctxmg.translate( this.x, this.y );
					$.ctxmg.rotate( this.direction  + $.pi / 2);
					var multiplier = this.radius/$.rrat_per_stage_pic_list[this.shape].width; 
					$.ctxmg.globalAlpha = 0.9;
					$.ctxmg.drawImage($.rrat_per_stage_pic_list[this.shape], 0- multiplier*$.rrat_per_stage_pic_list[this.shape].width/2, 0- multiplier*$.rrat_per_stage_pic_list[this.shape].width/2, this.radius, this.radius);
					$.ctxmg.globalAlpha = 1.0;
					$.ctxmg.restore();
			}
		}
		
		
		$.ctxmg.strokeStyle = this.strokeStyle;
		$.ctxmg.lineWidth = 4;
		$.ctxmg.beginPath();
		$.ctxmg.arc( this.x, this.y, this.radius - 0.5, mod + $.pi, mod + $.pi + $.pi / 2 );		
		$.ctxmg.stroke();
		$.ctxmg.beginPath();
		$.ctxmg.arc( this.x, this.y, this.radius - 0.5, mod, mod + $.pi / 2 );		
		$.ctxmg.stroke();

		if( $.slow) {
			$.util.fillCircle( $.ctxmg, this.x, this.y, this.radius, 'hsla(' + $.util.rand( 160, 220 ) + ', 100%, 50%, 0.25)' );
		} 
		if( this.hitFlag > 0 ) {
			this.hitFlag -= $.dt;
			$.util.fillCircle( $.ctxmg, this.x, this.y, this.radius, 'hsla(' + this.hue + ', ' + this.saturation + '%, 75%, ' + this.hitFlag / 10 + ')' );
			$.util.strokeCircle( $.ctxmg, this.x, this.y, this.radius, 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + $.util.rand( 60, 90) + '%, ' + this.hitFlag / 10 + ')', $.util.rand( 1, 10) );	
		}
		this.renderHealth();
	}
};