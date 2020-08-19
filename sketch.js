
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/* function preload() {

} */

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player1 = new Player(10, 200, 50, 50);
	ground = new Ground(500, 380, 1000, 20);
	ground2= new Ground(500, 400, 1000, 20);
	post = new Post(800, 360, 200, 400);

	obstacle1 = new Ground(250,330,50,120);
	obstacle2 = new Ground(100,270,50,240);
	obstacle3 = new Ground(400,280,50,220);
	obstacle4 = new Ground(550,330,50,120);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	player1.display();
	player1.move();
	player1.gameEnd();
	ground.display();
	ground2.display();
	post.display();

	obstacle1.display();
	obstacle2.display();
	obstacle3.display();
	obstacle4.display();

	fill(0);
	text("Press the right, up and down arrow key to control the game ", 350,20);

	drawSprites();

}



