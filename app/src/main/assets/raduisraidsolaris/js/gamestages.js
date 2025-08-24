
/*==============================================================================
Init
==============================================================================*/

$.GameStages = function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}

  for(var i=0, j=0; i<=49; i++,j=j+2) {
	 $.heropics[j] = new Image();
	 $.heropics[j].src = 'js/pics/ships/hero_' + i + '.svg';
	 $.heropics[j+1] = new Image();
	 $.heropics[j+1].src = 'js/pics/ships/hero_' + i + '.svg';
  }

	
	this.scrollCenter = 0;

	this.stagebuttons = [];
	for( var i = 0; i < 100; i++ ){
		
		var sBtn = new $.StageButton( {
			x: $.cw - $.cw * 0.50,
			y: $.ch * 0.70 - i*150,
			lockedWidth: $.cw/5,
			lockedHeight: 49,
			scale: 8,
			title: '' +i,
			shape:i,
			action: function(shape) {
			  $.shape = shape;
			  $.clearScreen();
			  $.reset();
			  $.audio.play( 'levelup' );
			  $.hero = new $.Hero();
			  
			 /* var min = Math.ceil(1);
              var max = Math.floor(36);
			  var ship_no =    Math.floor(Math.random() * (max - min + 1)) + min; 
			  if(ship_no > 36) ship_no =36;
			  $.set_ship_no = ship_no;*/
				  
			  $.space_ship = $.heropics[shape];
			  $.setState( 'play' );
			}
		} );
		
		this.stagebuttons.push( sBtn );	
	}
	
	this.currentstage = $.currentstage;
	this.openstages = $.openstages;
	for( var i = 0; i <= this.openstages; i++ ){
		this.stagebuttons[i].isEnabled = true;
	}
	
	for( var i = 0; i < 100; i++ ){
		this.stagebuttons[i].cy = this.stagebuttons[i].cy + (2*this.openstages - i) * 150;
		this.stagebuttons[i].sy  = this.stagebuttons[i].sy + (2*this.openstages - i) * 150;;
	}
	
	//var basePositionSY = this.stagebuttons[0].sy;
	//var basePositionCY = this.stagebuttons[0].cy;
	
};


/*==============================================================================
Update
==============================================================================*/

$.GameStages.prototype.update = function( i ) {
	
	if(i == -1) {
		this.stagebuttons = [];
		for( var i = 0; i < 100; i++ ){
		
		var sBtn = new $.StageButton( {
			x: $.cw - $.cw * 0.50,
			y: $.ch * 0.70 - i*150,
			lockedWidth: $.cw/5,
			lockedHeight: 49,
			scale: 8,
			title: '' +i,
			shape:i,
			action: function(shape) {
			  $.shape = shape;
			  $.clearScreen();
			  $.reset();
			  $.audio.play( 'levelup' );
			  $.hero = new $.Hero();
			  
			  /*var min = Math.ceil(1);
              var max = Math.floor(36);
			  var ship_no =    Math.floor(Math.random() * (max - min + 1)) + min; 
			  if(ship_no > 36) ship_no =36;
			  $.set_ship_no = ship_no;*/
			  
			  $.space_ship = $.heropics[shape];
			  $.setState( 'play' );
			}
		} );
		
		this.stagebuttons.push( sBtn );	
	}
	
	this.currentstage = $.currentstage;
	this.openstages = $.openstages;
	for( var i = 0; i <= this.openstages; i++ ){
		this.stagebuttons[i].isEnabled = true;
	}
	
	for( var i = 0; i < 100; i++ ){
		this.stagebuttons[i].cy = this.stagebuttons[i].cy + (2*this.openstages - i) * 150;
		this.stagebuttons[i].sy  = this.stagebuttons[i].sy + (2*this.openstages - i) * 150;;
	}
	}
	/*==============================================================================
	Check Hover State
	==============================================================================*/
	if($.tstart != null && $.tend != null ) {
	  if ($.tstart.pageY && $.tend.pageY) {
                if($.tstart.pageY - $.tend.pageY < 0 ){
					this.scrollCenter =  30;
				} else if ($.tstart.pageY - $.tend.pageY >= 0) {
					this.scrollCenter =  -30;
				}
      }
	}
	
    if ( 400 > this.stagebuttons[ 0].cy - 30 && this.scrollCenter < 0) {
        this.scrollCenter = 0;
    }
	
	var i = this.stagebuttons.length; while( i-- ){ this.stagebuttons[ i ].sy  = this.stagebuttons[ i ].sy + 	this.scrollCenter;
				this.stagebuttons[ i ].cy  = this.stagebuttons[ i ].cy +	this.scrollCenter ; }
		this.scrollCenter = 0;
		
	//	$.tstart = null ;
		$.tend = null;
		
		  var i = this.stagebuttons.length; while( i-- ){ this.stagebuttons[ i ].update( -1 )}
};

