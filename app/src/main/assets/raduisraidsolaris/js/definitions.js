/*==============================================================================
Definitions
==============================================================================*/
$.definitions = {};

/*==============================================================================
Theme
===============================================================================*/

$.definitions.theme = [
	{
		fillStyle : 'hsla(296, 100%, 6%, 1)',
		fillStyleShadow : 'hsla(296, 100%, 6%, 0.1)',
		strokeStyleOrbit : 'hsla(296, 100%, 6%, 0.6)',
		fillStyleButton : 'rgb(77,0,77)',
		fillStyleButton2 : 'hsla(202, 40%, 49%, 0.93)',
		fillStyleBackground4 : 'hsla(0, 0%, 50%, 0.09)'
	},

	{
		fillStyle : 'hsla(0, 0%, 0%, 1)',
		fillStyleShadow : 'hsla(0, 0%, 10%, 0.12)',
		strokeStyleOrbit : 'hsla(0, 0%, 50%, 0.1)',
		fillStyleButton : 'rgb(66,66,66)',
		fillStyleButton2 : 'hsla(305, 100%, 63%, 0.93)',
		fillStyleBackground4 : 'hsla(0, 0%, 50%, 0.09)'
	},
	
	{
		fillStyle : 'hsla(239, 100%, 26%, 1)',
		fillStyleShadow : 'hsla(239, 100%, 26%, 0.12)',
		strokeStyleOrbit : 'hsla(0, 0%, 50%, 0.2)',
		fillStyleButton : 'rgb(00,11,555)',
		fillStyleButton2 : 'rgb(444,444,11)',
		fillStyleBackground4 : 'hsla(0, 0%, 50%, 0.09)'
	},
	
	{
		fillStyle : 'hsla(42, 100%, 30%, 1)',
		fillStyleShadow : 'hsla(42, 100%, 30%, 0.12)',
		strokeStyleOrbit : 'hsla(0, 0%, 50%, 0.1)',
		fillStyleButton : 'rgb(666,666,00)',
		fillStyleButton2 : 'hsla(202, 40%, 49%, 0.93)',
		fillStyleBackground4 : 'hsla(0, 0%, 50%, 0.4)'
	}
]

/*==============================================================================
Audio
==============================================================================*/
$.definitions.audio = {
	'shoot': {
		count: 10,
		params: [
			[2,,0.2,,0.1753,0.54,,-0.3661,,,,,,0.5522,-0.564,,,,1,,,,,0.25]
		]
	},
	'shootAlt': {
		count: 10,
		params: [
			[0,,0.16,0.18,0.18,0.47,0.0084,-0.26,,,,,,0.74,-1,,-0.76,,1,,,,,0.15]
		]
	},
	'hit': {
		count: 10,
		params:	[
			[3,,0.0138,,0.2701,0.4935,,-0.6881,,,,,,,,,,,1,,,,,0.25],
			[0,,0.0639,,0.2425,0.7582,,-0.6217,,,,,,0.4039,,,,,1,,,,,0.25],
			[3,,0.0948,,0.2116,0.7188,,-0.6372,,,,,,,,,,,1,,,0.2236,,0.25]
		]
	},
	'explosion': {
		count: 5,
		params: [
			[3,,0.1164,0.88,0.37,0.06,,0.1599,,,,-0.0846,0.6485,,,,0.3963,-0.0946,1,,,,,0.25],
			[3,,0.2958,0.3173,0.3093,0.0665,,0.1334,,,,,,,,,,,1,,,,,0.25]
		]
	},
	'explosionAlt': {
		count: 5,
		params: [
			[3,,0.15,0.7523,0.398,0.15,,-0.18,,0.39,0.53,-0.3428,0.6918,,,0.5792,0.6,0.56,1,,,,,0.25]
		]
	},
	'takingDamage': {
		count: 5,
		params: [
			[3,,0.1606,0.5988,0.2957,0.1157,,-0.3921,,,,,,,,,0.3225,-0.2522,1,,,,,0.25],
			[3,,0.1726,0.2496,0.2116,0.0623,,-0.2096,,,,,,,,,0.2665,-0.1459,1,,,,,0.25],
			[3,,0.1645,0.7236,0.3402,0.0317,,,,,,,,,,,,,1,,,,,0.25]
		]
	},
	'death': {
		count: 1,
		params: [
			[3,,0.51,,1,0.1372,,0.02,0.1,,,,0.89,0.7751,,,-0.16,0.32,1,0.3999,0.81,,0.1999,0.15]
		]
	},
	'powerup': {
		count: 3,
		params: [
			[0,,0.01,,0.4384,0.2,,0.12,0.28,1,0.65,,,0.0419,,,,,1,,,,,0.4]
		]
	},
	'levelup': {
		count: 2,
		params: [
			[2,1,0.01,,0.84,0.19,,,,0.62,0.7,,,-0.7248,0.8522,,,,1,,,,,0.45]
		]
	},
	'hover': {
		count: 10,
		params: [
			[0,0.08,0.18,,,0.65,,1,1,,,0.94,1,,,,-0.3,1,1,,,0.3,0.5,0.35]
		]
	},
	'click': {
		count: 5,
		params: [
			[3,,0.18,,,1,,-1,-1,,,,,,,,,,1,,,0.64,,0.35]
		]
	}
};

