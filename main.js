status="";

function preload(){
    video=createVideo('');
    video.hide();
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, 380, 480);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}