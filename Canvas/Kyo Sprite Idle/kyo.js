var kyoSprite = {
	Step		 						: 0,
	animationSpeed		 	: 0.11,
	imagex             		 	: 0,
	imagey              		 	: 13,
	width                            : 69,
	heigth                           : 102,
	x                                  : 30,
	y                                  : 110,
	marginLeftPluswidth 		: 249,
	loadImage                    : function(){
		var img = new Image(1818, 10225);
		img.src= "kyo.png";
		this.img = img;
	},
	Draw                            : function(){
		ctx.drawImage(this.img,
								this.imagex,
								this.imagey+this.marginLeftPluswidth*(Math.floor(this.Step))
								,this.width,this.heigth,this.x,this.y,this.width,this.heigth  );
	},
	Animate                        : function(){
		if (this.Step  >= 9){
			this.Step  = 0;
		}
		this.Step += this.animationSpeed;
	}
}