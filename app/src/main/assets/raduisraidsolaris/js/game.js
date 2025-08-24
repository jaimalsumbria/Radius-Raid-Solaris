$.init0 = function(i) {
	try{
	$.theme = $.storage['theme'];
	if($.theme == undefined) $.theme = 0;
	} catch (err){
		$.theme = 0;
	}
	$.ctxbg0.clearRect( 0, 0, $.cbg0.width, $.cbg0.height );
	$.ctxbg1.clearRect( 0, 0, $.cbg1.width, $.cbg1.height );
	$.ctxbg2.clearRect( 0, 0, $.cbg2.width, $.cbg2.height );
	$.ctxbg3.clearRect( 0, 0, $.cbg3.width, $.cbg3.height );
	$.ctxbg4.clearRect( 0, 0, $.cbg4.width, $.cbg4.height );
	$.ctxmg.clearRect( 0, 0, $.cmg.width, $.cmg.height );
	$.ctxfg.clearRect( 0, 0, $.cfg.width, $.cfg.height );
	$.ctxbigbgd2.fillStyle = $.definitions.theme[$.theme].fillStyle;;
	$.ctxbigbgd2.fillRect( 0, 0, $.cbigbgd2.width, $.cbigbgd2.height );
	document.body.style.background = $.definitions.theme[$.theme].fillStyle;
	$.renderBackground1();
	$.renderBackground2();
	$.renderBackground3();
	$.renderBackground4();
	$.renderBackground5();
	$.renderForeground();
	$.renderFavicon();
	$.setState( 'menu' );
}

/*==============================================================================
Init
==============================================================================*/
$.init = function(i) {
    $.android = 1;
    $.pingala_series = [2, 3, 5, 7, 8, 9, 11, 13, 17, 21, 34, 55, 89, 144, 233];

	$.logocounting = 0;
	$.storystagecounting = 0;
	
	try {
		if ($.android == 1) {
		    $.sc_base = Android.getToast();
		    $.sc_base = 400;
		}
		else {
		   $.sc_base = 400; 
		}
	} catch(err) {
        $.sc_base = 400;
    }
	
	$.perma_power_count=0;
	$.bullet = new Image();
	$.bullet.src = 'js/pics/rifle.svg';
	
	$.pause_button = new Image();
	$.pause_button.src = 'js/pics/pause-button.svg';
	
	$.mute_button = new Image();
	$.mute_button.src = 'js/pics/speaker-off.svg';
	
	$.unmute_button = new Image();
	$.unmute_button.src = 'js/pics/speaker.svg';
	
	// solar system
	$.sun = new Image();
	$.moon = new Image();
	$.earth = new Image();
	$.venus = new Image();
	$.mercury = new Image();
	$.mars = new Image();
	$.jupitor = new Image();
	$.saturn = new Image();
	$.uranus = new Image();
	$.neptune = new Image();
	$.pluto = new Image();
	
	$.europa = new Image();
	$.ganymede = new Image();
	$.titan = new Image();
	
	
	//stars
	
	$.blue_star = new Image();
	$.dim_orange_star = new Image();
	$.flaring_red_star = new Image();
	
	$.red_small_star = new Image();
	$.yellow_star = new Image();
	
	//exoplanets
	$.HD209458b = new Image();
    $.HD209458b.src = 'js/pics/HD209458b.png';
	
	$.HD189733b = new Image();
    $.HD189733b.src = 'js/pics/HD189733b.png';
	
	$.WASP_6b = new Image();
    $.WASP_6b.src = 'js/pics/WASP-6b.png';
	
	$.HAT_P_1b = new Image();
    $.HAT_P_1b.src = 'js/pics/HAT-P-1b.png';
	
	$.HAT_P_12b = new Image();
    $.HAT_P_12b.src = 'js/pics/HAT-P-12b.png';
	
	//end of exoplanets
	$.sun.src = 'js/pics/sun.png';
    $.moon.src = 'js/pics/Canvas_moon.png';
    $.earth.src = 'js/pics/Canvas_earth.png';
    $.venus.src = 'js/pics/venus.png';
    $.mercury.src = 'js/pics/mercury.png';
    $.mars.src = 'js/pics/mars.png';	
    $.jupitor.src = 'js/pics/jupitor.png';
	$.saturn.src = 'js/pics/saturn.png';
	$.uranus.src = 'js/pics/uranus.png';
	$.neptune.src = 'js/pics/neptune.png';
	$.pluto.src = 'js/pics/pluto.png';
	
	$.europa.src = 'js/pics/europa.png';
	$.ganymede.src = 'js/pics/ganymede.png';
	$.titan.src = 'js/pics/titan.png';
	
	//stars
	$.blue_star.src = 'js/pics/blue_star.png';
	$.dim_orange_star.src ='js/pics/dim_orange_star.png';
	$.flaring_red_star.src = 'js/pics/flaring_red_star.png';
	
	$.red_small_star.src = 'js/pics/red_small_star.png';
	$.yellow_star.src = 'js/pics/yellow_star.png';
	
	//exoplanets

	
	$.enemy_pic_list = [];
	
	$.enemy_pic_list[0] = $.mars;
	$.enemy_pic_list[1] = $.europa; //replace moon
	$.enemy_pic_list[2] = $.venus;
	$.enemy_pic_list[3] = $.mercury;
	
	$.enemy_pic_list[4] = $.europa;
	$.enemy_pic_list[5] = $.ganymede;
	$.enemy_pic_list[6] = $.jupitor;
	
	
	$.enemy_pic_list[7] = $.saturn;
	$.enemy_pic_list[8] = $.titan;
	
	$.enemy_pic_list[9] = $.uranus;
	$.enemy_pic_list[10] = $.neptune;
	$.enemy_pic_list[11] = $.europa; //replace pluto
	$.enemy_pic_list[12] = $.earth;
	$.enemy_pic_list[13] = $.sun;
	
	$.enemy_pic_list[14] = $.blue_star;
	$.enemy_pic_list[15] = $.dim_orange_star;
	$.enemy_pic_list[16] = $.flaring_red_star;
	$.enemy_pic_list[17] = $.red_small_star;
	$.enemy_pic_list[18] = $.yellow_star;
	
	$.enemy_pic_list[19] = $.HD209458b;
	$.enemy_pic_list[20] = $.HD189733b;
	$.enemy_pic_list[21] = $.WASP_6b;
	$.enemy_pic_list[22] = $.HAT_P_1b;
	$.enemy_pic_list[23] = $.HAT_P_12b;
	
	
	$.enemy_list_size = 100;
	
	
	$.initPowersForSatges();
	
	//round button pics
	$.move_dir =  new Image();
	$.shoot_dir =  new Image();
	$.move_dir.src =  'js/pics/move_dir.svg';;
	$.shoot_dir.src =  'js/pics/shoot_dir.svg';;
	
	$.setupStorage();
	try{
	$.theme = $.storage['theme'];
	if($.theme == undefined) $.theme = 0;
	} catch (err){
		$.theme = 0;
	}
	$.openstages = $.storage['openStages'];
	$.currentstage = $.storage['currentStage'];
	
	$.wrap = document.getElementById( 'wrap' );
	$.wrapInner = document.getElementById( 'wrap-inner' );
	$.cbg0 = document.getElementById( 'cbg0' );
	$.cbg1 = document.getElementById( 'cbg1' );
	$.cbg2 = document.getElementById( 'cbg2' );
	$.cbg3 = document.getElementById( 'cbg3' );
	$.cbg4 = document.getElementById( 'cbg4' );
	$.cmg = document.getElementById( 'cmg' );
	$.cfg = document.getElementById( 'cfg' );
	$.cbigbgd = document.getElementById( 'cbigbgd' );
	$.cbigbgd2 = document.getElementById( 'cbigbgd2' );
	$.yutani_image  = document.getElementById("logo");
	$.ctxbg0 = $.cbg0.getContext( '2d' );
	$.ctxbg1 = $.cbg1.getContext( '2d' );
	$.ctxbg2 = $.cbg2.getContext( '2d' );
	$.ctxbg3 = $.cbg3.getContext( '2d' );
	$.ctxbg4 = $.cbg4.getContext( '2d' );
	$.ctxmg = $.cmg.getContext( '2d' );
	$.ctxfg = $.cfg.getContext( '2d' );
	$.ctxbigbgd = $.cbigbgd.getContext( '2d' );
	
	$.cbigbgd.width = 800 + 190 + 190; 
    $.cbigbgd.height = 600 + 20;
    
	$.ctxbigbgd2 = $.cbigbgd2.getContext( '2d' );
	
	$.cbigbgd2.width = 800 + 190 + 190; 
    $.cbigbgd2.height = 600 + 20;
	
	$.cw = $.cmg.width = $.cfg.width = 800;
	$.ch = $.cmg.height = $.cfg.height = 600;
	$.wrap.style.width = $.wrapInner.style.width = $.cw + 'px';
	$.wrap.style.height = $.wrapInner.style.height = $.ch + 'px';
	$.wrap.style.marginLeft = ( -$.cw / 2 ) - 10 + 'px';
	$.wrap.style.marginTop = ( -$.ch / 2 ) - 10 + 'px';
	$.ww = Math.floor( $.cw * 2 );
	$.wh = Math.floor( $.ch * 2 );
	$.cbg0.width = Math.floor( $.cw);
	$.cbg0.height = Math.floor( $.ch);
	$.cbg1.width = Math.floor( $.cw * 1.1 );
	$.cbg1.height = Math.floor( $.ch * 1.1 );
	$.cbg2.width = Math.floor( $.cw * 1.15 );
	$.cbg2.height = Math.floor( $.ch * 1.15 );
	$.cbg3.width = Math.floor( $.cw * 1.2 );
	$.cbg3.height = Math.floor( $.ch * 1.2 );
	$.cbg4.width = Math.floor( $.cw * 1.25 );
	$.cbg4.height = Math.floor( $.ch * 1.25 );
	
	$.ctxbigbgd2.fillStyle = $.definitions.theme[$.theme].fillStyle;;
	$.ctxbigbgd2.fillRect( 0, 0, $.cbigbgd2.width, $.cbigbgd2.height );
	$.ctxmg.clearRect( 0, 0, $.cw, $.ch );
	document.body.style.background = $.definitions.theme[$.theme].fillStyle;

	$.boss = 'notactive';
	$.shape = 1;
	$.set_ship_no = 0;
	$.stageButtonCount=0;
	$.heropics = [];
	$.retry_done_for_stage = 2;
	$.gamestages =  new $.GameStages();
	$.screen = {
		x: ( $.ww - $.cw ) / -2,
		y: ( $.wh - $.ch ) / -2
	};

	$.mute = $.storage['mute'];
	$.autofire = $.storage['autofire'];
	$.slowEnemyDivider = 3;	
    
    $.directionX = -1;
	$.directionY = -1;

	$.keys = {
		state: {
			up: 0,
			down: 0,
			left: 0,
			right: 0,
			f: 0,
			m: 0,
			p: 0
		},
		pressed: {
			up: 0,
			down: 0,
			left: 0,
			right: 0,
			f: 0,
			m: 0,
			p: 0
		}
	};
	$.okeys = {};
	$.mouse = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
	
	$.mouse2 = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
	
	$.touch = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
	
	
	$.touch2 = {
		x: $.ww / 2,
		y: $.wh / 2,
		sx: 0,
		sy: 0,
		ax: window.innerWidth / 2,
		ay: 0,
		down: 0
	};
	
	$.buttons = [];

	$.minimap = {		
		x: 20,
	    y: $.ch - Math.floor( $.ch * 0.9 ) - 10,
		width: Math.floor( $.cw * 0.15 ),
		height: Math.floor( $.ch * 0.15 ),
		scale: Math.floor( $.cw * 0.15 ) / $.ww,
		color: 'hsla(226, 52%, 20%, 0.21)',
		strokeColor: '#3a3a3a'
	},	
	$.cOffset = { 
		left: 0, 
		top: 0 
	};
	
	$.levelCount = $.definitions.levels.length;
	$.states = {};
	$.state = '';
	$.enemies = [];
	$.bullets = [];
	$.explosions = [];
	$.powerups = [];	
	$.particleEmitters = [];
	$.textPops = [];
	$.levelPops = [];
	$.powerupTimers = [];

	$.resizecb();
	$.bindEvents();
	$.setupStates();	
	$.renderBackground1();
	$.renderBackground2();
	$.renderBackground3();
	$.renderBackground4();
	$.renderBackground5();
	$.renderForeground();
	$.renderFavicon();
//	$.reset();
	$.setState( 'logo' );
	//$.autofire = ~~!$.autofire;			
		//	$.storage['autofire'] = $.autofire;
		//	$.updateStorage();
	$.loop();
	
    $.doToggleMute = 1;
	
	$.themestage = new $.Themestage( {
				action: function() {
				
				}
			} );
}; //end of init function

