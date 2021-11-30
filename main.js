status1 = "";
img = "";
objects = [] ;
function preload() {

img = loadImage("dog_cat.jpg")

}
function setup() {

Canvas = createCanvas(600,400)
Canvas.center();
ObjectDetector = ml5.objectDetector('cocossd',modelloaded)
}
function draw() {
image(img,0,0,600,400); 
if (status1 == "" )
{
    
for(i=0;i < objects.length;i++){

fill(255,0,0);
stroke(255,0,0);
noFill();
text(objects[i].label,objects[i].x + 10,objects[i].y + 10);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);




}

}

}
function modelloaded() {

console.log("cocssd");
status1 = true;
ObjectDetector.detect(img,gotResult);

}
function gotResult(result,error) {

if (error) 
{

console.log(error);

} else {

console.log(result); 
objects =  result; 

}

}