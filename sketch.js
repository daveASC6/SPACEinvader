
class Ship{
    constructor(x,y, speed, width, height, color){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    moveLeft(){
        this.x -= this.speed;
    }
    moveRight(){
        this.x += this.speed;
    }

    drawShip(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height); 
    }
}

class Bullet{
    constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    create(){
        circle(this.x,this.y, 10);
    }

    travel(){
        this.y -= this.speed;
        circle(this.x,this.y, 10);
    }

}
// objects 
let player = new Ship(250, 450, 15, 100, 50, "blue");
let playerTwo = new Ship(100, 300, 30, 50, 100, "red");
let bullets = [];

function setup(){
    createCanvas(500,500);
    background("gray");
    player.drawShip();
    playerTwo.drawShip();
}

function draw(){
    clear();
    background("gray"); 
    refreshShip();
    refreshBullets();
}

function refreshShip(){
    player.drawShip();
    if (keyIsDown(LEFT_ARROW)){
        player.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)){
        player.moveRight();
    }
}

function refreshBullets(){
    for (let i = 0; i < 10; i++){
        bullets[i].travel();
        if (bullets[i] < 0){
            bullets.pop();
        }
    }
// make bullet
     if (keyCode == 32){
        shot = new Bullet(player.x, player.y-25, 5);
        bullets.push(shot);
        keyCode = undefined;
    }
}