/*==============================================================================
Missions
==============================================================================*/
$.definitions.captainm = {
	                      yob : 2219
	                     };

$.definitions.missions = {
	'0': {
		star: 'SUN',
		planet: 'EARTH',
		moon: 'MOON',
		age: '12',
		mission: 'no_mission',
		details: 'Just a visit'
      },
    '1': {
		star: 'SUN',
		planet: 'MARS',
		moon: 'no_moon',
		age: '14',
		mission: 'no_mission',
		details: 'Holiday visit to planet mars'
     },
	 
	 '2': {
		star: 'SUN',
		planet: 'VENUS',
		moon: 'no_moon',
		age: '18',
		mission: 'cargo_transfer',
		details: 'After traning and joining space corps as sepoy. An atmospheric colony has been established on venus.'
     },
	 
	 '3': {
		star: 'SUN',
		planet: 'MERCURY',
		moon: 'no_moon',
		age: '18',
		mission: 'cargo_transfer',
		details: 'Cargo delivery at mercury, just continueing after cargo delivery at venus space mission'
     },
	 
	 '4': {
		star: 'SUN',
		planet: 'JUPITER',
		moon: 'EUROPA',
		age: '19',
		mission: 'cargo_transfer',
		details: 'Cargo delivery at space mission at Europa moon on jupiter'
     },
	 
	 '5': {
		star: 'SUN',
		planet: 'JUPITER',
		moon: 'GANYMEDE',
		age: '19',
		mission: 'cargo_transfer',
		details: 'Cargo delivery at Ganymede space mission just after cargo delivery at Europa of Jupiter planet'
     },
	 
	 '6': {
		star: 'SUN',
		planet: 'JUPITER',
		moon: 'no_moon',
		age: '19',
		mission: 'rescue_mission',
		details: 'Just after cargo delivery at GANYMEDE , space ship recieved messages from Jupiter\
                	atmospheric colony where people at one Deuterium (heavy hydrogen) mining plant needed rescue.'
     },
	 
	 '7': {
		star: 'SUN',
		planet: 'SATURN',
		moon: 'TITAN',
		age: '20',
		mission: 'rescue_mission',
		details: 'Rescue miners at methane mining plant near methane lakes on saturns moon TITAN'
     },
	 
	 '8': {
		star: 'SUN',
		planet: 'SATURN',
		moon: 'no_moon',
		age: '20',
		mission: 'cargo_transfer',
		details: 'Delivery of micro fusion reactors to atmospheric colony at planet saturn'
     },
	 
	  '9': {
		star: 'SUN',
		planet: 'URANUS',
		moon: 'no_moon',
		age: '21',
		mission: 'cargo_transfer',
		details: 'Delivery of micro fusion reactors to atmospheric colony at planet uranus'
     },
	 
	 
	  '10': {
		star: 'SUN',
		planet: 'NEPTUNE',
		moon: 'no_moon',
		age: '21',
		mission: 'cargo_transfer',
		details: 'Delivery of equipment to atmospheric science mission at planet neptune'
     },
	 
	 '11': {
		star: 'SUN',
		planet: 'EARTH',
		moon: 'no_moon',
		age: '21',
		mission: 'back_to_earth',
		details: 'Back to earth after three years in space'
     }
}

