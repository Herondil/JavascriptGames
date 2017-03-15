var kyoSprite = {
	nbFirstStep					: 0,
	nbStep							: 9,
	Step		 						: 0,
	animationSpeed		 	: 0.1,
	imagex             		 	: 0,
	imagey              		 	: 11,
	width                            : 72,
	heigth                           : 102,
	x                                  : 30,
	y                                  : 110,
	marginLeftPluswidth 		: 75,
	loadImage                    : function(){
		var img = new Image(1818, 10225);
		img.src= "kyo.png";
		this.img = img;
	},
	Draw                            : function(){
		//console.log(Math.round(this.Step))
		ctx.drawImage(this.img,
								this.imagex+this.marginLeftPluswidth*(Math.round(this.Step)),
								this.imagey,
								this.width,this.heigth,this.x,this.y,this.width,this.heigth  );
	},
	Animate                        : function(){
		if (this.Step  >= this.nbStep){
			this.Step  = this.nbFirstStep;
		}
		this.Step += this.animationSpeed;
	}
}