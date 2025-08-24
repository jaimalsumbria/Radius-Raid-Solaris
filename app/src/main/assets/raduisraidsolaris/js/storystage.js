
/*==============================================================================
Init
==============================================================================*/
var logo = new Image();
			  
var part_y = "AN ADVANCED ALIEN RACE FROM ANOTHER GALAXY\n\
 WANTS TO DESTROY OUR GALAXY THE MILKY WAY.\n\
 NO INTELLIGENT LIFE FROM OUR GALAXY HAS ANY\n\
 MEANS TO STOP THIS FROM HAPPENING. WE DON'T\n\
 EVEN HAVE CAPABILITY TO GET TO THE OTHER\n\
 GALAXY. CAPTAIN 'M', WHO IS ON A MARITIME\n\
 MISSION TO FAR SIDE OF THE GALAXY IS ACCIDENTALLY\n\
 CAUGHT INTO A DARK REALM CALLED MAYA WHERE HE FOUND\n\
 A PORTAL TO OTHER GALAXY. THIS GIVES HIM A UNIQUE\n\
 OPPORTUNITY TO LEAD A MISSION AND SABOTAGE HOSTILE\n\
 ALIEN INFRASTRUCTURE  WHICH IS BEING USED FOR\n\
 DESTROYING AND EXTRACTING  ENERGY FROM OUR GALAXY.\n\
 CAPTAIN 'M' HAS TO NAVIGATE THROUGH VARIOUS\n\
 HURDLES AND ILLUSIONS CREATED BY MAYA TO \n\
 SURVIVE AND REACH OTHER GALAXY.";
			  		
	$.privateKey="-----BEGIN RSA PRIVATE KEY-----\
	MIICXgIBAAKBgQDHikastc8+I81zCg/qWW8dMr8mqvXQ3qbPAmu0RjxoZVI47tvs\
	kYlFAXOf0sPrhO2nUuooJngnHV0639iTTEYG1vckNaW2R6U5QTdQ5Rq5u+uV3pMk\
	7w7Vs4n3urQ6jnqt2rTXbC1DNa/PFeAZatbf7ffBBy0IGO0zc128IshYcwIDAQAB\
	AoGBALTNl2JxTvq4SDW/3VH0fZkQXWH1MM10oeMbB2qO5beWb11FGaOO77nGKfWc\
	bYgfp5Ogrql4yhBvLAXnxH8bcqqwORtFhlyV68U1y4R+8WxDNh0aevxH8hRS/1X5\
	031DJm1JlU0E+vStiktN0tC3ebH5hE+1OxbIHSZ+WOWLYX7JAkEA5uigRgKp8ScG\
	auUijvdOLZIhHWq7y5Wz+nOHUuDw8P7wOTKU34QJAoWEe771p9Pf/GTA/kr0BQnP\
	QvWUDxGzJwJBAN05C6krwPeryFKrKtjOGJIniIoY72wRnoNcdEEs3HDRhf48YWFo\
	riRbZylzzzNFy/gmzT6XJQTfktGqq+FZD9UCQGIJaGrxHJgfmpDuAhMzGsUsYtTr\
	iRox0D1Iqa7dhE693t5aBG010OF6MLqdZA1CXrn5SRtuVVaCSLZEL/2J5UcCQQDA\
	d3MXucNnN4NPuS/L9HMYJWD7lPoosaORcgyK77bSSNgk+u9WSjbH1uYIAIPSffUZ\
	bti+jc1dUg5wb+aeZlgJAkEAurrpmpqj5vg087ZngKfFGR5rozDiTsK5DceTV97K\
	a3Y+Nzl+XWTxDBWk4YPh2ZlKv402hZEfWBYxUDn5ZkH/bw==\
	-----END RSA PRIVATE KEY-----";
	$.publicKey="-----BEGIN PUBLIC KEY-----\
	MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHikastc8+I81zCg/qWW8dMr8m\
	qvXQ3qbPAmu0RjxoZVI47tvskYlFAXOf0sPrhO2nUuooJngnHV0639iTTEYG1vck\
	NaW2R6U5QTdQ5Rq5u+uV3pMk7w7Vs4n3urQ6jnqt2rTXbC1DNa/PFeAZatbf7ffB\
	By0IGO0zc128IshYcwIDAQAB\
	-----END PUBLIC KEY-----";


$.Storystage = function( opt ) {
	for( var k in opt ) {
		this[k] = opt[k];
	}
   logo.src = 'yutani2.png';
	
	this.scrollCenter = 0;
             
    //var encrypt = new JSEncrypt();
    //encrypt.setPublicKey($.publicKey);
    //var encrypted = encrypt.encrypt(part_y);
    //var decrypt = new JSEncrypt();
    //decrypt.setPrivateKey($.privateKey);
   // var uncrypted = decrypt.decrypt(encrypted);               

};


/*==============================================================================
Update
==============================================================================*/

$.Storystage.prototype.update = function( i ) {
	/*==============================================================================
	Check Hover State
	==============================================================================*/

};

/*==============================================================================
Render
==============================================================================*/
$.Storystage.prototype.render = function( i ) {		
		  
	$.ctxbg0.fillStyle = $.definitions.theme[$.theme].fillStyle;
	$.ctxbg0.fillRect( 0, 0, $.cw, $.ch );
	
	$.text( {
		ctx: $.ctxbg0,
		x: $.cbg0.width/2,
		y: $.cbg0.height/2-220,
		text: part_y,
		hspacing: 2,
		vspacing: 16,
		halign: 'center',
		valign: 'top',
		scale: 2.3,
		snap: 1,
		render: true
	} );
	
	//$.ctxbg0.fillStyle = 'hsla(0, 0%, 100%, 0.7)';
	//$.ctxbg0.fill();
		 
$.text( {
		ctx: $.ctxbg0,
		x: $.cbg0.width/2,
		y: $.cbg0.height/2+250,
		text: "*** TOUCH TO SKIP READING ***",
		hspacing: 2,
		vspacing: 16,
		halign: 'center',
		valign: 'top',
		scale: 1.6,
		snap: 1,
		render: true
	} );
	
	$.ctxbg0.fillStyle = 'hsla(0, 100%, 100%, 1)';
	$.ctxbg0.fill();
	
	
};