/*==============================================================================
Reset
==============================================================================*/
$.reset = function() {
	$.indexGlobal = 0;
	$.dt = 1;
	$.lt = 0;
	$.elapsed = 0;
	$.tick = 0;

	$.gameoverTick = 0;
	$.gameoverTickMax = 200;
	$.gameoverExplosion = 0;

	$.instructionTick = 0;
	$.instructionTickMax = 400;

	$.levelDiffOffset = 0;
	$.enemyOffsetMod = 0;
	$.slow = 0;

	$.screen = {
		x: ( $.ww - $.cw ) / -2,
		y: ( $.wh - $.ch ) / -2
	};
	$.rumble = {
		x: 0,
		y: 0,
		level: 0,
		decay: 0.4
	};	

	$.mouse.down = 0;

	$.level = {
		current: 0,
		kills: 0,
		killsToLevel: $.definitions.levels[ 0 ].killsToLevel,
		distribution: $.definitions.levels[ 0 ].distribution,
		distributionCount: $.definitions.levels[ 0 ].distribution.length
	};

	$.enemies.length = 0;
	$.bullets.length = 0;
	$.explosions.length = 0;
	$.powerups.length = 0;
	$.particleEmitters.length = 0;
	$.textPops.length = 0;
	$.levelPops.length = 0;
	$.powerupTimers.length = 0;
	$.perma_power_count=0;

	for( var i = 0; i < $.definitions.powerups.length; i++ ) {
		$.powerupTimers.push( 0 );
	}

	$.kills = 0;
	$.bulletsFired = 0;
	$.powerupsCollected = 0;
	$.score = 0;

	$.hero = new $.Hero();
	$.space_ship = new Image();
	$.space_ship.src = 'js/pics/ships/hero_0.png';
	
	
	$.enemyboss = new $.EnemyBoss( {
			x: $.cw * 0.10 + 60,
			y: $.ch * 0.10 + 10,
			lockedWidth: $.cw/5,
			lockedHeight: 49,
			scale: 3,
			title: 'ENEMY BOSS',
			action: function() {
			
			
			}
		});

	//var i = $.audio.references.length;
	//while( i-- ) {
	//	$.audio.references[ i ].volume = ~~!$.mute;
	//}

	$.levelPops.push( new $.LevelPop( {
		level: 1
	} ) );
};