/*==============================================================================
Enemies
==============================================================================*/
$.definitions.enemies = [	
	{ // Enemy 0 - horizontal / vertical	
		value: 5,
		speed: 1.5,
		life: 1,
		radius: 20,
		hue: 180,
		lockBounds: 1,
		setup: function() {
			if( this.start == 'top' ){
				this.direction = $.pi / 2;
			} else if( this.start == 'right' ) {
				this.direction = -$.pi;
			} else if( this.start == 'bottom' ) {
				this.direction = -$.pi / 2;
			} else {
				this.direction = 0;
			}
		},
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			this.vx = Math.cos( this.direction ) * speed;
			this.vy = Math.sin( this.direction ) * speed;
		}
	},	
	{ // Enemy 1 - diagonal	
		value: 10,
		speed: 1.5,
		life: 2,
		radius: 20,
		hue: 120,
		lockBounds: 1,
		setup: function() {
			var rand = Math.floor( $.util.rand( 0, 2 ) );
			if( this.start == 'top' ){				
				this.direction = ( rand ) ? $.pi / 2 + $.pi / 4: $.pi / 2 - $.pi / 4;
			} else if( this.start == 'right' ) {
				this.direction = ( rand ) ? -$.pi + $.pi / 4 : -$.pi - $.pi / 4;
			} else if( this.start == 'bottom' ) {
				this.direction = ( rand ) ? -$.pi / 2 + $.pi / 4 : -$.pi / 2 - $.pi / 4;
			} else {
				this.direction = ( rand ) ? $.pi / 4 : -$.pi / 4;
			}
		},
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			this.vx = Math.cos( this.direction ) * speed;
			this.vy = Math.sin( this.direction ) * speed;
		}
	},
	{ // Enemy 2 - move directly hero
		value: 15,
		speed: 1.5,
		life: 2,
		radius: 25,
		hue: 330,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	{ // Enemy 3 - splitter
		value: 20,
		speed: 0.5,
		life: 3,
		radius: 50,
		hue: 210,
		canSpawn: 1,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		},
		death: function() {
			if( this.canSpawn ) {
				for( var i = 0; i < 4; i++ ) {
					var enemy = $.spawnEnemy( this.type );
					enemy.radius = 20;
					enemy.canSpawn = 0;
					enemy.speed = 1;
					enemy.life = 1;
					enemy.value = 5;
					enemy.x = this.x;
					enemy.y = this.y;
					if( i == 0 ) {
						enemy.x -= 45;
					} else if( i == 1 ) {
						enemy.x += 45;
					} else if( i == 2 ) {
						enemy.y -= 45;
					} else {
						enemy.y += 45;
					}
					$.enemies.push( enemy );
				}
			}
		}
	},
	{ // Enemy 4 - wanderer
		value: 25,
		speed: 2,
		life: 4,
		radius: 25,
		hue: 30,
		lockBounds: 1,
		setup: function() {
			if( this.start == 'top' ){
				this.direction = $.pi / 2;
			} else if( this.start == 'right' ) {
				this.direction = -$.pi;
			} else if( this.start == 'bottom' ) {
				this.direction = -$.pi / 2;
			} else {
				this.direction = 0;
			}
		},
		behavior: function() {
			var speed = this.speed * $.util.rand( 1, 2 );
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}
			
			this.direction +=  $.util.rand( -0.15, 0.15 );
			this.vx = Math.cos( this.direction ) * speed;
			this.vy = Math.sin( this.direction ) * speed;
		}
	},
	{ // Enemy 5 - stealth, hard to see - move directly hero
		value: 30,
		speed: 1,
		life: 3,
		radius: 25,
		hue: 0,
		saturation: 0,
		lightness: 30,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	{ // Enemy 6 - big strong slow fatty
		value: 35,
		speed: 0.25,
		life: 8,
		radius: 80,
		hue: 150,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	{ // Enemy 7 - small weak speedy
		value: 40,
		speed: 2.5,
		life: 1,
		radius: 20,
		hue: 300,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			direction = direction + Math.cos( $.tick / 50 ) * 1;
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	{ // Enemy 8 - strong grower, move to hero
		value: 45,
		speed: 1.5,
		growth: 0.1,
		life: 6,
		radius: 25,
		hue: 0,
		saturation: 0,
		lightness: 100,
		behavior: function() {
			var speed = this.speed,
				growth = this.growth;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider;
				growth = this.growth / $.slowEnemyDivider;
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );			

			if( Math.sqrt(dx * dx + dy * dy ) > 200 ) {
				this.vx = Math.cos( direction ) * speed;
				this.vy = Math.sin( direction ) * speed;
				this.fillStyle ='hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, 0.1)';
				this.strokeStyle = 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, 1)';
			} else {
				this.vx += $.util.rand( -0.25, 0.25 );
				this.vy += $.util.rand( -0.25, 0.25 );
				this.radius += growth * $.dt;
				var hue = $.util.rand( 0, 360 );
					lightness = $.util.rand( 50, 80 );
				this.fillStyle ='hsla(' + hue + ', 100%, ' + lightness + '%, 0.2)';
				this.strokeStyle = 'hsla(' + hue + ', 100%, ' + lightness + '%, 1)';
			}
		}
	},
	{ // Enemy 9 - circle around hero
		value: 50,
		speed: 0.5,
		angleSpeed: 0.015,
		life: 2,
		radius: 25,
		hue: 60,
		setup: function() {
			var dx = this.x - $.hero.x,
				dy = this.y - $.hero.y;
			this.angle = Math.atan2( dy, dx );
			this.distance = Math.sqrt( dx * dx + dy * dy );		
			if( Math.random() > 0.5 ) {
				this.angleSpeed = -this.angleSpeed;
			}
		},
		behavior: function() {
			var speed = this.speed,
				angleSpeed = this.angleSpeed;
			if( $.slow) {
				speed = this.speed / $.slowEnemyDivider; 
				angleSpeed = this.angleSpeed / $.slowEnemyDivider;
			}

			this.distance -= speed * $.dt;
			this.angle += angleSpeed * $.dt;

			this.vx = ( ( $.hero.x + Math.cos( this.angle ) * this.distance ) - this.x ) / 50;
			this.vy = ( ( $.hero.y + Math.sin( this.angle ) * this.distance ) - this.y ) / 50;
		}
	},
	{ // Enemy 10 - spawner
		value: 55,
		speed: 1,
		life: 3,
		radius: 45,
		hue: 0,
		canSpawn: 1,
		spawnTick: 0,
		spawnMax: 250,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
				direction = direction + Math.cos( $.tick / 50 ) * 1;
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;

			if( this.canSpawn ) {				
				if( this.spawnTick < this.spawnMax ) {
					this.spawnTick += $.dt;
				} else {
					this.spawnTick = 0;
					var enemy = $.spawnEnemy( this.type );
					enemy.radius = 20;
					enemy.canSpawn = 0;
					enemy.speed = 3;
					enemy.life = 1;
					enemy.value = 30;
					enemy.x = this.x;
					enemy.y = this.y;
					$.enemies.push( enemy );
				}
			} 
		}
	},
	{ // Enemy 11 - random location strong tower
		value: 60,
		speed: 1.5,
		life: 10,
		radius: 30,
		hue: 90,		
		setup: function(){
			this.xTarget = $.util.rand( 50, $.ww - 50 );
			this.yTarget = $.util.rand( 50, $.wh - 50 );
		},
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}
			var dx = this.xTarget - this.x,
				dy = this.yTarget - this.y,
				direction = Math.atan2( dy, dx );
			if( Math.sqrt( dx * dx + dy * dy) > this.speed ) {
				this.vx = Math.cos( direction ) * speed;
				this.vy = Math.sin( direction ) * speed;
			} else {
				this.vx = 0;
				this.vy = 0;
			}
		}
	},
	{ // Enemy 12 - speedy random direction, no homing
		value: 65,
		speed: 6,
		life: 1,
		radius: 10,
		hue: 0,
		lockBounds: 1,
		setup: function() {
			this.radius = $.util.rand( 15, 35 );
			this.speed = $.util.rand( 3, 8 );
			if( Math.random() > 0.5 ){
				if( this.start == 'top' ){
					this.direction = $.pi / 2;
				} else if( this.start == 'right' ) {
					this.direction = -$.pi;
				} else if( this.start == 'bottom' ) {
					this.direction = -$.pi / 2;
				} else {
					this.direction = 0;
				}
			} else {
				var rand = Math.floor( $.util.rand( 0, 2 ) );
				if( this.start == 'top' ){				
					this.direction = ( rand ) ? $.pi / 2 + $.pi / 4: $.pi / 2 - $.pi / 4;
				} else if( this.start == 'right' ) {
					this.direction = ( rand ) ? -$.pi + $.pi / 4 : -$.pi - $.pi / 4;
				} else if( this.start == 'bottom' ) {
					this.direction = ( rand ) ? -$.pi / 2 + $.pi / 4 : -$.pi / 2 - $.pi / 4;
				} else {
					this.direction = ( rand ) ? $.pi / 4 : -$.pi / 4;
				}
			}
		},
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}
			this.vx = Math.cos( this.direction ) * speed;
			this.vy = Math.sin( this.direction ) * speed;
			this.hue += 10;
			this.lightness = 50;
			this.fillStyle = 'hsla(' + this.hue + ', 100%, ' + this.lightness + '%, 0.2)';
			this.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.lightness + '%, 1)';
		}
	},
	
	{  // Enemy 13 - move directly hero
		value: 200,
		speed: 2,
		life: 100,
		radius: 80,
		hue: 380,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	
	{ // Enemy 14 - move directly hero
		value: 200,
		speed: 3,
		life: 100,
		radius: 80,
		hue: 380,
		pic: null,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		}
	},
	
	{ // Enemy 15 - splitter
		value: 200,
		speed: 0.5,
		life: 80,
		radius: 100,
		hue: 210,
		canSpawn: 1,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;
		},
		death: function() {
			if( this.canSpawn ) {
				for( var i = 0; i < 4; i++ ) {
					var enemy = $.spawnEnemy( this.type );
					enemy.radius = 20;
					enemy.canSpawn = 0;
					enemy.speed = 1;
					enemy.life = 10;
					enemy.value = 5;
					enemy.x = this.x;
					enemy.y = this.y;
					if( i == 0 ) {
						enemy.x -= 45;
					} else if( i == 1 ) {
						enemy.x += 45;
					} else if( i == 2 ) {
						enemy.y -= 45;
					} else {
						enemy.y += 45;
					}
					$.enemies.push( enemy );
				}
			}
		}
	},
	
	{ // Enemy 16 - spawner
		value: 200,
		speed: 2,
		life: 60,
		radius: 100,
		hue: 0,
		canSpawn: 1,
		spawnTick: 0,
		spawnMax: 250,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
				direction = direction + Math.cos( $.tick / 50 ) * 1;
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;

			if( this.canSpawn ) {				
				if( this.spawnTick < this.spawnMax ) {
					this.spawnTick += $.dt;
				} else {
					this.spawnTick = 0;
					var enemy = $.spawnEnemy( this.type );
					enemy.radius = 20;
					enemy.canSpawn = 0;
					enemy.speed = 3;
					enemy.life = 10;
					enemy.value = 30;
					enemy.x = this.x;
					enemy.y = this.y;
					$.enemies.push( enemy );
				}
			} 
		}
	},
	
	{ // Enemy 17 - spawner
		value: 400,
		speed: 3,
		life: 80,
		radius: 120,
		hue: 0,
		canSpawn: 1,
		spawnTick: 0,
		spawnMax: 250,
		behavior: function() {
			var speed = this.speed;
			if( $.slow ) {
				speed = this.speed / $.slowEnemyDivider; 
			}

			var dx = $.hero.x - this.x,
				dy = $.hero.y - this.y,
				direction = Math.atan2( dy, dx );
				direction = direction + Math.cos( $.tick / 50 ) * 1;
			this.vx = Math.cos( direction ) * speed;
			this.vy = Math.sin( direction ) * speed;

			if( this.canSpawn ) {				
				if( this.spawnTick < this.spawnMax ) {
					this.spawnTick += $.dt;
				} else {
					this.spawnTick = 0;
					var enemy = $.spawnEnemy( this.type );
					enemy.radius = 20;
					enemy.canSpawn = 0;
					enemy.speed = 3;
					enemy.life = 10;
					enemy.value = 30;
					enemy.x = this.x;
					enemy.y = this.y;
					$.enemies.push( enemy );
				}
			} 
		}
	}
];

