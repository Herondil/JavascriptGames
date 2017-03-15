var shipSprite = {
	width		:43,
	height		:28,
	x			:-50,
	y			:750,
	speed		:4,
	zoom		:5,
	dezoomSpeed	:0.02,

	Animate		:function(){
		this.x += this.speed;
		if(this.x>512){
			this.speed = 0;
		}
		if (this.zoom <= 0) {
			this.dezoomSpeed = 0;
		}
		this.zoom-+this.dezoomSpeed;
	},

	loadImage	:function(){
		var img = new Image(this.width,this.height);
		img.src = "spaceship.gif";
		this.img = img;
	},
	Draw		:function(){
		ctx.save();
		ctx.scale(this.zoom,this.zoom);
		// ctx.rotate(30*Math.PI/180)
		ctx.translate(0,-100)
		ctx.drawImage(this.img,this.x,this.y);
		ctx.restore();
	}
};