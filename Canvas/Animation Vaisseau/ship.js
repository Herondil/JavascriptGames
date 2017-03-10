var shipSprite = {
	
	
	width                       :43,
	height						:28,
	x							:-50,
	y							:250,
	speed                       :10,
	zoom					 	:13,
	angle					 	:30,
	dezoomSpeed				 	:98,
	angleSpeed					:-0.4,
	
	Animate					    :function(){
		//animation de la position
		if(this.x>712){
			this.speed = 0;
		}
		this.x += this.speed;
		//piste pour le déplacement en courbe
		//this.y = (Math.sqrt(this.x))*-1+50;
		
		//Animation du zoom
		if(this.zoom <= 0){
			this.dezoomSpeed = 0
		}
		
		//Le zoom doit diminuer de X% à chaque fois
		this.zoom = (this.zoom/100)*this.dezoomSpeed
		
		//animation de l'angle de la rotation
		if(this.angle >= 60){
			this.angleSpeed = 0
		}
		this.angle +=this.angleSpeed;
	},
	loadImage                    : function(){
		var img = new Image(this.width, this.height);
		img.src= "blueFalcon.png";
		this.img = img;
		
	},
	Draw                            : function(){
		
		ctx.save();
		
		//quand on change le contexte, on change de repère (au sens mathématique du terme)
		/*ici, il y a trois changement de repère consécutifs :
			- Une translation (pour se mettre au centre du sprite)
			- Un zoom
			- Une rotation
			
			Si x et y sont les coordonnées du vaisseau dans le premier repère
			il faut calculer x_1, y_1, les nouvelles coordonnées dans le nouveau repère après la translation
			-> C'est la formulte de la translation
			Ensuite, il faut calculer x_2, y_2 les nouvelles coordonées après la rotation (à partir de x1 et y1)
			-> La formule est liée à la rotation plane (voir page wikipedia)
			Enfin, il faut trouver x_3 et y_3, les nouvelles coordonnées après le zoom (à partir de x2 et y2)
			-> Il suffit de diviser par le zoom
		*/
		
		
		
		ctx.translate(-1*(this.width/2),-1*(this.height/2));
		var 	x_1 = this.x + -1*(this.width/2),
				y_1 = this.y + -1*(this.height/2);
		
		
		ctx.rotate(this.angle*Math.PI/180);	
		var 	x_2 = x_1*Math.cos(this.angle*Math.PI/180) + y_1*Math.sin(this.angle*Math.PI/180),
				y_2 = x_1*Math.sin(this.angle*Math.PI/180)*-1 + y_1*Math.cos(this.angle*Math.PI/180);
		
		ctx.scale(this.zoom,this.zoom);
		var 	x_3 = x_2/this.zoom,
				y_3 = y_2/this.zoom;
		
		ctx.drawImage(this.img,x_3,y_3);
									
		ctx.restore();
	}
};
