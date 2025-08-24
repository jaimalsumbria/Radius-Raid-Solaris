
/*==============================================================================
Init
==============================================================================*/
$.EnemyBoss = function( opt ) {
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

};


/*==============================================================================
Update
==============================================================================*/

$.EnemyBoss.prototype.update = function( i ) {
	
};

/*==============================================================================
Render
==============================================================================*/
$.EnemyBoss.prototype.render = function( i ) {	
	
                    var time = new Date()
	//if(i<$.enemy_list_size){
					if($.rrat_per_stage_pic_list[$.shape] != null){
					    $.ctxbigbgd.drawImage($.rrat_per_stage_pic_list[$.shape], this.cx-70, this.cy-10, 80, 80);  
					    var mod = time.getMilliseconds() / 60;
						$.ctxbigbgd.strokeStyle = $.ctxmg.strokeStyle;
						$.ctxbigbgd.lineWidth = 6;
						$.ctxbigbgd.beginPath();
						$.ctxbigbgd.arc(this.cx-30, this.cy + 30, 60, mod + $.pi, mod + $.pi + $.pi / 2 );		
						$.ctxbigbgd.stroke();
						$.ctxbigbgd.beginPath();
						$.ctxbigbgd.arc( this.cx-30, this.cy + 30, 60, mod, mod + $.pi / 2 );		
						$.ctxbigbgd.stroke();
				     	$.ctxbigbgd.lineWidth = 1;
					}
				//}
				
				//if(i<$.enemy_list_size){
					$.ctxbigbgd.drawImage($.enemy_pic_list[$.enemy_per_stage_pic_list[$.shape]], this.cx-50, this.cy+10, 40, 40);  
					    var mod = time.getMilliseconds() / 60;
						$.ctxbigbgd.strokeStyle = $.ctxmg.strokeStyle;
						$.ctxbigbgd.lineWidth = 6;
						$.ctxbigbgd.beginPath();
						$.ctxbigbgd.arc(this.cx-30, this.cy+30, 30, mod + $.pi, mod + $.pi + $.pi / 2 );		
						$.ctxbigbgd.stroke();
						$.ctxbigbgd.beginPath();
						$.ctxbigbgd.arc( this.cx-30, this.cy+30, 30, mod, mod + $.pi / 2 );		
						$.ctxbigbgd.stroke();
						$.ctxbigbgd.lineWidth = 1;
				//}
	
};