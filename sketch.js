var snake;
var edges;

function preload() {
    bgimg = loadImage("grass.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    snake = createSprite(20,20,30,30);
    edges = createEdgeSprites();
}

function draw() {
    background(bgimg);
    snake.shapeColor = "purple";
    if (gameState == PLAY){
        if (keyIsDown(LEFT_ARROW)){
            snake.velocityX = -5;
            snake.velocityY = 0;
        }
        if (keyIsDown(RIGHT_ARROW)){
            snake.velocityX = 5;
            snake.velocityY = 0;
        }
        if (keyIsDown(UP_ARROW)){
            snake.velocityY = -5;
            snake.velocityX = 0;
        }
        if (keyIsDown(DOWN_ARROW)){
            snake.velocityY = 5;
            snake.velocityX = 0;
        }

        snake.collide(edges);
        if(snake.collide(edges)){
            gameState == END; 
        }
    }
    if (gameState == END){
        
    }
    drawSprites();
}