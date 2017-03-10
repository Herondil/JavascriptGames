var backgroundSprite = {
	Step		 	: 0,
	animationSpeed		 	: 0.11,
	imagex             		 	: 209,
	imagey              		 	: 22,
	marginTopPlusHeight 	: 249,
	loadImage                    : function(){
		var img = new Image(780, 2570);
		img.src= "KOF03_Town (1).png";
		this.img = img;
	},
	Draw                            : function(){
		ctx.drawImage(this.img,
								this.imagex,
								this.imagey+this.marginTopPlusHeight*(Math.floor(this.Step))
								,320,224,0,0,320,224);
	},
	Animate                        : function(){
		if (this.Step  >= 7){
			this.Step  = 0;
		}
		this.Step += this.animationSpeed;
	}
}