/*==============================================================================
Levels
==============================================================================*/
$.definitions.levels = [];
var base = 25;
for( var i = 0; i < $.definitions.enemies.length; i++ ){
	var distribution = [];
	for( var di = 0; di < i + 1; di++ ) {
		var value = ( di == i ) ? Math.floor( ( ( i + 1) * base ) * 0.75 ) : ( i + 1) * base;
		value = ( i == 0 ) ? base : value;		
		distribution.push( value );
	}
	$.definitions.levels.push( {
		killsToLevel: 10 + ( i + 1 ) * 7,
		distribution: distribution
	} );
}

/*==============================================================================
Powerups
==============================================================================*/

var healthpack = new Image();
var slowenemies = new Image();
var fastshot = new Image();
var tripleshot = new Image();
var pierceshot = new Image();
var fiveshot = new Image();
var sevenshot = new Image();
var nineshot = new Image();
var healthpack2 = new Image();
var healthpack3 = new Image();
var healthpack4 = new Image();
var terminator = new Image();

healthpack.src  = 'js/pics/health.png';
slowenemies.src = 'js/pics/slow.png';
fastshot.src    = 'js/pics/fastshot.png';
tripleshot.src  = 'js/pics/tripleshot.png';
pierceshot.src  = 'js/pics/fast-arrow.svg';
fiveshot.src  = 'js/pics/five_shot.png';
sevenshot.src  = 'js/pics/seven_shot.png';
nineshot.src  = 'js/pics/nine_shot.png';
healthpack2.src  = 'js/pics/health_2.png';
healthpack3.src  = 'js/pics/health_3.png';
healthpack4.src  = 'js/pics/health_4.png';
terminator.src  = 'js/pics/terminator.png';

