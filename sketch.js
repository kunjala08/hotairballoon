var balloon;
var database;
var position;
var balloonImage2
function preload(){
balloonImage2=loadImage("pro-C35+images/pro-C35 images/Hot Air Balloon-02.png")
}
function setup() {
  database = firebase.database();
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  var Balloonposition = database.ref('ball/position')
  Balloonposition.on("value",readHeight,showError)
}

function draw() {
  background(255,205,255);
  if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addImage(balloonImage2);
    balloon.scale=balloon.scale-0.01;
  }  
  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x' : height.x + x,
    'y' : height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}
function showError(){
  console.log("Error in writing to the databse")
}