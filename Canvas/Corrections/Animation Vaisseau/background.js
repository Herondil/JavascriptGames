var backgroundSprite = {
	Step		 	: 0,
	animationSpeed		 	: 0.11,
	imagex             		 	: 0,
	imagey              		 	: 0,
	marginTopPlusHeight 	: 0,
	width                            :1024,
	height							 :512,
	loadImage                    : function(){
		var img = new Image(780, 2570);
		img.src= "StarField.png";
		this.img = img;
		
	},
	Draw                            : function(){
		ctx.drawImage(this.img,
								this.imagex,
								this.imagey+this.marginTopPlusHeight*(Math.floor(this.Step))
								,this.width,this.height,0,0,this.width,this.height);
	},
	Animate                        : function(){
		if (this.Step  >= 7){
			this.Step  = 0;
		}
		this.Step += this.animationSpeed;
	}
}