/*==============================================================================
Create Favicon
==============================================================================*/
$.renderFavicon = function() {
	var favicon = document.getElementById( 'favicon' ),
		favc = document.createElement( 'canvas' ),
		favctx = favc.getContext( '2d' ),
		faviconGrid = [
			[ 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
			[ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  , 1, 1, 1,  ,  , 1, 1, 1,  ,  ,  , 0 ],
			[ 1,  ,  ,  ,  , 1, 1,  ,  , 1, 1,  ,  ,  ,  , 0 ],
			[ 1,  ,  ,  ,  , 1, 1,  ,  , 1, 1,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  , 1,  ,  , 1,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  , 1,  ,  , 1, ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  , ,  1, 1, ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  , 1 ],
			[  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  , 1 ],
			[  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
			[ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1 ]
		];
	favc.width = favc.height = 16;
	favctx.beginPath();
	for( var y = 0; y < 16; y++ ) {
		for( var x = 0; x < 16; x++ ) {
			if( faviconGrid[ y ][ x ] === 1 ) {
				favctx.rect( x, y, 1, 1 );
			}
		}
	}
	favctx.fill();
	favicon.href = favc.toDataURL();
};

/*==============================================================================
Render Backgrounds
==============================================================================*/
$.renderBackground1 = function() {
	var gradient = $.ctxbg1.createRadialGradient( $.cbg1.width / 2, $.cbg1.height / 2, 0, $.cbg1.width / 2, $.cbg1.height / 2, $.cbg1.height );
	gradient.addColorStop( 0, 'hsla(0, 0%, 100%, 0.1)' );
	gradient.addColorStop( 0.65, 'hsla(0, 0%, 100%, 0)' );
	$.ctxbg1.fillStyle = gradient;
	$.ctxbg1.fillRect( 0, 0, $.cbg1.width, $.cbg1.height );

	var i = 2000;
	while( i-- ) {
		$.util.fillCircle( $.ctxbg1, $.util.rand( 0, $.cbg1.width ), $.util.rand( 0, $.cbg1.height ), $.util.rand( 0.2, 0.5 ), 'hsla(0, 100%, 54%, ' + $.util.rand( 0.05, 0.7 ) + ')' );
	}

	var i = 800;
	while( i-- ) {
		$.util.fillCircle( $.ctxbg1, $.util.rand( 0, $.cbg1.width ), $.util.rand( 0, $.cbg1.height ), $.util.rand( 0.1, 0.8 ), 'hsla(0, 0%, 100%, ' + $.util.rand( 0.05, 0.6 ) + ')' );
	}
}

$.renderBackground2 = function() {
	var i = 100;
	while( i-- ) {
		$.util.fillCircle( $.ctxbg2, $.util.rand( 0, $.cbg2.width ), $.util.rand( 0, $.cbg2.height ), $.util.rand( 1, 2 ), 'hsla(241, 100%, 54%, ' + $.util.rand( 0.05, 0.4 ) + ')' );
	}
}

$.renderBackground3 = function() {
	var i = 50;
	while( i-- ) {
		$.util.fillCircle( $.ctxbg3, $.util.rand( 0, $.cbg3.width ), $.util.rand( 0, $.cbg3.height ), $.util.rand( 1, 3.0), 'hsla(48, 100%, 54%, ' + $.util.rand( 0.05, 0.4 ) + ')' );
	}
}

$.renderBackground5 = function() {
	var i = 100;
	while( i-- ) {
		$.util.fillCircle( $.ctxbigbgd2, $.util.rand( 0, $.cbigbgd2.width ), $.util.rand( 0, $.cbigbgd2.height ), $.util.rand( 0.2, 0.5 ), 'hsla(0, 100%, 54%, ' + $.util.rand( 0.05, 0.7 ) + ')' );
	}

	var i = 200;
	while( i-- ) {
		$.util.fillCircle( $.ctxbigbgd2, $.util.rand( 0, $.cbigbgd2.width ), $.util.rand( 0, $.cbigbgd2.height ), $.util.rand( 0.1, 0.8 ), 'hsla(0, 0%, 100%, ' + $.util.rand( 0.05, 0.6 ) + ')' );
	}
	
	var i = 200;
	while( i-- ) {
		$.util.fillCircle( $.ctxbigbgd2, $.util.rand( 0, $.cbigbgd2.width ), $.util.rand( 0, $.cbigbgd2.height ), $.util.rand( 1, 2 ), 'hsla(241, 100%, 54%, ' + $.util.rand( 0.05, 0.4 ) + ')' );
	}
	var i = 200;
	while( i-- ) {
		$.util.fillCircle( $.ctxbigbgd2, $.util.rand( 0, $.cbigbgd2.width ), $.util.rand( 0, $.cbigbgd2.height ), $.util.rand( 1, 2.5 ), 'hsla(48, 100%, 54%, ' + $.util.rand( 0.05, 0.4 ) + ')' );
	}
	
	var size = 50;
	$.ctxbigbgd2.fillStyle = $.definitions.theme[$.theme].fillStyleBackground4;
	var i = Math.round( $.cbigbgd2.height / size );
	while( i-- ) {
		$.ctxbigbgd2.fillRect( 0, i * size + 25, $.cbigbgd2.width, 1 );
	}
	i = Math.round( $.cbigbgd2.width / size );
	while( i-- ) {
		$.ctxbigbgd2.fillRect( i * size, 0, 1, $.cbigbgd2.height );
	}
}

$.renderBackground4 = function() {
	var size = 50;
	$.ctxbg4.fillStyle = $.definitions.theme[$.theme].fillStyleBackground4;;
	var i = Math.round( $.cbg4.height / size );
	while( i-- ) {
		$.ctxbg4.fillRect( 0, i * size + 25, $.cbg4.width, 1 );
	}
	i = Math.round( $.cbg4.width / size );
	while( i-- ) {
		$.ctxbg4.fillRect( i * size, 0, 1, $.cbg4.height );
	}
}

/*==============================================================================
Render Foreground
==============================================================================*/
$.renderForeground = function() {
	var gradient = $.ctxfg.createRadialGradient( $.cw / 2, $.ch / 2, $.ch / 3, $.cw / 2, $.ch / 2, $.ch );
	gradient.addColorStop( 0, 'hsla(0, 0%, 0%, 0)' );
	gradient.addColorStop( 1, 'hsla(0, 0%, 0%, 0.5)' );
	$.ctxfg.fillStyle = gradient;
	$.ctxfg.fillRect( 0, 0, $.cw, $.ch );

	$.ctxfg.fillStyle = 'hsla(0, 0%, 50%, 0.1)';
	var i = Math.round( $.ch / 2 );
	while( i-- ) {
		$.ctxfg.fillRect( 0, i * 2, $.cw, 1 );
	}

	var gradient2 = $.ctxfg.createLinearGradient( $.cw, 0, 0, $.ch );
	gradient2.addColorStop( 0, 'hsla(0, 0%, 100%, 0.04)' );
	gradient2.addColorStop( 0.75, 'hsla(0, 0%, 100%, 0)' );
	$.ctxfg.beginPath();
	$.ctxfg.moveTo( 0, 0 );
	$.ctxfg.lineTo( $.cw, 0 );
	$.ctxfg.lineTo( 0, $.ch );
	$.ctxfg.closePath();
	$.ctxfg.fillStyle = gradient2;
	$.ctxfg.fill();
}

/*==============================================================================
User Interface / UI / GUI / Minimap
==============================================================================*/

$.renderInterface = function() {
	/*==============================================================================
	Powerup Timers
	==============================================================================*/
		for( var i = 0; i < $.definitions.powerups.length; i++ ) {
			var powerup = $.definitions.powerups[ i ],
				powerupOn = ( $.powerupTimers[ i ] > 0 );
			$.ctxmg.beginPath();
			var powerupText = $.text( {
				ctx: $.ctxmg,
				x: $.minimap.x + $.minimap.width + 90,
				y: $.minimap.y + 4 + ( i * 12 ),
				text: powerup.title,
				hspacing: 1,
				vspacing: 1,
				halign: 'right',
				valign: 'top',
				scale: 1,
				snap: 1,
				render: 1
			} );
			if( powerupOn ) {
				$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, ' + ( 0.25 + ( ( $.powerupTimers[ i ] / 300 ) * 0.75 ) ) + ')';
			} else {
				$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.25)';
			}
			$.ctxmg.fill();
			if( powerupOn ) {
				var powerupBar = {
					x: powerupText.ex + 5,
					y: powerupText.sy,
					width: 110,
					height: 5
				};
				$.ctxmg.fillStyle = 'hsl(' + powerup.hue + ', ' + powerup.saturation + '%, ' + powerup.lightness + '%)';
				$.ctxmg.fillRect( powerupBar.x, powerupBar.y, ( $.powerupTimers[ i ] / 300 ) * powerupBar.width, powerupBar.height );
			}
		}

		/*==============================================================================
		Instructions
		==============================================================================*/
		if( $.instructionTick < $.instructionTickMax ){
			$.instructionTick += $.dt;
			$.ctxmg.beginPath();
			$.text( {
				ctx: $.ctxmg,
				x: $.cw / 2 - 10,
				y: $.ch - 20,
				text: 'MOVE\nAIM/FIRE\nPAUSE\nMUTE',
				hspacing: 1,
				vspacing: 17,
				halign: 'right',
				valign: 'bottom',
				scale: 2,
				snap: 1,
				render: 1
			} );
			if( $.instructionTick < $.instructionTickMax * 0.25 ) {
				var alpha = ( $.instructionTick / ( $.instructionTickMax * 0.25 ) ) * 0.5;
			} else if( $.instructionTick > $.instructionTickMax - $.instructionTickMax * 0.25 ) {
				var alpha = ( ( $.instructionTickMax - $.instructionTick ) / ( $.instructionTickMax * 0.25 ) ) * 0.5;
			} else {
				var alpha = 0.5;
			}
			alpha = Math.min( 1, Math.max( 0, alpha ) );
			
			$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, ' + alpha + ')';
			$.ctxmg.fill();

			$.ctxmg.beginPath();
			$.text( {
				ctx: $.ctxmg,
				x: $.cw / 2 + 10,
				y: $.ch - 20,
				text: 'ARROWS\nTOUCH\nP\nM',
				hspacing: 1,
				vspacing: 17,
				halign: 'left',
				valign: 'bottom',
				scale: 2,
				snap: 1,
				render: 1
			} );
			if( $.instructionTick < $.instructionTickMax * 0.25 ) {
				var alpha = ( $.instructionTick / ( $.instructionTickMax * 0.25 ) ) * 1;
			} else if( $.instructionTick > $.instructionTickMax - $.instructionTickMax * 0.25 ) {
				var alpha = ( ( $.instructionTickMax - $.instructionTick ) / ( $.instructionTickMax * 0.25 ) ) * 1;
			} else {
				var alpha = 1;
			}
			alpha = Math.min( 1, Math.max( 0, alpha ) );
			
			$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, ' + alpha + ')';
			$.ctxmg.fill();
		}

		/*==============================================================================
		Slow Enemies Screen Cover
		==============================================================================*/
		if( $.powerupTimers[ 1 ] > 0 ) {
			$.ctxmg.fillStyle = 'hsla(200, 100%, 20%, 0.05)';
			$.ctxmg.fillRect( 0, 0, $.cw, $.ch );
		}

	/*==============================================================================
	Health
	==============================================================================*/
	$.ctxmg.beginPath();
	var healthText = $.text( {
		ctx: $.ctxmg,
		x: 20,
		y: 20,
		text: 'HEALTH',
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 3,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
	$.ctxmg.fill();
	var healthBar = {
		x: healthText.ex + 10,
		y: healthText.sy,
		width: 110,
		height: 18
	};
	$.ctxmg.fillStyle = 'hsla(0, 0%, 20%, 1)';
	$.ctxmg.fillRect( healthBar.x, healthBar.y, healthBar.width, healthBar.height );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.25)';
	$.ctxmg.fillRect( healthBar.x, healthBar.y, healthBar.width, healthBar.height / 2 );
	$.ctxmg.fillStyle = 'hsla(' + $.hero.life * 120 + ', 100%, 40%, 1)';
	$.ctxmg.fillRect( healthBar.x, healthBar.y, $.hero.life * healthBar.width, healthBar.height );
	$.ctxmg.fillStyle = 'hsla(' + $.hero.life * 120 + ', 100%, 75%, 1)';
	$.ctxmg.fillRect( healthBar.x, healthBar.y, $.hero.life * healthBar.width, healthBar.height / 2 );
	
	if( $.hero.takingDamage && $.hero.life > 0.01 ) {
		$.particleEmitters.push( new $.ParticleEmitter( {
			x: -$.screen.x + healthBar.x + $.hero.life * healthBar.width,
			y: -$.screen.y + healthBar.y + healthBar.height / 2,
			count: 1,
			spawnRange: 2,
			friction: 0.85,
			minSpeed: 2,
			maxSpeed: 20,
			minDirection: $.pi / 2 - 0.2,
			maxDirection: $.pi / 2 + 0.2,
			hue: $.hero.life * 120,
			saturation: 100
		} ) );
	}

	/*==============================================================================
	Progress
	==============================================================================*/
	$.ctxmg.beginPath();
	var progressText = $.text( {
		ctx: $.ctxmg,
		x: healthBar.x + healthBar.width + 40,
		y: 20,
		text: 'PROGRESS',
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 3,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
	$.ctxmg.fill();
	var progressBar = {
		x: progressText.ex + 10,
		y: progressText.sy,
		width: healthBar.width,
		height: healthBar.height
	};
	$.ctxmg.fillStyle = 'hsla(0, 0%, 20%, 1)';
	$.ctxmg.fillRect( progressBar.x, progressBar.y, progressBar.width, progressBar.height );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.25)';
	$.ctxmg.fillRect( progressBar.x, progressBar.y, progressBar.width, progressBar.height / 2 );
	$.ctxmg.fillStyle = 'hsla(58, 100%, 40%, 1)';
	
	var progressVal = $.score /($.sc_base + $.shape * $.sc_base / Math.log2($.retry_done_for_stage));
	if(progressVal > 1) progressVal = 1;
	
	//$.ctxmg.fillRect( progressBar.x, progressBar.y, ( $.level.kills / $.level.killsToLevel ) * progressBar.width, progressBar.height );
	$.ctxmg.fillRect( progressBar.x, progressBar.y, progressVal * progressBar.width, progressBar.height );
	

	$.ctxmg.fillStyle = 'hsla(58, 100%, 100%, 0.50)';
	//$.ctxmg.fillRect( progressBar.x, progressBar.y, ( $.level.kills / $.level.killsToLevel ) * progressBar.width, progressBar.height / 2 );
	$.ctxmg.fillRect( progressBar.x, progressBar.y, progressVal * progressBar.width, progressBar.height / 2 )
	
	if( $.level.kills == $.level.killsToLevel ) {
		$.particleEmitters.push( new $.ParticleEmitter( {
			x: -$.screen.x + progressBar.x + progressBar.width,
			y: -$.screen.y + progressBar.y + progressBar.height / 2,
			count: 30,
			spawnRange: 5,
			friction: 0.95,
			minSpeed: 2,
			maxSpeed: 25,
			minDirection: 0,
			minDirection: $.pi / 2 - $.pi / 4,
			maxDirection: $.pi / 2 + $.pi / 4,
			hue: 0,
			saturation: 0
		} ) );
	}

	/*==============================================================================
	Score
	==============================================================================*/
	$.ctxmg.beginPath();
	var scoreLabel = $.text( {
		ctx: $.ctxmg,
		x: progressBar.x + progressBar.width + 40,
		y: 20,
		text: 'SCORE',
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 3,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
	$.ctxmg.fill();

	$.ctxmg.beginPath();
	var scoreText = $.text( {
		ctx: $.ctxmg,
		x: scoreLabel.ex + 10,
		y: 20,
		text: $.util.pad( $.score, 7 ),
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 3,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 1)';
	$.ctxmg.fill();
/*
	$.ctxmg.beginPath();
	var bestLabel = $.text( {
		ctx: $.ctxmg,
		x: scoreText.ex + 20,
		y: 20,
		text: 'REQ.',
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 2,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
	$.ctxmg.fill();

	$.ctxmg.beginPath();
	var bestText = $.text( {
		ctx: $.ctxmg,
		x: bestLabel.ex + 10,
		y: 20,
		text: $.util.pad(Math.floor($.sc_base + $.shape * $.sc_base / Math.log2($.retry_done_for_stage)), 7 ),
		hspacing: 1,
		vspacing: 1,
		halign: 'top',
		valign: 'left',
		scale: 2,
		snap: 1,
		render: 1
	} );
	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 1)';
	$.ctxmg.fill();*/
};

$.renderMinimap = function() {
	$.ctxmg.fillStyle = $.minimap.color;
	$.ctxmg.fillRect( $.minimap.x, $.minimap.y, $.minimap.width, $.minimap.height );

	$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.1)';
	$.ctxmg.fillRect( 
		Math.floor( $.minimap.x + -$.screen.x * $.minimap.scale ), 
		Math.floor( $.minimap.y + -$.screen.y * $.minimap.scale ), 
		Math.floor( $.cw * $.minimap.scale ), 
		Math.floor( $.ch * $.minimap.scale )
	);

	//$.ctxmg.beginPath();
	for( var i = 0; i < $.enemies.length; i++ ){
		var enemy = $.enemies[ i ],
			x = $.minimap.x + Math.floor( enemy.x * $.minimap.scale ),
			y = $.minimap.y + Math.floor( enemy.y * $.minimap.scale );
		if( $.util.pointInRect( x + 1, y + 1, $.minimap.x, $.minimap.y, $.minimap.width, $.minimap.height ) ) {
			//$.ctxmg.rect( x, y, 2, 2 );
			$.ctxmg.fillStyle = 'hsl(' + enemy.hue + ', ' + enemy.saturation + '%, 50%)';
			$.ctxmg.fillRect( x, y, 2, 2 );
		}
	}
	//$.ctxmg.fillStyle = '#f00';
	//$.ctxmg.fill();

	$.ctxmg.beginPath();
	for( var i = 0; i < $.bullets.length; i++ ){
		var bullet = $.bullets[ i ],
			x = $.minimap.x + Math.floor( bullet.x * $.minimap.scale ),
			y = $.minimap.y + Math.floor( bullet.y * $.minimap.scale );
		if( $.util.pointInRect( x, y, $.minimap.x, $.minimap.y, $.minimap.width, $.minimap.height ) ) {
			$.ctxmg.rect( x, y, 1, 1 );
		}
	}
	$.ctxmg.fillStyle = '#fff';
	$.ctxmg.fill();

	$.ctxmg.fillStyle = $.hero.fillStyle;
	$.ctxmg.fillRect( $.minimap.x + Math.floor( $.hero.x * $.minimap.scale ), $.minimap.y + Math.floor( $.hero.y * $.minimap.scale ), 2, 2 );

	$.ctxmg.strokeStyle = $.minimap.strokeColor;
	$.ctxmg.strokeRect( $.minimap.x - 0.5, $.minimap.y - 0.5, $.minimap.width + 1, $.minimap.height + 1 );
};

/*==============================================================================
Enemy Spawning
==============================================================================*/
$.getSpawnCoordinates = function( radius ) {
	var quadrant = Math.floor( $.util.rand( 0, 4 ) ),
		x,
		y,
		start;
	
	if( quadrant === 0){
		x = $.util.rand( 0, $.ww );
		y = -radius;
		start = 'top';
	} else if( quadrant === 1 ){
		x = $.ww + radius;
		y = $.util.rand( 0, $.wh );
		start = 'right';
	} else if( quadrant === 2 ) {
		x = $.util.rand( 0, $.ww );
		y = $.wh + radius;
		start = 'bottom';
	} else {
		x = -radius;
		y = $.util.rand( 0, $.wh );
		start = 'left';
	}

	return { x: x, y: y, start: start };
};

$.spawnEnemy = function( type ) {
	var params = $.definitions.enemies[ type ],
		coordinates = $.getSpawnCoordinates( params.radius );
	params.x = coordinates.x;
	params.y = coordinates.y;
	params.start = coordinates.start;
	params.type = type;
	return new $.Enemy( params, $.shape);
};

$.spawnEnemies = function() {
	var floorTick = Math.floor( $.tick );
    if($.score <= ($.sc_base + $.shape * $.sc_base / Math.log2($.retry_done_for_stage))) {
	for( var i = 0; i < $.level.distributionCount; i++ ) {
		var timeCheck = $.level.distribution[ i ];		
		if( $.levelDiffOffset > 0 ){
			timeCheck = Math.max( 1, timeCheck - ( $.levelDiffOffset * 2) );
		}
		if( floorTick % timeCheck === 0 ) {
			$.enemies.push( $.spawnEnemy( i ));
		}
	}
  } else {
	       if ($.boss != 'active') {
			$.boss = 'active';
			//$.enemies =[];
		    $.enemies.push( $.spawnEnemy( $.rrat_per_stage_list[$.shape] ));
		   }
	}
};

/*==============================================================================
Events
==============================================================================*/
$.tstart;
$.tend;

$.onTouchMove = function( e ) {
	$.clickDone = 0;
   // e.preventDefault();
	$.tend = e.touches[0];
    if($.state == 'select_stage') {
	 $.gamestages.update();
    }
	  if (e.touches.length == 1) {
        $.mouse.down = 1;
    	$.touch.down = 1;
    	var touch_event = e.touches[0];
    	 if (touch_event.pageX || touch_event.pageY) {
          $.mouse.ax = touch_event.pageX;
          $.mouse.ay = touch_event.pageY;
        } 
    	$.mousescreen();
    	
    var i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( -1 )}
    	
   } else if($.state == 'play') {
	    var i = $.buttons.length; 
	    while( i-- ) {
	        for (var j = 0; j < e.touches.length; j++) {
             
                $.mouse.down = 1;
            	$.touch.down = 1;
        	    var touch_event = event.touches[j];
        	    if (touch_event.pageX || touch_event.pageY) {
                $.mouse.ax = touch_event.pageX;
                $.mouse.ay = touch_event.pageY;
                } 
        	   $.mousescreen();
	           $.buttons[ i ].update( -1 ) ;
	       }
	    }
	}// end play if
};



$.ontouchstart = function( e ) {
   // e.preventDefault();
    $.tstart = e.touches[0];
	
   if (e.touches.length == 1) {
        $.mouse.down = 1;
    	$.touch.down = 1;
    	var touch_event = e.touches[0];
    	 if (touch_event.pageX || touch_event.pageY) {
          $.mouse.ax = touch_event.pageX;
          $.mouse.ay = touch_event.pageY;
        } 
    	$.mousescreen();
    try{
     var i = $.buttons.length; while( i-- ){$.buttons[ i ].update( -1 )}
    } catch(err){
		// do nothing
	}	
   } else if($.state == 'play') {
	    var i = $.buttons.length; 
	    while( i-- ) {
	        for (var j = 0; j < e.touches.length; j++) {
                $.mouse.down = 1;
            	$.touch.down = 1;
        	    var touch_event = event.touches[j];
        	    if (touch_event.pageX || touch_event.pageY) {
                $.mouse.ax = touch_event.pageX;
                $.mouse.ay = touch_event.pageY;
                } 
        	   $.mousescreen();
	           $.buttons[ i ].update( -1 ) ;
	       }
	    }
	}// end play if
};
$.clickDone = 0;
$.clickGameStage = function( e ) {
    e.preventDefault();
	$.clickDone = 1;
};

$.ontouchend = function( e ) {
    //e.preventDefault();
    $.mouse.down = 0;
	$.touch.down = 0;
	$.clickDone = 0;
	if($.state == 'play') {
	  var i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( -2 )}
	}
	$.keys.state.up = 0;
	$.keys.state.right = 0;
	$.keys.state.down = 0; 
	$.keys.state.left = 0; 
};

$.mousemovecb = function( e ) {
	$.clickDone = 0;
	e.preventDefault();
	$.mouse.ax = e.pageX;
	$.mouse.ay = e.pageY;
	$.mousescreen();
};

$.mousescreen = function() {
	$.mouse.sx = $.mouse.ax - $.cOffset.left;
	$.mouse.sy = $.mouse.ay - $.cOffset.top;
	$.mouse.x = $.mouse.sx - $.screen.x;
	$.mouse.y = $.mouse.sy - $.screen.y;
};

$.mousescreen2 = function() {
	$.mouse2.sx = $.mouse2.ax - $.cOffset.left;
	$.mouse2.sy = $.mouse2.ay - $.cOffset.top;
	$.mouse2.x = $.mouse2.sx - $.screen.x;
	$.mouse2.y = $.mouse2.sy - $.screen.y;
};

$.mousedowncb = function( e ) {
	e.preventDefault();
	$.mouse.down = 1;
};

$.mouseupcb = function( e ) {
	e.preventDefault();
	$.mouse.down = 0;
	$.clickDone = 0;

};

$.keydowncb = function( e ) {
	var e = ( e.keyCode ? e.keyCode : e.which );
	if( e === 38 || e === 87 ){ $.keys.state.up = 1; }
	if( e === 39 || e === 68 ){ $.keys.state.right = 1; }
	if( e === 40 || e === 83 ){ $.keys.state.down = 1; }
	if( e === 37 || e === 65 ){ $.keys.state.left = 1; }
	if( e === 70 ){ $.keys.state.f = 1; }
	if( e === 77 ){ $.keys.state.m = 1; }
	if( e === 80 ){ $.keys.state.p = 1; }
}

$.keyupcb = function( e ) {
	var e = ( e.keyCode ? e.keyCode : e.which );
	if( e === 38 || e === 87 ){ $.keys.state.up = 0; }
	if( e === 39 || e === 68 ){ $.keys.state.right = 0; }
	if( e === 40 || e === 83 ){ $.keys.state.down = 0; }
	if( e === 37 || e === 65 ){ $.keys.state.left = 0; }
	if( e === 70 ){ $.keys.state.f = 0; }
	if( e === 77 ){ $.keys.state.m = 0; }
	if( e === 80 ){ $.keys.state.p = 0; }
}

$.resizecb = function( e ) {
	var rect = $.cmg.getBoundingClientRect();
	$.cOffset = {
		left: rect.left,
		top: rect.top
	}// resize
	
}


$.blurcb = function() {
	if( $.state == 'play' ){
		$.setState( 'pause' );
	}
}

$.bindEvents = function() {
	window.addEventListener( 'mousemove', $.mousemovecb );
	window.addEventListener( 'mousedown', $.mousedowncb );
	window.addEventListener( 'mouseup', $.mouseupcb );
	window.addEventListener( 'keydown', $.keydowncb );
	window.addEventListener( 'keyup', $.keyupcb );
	window.addEventListener( 'resize', $.resizecb );
	window.addEventListener( 'blur', $.blurcb );
	
	 
    window.addEventListener('touchmove', $.onTouchMove); 
	window.addEventListener('touchstart', $.ontouchstart);
	window.addEventListener('touchend', $.ontouchend);
	
	window.addEventListener('click', $.clickGameStage);
};

/*==============================================================================
Miscellaneous
==============================================================================*/
$.clearScreen = function() {
	$.ctxmg.clearRect( 0, 0, $.cw, $.ch );
	//$.ctxbg0.clearRect( 0, 0, $.cw, $.ch );
	$.ctxbigbgd.clearRect( 0, 0, $.cw + 190 + 190, $.ch+10+10 );
};

$.updateDelta = function() { 
	var now = Date.now();
	$.dt = ( now - $.lt ) / ( 1000 / 60 );
	$.dt = ( $.dt < 0 ) ? 0.001 : $.dt;
	$.dt = ( $.dt > 10 ) ? 10 : $.dt;
	$.lt = now;
	$.elapsed += $.dt;
};

$.updateScreen = function() {
	var xSnap,
		xModify, 
		ySnap,
		yModify;

	if( $.hero.x < $.cw / 2 ) {
		xModify = $.hero.x / $.cw;
	} else if( $.hero.x > $.ww - $.cw / 2 ) {
		xModify = 1 - ( $.ww - $.hero.x ) / $.cw;
	} else {
		xModify = 0.5;		
	}

	if( $.hero.y < $.ch / 2 ) {
		yModify = $.hero.y / $.ch;
	} else if( $.hero.y > $.wh - $.ch / 2 ) {
		yModify = 1 - ( $.wh - $.hero.y ) / $.ch;
	} else {
		yModify = 0.5;		
	}

	xSnap = ( ( $.cw * xModify - $.hero.x ) - $.screen.x ) / 30;
	ySnap = ( ( $.ch * yModify - $.hero.y ) - $.screen.y ) / 30;	

	// ease to new coordinates
	$.screen.x += xSnap * $.dt;
	$.screen.y += ySnap * $.dt;

	// update rumble levels, keep X and Y changes consistent, apply rumble
	if( $.rumble.level > 0 ) {
		$.rumble.level -= $.rumble.decay;
		$.rumble.level = ( $.rumble.level < 0 ) ? 0 : $.rumble.level;			
		$.rumble.x = $.util.rand( -$.rumble.level, $.rumble.level );
		$.rumble.y = $.util.rand( -$.rumble.level, $.rumble.level );
	} else {
		$.rumble.x = 0;
		$.rumble.y = 0;
	}

	//$.screen.x -= $.rumble.x;
	//$.screen.y -= $.rumble.y;

	// animate background canvas
	$.cbg1.style.marginLeft = 
		-( ( $.cbg1.width - $.cw ) / 2 ) // half the difference from bg to viewport
		- ( ( $.cbg1.width - $.cw ) / 2 ) // half the diff again, modified by a percentage below
		* ( ( -$.screen.x - ( $.ww - $.cw ) / 2 ) / ( ( $.ww - $.cw ) / 2) ) // viewport offset applied to bg
		- $.rumble.x + 'px';
	$.cbg1.style.marginTop = 
		-( ( $.cbg1.height - $.ch ) / 2 ) 
		- ( ( $.cbg1.height - $.ch ) / 2 )
		* ( ( -$.screen.y - ( $.wh - $.ch ) / 2 ) / ( ( $.wh - $.ch ) / 2) ) 
		- $.rumble.y + 'px';
	$.cbg2.style.marginLeft = 
		-( ( $.cbg2.width - $.cw ) / 2 ) // half the difference from bg to viewport
		- ( ( $.cbg2.width - $.cw ) / 2 ) // half the diff again, modified by a percentage below
		* ( ( -$.screen.x - ( $.ww - $.cw ) / 2 ) / ( ( $.ww - $.cw ) / 2) ) // viewport offset applied to bg
		- $.rumble.x + 'px';
	$.cbg2.style.marginTop = 
		-( ( $.cbg2.height - $.ch ) / 2 ) 
		- ( ( $.cbg2.height - $.ch ) / 2 )
		* ( ( -$.screen.y - ( $.wh - $.ch ) / 2 ) / ( ( $.wh - $.ch ) / 2) ) 
		- $.rumble.y + 'px';
	$.cbg3.style.marginLeft = 
		-( ( $.cbg3.width - $.cw ) / 2 ) // half the difference from bg to viewport
		- ( ( $.cbg3.width - $.cw ) / 2 ) // half the diff again, modified by a percentage below
		* ( ( -$.screen.x - ( $.ww - $.cw ) / 2 ) / ( ( $.ww - $.cw ) / 2) ) // viewport offset applied to bg
		- $.rumble.x + 'px';
	$.cbg3.style.marginTop = 
		-( ( $.cbg3.height - $.ch ) / 2 ) 
		- ( ( $.cbg3.height - $.ch ) / 2 )
		* ( ( -$.screen.y - ( $.wh - $.ch ) / 2 ) / ( ( $.wh - $.ch ) / 2) ) 
		- $.rumble.y + 'px';
	$.cbg4.style.marginLeft = 
		-( ( $.cbg4.width - $.cw ) / 2 ) // half the difference from bg to viewport
		- ( ( $.cbg4.width - $.cw ) / 2 ) // half the diff again, modified by a percentage below
		* ( ( -$.screen.x - ( $.ww - $.cw ) / 2 ) / ( ( $.ww - $.cw ) / 2) ) // viewport offset applied to bg
		- $.rumble.x + 'px';
	$.cbg4.style.marginTop = 
		-( ( $.cbg4.height - $.ch ) / 2 ) 
		- ( ( $.cbg4.height - $.ch ) / 2 )
		* ( ( -$.screen.y - ( $.wh - $.ch ) / 2 ) / ( ( $.wh - $.ch ) / 2) ) 
		- $.rumble.y + 'px';

	$.mousescreen();
};

$.updateLevel = function() {
	if( $.level.kills >= $.level.killsToLevel ) {
		if( $.level.current + 1 < $.levelCount ){
			$.level.current++;
			$.level.kills = 0;
			$.level.killsToLevel = $.definitions.levels[ $.level.current ].killsToLevel;
			$.level.distribution = $.definitions.levels[ $.level.current ].distribution;
			$.level.distributionCount = $.level.distribution.length;
		} else {
			$.level.current++;
			$.level.kills = 0;
			// no more level definitions, so take the last level and increase the spawn rate slightly
			//for( var i = 0; i < $.level.distributionCount; i++ ) {
				//$.level.distribution[ i ] = Math.max( 1, $.level.distribution[ i ] - 5 );
			//}
		}
		$.levelDiffOffset = $.level.current + 1 - $.levelCount;
		$.levelPops.push( new $.LevelPop( {
			level: $.level.current + 1
		} ) );
	}
};

$.updatePowerupTimers = function() {
		// TERMINATOR
	if( $.powerupTimers[ 11 ] > 0 ) {
		$.enemies = [];
		$.audio.play( 'death' );
		$.powerupTimers[ 11 ] -= $.dt;
	}
	
	// HEALTH
	if( $.powerupTimers[ 0 ] > 0 ){
		if( $.hero.life < 1 ) {
			$.hero.life += 0.002;
		}
		if( $.hero.life > 1 ) {
			$.hero.life = 1;
		}
		$.powerupTimers[ 0 ] -= $.dt;
	}
	
    // HEALTH 2
	if( $.powerupTimers[ 8 ] > 0 ){
		if( $.hero.life < 1 ) {
			$.hero.life += 0.002;
		}
		if( $.hero.life > 1 ) {
			$.hero.life = 1;
		}
		$.powerupTimers[ 8 ] -= $.dt;
	}
	
	 // HEALTH 3
	if( $.powerupTimers[ 9 ] > 0 ){
		if( $.hero.life < 1 ) {
			$.hero.life += 0.002;
		}
		if( $.hero.life > 1 ) {
			$.hero.life = 1;
		}
		$.powerupTimers[ 9 ] -= $.dt;
	}
	
	 // HEALTH 4
	if( $.powerupTimers[ 10 ] > 0 ){
		if( $.hero.life < 1 ) {
			$.hero.life += 0.002;
		}
		if( $.hero.life > 1 ) {
			$.hero.life = 1;
		}
		$.powerupTimers[ 10 ] -= $.dt;
	}
	
	// SLOW ENEMIES
	if( $.powerupTimers[ 1 ] > 0 ){
		$.slow = 1;
		$.powerupTimers[ 1 ] -= $.dt;
	} else {
		$.slow = 0;
	}

	// FAST SHOT
	if( $.powerupTimers[ 2 ] > 0 ){
		$.hero.weapon.fireRate = 2;
		$.hero.weapon.bullet.speed = 14;
		$.powerupTimers[ 2 ] -= $.dt;
	} else {
		$.hero.weapon.fireRate = 5;
		$.hero.weapon.bullet.speed = 10;
	}

	 // MULTI SHOT
	 if( $.powerupTimers[ 7 ] > 0 ){
		$.hero.weapon.count = 9;
		$.powerupTimers[ 7 ] -= $.dt;
	}else if( $.powerupTimers[ 6 ] > 0 ){
		$.hero.weapon.count = 7;
		$.powerupTimers[ 6 ] -= $.dt;
	} else if( $.powerupTimers[ 5 ] > 0 ){
		$.hero.weapon.count = 5;
		$.powerupTimers[ 5 ] -= $.dt;
	} else if( $.powerupTimers[ 3 ] > 0 ){
		$.hero.weapon.count = 3;
		$.powerupTimers[ 3 ] -= $.dt;
	}else {
		$.hero.weapon.count = 1;
	}

	// PIERCE SHOT
	if( $.powerupTimers[ 4 ] > 0 ){
		$.hero.weapon.bullet.piercing = 1;
		$.powerupTimers[ 4 ] -= $.dt;
	} else {
		$.hero.weapon.bullet.piercing = 0;
	}
	
	
};	

$.spawnPowerup = function( x, y ) {
	if( Math.random() < 0.1 ) {
		var min = ( $.hero.life < 0.9 ) ? 0 : 1,  
			type_in_stage = Math.floor( $.util.rand( min, $.power_per_stage_list[$.shape].length ) ),
			type = $.definitions.powerups[$.power_per_stage_list[$.shape][type_in_stage]].type,
			params = $.definitions.powerups[ type ];
		//params.type = type;
		params.x = x;
		params.y = y;
		$.powerups.push( new $.Powerup( params ) );
	}
};

/*==============================================================================
States
==============================================================================*/
$.setState = function( state ) {
	// handle clean up between states
	$.buttons.length = 0;

	if( state == 'menu' ) {
		$.mouse.down = 0;		
		$.mouse.ax = 0;
		$.mouse.ay = 0;

		$.reset();
        var smallButton = new $.Button( {
			x: $.cw * 0.90,
			y: $.ch * 0.10,
			lockedWidth: $.cw/8,
			lockedHeight: 49,
			scale: 3,
			title: 'THEME',
			button_img1: $.pause_button,
			button_img2: $.pause_button,
			action: function() {
				$.reset();
				$.audio.play( 'levelup' );
				$.clickDone = 0 ;	
				$.mouse.down = 0;
				$.touch.down = 0;
				$.setState( 'theme' );
			}
		} );
		
		$.buttons.push(smallButton);
		
		var playButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: $.ch / 2 + 120,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 6,
			title: 'P L A Y',
			action: function() {
				$.reset();
				$.audio.play( 'levelup' );
				$.shape = 1;
				$.clickDone = 0 ;	
				$.mouse.down = 0;
				$.touch.down = 0;
				$.setState( 'select_stage' );				
			}
		} );
		$.buttons.push( playButton );

		var statsButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: playButton.ey + 50,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 6,
			title: 'S T A T S',
			action: function() {
				$.audio.play( 'levelup' );
				$.clickDone = 0 ;	
				$.mouse.down = 0;
				$.touch.down = 0;
				$.setState( 'stats' );
				
			}
		} );
		$.buttons.push( statsButton );

		/* var creditsButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: statsButton.ey + 30,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 5,
			title: 'CREDITS',
			action: function() {
				$.setState( 'credits' );
			}
		} ) ;
		$.buttons.push( creditsButton ); */
	}

	if( state == 'stats' ) {
		$.mouse.down = 0;
	
		var clearButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: 426,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'CLEAR DATA',
			action: function() {
				$.mouse.down = 0;				
				//if( window.confirm( 'Are you sure you want to clear all locally stored game data? This cannot be undone.') ) {
					$.clearStorage();
					$.mouse.down = 0;
				//}
			}
		} );
		$.buttons.push( clearButton );

		var menuButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: clearButton.ey + 25,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'MENU',
			action: function() {
				$.setState( 'menu' );
			}
		} );
		$.buttons.push( menuButton );	
	}

	if( state == 'credits' ) {
		$.mouse.down = 0;

		var js13kButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: 476,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'YUTANI ASSISTANCE',
			action: function() {				
				location.href = 'http://yutani.in';
				$.mouse.down = 0;
			}
		} );
		$.buttons.push( js13kButton );

		var menuButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: js13kButton.ey + 25,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'MENU',
			action: function() {
				$.setState( 'menu' );
			}
		} );
		$.buttons.push( menuButton );	
	}

	if( state == 'pause' ) {
		$.mouse.down = 0;
		$.screenshot = $.ctxmg.getImageData( 0, 0, $.cw, $.ch );
		var resumeButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: $.ch / 2 + 26,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'RESUME',
			action: function() {
				$.lt = Date.now() + 1000;
				$.setState( 'play' );
			}
		} );
		$.buttons.push( resumeButton );

		var menuButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: resumeButton.ey + 25,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'MENU',
			action: function() {
				$.mouse.down = 0;
				//if( window.confirm( 'Are you sure you want to end this game and return to the menu?') ) {
					$.mousescreen();
					$.ctxbigbgd.save();
					$.ctxbigbgd.setTransform(1, 0, 0, 1, 0, 0);
					$.ctxbigbgd.clearRect( 0, 0, $.ctxbigbgd.canvas.width, $.ctxbigbgd.canvas.height );
					$.ctxbigbgd.restore();
					$.setState( 'menu' );
				//}			
			}
		} );
		$.buttons.push( menuButton );
	}

	if( state == 'gameover_win' ) {
		$.mouse.down = 0;
	
		$.screenshot = $.ctxmg.getImageData( 0, 0, $.cw, $.ch );
		var resumeButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: 426,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'PLAY NEXT LEVEL', 
			action: function() {
			  $.retry_done_for_stage = 2;
			  $.shape = $.shape + 1;
			  $.clearScreen();
			  $.reset();
			  $.audio.play( 'levelup' );
			  $.hero = new $.Hero();
			  $.space_ship = $.heropics[$.shape];
			  $.setState( 'play' );
			  $.boss = 'notactive';
			  $.perma_power_count = 0; 
			}
		} );
		$.buttons.push( resumeButton );

		var menuButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: resumeButton.ey + 25,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'MENU',
			action: function() {
				$.ctxbigbgd.save();
				$.ctxbigbgd.setTransform(1, 0, 0, 1, 0, 0);
				$.ctxbigbgd.clearRect( 0, 0, $.ctxbigbgd.canvas.width, $.ctxbigbgd.canvas.height );
				$.ctxbigbgd.restore();
				$.setState( 'menu' );
			}
		} );
		$.buttons.push( menuButton );
        
		$.storage['score'] = Math.max( $.storage['score'], $.score );
		$.storage['level'] = Math.max( $.storage['level'], $.level.current );		
		$.storage['rounds'] += 1;
		$.storage['kills'] += $.kills;
		$.storage['bullets'] += $.bulletsFired;
		$.storage['powerups'] += $.powerupsCollected;		
		$.storage['time'] += Math.floor( $.elapsed );
		$.updateStorage();
	}

		if( state == 'gameover' ) {
		$.mouse.down = 0;
	
		$.screenshot = $.ctxmg.getImageData( 0, 0, $.cw, $.ch );
		var resumeButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: 426,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'PLAY AGAIN',
			action: function() {
				$.reset();
				$.retry_done_for_stage++;
				$.audio.play( 'levelup' );
				$.hero = new $.Hero();
			    $.space_ship = $.heropics[$.shape];
				$.setState( 'play' );
				$.boss = 'notactive';
				$.perma_power_count = 0;
			}
		} );
		$.buttons.push( resumeButton );

		var menuButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: resumeButton.ey + 25,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'MENU',
			action: function() {
				$.ctxbigbgd.save();
				$.audio.play( 'levelup' );
				$.ctxbigbgd.setTransform(1, 0, 0, 1, 0, 0);
				$.ctxbigbgd.clearRect( 0, 0, $.ctxbigbgd.canvas.width, $.ctxbigbgd.canvas.height );
				$.ctxbigbgd.restore();
				$.setState( 'menu' );
			}
		} );
		$.buttons.push( menuButton );
		
		var storyButton = new $.Button( {
			x: $.cw / 2 + 1,
			y: resumeButton.ey + 25 + 50,
			lockedWidth: 299,
			lockedHeight: 49,
			scale: 3,
			title: 'READ STORY',
			action: function() {
			   $.audio.play( 'levelup' );
			 try {
					if ($.android == 1)  Android.showStory("showStory");
			    } catch(err) {
                  //do nothing
                }
			}
		} );
		$.buttons.push( storyButton );

		$.storage['score'] = Math.max( $.storage['score'], $.score );
		$.storage['level'] = Math.max( $.storage['level'], $.level.current );		
		$.storage['rounds'] += 1;
		$.storage['kills'] += $.kills;
		$.storage['bullets'] += $.bulletsFired;
		$.storage['powerups'] += $.powerupsCollected;		
		$.storage['time'] += Math.floor( $.elapsed );
		$.updateStorage();
		
		//	if ($.pingala_series.includes($.retry_done_for_stage+1)){
				 try {
					if ($.android == 1)  Android.showToast("toast");
			    } catch(err) {
                  //do nothing
                }
	//	}// end if
	}
	
	if( state == 'play' ) {
		$.mouse.down = 0;		
		//$.mouse.ax = 0;
		//$.mouse.ay = 0;
		
		var moveButton = new $.RndButton( {
			x: $.cw - $.cw * 1,
			y: $.ch * 0.70,
			lockedWidth: $.cw/2.6,
			lockedHeight: 49,
			scale: 3,
			title: 'MOVE',
			action: function() {
			
			}
		} );
		
		$.buttons.push(moveButton);
		
			var dButton = new $.DButton( {
			x: $.cw * 1,
			y: $.ch * 0.70,
			lockedWidth: $.cw/2.6,
			lockedHeight: 49,
			scale: 3,
			title: 'DIR',
			action: function() {
			
				 
			}
		} );
		
		$.buttons.push(dButton);
		
			var smallButton = new $.SmallButton( {
			x: $.cw * 1.05,
			y: $.ch * 0.10,
			lockedWidth: $.cw/12,
			lockedHeight: 49,
			scale: 3,
			title: 'P',
			button_img1: $.pause_button,
			button_img2: $.pause_button,
			action: function() {
			
				  $.setState( 'pause' );
			}
		} );
		
		$.buttons.push(smallButton);
		
			var muteButton = new $.SmallButton( {
			x: $.cw * 1.15,
			y: $.ch * 0.10,
			lockedWidth: $.cw/12,
			lockedHeight: 49,
			scale: 3,
			title: 'M',
			button_img1: $.mute_button,
			button_img2: $.unmute_button,
			action: function() {
			 $.mute = ~~!$.mute;
		     var i = $.audio.references.length;
		     while( i-- ) {
			   $.audio.references[ i ].volume = ~~!$.mute;
		     }
		     $.storage['mute'] = $.mute;
		     $.updateStorage();
			}
		} );
		
		$.buttons.push(muteButton);
		
		var powerButton = new $.PowerButton( {
			x: $.cw - $.cw * 1.05,
			y: $.ch * 0.29,
			lockedWidth: $.cw/12,
			lockedHeight: 49,
			scale: 3,
			title: 'POW',
			button_img1: $.definitions.powerups[$.addon_power_per_stage_list[$.shape]].pic,
			button_img2: $.definitions.powerups[$.addon_power_per_stage_list[$.shape]].pic,
			action: function() {
			
			 if($.perma_power_count<$.perma_power_count_max[$.shape]){
				 $.powerupTimers[ $.definitions.powerups[$.addon_power_per_stage_list[$.shape]].type ] 
				 = $.definitions.powerups[$.addon_power_per_stage_list[$.shape]].timer;
			     $.perma_power_count++;
			 }// end if
			}
		} );
		
		$.buttons.push(powerButton);
		
		var powerButton2 = new $.PowerButton( {
			x: $.cw - $.cw * 1.15,
			y: $.ch * 0.29,
			lockedWidth: $.cw/12,
			lockedHeight: 49,
			scale: 3,
			title: 'POW',
			button_img1: $.definitions.powerups[$.addon_power_per_stage_list_2[$.shape]].pic,
			button_img2: $.definitions.powerups[$.addon_power_per_stage_list_2[$.shape]].pic,
			action: function() {
			
			 if($.perma_power_count<$.perma_power_count_max[$.shape]){
				 $.powerupTimers[ $.definitions.powerups[$.addon_power_per_stage_list_2[$.shape]].type ] 
				 = $.definitions.powerups[$.addon_power_per_stage_list_2[$.shape]].timer;
			     $.perma_power_count++;
			 }// end if
			}
		} );
		
		$.buttons.push(powerButton2);
		
		
	}
	// set state
	$.state = state;
};


	$.logostage = new $.Logostage( {
				action: function() {
				
				}
			} );
	
	$.storystage = new $.Storystage( {
				action: function() {
				
				}
			} );
		
