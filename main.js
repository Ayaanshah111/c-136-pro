video="";
status="";
function preload(){
video=createVideo();
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,480,380);
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting-objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
}