$.definitions.powerups = [
	{
		title: 'HEALTH PACK',
		hue: 0,
		saturation: 0,
		lightness: 100,
		pic: healthpack,
		type: 0,
		timer:300
	},
	{
		title: 'SLOW ENEMIES',
		hue: 200,
		saturation: 0,
		lightness: 100,
		pic: slowenemies,
		type: 1,
		timer:300
	},
	{
		title: 'FAST SHOT',
		hue: 100,
		saturation: 100,
		lightness: 60,
		pic: fastshot,
		type: 2,
		timer:300
	},
	{
		title: 'TRIPLE SHOT',
		hue: 200,
		saturation: 100,
		lightness: 60,
		pic: tripleshot,
		type: 3,
		timer:300
	},
	{
		title: 'PIERCE SHOT',
		hue: 0,
		saturation: 100,
		lightness: 60,
		pic: pierceshot,
		type: 4,
		timer:300
	},
    {
		title: 'FIVE SHOT',
		hue: 50,
		saturation: 100,
		lightness: 60,
		pic: fiveshot,
		type: 5,
		timer:300
	},
	 {
		title: 'SEVEN SHOT',
		hue: 80,
		saturation: 100,
		lightness: 50,
		pic: sevenshot,
		type: 6,
		timer: 300
	},
	 {
		title: 'NINE SHOT',
		hue: 130,
		saturation: 100,
		lightness: 50,
		pic: nineshot,
		type: 7,
		timer: 300
	},
	{
		title: 'HEALTH PACK 2',
		hue: 0,
		saturation: 0,
		lightness: 100,
		pic: healthpack2,
		type: 8,
		timer: 400
	},
	{
		title: 'HEALTH PACK 3',
		hue: 0,
		saturation: 0,
		lightness: 100,
		pic: healthpack3,
		type: 9,
		timer: 500
	},
	
	{
		title: 'HEALTH PACK 4',
		hue: 0,
		saturation: 0,
		lightness: 100,
		pic: healthpack4,
		type: 10,
		timer: 600
	},
	
	{
		title: 'TERMINATOR',
		hue: 0,
		saturation: 0,
		lightness: 100,
		pic: terminator,
		type: 11,
		timer: 10
	}
	
];

