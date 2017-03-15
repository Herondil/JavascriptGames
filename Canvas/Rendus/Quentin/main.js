/* Initialisation Canvas*/
var canvas = document.createElement('CANVAS');
canvas.width 	= 	1920;
canvas.height	=	1080;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');	



//automatisation affichage sprites
var spriteToDraw = [];
spriteToDraw.push(backgroundSprite);
spriteToDraw.push(shipSprite);		

//chargement des sprites
for (var i = 0; i < spriteToDraw.length; i++) {
	spriteToDraw[i].loadImage
}

//début du jeu
MainLoop();

function MainLoop(){	
	for (var i = 0; i < spriteToDraw.length; i++) {
	spriteToDraw[i].Draw();
	}
	setTimeout(MainLoop,1000/60);
}