$.setupStates = function() {
	
	$.states['logo'] = function() {
		$.clearScreen();
		$.logostage.render();
		if($.logocounting > 100 ){
			$.setState( 'storystage' );
		}
		
		$.logocounting++;
	}
		
	$.states['storystage'] = function() {
		$.clearScreen();
		$.storystage.render();
		if($.storystagecounting > 200 || $.clickDone ){
			$.setState( 'menu' );
			$.clickDone = 0;
		}
		
		$.storystagecounting++;
	}
	
	$.states['theme'] = function() {
		$.clearScreen();
		$.ctxbg0.clearRect( 0, 0, $.cw, $.ch );
		$.themestage.update();
		$.themestage.render();
	}
	
	$.states['menu'] = function() {
		
		$.clearScreen();
		$.updateScreen();
		$.ctxbg0.fillStyle = $.definitions.theme[$.theme].fillStyle;
	    $.ctxbg0.fillRect( 0, 0, $.cbg0.width, $.cbg0.height );
		$.ctxmg.drawImage($.rr_main, 0, 0, 800, 600);
		
		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }
	
	$.ctxmg.beginPath();
		var title = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: $.ch / 2,
			text: 'YUTANI ASSISTANCE',
			hspacing: 2,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 3,
			snap: 1,
			render: 1
		} );
		gradient = $.ctxmg.createLinearGradient( title.sx, title.sy, title.sx, title.ey );
		gradient.addColorStop( 0, '#fff' );
		gradient.addColorStop( 1, '#999' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();
		
		$.ctxmg.beginPath();
		var title = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: $.ch / 2 + 70,
			text: 'RADIUS RAID',
			hspacing: 2,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		gradient = $.ctxmg.createLinearGradient( title.sx, title.sy, title.sx, title.ey );
		gradient.addColorStop( 0, '#fff' );
		gradient.addColorStop( 1, '#999' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var bottomInfo = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: $.ch - 30,
			text: 'MOBILE VERSION BY JS SUMBRIA',
			hspacing: 1,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 2,
			snap: 1,
			render: 1
		} );
		$.ctxmg.fillStyle = '#888';
		$.ctxmg.fill();
		
		$.ctxmg.beginPath();
		var bottomInfo = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: $.ch - 10,
			text: 'CREATED BY JACK RUGILE',
			hspacing: 1,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 2,
			snap: 1,
			render: 1
		} );
		$.ctxmg.fillStyle = '#888';
		$.ctxmg.fill();

	};
	
	$.states['select_stage'] = function() {
	  $.clearScreen();
	  $.updateScreen();
      $.gamestages.update();
	  $.gamestages.render();
	};

	$.states['stats'] = function() {
		$.clearScreen();

		$.ctxmg.beginPath();
		var statsTitle = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: 150,
			text: 'STATS',
			hspacing: 3,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		var gradient = $.ctxmg.createLinearGradient( statsTitle.sx, statsTitle.sy, statsTitle.sx, statsTitle.ey );
		gradient.addColorStop( 0, '#fff' );
		gradient.addColorStop( 1, '#999' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var statKeys = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 - 10,
			y: statsTitle.ey + 39,
			text: 'BEST SCORE\nBEST LEVEL\nROUNDS PLAYED\nENEMIES KILLED\nBULLETS FIRED\nPOWERUPS COLLECTED\nTIME ELAPSED',
			hspacing: 1,
			vspacing: 17,
			halign: 'right',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var statsValues = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 + 10,
			y: statsTitle.ey + 39,
			text: 
				$.util.commas( $.storage['score'] ) + '\n' + 
				( $.storage['level'] + 1 ) + '\n' + 
				$.util.commas( $.storage['rounds'] ) + '\n' + 
				$.util.commas( $.storage['kills'] ) + '\n' + 
				$.util.commas( $.storage['bullets'] ) + '\n' + 
				$.util.commas( $.storage['powerups'] ) + '\n' + 
				$.util.convertTime( ( $.storage['time'] * ( 1000 / 60 ) ) / 1000 )
			,
			hspacing: 1,
			vspacing: 17,
			halign: 'left',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = '#fff';
		$.ctxmg.fill();
	
		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
	};

	$.states['credits'] = function() {
		$.clearScreen();

		$.ctxmg.beginPath();
		var creditsTitle = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: 100,
			text: 'CREDITS',
			hspacing: 3,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		var gradient = $.ctxmg.createLinearGradient( creditsTitle.sx, creditsTitle.sy, creditsTitle.sx, creditsTitle.ey );
		gradient.addColorStop( 0, '#fff' );
		gradient.addColorStop( 1, '#999' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var creditKeys = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 - 10,
			y: creditsTitle.ey + 49,
			text: 'CREATED FOR JS13KGAMES BY\nINSPIRATION AND SUPPORT\n\nAUDIO PROCESSING\nGAME INSPIRATION AND IDEAS\n\nHTML5 CANVAS REFERENCE\n\nGAME MATH REFERENCE',
			hspacing: 1,
			vspacing: 17,
			halign: 'right',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var creditValues = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 + 10,
			y: creditsTitle.ey + 49,
			text: '@JACKRUGILE\n@REZONER, @LOKTAR00, @END3R,\n@AUSTINHALLOCK, @CHANDLERPRALL\nJSFXR BY @MARKUSNEUBRAND\nASTEROIDS, CELL WARFARE,\nSPACE PIPS, AND MANY MORE\nNIHILOGIC HTML5\nCANVAS CHEAT SHEET\nBILLY LAMBERTA FOUNDATION\nHTML5 ANIMATION WITH JAVASCRIPT',
			hspacing: 1,
			vspacing: 17,
			halign: 'left',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = '#fff';
		$.ctxmg.fill();

		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
	};

	$.states['play'] = function() {
		$.updateDelta();
		$.updateScreen();
		$.updateLevel();
		$.updatePowerupTimers();
		$.spawnEnemies();
		$.enemyOffsetMod += ( $.slow ) ? $.dt / 3 : $.dt;
		if($.doToggleMute == 1 ){
			$.toggleMute();
			$.toggleMute();
			$.doToggleMute = 0;
		}
		// update entities	
		var i = $.enemies.length; while( i-- ){ $.enemies[ i ].update( i ) }
			i = $.explosions.length; while( i-- ){ $.explosions[ i ].update( i ) }
			i = $.powerups.length; while( i-- ){ $.powerups[ i ].update( i ) }
			i = $.particleEmitters.length; while( i-- ){ $.particleEmitters[ i ].update( i ) }
			i = $.textPops.length; while( i-- ){ $.textPops[ i ].update( i ) }
			i = $.levelPops.length; while( i-- ){ $.levelPops[ i ].update( i ) }
			i = $.bullets.length; while( i-- ){ $.bullets[ i ].update( i ) }
		$.hero.update();

		// render entities
		$.clearScreen();
		$.ctxmg.save();
		$.ctxmg.translate( $.screen.x - $.rumble.x, $.screen.y - $.rumble.y );
		i = $.enemies.length; while( i-- ){ $.enemies[ i ].render( i ) }
		i = $.explosions.length; while( i-- ){ $.explosions[ i ].render( i ) }
		i = $.powerups.length; while( i-- ){ $.powerups[ i ].render( i ) }
		i = $.particleEmitters.length; while( i-- ){ $.particleEmitters[ i ].render( i ) }
		i = $.textPops.length; while( i-- ){ $.textPops[ i ].render( i ) }		
		i = $.bullets.length; while( i-- ){ $.bullets[ i ].render( i ) }
		$.hero.render();		
		$.ctxmg.restore();		
		i = $.levelPops.length; while( i-- ){ $.levelPops[ i ].render( i ) }
		$.renderInterface();
		$.renderMinimap();

		// handle gameover
		if( $.hero.life <= 0 ) {
			var alpha = ( ( $.gameoverTick / $.gameoverTickMax ) * 0.8 );
				alpha = Math.min( 1, Math.max( 0, alpha ) );
			$.ctxmg.fillStyle = 'hsla(0, 80%, 20%, ' + alpha + ')';
			$.ctxmg.fillRect( 0, 0, $.cw, $.ch );
			if( $.gameoverTick < $.gameoverTickMax ){				
				$.gameoverTick += $.dt;				
			} else {
				$.setState( 'gameover' );
			}

			if( !$.gameoverExplosion ) {
				$.audio.play( 'death' );
				$.rumble.level = 25;
				$.explosions.push( new $.Explosion( {
					x: $.hero.x + $.util.rand( -10, 10 ),
					y: $.hero.y + $.util.rand( -10, 10 ),
					radius: 50,
					hue: 0,
					saturation: 0
				} ) );
				$.particleEmitters.push( new $.ParticleEmitter( {
					x: $.hero.x,
					y: $.hero.y,
					count: 45,
					spawnRange: 10,
					friction: 0.95,
					minSpeed: 2,
					maxSpeed: 20,
					minDirection: 0,
					maxDirection: $.twopi,
					hue: 0,
					saturation: 0
				} ) );
				for( var i = 0; i < $.powerupTimers.length; i++ ){
					$.powerupTimers[ i ] = 0;
				}
				$.gameoverExplosion = 1;
			}		
		}
		
		// handle on win gameover
		if( $.score >= ($.sc_base + $.shape * $.sc_base / Math.log2($.retry_done_for_stage)) && $.enemies.length==0) {
			var alpha = ( ( $.gameoverTick / $.gameoverTickMax ) * 0.8 );
				alpha = Math.min( 1, Math.max( 0, alpha ) );
			$.ctxmg.fillStyle = 'hsla(300, 100%, 17%, ' + alpha + ')';
			$.ctxmg.fillRect( 0, 0, $.cw, $.ch );
			if( $.gameoverTick < $.gameoverTickMax ){				
				$.gameoverTick += $.dt;				
			} else {
				$.setState( 'gameover_win' );
			}
			
			if( !$.gameoverExplosion ) {
				$.audio.play( 'death' );
				$.rumble.level = 25;
				/*$.explosions.push( new $.Explosion( {
					x: $.hero.x + $.util.rand( -10, 10 ),
					y: $.hero.y + $.util.rand( -10, 10 ),
					radius: 50,
					hue: 0,
					saturation: 0
				} ) ); */
				
				$.particleEmitters.push( new $.ParticleEmitter( {
					x: $.hero.x,
					y: $.hero.y,
					count: 45,
					spawnRange: 10,
					friction: 0.95,
					minSpeed: 2,
					maxSpeed: 20,
					minDirection: 0,
					maxDirection: $.twopi,
					hue: 0,
					saturation: 0
				} ) );
				for( var i = 0; i < $.powerupTimers.length; i++ ){
					$.powerupTimers[ i ] = 0;
				}
				$.gameoverExplosion = 1;
			}		
		}
    	
		// update tick	
		$.tick += $.dt;	
		
		$.enemyboss.render(1);
		var i = $.buttons.length; while( i-- ){
		    $.buttons[ i ].render( i );
		}
		i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
			
	

		// listen for pause
		if( $.keys.pressed.p ){
			$.setState( 'pause' );
		}

		// always listen for autofire toggle
		if( $.keys.pressed.f ){
			$.autofire = ~~!$.autofire;			
			$.storage['autofire'] = $.autofire;
			$.updateStorage();
		}
	};

	$.states['pause'] = function() {
		$.clearScreen();
		$.ctxmg.putImageData( $.screenshot, 0, 0 );

		$.ctxmg.fillStyle = 'hsla(0, 0%, 0%, 0.4)';
		$.ctxmg.fillRect( 0, 0, $.cw, $.ch );

		$.ctxmg.beginPath();
		var pauseText = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: $.ch / 2 - 50,
			text: 'PAUSED',
			hspacing: 3,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		var gradient = $.ctxmg.createLinearGradient( pauseText.sx, pauseText.sy, pauseText.sx, pauseText.ey );
		gradient.addColorStop( 0, '#fff' );
		gradient.addColorStop( 1, '#999' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }

		if( $.keys.pressed.p ){
			$.setState( 'play' );
		}
	};

	$.states['gameover'] = function() {
		$.clearScreen();
		$.ctxmg.putImageData( $.screenshot, 0, 0 );
		

		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }

		$.ctxmg.beginPath();
		var gameoverTitle = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: 150,
			text: 'GAME OVER',
			hspacing: 3,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		var gradient = $.ctxmg.createLinearGradient( gameoverTitle.sx, gameoverTitle.sy, gameoverTitle.sx, gameoverTitle.ey );
		gradient.addColorStop( 0, '#f22' );
		gradient.addColorStop( 1, '#b00' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var gameoverStatsKeys = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 - 10,
			y: gameoverTitle.ey + 51,
			text: 'SCORE\nLEVEL\nKILLS\nBULLETS\nPOWERUPS\nTIME',
			hspacing: 1,
			vspacing: 17,
			halign: 'right',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var gameoverStatsValues = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 + 10,
			y: gameoverTitle.ey + 51,
			text: 
				$.util.commas( $.score ) + '\n' + 
				( $.level.current + 1 ) + '\n' + 
				$.util.commas( $.kills ) + '\n' + 
				$.util.commas( $.bulletsFired ) + '\n' + 
				$.util.commas( $.powerupsCollected ) + '\n' + 
				$.util.convertTime( ( $.elapsed * ( 1000 / 60 ) ) / 1000 )
			,
			hspacing: 1,
			vspacing: 17,
			halign: 'left',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = '#fff';
		$.ctxmg.fill();
	};
	
	$.states['gameover_win'] = function() {
		$.clearScreen();
		$.ctxmg.putImageData( $.screenshot, 0, 0 );
		
		if($.shape == $.storage['openStages']) {
			$.storage['openStages'] += 1;
			$.storage['currentStage'] += 1;
			$.updateStorage();
		}
		
		$.openstages = $.storage['openStages'];
	    $.currentstage = $.storage['currentStage'];

		$.gamestages.update(-1);
		
		var i = $.buttons.length; while( i-- ){ $.buttons[ i ].update( i ) }
			i = $.buttons.length; while( i-- ){ $.buttons[ i ].render( i ) }

		$.ctxmg.beginPath();
		var gameoverTitle = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2,
			y: 150,
			text: 'YOU WIN',
			hspacing: 3,
			vspacing: 1,
			halign: 'center',
			valign: 'bottom',
			scale: 10,
			snap: 1,
			render: 1
		} );
		var gradient = $.ctxmg.createLinearGradient( gameoverTitle.sx, gameoverTitle.sy, gameoverTitle.sx, gameoverTitle.ey );
		gradient.addColorStop( 0, '#f22' );
		gradient.addColorStop( 1, '#b00' );
		$.ctxmg.fillStyle = gradient;
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var gameoverStatsKeys = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 - 10,
			y: gameoverTitle.ey + 51,
			text: 'SCORE\nLEVEL\nKILLS\nBULLETS\nPOWERUPS\nTIME',
			hspacing: 1,
			vspacing: 17,
			halign: 'right',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 0.5)';
		$.ctxmg.fill();

		$.ctxmg.beginPath();
		var gameoverStatsValues = $.text( {
			ctx: $.ctxmg,
			x: $.cw / 2 + 10,
			y: gameoverTitle.ey + 51,
			text: 
				$.util.commas( $.score ) + '\n' + 
				( $.level.current + 1 ) + '\n' + 
				$.util.commas( $.kills ) + '\n' + 
				$.util.commas( $.bulletsFired ) + '\n' + 
				$.util.commas( $.powerupsCollected ) + '\n' + 
				$.util.convertTime( ( $.elapsed * ( 1000 / 60 ) ) / 1000 )
			,
			hspacing: 1,
			vspacing: 17,
			halign: 'left',
			valign: 'top',
			scale: 2,
			snap: 1,
			render: 1
		} );		
		$.ctxmg.fillStyle = '#fff';
		$.ctxmg.fill();
	};
}