/*==============================================================================
Letters
==============================================================================*/
$.definitions.letters = {
	'1': [
		 [  , ,  1,  , 0 ],
		 [  , 1, 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'2': [
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'3': [
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 0 ]
		 ],
	'4': [
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  ,  , 1, 0 ]
		 ],
	'5': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 0 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 0 ]
		 ],
	'6': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'7': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'8': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'9': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'0': [
		 [  , 1, 1, 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1, 1, 1, 0 ]
		 ],
	'A': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'B': [
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'C': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'D': [
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'E': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'F': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	'G': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  , 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'H': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'I': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'J': [
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'K': [
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  , 1,  , 0 ],
		 [ 1, 1, 1,  , 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'L': [
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'M': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1,  , 1, 1 ],
		 [ 1,  , 1,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'N': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1,  ,  , 1 ],
		 [ 1,  , 1,  , 1 ],
		 [ 1,  ,  , 1, 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],  
	'O': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'P': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	'Q': [
		 [ 1, 1, 1, 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'R': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'S': [
		 [ 1, 1, 1, 1, 1 ],
		 [ 1,  ,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'T': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'U': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],
	'V': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [  , 1,  , 1, 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'W': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  , 1,  , 1 ],
		 [ 1, 1,  , 1, 1 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'X': [
		 [ 1,  ,  ,  , 1 ],
		 [  , 1,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  , 1, 0 ],
		 [ 1,  ,  ,  , 1 ]
		 ],
	'Y': [
		 [ 1,  ,  ,  , 1 ],
		 [ 1,  ,  ,  , 1 ],
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'Z': [
		 [ 1, 1, 1, 1, 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  ,  , 0 ],
		 [ 1, 1, 1, 1, 1 ]
		 ],   
	' ': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
	',': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  , 1,  , 0 ]
		 ],
	'+': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1, 1, 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
	'/': [
		 [  ,  ,  ,  , 1 ],
		 [  ,  ,  , 1, 0 ],
		 [  ,  , 1,  , 0 ],
		 [  , 1,  ,  , 0 ],
		 [ 1,  ,  ,  , 0 ]
		 ],
	':': [
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ],
		 [  ,  , 1,  , 0 ],
		 [  ,  ,  ,  , 0 ]
		 ],
	'@': [
		 [  1, 1, 1, 1, 1 ],
		 [   ,  ,  ,  , 1 ],
		 [  1, 1, 1,  , 1 ],
		 [  1,  , 1,  , 1 ],
		 [  1, 1, 1, 1, 1 ]
		 ],
	'.': [
		 [   ,  ,  ,  ,   ],
		 [   ,  ,  ,  ,   ],
		 [   ,  ,  ,  ,   ],
		 [   , 1, 1,  ,   ],
		 [   , 1, 1,  ,   ]
		 ],
		 
	"'": [
		 [   ,  ,  1,  ,   ],
		 [   ,  ,  1,  ,   ],
		 [   ,  ,   ,  ,   ],
		 [   ,  ,   ,  ,   ],
		 [   ,  ,   ,  ,   ]
		 ],
	"*": [
		 [   1,  ,  1,  ,1   ],
		 [   , 1 ,  1,  1,   ],
		 [   1, 1, 1, 1, 1],
		 [   ,  1,  1, 1,   ],
		 [   1,  ,  1,  , 1  ]
		 ]
};