/*==============================================================================
Render
==============================================================================*/
$.GameStages.prototype.render = function( i ) {	

          var ctx = $.ctxbg0;

	
		  ctx.globalCompositeOperation = 'destination-over';
		  ctx.clearRect(0, 0, $.cbg0.width, $.cbg0.height); // clear canvas
		
          ctx.fillStyle = $.definitions.theme[$.theme].fillStyle;
	      ctx.fillRect( 0, 0, $.cbg0.width, $.cbg0.height );
	
		  $.ctxmg.fillStyle = $.definitions.theme[$.theme].fillStyleShadow;
		  $.ctxmg.strokeStyle = $.definitions.theme[$.theme].strokeStyleOrbit;

		 // Earth
		  var time = new Date();
		  var mercury_orbit =100;
		  var venus_orbit = 150;
		  var earth_orbit = 200;
		  var mars_orbit  = 300;
		  var jupiter_orbit = 400;
		  var saturn_orbit = 550;
		  var uranus_orbit = 650;
		  var neptune_orbit = 725;
		  var pluto_orbit = 825;
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, mercury_orbit, 0, Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, venus_orbit, 0, Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, earth_orbit, 0, Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, mars_orbit, 0, Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, jupiter_orbit, 0, Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, saturn_orbit, 0 , Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		 
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, uranus_orbit, 0 , Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, neptune_orbit, 0 , Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.arc(0, 0, pluto_orbit, 0 , Math.PI * 2, false); // Earth orbit
		  $.ctxmg.stroke();
		  
		  $.ctxmg.beginPath();
		  $.ctxmg.stroke();
		  
		  $.ctxmg.drawImage($.sun, -40, -40, 100, 100);
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(0.25 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(mercury_orbit, 0);
		  $.ctxmg.drawImage($.mercury, -12, -12);
		  $.ctxmg.fillRect(0, -12, 40, 24); // Shadow
		  $.ctxmg.restore();
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(0.5 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(venus_orbit, 0);
		  $.ctxmg.drawImage($.venus, -12, -12);
		  $.ctxmg.fillRect(0, -12, 40, 24); // Shadow
		  $.ctxmg.restore();
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(0.75 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(mars_orbit, 0);
		  $.ctxmg.drawImage($.mars, -12, -12);
		  $.ctxmg.fillRect(0, -12, 40, 24); // Shadow
		  $.ctxmg.restore();
		  /*
		  $.ctxmg.save();
		  $.ctxmg.rotate(1 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(jupiter_orbit, 0);
		  $.ctxmg.drawImage($.jupitor, -50, -50);
		  $.ctxmg.fillRect(0, -50, 50, 100); // Shadow
		  $.ctxmg.restore();
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(1.25 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(saturn_orbit, 0);
		  $.ctxmg.drawImage($.saturn, -70, -70);
		  $.ctxmg.fillRect(0, -70, 70, 120); // Shadow
		  $.ctxmg.restore(); */
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(1.5 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(uranus_orbit, 0);
		  $.ctxmg.drawImage($.uranus, -30, -30);
		  $.ctxmg.fillRect(0, -30, 30, 60); // Shadow
		  $.ctxmg.restore();
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(1.75 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(neptune_orbit, 0);
		  $.ctxmg.drawImage($.neptune, -30, -30);
		  $.ctxmg.fillRect(0, -30, 30, 60); // Shadow
		  $.ctxmg.restore();
		   
		  $.ctxmg.save();
		  $.ctxmg.rotate(2 * Math.PI + ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(pluto_orbit, 0);
		  $.ctxmg.drawImage($.pluto, -10, -10);
		  $.ctxmg.fillRect(0, -10, 10, 20); // Shadow
		  $.ctxmg.restore();
		  
		  $.ctxmg.save();
		  $.ctxmg.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		  $.ctxmg.translate(earth_orbit, 0);
		  $.ctxmg.drawImage($.earth, -12, -12);
		  $.ctxmg.fillRect(0, -12, 40, 24); // Shadow

		  // Moon
		  $.ctxmg.save();
		  $.ctxmg.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
		  $.ctxmg.translate(0, 28.5);
		  $.ctxmg.drawImage($.moon, -3.5, -3.5);
		  $.ctxmg.restore();

		  $.ctxmg.restore();

			for( var i = 0; i < this.stagebuttons.length; i++ ){
				//this.stagebuttons[ i ].sy  = this.stagebuttons[ i ].sy;
				//this.stagebuttons[ i ].cy  = this.stagebuttons[ i ].cy;
				if(this.stagebuttons[ i ].cy < -200) continue;
				if(this.stagebuttons[ i ].cy >1200) continue;
				if(i<$.enemy_list_size+77){
				if(i+1<this.stagebuttons.length) {
						$.ctxmg.strokeStyle = 'hsla(0, 0%, 0%, 0.4)';
						$.ctxmg.lineWidth = 6;
						$.ctxmg.moveTo(this.stagebuttons[ i ].cx, this.stagebuttons[ i ].cy);
		                $.ctxmg.lineTo(this.stagebuttons[ i+1 ].cx, this.stagebuttons[ i + 1].cy);
		                $.ctxmg.stroke();
						$.ctxmg.strokeStyle = 'hsla(0, 0%, 100%, 0.2)';
						$.ctxmg.lineWidth = 1;
				}
				
				this.stagebuttons[ i ].render( i );
				
				
				if(i<$.heropics.length){
						$.ctxmg.drawImage($.heropics[i], this.stagebuttons[ i ].cx - 100, this.stagebuttons[ i ].cy - this.stagebuttons[ i ].lockedWidth-25, 100, 100);  
				}
				
				//if(i<$.enemy_list_size){
					if($.rrat_per_stage_pic_list[i] != null){
					    $.ctxmg.drawImage($.rrat_per_stage_pic_list[i], this.stagebuttons[ i ].cx-50, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth-25, 100, 100);  
					    var mod = time.getMilliseconds() / 60;
						$.ctxmg.strokeStyle = this.strokeStyle;
						$.ctxmg.lineWidth = 6;
						$.ctxmg.beginPath();
						$.ctxmg.arc(this.stagebuttons[ i ].cx, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth + 25, 70, mod + $.pi, mod + $.pi + $.pi / 2 );		
						$.ctxmg.stroke();
						$.ctxmg.beginPath();
						$.ctxmg.arc( this.stagebuttons[ i ].cx, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth+25, 70, mod, mod + $.pi / 2 );		
						$.ctxmg.stroke();
				     	$.ctxmg.lineWidth = 1;
					}
				//}
				
				//if(i<$.enemy_list_size){
					$.ctxmg.drawImage($.enemy_pic_list[$.enemy_per_stage_pic_list[i]], this.stagebuttons[ i ].cx-25, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth, 50, 50);  
					    var mod = time.getMilliseconds() / 60;
						$.ctxmg.strokeStyle = this.strokeStyle;
						$.ctxmg.lineWidth = 6;
						$.ctxmg.beginPath();
						$.ctxmg.arc(this.stagebuttons[ i ].cx, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth + 25, 35, mod + $.pi, mod + $.pi + $.pi / 2 );		
						$.ctxmg.stroke();
						$.ctxmg.beginPath();
						$.ctxmg.arc( this.stagebuttons[ i ].cx, this.stagebuttons[ i ].cy - 2*this.stagebuttons[ i ].lockedWidth+25, 35, mod, mod + $.pi / 2 );		
						$.ctxmg.stroke();
						$.ctxmg.lineWidth = 1;
				//}
				
			
				
				 
				//$.ctxmg.drawImage($.definitions.powerups[$.power_per_stage_list[i][$.power_per_stage_list[$.shape].length-1]].pic, this.stagebuttons[ i ].cx+25, this.stagebuttons[ i ].cy - this.stagebuttons[ i ].lockedWidth, 50, 50); 

                $.ctxmg.drawImage($.definitions.powerups[$.addon_power_per_stage_list[i]].pic, this.stagebuttons[ i ].cx+25, this.stagebuttons[ i ].cy - this.stagebuttons[ i ].lockedWidth, 50, 50); 

				$.ctxmg.beginPath();
				$.text( {
					ctx: $.ctxmg,
					x:  this.stagebuttons[ i ].cx + 25, 
					y:  this.stagebuttons[ i ].cy - this.stagebuttons[ i ].lockedWidth+10, 
					text: $.perma_power_count_max[i] + '' ,
					hspacing: 1,
					vspacing: 0,
					halign: 'center',
					valign: 'center',
					scale: 3,
					snap: 0,
					render: true
				} );
				$.ctxmg.fillStyle = 'hsla(0, 0%, 100%, 1)';
				$.ctxmg.strokeStyle = 'hsla(0, 0%, 100%, 1)';
				$.ctxmg.fill();
				
				if(i<$.power_per_stage_list.length){
					for( var k = 0; k < $.power_per_stage_list[$.shape].length; k++ ){
					$.ctxmg.drawImage($.definitions.powerups[$.power_per_stage_list[i][k]].pic, this.stagebuttons[ i ].cx - $.power_per_stage_list[$.shape].length*40/2 + k*40, this.stagebuttons[ i ].cy - this.stagebuttons[ i ].lockedWidth-60, 30, 30); 
					}
				 }//end if
				}// end if
				
				
				
			}
			
			this.scrollCenter = 0;

};