/*==============================================================================
Loop
==============================================================================*/
$.loop = function() {
	requestAnimFrame( $.loop );

	// setup the pressed state for all keys
	for( var k in $.keys.state ) {
		if( $.keys.state[ k ] && !$.okeys[ k ] ) {
			$.keys.pressed[ k ] = 1;
		} else {
			$.keys.pressed[ k ] = 0;
		}
	}

   // $.mousemovecb();
	// run the current state
	$.states[ $.state ]();

	// always listen for mute toggle
	if( $.keys.pressed.m ){
		$.mute = ~~!$.mute;
		var i = $.audio.references.length;
		while( i-- ) {
			$.audio.references[ i ].volume = ~~!$.mute;
		}
		$.storage['mute'] = $.mute;
		$.updateStorage();
	}

	// move current keys into old keys
	$.okeys = {};
	for( var k in $.keys.state ) {
		$.okeys[ k ] = $.keys.state[ k ];
	}
};


$.toggleMute = function() {
	$.mute = ~~!$.mute;
	var i = $.audio.references.length;
	while( i-- ) {
		$.audio.references[ i ].volume = ~~!$.mute;
	}
	$.storage['mute'] = $.mute;
	$.updateStorage();
}
/*=======================================================================
========================================================================*/

$.initPowersForSatges = function(){
	$.rr_main = new Image();
	$.rr_main.src = 'js/pics/rr_main.png';
	
	$.addon_power_per_stage_list = [2,2,2,2,2,3,3,3,3,3,7,7,7,7,7,4,4,4,4,4,
	                                5,5,5,5,5,11,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
									3,3,3,3,3,3,3,3,3,3,11,3,3,3,3,3,3,3,3,3,
									5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,11,5,5,5,5,
									6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,11];
									
	$.addon_power_per_stage_list_2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	                                  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
									  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
									  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
									  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
									
	$.rrat_per_stage_list        = [15,13,13,13,17,13,13,13,13,16,13,13,13,13,14                            ,13,13,13,13,16,
	                                13,13,13,13,14,13,13,13,13,15,13,13,13,13,15,13,13,13,13,15,
									13,13,13,13,14,13,13,13,13,14,13,13,13,13,14,13,13,13,13,16,
									13,13,13,13,16,13,13,13,13,15,13,13,13,13,14,13,13,13,13,15,
									13,13,13,13,16,13,13,13,13,15,13,13,13,13,16,13,13,13,13,17];
									
	$.enemy_per_stage_pic_list   = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,
	                                4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,
									8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,
									12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15,
									16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19];
	
	$.RRAT_0004 = new Image();
	$.RRAT_0004.src = 'js/pics/RRAT-0004.png';
	
	$.RRAT_0009 = new Image();
	$.RRAT_0009.src = 'js/pics/RRAT-0009.png';
	
	$.RRAT_0014 = new Image();
	$.RRAT_0014.src = 'js/pics/RRAT-0014.png';
	
	$.RRAT_0019 = new Image();
	$.RRAT_0019.src = 'js/pics/RRAT-0019.png';
	
	$.RRAT_0024 = new Image();
	$.RRAT_0024.src = 'js/pics/RRAT-0024.png';
	
	$.RRAT_0029 = new Image();
	$.RRAT_0029.src = 'js/pics/RRAT-0029.png';
	
	$.RRAT_0034 = new Image();
	$.RRAT_0034.src = 'js/pics/RRAT-0034.png';
	
	$.RRAT_0039 = new Image();
	$.RRAT_0039.src = 'js/pics/RRAT-0039.png';
	
	$.RRAT_0044 = new Image();
	$.RRAT_0044.src = 'js/pics/RRAT-0044.png';
	
	$.RRAT_0049 = new Image();
	$.RRAT_0049.src = 'js/pics/RRAT-0049.png';
	
	$.RRAT_0054 = new Image();
	$.RRAT_0054.src = 'js/pics/RRAT-0054.png';
	
	$.RRAT_0059 = new Image();
	$.RRAT_0059.src = 'js/pics/RRAT-0059.png';

	
	$.rrat_per_stage_pic_list     = [$.RRAT_0004,null,null,null,$.RRAT_0004,null,null,null,null,$.RRAT_0009,null,null,null,null,$.RRAT_0014,null,null,null,null,$.RRAT_0019,
	                                null,null,null,null,$.RRAT_0024,null,null,null,null,$.RRAT_0029,null,null,null,null,$.RRAT_0034,null,null,null,null,$.RRAT_0039,
									null,null,null,null,$.RRAT_0044,null,null,null,null,$.RRAT_0049,null,null,null,null,$.RRAT_0054,null,null,null,null,$.RRAT_0059,
									null,null,null,null,$.RRAT_0024,null,null,null,null,$.RRAT_0029,null,null,null,null,$.RRAT_0034,null,null,null,null,$.RRAT_0039,
									null,null,null,null,$.RRAT_0044,null,null,null,null,$.RRAT_0049,null,null,null,null,$.RRAT_0054,null,null,null,null,$.RRAT_0059];

	$.power_per_stage_list = [];
	$.power_per_stage_list[0] = [0,1,2,3,4];
	$.power_per_stage_list[1] = [0,1,2,3,4];
	$.power_per_stage_list[2] = [0,1,2,3,4];
	$.power_per_stage_list[3] = [0,1,2,3,4];
	$.power_per_stage_list[4] = [0,1,2,3,4];
	$.power_per_stage_list[5] = [0,1,2,3,4];
	$.power_per_stage_list[6] = [0,1,2,3,4];
	$.power_per_stage_list[7] = [0,1,2,3,4];
	$.power_per_stage_list[8] = [0,1,2,3,4];
	$.power_per_stage_list[9] = [0,1,2,3,4];
	$.power_per_stage_list[10] = [0,1,2,3,4];
	$.power_per_stage_list[11] = [0,1,2,3,4];
	$.power_per_stage_list[12] = [0,1,2,3,4];
	$.power_per_stage_list[13] = [0,1,2,3,4];
	$.power_per_stage_list[14] = [0,1,2,3,4];
	$.power_per_stage_list[15] = [0,1,2,3,4];
	$.power_per_stage_list[16] = [0,1,2,3,4];
	$.power_per_stage_list[17] = [0,1,2,3,4];
	$.power_per_stage_list[18] = [0,1,2,3,4];
	$.power_per_stage_list[19] = [0,1,2,3,4];
	$.power_per_stage_list[20] = [0,1,2,3,4];
	$.power_per_stage_list[21] = [0,1,2,3,4];
	$.power_per_stage_list[22] = [0,1,2,3,4];
	$.power_per_stage_list[23] = [0,1,2,3,4];
	$.power_per_stage_list[24] = [0,1,2,3,4];
	$.power_per_stage_list[25] = [8,1,2,5,4];
	$.power_per_stage_list[26] = [8,1,2,5,4];
	$.power_per_stage_list[27] = [8,1,2,5,4];
	$.power_per_stage_list[28] = [8,1,2,5,4];
	$.power_per_stage_list[29] = [8,1,2,5,4];
	$.power_per_stage_list[30] = [8,1,2,5,4];
	$.power_per_stage_list[31] = [8,1,2,5,4];
	$.power_per_stage_list[32] = [8,1,2,5,4];
	$.power_per_stage_list[33] = [8,1,2,5,4];
	$.power_per_stage_list[34] = [8,1,2,5,4];
	$.power_per_stage_list[35] = [8,1,2,5,4];
	$.power_per_stage_list[36] = [8,1,2,5,4];
	$.power_per_stage_list[37] = [8,1,2,5,4];
	$.power_per_stage_list[38] = [8,1,2,5,4];
	$.power_per_stage_list[39] = [8,1,2,5,4];
	$.power_per_stage_list[40] = [8,1,2,5,4];
	$.power_per_stage_list[41] = [8,1,2,5,4];
	$.power_per_stage_list[42] = [8,1,2,5,4];
	$.power_per_stage_list[43] = [8,1,2,5,4];
	$.power_per_stage_list[44] = [8,1,2,5,4];
	$.power_per_stage_list[45] = [8,1,2,5,4];
	$.power_per_stage_list[46] = [8,1,2,5,4];
	$.power_per_stage_list[47] = [8,1,2,5,4];
	$.power_per_stage_list[48] = [8,1,2,5,4];
	$.power_per_stage_list[49] = [8,1,2,5,4];
	$.power_per_stage_list[50] = [9,1,2,6,4];
	$.power_per_stage_list[51] = [9,1,2,6,4];
	$.power_per_stage_list[52] = [9,1,2,6,4];
	$.power_per_stage_list[53] = [9,1,2,6,4];
	$.power_per_stage_list[54] = [9,1,2,6,4];
	$.power_per_stage_list[55] = [9,1,2,6,4];
	$.power_per_stage_list[56] = [9,1,2,6,4];
	$.power_per_stage_list[57] = [9,1,2,6,4];
	$.power_per_stage_list[58] = [9,1,2,6,4];
	$.power_per_stage_list[59] = [9,1,2,6,4];
	$.power_per_stage_list[60] = [9,1,2,6,4];
	$.power_per_stage_list[61] = [9,1,2,6,4];
	$.power_per_stage_list[62] = [9,1,2,6,4];
	$.power_per_stage_list[63] = [9,1,2,6,4];
	$.power_per_stage_list[64] = [9,1,2,6,4];
	$.power_per_stage_list[65] = [9,1,2,6,4];
	$.power_per_stage_list[66] = [9,1,2,6,4];
	$.power_per_stage_list[67] = [9,1,2,6,4];
	$.power_per_stage_list[68] = [9,1,2,6,4];
	$.power_per_stage_list[69] = [9,1,2,6,4];
	$.power_per_stage_list[70] = [9,1,2,6,4];
	$.power_per_stage_list[71] = [9,1,2,6,4];
	$.power_per_stage_list[72] = [9,1,2,6,4];
	$.power_per_stage_list[73] = [9,1,2,6,4];
	$.power_per_stage_list[74] = [9,1,2,6,4];
	$.power_per_stage_list[75] = [10,1,2,7,4];
	$.power_per_stage_list[76] = [10,1,2,7,4];
	$.power_per_stage_list[77] = [10,1,2,7,4];
	$.power_per_stage_list[78] = [10,1,2,7,4];
	$.power_per_stage_list[79] = [10,1,2,7,4];
	$.power_per_stage_list[80] = [10,1,2,7,4];
	$.power_per_stage_list[81] = [10,1,2,7,4];
	$.power_per_stage_list[82] = [10,1,2,7,4];
	$.power_per_stage_list[83] = [10,1,2,7,4];
	$.power_per_stage_list[84] = [10,1,2,7,4];
	$.power_per_stage_list[85] = [10,1,2,7,4];
	$.power_per_stage_list[86] = [10,1,2,7,4];
	$.power_per_stage_list[87] = [10,1,2,7,4];
	$.power_per_stage_list[88] = [10,1,2,7,4];
	$.power_per_stage_list[89] = [10,1,2,7,4];
	$.power_per_stage_list[90] = [10,1,2,7,4];
	$.power_per_stage_list[91] = [10,1,2,7,4];
	$.power_per_stage_list[92] = [10,1,2,7,4];
	$.power_per_stage_list[93] = [10,1,2,7,4];
	$.power_per_stage_list[94] = [10,1,2,7,4];
	$.power_per_stage_list[95] = [10,1,2,7,4];
	$.power_per_stage_list[96] = [10,1,2,7,4];
	$.power_per_stage_list[97] = [10,1,2,7,4];
	$.power_per_stage_list[98] = [10,1,2,7,4];
	$.power_per_stage_list[99] = [10,1,2,7,4];
	
	$.perma_power_count_max=[];
	$.perma_power_count_max[0] =2;
	$.perma_power_count_max[1] =2
	$.perma_power_count_max[2] =2
	$.perma_power_count_max[3] =4
	$.perma_power_count_max[4] =4
	$.perma_power_count_max[5] =2
	$.perma_power_count_max[6] =2
	$.perma_power_count_max[7] =2
	$.perma_power_count_max[8] =4
	$.perma_power_count_max[9] =4
	$.perma_power_count_max[10]=2
	$.perma_power_count_max[11]=2
	$.perma_power_count_max[12]=2
	$.perma_power_count_max[13]=4
	$.perma_power_count_max[14]=4
	$.perma_power_count_max[15]=2
	$.perma_power_count_max[16]=2
	$.perma_power_count_max[17]=2
	$.perma_power_count_max[18]=4
	$.perma_power_count_max[19]=4
	$.perma_power_count_max[20]=2
	$.perma_power_count_max[21]=2
	$.perma_power_count_max[22]=2
	$.perma_power_count_max[23]=4
	$.perma_power_count_max[24]=4
	$.perma_power_count_max[25]=2
	$.perma_power_count_max[26]=2
	$.perma_power_count_max[27]=2
	$.perma_power_count_max[28]=4
	$.perma_power_count_max[29]=4
	$.perma_power_count_max[30]=2
	$.perma_power_count_max[31]=2
	$.perma_power_count_max[32]=2
	$.perma_power_count_max[33]=4
	$.perma_power_count_max[34]=4 
	$.perma_power_count_max[35]=2
	$.perma_power_count_max[36]=2
	$.perma_power_count_max[37]=2
	$.perma_power_count_max[38]=4
	$.perma_power_count_max[39]=4
	$.perma_power_count_max[40]=2
	$.perma_power_count_max[41]=2
	$.perma_power_count_max[42]=2
	$.perma_power_count_max[43]=4
	$.perma_power_count_max[44]=4
	$.perma_power_count_max[45]=2
	$.perma_power_count_max[46]=2
	$.perma_power_count_max[47]=2
	$.perma_power_count_max[48]=4
	$.perma_power_count_max[49]=4
	$.perma_power_count_max[50]=2
	$.perma_power_count_max[51]=2
	$.perma_power_count_max[52]=2
	$.perma_power_count_max[53]=4
	$.perma_power_count_max[54]=4
	$.perma_power_count_max[55]=2
 	$.perma_power_count_max[56]=2
	$.perma_power_count_max[57]=2
    $.perma_power_count_max[58]=4
    $.perma_power_count_max[59]=4
	$.perma_power_count_max[60]=2
	$.perma_power_count_max[61]=2
	$.perma_power_count_max[62]=2
	$.perma_power_count_max[63]=4
	$.perma_power_count_max[64]=4
	$.perma_power_count_max[65]=2
	$.perma_power_count_max[66]=2
	$.perma_power_count_max[67]=2
	$.perma_power_count_max[68]=4
	$.perma_power_count_max[69]=4
	$.perma_power_count_max[70]=2
	$.perma_power_count_max[71]=2
	$.perma_power_count_max[72]=2
	$.perma_power_count_max[73]=4
	$.perma_power_count_max[74]=4
	$.perma_power_count_max[75]=2
	$.perma_power_count_max[76]=2
	$.perma_power_count_max[77]=2
	$.perma_power_count_max[78]=4
	$.perma_power_count_max[79]=4
	$.perma_power_count_max[80]=2
	$.perma_power_count_max[81]=2
	$.perma_power_count_max[82]=2
	$.perma_power_count_max[83]=4
	$.perma_power_count_max[84]=4
	$.perma_power_count_max[85]=2
	$.perma_power_count_max[86]=2
	$.perma_power_count_max[87]=2
	$.perma_power_count_max[88]=4
	$.perma_power_count_max[89]=4
	$.perma_power_count_max[90]=2
	$.perma_power_count_max[91]=2
	$.perma_power_count_max[92]=2
	$.perma_power_count_max[93]=4
	$.perma_power_count_max[94]=4
	$.perma_power_count_max[95]=2
	$.perma_power_count_max[96]=2
	$.perma_power_count_max[97]=2
	$.perma_power_count_max[98]=4
	$.perma_power_count_max[99]=4
				   
}//end function
						   
/*===============================================================================
Start Game on Load         
==============================================================================*/
window.addEventListener( 'load', function() {
	document.documentElement.className += ' loaded';
	$.init();              
});                        
 