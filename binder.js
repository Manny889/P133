status="";
binderImage="";

function preload(){
binderImage = loadImage("Binder.jpg");    
}
function setup(){
canvas = createCanvas(640, 420);
canvas.position(315, 200); 
object_Detector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects";    
}
function modelLoaded(){
console.log("Model Loaded!");
status = true;
object_Dectector.detect(binderImage, gotResult);
}
function gotResult(results,error){
if (error) {
console.log(error);    
} 
console.log(error);    
}
function draw(){
image(binderImage,0,0,640,350); 
fill("#FF0000");
text("Binder", 45, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);   
}