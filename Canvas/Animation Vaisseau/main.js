/* Initialisation Canvas*/
var canvas = document.createElement('CANVAS');
canvas.width 	= 	1024;
canvas.height	=	512;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');				

//chargement des sprites
backgroundSprite.loadImage();

//début du jeu
MainLoop();

function MainLoop(){	
	backgroundSprite.Draw();
	backgroundSprite.Animate();
	setTimeout(MainLoop,1000/60);
}