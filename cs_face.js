var surprise = false;
var eyeHeight = 300;
var mouthSize = 20;

function setup() {
 	createCanvas(570, 600);
}

function draw() {
    background("#c2c2d6");
    //draw face
    stroke(0);
    strokeWeight(6);
    fill("#3d3d5c");
    ellipse(275,300,450,400);
    //draw eyes, using variable
    line(150, 250, 200, eyeHeight);
    line(450, 250, 400, eyeHeight);
    
    noStroke()
    fill("black");
   
     ellipse(325, 375, mouthSize, mouthSize);
    if(surprise === false){
        //set value of variables
        mouthSize = 40;
        eyeHeight = 300;
   } else if(surprise === true){
       mouthSize = 125;
       eyeHeight = 220;
   }
    fill(0);
    text("Press face to toggle emotion!", 200, 550);
}

function mousePressed(){
    //set surprise to reverse of current state
    surprise = !surprise;
    //console.log(surprise);
}
