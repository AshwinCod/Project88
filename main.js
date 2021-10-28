var canvas = new fabric.Canvas("myCanvas");
ball_x = 10;
ball_y = 10;
hole_y = 400;
hole_x = 600;
hole_width = 40;
hole_height = 40;

hole_object = "";
ball_object = "";

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object = Img;
		hole_object.scaleToWidth(40);
		hole_object.scaleToHeight(40);
		hole_object.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_object = Img;
		ball_object.scaleToWidth(30);
		ball_object.scaleToHeight(30);
		ball_object.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if((ball_x==hole_x)&&(ball_y==hole_y)){
			console.log("hole_x"+ ball_y);
			canvas.remove(ball_object);
			document.getElementById("hd3").innerHTML = "You Have Hit the goal!";
			document.getElementById("myCanvas").style.borderColor = "red";
		}
	}

	function up()
	{
		if(ball_y >= 20){
			ball_y = ball_y - 10;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		 if(ball_y <= 550){
			 ball_y = ball_y + 10;
			 canvas.remove(ball_object);
			 new_image();
		 }
	}

	function left()
	{
		if(ball_x >= 20)
		{
			ball_x = ball_x - 10;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=750)
		{
			ball_x = ball_x + 10;
			canvas.remove(ball_object);
			new_image();
		}
	}