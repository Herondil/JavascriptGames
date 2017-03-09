/* Initialisation Canvas*/
var canvas = document.createElement('CANVAS');
canvas.width 	= 	320;
canvas.height	=	224
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');				

backgroundSprite.loadImage();
kyoSprite.loadImage();
MainLoop();

function MainLoop(){	
	backgroundSprite.Draw();
	kyoSprite.Draw();
	backgroundSprite.Animate();
	setTimeout(MainLoop,1000/60);
}