function displayText() {
    displayFps();
    displayAttractMessage();
    displayScore();
    displayLives();
}

var frameCount = 0, frameRate = 0, elapsedTime = 0, oldTime = Date.now();
function displayFps() {

	elapsedTime += Date.now() - oldTime;
	if (elapsedTime > 1000) {
		elapsedTime = 0;
		frameRate = frameCount;
		frameCount = -1;
	}

	ctx.fillStyle = "white";
 	ctx.font = "8px Arial";
 	var text = frameRate + " fps";
    var textWidth = ctx.measureText(text).width;
  	ctx.fillText(text, (canvas.width / 2) - textWidth/2, 10);
	oldTime  = Date.now();
	frameCount++;
}

function displayAttractMessage() {
    if (gameState == "attract") {
        setColor();
        ctx.fillStyle = "blue";
        ctx.font = "40px Verdana";
        var text = "Neontroids";
        ctx.fillText(text, (canvas.width / 2) - ctx.measureText(text).width/2, canvas.height / 2 - 50);

        ctx.fillStyle = "yellow";
        ctx.font = "25px Verdana";
        var text2 = "Press Enter to Play";
        ctx.fillText(text2, (canvas.width / 2) - ctx.measureText(text2).width/2, (canvas.height / 2));

        ctx.fillStyle = "#cccccc";
        ctx.font = "15px Verdana";
        var text2 = "Cursor keys to move, Space to fire";
        ctx.fillText(text2, (canvas.width / 2) - ctx.measureText(text2).width/2, (canvas.height / 2) + 30);

        ctx.font = "15px Verdana";
        text2 = "or Z & X to rotate, N fire, M thrust";
        ctx.fillText(text2, (canvas.width / 2) - ctx.measureText(text2).width/2, (canvas.height / 2) + 60);
  	}
}

function displayScore() {
        setColor();
        ctx.font = "18px Verdana";
        var text = "Score: " + score;
        ctx.fillText(text, 5, 18);
}

function displayLives() {
        setColor();
        ctx.font = "18px Verdana";
        var text = "Lives: " + lives;
        ctx.fillText(text, canvas.width - ctx.measureText(text).width - 5, 18);
}

function setColor() {
    ctx.fillStyle = "white";
    ctx.shadowColor = "#0000ff";
}
